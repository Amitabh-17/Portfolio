'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, ExternalLink, Github, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { FuturisticButton } from '@/components/ui/futuristic-button'

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'Modern e-commerce solution with real-time inventory management',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'mobile',
    description: 'Secure and intuitive mobile banking application',
    image: '/api/placeholder/600/400',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: '3D Product Configurator',
    category: '3d',
    description: 'Interactive 3D product customization tool',
    image: '/api/placeholder/600/400',
    tags: ['Three.js', 'WebGL', 'React'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'AI Dashboard',
    category: 'web',
    description: 'Analytics dashboard with AI-powered insights',
    image: '/api/placeholder/600/400',
    tags: ['Vue.js', 'Python', 'TensorFlow'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Brand Identity Design',
    category: 'design',
    description: 'Complete brand identity package for tech startup',
    image: '/api/placeholder/600/400',
    tags: ['Figma', 'Illustrator', 'Branding'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 6,
    title: 'VR Experience',
    category: '3d',
    description: 'Immersive virtual reality experience for education',
    image: '/api/placeholder/600/400',
    tags: ['Unity', 'C#', 'Oculus'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

const categories = ['all', 'web', 'mobile', '3d', 'design']

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  const featuredItems = portfolioItems.filter(item => item.featured)
  const regularItems = filteredItems.filter(item => !item.featured)

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
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects and creative endeavors
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

        {featuredItems.length > 0 && activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
                    <div className="absolute inset-0 bg-black/40 z-20" />
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <div className="text-white text-center p-8">
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-lg mb-6 opacity-90">{item.description}</p>
                        <div className="flex gap-4 justify-center">
                          <FuturisticButton variant="glow" size="lg">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Live Demo
                          </FuturisticButton>
                          <FuturisticButton variant="outline" size="lg">
                            <Github className="w-5 h-5 mr-2" />
                            Source Code
                          </FuturisticButton>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                      animate={{
                        scale: hoveredItem === item.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {regularItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <GlassCard
                    variant="default"
                    interactive
                    className="h-full flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                        animate={{
                          scale: hoveredItem === item.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-1">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <FuturisticButton variant="ghost" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </FuturisticButton>
                        <FuturisticButton variant="ghost" size="sm" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </FuturisticButton>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}