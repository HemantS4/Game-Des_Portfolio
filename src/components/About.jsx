import React from 'react'

export default function About() {
  const skills = [
    { name: 'Game Systems Design', level: 95 },
    { name: 'Level Design', level: 90 },
    { name: 'Combat Design', level: 85 },
    { name: 'Narrative Design', level: 80 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Prototyping', level: 90 }
  ]

  const handleResumeClick = () => {
    // Open resume PDF in new tab
    window.open('/resume.pdf', '_blank')
  }

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-intro">
            I'm a passionate game designer with 5+ years of experience creating engaging
            gameplay experiences across multiple genres and platforms.
          </p>
          <p className="about-description">
            My design philosophy centers on player agency and meaningful choices.
            I believe great games emerge from the intersection of intuitive mechanics,
            compelling narratives, and thoughtful systems design. I specialize in
            combat systems, progression mechanics, and creating emergent gameplay moments.
          </p>
          <p className="about-description">
            When I'm not designing games, you'll find me analyzing game mechanics,
            exploring indie titles, or prototyping new ideas in Unity and Unreal Engine.
          </p>

          {/* Resume Button */}
          <button className="resume-button" onClick={handleResumeClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View Resume
          </button>
        </div>

        <div className="about-skills">
          <h3 className="skills-title">Core Competencies</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
