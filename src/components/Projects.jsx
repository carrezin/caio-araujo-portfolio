import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Icon from './ui/Icon'
import { useLanguage } from '../i18n/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()

  return (
    <section id="projetos" className="section-padding relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-[180px] h-[180px] md:w-[400px] md:h-[400px] bg-accent-blue/10 rounded-full blur-[55px] md:blur-[130px]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle
          badge={t.projectsSection.badge}
          title={t.projectsSection.title}
          subtitle={t.projectsSection.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
              className="glass-card glass-card-hover group relative p-7 overflow-hidden flex flex-col"
            >
              {/* Glow no hover */}
              <div
                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700`}
              />

              <div className="relative flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon name={project.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-xl font-bold text-ink-1 leading-snug pt-1">{project.title}</h3>
                </div>

                <p className="text-ink-3 leading-relaxed mb-5">{project.description}</p>

                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-ink-2">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chip-glass px-3 py-1 text-xs font-medium rounded-full text-ink-3 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
