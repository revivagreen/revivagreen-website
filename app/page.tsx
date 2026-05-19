import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ClientStrip from '@/components/ClientStrip'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientStrip />
      <Problem />
      <Solution />
      <HowItWorks />
      {/* Next sections coming soon:
          <ImpactStats />
          <Testimonials />
          <EsgSnapshot />
          <CtaBanner />
          <Footer />
      */}
    </main>
  )
}