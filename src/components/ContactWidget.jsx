import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Instagram, Github, Linkedin } from 'lucide-react'
import { WHATSAPP_URL, INSTAGRAM_URL, GITHUB_URL, LINKEDIN_URL } from '../config/contact'

const CHANNELS = [
  { name: 'WhatsApp', icon: MessageCircle, href: WHATSAPP_URL, color: 'text-green-500 dark:text-green-400' },
  { name: 'Instagram', icon: Instagram, href: INSTAGRAM_URL, color: 'text-pink-600 dark:text-pink-400' },
  { name: 'GitHub', icon: Github, href: GITHUB_URL, color: 'text-ink-1' },
  { name: 'LinkedIn', icon: Linkedin, href: LINKEDIN_URL, color: 'text-blue-600 dark:text-sky-400' },
]

// Widget flutuante de contato: fixo no canto inferior esquerdo, com pulso suave
// e ícone alternando entre os canais. Toque/clique abre um menu com os links.
// No mobile fica acima da barra de navegação inferior (safe-area incluída).
const ContactWidget = () => {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) return
    const id = setInterval(() => setIndex((i) => (i + 1) % CHANNELS.length), 2600)
    return () => clearInterval(id)
  }, [open])

  const Current = CHANNELS[index]

  return (
    <>
      {/* Fecha o menu ao tocar fora */}
      {open && (
        <button
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setOpen(false)}
          aria-label="Fechar menu de contato"
          tabIndex={-1}
        />
      )}

      <div
        className="fixed left-4 z-50 lg:bottom-6"
        style={{ bottom: 'max(5.25rem, calc(env(safe-area-inset-bottom) + 5.25rem))' }}
      >
        {/* Menu de canais */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="absolute bottom-full left-0 mb-3 flex flex-col gap-2 w-max"
            >
              {CHANNELS.map((channel) => (
                <li key={channel.name}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="focus-ring liquid-glass flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl text-sm font-semibold text-ink-1 transition-transform duration-200 hover:scale-[1.04]"
                  >
                    <channel.icon className={`w-4 h-4 ${channel.color}`} />
                    {channel.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Botão principal */}
        <div className="relative">
          {/* Luz de fundo fraca */}
          <span
            className="absolute -inset-2 rounded-full bg-accent-cyan/15 blur-xl"
            aria-hidden="true"
          />
          {/* Anel de pulso */}
          <span
            className="absolute inset-0 rounded-full border border-accent-cyan/50 animate-pulse-ring"
            aria-hidden="true"
          />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar opções de contato' : 'Abrir opções de contato'}
            aria-expanded={open}
            className="focus-ring icon-btn-glass relative w-[52px] h-[52px]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 8, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.7 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="inline-flex"
              >
                <Current.icon className={`w-5 h-5 ${Current.color}`} />
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </>
  )
}

export default ContactWidget
