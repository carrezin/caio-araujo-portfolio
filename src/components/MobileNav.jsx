import React from 'react'
import { motion } from 'framer-motion'
import { User, Briefcase, Wrench, Code2, MessageCircle } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'
import { useLanguage } from '../i18n/LanguageContext'

// Navegação inferior fixa, pensada para uso com o polegar em telas de toque.
// Único sistema de navegação no mobile (o header não tem mais menu
// hambúrguer). "Início" não tem item próprio: o logo no header já cobre
// essa função e, com 5 itens, tudo cabe sem precisar de scroll horizontal.
const NAV_ITEMS = [
  { id: 'sobre', icon: User },
  { id: 'projetos', icon: Briefcase },
  { id: 'servicos', icon: Wrench },
  { id: 'tecnologias', icon: Code2 },
  { id: 'contato', icon: MessageCircle },
]

const NAV_IDS = NAV_ITEMS.map((item) => item.id)

const MobileNav = () => {
  const { t } = useLanguage()
  const [activeId, scrollToSection] = useActiveSection(NAV_IDS)

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 px-3 pt-2"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
      aria-label={t.a11y.mobileNavLabel}
    >
      {/* scrollbar-hidden: mantém overflow-x-auto como rede de segurança em
          telas muito estreitas, mas sem a barra de rolagem visível — a barra
          de navegação deve parecer sempre fixa/estável, nunca com o "trilho"
          de scroll aparente. */}
      <div className="liquid-glass scrollbar-hidden flex items-center gap-1 max-w-md mx-auto rounded-2xl overflow-x-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id
          const label = t.nav[item.id]
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              aria-current={isActive ? 'page' : undefined}
              className="focus-ring relative flex-1 shrink-0 flex flex-col items-center justify-center gap-1 py-2.5 px-2 rounded-xl transition-colors duration-300"
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
                className={`relative z-10 text-[10px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-ink-1' : 'text-ink-3'
                }`}
              >
                {label}
              </span>
            </a>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default MobileNav
