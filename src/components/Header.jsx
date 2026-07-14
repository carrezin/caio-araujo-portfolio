import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../config/contact'
import useActiveSection from '../hooks/useActiveSection'
import { useLanguage } from '../i18n/LanguageContext'
import ThemeToggle from './ui/ThemeToggle'
import LanguageSwitcher from './ui/LanguageSwitcher'

const NAV_IDS = ['inicio', 'sobre', 'projetos', 'servicos', 'tecnologias', 'contato']

// No mobile, a navegação por seção vive só na barra inferior (MobileNav) —
// o header aqui mantém apenas identidade (logo), idioma e tema, evitando um
// segundo sistema de navegação redundante (removido: menu hambúrguer).
const Header = () => {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [activeId, scrollToSection] = useActiveSection(NAV_IDS)

  const navLinks = NAV_IDS.map((id) => ({ id, href: `#${id}`, label: t.nav[id] }))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'header-pad bg-base-950/85 backdrop-blur-xl border-b border-ink-1/10 shadow-lg shadow-black/10'
          : 'header-pad-top bg-gradient-to-b from-base-950/80 via-base-950/35 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-3">
        <a href="#inicio" className="focus-ring rounded-md text-xl font-bold tracking-tight shrink-0">
          <span className="text-gradient">Caio</span>
          <span className="text-ink-1"> Araujo</span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.id)
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`focus-ring nav-pill ${isActive ? 'nav-pill--active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-sm hidden lg:inline-flex"
          >
            <MessageCircle className="w-4 h-4" />
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
