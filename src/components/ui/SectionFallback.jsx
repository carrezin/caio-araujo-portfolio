import React from 'react'

// Fallback discreto para Suspense: sem layout quebrado (altura mínima
// reservada) e sem animações pesadas — só um spinner simples.
const SectionFallback = () => (
  <div className="min-h-[240px] flex items-center justify-center" aria-hidden="true">
    <span className="w-8 h-8 rounded-full border-2 border-accent-cyan/25 border-t-accent-cyan animate-spin" />
  </div>
)

export default SectionFallback
