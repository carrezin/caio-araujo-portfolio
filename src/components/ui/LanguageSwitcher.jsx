import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import FlagIcon from './FlagIcon'

// Seletor de idioma por bandeira, no estilo Liquid Glass do resto do site.
// Botão redondo igual ao ThemeToggle (mesma classe .icon-btn-glass), com um
// popover de opções que fecha ao escolher, ao tocar fora ou com Escape.
const LanguageSwitcher = () => {
  const { lang, setLang, t, languages } = useLanguage()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const current = languages.find((l) => l.code === lang) || languages[0]

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.a11y.languageLabel}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="focus-ring icon-btn-glass w-10 h-10"
      >
        <FlagIcon code={current.flagCode} className="w-5 h-3.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="dropdown-glass absolute right-0 mt-2 w-44 rounded-2xl p-1.5 z-[70]"
          >
            {languages.map((option) => {
              const isActive = option.code === lang
              return (
                <li key={option.code} role="option" aria-selected={isActive}>
                  <button
                    onClick={() => {
                      setLang(option.code)
                      setOpen(false)
                    }}
                    className={`focus-ring w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-ink-1 bg-white/10' : 'text-ink-2 hover:bg-white/5 hover:text-ink-1'
                    }`}
                  >
                    <FlagIcon code={option.flagCode} className="w-5 h-3.5" />
                    {option.name}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
