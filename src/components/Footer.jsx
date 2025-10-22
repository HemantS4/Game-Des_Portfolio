import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h2 className="footer-title">Let's Create Something Amazing</h2>
          <p className="footer-subtitle">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a href="mailto:hello@gamedesigner.com" className="contact-email">
            hello@gamedesigner.com
          </a>
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
            <h4>Social</h4>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Artstation</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Resume</a></li>
              <li><a href="#">Portfolio PDF</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">GDC Talks</a></li>
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
