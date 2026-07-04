import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import Icon from './ui/Icon'
import { techGroups } from '../data/techs'

const TechStack = () => (
  <section id="tecnologias" className="section-padding relative scroll-mt-24">
    <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-accent-purple/10 rounded-full blur-[120px]" />

    <div className="max-w-6xl mx-auto relative">
      <SectionTitle
        badge="Stack"
        title="Tecnologias que utilizo"
        subtitle="Ferramentas escolhidas pela praticidade e adequação a cada cenário — do frontend à infraestrutura."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {techGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
            className="glass-card glass-card-hover p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${group.gradient} text-white shadow-lg`}>
                <Icon name={group.icon} className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-bold text-ink-1">{group.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="chip-glass px-4 py-2 text-sm font-medium rounded-xl text-ink-2 transition-all duration-300 hover:border-accent-cyan/40 hover:text-ink-1 hover:-translate-y-0.5 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack
