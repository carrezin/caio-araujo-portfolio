import { useCallback, useEffect, useRef, useState } from 'react'

// Detecta qual seção está mais visível no viewport para destacar o item de
// navegação ativo. Retorna [activeId, selectId] — selectId permite que um
// clique no menu marque a seção como ativa imediatamente, sem esperar o
// IntersectionObserver confirmar (evita o menu parecer "travado").
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0])
  const manualIdRef = useRef(null)

  useEffect(() => {
    const observedIds = new Set()

    // A decisão de "qual seção está ativa" é sempre recalculada a partir da
    // posição geométrica ATUAL de cada seção (getBoundingClientRect), em vez
    // de depender de um histórico acumulado de entradas/saídas do
    // IntersectionObserver. Isso evita que uma notificação de "saída"
    // perdida (comum em rolagens longas e rápidas, como pular do Início
    // direto para o Contato) deixe uma seção antiga "presa" como ativa.
    // A linha de referência (~40% do topo do viewport) é coerente com o
    // rootMargin do observer abaixo.
    const pickActiveByPosition = () => {
      const line = window.innerHeight * 0.4
      let candidate = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= line && rect.bottom >= line) {
          candidate = id // em caso de empate, a seção mais abaixo vence
        }
      }
      return candidate
    }

    const recompute = () => {
      const next = pickActiveByPosition()
      if (!next) return
      // Enquanto um clique recente ainda está "reivindicando" uma seção
      // (durante o scroll suave até ela), ignora outras seções que passem
      // pela faixa de detecção no meio do caminho.
      if (manualIdRef.current && manualIdRef.current !== next) return
      manualIdRef.current = null
      setActiveId(next)
    }

    // O IntersectionObserver serve só como "gatilho de recálculo" — a cada
    // mudança de interseção de qualquer seção observada, recomputamos a
    // ativa do zero pela geometria atual (ver comentário acima).
    const intersectionObserver = new IntersectionObserver(recompute, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0,
    })

    // Tenta observar todas as seções que já existem no DOM agora.
    const observeAvailable = () => {
      ids.forEach((id) => {
        if (observedIds.has(id)) return
        const el = document.getElementById(id)
        if (el) {
          intersectionObserver.observe(el)
          observedIds.add(id)
        }
      })
      return observedIds.size === ids.length
    }

    const allFound = observeAvailable()

    // Seções abaixo do Hero chegam via React.lazy/Suspense e podem montar
    // depois deste efeito já ter rodado — sem isso, o observer nunca chega
    // a "ver" essas seções e o menu fica preso no primeiro item. Um
    // MutationObserver garante que elas entrem em observação assim que
    // aparecerem no DOM, parando sozinho quando todas forem encontradas.
    let mutationObserver
    if (!allFound) {
      mutationObserver = new MutationObserver(() => {
        if (observeAvailable() && mutationObserver) {
          mutationObserver.disconnect()
        }
      })
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      intersectionObserver.disconnect()
      if (mutationObserver) mutationObserver.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  const selectId = useCallback((id) => {
    manualIdRef.current = id
    setActiveId(id)
    // Libera a marcação manual depois do tempo aproximado de um scroll
    // suave, devolvendo o controle normal ao IntersectionObserver.
    window.setTimeout(() => {
      if (manualIdRef.current === id) manualIdRef.current = null
    }, 900)
  }, [])

  // Navega via JS (scrollIntoView) em vez de deixar o link <a href="#id">
  // fazer a rolagem nativa do navegador. `scroll-margin-top` (classe
  // scroll-mt-24 nas seções) é respeitado por scrollIntoView normalmente,
  // então o offset do header fixo continua correto.
  const scrollToSection = useCallback(
    (id) => {
      selectId(id)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [selectId]
  )

  return [activeId, scrollToSection]
}
