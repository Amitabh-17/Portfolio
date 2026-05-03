'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Palette, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import ParallaxSection from '@/components/ui/parallax-section'
import FloatingElement from '@/components/ui/floating-element'
import MagneticButton from '@/components/ui/magnetic-button'
import dynamic from 'next/dynamic'

// Dynamically import HeroScene to avoid SSR issues
const HeroScene = dynamic(() => import('@/components/3d/hero-scene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/90" />
})

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <ParallaxSection speed={0.2}>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 text-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi, I'm
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                a CSE Data Science Student
              </span>
            </motion.h1>
          </ParallaxSection>
          
          <ParallaxSection speed={0.3}>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              3rd-year B.Tech CSE (Data Science) student building smooth, performant, and user-focused web + AI projects.
            </motion.p>
          </ParallaxSection>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <MagneticButton strength={0.2}>
              <Button 
                size="lg" 
                className="futuristic-button text-lg px-8 py-4"
                onClick={() => scrollToSection('portfolio')}
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-effect text-lg px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
              </Button>
            </MagneticButton>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <FloatingElement duration={3} delay={0} distance={8}>
              <div className="text-center">
                <div className="glass-effect p-4 rounded-full mb-2 inline-block">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">DS + Development</p>
              </div>
            </FloatingElement>
            <FloatingElement duration={3.5} delay={0.5} distance={10}>
              <div className="text-center">
                <div className="glass-effect p-4 rounded-full mb-2 inline-block">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Smooth UI</p>
              </div>
            </FloatingElement>
            <FloatingElement duration={4} delay={1} distance={12}>
              <div className="text-center">
                <div className="glass-effect p-4 rounded-full mb-2 inline-block">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Performance First</p>
              </div>
            </FloatingElement>
          </motion.div>
        </motion.div>
        
        <FloatingElement duration={2} delay={0} distance={20}>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
          </motion.div>
        </FloatingElement>
      </div>
    </section>
  )
}