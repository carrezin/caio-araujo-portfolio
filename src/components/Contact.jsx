import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react'
import { WHATSAPP_URL, EMAIL, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL } from '../config/contact'
import { useLanguage } from '../i18n/LanguageContext'

// Seção de contato adaptada do template "ProfessionalConnect":
// cards com glow/shimmer no hover, orbs animados e luz que segue o mouse
// (a luz do cursor agora é global — ui/CursorGlow.jsx, montada no App).
const PLATFORM_META = [
  { name: 'WhatsApp', icon: MessageCircle, gradient: 'from-green-500 to-emerald-400', shadowColor: 'rgba(34, 197, 94, 0.5)', link: WHATSAPP_URL },
  { name: 'E-mail', icon: Mail, gradient: 'from-cyan-500 to-blue-400', shadowColor: 'rgba(34, 211, 238, 0.5)', link: `mailto:${EMAIL}`, descriptionOverride: EMAIL },
  { name: 'LinkedIn', icon: Linkedin, gradient: 'from-blue-600 to-blue-400', shadowColor: 'rgba(59, 130, 246, 0.5)', link: LINKEDIN_URL },
  { name: 'GitHub', icon: Github, gradient: 'from-slate-600 to-slate-400', shadowColor: 'rgba(148, 163, 184, 0.5)', link: GITHUB_URL },
  { name: 'Instagram', icon: Instagram, gradient: 'from-purple-600 via-pink-600 to-orange-500', shadowColor: 'rgba(219, 39, 119, 0.5)', link: INSTAGRAM_URL },
]

const Contact = () => {
  const { t } = useLanguage()

  return (
    <section id="contato" className="relative section-padding overflow-hidden scroll-mt-24">
      {/* Background animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent" />
        <div className="grid-overlay absolute inset-0" />
        <div className="absolute top-20 left-20 w-32 h-32 md:w-72 md:h-72 bg-accent-blue/20 rounded-full blur-[50px] md:blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 md:w-96 md:h-96 bg-accent-purple/15 rounded-full blur-[50px] md:blur-[128px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-glass mb-4">{t.contact.badge}</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient-white mb-6">{t.contact.title}</h2>
          <p className="text-lg md:text-xl text-ink-3 max-w-2xl mx-auto leading-relaxed">{t.contact.subtitle}</p>
        </motion.div>

        {/* Cards de contato */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PLATFORM_META.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`focus-ring group relative rounded-2xl ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="relative h-full glass-card p-6 overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-ink-1/25 group-focus-visible:scale-105 group-focus-visible:border-ink-1/25">
                {/* Gradiente no hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${platform.shadowColor}, transparent 70%)`,
                    filter: 'blur(40px)',
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.gradient} text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <platform.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-ink-1 font-semibold mb-1">{platform.name}</h3>
                  <p className="text-ink-4 text-xs break-all transition-colors duration-300 group-hover:text-ink-3">
                    {platform.descriptionOverride || t.contact.platforms[platform.name]}
                  </p>
                  <div className="mt-4 flex items-center text-ink-4 group-hover:text-ink-1 transition-colors duration-300">
                    <span className="text-sm font-medium">{t.contact.connect}</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/30"
          >
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t.contact.ctaButton}</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
