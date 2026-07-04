import React, { useRef, useEffect } from 'react'
import useIsMobile from '../../hooks/useIsMobile'

// Luz global que segue o cursor — efeito exclusivo de desktop (não existe
// cursor real em touch). Em mobile o componente não renderiza nada: sem
// elemento fixo, sem listener, sem loop de animação alternativo.
const CursorGlow = () => {
  const isMobile = useIsMobile()
  const glowRef = useRef(null)

  useEffect(() => {
    if (isMobile) return
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
  }, [isMobile])

  if (isMobile) return null

  return <div ref={glowRef} aria-hidden="true" className="cursor-glow" />
}

export default CursorGlow
