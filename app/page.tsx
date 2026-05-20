import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ClientStrip from '@/components/ClientStrip'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import ImpactStats from '@/components/ImpactStats'
import Testimonials from '@/components/Testimonials'
import EsgSnapshot from '@/components/EsgSnapshot'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientStrip />
      <Problem />
      <Solution />
      <HowItWorks />
      <ImpactStats />
      <Testimonials />
      <EsgSnapshot />
      <CtaBanner />
      <Footer />
    </main>
  )
}