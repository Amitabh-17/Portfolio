'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, CheckCircle2, CalendarDays, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { GlassCard } from '@/components/ui/glass-card'

const internships = [
  {
    role: 'Prompt Engineering Intern',
    company: 'InAmigos Foundation',
    duration: 'Aug 2026 – Sep 2026',
    description:
      "Completed a two-week AI Prompt Engineering internship, contributing to organizational communication and coordination workflows.",
    points: [
      'Managed assigned groups and ensured smooth day-to-day communication with the team.',
      'Coordinated with superiors to meet organizational goals and deadlines in a flexible, remote setup.',
    ],
    certificateImage: '/certificates/inamigos-certificate.jpg',
  },
]

export default function InternshipSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [openCertificate, setOpenCertificate] = useState<string | null>(null)

  return (
    <section id="internship" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Internship
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {internships.map((intern, index) => (
            <motion.div
              key={`${intern.role}-${intern.company}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <GlassCard variant="default" className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{intern.role}</h3>
                    <p className="text-muted-foreground">{intern.company}</p>
                    <div className="flex items-center text-sm text-primary mt-1">
                      <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                      {intern.duration}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{intern.description}</p>

                <ul className="space-y-2 mb-6">
                  {intern.points.map((point) => (
                    <li key={point} className="flex items-start text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 mt-2 mr-3 rounded-full bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="inline-flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-primary" />
                    Completed
                  </span>

                  <button
                    onClick={() => setOpenCertificate(intern.certificateImage)}
                    className="group relative w-24 h-16 rounded-md overflow-hidden border border-white/10 hover:border-primary/50 transition-colors"
                    aria-label="View completion certificate"
                  >
                    <Image
                      src={intern.certificateImage}
                      alt={`${intern.role} completion certificate`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </span>
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {openCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenCertificate(null)}
        >
          <div className="relative max-w-3xl w-full">
            <Image
              src={openCertificate}
              alt="Internship completion certificate"
              width={1400}
              height={990}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
