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

      <div className="experience">
        <h3 className="experience-title">Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2022 - Present</div>
            <div className="timeline-content">
              <h4>Senior Game Designer</h4>
              <p>Creative Studio Inc.</p>
              <p className="timeline-desc">
                Leading design on AAA action RPG, managing gameplay systems and combat design.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020 - 2022</div>
            <div className="timeline-content">
              <h4>Game Designer</h4>
              <p>Indie Games Studio</p>
              <p className="timeline-desc">
                Designed levels and puzzles for award-winning puzzle adventure game.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2019 - 2020</div>
            <div className="timeline-content">
              <h4>Junior Game Designer</h4>
              <p>Mobile Games Co.</p>
              <p className="timeline-desc">
                Created progression systems and monetization features for mobile titles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
