'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, Box, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function FloatingCube({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
    }
  })

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshStandardMaterial color={color} wireframe />
    </Box>
  )
}

function FloatingSphere({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 0.2
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.8, 16, 16]}>
      <meshStandardMaterial color={color} wireframe />
    </Sphere>
  )
}

function FloatingTorus({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02 * speed
      meshRef.current.rotation.z += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.4
    }
  })

  return (
    <Torus ref={meshRef} position={position} args={[1, 0.3, 16, 100]}>
      <meshStandardMaterial color={color} wireframe />
    </Torus>
  )
}

function Scene() {
  const { mouse } = useThree()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a78bfa" />
      
      <FloatingCube position={[-4, 2, 0]} color="#60a5fa" speed={0.8} />
      <FloatingSphere position={[4, -1, -2]} color="#a78bfa" speed={1.2} />
      <FloatingTorus position={[0, 3, -3]} color="#f472b6" speed={1} />
      <FloatingCube position={[-3, -2, 2]} color="#34d399" speed={1.5} />
      <FloatingSphere position={[3, 1, 3]} color="#fbbf24" speed={0.9} />
      
      <Text
        position={[0, 0, -5]}
        fontSize={1.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        CREATIVE
      </Text>
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}