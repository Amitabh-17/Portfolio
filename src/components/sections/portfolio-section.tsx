'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, ExternalLink, Github, MapPinned, TrendingDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FuturisticButton } from '@/components/ui/futuristic-button'

const portfolioItems = [
  {
    id: 1,
    title: 'Urban Crime Data Analytics',
    category: 'analytics',
    description: 'End-to-end analytics pipeline on 740,000+ LAPD crime incident records, with a Random Forest classifier predicting crime type and an interactive Streamlit dashboard for hotspot mapping and temporal trends.',
    icon: MapPinned,
    stat: '740K+ Records',
    tags: ['Python', 'Pandas', 'scikit-learn', 'Plotly', 'Streamlit'],
    demoUrl: 'https://la-crime-analytics.streamlit.app/',
    githubUrl: 'https://github.com/Amitabh-17/LA-Crime-Analytics',
    featured: true,
  },
  {
    id: 2,
    title: 'Explainable Corporate Bankruptcy Predictor',
    category: 'ml',
    description: 'Credit risk pipeline predicting corporate failure on heavily imbalanced data (3.2% minority class), achieving 0.534 PR-AUC and 0.959 ROC-AUC with a class-weighted LightGBM model, explained via SHAP.',
    icon: TrendingDown,
    stat: '0.959 ROC-AUC',
    tags: ['Python', 'LightGBM', 'XGBoost', 'SHAP', 'Streamlit'],
    demoUrl: 'https://corporate-bankruptcy-prediction.streamlit.app/',
    githubUrl: 'https://github.com/Amitabh-17/corporate-bankruptcy-prediction',
    featured: true,
  },
]

const categories = ['all', 'analytics', 'ml']

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end analytics and machine learning projects I've built and deployed
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="glass-effect capitalize"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative h-96 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-background"
                      animate={{ scale: hoveredItem === item.id ? 1.05 : 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-primary mb-2">{item.stat}</span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-base mb-4 opacity-90 text-white max-w-md">{item.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 text-white rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 justify-center">
                        <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
                          <FuturisticButton variant="glow" size="lg">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Live Demo
                          </FuturisticButton>
                        </a>
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                          <FuturisticButton variant="outline" size="lg">
                            <Github className="w-5 h-5 mr-2" />
                            Source Code
                          </FuturisticButton>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}