'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { FuturisticButton } from '@/components/ui/futuristic-button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import ContactGlobe from '@/components/3d/globe'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yourname@email.com',
    link: 'mailto:yourname@email.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 00000 00000',
    link: 'tel:+910000000000',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    link: 'https://maps.google.com',
  },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/', color: 'hover:text-gray-400' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/', color: 'hover:text-blue-400' },
  { icon: Twitter, label: 'Twitter', url: 'https://x.com/', color: 'hover:text-blue-300' },
  { icon: MessageCircle, label: 'Discord', url: 'https://discord.com/', color: 'hover:text-purple-400' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I will reply soon.",
      })
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to internships, collaborations, and project discussions in data science and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard variant="default" className="p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} aria-label="Reset contact form">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="glass-effect"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="glass-effect"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="glass-effect"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="glass-effect min-h-[120px]"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <FuturisticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      variant="glow"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </FuturisticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <GlassCard variant="default" className="p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${social.label}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="default" className="p-8">
              <h3 className="text-2xl font-bold mb-6">Global Reach</h3>
              <ContactGlobe />
              <p className="text-center text-muted-foreground mt-4">
                Working with clients worldwide
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}