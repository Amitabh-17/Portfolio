'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Award, BookOpen, Code, Palette, Zap, Users, Target } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { NeumorphismCard } from '@/components/ui/neumorphism-card'

const timelineItems = [
  {
    year: '2024',
    title: 'Senior Creative Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of immersive web experiences with cutting-edge technologies',
    type: 'experience',
  },
  {
    year: '2023',
    title: 'Advanced 3D Design Certification',
    company: 'Design Academy',
    description: 'Specialized training in Three.js and WebGL development',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed scalable web applications and led UI/UX initiatives',
    type: 'experience',
  },
  {
    year: '2021',
    title: 'Computer Science Degree',
    company: 'Tech University',
    description: 'Graduated with honors, specializing in Human-Computer Interaction',
    type: 'education',
  },
]

const skills = [
  { name: 'Frontend Development', level: 95, icon: Code },
  { name: '3D Design', level: 85, icon: Palette },
  { name: 'UI/UX Design', level: 90, icon: Users },
  { name: 'Performance Optimization', level: 88, icon: Zap },
  { name: 'Project Management', level: 82, icon: Target },
  { name: 'Creative Strategy', level: 87, icon: BookOpen },
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate creative professional bridging the gap between technology and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard variant="default" className="h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a creative professional with a passion for building immersive digital experiences that blend cutting-edge technology with stunning design. My journey began at the intersection of code and creativity, where I discovered my love for bringing ideas to life through interactive web applications.
                </p>
                <p>
                  With expertise in both frontend development and 3D design, I specialize in creating experiences that not only look beautiful but also perform flawlessly. I believe in the power of technology to tell stories and create meaningful connections between brands and their audiences.
                </p>
                <p>
                  When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or experimenting with the latest in webGL and creative coding.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard variant="default" className="h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-primary" />
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="w-5 h-5 mr-2 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Journey & Experience</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-30" />
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-8">
                    <NeumorphismCard
                      variant={index % 2 === 0 ? 'light' : 'dark'}
                      interactive
                      className="p-6"
                    >
                      <div className="flex items-center mb-3">
                        {item.type === 'experience' ? (
                          <Award className="w-5 h-5 mr-2 text-primary" />
                        ) : (
                          <Calendar className="w-5 h-5 mr-2 text-primary" />
                        )}
                        <span className="text-sm font-medium text-primary">{item.year}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </NeumorphismCard>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  
                  <div className="w-1/2 px-8">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          {item.type === 'experience' ? (
                            <Award className="w-8 h-8 text-white" />
                          ) : (
                            <BookOpen className="w-8 h-8 text-white" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground capitalize">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}