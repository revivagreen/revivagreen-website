import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About RevivaGreen | DPIIT-Recognised Circular Economy Platform — Vijayawada AP',
  description:
    'RevivaGreen was founded to fix the broken informal waste sector in Andhra Pradesh. Learn about our founding story, team, certifications, and 2040 vision.',
}

/* ── TEAM DATA ───────────────────────────────────────────── */
// IMPORTANT: Replace placeholder data with real details before launch
// Professional headshots required — no stock photos (per brief)
const TEAM = [
  {
    name: 'Surendra Reddy Pamulapati',
    role: 'Founder & CEO',
    bio: 'Founded RevivaGreen to bring compliance, transparency, and technology to waste management in Andhra Pradesh.',
    initials: 'SR',
    // photo: '/images/team/surendra.jpg',
  },
  {
    name: 'Ragini Surendra Pamulapati',
    role: 'Co-Founder & CFO',
    bio: 'Oversees financial operations, compliance documentation, and all regulatory filings for RevivaGreen Ventures.',
    initials: 'RS',
    // photo: '/images/team/tulasi.jpg',
  },
  {
    name: 'Bharat',
    role: 'Operations Lead',
    bio: 'Manages field operations, MRF facility coordination, and client pickup scheduling across all districts.',
    initials: 'RG',
    // photo: '/images/team/ragini.jpg',
  },
]

/* ── CERTIFICATIONS ──────────────────────────────────────── */
// IMPORTANT: Replace placeholder numbers with real registration numbers
// Verify all numbers with Tulasi before publishing (per brief)
const CERTIFICATIONS = [
  {
    name: 'DPIIT Recognition',
    number: 'DIPP212171',           // ← replace with real number
    description: 'Recognised by the Department for Promotion of Industry and Internal Trade, Government of India.',
    color: '#C8A84B',
  },
  {
    name: 'MSME Udyam',
    number: 'UDYAM-AP-06-0101707', // ← replace with real number
    description: 'Registered under the Ministry of Micro, Small and Medium Enterprises, Government of India.',
    color: '#C8A84B',
  },
 // {
  //  name: 'APPCB Certified',
    //number: 'APPCB/2024/XXXXX',    // ← replace with real number
    //description: 'Consent to Establish and Operate issued by the Andhra Pradesh Pollution Control Board.',
    //color: '#1D9E75',
  //},
  {
    name: 'GST Registered',
    number: '37AAOCR8130R1ZG',     // ← replace with real GSTIN
    description: 'Fully GST-registered entity. Every transaction is documented and compliant with Indian tax law.',
    color: '#1D9E75',
  },
]

/* ── TIMELINE ────────────────────────────────────────────── */
// Update milestones as the company grows
const TIMELINE = [
  {
    year: 'Jun 2025',
    title: 'RevivaGreen founded',
    description: 'Surendra registers RevivaGreen Ventures Private Limited in Vijayawada with a mission to formalise waste management in AP.',
  },
  {
    year: 'Oct 2025',
    title: 'First B2B client',
    description: 'Signs first formal B2B waste management contract with a leading automotive dealership group in Vijayawada.',
  },
  {
    year: 'Nov 2025',
    title: 'MRF facility opens',
    description: 'Material Recovery Facility inaugurated — the operational backbone for sorting, weighing, and channelling recyclables.',
  },
  {
    year: '2025',
    title: 'DPIIT recognition',
    description: 'Recognised by DPIIT as a startup under the Startup India initiative. APPCB certification received.',
  },
  {
    year: '2025',
    title: '50 clients milestone',
    description: 'Crosses 50 active B2B clients across 4 districts in Andhra Pradesh.',
  },
  {
    year: '2026',
    title: 'Platform launch',
    description: 'Launches the RevivaGreen digital platform — unified dashboard, ESG reporting, and multi-branch management.',
  },
]

/* ── VALUES ──────────────────────────────────────────────── */
const VALUES = [
  {
    title: 'Transparency first',
    description: 'Every weight is digital. Every invoice is GST-documented. Every ESG number is auditor-verifiable. We build trust through data.',
  },
  {
    title: 'Compliance as a service',
    description: 'We handle the regulatory complexity so our clients can focus on their core business — not waste paperwork.',
  },
  {
    title: 'Shared prosperity',
    description: 'A circular economy works only when every stakeholder — client, worker, recycler, and community — benefits from it.',
  },
  {
    title: 'Operational integrity',
    description: 'We do what we say. Pickups on schedule. Invoices on time. Data that matches reality — every single time.',
  },
]

/* ── PAGE ────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* ── S1: HERO ──────────────────────────────────────── */}
      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-20 min-h-[50vh] flex items-center">
        <div className="container">
          <p className="eyebrow mb-5">About us</p>
          <h1 className="h1 text-white max-w-3xl">
            We started RevivaGreen to{' '}
            <span className="text-[#1D9E75]">fix a broken system.</span>
          </h1>
          <p className="mt-5 text-white/60 text-[18px] leading-[1.7] max-w-xl">
            Andhra Pradesh's businesses deserved a waste management partner
            that could provide documentation, data, and accountability —
            not just a truck and a handshake.
          </p>
        </div>
      </section>

      {/* ── S2: FOUNDING STORY ────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Story text */}
            <div>
              <p className="eyebrow mb-4">Our story</p>
              <h2 className="h2 text-[#0A1F14] mb-6">
                Built from a firsthand understanding of the problem.
              </h2>

              {/* REPLACE THIS COPY WITH SURENDRA'S ACTUAL FOUNDING STORY */}
              {/* Brief says: Surendra to draft in voice notes, creator to convert */}
              <div className="space-y-4 text-[#2C2C2A] text-[17px] leading-[1.75]">
                <p>
                  Surendra Reddy Pamulapati founded RevivaGreen after witnessing
                  firsthand how Andhra Pradesh&apos;s businesses were managing their
                  waste — informal dealers, no documentation, no data, and no
                  accountability on either side of the transaction.
                </p>
                <p>
                  For businesses, this meant audit exposure, missing input tax
                  credit, and zero visibility into what happened to their materials
                  after pickup. For the environment, it meant valuable resources
                  ending up in landfills instead of the circular economy.
                </p>
                <p>
                  RevivaGreen was built to solve both problems simultaneously —
                  by creating a platform that makes compliant, documented,
                  data-driven waste management as easy as calling a cab.
                </p>
                <p>
                  We started with a single client and a single vehicle. Today we
                  operate across six districts, serve over 100 businesses, and
                  have recovered more than 500 tonnes of materials that would
                  otherwise have been lost to the informal sector.
                </p>
                <p>
                  We are just getting started.
                </p>
              </div>
            </div>

            {/* Founder card */}
            <div>
              <div className="bg-[#F5F0E8] rounded-2xl p-8 mb-6">
                {/* REPLACE INITIALS WITH REAL PHOTO when available */}
                {/* <img src="/images/team/surendra.jpg" alt="Surendra Reddy Pamulapati" className="w-20 h-20 rounded-full object-cover border-2 border-[#1D9E75] mb-5" /> */}
                <div className="w-20 h-20 rounded-full bg-[#1D9E75]/15 border-2 border-[#1D9E75] flex items-center justify-center mb-5">
                  <span className="text-[#1D9E75] text-[22px] font-semibold">SR</span>
                </div>
                <blockquote className="text-[#0A1F14] text-[18px] italic leading-[1.7] mb-5">
                  &ldquo;We built RevivaGreen because AP&apos;s businesses deserved
                  a waste management partner they could trust — with documentation,
                  data, and accountability built in from day one.&rdquo;
                </blockquote>
                <div>
                  <p className="text-[#0A1F14] font-medium text-[15px]">Surendra Reddy Pamulapati</p>
                  <p className="text-[#888780] text-[13px] mt-0.5">Founder & CEO, RevivaGreen Ventures</p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2025', label: 'Founded'         },
                  { value: '6',    label: 'Districts'       },
                  { value: '50+', label: 'B2B clients'     },
                ].map((s) => (
                  <div key={s.label} className="bg-[#0A1F14] rounded-xl p-4 text-center">
                    <span className="block text-[28px] font-semibold text-[#1D9E75] leading-none tabular-nums">
                      {s.value}
                    </span>
                    <span className="block text-white/50 text-[12px] mt-1.5 uppercase tracking-wide">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S3: TEAM ──────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-4">Our team</p>
            <h2 className="h2 text-[#0A1F14]">
              The people behind RevivaGreen.
            </h2>
            <p className="mt-4 text-[#888780] text-[17px] leading-[1.7]">
              A small, focused team with deep roots in Andhra Pradesh and a
              shared belief that waste management can be done right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 border border-[#D3D1C7]">
                {/* Photo / initials */}
                <div className="w-16 h-16 rounded-full bg-[#1D9E75]/10 border-2 border-[#1D9E75] flex items-center justify-center mb-5">
                  {/* Uncomment when real photo is available:
                  <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" /> */}
                  <span className="text-[#1D9E75] text-[16px] font-semibold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-[#0A1F14] font-medium text-[17px] mb-0.5">
                  {member.name}
                </h3>
                <p className="text-[#1D9E75] text-[13px] font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-[#888780] text-[14px] leading-[1.65]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: CERTIFICATIONS ────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-4">Credentials</p>
            <h2 className="h2 text-[#0A1F14]">
              Registered, recognised, and certified.
            </h2>
            <p className="mt-4 text-[#888780] text-[17px] leading-[1.7]">
              Every number below is verifiable. We display them because
              transparency is not optional — it is the foundation of trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="border rounded-xl p-6 flex gap-5 items-start"
                style={{ borderColor: `${cert.color}30` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${cert.color}15` }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0A1F14] font-medium text-[16px] mb-0.5">
                    {cert.name}
                  </p>
                  <p className="font-mono text-[13px] mb-2" style={{ color: cert.color }}>
                    {cert.number}
                  </p>
                  <p className="text-[#888780] text-[14px] leading-[1.65]">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: TIMELINE ──────────────────────────────────── */}
      <section className="bg-[#0A1F14] section-py overflow-hidden">
        <div className="container">
          <div className="max-w-xl mb-14">
            <p className="eyebrow mb-4">Our journey</p>
            <h2 className="h2 text-white">
              From first client to circular economy platform.
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.08] md:left-1/2" aria-hidden="true" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="inline-block text-[#1D9E75] text-[13px] font-semibold uppercase tracking-[0.08em] mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-white font-medium text-[17px] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-[14px] leading-[1.7]">
                      {item.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#0F2B1A] border-2 border-[#1D9E75] flex items-center justify-center shrink-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-2 h-2 rounded-full bg-[#1D9E75]" />
                  </div>

                  {/* Empty side for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: MISSION & VALUES ──────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Mission */}
            <div>
              <p className="eyebrow mb-4">Mission & vision</p>
              <h2 className="h2 text-[#0A1F14] mb-8">
                What we are building toward.
              </h2>

              <div className="bg-[#0A1F14] rounded-xl p-8 mb-6">
                <p className="text-[#1D9E75] text-[11px] font-semibold uppercase tracking-[0.1em] mb-3">
                  Our mission
                </p>
                <p className="text-white text-[18px] leading-[1.7]">
                  To build Andhra Pradesh&apos;s most trusted circular economy
                  infrastructure — where every business can manage waste
                  with full compliance, full data, and full accountability.
                </p>
              </div>

              <div className="border border-[#1D9E75]/20 rounded-xl p-8">
                <p className="text-[#1D9E75] text-[11px] font-semibold uppercase tracking-[0.1em] mb-3">
                  2040 vision
                </p>
                <p className="text-[#0A1F14] text-[18px] leading-[1.7]">
                  Zero untracked waste from organised businesses in Andhra Pradesh.
                  Every tonne documented. Every rupee of value recovered.
                  Every ESG metric verifiable.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-[#0A1F14] font-medium text-[20px] mb-8">
                Our core values
              </h3>
              <div className="space-y-6">
                {VALUES.map((value, i) => (
                  <div key={value.title} className="flex gap-5">
                    <div className="w-8 h-8 rounded-lg bg-[#1D9E75]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#1D9E75] text-[13px] font-semibold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[#0A1F14] font-medium text-[16px] mb-1.5">
                        {value.title}
                      </h4>
                      <p className="text-[#888780] text-[14px] leading-[1.7]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S7: MEDIA (placeholder until real press) ──────── */}
      <section className="bg-white section-py">
        <div className="container">
          <div className="max-w-xl mb-10">
            <p className="eyebrow mb-4">Media & press</p>
            <h2 className="h2 text-[#0A1F14]">
              As seen in.
            </h2>
          </div>

          {/* Placeholder — add real media mentions when available */}
          <div className="border border-dashed border-[#D3D1C7] rounded-2xl p-12 text-center">
            <p className="text-[#888780] text-[15px]">
              Media mentions and press coverage will appear here.
            </p>
            <p className="text-[#D3D1C7] text-[13px] mt-2">
              For press enquiries, contact{' '}
              <a href="mailto:info@revivagreen.com" className="text-[#1D9E75] hover:underline">
                info@revivagreen.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}