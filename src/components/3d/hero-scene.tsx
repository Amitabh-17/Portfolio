'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, color, type = 'box', speed = 1 }: { position: [number, number, number]; color: string; type?: 'box' | 'sphere'; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const frameBudget = useRef(0)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    frameBudget.current += delta
    if (frameBudget.current < 1 / 30) return
    frameBudget.current = 0

    meshRef.current.rotation.x += 0.0025 * speed
    meshRef.current.rotation.y += 0.0025 * speed
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.12
  })

  if (type === 'sphere') {
    return (
      <Sphere ref={meshRef} position={position} args={[0.7, 10, 10]}>
        <meshStandardMaterial color={color} wireframe />
      </Sphere>
    )
  }

  return (
    <Box ref={meshRef} position={position} args={[0.8, 0.8, 0.8]}>
      <meshStandardMaterial color={color} wireframe />
    </Box>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[6, 6, 6]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[-6, -6, -6]} intensity={0.25} color="#a78bfa" />

      <FloatingShape position={[-3, 1.5, 0]} color="#60a5fa" speed={0.7} type="box" />
      <FloatingShape position={[3, -1, -1.5]} color="#a78bfa" speed={0.9} type="sphere" />
      <FloatingShape position={[0.5, 2.4, -2]} color="#34d399" speed={0.8} type="box" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.12}
      />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 70 }}
        dpr={[1, 1.25]}
        frameloop="always"
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
