import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../config/contact'
import useActiveSection from '../hooks/useActiveSection'
import ThemeToggle from './ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Projetos', href: '#projetos', id: 'projetos' },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Tecnologias', href: '#tecnologias', id: 'tecnologias' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

const NAV_IDS = NAV_LINKS.map((link) => link.id)

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, scrollToSection] = useActiveSection(NAV_IDS)

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
          {NAV_LINKS.map((link) => {
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
          <ThemeToggle />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-sm hidden lg:inline-flex"
          >
            <MessageCircle className="w-4 h-4" />
            Fale comigo
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus-ring icon-btn-glass lg:hidden w-10 h-10"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-base-950/95 backdrop-blur-xl border-b border-ink-1/10"
          >
            <ul className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.id
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.id)
                        setMenuOpen(false)
                      }}
                      aria-current={isActive ? 'page' : undefined}
                      className={`focus-ring nav-pill block py-3 ${isActive ? 'nav-pill--active' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li className="pt-2 pb-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  Fale comigo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
