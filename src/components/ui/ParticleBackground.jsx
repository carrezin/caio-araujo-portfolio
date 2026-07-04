import React from 'react'

// Background de partículas em "constelação" (adaptado do template Aether Flow).
// Renderiza com fundo transparente para sobrepor o gradiente da página,
// com cores da paleta do site (azul/ciano/roxo) e contagem reduzida no mobile.
const ParticleBackground = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    const mouse = { x: null, y: null, radius: 200 }

    // Paletas por tema — intensidade fiel ao template Aether Flow (roxo vibrante
    // como cor dominante), com toques de azul/ciano da identidade do site.
    const PALETTES = {
      dark: [
        'rgba(191, 128, 255, 0.85)', // roxo brilhante (template)
        'rgba(96, 165, 250, 0.85)', // azul
        'rgba(34, 211, 238, 0.8)', // ciano
      ],
      light: [
        'rgba(124, 58, 237, 0.8)',
        'rgba(37, 99, 235, 0.8)',
        'rgba(8, 145, 178, 0.75)',
      ],
    }
    let isDark = document.documentElement.classList.contains('dark')

    class Particle {
      constructor(x, y, directionX, directionY, size, colorIndex) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.colorIndex = colorIndex
      }

      draw() {
        const palette = PALETTES[isDark ? 'dark' : 'light']
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = palette[this.colorIndex]
        ctx.fill()
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius + this.size) {
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= (dx / distance) * force * 5
            this.y -= (dy / distance) * force * 5
          }
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }
    }

    const init = () => {
      particles = []
      // Densidade menor em telas pequenas para manter performance no mobile
      const density = window.innerWidth < 768 ? 14000 : 9000
      const count = Math.floor((canvas.height * canvas.width) / density)
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1
        const x = Math.random() * (canvas.width - size * 4) + size * 2
        const y = Math.random() * (canvas.height - size * 4) + size * 2
        const directionX = Math.random() * 0.4 - 0.2
        const directionY = Math.random() * 0.4 - 0.2
        const colorIndex = Math.floor(Math.random() * 3)
        particles.push(new Particle(x, y, directionX, directionY, size, colorIndex))
      }
    }

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      init()
    }

    const connect = () => {
      // Mesma distância de conexão e opacidade do template original (mais linhas, mais vivas)
      const maxDistance = (canvas.width / 7) * (canvas.height / 7)
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = dx * dx + dy * dy

          if (distance < maxDistance) {
            const opacity = Math.max(0, 1 - distance / 20000)

            let nearMouse = false
            if (mouse.x !== null) {
              const dxm = particles[a].x - mouse.x
              const dym = particles[a].y - mouse.y
              nearMouse = Math.sqrt(dxm * dxm + dym * dym) < mouse.radius
            }

            ctx.strokeStyle = nearMouse
              ? isDark
                ? `rgba(255, 255, 255, ${opacity})`
                : `rgba(15, 23, 42, ${opacity * 0.7})`
              : isDark
                ? `rgba(200, 150, 255, ${opacity})`
                : `rgba(124, 58, 237, ${opacity * 0.6})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) particles[i].update()
      connect()
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }

    const handleMouseOut = () => {
      mouse.x = null
      mouse.y = null
    }

    // Reage à troca de tema (classe .dark no <html>) recolorindo as partículas
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark')
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseout', handleMouseOut)

    resizeCanvas()
    animate()

    return () => {
      themeObserver.disconnect()
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}

export default ParticleBackground
