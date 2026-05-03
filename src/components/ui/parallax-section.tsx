'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/use-parallax'
import { ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down'
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
}: ParallaxSectionProps) {
  const offset = useParallax(speed)
  const yOffset = direction === 'up' ? -offset : offset

  return (
    <motion.div
      className={className}
      style={{ y: yOffset }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}