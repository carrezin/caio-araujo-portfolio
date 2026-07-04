import { useEffect, useState } from 'react'

// Verdadeiro para telas pequenas OU dispositivos sem cursor de precisão (touch).
// Usado para decidir qual VERSÃO de um efeito visual pesado renderizar
// (ex.: canvas de partículas vs. background estático). Independente de
// prefers-reduced-motion — ver PROJECT_CONTEXT.md para o porquê dessa separação.
const QUERY = '(max-width: 767px), (pointer: coarse)'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
