import { useEffect, useState } from 'react'

// Reflete a preferência de acessibilidade do sistema operacional
// (prefers-reduced-motion). Usado para simplificar animações do Framer
// Motion — não é usado para desligar os efeitos de background/cursor do
// desktop, que devem continuar sempre ativos ali (decisão de produto).
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}
