import React from 'react'

// Bandeiras como SVG embutido em vez de emoji Unicode: no Windows (mesmo em
// versões recentes fora do Edge/Chrome mais novos), emoji de bandeira regional
// costuma cair para o código de duas letras em texto ("BR") em vez do desenho
// da bandeira — um problema de fonte do sistema, não do navegador. SVG
// garante a mesma bandeira visual em qualquer SO/navegador.
const FLAGS = {
  BR: (
    <svg viewBox="0 0 20 14" className="w-5 h-3.5 rounded-[2px]" aria-hidden="true">
      <rect width="20" height="14" fill="#049c3b" />
      <polygon points="10,2 18,7 10,12 2,7" fill="#ffdf00" />
      <circle cx="10" cy="7" r="3.4" fill="#002776" />
    </svg>
  ),
  PT: (
    <svg viewBox="0 0 20 14" className="w-5 h-3.5 rounded-[2px]" aria-hidden="true">
      <rect width="20" height="14" fill="#ff0000" />
      <rect width="8" height="14" fill="#046a38" />
      <circle cx="8" cy="7" r="2.6" fill="#ffcc00" stroke="#ff0000" strokeWidth="0.5" />
    </svg>
  ),
  US: (
    <svg viewBox="0 0 20 14" className="w-5 h-3.5 rounded-[2px]" aria-hidden="true">
      <rect width="20" height="14" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="20" height="1.08" fill="#b22234" />
      ))}
      <rect width="9" height="7.5" fill="#3c3b6e" />
    </svg>
  ),
}

const FlagIcon = ({ code, className }) => (
  <span className={`inline-flex shrink-0 overflow-hidden rounded-[2px] shadow-sm ${className || ''}`}>
    {FLAGS[code] || null}
  </span>
)

export default FlagIcon
