'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import AnimatedCounter from '@/components/ui/animated-counter'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: '/api/placeholder/80/80',
    content: 'Working with this creative professional was an absolute game-changer for our company. The 3D web experience they created exceeded all our expectations and helped us increase user engagement by 300%.',
    rating: 5,
    project: 'E-Commerce Platform',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, Digital Solutions',
    avatar: '/api/placeholder/80/80',
    content: 'The attention to detail and technical expertise demonstrated throughout our project was outstanding. They delivered a beautiful, high-performance application that our users love.',
    rating: 5,
    project: 'Mobile Banking App',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Creative Director, Design Studio',
    avatar: '/api/placeholder/80/80',
    content: 'A true creative visionary who understands both design and technology. The interactive 3D product configurator they built for us has become a key selling point for our business.',
    rating: 5,
    project: '3D Product Configurator',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO, Innovation Labs',
    avatar: '/api/placeholder/80/80',
    content: 'Exceptional problem-solving skills and technical knowledge. They took our complex requirements and delivered an elegant solution that performs flawlessly across all devices.',
    rating: 5,
    project: 'AI Dashboard',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director, Brand Co.',
    avatar: '/api/placeholder/80/80',
    content: 'The brand identity work was incredible. They captured our vision perfectly and created a cohesive design system that has strengthened our market presence significantly.',
    rating: 5,
    project: 'Brand Identity Design',
  },
]

const stats = [
  { label: 'Happy Clients', value: '150+', icon: '👥' },
  { label: 'Projects Completed', value: '200+', icon: '🚀' },
  { label: 'Years Experience', value: '8+', icon: '⭐' },
  { label: 'Awards Won', value: '25+', icon: '🏆' },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <GlassCard variant="default" className="text-center p-6">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter end={parseInt(stat.value.replace('+', ''))} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="glass-effect"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">
                Client {currentIndex + 1} of {testimonials.length}
              </div>
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glass-effect"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard
                    variant="default"
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      <Quote className="w-6 h-6 text-primary mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 flex-1 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-primary">{testimonial.project}</div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <GlassCard variant="default" className="max-w-4xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">Join My Happy Clients</h3>
            <p className="text-muted-foreground mb-6">
              Ready to start your next project? Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="futuristic-button">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="glass-effect">
                Get In Touch
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}