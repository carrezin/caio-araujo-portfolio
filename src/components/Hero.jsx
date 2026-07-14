import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Activity, CircleDollarSign } from 'lucide-react'
import ParticleBackground from './ui/ParticleBackground'
import HeroBackgroundLite from './ui/HeroBackgroundLite'
import useIsMobile from '../hooks/useIsMobile'
import { useLanguage } from '../i18n/LanguageContext'

const FLOATING_POSITIONS = [
  { className: 'top-[18%] left-[6%]', delay: 0 },
  { className: 'top-[32%] right-[8%]', delay: 0.4 },
  { className: 'top-[58%] left-[4%]', delay: 0.8 },
  { className: 'top-[70%] right-[6%]', delay: 1.2 },
  { className: 'top-[12%] right-[22%]', delay: 1.6 },
  { className: 'top-[80%] left-[20%]', delay: 2 },
]

const BARS = [35, 55, 40, 70, 50, 85, 60, 95, 75, 88, 65, 100]
const MOCKUP_ICONS = [TrendingUp, Activity, CircleDollarSign]
const MOCKUP_COLORS = ['text-accent-cyan', 'text-accent-purple', 'text-accent-gold']

const Hero = () => {
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  // Em mobile, o Hero precisa aparecer o mais rápido possível: sem stagger
  // longo, sem delays acumulados atrasando o conteúdo principal (LCP).
  const baseDelay = isMobile ? 0.05 : 0.3
  const stagger = isMobile ? 0.04 : 0.15
  const duration = isMobile ? 0.35 : 0.8

  const fadeUp = {
    hidden: { opacity: 0, y: isMobile ? 10 : 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: baseDelay + i * stagger, duration, ease: 'easeOut' },
    }),
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Camadas de background */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-950 via-base-900 to-base-950" />
      <div className="absolute top-0 left-1/4 w-[220px] h-[220px] md:w-[500px] md:h-[500px] bg-accent-blue/15 rounded-full blur-[60px] md:blur-[140px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[180px] h-[180px] md:w-[400px] md:h-[400px] bg-accent-purple/15 rounded-full blur-[55px] md:blur-[140px] animate-pulse-slow" />
      {/* Desktop: canvas de partículas interativo. Mobile: versão estática em CSS (zero canvas/rAF). */}
      {isMobile ? <HeroBackgroundLite /> : <ParticleBackground />}

      {/* Tags flutuantes — decorativas, puladas em mobile para reduzir animações simultâneas */}
      {!isMobile &&
        t.hero.floatingTags.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: FLOATING_POSITIONS[i].delay + 1, duration: 0.8 }}
            className={`hidden md:block absolute ${FLOATING_POSITIONS[i].className} z-10`}
          >
            <div className="glass-card px-4 py-2 text-sm font-medium text-ink-2 animate-float shadow-lg shadow-accent-blue/10">
              {label}
            </div>
          </motion.div>
        ))}

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-20">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-accent-cyan" />
          <span className="text-sm font-medium text-ink-2">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-gradient-white"
        >
          {t.hero.titlePrefix}
          <span className="text-gradient">{t.hero.titleHighlight}</span>
          {t.hero.titleSuffix}
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-lg md:text-xl text-ink-3 mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#projetos" className="btn-primary w-full sm:w-auto">
            {t.hero.ctaProjects}
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#contato" className="btn-secondary w-full sm:w-auto">
            {t.hero.ctaContact}
          </a>
        </motion.div>

        {/* Mockup de dashboard */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/30 via-accent-cyan/30 to-accent-purple/30 rounded-3xl blur-md md:blur-xl opacity-60" />
          <div className="relative glass-card p-5 md:p-6 text-left">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-amber-400/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-ink-4 font-mono">{t.hero.mockupLabel}</span>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
              {t.hero.mockupStats.map((item, i) => {
                const ItemIcon = MOCKUP_ICONS[i]
                return (
                  <div key={item.label} className="chip-glass rounded-xl p-3 md:p-4">
                    <ItemIcon className={`w-4 h-4 md:w-5 md:h-5 ${MOCKUP_COLORS[i]} mb-2`} />
                    <p className="text-lg md:text-2xl font-bold text-ink-1">{item.value}</p>
                    <p className="text-[10px] md:text-xs text-ink-4">{item.label}</p>
                  </div>
                )
              })}
            </div>

            {/* Barras simulando gráfico — animação de height só no desktop
                (animar height é custoso; mobile recebe as barras já no valor final) */}
            <div className="flex items-end gap-1.5 h-16 md:h-20">
              {BARS.map((h, i) =>
                isMobile ? (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-blue/40 to-accent-cyan/70"
                  />
                ) : (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1.6 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-blue/40 to-accent-cyan/70"
                  />
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
