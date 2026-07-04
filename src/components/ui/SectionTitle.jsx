import React from 'react'
import { motion } from 'framer-motion'

const SectionTitle = ({ badge, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="text-center mb-16 max-w-3xl mx-auto"
  >
    {badge && <span className="badge-glass mb-4">{badge}</span>}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-white mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-ink-3 text-lg leading-relaxed">{subtitle}</p>}
  </motion.div>
)

export default SectionTitle
