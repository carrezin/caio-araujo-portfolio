import React from 'react'
import { motion } from 'framer-motion'
import Icon from './ui/Icon'
import { useLanguage } from '../i18n/LanguageContext'

const Stats = () => {
  const { t } = useLanguage()

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card glass-card-hover group relative p-6 md:p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <span className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-cyan/15 mb-4">
                  <Icon name={stat.icon} className="w-5 h-5 text-accent-cyan" />
                </span>
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-ink-1 font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-ink-4 leading-snug">{stat.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
