'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

interface Optimized3DSceneProps {
  className?: string
  cameraPosition?: [number, number, number]
  autoRotate?: boolean
  children?: React.ReactNode
}

function OptimizedScene({ autoRotate = true, children }: { autoRotate?: boolean; children?: React.ReactNode }) {
  const { camera } = useThree()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useFrame((state) => {
    if (autoRotate && !isMobile) {
      camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 10
      camera.position.z = Math.cos(state.clock.elapsedTime * 0.1) * 10
      camera.lookAt(0, 0, 0)
    }
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a78bfa" />
      
      {children}
      
      <OrbitControls
        enableZoom={!isMobile}
        enablePan={!isMobile}
        enableRotate={!isMobile}
        autoRotate={autoRotate}
        autoRotateSpeed={isMobile ? 0.2 : 0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  )
}

export default function Optimized3DScene({
  className = '',
  cameraPosition = [0, 0, 10],
  autoRotate = true,
  children,
}: Optimized3DSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: cameraPosition, fov: 75 }}
        dpr={window.devicePixelRatio}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <OptimizedScene autoRotate={autoRotate}>
            {children}
          </OptimizedScene>
        </Suspense>
      </Canvas>
    </div>
  )
}