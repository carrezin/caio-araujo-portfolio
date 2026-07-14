import React, { lazy, Suspense, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageContext'
import CursorGlow from './components/ui/CursorGlow'
import SectionFallback from './components/ui/SectionFallback'
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import ContactWidget from './components/ContactWidget'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Header, Hero e Footer carregam imediatamente (primeira dobra + rodapé leve).
// As demais seções são divididas em chunks próprios — o bundle inicial fica
// menor (bom para CPUs fracas em mobile), mas o *carregamento* de cada chunk
// é disparado abaixo, logo após o primeiro paint, em vez de esperar o
// usuário rolar até cada seção.
const importAbout = () => import('./components/About')
const importStats = () => import('./components/Stats')
const importProjects = () => import('./components/Projects')
const importServices = () => import('./components/Services')
const importTechStack = () => import('./components/TechStack')
const importDifferentials = () => import('./components/Differentials')
const importProcess = () => import('./components/Process')
const importContact = () => import('./components/Contact')

const About = lazy(importAbout)
const Stats = lazy(importStats)
const Projects = lazy(importProjects)
const Services = lazy(importServices)
const TechStack = lazy(importTechStack)
const Differentials = lazy(importDifferentials)
const Process = lazy(importProcess)
const Contact = lazy(importContact)

// Pré-carrega todos os chunks das seções assim que a página termina o
// primeiro paint. Isso resolve dois problemas de uma vez:
// 1) "flash"/salto de layout no primeiro scroll — sem isso, o Suspense
//    mostra o fallback (240px) e troca para a altura real da seção bem no
//    meio da rolagem, quando o usuário já está vendo aquele trecho.
// 2) o menu de navegação "pulava" Projetos/Serviços — enquanto o chunk não
//    carrega, a seção (e o id="projetos"/id="servicos") simplesmente não
//    existe no DOM, então o observer de scroll não tem o que observar.
// Os imports são os mesmos usados no lazy() acima, então o módulo já vem do
// cache do navegador quando o Suspense realmente precisar dele — não há
// download duplicado.
function usePreloadSections() {
  useEffect(() => {
    const importers = [
      importAbout,
      importStats,
      importProjects,
      importServices,
      importTechStack,
      importDifferentials,
      importProcess,
      importContact,
    ]
    const idleSchedule = window.requestIdleCallback || ((cb) => window.setTimeout(cb, 200))
    const idleCancel = window.cancelIdleCallback || window.clearTimeout

    const handle = idleSchedule(() => {
      importers.forEach((importFn) => importFn())
    })

    return () => idleCancel(handle)
  }, [])
}

const App = () => {
  usePreloadSections()

  return (
  <LanguageProvider>
    {/* reducedMotion="user": o Framer Motion consulta prefers-reduced-motion do
    sistema e, quando ativo, anima só opacidade (sem x/y/scale) em TODAS as
    animações da árvore — sem precisar editar cada componente individualmente.
    Não afeta ParticleBackground/CursorGlow (canvas/DOM puro, fora do Framer Motion). */}
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
  </LanguageProvider>
  )
}

export default App
