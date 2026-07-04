import useIsMobile from './useIsMobile'
import useReducedMotion from './useReducedMotion'

// Combinação geral de "dispositivo modesto" (mobile/touch) OU preferência
// por menos movimento. Útil para decisões genéricas de UI leve.
// Os efeitos "sagrados" do desktop (ParticleBackground, CursorGlow) usam
// useIsMobile diretamente em vez deste hook — ver PROJECT_CONTEXT.md.
export default function usePerformanceMode() {
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()
  return isMobile || reducedMotion
}
