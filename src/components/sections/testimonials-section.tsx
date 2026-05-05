'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'
import { Button } from '@/components/ui/button'

const certifications = [
  { name: 'Database Management Essentials', platform: 'Professional Certificate', year: '2025', url: '#' },
  { name: 'Data Visualisation (TATA)', platform: 'TATA Forage', year: '2025', url: '#' },
  { name: 'Deloitte Data Analytics Simulation', platform: 'Deloitte Forage', year: '2025', url: '#' },
  { name: 'Linux Fundamentals', platform: 'Professional Certificate', year: '2024', url: '#' },
  { name: 'Excel Project', platform: 'Professional Certificate', year: '2024', url: '#' },
]

export default function TestimonialsSection() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4"><span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Certifications</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
              <GlassCard variant="default" className="h-full">
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.platform}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.year}</p>
                <Button asChild variant="outline" size="sm" className="glass-effect">
                  <a href={cert.url} target="_blank" rel="noreferrer">View</a>
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
