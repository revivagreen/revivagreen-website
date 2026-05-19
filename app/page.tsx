import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ClientStrip from '@/components/ClientStrip'
import Problem from '@/components/Problem'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientStrip />
      <Problem />
      {/* Next sections coming soon:
          <Solution />
          <HowItWorks />
          <ImpactStats />
          <Testimonials />
          <EsgSnapshot />
          <CtaBanner />
          <Footer />
      */}
    </main>
  )
}