import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import Sidebar from './Sidebar'
import '../styles/AllProjects.css'

export default function AllProjects() {
  const [activeSection, setActiveSection] = useState('projects')
  const [filter, setFilter] = useState('all')
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  const categories = ['all', ...new Set(projectsData.map(p => p.category))]

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter)

  // Artwork images - add your artwork file names here
  const artworks = [
    { id: 1, src: `${import.meta.env.BASE_URL}images/artworks/artwork-1.jpg`, alt: 'Artwork 1' },
    { id: 2, src: `${import.meta.env.BASE_URL}images/artworks/artwork-2.jpg`, alt: 'Artwork 2' },
    { id: 3, src: `${import.meta.env.BASE_URL}images/artworks/artwork-3.jpg`, alt: 'Artwork 3' },
    { id: 4, src: `${import.meta.env.BASE_URL}images/artworks/artwork-4.jpg`, alt: 'Artwork 4' },
    { id: 5, src: `${import.meta.env.BASE_URL}images/artworks/artwork-5.jpg`, alt: 'Artwork 5' },
    { id: 6, src: `${import.meta.env.BASE_URL}images/artworks/artwork-6.jpg`, alt: 'Artwork 6' }
  ]

  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Back Button */}
      <Link to="/" className="back-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Home
      </Link>

      <div className="all-projects-page">
        <div className="all-projects-header">
          <h1 className="all-projects-title">All Projects</h1>
          <p className="all-projects-subtitle">Explore my complete portfolio of game design work</p>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="all-projects-grid">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="all-project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="all-project-image">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/1a1a2e/ff7849?text=${encodeURIComponent(project.title)}`
                  }}
                />
                <div className="all-project-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="view-icon">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="all-project-info">
                <div className="all-project-meta">
                  <span className="all-project-category">{project.category}</span>
                  <span className="all-project-year">{project.year}</span>
                </div>
                <h3 className="all-project-title">{project.title}</h3>
                <p className="all-project-description">{project.shortDescription || project.description}</p>

                <div className="all-project-tools">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span key={i} className="all-tool-tag">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="all-tool-tag more">+{project.tools.length - 3}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Artworks Section */}
        <div className="artworks-section">
          <div className="artworks-header">
            <h2 className="artworks-title">Artworks</h2>
            <p className="artworks-subtitle">Visual explorations and creative work</p>
          </div>

          <div className="artworks-grid">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="artwork-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x600/1a1a2e/ff7849?text=Artwork+${artwork.id}`
                  }}
                />
                <div className="artwork-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artwork Lightbox */}
        {selectedArtwork && (
          <div className="artwork-lightbox" onClick={() => setSelectedArtwork(null)}>
            <div className="artwork-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="artwork-close" onClick={() => setSelectedArtwork(null)}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <img src={selectedArtwork.src} alt={selectedArtwork.alt} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
