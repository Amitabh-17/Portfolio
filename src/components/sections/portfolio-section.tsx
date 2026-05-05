'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { FuturisticButton } from '@/components/ui/futuristic-button'

const projectLinks = { demo: '#', code: '#' }

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4"><span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span></h2>
        </motion.div>

        <GlassCard variant="default" className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Crime Intelligence & Urban Safety Analytics</h3>
          <p className="text-muted-foreground mb-4">Developed a data-driven crime analytics system using the LA Crime Dataset from Kaggle.</p>
          <p className="text-muted-foreground mb-4">Performed data cleaning, preprocessing, feature engineering, and exploratory data analysis to uncover meaningful patterns in crime data.</p>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Visual analytics built:</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Top 10 crime types</li><li>• Crime hotspots (high-risk areas)</li><li>• Victim age distribution</li><li>• Violent vs non-violent crime ratio</li><li>• Monthly crime trends</li><li>• Crime distribution by hour and day</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Machine learning models:</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Crime Type Prediction Model — predicts likely crime type based on time, location, and contextual inputs.</li>
              <li>• Crime Risk Prediction Model — estimates probability of crime occurrence in specific areas and time windows.</li>
            </ul>
          </div>

          <p className="text-muted-foreground mb-6">Currently extending the project into an interactive dashboard and web-based system for real-time insights.</p>

          <div className="flex gap-3 flex-wrap">
            <FuturisticButton variant="outline" size="sm" onClick={() => window.open(projectLinks.demo, '_blank', 'noopener,noreferrer')}><ExternalLink className="w-4 h-4 mr-2" />Live Demo</FuturisticButton>
            <FuturisticButton variant="outline" size="sm" onClick={() => window.open(projectLinks.code, '_blank', 'noopener,noreferrer')}><Github className="w-4 h-4 mr-2" />Source Code</FuturisticButton>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
