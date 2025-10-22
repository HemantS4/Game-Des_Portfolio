import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.letter')
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.05}s`
    })
  }, [])

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          {splitText('Creative Game')}
          <br />
          {splitText('Designer')}
        </h1>
        <p className="hero-subtitle">
          Crafting immersive experiences through innovative game design
        </p>
        <button className="cta-button">
          <span>View My Work</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
