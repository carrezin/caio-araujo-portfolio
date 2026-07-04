import React, { useRef, useEffect, useState } from 'react'

// Luz global que segue o cursor. Dois modos:
// - follow: desktop, rAF + lerp + translate3d (fluido, sem re-render do React)
// - drift:  telas touch (sem cursor), animação CSS lenta vagando pela tela
const CursorGlow = () => {
  const glowRef = useRef(null)
  const [mode] = useState(() =>
    window.matchMedia('(pointer: coarse)').matches ? 'drift' : 'follow'
  )

  useEffect(() => {
    if (mode !== 'follow') return
    const glow = glowRef.current
    if (!glow) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let frameId

    const handleMouseMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.16
      currentY += (targetY - currentY) * 0.16
      glow.style.transform = `translate3d(${currentX - 160}px, ${currentY - 160}px, 0)`
      frameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    frameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [mode])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={`cursor-glow ${mode === 'drift' ? 'cursor-glow--drift' : ''}`}
    />
  )
}

export default CursorGlow
