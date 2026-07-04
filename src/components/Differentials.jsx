import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import Icon from './ui/Icon'
import { differentials } from '../data/differentials'

const Differentials = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.03] to-transparent" />

    <div className="max-w-6xl mx-auto relative">
      <SectionTitle
        badge="Diferenciais"
        title="Por que trabalhar comigo?"
        subtitle="Mais do que código: experiência prática em operação, comunicação clara e compromisso com o resultado."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {differentials.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className={`glass-card glass-card-hover group relative p-7 overflow-hidden ${
              i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div
              className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700`}
            />
            <div className="relative">
              <span
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
              >
                <Icon name={item.icon} className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold text-ink-1 mb-3">{item.title}</h3>
              <p className="text-ink-3 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Differentials
