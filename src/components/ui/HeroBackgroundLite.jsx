import React from 'react'

// Versão leve do background do Hero para mobile/touch: nada de canvas,
// requestAnimationFrame ou listeners de mouse — só CSS estático (gradientes
// radiais pontuais simulando a "constelação" + blobs suaves), pintado uma
// única vez pelo navegador. Mantém o Hero visualmente vivo sem custo de CPU/GPU.
const HeroBackgroundLite = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full bg-accent-purple/20 blur-2xl" />
    <div className="absolute top-[55%] right-[10%] w-40 h-40 rounded-full bg-accent-cyan/15 blur-2xl" />
    <div className="absolute bottom-[12%] left-[28%] w-28 h-28 rounded-full bg-accent-blue/20 blur-2xl" />
    <div
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: [
          'radial-gradient(1.5px 1.5px at 20% 25%, rgba(200,150,255,0.7) 1px, transparent 0)',
          'radial-gradient(1.5px 1.5px at 62% 12%, rgba(96,165,250,0.7) 1px, transparent 0)',
          'radial-gradient(2px 2px at 82% 55%, rgba(34,211,238,0.6) 1px, transparent 0)',
          'radial-gradient(1.5px 1.5px at 32% 72%, rgba(200,150,255,0.6) 1px, transparent 0)',
          'radial-gradient(1.5px 1.5px at 90% 82%, rgba(96,165,250,0.6) 1px, transparent 0)',
          'radial-gradient(2px 2px at 12% 88%, rgba(34,211,238,0.6) 1px, transparent 0)',
          'radial-gradient(1.5px 1.5px at 48% 45%, rgba(200,150,255,0.5) 1px, transparent 0)',
          'radial-gradient(1.5px 1.5px at 70% 30%, rgba(96,165,250,0.5) 1px, transparent 0)',
        ].join(', '),
      }}
    />
  </div>
)

export default HeroBackgroundLite
