import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About RevivaGreen | DPIIT-Recognised Circular Economy Platform — Vijayawada AP',
  description:
    'RevivaGreen was founded to fix the broken informal waste sector in Andhra Pradesh. Learn about our founding story, team, certifications, and 2040 vision.',
}

/* ── TEAM ────────────────────────────────────────────────── */
const TEAM = [
  {
    name: 'Surendra Reddy Pamulapati',
    role: 'Founder & CEO',
    bio: 'Founded RevivaGreen after years in industry watching organised businesses hand valuable scrap to unregistered dealers with no documentation. Left his corporate role in 2024 to build the professional alternative that did not exist.',
    initials: 'SR',
    // photo: '/images/team/surendra.jpg',
  },
  {
    name: 'Ragini Surendra Pamulapati',
    role: 'Co-Founder & Director',
    bio: 'Oversees all financial operations, compliance documentation, and regulatory filings for RevivaGreen Ventures. Responsible for verifying all registration numbers and statutory disclosures.',
    initials: 'RS',
    // photo: '/images/team/tulasi.jpg',
  },
  {
    name: 'Bharat',
    role: 'Head of Operations',
    bio: "Oversees RevivaGreen's on-ground operations across Andhra Pradesh — from pickup scheduling and MRF management to driver training and client service quality. Her focus: every client's experience must be identical, professional, and reliable regardless of which branch or district.",
    initials: 'BR',
    // photo: '/images/team/ragini.jpg',
  },
]

/* ── CERTIFICATIONS ──────────────────────────────────────── */
// APPCB is commented out — uncomment and add number once certificate is received
const CERTIFICATIONS = [
  {
    name: 'DPIIT Recognised Startup',
    number: 'DIPP212171',
    description:
      "India's Department for Promotion of Industry and Internal Trade recognises RevivaGreen as an innovative startup building technology-enabled solutions for India's circular economy.",
    color: '#C8A84B',
  },
  {
    name: 'MSME Registered',
    number: 'UDYAM-AP-06-0101707',
    description:
      "Registered under the Government of India's MSME framework, demonstrating our commitment to India's small and medium enterprise ecosystem.",
    color: '#C8A84B',
  },
  {
    name: 'GST Registered',
    number: '37AAOCR8130R1ZG',
    description:
      'Fully GST-registered entity under RevivaGreen Ventures Private Limited. Every transaction is documented and compliant with Indian tax law.',
    color: '#1D9E75',
  },
  // ── UNCOMMENT BELOW ONCE APPCB CERTIFICATE IS RECEIVED ──
  // {
  //   name: 'APPCB Certified',
  //   number: 'CFE/CFO Ref: [insert number]',
  //   description:
  //     'Consent to Establish and Operate issued by the Andhra Pradesh Pollution Control Board. Our Material Recovery Facility is CPCB-authorised.',
  //   color: '#1D9E75',
  // },
]

/* ── TIMELINE ────────────────────────────────────────────── */
const TIMELINE = [
  {
    year: 'Jun 2025',
    title: 'RevivaGreen incorporated',
    description:
      'RevivaGreen Ventures Private Limited registered in Vijayawada. The founding question: what would this market look like if someone built it properly?',
  },
  {
    year: 'Oct 2025',
    title: 'First B2B client',
    description:
      'First formal B2B waste management contract signed. First pickup. First GST invoice. Nobody walked away.',
  },
  {
    year: 'Oct 2025',
    title: 'MRF facility launched',
    description:
      'CPCB-authorised Material Recovery Facility inaugurated — the operational backbone for sorting, weighing, and channelling recyclables into the formal economy.',
  },
  {
    year: '2025',
    title: 'DPIIT & MSME recognition',
    description:
      'Recognised by DPIIT as an innovative startup (DIPP212171). MSME Udyam registration (UDYAM-AP-06-0101707) formalised.',
  },
  {
    year: '2025',
    title: '50 clients milestone',
    description:
      'Crosses 50 active B2B clients across Andhra Pradesh including Lakshmi Group, CC Group, and CCL Products.',
  },
  {
    year: '2026',
    title: 'Platform & national ambition',
    description:
      "Launches the RevivaGreen digital platform. 100+ clients. 6 districts. Building the data infrastructure India's circular economy will run on.",
  },
]

/* ── VALUES ──────────────────────────────────────────────── */
const VALUES = [
  {
    title: 'Transparency first',
    description:
      'Every weight is digital. Every invoice is GST-documented. Every ESG number is auditor-verifiable. We build trust through data.',
  },
  {
    title: 'Compliance as a service',
    description:
      'We handle the regulatory complexity so our clients can focus on their core business — not waste paperwork.',
  },
  {
    title: 'Shared prosperity',
    description:
      'A circular economy works only when every stakeholder — client, worker, recycler, and community — benefits from it.',
  },
  {
    title: 'Operational integrity',
    description:
      'We do what we say. Pickups on schedule. Invoices on time. Data that matches reality — every single time.',
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
          <p className="eyebrow mb-5">
            Founded in Vijayawada · Built for Andhra Pradesh
          </p>
          <h1 className="h1 text-white max-w-4xl">
            We saw a{' '}
            <span className="text-[#1D9E75]">₹30,000 crore problem</span>{' '}
            that nobody was solving professionally.
          </h1>
          <p className="mt-5 text-white/60 text-[18px] leading-[1.7] max-w-2xl">
            RevivaGreen was not started because of a passion for sustainability.
            It was started because the numbers made no sense — and someone had
            to fix them.
          </p>
        </div>
      </section>

      {/* ── S2: FOUNDING STORY ────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — story */}
            <div>
              <p className="eyebrow mb-4">Our story</p>
              <h2 className="h2 text-[#0A1F14] mb-8">
                Built from a firsthand understanding of the problem.
              </h2>

              <div className="space-y-5 text-[#2C2C2A] text-[17px] leading-[1.75]">
                <p>
                  During my years in industry, I watched something that quietly. 
                  Organised businesses across
                  Andhra Pradesh — dealerships, manufacturers, FMCG companies —
                  were generating significant volumes of recyclable scrap. Iron,
                  aluminium, copper, plastic, paper. Material that had real value.
                  And every month, that material was handed to an unregistered
                  local dealer, paid in cash, with no invoice, no documentation,
                  and no record that the transaction ever happened.
                </p>
                <p>
                  From a finance perspective, this was extraordinary. These were
                  companies with full GST compliance, statutory audits, and
                  professional accounting teams — and they had a completely
                  undocumented revenue stream sitting in their scrap yard. When
                  I looked at the scale of this across the state, the number was
                  staggering. India&apos;s businesses collectively generate over
                  ₹30,000 crore in scrap revenue annually. A substantial portion
                  of it flows through the informal sector with zero paper trail.
                </p>
                <p>
                  The businesses were not doing this carelessly. They simply had
                  no alternative. The informal scrap sector was the only sector
                  that would show up, pay on the spot, and take the material away.
                  Professional, compliant operators did not exist at scale in
                  this market.
                </p>
                <p>
                  I left my corporate role in 2024 with one question: what would
                  this market look like if someone built it properly?
                </p>
                <p>
                  Not just a scrap collection service — that already existed
                  informally. But a professional service that a CFO could stand
                  behind in an audit. One that generated GST-compliant
                  documentation for every transaction, gave finance teams clean
                  ITC claims, provided ESG data for BRSR disclosures, and
                  replaced the chaos of managing a dozen informal vendors across
                  a dozen branches with a single, accountable, data-driven partner.
                </p>
                <p>
                  That is what RevivaGreen is.
                </p>
                <p>
                  We launched in Vijayawada with a simple proposition: give us
                  one pickup. See the documentation. See the invoice. See how it
                  works. If it is not a materially better experience than what
                  you have today, we will walk away.
                </p>
                <p>
                  Nobody walked away.
                </p>
                <p>
                  Within months, Lakshmi Group, Two Wheeler Dealers, CC Products,
                  and several other leading AP businesses had made RevivaGreen
                  their exclusive resource recovery partner. Not because we offered
                  the highest price — the informal sector will always find someone
                  to pay a rupee more in cash. But because we offered something
                  the informal sector could never offer: a 100% auditable,
                  GST-clean, data-rich service that a CFO could present to their
                  auditor without a single concern.
                </p>
                <p>
                  We chose to start in Vijayawada because this economic corridor —
                  from Krishna to Guntur to Eluru — is one of the most
                  industrially active regions in South India, and it had no
                  professional waste recovery service worth the name.
                </p>
                <p>
                  Today, RevivaGreen serves 50+ businesses across Andhra Pradesh.
                  We operate a authorised Material Recovery Facility, hold
                  DPIIT Startup recognition and MSME registration, and are building
                  the platform that will become India&apos;s definitive circular
                  economy compliance infrastructure.
                </p>
                <p className="font-medium text-[#0A1F14]">
                  The ₹30,000 crore market is still largely informal. We are
                  changing that — one professionally managed scrap yard at a time.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1D9E75]/10 border-2 border-[#1D9E75] flex items-center justify-center shrink-0">
                  <span className="text-[#1D9E75] text-[13px] font-semibold">SR</span>
                </div>
                <div>
                  <p className="text-[#0A1F14] font-medium text-[15px]">
                    Surendra Reddy Pamulapati
                  </p>
                  <p className="text-[#888780] text-[13px]">
                    Founder & CEO, RevivaGreen Ventures Private Limited
                  </p>
                </div>
              </div>
            </div>

            {/* Right — quote + stats */}
            <div className="lg:sticky lg:top-32">
              {/* Pull quote */}
              <div className="bg-[#0A1F14] rounded-2xl p-8 mb-6">
                <svg
                  className="w-10 h-10 text-[#1D9E75] opacity-20 mb-5"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 20C0 8.954 8.954 0 20 0v8C13.373 8 8 13.373 8 20v20H0V20zm22 0C22 8.954 30.954 0 42 0v8c-6.627 0-12 5.373-12 12v20H22V20z" />
                </svg>
                <blockquote className="text-white text-[19px] italic leading-[1.7] mb-6">
                  &ldquo;Our goal is not to be the largest waste company in India.
                  It is to be the most trusted one — the company that every CFO
                  in the country points to when their auditor asks about scrap
                  documentation.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-5 border-t border-white/[0.08]">
                  <div className="w-12 h-12 rounded-full bg-[#1D9E75]/15 border-2 border-[#1D9E75] flex items-center justify-center shrink-0">
                    {/* Replace with real photo once available:
                    <img src="/images/team/surendra.jpg" alt="Surendra Reddy Pamulapati" className="w-full h-full rounded-full object-cover" /> */}
                    <span className="text-[#1D9E75] text-[13px] font-semibold">SR</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-[15px]">
                      Surendra Reddy Pamulapati
                    </p>
                    <p className="text-white/50 text-[13px] mt-0.5">
                      Founder & CEO, RevivaGreen Ventures
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: '2025',  label: 'Founded'     },
                  { value: '6',     label: 'Districts'   },
                  { value: '50+',  label: 'B2B clients' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#F5F0E8] rounded-xl p-4 text-center border border-[#D3D1C7]"
                  >
                    <span className="block text-[26px] font-semibold text-[#1D9E75] leading-none tabular-nums">
                      {s.value}
                    </span>
                    <span className="block text-[#888780] text-[11px] mt-1.5 uppercase tracking-wide">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Vijayawada note */}
              <div className="border border-[#1D9E75]/20 rounded-xl p-5">
                <p className="text-[#1D9E75] text-[11px] font-semibold uppercase tracking-[0.1em] mb-2">
                  Why Vijayawada
                </p>
                <p className="text-[#2C2C2A] text-[14px] leading-[1.7]">
                  The Krishna–Guntur–Eluru economic corridor is one of the most
                  industrially active regions in South India — and it had no
                  professional waste recovery service worth the name. We are
                  changing that from the ground up.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S3: TEAM ──────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Our team</p>
            <h2 className="h2 text-[#0A1F14] mb-4">
              The people behind RevivaGreen.
            </h2>
            <p className="text-[#888780] text-[17px] leading-[1.7]">
              RevivaGreen is built on the conviction that professional service
              and deep local knowledge are not mutually exclusive. Our team
              brings together financial and regulatory expertise, operational
              experience, and ground-level understanding of the AP business
              landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 border border-[#D3D1C7] hover:border-[#1D9E75]/40 transition-colors duration-250"
              >
                <div className="w-16 h-16 rounded-full bg-[#1D9E75]/10 border-2 border-[#1D9E75] flex items-center justify-center mb-5">
                  {/* Replace with real photo once available:
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
            <h2 className="h2 text-[#0A1F14] mb-4">
              Registered, recognised, and certified.
            </h2>
            <p className="text-[#888780] text-[17px] leading-[1.7]">
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={cert.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0A1F14] font-medium text-[16px] mb-0.5">
                    {cert.name}
                  </p>
                  <p
                    className="font-mono text-[13px] mb-2"
                    style={{ color: cert.color }}
                  >
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
              From first pickup to national ambition.
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.08] md:left-1/2"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative flex gap-8 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 pl-12 md:pl-0 ${
                      i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
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
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#0F2B1A] border-2 border-[#1D9E75] flex items-center justify-center shrink-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-2 h-2 rounded-full bg-[#1D9E75]" />
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: VISION & VALUES ───────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Vision */}
            <div>
              <p className="eyebrow mb-4">Where we are going</p>
              <h2 className="h2 text-[#0A1F14] mb-6">
                Building the data infrastructure India&apos;s circular economy
                will run on.
              </h2>
              <div className="space-y-4 text-[#2C2C2A] text-[17px] leading-[1.75] mb-8">
                <p>
                  RevivaGreen is not building a local waste management company.
                  We are building the data and compliance infrastructure that
                  India&apos;s circular economy will run on.
                </p>
                <p>
                  By 2030, every SEBI-listed company in India must disclose
                  structured waste data in their BRSR filings. By 2035,
                  India&apos;s EPR framework will cover virtually every industrial
                  waste stream. By 2040, the circular economy will be the default
                  operating model for every organised business in the country.
                </p>
                <p>
                  RevivaGreen&apos;s role in that future is clear. We are the
                  trusted data layer — the platform that sits between the physical
                  movement of materials and the compliance reports that regulators,
                  investors, and auditors depend on.
                </p>
                <p className="font-medium text-[#0A1F14]">
                  We started in Vijayawada. We will finish at national scale.
                </p>
              </div>

              <div className="bg-[#0A1F14] rounded-xl p-6">
                <p className="text-[#1D9E75] text-[11px] font-semibold uppercase tracking-[0.1em] mb-3">
                  Mission statement
                </p>
                <p className="text-white text-[16px] leading-[1.75]">
                  To build Andhra Pradesh&apos;s most trusted circular economy
                  infrastructure — where every business can manage waste with
                  full compliance, full data, and full accountability.
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

      {/* ── S7: PAGE CTA ──────────────────────────────────── */}
      <section className="bg-[#0A1F14] section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-4">
              Ready to see what professional looks like?
            </p>
            <h2 className="h2 text-white mb-5">
              Stop managing scrap with WhatsApp messages and cash payments.
            </h2>
            <p className="text-white/60 text-[17px] leading-[1.75] mb-10 max-w-xl mx-auto">
              See how RevivaGreen works for businesses like yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-3.5">
                Request a demo →
              </Link>
              <Link href="/services" className="btn-outline-white px-8 py-3.5">
                View our services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── S8: MEDIA ─────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container">
          <div className="max-w-xl mb-10">
            <p className="eyebrow mb-4">Media & press</p>
            <h2 className="h2 text-[#0A1F14]">As seen in.</h2>
          </div>
          <div className="border border-dashed border-[#D3D1C7] rounded-2xl p-12 text-center">
            <p className="text-[#888780] text-[15px]">
              Media mentions and press coverage will appear here.
            </p>
            <p className="text-[#D3D1C7] text-[13px] mt-2">
              For press enquiries:{' '}
              <a
                href="mailto:info@revivagreen.com"
                className="text-[#1D9E75] hover:underline"
              >
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