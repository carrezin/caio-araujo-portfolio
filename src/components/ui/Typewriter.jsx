import React, { useEffect, useRef, useState } from 'react'

const PHASE = {
  TYPING: 'typing',
  PAUSING: 'pausing',
  DELETING: 'deleting',
  WAITING: 'waiting',
}

// Efeito de digitar/apagar alternando entre frases. Reescrito a partir de um
// componente de referência que tinha um bug real: o setTimeout que iniciava
// a exclusão (agendado dentro do próprio callback do timer principal) nunca
// era limpo no cleanup do useEffect — em unmounts/trocas de estado rápidas,
// esse timer "solto" podia disparar depois do componente desmontar, e nada
// impedia dois timers coexistirem. Aqui existe só UM setTimeout por vez,
// sempre limpo pelo cleanup do useEffect antes do próximo agendamento.
const Typewriter = ({
  words,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseDuration = 2200,
  nextWordDelay = 350,
  cursorChar = '|',
  reducedMotion = false,
}) => {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState(PHASE.TYPING)
  const mountedRef = useRef(true)

  const currentWord = words[wordIndex] || ''

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    // prefers-reduced-motion: nenhum timer é criado — a frase estática já é
    // renderizada diretamente no JSX abaixo (primeira palavra completa).
    if (reducedMotion) return

    const delay =
      phase === PHASE.TYPING
        ? typingSpeed
        : phase === PHASE.PAUSING
          ? pauseDuration
          : phase === PHASE.DELETING
            ? deletingSpeed
            : nextWordDelay // PHASE.WAITING

    const timer = window.setTimeout(() => {
      if (!mountedRef.current) return

      if (phase === PHASE.TYPING) {
        if (charIndex < currentWord.length) {
          setCharIndex((c) => c + 1)
        } else {
          setPhase(PHASE.PAUSING)
        }
      } else if (phase === PHASE.PAUSING) {
        setPhase(PHASE.DELETING)
      } else if (phase === PHASE.DELETING) {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1)
        } else {
          setPhase(PHASE.WAITING)
        }
      } else if (phase === PHASE.WAITING) {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase(PHASE.TYPING)
      }
    }, delay)

    // Único ponto de limpeza: sempre cancela o timer anterior antes de
    // agendar o próximo (ou ao desmontar), então nunca há dois rodando.
    return () => window.clearTimeout(timer)
  }, [phase, charIndex, currentWord, words, typingSpeed, deletingSpeed, pauseDuration, nextWordDelay, reducedMotion])

  const displayText = reducedMotion ? words[0] || '' : currentWord.substring(0, charIndex)

  return (
    <>
      {displayText}
      {!reducedMotion && (
        <span className="typewriter-cursor" aria-hidden="true">
          {cursorChar}
        </span>
      )}
    </>
  )
}

export default Typewriter
