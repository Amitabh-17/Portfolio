'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { FuturisticButton } from '@/components/ui/futuristic-button'

type PortfolioItem = {
  id: number
  title: string
  category: 'web' | 'data' | 'ml'
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Student Performance Analytics Dashboard',
    category: 'data',
    description: 'Interactive dashboard to analyze academic performance trends and attendance insights.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'Pandas', 'Streamlit'],
    featured: true,
  },
  {
    id: 2,
    title: 'Portfolio Website (This Project)',
    category: 'web',
    description: 'High-performance animated portfolio built with modern frontend practices.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'House Price Prediction',
    category: 'ml',
    description: 'Regression-based model for estimating property price from tabular features.',
    image: '/api/placeholder/600/400',
    tags: ['Scikit-learn', 'EDA', 'Matplotlib'],
    featured: false,
  },
  {
    id: 4,
    title: 'Task Manager API',
    category: 'web',
    description: 'RESTful API and frontend task manager with authentication-ready architecture.',
    image: '/api/placeholder/600/400',
    tags: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/',
    featured: false,
  },
]

const categories = ['all', 'web', 'data', 'ml'] as const

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('all')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = useMemo(
    () => (activeCategory === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory)),
    [activeCategory],
  )

  const featuredItems = filteredItems.filter(item => item.featured)
  const regularItems = filteredItems.filter(item => !item.featured)

  return (
    <section id="portfolio" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Selected work in web development and data science.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button key={category} variant={activeCategory === category ? 'default' : 'outline'} onClick={() => setActiveCategory(category)} className="glass-effect capitalize" aria-label={`Filter ${category}`}>
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {featuredItems.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredItems.map(item => (
                <div key={item.id} className="group relative overflow-hidden rounded-2xl" onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)}>
                  <div className="relative h-96 overflow-hidden">
                    <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} animate={{ scale: hoveredItem === item.id ? 1.05 : 1 }} transition={{ duration: 0.4 }} />
                    <div className="absolute inset-0 bg-black/50 z-20" />
                    <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end text-white">
                      <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                      <p className="mb-6 opacity-90">{item.description}</p>
                      <div className="flex gap-3">
                        {item.demoUrl && <a href={item.demoUrl} target="_blank" rel="noreferrer"><FuturisticButton variant="glow" size="lg"><ExternalLink className="w-5 h-5 mr-2" />Demo</FuturisticButton></a>}
                        {item.githubUrl && <a href={item.githubUrl} target="_blank" rel="noreferrer"><FuturisticButton variant="outline" size="lg"><Github className="w-5 h-5 mr-2" />Code</FuturisticButton></a>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {regularItems.map((item, index) => (
                <motion.div key={item.id} layout initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="group" onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)}>
                  <GlassCard variant="default" interactive className="h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                      <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} animate={{ scale: hoveredItem === item.id ? 1.06 : 1 }} transition={{ duration: 0.35 }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground mb-4 flex-1">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">{item.tags.map(tag => <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{tag}</span>)}</div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
