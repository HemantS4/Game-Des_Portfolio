import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import '../styles/LockScreen.css'

// Controller Model Component
function ControllerModel({ rotationY, rotationX }) {
  const modelPath = import.meta.env.BASE_URL + 'models/Controller.glb'
  const gltf = useGLTF(modelPath)
  const modelRef = useRef()

  // Smooth rotation updates
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationY
      modelRef.current.rotation.x = rotationX
    }
  }, [rotationY, rotationX])

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={3.5}
      position={[0, 0, 0]}
    />
  )
}

export default function LockScreen({ onUnlock }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
      // Prevent scrolling but don't rotate model
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  const handleUnlock = () => {
    if (onUnlock) {
      onUnlock()
    }
  }

  return (
    <div
      ref={containerRef}
      className="lock-screen"
    >
      <div className="lock-content">
        <div className="rotating-model">
          <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, -5, -5]} intensity={0.5} />
            <pointLight position={[0, 0, 5]} intensity={0.8} color="#ff7849" />

            <Suspense fallback={null}>
              <ControllerModel rotationY={rotation.y} rotationX={rotation.x} />
            </Suspense>
          </Canvas>
        </div>

        <div className="lock-instructions">
          <h1 className="lock-title">Hemant Sharma</h1>
          <p className="lock-subtitle">Game Designer</p>

          <div className="working-message">
            <p>Working on it...</p>
          </div>
        </div>
      </div>

      {/* Background particles */}
      <div className="lock-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
