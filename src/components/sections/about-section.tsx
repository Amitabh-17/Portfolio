'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">About</span>
          </h2>
        </motion.div>

        <GlassCard variant="default" className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-primary" />
            My Story
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>I am a BTech Computer Science student with a strong focus on Data Science, Machine Learning, and real-world problem solving.</p>
            <p>I enjoy working with data — from cleaning and preprocessing to building models that generate meaningful insights and predictions. My work involves applying data analysis, visualization, and machine learning techniques to solve practical problems.</p>
            <p>Recently, I have been working on projects involving crime data analytics, where I analyze patterns, identify trends, and build predictive models for better decision-making.</p>
            <p>I am continuously improving my skills in data analysis, machine learning, and system development, with the goal of building impactful and intelligent solutions.</p>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
