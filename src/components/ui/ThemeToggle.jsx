import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../../hooks/useTheme'
import { useLanguage } from '../../i18n/LanguageContext'

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()
  const { t } = useLanguage()

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? t.a11y.themeToLight : t.a11y.themeToDark}
      className="focus-ring icon-btn-glass w-10 h-10"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="inline-flex"
        >
          {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
