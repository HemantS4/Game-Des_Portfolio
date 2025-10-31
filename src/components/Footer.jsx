import React, { useState } from 'react'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = () => {
    navigator.clipboard.writeText('sharmah677@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h2 className="footer-title">Let's Create Something Amazing</h2>
          <p className="footer-subtitle">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            {/* Email */}
            <button
              onClick={handleEmailClick}
              className="social-icon email-icon"
              title="Copy email to clipboard"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {copied && <span className="copy-tooltip">Copied!</span>}
            </button>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
          </div>

          <p className="email-text">sharmah677@gmail.com</p>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Resume</a></li>
              <li><a href="#">Portfolio PDF</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Game Designer Portfolio. All rights reserved.</p>
        <p>Designed with Three.js & React</p>
      </div>
    </footer>
  )
}
