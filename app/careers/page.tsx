import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | RevivaGreen Ventures Private Limited',
  description:
    'Join the RevivaGreen team. We are building the circular economy compliance infrastructure for Andhra Pradesh and India. Send your CV to info@revivagreen.com.',
}

export default function CareersPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-20 min-h-[50vh] flex items-center">
        <div className="container">
          <p className="eyebrow mb-5">Join us</p>
          <h1 className="h1 text-white max-w-3xl">
            We are growing.{' '}
            <span className="text-[#1D9E75]">Come build with us.</span>
          </h1>
          <p className="mt-5 text-white/60 text-[18px] leading-[1.7] max-w-xl">
            RevivaGreen is building Andhra Pradesh&apos;s most trusted circular
            economy compliance platform. If you want to work on a real problem
            with real impact, we want to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">

            <div className="bg-[#F5F0E8] border border-[#D3D1C7] rounded-2xl p-12 mb-10">
              <div className="w-16 h-16 rounded-full bg-[#1D9E75]/10 border-2 border-[#1D9E75] flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="text-[#0A1F14] font-medium text-[24px] mb-4">
                No open roles listed yet.
              </h2>
              <p className="text-[#888780] text-[16px] leading-[1.7] mb-6">
                We are a small, focused team — and we hire carefully. If you
                believe you can add value to what we are building, send us your
                CV and a short note about why RevivaGreen. We read every message.
              </p>
              <a
                href="mailto:info@revivagreen.com?subject=Career%20Enquiry%20—%20RevivaGreen"
                className="btn-primary inline-flex"
              >
                Send your CV →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                { title: 'Operations',    desc: 'Field operations, logistics, MRF management, driver coordination across AP.'         },
                { title: 'Technology',    desc: 'Next.js, TypeScript, Zoho integrations, ESG data pipelines.'                        },
                { title: 'Client success', desc: 'B2B account management, compliance onboarding, ESG reporting support for clients.' },
              ].map((role) => (
                <div key={role.title} className="border border-[#D3D1C7] rounded-xl p-5 hover:border-[#1D9E75]/40 transition-colors">
                  <h3 className="text-[#0A1F14] font-medium text-[15px] mb-2">{role.title}</h3>
                  <p className="text-[#888780] text-[13px] leading-[1.65]">{role.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}