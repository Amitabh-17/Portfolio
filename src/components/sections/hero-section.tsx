'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('@/components/3d/hero-scene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/90" />,
})

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Hi, I'm a</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Data Science & AI Developer building intelligent analytics and predictive systems
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto">
            Focused on solving real-world problems through machine learning, data analysis, and clean system development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button size="lg" className="futuristic-button text-lg px-8 py-4" onClick={() => scrollToSection('projects')}>
              View Project
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="glass-effect text-lg px-8 py-4" onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
