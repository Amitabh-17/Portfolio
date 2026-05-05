'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GlassCard } from '@/components/ui/glass-card'

const skills = [
  'Python',
  'Data Science',
  'EDA (Exploratory Data Analysis)',
  'Tableau',
  'Excel',
  'SQL',
  'DBMS',
  'Java',
  'Machine Learning',
]

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
        </motion.div>

        <GlassCard variant="default" className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-muted-foreground">
            {skills.map((skill) => (
              <li key={skill} className="rounded-lg border border-border/50 bg-background/30 px-4 py-3">
                {skill}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}
