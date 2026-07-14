import React from 'react'

// Renderiza texto simples com **negrito** — evita repetir JSX com <strong>
// manual para cada idioma só por causa da posição do trecho destacado.
const RichText = ({ text, strongClassName }) => {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={strongClassName}>
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  )
}

export default RichText
