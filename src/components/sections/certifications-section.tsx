'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, BadgeCheck, Briefcase } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'

const certifications = [
  {
    title: 'Database Management Essentials (with Honors)',
    issuer: 'University of Colorado Boulder, via Coursera',
    date: 'Mar 2025',
    type: 'certification',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/H79NF28CDI7I',
  },
  {
    title: 'Linux Fundamentals',
    issuer: 'LearnQuest, via Coursera',
    date: 'Mar 2025',
    type: 'certification',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/TSTRBZ21BN0O',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte, via Forage',
    date: 'Jun 2025',
    type: 'virtual',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Quantium, via Forage',
    date: 'Jul 2025',
    type: 'virtual',
  },
  {
    title: 'Data Processing and Visualisation',
    issuer: 'NASSCOM FutureSkills Prime',
    date: 'Apr 2026',
    type: 'certification',
  },
  {
    title: 'Exploratory Data Analysis',
    issuer: 'NASSCOM FutureSkills Prime',
    date: 'Apr 2026',
    type: 'certification',
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Tata Group, via Forage',
    date: 'Apr 2026',
    type: 'virtual',
  },
  {
    title: 'Getting Started with Microsoft Excel',
    issuer: 'Coursera',
    date: 'Apr 2026',
    type: 'certification',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/WG8K3WG35XF0',
  },
  {
    title: 'Enterprise Data Science in Practice',
    issuer: 'IBM SkillsBuild',
    date: 'May 2026',
    type: 'certification',
    verifyUrl: 'https://www.credly.com/badges/a272cb6b-1983-489c-bed3-2bcbc62df98c',
  },
]

export default function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="min-h-screen py-20 relative overflow-hidden">
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
              Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Courses, credentials, and virtual job simulations I've completed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <GlassCard variant="default" interactive className="h-full flex flex-col p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    {cert.type === 'virtual' ? (
                      <Briefcase className="w-6 h-6 text-white" />
                    ) : (
                      <Award className="w-6 h-6 text-white" />
                    )}
                  </div>
                  {cert.type === 'virtual' && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary/15 text-secondary">
                      Virtual Experience
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary mb-4">{cert.date}</p>
                <div className="mt-auto flex items-center text-sm">
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline"
                    >
                      Verify credential
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  ) : (
                    <span className="flex items-center text-muted-foreground">
                      <BadgeCheck className="w-3.5 h-3.5 mr-1.5" />
                      Completed
                    </span>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
