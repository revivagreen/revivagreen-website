import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scrap Management Services Andhra Pradesh | RevivaGreen Ventures',
  description:
    'GST-compliant resource recovery, ESG data & BRSR reporting, and EPR compliance management for businesses in Andhra Pradesh. RevivaGreen Ventures.',
}

/* ── SERVICE BLOCKS DATA ──────────────────────────────────── */
const SERVICES = [
  {
    id: 'recovery',
    tag: 'Service 01',
    title: 'GST-Compliant Resource Recovery',
    problem:
      'Most businesses in AP hand their scrap to informal dealers with no documentation. This creates audit exposure, blocks input tax credit, and leaves your finance team with no paper trail.',
    whatWeDo: [
      'Scheduled pickups at your premises — daily, weekly, or on-demand',
      'Calibrated digital weighing at every collection point',
      'Material-level segregation: iron, aluminium, copper, plastic, paper, e-waste',
      'GST invoice issued within 24 hours of every pickup',
      'Competitive, market-linked pricing updated fortnightly',
    ],
    whatYouGet: [
      'Full GST documentation for every tonne collected',
      'Monthly material summary report by category and weight',
      'Dedicated account manager for your locations',
      'WhatsApp-based pickup scheduling for your facility managers',
    ],
    metrics: [
      { value: '100%', label: 'GST documented' },
      { value: '24hr', label: 'Invoice turnaround' },
      { value: '₹0',   label: 'Setup fee' },
    ],
    cta: { label: 'Request a recovery pickup', href: '/contact' },
    flip: false,
  },
  {
    id: 'esg',
    tag: 'Service 02',
    title: 'ESG Data & BRSR Reporting',
    problem:
      'SEBI now mandates BRSR reporting for the top 1000 listed companies — and voluntary ESG disclosure is expected of all large businesses. Without structured waste data, your Principle 6 section is incomplete.',
    whatWeDo: [
      'Auto-generate material-level ESG data from every verified pickup',
      'Map data to SEBI BRSR Principle 6 framework automatically',
      'Calculate CO₂ equivalent diverted from landfill per material type',
      'Provide monthly ESG impact reports in PDF and Excel format',
      'Supply auditor-ready documentation linked to GST invoice records',
    ],
    whatYouGet: [
      'BRSR Principle 6 data ready for your sustainability report',
      'CO₂ diversion figures with methodology documentation',
      'Company-wide ESG rollup across all branches',
      'Data your ESG auditor can independently verify against GST invoices',
    ],
    metrics: [
      { value: 'BRSR',  label: 'SEBI aligned'      },
      { value: 'PDF',   label: 'Auditor-ready'      },
      { value: 'Auto',  label: 'No manual entry'    },
    ],
    cta: { label: 'See a sample ESG report', href: '/contact' },
    flip: true,
  },
  {
    id: 'epr',
    tag: 'Service 03',
    title: 'EPR Compliance Management',
    problem:
      'Extended Producer Responsibility regulations are tightening across plastic, e-waste, and battery categories. Non-compliance carries penalties and reputational risk — but most businesses lack the internal capacity to manage filings.',
    whatWeDo: [
      'Assess your EPR obligations by product category and volume',
      'Collect and document covered materials from your operations',
      'Maintain the collection records required for regulatory filing',
      'Coordinate with APPCB-approved recyclers in the authorised chain',
      'Provide documentation support for annual EPR filing',
    ],
    whatYouGet: [
      'Full EPR compliance for covered categories',
      'Regulatory filing documentation package',
      'APPCB-aligned collection and recycling chain',
      'Annual compliance summary for your legal and sustainability team',
    ],
    metrics: [
      { value: '₹3L+', label: 'Starting/year'   },
      { value: 'EPR',  label: 'Fully managed'   },
      { value: 'APPCB', label: 'Authorised chain' },
    ],
    cta: { label: 'Discuss EPR compliance', href: '/contact' },
    flip: false,
  },
]

/* ── COMPARISON TABLE DATA ───────────────────────────────── */
const COMPARISON = [
  {
    criterion: 'GST invoice',
    informal: 'Never',
    revivagreen: 'Every pickup, within 24 hours',
    winner: 'rg',
  },
  {
    criterion: 'Weighing accuracy',
    informal: 'Manual, unverified',
    revivagreen: 'Calibrated digital scale',
    winner: 'rg',
  },
  {
    criterion: 'ESG / BRSR data',
    informal: 'None',
    revivagreen: 'Auto-generated, auditor-ready',
    winner: 'rg',
  },
  {
    criterion: 'EPR compliance',
    informal: 'Not possible',
    revivagreen: 'Fully managed service',
    winner: 'rg',
  },
  {
    criterion: 'Multi-branch management',
    informal: 'No central visibility',
    revivagreen: 'Unified dashboard',
    winner: 'rg',
  },
]

/* ── PAGE ────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* ── S1: HERO ──────────────────────────────────────── */}
      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-20 min-h-[50vh] flex items-center">
        <div className="container">
          <p className="eyebrow mb-5">Our services</p>
          <h1 className="h1 text-white max-w-3xl">
            Three ways we work with{' '}
            <span className="text-[#1D9E75]">your business.</span>
          </h1>
          <p className="mt-5 text-white/60 text-[18px] leading-[1.7] max-w-xl">
            Every service is built around the compliance, data, and operational
            needs of AP businesses that take waste management seriously.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#recovery" className="btn-primary">
              Resource Recovery
            </a>
            <a href="#esg" className="btn-outline-white">
              ESG Reporting
            </a>
            <a href="#epr" className="btn-outline-white">
              EPR Compliance
            </a>
          </div>
        </div>
      </section>

      {/* ── S2–S4: SERVICE BLOCKS ─────────────────────────── */}
      {SERVICES.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-py ${service.flip ? 'bg-[#F5F0E8]' : 'bg-white'}`}
        >
          <div className="container">

            {/* Tag + Title */}
            <div className="mb-12">
              <p className="eyebrow mb-3">{service.tag}</p>
              <h2 className="h2 text-[#0A1F14] max-w-2xl">{service.title}</h2>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${service.flip ? 'lg:grid-flow-dense' : ''}`}>

              {/* Left — Problem + What we do */}
              <div className={service.flip ? 'lg:col-start-2' : ''}>
                <div className="bg-[#0A1F14] rounded-xl p-6 mb-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1D9E75] mb-3">
                    The problem we solve
                  </p>
                  <p className="text-white/70 text-[15px] leading-[1.75]">
                    {service.problem}
                  </p>
                </div>

                <h3 className="text-[#0A1F14] font-medium text-[17px] mb-4">
                  What we do
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.whatWeDo.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-[#2C2C2A]">
                      <svg className="w-4 h-4 text-[#1D9E75] shrink-0 mt-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — What you get + Metrics */}
              <div className={service.flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {service.metrics.map((m) => (
                    <div key={m.label} className="bg-white border border-[#D3D1C7] rounded-xl p-4 text-center">
                      <span className="block text-[26px] font-semibold text-[#1D9E75] leading-none tabular-nums">
                        {m.value}
                      </span>
                      <span className="block text-[12px] text-[#888780] mt-1.5 uppercase tracking-wide">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="text-[#0A1F14] font-medium text-[17px] mb-4">
                  What you receive
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.whatYouGet.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-[#2C2C2A]">
                      <div className="w-5 h-5 rounded-full bg-[#1D9E75]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#1D9E75]" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={service.cta.href} className="btn-primary">
                  {service.cta.label}
                </Link>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── S5: COMPARISON TABLE ──────────────────────────── */}
      <section className="bg-[#0A1F14] section-py">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Why switch</p>
            <h2 className="h2 text-white">
              Informal dealer vs RevivaGreen.
            </h2>
            <p className="mt-4 text-white/55 text-[17px] leading-[1.7]">
              The difference is not just compliance — it is the entire quality
              of your waste management operation.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-[#0F2B1A]">
              <div className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40">
                What matters
              </div>
              <div className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40 border-l border-white/[0.06]">
                Informal dealer
              </div>
              <div className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#1D9E75] border-l border-white/[0.06] flex items-center gap-2">
                RevivaGreen
                <span className="bg-[#1D9E75]/10 text-[#1D9E75] text-[10px] px-2 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
            </div>

            {/* Table rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={row.criterion}
                className={`grid grid-cols-3 border-t border-white/[0.06] ${i % 2 === 0 ? 'bg-[#0A1F14]' : 'bg-[#0F2B1A]'}`}
              >
                <div className="px-6 py-4 text-[14px] font-medium text-white/80">
                  {row.criterion}
                </div>
                <div className="px-6 py-4 text-[14px] text-white/35 border-l border-white/[0.06] flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500/60 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  {row.informal}
                </div>
                <div className="px-6 py-4 text-[14px] text-white/80 border-l border-white/[0.06] flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1D9E75] shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {row.revivagreen}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: CTA ───────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">Get started</p>
            <h2 className="h2 text-[#0A1F14] mb-5">
              Ready to switch from the informal sector?
            </h2>
            <p className="text-[#888780] text-[17px] leading-[1.75] mb-8 max-w-xl mx-auto">
              Tell us about your business — locations, materials, and volume.
              We will respond within 4 business hours with a tailored proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-3.5">
                Request a demo
              </Link>
              <Link href="/contact" className="btn-outline-white !text-[#0A1F14] !border-[#D3D1C7] hover:!border-[#1D9E75] px-8 py-3.5">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}