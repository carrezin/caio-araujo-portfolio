import { useEffect, useState } from 'react'

// Tema claro/escuro: inicia pela classe já aplicada pelo boot script do index.html
// (preferência salva ou sistema). Escolha manual é persistida em localStorage;
// sem escolha manual, acompanha mudanças do sistema em tempo real.
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = (e) => {
      if (localStorage.getItem('theme')) return
      const next = e.matches ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', e.matches)
      setTheme(next)
    }
    mq.addEventListener('change', onSystemChange)
    return () => mq.removeEventListener('change', onSystemChange)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    setTheme(next)
  }

  return { theme, toggle }
}
