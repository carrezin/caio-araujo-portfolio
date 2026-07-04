import React, { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import CursorGlow from './components/ui/CursorGlow'
import SectionFallback from './components/ui/SectionFallback'
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import ContactWidget from './components/ContactWidget'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Header, Hero e Footer carregam imediatamente (primeira dobra + rodapé leve).
// As demais seções são divididas em chunks próprios e só chegam ao navegador
// quando o React efetivamente monta cada uma — reduz o JS necessário para a
// primeira renderização, o que importa bastante em conexões/aparelhos móveis.
const About = lazy(() => import('./components/About'))
const Stats = lazy(() => import('./components/Stats'))
const Projects = lazy(() => import('./components/Projects'))
const Services = lazy(() => import('./components/Services'))
const TechStack = lazy(() => import('./components/TechStack'))
const Differentials = lazy(() => import('./components/Differentials'))
const Process = lazy(() => import('./components/Process'))
const Contact = lazy(() => import('./components/Contact'))

const App = () => (
  // reducedMotion="user": o Framer Motion consulta prefers-reduced-motion do
  // sistema e, quando ativo, anima só opacidade (sem x/y/scale) em TODAS as
  // animações da árvore — sem precisar editar cada componente individualmente.
  // Não afeta ParticleBackground/CursorGlow (canvas/DOM puro, fora do Framer Motion).
  <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-base-950">
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Differentials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <MobileNav />
      <ContactWidget />
    </div>
  </MotionConfig>
)

export default App
