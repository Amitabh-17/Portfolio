'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

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
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const distance = 200 * speed
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [distance, -distance] : [-distance, distance]
  )

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}