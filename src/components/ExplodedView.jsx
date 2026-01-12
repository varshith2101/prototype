import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import './ExplodedView.css'

/**
 * Engine model component that handles the explosion effect
 */
function EngineModel({ explosionAmount }) {
  const group = useRef()
  const { scene } = useGLTF('/test.glb')
  const [explodedParts, setExplodedParts] = useState([])

  useEffect(() => {
    if (!scene) return

    // Find the parent object and all child meshes
    const parts = []

    // Get the parent's center position (should be at origin if it's an empty object)
    const parentCenter = new THREE.Vector3(0, 0, 0)

    // Traverse the scene and collect all meshes with their original positions
    scene.traverse((child) => {
      if (child.isMesh) {
        // Store the mesh with its explosion vector
        // The explosion vector is the direction from parent center to the mesh's position
        const meshWorldPos = new THREE.Vector3()
        child.getWorldPosition(meshWorldPos)

        // Calculate the direction from parent center to this mesh
        const explosionVector = meshWorldPos.clone().sub(parentCenter)

        // If the mesh is at the center, give it a random explosion direction
        if (explosionVector.length() < 0.001) {
          explosionVector.set(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          ).normalize()
        }

        // Store original position
        const originalPos = child.position.clone()

        // Apply metallic material
        child.material = new THREE.MeshStandardMaterial({
          color: 0xaaaaaa,
          metalness: 0.9,
          roughness: 0.2,
        })

        parts.push({
          mesh: child,
          originalPosition: originalPos,
          explosionVector: explosionVector.normalize(),
        })
      }
    })

    setExplodedParts(parts)
  }, [scene])

  // Update positions based on explosion amount
  useFrame(() => {
    explodedParts.forEach(({ mesh, originalPosition, explosionVector }) => {
      // Calculate the displacement based on explosion amount
      // Scale the explosion vector by the explosion amount (0-30 units for large model)
      const displacement = explosionVector.clone().multiplyScalar(explosionAmount * 30)

      // Set the new position
      mesh.position.copy(originalPosition).add(displacement)
    })
  })

  return <primitive ref={group} object={scene} />
}

/**
 * Main ExplodedView component
 */
function ExplodedView() {
  const [explosionAmount, setExplosionAmount] = useState(0)

  return (
    <div className="exploded-view-container">
      <Canvas
        camera={{ position: [80, 80, 80], fov: 50 }}
        gl={{ antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[100, 100, 50]} intensity={1} />
        <directionalLight position={[-100, -100, -50]} intensity={0.5} />
        <pointLight position={[0, 50, 0]} intensity={0.5} />

        {/* Engine Model */}
        <EngineModel explosionAmount={explosionAmount} />

        {/* Orbital Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={20}
          maxDistance={200}
        />
      </Canvas>

      {/* Explosion Control Slider */}
      <div className="controls">
        <div className="slider-container">
          <label htmlFor="explosion-slider">
            Explosion: {(explosionAmount * 100).toFixed(0)}%
          </label>
          <input
            id="explosion-slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={explosionAmount}
            onChange={(e) => setExplosionAmount(parseFloat(e.target.value))}
            className="explosion-slider"
          />
        </div>
      </div>
    </div>
  )
}

export default ExplodedView
