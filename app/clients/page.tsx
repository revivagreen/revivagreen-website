import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clients — RevivaGreen | Trusted by Leading Businesses in Andhra Pradesh',
  description:
    'RevivaGreen serves 100+ businesses across Andhra Pradesh with GST-compliant waste recovery, ESG data, and EPR compliance. See our client case studies.',
}

/* ── CASE STUDIES ────────────────────────────────────────────
   IMPORTANT: Get written permission from each client before publishing.
   Replace placeholder content with real quotes and data.
   Photo must be real person — no stock images (per brief).        */
const CASE_STUDIES = [
  {
    id: 'cs1',
    client: 'Lakshmi Group',
    sector: 'Automotive',
    location: 'Vijayawada, AP',
    problem:
      'Managing scrap across multiple dealership locations with no GST documentation, inconsistent pickup schedules, and zero visibility into material volumes or ESG metrics.',
    solution:
      'RevivaGreen assigned a dedicated account manager, standardised pickup schedules across all locations, and integrated GST-invoiced collections with a unified dashboard for the GM.',
    results: [
      { metric: '100%', label: 'GST documented collections' },
      { metric: '₹0',   label: 'Compliance exposure'       },
      { metric: '4',    label: 'Locations managed'         },
    ],
    quote: {
      text: 'RevivaGreen completely changed how we handle scrap at our dealerships. We now have a GST invoice for every pickup, our accounts team is satisfied, and we receive a monthly report showing our environmental contribution. It is the most professional waste management service we have worked with.',
      name: 'Ram',           // ← Replace with real name + get written permission
      designation: 'General Manager',
      company: 'Lakshmi Group',
    },
    tag: 'Case study 01',
    flip: false,
  },
  {
    id: 'cs2',
    client: 'CC Products India Ltd',
    sector: 'FMCG / Manufacturing',
    location: 'Andhra Pradesh',
    problem:
      'A large manufacturing operation generating significant volumes of industrial scrap monthly — but with no compliant vendor capable of providing GST invoices or structured waste data for BRSR reporting.',
    solution:
      'RevivaGreen onboarded the facility with scheduled bulk pickups, material-level documentation, and monthly ESG reports structured to SEBI BRSR Principle 6 requirements.',
    results: [
      { metric: 'BRSR',  label: 'Principle 6 data ready'  },
      { metric: '12t+',  label: 'Monthly recovery volume'  },
      { metric: '100%',  label: 'Invoice compliance'       },
    ],
    quote: {
      text: 'We needed a compliant vendor who could handle our multi-location waste and provide structured data for our BRSR filing. RevivaGreen delivered exactly that — reliable pickups, clean invoices, and an ESG dashboard our sustainability team actually uses.',
      name: 'Kumar',           // ← Replace with real name + get written permission
      designation: 'Head of Operations',
      company: 'CC Products India Ltd',
    },
    tag: 'Case study 02',
    flip: true,
  },
  {
    id: 'cs3',
    client: 'NTP Group',
    sector: 'Diversified Business',
    location: 'Andhra Pradesh',
    problem:
      'Multiple business verticals generating different categories of recyclable waste — with no single vendor capable of handling all material types compliantly across all locations.',
    solution:
      'RevivaGreen provided a unified account covering all business verticals and material types, with a single monthly invoice summary and consolidated ESG data across the group.',
    results: [
      { metric: '6+',    label: 'Material categories'      },
      { metric: '1',     label: 'Unified account'          },
      { metric: 'GST',   label: 'Every transaction'        },
    ],
    quote: {
      text: 'Before RevivaGreen, we were dealing with four different informal vendors across our businesses — none of whom could provide a GST invoice. Now we have one partner, one invoice, and one dashboard. It is exactly what a professionally run group needs.',
      name: 'Sam',           // ← Replace with real name + get written permission
      designation: 'Group GM',
      company: 'NTP Group',
    },
    tag: 'Case study 03',
    flip: false,
  },
]

/* ── SECTORS ─────────────────────────────────────────────── */
const SECTORS = [
  { label: 'Automotive',        icon: <AutoIcon />     },
  { label: 'FMCG',              icon: <FmcgIcon />     },
  { label: 'Industrial',        icon: <IndustrialIcon /> },
  { label: 'Pharma',            icon: <PharmaIcon />   },
  { label: 'Paper & Print',     icon: <PaperIcon />    },
  { label: 'Retail & Warehousing', icon: <RetailIcon /> },
]

/* ── CLIENT LOGOS ────────────────────────────────────────────
   Replace placeholder tiles with real <img> tags once you have
   SVG/PNG logos and written permission from each client.         */
const CLIENT_LOGOS = [
  'Lakshmi Group',
  'CC Products',
  'NTP Group',
  'Sree Ventures',
  'Client Five',
  'Client Six',
]

/* ── PAGE ────────────────────────────────────────────────── */
export default function ClientsPage() {
  return (
    <main>
      <Navbar />

      {/* ── S1: HERO ──────────────────────────────────────── */}
      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-20 min-h-[50vh] flex items-center">
        <div className="container">
          <p className="eyebrow mb-5">Our clients</p>
          <h1 className="h1 text-white max-w-3xl">
            Trusted by Andhra Pradesh&apos;s most{' '}
            <span className="text-[#1D9E75]">organised businesses.</span>
          </h1>
          <p className="mt-5 text-white/60 text-[18px] leading-[1.7] max-w-xl">
            From automotive groups to FMCG manufacturers — we serve businesses
            that take compliance seriously and need a waste management partner
            that matches that standard.
          </p>
        </div>
      </section>

      {/* ── S2: CLIENT LOGO STRIP ─────────────────────────── */}
      <section className="bg-white border-b border-[#D3D1C7]">
        <div className="container py-10">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.08em] text-[#888780] mb-8">
            Trusted by leading businesses across Andhra Pradesh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {CLIENT_LOGOS.map((name) => (
              <div
                key={name}
                className="h-10 px-6 bg-[#F5F0E8] rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {/* Replace with: <img src={`/images/logos/${slug}.svg`} alt={name} className="h-7 w-auto grayscale hover:grayscale-0 transition-all duration-300" /> */}
                <span className="text-[13px] font-semibold text-[#5A5850] tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: CASE STUDIES ──────────────────────────────── */}
      {CASE_STUDIES.map((cs, idx) => (
        <section
          key={cs.id}
          id={cs.id}
          className={`section-py ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'}`}
        >
          <div className="container">

            {/* Tag + header */}
            <div className="mb-12">
              <p className="eyebrow mb-3">{cs.tag}</p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="h2 text-[#0A1F14]">{cs.client}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#888780] bg-[#F5F0E8] px-3 py-1.5 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="2" y="2" width="12" height="12" rx="2" />
                  </svg>
                  {cs.sector}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#888780] bg-[#F5F0E8] px-3 py-1.5 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" />
                    <circle cx="8" cy="6" r="1.5" />
                  </svg>
                  {cs.location}
                </span>
              </div>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${cs.flip ? 'lg:grid-flow-dense' : ''}`}>

              {/* Left — problem / solution */}
              <div className={cs.flip ? 'lg:col-start-2' : ''}>
                {/* Problem */}
                <div className="bg-[#0A1F14] rounded-xl p-6 mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1D9E75] mb-3">
                    The challenge
                  </p>
                  <p className="text-white/70 text-[15px] leading-[1.75]">
                    {cs.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="border border-[#1D9E75]/20 rounded-xl p-6 mb-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1D9E75] mb-3">
                    Our solution
                  </p>
                  <p className="text-[#2C2C2A] text-[15px] leading-[1.75]">
                    {cs.solution}
                  </p>
                </div>

                {/* Quote */}
                <div className="bg-[#F5F0E8] rounded-xl p-6 relative">
                  <svg
                    className="absolute top-4 right-4 w-8 h-8 text-[#1D9E75] opacity-15"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M0 20C0 8.954 8.954 0 20 0v8C13.373 8 8 13.373 8 20v20H0V20zm22 0C22 8.954 30.954 0 42 0v8c-6.627 0-12 5.373-12 12v20H22V20z" />
                  </svg>
                  <p className="text-[#2C2C2A] text-[15px] italic leading-[1.75] mb-5">
                    &ldquo;{cs.quote.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#D3D1C7]">
                    <div className="w-10 h-10 rounded-full border-2 border-[#1D9E75] bg-[#1D9E75]/10 flex items-center justify-center shrink-0">
                      {/* Replace with real photo:
                      <img src={`/images/testimonials/${slug}.jpg`} className="w-full h-full rounded-full object-cover" /> */}
                      <span className="text-[#1D9E75] text-[11px] font-semibold">
                        {cs.quote.name[0] === '[' ? '?' : cs.quote.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#1A1A1A] font-medium text-[14px]">
                        {cs.quote.name}
                      </p>
                      <p className="text-[#888780] text-[12px]">
                        {cs.quote.designation} · {cs.quote.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — results */}
              <div className={cs.flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="text-[#0A1F14] font-medium text-[17px] mb-6">
                  Results
                </h3>
                <div className="space-y-4 mb-8">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center gap-5 bg-white border border-[#D3D1C7] rounded-xl p-5 hover:border-[#1D9E75]/40 transition-colors"
                    >
                      <span className="text-[36px] font-semibold text-[#1D9E75] leading-none tabular-nums shrink-0 w-24 text-center">
                        {r.metric}
                      </span>
                      <div className="w-px h-10 bg-[#D3D1C7] shrink-0" />
                      <span className="text-[#2C2C2A] text-[15px] font-medium">
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary">
                  Get similar results →
                </Link>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── S4: SECTORS SERVED ────────────────────────────── */}
      <section className="bg-[#0A1F14] section-py">
        <div className="container">
          <div className="max-w-xl mb-14">
            <p className="eyebrow mb-4">Sectors we serve</p>
            <h2 className="h2 text-white">
              Built for organised businesses across every industry.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SECTORS.map((sector) => (
              <div
                key={sector.label}
                className="bg-[#0F2B1A] border border-white/[0.06] rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:border-[#1D9E75]/40 transition-colors duration-250"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1D9E75]/10 flex items-center justify-center">
                  {sector.icon}
                </div>
                <span className="text-white/70 text-[13px] font-medium">
                  {sector.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]" />
            <p className="text-white/40 text-[13px]">
              And more sectors coming as we expand across AP
            </p>
          </div>
        </div>
      </section>

      {/* ── S5: CLIENT CTA ────────────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-4">Join them</p>
            <h2 className="h2 text-[#0A1F14] mb-5">
              Become our next success story.
            </h2>
            <p className="text-[#888780] text-[17px] leading-[1.75] mb-8 max-w-lg mx-auto">
              Whether you run 1 location or 20, RevivaGreen delivers the same
              standard: GST-compliant, data-rich, professionally managed
              waste recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-3.5">
                Request a demo
              </Link>
              <Link href="/services" className="btn-outline-white !text-[#0A1F14] !border-[#D3D1C7] hover:!border-[#1D9E75] px-8 py-3.5">
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ── SECTOR ICONS ────────────────────────────────────────── */
function AutoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5" />
      <circle cx="15.5" cy="17.5" r="2.5" />
      <circle cx="5.5" cy="17.5" r="2.5" />
    </svg>
  )
}
function FmcgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
function IndustrialIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  )
}
function PharmaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
function PaperIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  )
}
function RetailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}