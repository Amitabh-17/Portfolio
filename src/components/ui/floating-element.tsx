'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  duration?: number
  delay?: number
  distance?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function FloatingElement({
  children,
  duration = 3,
  delay = 0,
  distance = 10,
  direction = 'up',
}: FloatingElementProps) {
  const getAnimation = () => {
    switch (direction) {
      case 'up':
        return { y: [-distance, distance, -distance] }
      case 'down':
        return { y: [distance, -distance, distance] }
      case 'left':
        return { x: [-distance, distance, -distance] }
      case 'right':
        return { x: [distance, -distance, distance] }
      default:
        return { y: [-distance, distance, -distance] }
    }
  }

  return (
    <motion.div
      animate={getAnimation()}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}