import React, { useState, useEffect } from 'react'
import Scene3D from './components/Scene3D'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let rafId = null
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          // Get scroll position relative to sections
          const heroSection = document.getElementById('home')
          const projectsSection = document.getElementById('projects')
          const aboutSection = document.getElementById('about')

          const scrollY = window.scrollY
          const windowHeight = window.innerHeight

          // Calculate which section is visible
          let projectsProgress = 0

          if (projectsSection) {
            const projectsTop = projectsSection.offsetTop
            const projectsHeight = projectsSection.offsetHeight
            const projectsBottom = projectsTop + projectsHeight

            if (scrollY + windowHeight > projectsTop && scrollY < projectsBottom) {
              // We're in projects section
              const entryPoint = projectsTop - windowHeight * 0.5
              const exitPoint = projectsBottom - windowHeight * 0.5
              projectsProgress = Math.max(0, Math.min(1, (scrollY - entryPoint) / (exitPoint - entryPoint)))
            } else if (scrollY >= projectsBottom) {
              // We've passed projects section
              projectsProgress = 2 // Signal to move cards to background
            }
          }

          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = scrollHeight > 0 ? scrollY / scrollHeight : 0
          setScrollProgress(Math.min(Math.max(progress, 0), 1))

          // Store projects progress in window for Projects component
          window.projectsProgress = projectsProgress

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="app">
      <Scene3D scrollProgress={scrollProgress} />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Hero />
        <Projects scrollProgress={scrollProgress} />
        <About />
        <Footer />
      </main>
    </div>
  )
}

export default App
