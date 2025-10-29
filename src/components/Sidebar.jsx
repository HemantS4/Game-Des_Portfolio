import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Sidebar({ activeSection, setActiveSection }) {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (id) => {
    // If we're on a project detail page, navigate home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation, then scroll
      setTimeout(() => {
        setActiveSection(id)
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      setActiveSection(id)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <h2>HS</h2>
          <span>Hemant Sharma</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            <span className="nav-dot"></span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="social-links">
          <a href="#" aria-label="LinkedIn">LI</a>
          <a href="#" aria-label="Instagram">IG</a>
        </div>
      </div>
    </aside>
  )
}
