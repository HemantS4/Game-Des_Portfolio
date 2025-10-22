import React, { useState } from 'react'
import Scene3D from './components/Scene3D'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <Scene3D />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Hero />
        <Projects />
        <About />
        <Footer />
      </main>
    </div>
  )
}

export default App
