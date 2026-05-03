import Navigation from '@/components/ui/navigation'
import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import PortfolioSection from '@/components/sections/portfolio-section'
import ServicesSection from '@/components/sections/services-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import ContactSection from '@/components/sections/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      <AboutSection />
      
      <PortfolioSection />
      
      <ServicesSection />
      
      <TestimonialsSection />
      
      <ContactSection />
    </div>
  )
}