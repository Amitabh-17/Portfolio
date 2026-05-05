'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GlassCard } from '@/components/ui/glass-card'

const skillGroups = [
  {
    title: 'Programming & Tools',
    items: ['Python', 'SQL', 'Excel', 'Linux'],
  },
  {
    title: 'Data Science',
    items: ['Data Cleaning & Preprocessing', 'Exploratory Data Analysis (EDA)', 'Data Visualization', 'Feature Engineering'],
  },
  {
    title: 'Machine Learning',
    items: ['Predictive Modeling', 'Classification Models', 'Data-driven Decision Systems'],
  },
  {
    title: 'Visualization',
    items: ['Business Insights Visualization', 'Dashboard Thinking'],
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold mb-4"><span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Skills</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Focused, relevant, and practical capabilities for data-driven development.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <GlassCard variant="default" className="h-full">
                <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {group.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
