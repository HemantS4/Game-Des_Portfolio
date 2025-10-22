import React from 'react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Cyber Odyssey',
      category: 'Action RPG',
      year: '2024',
      description: 'A futuristic action RPG set in a cyberpunk world with deep narrative choices.',
      tags: ['Unreal Engine', 'Combat Design', 'Level Design']
    },
    {
      id: 2,
      title: 'Forest Keeper',
      category: 'Puzzle Adventure',
      year: '2023',
      description: 'An environmental puzzle game focused on nature restoration and exploration.',
      tags: ['Unity', 'Puzzle Mechanics', 'Environmental Storytelling']
    },
    {
      id: 3,
      title: 'Velocity Rush',
      category: 'Racing',
      year: '2023',
      description: 'High-speed arcade racer with dynamic track generation and multiplayer focus.',
      tags: ['Gameplay Systems', 'Multiplayer', 'UI/UX']
    },
    {
      id: 4,
      title: 'Shadow Tactics',
      category: 'Strategy',
      year: '2022',
      description: 'Turn-based tactical strategy with emergent gameplay and AI-driven enemies.',
      tags: ['Game Balance', 'AI Design', 'System Design']
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Latest Projects</h2>
        <p className="section-subtitle">Selected game design work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image">
              <div className="placeholder-image">
                <span className="placeholder-text">{project.category}</span>
              </div>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <button className="project-link">
                View Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
