import React from 'react'
import { MessageCircle, Mail, Linkedin, Github, Instagram } from 'lucide-react'
import { WHATSAPP_URL, EMAIL, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL } from '../config/contact'
import { useLanguage } from '../i18n/LanguageContext'

const NAV_IDS = ['inicio', 'sobre', 'projetos', 'servicos', 'tecnologias', 'contato']

const SOCIALS = [
  { icon: MessageCircle, href: WHATSAPP_URL, label: 'WhatsApp' },
  { icon: Mail, href: `mailto:${EMAIL}`, label: 'E-mail' },
  { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: Github, href: GITHUB_URL, label: 'GitHub' },
  { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
]

const Footer = () => {
  const { t } = useLanguage()
  const quickLinks = NAV_IDS.map((id) => ({ id, href: `#${id}`, label: t.nav[id] }))

  return (
    <footer className="relative border-t border-ink-1/10 bg-base-950 pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <a href="#inicio" className="focus-ring rounded-md text-xl font-bold tracking-tight">
            <span className="text-gradient">Caio</span>
            <span className="text-ink-1"> Araujo</span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring rounded-md text-sm text-ink-2 hover:text-ink-1 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="focus-ring chip-glass p-2.5 rounded-xl text-ink-2 transition-all duration-300 hover:text-ink-1 hover:border-accent-cyan/40 hover:-translate-y-0.5"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-ink-1/5 text-center">
          <p className="text-sm text-ink-4">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
