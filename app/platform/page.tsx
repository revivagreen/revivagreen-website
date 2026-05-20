import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform — RevivaGreen | Waste Management Dashboard & ESG Reporting',
  description:
    'One screen for your entire waste operation. Real-time multi-branch dashboard, GST invoice management, ESG reporting, and mobile access for GMs across Andhra Pradesh.',
}

/* ── FEATURES DATA ───────────────────────────────────────── */
const FEATURES = [
  {
    id: 'dashboard',
    tag: 'Feature 01',
    title: 'GM dashboard — every branch, one screen.',
    description:
      'Your General Manager gets a real-time view of all pickup activity, invoice status, material weights, and ESG metrics across every location — without calling a single facility manager.',
    bullets: [
      'Live pickup status across all branches',
      'Invoice tracker with GST document downloads',
      'Material-wise weight summary by location',
      'Month-on-month comparison charts',
      'Role-based access: GM, finance, sustainability',
    ],
    visual: <DashboardMockup />,
    flip: false,
  },
  {
    id: 'mobile',
    tag: 'Feature 02',
    title: 'See all branches on your phone in real time.',
    description:
      'The RevivaGreen mobile view is built for GMs who are always on the move. Check pickup confirmations, download invoices, and track your monthly ESG numbers from anywhere.',
    bullets: [
      'Push notifications on pickup completion',
      'One-tap invoice download as PDF',
      'Monthly ESG summary on home screen',
      'WhatsApp-integrated scheduling for facility managers',
      'Works on any smartphone — no app install required',
    ],
    visual: <MobileMockup />,
    flip: true,
  },
  {
    id: 'esg',
    tag: 'Feature 03',
    title: 'One click. BRSR-aligned. Ready for your auditor.',
    description:
      'Every verified pickup auto-populates your ESG report. Download a PDF that your sustainability auditor can verify directly against our GST invoice records — no manual data entry, no reconciliation.',
    bullets: [
      'SEBI BRSR Principle 6 framework mapping',
      'CO₂ equivalent calculation with methodology',
      'Multi-branch company-wide rollup',
      'PDF + Excel export formats',
      'Auditor verification trail via GST invoice links',
    ],
    visual: <EsgReportMockup />,
    flip: false,
  },
]

/* ── PRICING TIERS ───────────────────────────────────────── */
const TIERS = [
  {
    name: 'Seed',
    price: 'Free',
    priceNote: 'To get started',
    description: 'For businesses making their first move to compliant waste management.',
    features: [
      'Up to 2 pickup locations',
      'GST invoices on every pickup',
      'Basic material weight report',
      'WhatsApp scheduling',
      'Email support',
    ],
    cta: { label: 'Get started free', href: '/contact' },
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹75K – ₹1.2L',
    priceNote: 'Per year',
    description: 'For growing businesses that need ESG data and multi-location management.',
    features: [
      'Up to 10 pickup locations',
      'Full ESG dashboard access',
      'Monthly BRSR-aligned ESG report',
      'Dedicated account manager',
      'Priority pickup scheduling',
      'Invoice + ESG data API access',
    ],
    cta: { label: 'Request a demo', href: '/contact' },
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '₹2.5L – ₹8L',
    priceNote: 'Per year',
    description: 'For large businesses and multi-city operations needing full compliance management.',
    features: [
      'Unlimited pickup locations',
      'Full EPR compliance management',
      'Custom ESG reporting templates',
      'BRSR filing documentation support',
      'Executive quarterly review',
      'SLA-backed pickup commitments',
      'Dedicated compliance manager',
    ],
    cta: { label: 'Talk to us', href: '/contact' },
    highlight: false,
  },
]

/* ── PAGE ────────────────────────────────────────────────── */
export default function PlatformPage() {
  return (
    <main>
      <Navbar />

      {/* ── S1: HERO ──────────────────────────────────────── */}
      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-0 min-h-[60vh] flex flex-col justify-end overflow-hidden">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-5">The platform</p>
            <h1 className="h1 text-white">
              Your entire waste operation,{' '}
              <span className="text-[#1D9E75]">one screen.</span>
            </h1>
            <p className="mt-5 text-white/60 text-[18px] leading-[1.7]">
              From pickup scheduling to GST invoices to BRSR-aligned ESG
              reports — RevivaGreen gives your finance, operations, and
              sustainability teams one unified platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a demo
              </Link>
              <a href="#pricing" className="btn-outline-white">
                See pricing
              </a>
            </div>
          </div>

          {/* Hero dashboard preview */}
          <div className="relative mt-8 rounded-t-2xl overflow-hidden border border-white/[0.08] border-b-0">
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* ── S2–S4: FEATURE BLOCKS ─────────────────────────── */}
      {FEATURES.map((feature, i) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`section-py ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${feature.flip ? 'lg:grid-flow-dense' : ''}`}>

              {/* Content */}
              <div className={feature.flip ? 'lg:col-start-2' : ''}>
                <p className="eyebrow mb-4">{feature.tag}</p>
                <h2 className="h2 text-[#0A1F14] mb-5">{feature.title}</h2>
                <p className="text-[#2C2C2A] text-[17px] leading-[1.75] mb-8">
                  {feature.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] text-[#2C2C2A]">
                      <svg className="w-4 h-4 text-[#1D9E75] shrink-0 mt-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">
                  Request a demo
                </Link>
              </div>

              {/* Visual */}
              <div className={feature.flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {feature.visual}
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── S5: PRICING ───────────────────────────────────── */}
      <section id="pricing" className="bg-[#0A1F14] section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="h2 text-white mb-4">
              Simple, transparent pricing.
            </h2>
            <p className="text-white/55 text-[17px] leading-[1.7]">
              All plans include GST invoicing and basic reporting.
              Upgrade as your compliance needs grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlight
                    ? 'bg-[#1D9E75] ring-2 ring-[#1D9E75]'
                    : 'bg-[#0F2B1A] border border-white/[0.08]'
                }`}
              >
                {tier.highlight && (
                  <span className="self-start mb-4 bg-white/20 text-white text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}

                <p className={`text-[13px] font-semibold uppercase tracking-[0.1em] mb-2 ${tier.highlight ? 'text-white/70' : 'text-[#888780]'}`}>
                  {tier.name}
                </p>
                <div className="mb-1">
                  <span className={`text-[36px] font-semibold leading-none tabular-nums ${tier.highlight ? 'text-white' : 'text-[#1D9E75]'}`}>
                    {tier.price}
                  </span>
                </div>
                <p className={`text-[13px] mb-4 ${tier.highlight ? 'text-white/60' : 'text-[#888780]'}`}>
                  {tier.priceNote}
                </p>
                <p className={`text-[14px] leading-[1.65] mb-6 pb-6 border-b ${tier.highlight ? 'text-white/75 border-white/20' : 'text-white/50 border-white/[0.08]'}`}>
                  {tier.description}
                </p>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex gap-3 text-[14px] ${tier.highlight ? 'text-white/90' : 'text-white/60'}`}>
                      <svg className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? 'text-white' : 'text-[#1D9E75]'}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.cta.href}
                  className={`text-center py-3 px-6 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                    tier.highlight
                      ? 'bg-white text-[#1D9E75] hover:bg-white/90'
                      : 'bg-[#1D9E75]/10 text-[#1D9E75] hover:bg-[#1D9E75]/20 border border-[#1D9E75]/30'
                  }`}
                >
                  {tier.cta.label}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-[13px] mt-8">
            All prices exclude GST. Custom pricing available for enterprise clients with 20+ locations.
          </p>
        </div>
      </section>

      {/* ── S6: DEMO FORM ─────────────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="eyebrow mb-4">Book a demo</p>
              <h2 className="h2 text-[#0A1F14] mb-4">
                See the platform live.
              </h2>
              <p className="text-[#888780] text-[17px] leading-[1.7]">
                We will walk you through the dashboard, ESG reports, and
                invoicing flow — tailored to your business type.
                Response within 4 business hours.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white border border-[#D3D1C7] rounded-2xl p-8">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ── VISUAL MOCKUPS ──────────────────────────────────────── */

function HeroDashboard() {
  return (
    <div className="bg-[#0F2B1A] p-6 min-h-[280px]">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-white/40 text-[11px] uppercase tracking-wide">RevivaGreen Platform</p>
          <p className="text-white font-medium text-[15px]">Operations Overview — May 2026</p>
        </div>
        <span className="flex items-center gap-1.5 text-[#1D9E75] text-[12px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] animate-pulse" />
          Live
        </span>
      </div>
      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Pickups this month', value: '43' },
          { label: 'Tonnes collected',   value: '28.4t' },
          { label: 'Invoices issued',    value: '43' },
          { label: 'CO₂ diverted',       value: '15.8t' },
        ].map((s) => (
          <div key={s.label} className="bg-[#0A1F14] rounded-xl p-4">
            <p className="text-[#1D9E75] text-[22px] font-semibold tabular-nums">{s.value}</p>
            <p className="text-white/40 text-[11px] mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Bar chart placeholder */}
      <div className="bg-[#0A1F14] rounded-xl p-4">
        <p className="text-white/40 text-[11px] uppercase tracking-wide mb-4">Monthly collections by material (kg)</p>
        <div className="flex items-end gap-3 h-20">
          {[65, 40, 85, 30, 55, 70, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-[#1D9E75]/30 relative"
              style={{ height: `${h}%` }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 rounded-t bg-[#1D9E75]"
                style={{ height: '40%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="bg-[#0A1F14] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
      <div className="bg-[#0F2B1A] px-5 py-3 flex items-center gap-2 border-b border-white/[0.06]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        <span className="ml-3 text-white/30 text-[11px]">revivagreen.com/dashboard</span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { v: '8', l: 'Locations' },
            { v: '₹0', l: 'Pending invoices' },
            { v: '12.4t', l: 'This month' },
          ].map((s) => (
            <div key={s.l} className="bg-[#0F2B1A] rounded-lg p-3 text-center">
              <p className="text-[#1D9E75] text-[18px] font-semibold">{s.v}</p>
              <p className="text-white/35 text-[10px] mt-1">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {['Vijayawada Plant', 'Guntur Branch', 'Hyderabad Office'].map((loc, i) => (
            <div key={loc} className="flex items-center justify-between bg-[#0F2B1A] rounded-lg px-4 py-3">
              <span className="text-white/70 text-[13px]">{loc}</span>
              <div className="flex items-center gap-3">
                <span className="text-[#1D9E75] text-[13px] font-medium">{['2.1t', '1.8t', '0.9t'][i]}</span>
                <span className="w-2 h-2 rounded-full bg-[#1D9E75]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-64 bg-[#0A1F14] rounded-[32px] border-4 border-white/10 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.2)]">
        {/* Status bar */}
        <div className="bg-[#0F2B1A] px-5 pt-3 pb-2 flex justify-between items-center">
          <span className="text-white/40 text-[10px]">9:41</span>
          <span className="text-white/40 text-[10px]">●●●</span>
        </div>
        {/* App content */}
        <div className="p-4">
          <p className="text-white/40 text-[10px] uppercase tracking-wide mb-1">Good morning</p>
          <p className="text-white font-medium text-[14px] mb-4">Surendra</p>
          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[{ v: '3', l: 'Pickups today' }, { v: '8', l: 'Locations' }].map((s) => (
              <div key={s.l} className="bg-[#0F2B1A] rounded-xl p-3">
                <p className="text-[#1D9E75] text-[18px] font-semibold">{s.v}</p>
                <p className="text-white/35 text-[9px] mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
          {/* Recent activity */}
          <p className="text-white/30 text-[10px] uppercase tracking-wide mb-2">Recent</p>
          {['Pickup completed', 'Invoice ready', 'ESG updated'].map((item, i) => (
            <div key={item} className="flex items-center gap-2 py-2 border-b border-white/[0.06]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]" />
              <span className="text-white/60 text-[11px]">{item}</span>
              <span className="ml-auto text-white/25 text-[10px]">{['2m', '1h', '3h'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EsgReportMockup() {
  return (
    <div className="bg-white rounded-2xl border border-[#D3D1C7] shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="bg-[#0A1F14] px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-white/40 text-[11px] uppercase tracking-wide">ESG Impact Report</p>
          <p className="text-white font-medium text-[14px] mt-0.5">May 2026 · All Branches</p>
        </div>
        <span className="bg-[#1D9E75]/20 text-[#1D9E75] text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
          BRSR P6
        </span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[{ v: '28.4t', l: 'Recovered' }, { v: '15.8t', l: 'CO₂ saved' }, { v: '43', l: 'Pickups' }].map((s) => (
            <div key={s.l} className="bg-[#F5F0E8] rounded-lg p-3 text-center">
              <p className="text-[#1D9E75] text-[16px] font-semibold">{s.v}</p>
              <p className="text-[#888780] text-[10px] mt-1">{s.l}</p>
            </div>
          ))}
        </div>
        {[
          { label: 'Iron / Steel', pct: 68 },
          { label: 'Aluminium',   pct: 18 },
          { label: 'Copper',      pct: 8  },
          { label: 'Plastic',     pct: 6  },
        ].map((m) => (
          <div key={m.label} className="mb-2.5">
            <div className="flex justify-between mb-1">
              <span className="text-[12px] text-[#2C2C2A]">{m.label}</span>
              <span className="text-[12px] text-[#888780]">{m.pct}%</span>
            </div>
            <div className="h-1.5 bg-[#F5F0E8] rounded-full">
              <div className="h-full bg-[#1D9E75] rounded-full" style={{ width: `${m.pct}%` }} />
            </div>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-[#D3D1C7] flex justify-between items-center">
          <span className="text-[11px] text-[#888780]">GST verified · APPCB compliant</span>
          <span className="text-[11px] font-medium text-[#1D9E75]">Download PDF ↓</span>
        </div>
      </div>
    </div>
  )
}

/* ── DEMO FORM ───────────────────────────────────────────── */
function DemoForm() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2" htmlFor="company">
            Company name *
          </label>
          <input
            id="company"
            type="text"
            placeholder="Lakshmi Group"
            className="w-full px-4 py-3 rounded-lg border border-[#D3D1C7] text-[15px] text-[#1A1A1A] placeholder-[#888780] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2" htmlFor="locations">
            Number of locations *
          </label>
          <input
            id="locations"
            type="number"
            placeholder="e.g. 3"
            min="1"
            className="w-full px-4 py-3 rounded-lg border border-[#D3D1C7] text-[15px] text-[#1A1A1A] placeholder-[#888780] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2" htmlFor="city">
          Primary city *
        </label>
        <input
          id="city"
          type="text"
          placeholder="e.g. Vijayawada"
          className="w-full px-4 py-3 rounded-lg border border-[#D3D1C7] text-[15px] text-[#1A1A1A] placeholder-[#888780] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors"
        />
      </div>

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2" htmlFor="scrap">
          Primary scrap types
        </label>
        <input
          id="scrap"
          type="text"
          placeholder="e.g. Iron, aluminium, plastic"
          className="w-full px-4 py-3 rounded-lg border border-[#D3D1C7] text-[15px] text-[#1A1A1A] placeholder-[#888780] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2" htmlFor="name">
            Your name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-3 rounded-lg border border-[#D3D1C7] text-[15px] text-[#1A1A1A] placeholder-[#888780] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2" htmlFor="phone">
            Phone number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-lg border border-[#D3D1C7] text-[15px] text-[#1A1A1A] placeholder-[#888780] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2" htmlFor="email">
          Work email *
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="w-full px-4 py-3 rounded-lg border border-[#D3D1C7] text-[15px] text-[#1A1A1A] placeholder-[#888780] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors"
        />
      </div>

      <p className="text-[12px] text-[#888780]">
        We will respond within 4 business hours. Your information is kept confidential and never shared.
      </p>

      <button
        type="button"
        className="btn-primary w-full justify-center py-3.5 text-[15px]"
      >
        Request demo →
      </button>

      <p className="text-center text-[12px] text-[#888780]">
        Prefer WhatsApp?{' '}
        <a
          href="https://wa.me/918500626999?text=Hi%20RevivaGreen%2C%20I%20want%20to%20book%20a%20platform%20demo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1D9E75] hover:underline"
        >
          Message us directly
        </a>
      </p>
    </div>
  )
}