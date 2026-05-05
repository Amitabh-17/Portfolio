'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

function FloatingCube({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.004 * speed
    meshRef.current.rotation.y += 0.004 * speed
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2
  })
  return <Box ref={meshRef} position={position} args={[0.9, 0.9, 0.9]}><meshStandardMaterial color={color} wireframe /></Box>
}

function FloatingSphere({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.003 * speed
    meshRef.current.rotation.y += 0.005 * speed
    meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 0.15
  })
  return <Sphere ref={meshRef} position={position} args={[0.7, 12, 12]}><meshStandardMaterial color={color} wireframe /></Sphere>
}

function FloatingTorus({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.005 * speed
    meshRef.current.rotation.z += 0.004 * speed
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.25
  })
  return <Torus ref={meshRef} position={position} args={[0.9, 0.25, 10, 50]}><meshStandardMaterial color={color} wireframe /></Torus>
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[8, 8, 8]} intensity={0.7} color="#60a5fa" />
      <pointLight position={[-8, -8, -8]} intensity={0.35} color="#a78bfa" />
      <FloatingCube position={[-4, 2, 0]} color="#60a5fa" speed={0.7} />
      <FloatingSphere position={[4, -1, -2]} color="#a78bfa" speed={1} />
      <FloatingTorus position={[0, 3, -3]} color="#f472b6" speed={0.8} />
      <FloatingCube position={[-3, -2, 2]} color="#34d399" speed={1.1} />
      <FloatingSphere position={[3, 1, 3]} color="#fbbf24" speed={0.8} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate autoRotate autoRotateSpeed={0.2} />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
