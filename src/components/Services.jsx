import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import Icon from './ui/Icon'
import { useLanguage } from '../i18n/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="section-padding relative scroll-mt-24">
      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[400px] md:h-[400px] bg-accent-cyan/8 rounded-full blur-[55px] md:blur-[130px]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle
          badge={t.servicesSection.badge}
          title={t.servicesSection.title}
          subtitle={t.servicesSection.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {t.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
              className="glass-card glass-card-hover group p-5 flex flex-col"
            >
              <span className="inline-flex self-start p-2.5 rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 mb-4 transition-transform duration-500 group-hover:scale-110">
                <Icon name={service.icon} className="w-5 h-5 text-accent-cyan" />
              </span>
              <h3 className="text-ink-1 font-semibold mb-2 leading-snug">{service.title}</h3>
              <p className="text-sm text-ink-4 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
