'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 })
  const dotSpringX = useSpring(cursorX, { stiffness: 1000, damping: 28 })
  const dotSpringY = useSpring(cursorY, { stiffness: 1000, damping: 28 })

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const mouseDown = () => setIsClicking(true)
    const mouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor="hover"]')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', mouseMove, { passive: true })
    window.addEventListener('mousedown', mouseDown)
    window.addEventListener('mouseup', mouseUp)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mousedown', mouseDown)
      window.removeEventListener('mouseup', mouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  const ringSize = isHovering ? 48 : 32
  const ringScale = isClicking ? (isHovering ? 1.2 : 0.8) : 1

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-primary pointer-events-none z-50 mix-blend-difference"
        style={{
          width: ringSize,
          height: ringSize,
          x: springX,
          y: springY,
          translateX: `-${ringSize / 2}px`,
          translateY: `-${ringSize / 2}px`,
          scale: ringScale,
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: '-4px',
          translateY: '-4px',
          scale: isClicking ? 0.5 : 1,
        }}
      />
    </>
  )
}