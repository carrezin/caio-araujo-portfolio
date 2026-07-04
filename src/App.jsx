import React from 'react'
import CursorGlow from './components/ui/CursorGlow'
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import ContactWidget from './components/ContactWidget'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Differentials from './components/Differentials'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => (
  <div className="min-h-screen bg-base-950">
    <CursorGlow />
    <Header />
    <main>
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Services />
      <TechStack />
      <Differentials />
      <Process />
      <Contact />
    </main>
    <Footer />
    <MobileNav />
    <ContactWidget />
  </div>
)

export default App
