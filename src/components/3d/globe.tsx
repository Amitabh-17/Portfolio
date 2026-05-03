'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, Text } from '@react-three/drei'
import * as THREE from 'three'

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const { mouse } = useThree()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  const points = []
  for (let i = 0; i < 100; i++) {
    const lat = (Math.random() - 0.5) * Math.PI
    const lon = Math.random() * Math.PI * 2
    const radius = 1.02
    
    points.push({
      position: new THREE.Vector3(
        radius * Math.cos(lat) * Math.cos(lon),
        radius * Math.sin(lat),
        radius * Math.cos(lat) * Math.sin(lon)
      ),
      size: Math.random() * 0.02 + 0.01,
    })
  }

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#1e40af"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
      
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
        />
      </Sphere>
      
      {points.map((point, index) => (
        <mesh key={index} position={point.position}>
          <sphereGeometry args={[point.size, 8, 8]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#60a5fa"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function ContactGlobe() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a78bfa" />
          <Globe />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxDistance={5}
            minDistance={2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}