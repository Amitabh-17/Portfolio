'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Target, Code2, Database, BrainCircuit, LineChart, Wrench } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import AnimatedCounter from '@/components/ui/animated-counter'

const highlights = [
  { end: 740, suffix: 'K+', label: 'Crime records analyzed' },
  { end: 96, suffix: '%', label: 'ROC-AUC on bankruptcy model' },
  { end: 2, suffix: '', label: 'End-to-end ML projects deployed' },
  { end: 9, suffix: '', label: 'Certifications completed' },
]

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Exploratory Data Analysis', 'Tableau'],
  },
  {
    title: 'Machine Learning',
    icon: BrainCircuit,
    skills: ['scikit-learn', 'Random Forest', 'Model Evaluation'],
  },
  {
    title: 'Databases & Systems',
    icon: LineChart,
    skills: ['Relational Database Design (DBMS)', 'Linux (Shell Environment)'],
  },
  {
    title: 'Tools & Deployment',
    icon: Wrench,
    skills: ['Streamlit', 'Microsoft Excel', 'Git/GitHub'],
  },
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
            A Data Science & Analytics student who loves turning raw data into decisions
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
                  I'm a B.Tech Computer Science student at DIT University, Dehradun (CGPA 7.7/10 through 6th semester), specializing in Data Science and Analytics. I enjoy working hands-on with Python, SQL, and machine learning to turn large, messy datasets into models and dashboards that are actually usable by non-technical stakeholders.
                </p>
                <p>
                  I've built end-to-end analytics and machine learning projects — from a crime-prediction pipeline on over 740,000 LAPD records to an explainable corporate bankruptcy predictor trained on heavily imbalanced financial data — covering everything from data cleaning and feature engineering to model deployment.
                </p>
                <p>
                  Outside of my projects, I've completed virtual job simulations with Deloitte and Tata Group, and I'm always looking to apply data-driven problem solving to real-world analytical and business challenges.
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
                {skillGroups.map((group, index) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center mb-2">
                      <group.icon className="w-5 h-5 mr-2 text-primary" />
                      <span className="font-medium">{group.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <GlassCard variant="default" className="text-center py-8">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={item.end} suffix={item.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}