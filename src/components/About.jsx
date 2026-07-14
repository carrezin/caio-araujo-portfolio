import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Building2, Workflow, Zap, MessagesSquare, Target } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import RichText from './ui/RichText'
import { AVATAR_URL } from '../config/contact'
import { useLanguage } from '../i18n/LanguageContext'

const TRAIT_ICONS = [BrainCircuit, Building2, Workflow, Zap, MessagesSquare, Target]

const About = () => {
  const { t } = useLanguage()
  const [imgError, setImgError] = useState(false)
  const showImage = Boolean(AVATAR_URL) && !imgError

  return (
    <section id="sobre" className="section-padding relative scroll-mt-24">
      <div className="absolute top-1/2 left-0 w-[160px] h-[160px] md:w-[350px] md:h-[350px] bg-accent-purple/10 rounded-full blur-[50px] md:blur-[120px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative">
        <SectionTitle badge={t.about.badge} title={t.about.title} />

        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-start">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-blue via-accent-cyan to-accent-purple rounded-3xl blur-md opacity-50" />
              {showImage ? (
                <img
                  src={AVATAR_URL}
                  alt={t.about.avatarAlt}
                  loading="eager"
                  decoding="async"
                  onError={() => setImgError(true)}
                  className="relative w-full h-full object-cover rounded-3xl border border-ink-1/10"
                />
              ) : (
                <div className="relative w-full h-full rounded-3xl border border-ink-1/10 bg-gradient-to-br from-base-800 to-base-900 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gradient">CA</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-ink-2 text-lg leading-relaxed mb-5">
              <RichText text={t.about.paragraph1} strongClassName="text-ink-1" />
            </p>
            <p className="text-ink-3 text-lg leading-relaxed mb-10">
              <RichText text={t.about.paragraph2} strongClassName="text-ink-2" />
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {t.about.traits.map((label, i) => {
                const TraitIcon = TRAIT_ICONS[i]
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="glass-card glass-card-hover flex items-center gap-3 px-4 py-3"
                  >
                    <span className="p-2 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
                      <TraitIcon className="w-4 h-4 text-accent-cyan" />
                    </span>
                    <span className="text-sm font-medium text-ink-2">{label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
