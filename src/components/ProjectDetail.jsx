import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectById, getAdjacentProjects } from '../data/projectsData'
import Sidebar from './Sidebar'
import '../styles/ProjectDetail.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [adjacentProjects, setAdjacentProjects] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeSection, setActiveSection] = useState('projects')

  useEffect(() => {
    // Scroll to top when project changes
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const projectData = getProjectById(projectId)
    if (!projectData) {
      navigate('/') // Redirect to home if project not found
      return
    }

    setProject(projectData)
    setAdjacentProjects(getAdjacentProjects(projectId))
    setSelectedImage(null)
  }, [projectId, navigate])

  if (!project) {
    return <div className="loading">Loading project...</div>
  }

  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="project-detail">
        {/* Hero Section */}
        <section className="project-hero">
        <Link to="/" className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Portfolio
        </Link>

        <div className="project-hero-content">
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </div>

          <h1 className="project-title-large">{project.title}</h1>
          <p className="project-tagline">{project.description}</p>

          <div className="project-tools-list">
            {project.tools.map((tool, index) => (
              <span key={index} className="tool-badge">{tool}</span>
            ))}
          </div>
        </div>

        {/* Thumbnail / Hero Image */}
        <div className="project-hero-image">
          <img
            src={project.thumbnail}
            alt={project.title}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/1200x600/1a1a2e/ff7849?text=${encodeURIComponent(project.title)}`
            }}
          />
        </div>
      </section>

      {/* Video Showcase */}
      {project.videoUrl && (
        <section className="project-video">
          <h2>Gameplay Video</h2>
          <div className="video-container">
            {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
              <iframe
                src={project.videoUrl}
                title={`${project.title} Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                controls
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </section>
      )}

      {/* Project Info Grid */}
      <section className="project-info-grid">
        <div className="info-card">
          <h3>Role</h3>
          <p>{project.role}</p>
        </div>
        <div className="info-card">
          <h3>Duration</h3>
          <p>{project.duration}</p>
        </div>
        <div className="info-card">
          <h3>Team Size</h3>
          <p>{project.teamSize}</p>
        </div>
        <div className="info-card">
          <h3>Platform</h3>
          <p>{project.platform.join(', ')}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="project-section">
        <h2>Overview</h2>
        <p className="overview-text">{project.overview}</p>
      </section>

      {/* Features */}
      <section className="project-section features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {project.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#ff7849" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="project-section challenges-section">
        <div className="challenges-grid">
          <div className="challenges-column">
            <h2>Challenges</h2>
            <ul className="challenge-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="solutions-column">
            <h2>Solutions</h2>
            <ul className="solution-list">
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="project-section gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${project.title} Screenshot ${index + 1}`}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x450/1a1a2e/ff7849?text=Screenshot+${index + 1}`
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      {project.links && Object.keys(project.links).length > 0 && (
        <section className="project-section links-section">
          <h2>Links & Resources</h2>
          <div className="links-grid">
            {Object.entries(project.links).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1).replace(/([A-Z])/g, ' $1')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Navigation to Other Projects */}
      {adjacentProjects && (
        <section className="project-navigation">
          <Link
            to={`/project/${adjacentProjects.previous.id}`}
            className="nav-project prev-project"
          >
            <span className="nav-label">Previous Project</span>
            <span className="nav-title">{adjacentProjects.previous.title}</span>
          </Link>
          <Link
            to={`/project/${adjacentProjects.next.id}`}
            className="nav-project next-project"
          >
            <span className="nav-label">Next Project</span>
            <span className="nav-title">{adjacentProjects.next.title}</span>
          </Link>
        </section>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
      </div>
    </>
  )
}
