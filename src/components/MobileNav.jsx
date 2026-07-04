import React from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Wrench, MessageCircle } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

// Navegação inferior fixa, pensada para uso com o polegar em telas de toque.
// Some em telas >= lg, onde o Header já oferece a navegação completa.
const NAV_ITEMS = [
  { id: 'inicio', label: 'Início', icon: Home },
  { id: 'sobre', label: 'Sobre', icon: User },
  { id: 'projetos', label: 'Projetos', icon: Briefcase },
  { id: 'servicos', label: 'Serviços', icon: Wrench },
  { id: 'contato', label: 'Contato', icon: MessageCircle },
]

const NAV_IDS = NAV_ITEMS.map((item) => item.id)

const MobileNav = () => {
  const activeId = useActiveSection(NAV_IDS)

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 px-3 pt-2"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
      aria-label="Navegação principal (mobile)"
    >
      <div className="liquid-glass flex items-center justify-around gap-1 max-w-md mx-auto rounded-2xl">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? 'page' : undefined}
              className="focus-ring relative flex flex-1 flex-col items-center justify-center gap-1 py-2.5 rounded-xl transition-colors duration-300"
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-nav-active"
                  className="absolute inset-1 rounded-lg bg-gradient-to-br from-accent-blue/25 to-accent-cyan/20 border border-accent-cyan/30"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <item.icon
                className={`relative z-10 w-5 h-5 transition-colors duration-300 ${
                  isActive ? 'text-ink-1' : 'text-ink-3'
                }`}
              />
              <span
                className={`relative z-10 text-[10px] font-semibold transition-colors duration-300 ${
                  isActive ? 'text-ink-1' : 'text-ink-3'
                }`}
              >
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default MobileNav
