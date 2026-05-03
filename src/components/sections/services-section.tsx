'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Zap, 
  Target, 
  Users, 
  Lightbulb,
  Database,
  Shield,
  Rocket,
  Award
} from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { FuturisticButton } from '@/components/ui/futuristic-button'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices',
    features: ['React/Vue/Angular', 'TypeScript', 'Progressive Web Apps', 'SEO Optimized'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive engagement',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps that provide native performance',
    features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Optimization'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: '3D & WebGL',
    description: 'Immersive 3D experiences and interactive web graphics',
    features: ['Three.js', 'WebGL', 'Babylon.js', 'AR/VR Integration'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications optimized for speed and scalability',
    features: ['Code Splitting', 'Lazy Loading', 'CDN Integration', 'Monitoring'],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Target,
    title: 'Creative Strategy',
    description: 'Strategic planning and execution for digital transformation',
    features: ['Digital Strategy', 'Brand Identity', 'User Journey Mapping', 'Analytics'],
    color: 'from-indigo-500 to-purple-500',
  },
]

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description: 'Understanding your vision and requirements',
  },
  {
    icon: Users,
    title: 'Strategy',
    description: 'Planning the perfect approach for your project',
  },
  {
    icon: Database,
    title: 'Development',
    description: 'Building your solution with cutting-edge technology',
  },
  {
    icon: Shield,
    title: 'Testing',
    description: 'Ensuring quality and performance excellence',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploying your project to the world',
  },
  {
    icon: Award,
    title: 'Support',
    description: 'Ongoing maintenance and optimization',
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="min-h-screen py-20 relative overflow-hidden">
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
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <GlassCard
                variant="default"
                interactive
                className="h-full flex flex-col"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton variant="ghost" className="w-full">
                  Learn More
                </FuturisticButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center">My Process</h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-30 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
                    
                    <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    
                    <div className="hidden lg:block absolute top-10 -left-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <GlassCard variant="default" className="max-w-4xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to create something extraordinary. Whether you need a complete web application, 
              a stunning design, or technical consultation, I'm here to help bring your vision to life.
            </p>
            <FuturisticButton variant="glow" size="lg">
              Get Started Today
            </FuturisticButton>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}