import Hero from '@/components/Hero'
import Services from '@/components/Services'
import FeaturedProduct from '@/components/FeaturedProduct'
import About from '@/components/About'
import LatestResearch from '@/components/LatestResearch'
import LearningResources from '@/components/LearningResources'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProduct />
      <About />
      <LatestResearch />
      <LearningResources />
      <Testimonials />
      <Contact />
    </main>
  )
}