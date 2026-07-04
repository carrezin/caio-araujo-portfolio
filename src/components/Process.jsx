import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import Icon from './ui/Icon'
import { processSteps } from '../data/process'

const Process = () => (
  <section className="section-padding relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[140px] md:w-[500px] md:h-[300px] bg-accent-blue/8 rounded-full blur-[55px] md:blur-[130px]" />

    <div className="max-w-6xl mx-auto relative">
      <SectionTitle
        badge="Metodologia"
        title="Como funciona o processo"
        subtitle="Um fluxo simples e transparente, do primeiro contato até a entrega funcionando."
      />

      <div className="relative">
        {/* Linha conectora — desktop */}
        <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative text-center ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative inline-flex mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-2xl blur-lg opacity-30" />
                <span className="chip-glass relative inline-flex p-4 rounded-2xl">
                  <Icon name={step.icon} className="w-6 h-6 text-accent-cyan" />
                </span>
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 text-xs font-bold text-white rounded-full bg-gradient-to-br from-accent-blue to-accent-purple shadow-lg">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-ink-1 font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-ink-4 leading-relaxed max-w-[220px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Process
