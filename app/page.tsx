import HeroSection from '@/components/landing/hero-section'
import JobSearchSection from '@/components/landing/job-search-section'
import HowItWorksSection from '@/components/landing/how-it-works-section'
import FeaturedCompaniesSection from '@/components/landing/featured-companies-section'
import BenefitsSection from '@/components/landing/benefits-section'
import TestimonialsSection from '@/components/landing/testimonials-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section id="job-search">
        <JobSearchSection />
      </section> 
      <HowItWorksSection />
      <FeaturedCompaniesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
