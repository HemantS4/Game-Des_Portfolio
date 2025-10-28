import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

export default function Projects({ scrollProgress }) {
  const navigate = useNavigate()
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [sectionProgress, setSectionProgress] = useState(0)
  const [time, setTime] = useState(0)
  const projectsRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const startTime = Date.now()
    let lastUpdate = 0
    const fps = 30 // Limit to 30 FPS instead of 60 for better performance
    const interval = 1000 / fps

    const animate = (timestamp) => {
      if (!lastUpdate) lastUpdate = timestamp
      const delta = timestamp - lastUpdate

      // Only update if enough time has passed
      if (delta >= interval) {
        const currentTime = (Date.now() - startTime) / 1000
        setTime(currentTime)
        setSectionProgress(window.projectsProgress || 0)
        lastUpdate = timestamp - (delta % interval)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Click outside to unzoom
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectedProject && !e.target.closest('.project-card')) {
        setSelectedProject(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [selectedProject])

  const projects = projectsData

  const handleMouseMove = (e, projectId) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleProjectClick = (e, projectId) => {
    e.stopPropagation()

    if (selectedProject === projectId) {
      // If already selected, navigate to detail page
      navigate(`/project/${projectId}`)
    } else {
      // First click: zoom in
      setSelectedProject(projectId)
    }
  }

  // Use section-based progress
  let projectPhase, aboutPhase

  if (sectionProgress < 1) {
    projectPhase = Math.max(0, Math.min(1, sectionProgress * 2))
    aboutPhase = 0
  } else if (sectionProgress >= 2) {
    projectPhase = 1
    aboutPhase = Math.min(1, (sectionProgress - 2) * 2)
  } else {
    projectPhase = 1
    aboutPhase = 0
  }

  // 3D floating positions for each card - distributed in 3D space like particles
  // Positioned to accommodate 5 projects with better spacing
  const card3DPositions = [
    { x: 18, y: 22, z: 20, rotSpeed: 0.25, phaseX: 0, phaseY: 0, amplitudeX: 18, amplitudeY: 20 },     // Top left
    { x: 50, y: 20, z: 25, rotSpeed: 0.4, phaseX: 2.1, phaseY: 3.5, amplitudeX: 12, amplitudeY: 16 },    // Top center
    { x: 82, y: 24, z: 18, rotSpeed: 0.33, phaseX: 4.2, phaseY: 1.8, amplitudeX: 22, amplitudeY: 18 },    // Top right
    { x: 32, y: 68, z: 22, rotSpeed: 0.45, phaseX: 1.3, phaseY: 5.2, amplitudeX: 16, amplitudeY: 22 },    // Bottom left
    { x: 68, y: 70, z: 15, rotSpeed: 0.28, phaseX: 3.7, phaseY: 2.4, amplitudeX: 20, amplitudeY: 14 }     // Bottom right
  ]

  const getCardStyle = (index) => {
    const pos = card3DPositions[index]
    const isHovered = hoveredProject === projects[index].id
    const isSelected = selectedProject === projects[index].id

    // Enhanced floating animation - more dynamic movement with unique phases
    // Each card has its own phase offset and amplitude to prevent clumping
    let floatY = Math.sin(time * pos.rotSpeed + pos.phaseY) * pos.amplitudeY
    let floatX = Math.cos(time * pos.rotSpeed * 0.7 + pos.phaseX) * pos.amplitudeX
    const floatZ = Math.sin(time * pos.rotSpeed * 0.5 + (pos.phaseX + pos.phaseY) * 0.5) * (25 + index * 3)

    // Calculate current position for this card
    const currentX = pos.x + floatX
    const currentY = pos.y + floatY

    // Apply repulsion force to prevent overlap (more than 20%)
    // Check against all other cards
    for (let i = 0; i < projects.length; i++) {
      if (i === index) continue

      const otherPos = card3DPositions[i]
      const otherFloatY = Math.sin(time * otherPos.rotSpeed + otherPos.phaseY) * otherPos.amplitudeY
      const otherFloatX = Math.cos(time * otherPos.rotSpeed * 0.7 + otherPos.phaseX) * otherPos.amplitudeX
      const otherX = otherPos.x + otherFloatX
      const otherY = otherPos.y + otherFloatY

      // Calculate distance between cards (in viewport percentage)
      const dx = currentX - otherX
      const dy = currentY - otherY
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Card dimensions are roughly 20% width and 25% height in viewport
      // 20% overlap threshold means minimum distance should be ~20% of card diagonal
      const cardWidth = 20
      const cardHeight = 25
      const cardDiagonal = Math.sqrt(cardWidth * cardWidth + cardHeight * cardHeight)
      const minDistance = cardDiagonal * 0.6 // 60% of diagonal to ensure < 20% overlap

      if (distance < minDistance && distance > 0) {
        // Apply repulsion force proportional to overlap
        const repulsionStrength = (minDistance - distance) / minDistance
        const angle = Math.atan2(dy, dx)
        const pushForce = repulsionStrength * 8 // Adjust strength

        floatX += Math.cos(angle) * pushForce
        floatY += Math.sin(angle) * pushForce
      }
    }

    // Rotation animations for dynamic floating
    const rotateXAnim = Math.sin(time * 0.3 + index) * 8
    const rotateYAnim = Math.cos(time * 0.25 + index * 1.3) * 10
    const rotateZAnim = Math.sin(time * 0.2 + index * 0.8) * 5

    let x, y, z, scale, opacity, rotateX, rotateY, rotateZ, zIndex

    if (isSelected) {
      // Selected - center the card and ensure it stays within screen bounds
      // Clamp position to ensure card with 360px width stays visible
      // Using 50% center position keeps it safe from edges
      x = 50 // Center horizontally for selected state
      y = 50 // Center vertically for selected state
      z = 200 // Fixed Z position - brings forward but stays consistent
      scale = 1.0 // Normalized size (no scaling)
      opacity = 1
      rotateX = 0 // Straighten for readability
      rotateY = 0
      rotateZ = 0
      zIndex = 9999 // Ensure selected card is always on top
    } else if (aboutPhase > 0) {
      // About section - fade to background
      x = 50 + (pos.x - 50) * (1 - aboutPhase * 0.8)
      y = 50 + (pos.y - 50) * (1 - aboutPhase * 0.8)
      z = pos.z * (1 - aboutPhase)
      scale = 0.7 * (1 - aboutPhase * 0.5)
      opacity = 1 - aboutPhase * 0.9
      rotateX = aboutPhase * 45
      rotateY = aboutPhase * 30 * (index % 2 === 0 ? 1 : -1)
      rotateZ = 0
      zIndex = 10
    } else {
      // Floating in 3D space with dynamic rotation
      x = 50 + (pos.x - 50) * projectPhase + floatX * projectPhase
      y = 50 + (pos.y - 50) * projectPhase + floatY * projectPhase
      z = pos.z * projectPhase + floatZ * projectPhase
      scale = 0.7 + projectPhase * 0.15
      opacity = projectPhase
      rotateX = rotateXAnim * projectPhase
      rotateY = rotateYAnim * projectPhase
      rotateZ = rotateZAnim * projectPhase
      // Ensure all cards have proper z-index with larger separation
      // Give each card a distinct z-index based on its index
      zIndex = 300 + (index * 50)
    }

    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: `
        translate(-50%, -50%)
        translateZ(${z}px)
        scale(${scale})
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
      `,
      opacity: opacity,
      pointerEvents: projectPhase > 0.3 && aboutPhase < 0.5 ? 'all' : 'none',
      cursor: 'pointer',
      zIndex: zIndex,
      transition: isSelected
        ? 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease, filter 0.3s ease'
        : 'none' // No transition for smooth floating animation
    }
  }

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="section-header">
        <h2 className="section-title">Latest Projects</h2>
        <p className="section-subtitle">Floating in 3D space - Hover to highlight, Click to explore</p>
      </div>

      <div className="projects-grid"
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card project-floating ${selectedProject === project.id ? 'selected' : ''} ${hoveredProject === project.id ? 'hovered' : ''}`}
            style={getCardStyle(index)}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onClick={(e) => handleProjectClick(e, project.id)}
          >
            {/* Project Image */}
            <div className="project-image">
              <img
                src={project.thumbnail}
                alt={project.title}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x300/1a1a2e/ff7849?text=${encodeURIComponent(project.title)}`
                }}
              />
              <div className="project-overlay"></div>
            </div>

            {/* Always visible: Title and Category */}
            <div className="project-info-always">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-meta-row">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
            </div>

            {/* Only visible when selected: Description and Tools */}
            <div className={`project-details-hidden ${selectedProject === project.id ? 'visible' : ''}`}>
              <p className="project-description">{project.description}</p>

              <div className="project-tools">
                <span className="tools-label">Tools:</span>
                <div className="tools-list">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="project-cta">
                <span className="view-project-text">Click again to view full details</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <button
        className="see-all-button"
        onClick={() => navigate('/all-projects')}
      >
        <span className="see-all-text">See All Projects</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  )
}
