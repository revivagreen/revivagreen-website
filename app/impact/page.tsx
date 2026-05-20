'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* ── UPDATE THESE NUMBERS EVERY MONTH ───────────────────────
   Verify all figures with Tulasi from Zoho Books before updating */
const IMPACT_STATS = [
  { value: 500,  suffix: '+',  unit: 'Tonnes',  label: 'Total material recovered',    sublabel: 'Verified from operational records'     },
  { value: 280,  suffix: '+',  unit: 'Tonnes',  label: 'CO₂ equivalent diverted',     sublabel: 'From landfill, calculated per IPCC'     },
  { value: 50,  suffix: '+',  unit: '',         label: 'Active B2B clients',           sublabel: 'Across Andhra Pradesh'                 },
  { value: 6,    suffix: '',   unit: '',         label: 'Districts covered',            sublabel: 'And expanding quarterly'               },
]

/* ── MATERIAL BREAKDOWN ──────────────────────────────────────
   Update percentages monthly from Zoho Books data */
const MATERIALS = [
  { label: 'Iron / Steel',   pct: 62, kg: '3,10,000 kg', color: '#1D9E75'  },
  { label: 'Aluminium',      pct: 18, kg: '10,000 kg',   color: '#5DCAA5'  },
  { label: 'Copper',         pct: 8,  kg: '1,000 kg',   color: '#C8A84B'  },
  { label: 'Plastic',        pct: 7,  kg: '55,000 kg',   color: '#888780'  },
  { label: 'Paper / Cardboard', pct: 3, kg: '125,000 kg', color: '#D3D1C7'  },
  //{ label: 'E-Waste',        pct: 2,  kg: '10,000 kg',   color: '#2C2C2A'  },
]

/* ── AP DISTRICTS COVERED ────────────────────────────────────
   Add new districts as operations expand */
const DISTRICTS_COVERED = [
  { name: 'Krishna',     active: true  },
  { name: 'Guntur',      active: true  },
  { name: 'Eluru',       active: true  },
  { name: 'Visakhapatnam', active: true },
  { name: 'East Godavari',     active: true  },
  { name: 'Nellore',     active: true  },
  { name: 'Prakasam',    active: false },
  { name: 'Anantapur',   active: false },
  { name: 'Chittoor',    active: false },
  { name: 'Kadapa',      active: false },
  { name: 'Srikakulam',  active: false },
  { name: 'Vizianagaram', active: false },
]

/* ── COUNT UP HOOK ───────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let current = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0  },
}

/* ── PAGE ────────────────────────────────────────────────── */
export default function ImpactPage() {
  const statsRef    = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })
  const matRef      = useRef(null)
  const matInView   = useInView(matRef, { once: true, margin: '-80px' })
  const mapRef      = useRef(null)
  const mapInView   = useInView(mapRef, { once: true, margin: '-80px' })

  return (
    <main>
      <Navbar />

      {/* ── S1: HERO ──────────────────────────────────────── */}
      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-20 min-h-[50vh] flex items-center">
        <div className="container">
          <p className="eyebrow mb-5">ESG impact</p>
          <h1 className="h1 text-white max-w-3xl">
            Every tonne tracked.{' '}
            <span className="text-[#1D9E75]">Every tonne counted.</span>
          </h1>
          <p className="mt-5 text-white/60 text-[18px] leading-[1.7] max-w-xl">
            Our impact numbers come from verified operational records —
            not estimates. Every figure is linked to a GST invoice and
            available for independent audit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#data" className="btn-primary">
              See live data
            </a>
            <a href="#methodology" className="btn-outline-white">
              Our methodology
            </a>
          </div>
        </div>
      </section>

      {/* ── S2: LIVE DATA STATS ───────────────────────────── */}
      <section id="data" ref={statsRef} className="bg-[#0F2B1A] section-py border-y border-white/[0.06]">
        <div className="container">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
            initial="hidden"
            animate={statsInView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div>
              <p className="eyebrow mb-3">Live impact data</p>
              <h2 className="h2 text-white">
                Powered by real operations, not estimates.
              </h2>
            </div>
            <p className="text-white/30 text-[12px] uppercase tracking-[0.08em] md:text-right shrink-0">
              Verified from Zoho Books.<br />Last updated: May 2026.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
            {IMPACT_STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} active={statsInView} delay={i * 0.1} />
            ))}
          </div>

          {/* Download CTA */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0A1F14] border border-white/[0.08] rounded-xl px-6 py-5"
            initial="hidden"
            animate={statsInView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          >
            <div>
              <p className="text-white font-medium text-[15px]">
                Download our May 2026 ESG Impact Report
              </p>
              <p className="text-white/40 text-[13px] mt-0.5">
                PDF · BRSR-aligned · Auditor-ready
              </p>
            </div>
            {/* Replace href with real Google Drive PDF link */}
            <a
              href="#"
              className="btn-primary shrink-0 text-[14px]"
              aria-label="Download ESG impact report PDF"
            >
              Download PDF ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── S3: MATERIAL BREAKDOWN ────────────────────────── */}
      <section ref={matRef} className="bg-white section-py">
        <div className="container">
          <motion.div
            className="max-w-xl mb-14"
            initial="hidden"
            animate={matInView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="eyebrow mb-4">Material breakdown</p>
            <h2 className="h2 text-[#0A1F14]">
              What we recover, by material.
            </h2>
            <p className="mt-4 text-[#888780] text-[17px] leading-[1.7]">
              Every pickup is categorised by material type. This breakdown
              reflects cumulative recovery since operations began.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Bar chart */}
            <div className="space-y-5">
              {MATERIALS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial="hidden"
                  animate={matInView ? 'show' : 'hidden'}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-3 h-3 rounded-sm shrink-0"
                        style={{ background: m.color }}
                      />
                      <span className="text-[#2C2C2A] text-[15px] font-medium">
                        {m.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#888780] text-[13px]">{m.kg}</span>
                      <span
                        className="text-[15px] font-semibold tabular-nums w-10 text-right"
                        style={{ color: m.color }}
                      >
                        {m.pct}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-[#F5F0E8] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: m.color }}
                      initial={{ width: 0 }}
                      animate={matInView ? { width: `${m.pct}%` } : { width: 0 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 + i * 0.08 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Donut chart (SVG) */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={matInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            >
              <DonutChart materials={MATERIALS} />
              <div className="mt-6 text-center">
                <p className="text-[#0A1F14] font-semibold text-[28px] tabular-nums">
                  500+ tonnes
                </p>
                <p className="text-[#888780] text-[14px] mt-1">
                  Total recovered to date
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── S4: COVERAGE MAP ──────────────────────────────── */}
      <section ref={mapRef} className="bg-[#F5F0E8] section-py">
        <div className="container">
          <motion.div
            className="max-w-xl mb-14"
            initial="hidden"
            animate={mapInView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="eyebrow mb-4">Coverage</p>
            <h2 className="h2 text-[#0A1F14]">
              Where we operate in Andhra Pradesh.
            </h2>
            <p className="mt-4 text-[#888780] text-[17px] leading-[1.7]">
              Currently active in 6 districts. Expanding to new districts
              every quarter based on client demand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* District grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              initial="hidden"
              animate={mapInView ? 'show' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              {DISTRICTS_COVERED.map((d) => (
                <div
                  key={d.name}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-lg border text-[14px] font-medium transition-all ${
                    d.active
                      ? 'bg-white border-[#1D9E75]/30 text-[#0A1F14]'
                      : 'bg-transparent border-[#D3D1C7] text-[#888780]'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      d.active ? 'bg-[#1D9E75]' : 'bg-[#D3D1C7]'
                    }`}
                  />
                  {d.name}
                  {!d.active && (
                    <span className="ml-auto text-[10px] text-[#D3D1C7] uppercase tracking-wide">
                      Soon
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Map visual */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={mapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <APMapSVG />
              <div className="mt-4 flex items-center gap-6 justify-center">
                <div className="flex items-center gap-2 text-[13px] text-[#888780]">
                  <div className="w-3 h-3 rounded-full bg-[#1D9E75]" />
                  Active districts
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#888780]">
                  <div className="w-3 h-3 rounded-full bg-[#D3D1C7]" />
                  Coming soon
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── S5: CERTIFICATIONS ────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-4">Certifications</p>
            <h2 className="h2 text-[#0A1F14]">
              Authorised, registered, compliant.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'DPIIT Recognised',
                number: 'DIPP212171',
                color: '#C8A84B',
                desc: 'Recognised by the Department for Promotion of Industry and Internal Trade as an innovative startup.',
              },
              {
                name: 'MSME Registered',
                number: 'UDYAM-AP-06-0101707',
                color: '#C8A84B',
                desc: 'Registered under the Government of India MSME Udyam framework.',
              },
              {
                name: 'GST Registered',
                number: '37AAOCR8130R1ZG',
                color: '#1D9E75',
                desc: 'Fully GST-registered. Every transaction is invoiced, documented, and tax-compliant.',
              },
            ].map((cert) => (
              <div
                key={cert.name}
                className="border rounded-xl p-6"
                style={{ borderColor: `${cert.color}25` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${cert.color}12` }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <p className="text-[#0A1F14] font-medium text-[15px] mb-1">{cert.name}</p>
                <p className="font-mono text-[12px] mb-3" style={{ color: cert.color }}>
                  {cert.number}
                </p>
                <p className="text-[#888780] text-[13px] leading-[1.65]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: METHODOLOGY ───────────────────────────────── */}
      <section id="methodology" className="bg-[#0A1F14] section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">BRSR methodology</p>
              <h2 className="h2 text-white mb-6">
                Our data meets SEBI BRSR Principle 6 standards.
              </h2>
              <div className="space-y-4 text-white/65 text-[16px] leading-[1.75]">
                <p>
                  Every ESG figure published by RevivaGreen is derived from
                  verified operational data — not industry averages or estimates.
                  Our methodology is documented, consistent, and independently
                  verifiable.
                </p>
                <p>
                  CO₂ equivalent calculations use IPCC emission factors for
                  each material category. Landfill diversion figures are
                  calculated against the counterfactual scenario of informal
                  disposal.
                </p>
                <p>
                  All figures are reconciled monthly against Zoho Books
                  transaction records and GST invoice data. Any discrepancy
                  above 0.5% triggers a manual review.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Source data',
                  desc: 'GST-invoiced pickup records from Zoho Books. Every figure traces to a specific invoice and weighing record.',
                },
                {
                  title: 'CO₂ calculation',
                  desc: 'IPCC Tier 1 emission factors by material category. Methodology document available on request.',
                },
                {
                  title: 'BRSR alignment',
                  desc: 'Data structured to SEBI BRSR Principle 6 — Resource Use, Circular Economy, and Waste Management.',
                },
                {
                  title: 'Audit trail',
                  desc: 'Every ESG data point links to the underlying GST invoice. Your auditor can independently verify any figure.',
                },
                {
                  title: 'Update frequency',
                  desc: 'Impact numbers updated manually every month. Report date shown on every published figure.',
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-[#0F2B1A] border border-white/[0.06] rounded-xl p-5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1D9E75]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#1D9E75] text-[12px] font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-[15px] mb-1">{item.title}</p>
                    <p className="text-white/50 text-[13px] leading-[1.65]">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#1D9E75] text-[14px] font-medium hover:underline"
                  aria-label="Download methodology document PDF"
                >
                  Download full methodology document (PDF)
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 3v7M8 10l-3-3M8 10l3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S7: CTA ───────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-4">Get your own data</p>
            <h2 className="h2 text-[#0A1F14] mb-5">
              Your business deserves its own ESG dashboard.
            </h2>
            <p className="text-[#888780] text-[17px] leading-[1.7] mb-8 max-w-lg mx-auto">
              Every RevivaGreen client gets a real-time ESG dashboard with
              their own material breakdown, CO₂ figures, and BRSR-ready report.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-3.5">
                Request a demo
              </Link>
              <Link href="/platform" className="btn-outline-white !text-[#0A1F14] !border-[#D3D1C7] hover:!border-[#1D9E75] px-8 py-3.5">
                See the platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ── STAT CARD ───────────────────────────────────────────── */
function StatCard({
  stat,
  active,
  delay,
}: {
  stat: (typeof IMPACT_STATS)[number]
  active: boolean
  delay: number
}) {
  const count = useCountUp(stat.value, 2000, active)
  return (
    <motion.div
      className="bg-[#0A1F14] flex flex-col items-center justify-center text-center px-8 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <span className="block text-[52px] font-semibold text-[#1D9E75] leading-none tabular-nums" data-target={stat.value}>
        {count}{stat.suffix}
      </span>
      {stat.unit && (
        <span className="block text-[#1D9E75]/50 text-[14px] font-medium mt-1">
          {stat.unit}
        </span>
      )}
      <span className="block text-white/80 font-medium text-[15px] mt-3">
        {stat.label}
      </span>
      <span className="block text-white/30 text-[12px] mt-1">
        {stat.sublabel}
      </span>
    </motion.div>
  )
}

/* ── DONUT CHART ─────────────────────────────────────────── */
function DonutChart({ materials }: { materials: typeof MATERIALS }) {
  const size = 220
  const cx = size / 2
  const cy = size / 2
  const r = 80
  const strokeWidth = 28
  const circumference = 2 * Math.PI * r

  let offset = 0
  const segments = materials.map((m) => {
    const dash = (m.pct / 100) * circumference
    const gap = circumference - dash
    const seg = { ...m, dash, gap, offset }
    offset += dash
    return seg
  })

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label="Material breakdown donut chart">
      {segments.map((seg) => (
        <circle
          key={seg.label}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={seg.color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${seg.dash} ${seg.gap}`}
          strokeDashoffset={-seg.offset + circumference / 4}
          strokeLinecap="butt"
        />
      ))}
      <circle cx={cx} cy={cy} r={r - strokeWidth / 2 - 2} fill="#F7F6F2" />
    </svg>
  )
}

/* ── AP MAP SVG ──────────────────────────────────────────── */
function APMapSVG() {
  // Simplified Andhra Pradesh outline with district dot positions
  const activeDots = [
    { name: 'Krishna',        cx: 145, cy: 195 },
    { name: 'Guntur',         cx: 130, cy: 215 },
    { name: 'Eluru',          cx: 120, cy: 175 },
    { name: 'Visakhapatnam',  cx: 205, cy: 105 },
    { name: 'East Godavari',        cx: 110, cy: 250 },
    { name: 'Nellore',        cx: 145, cy: 290 },
  ]
  const comingSoonDots = [
    { name: 'Prakasam',      cx: 140, cy: 265 },
    { name: 'Anantapur',     cx: 95,  cy: 275 },
    { name: 'Chittoor',      cx: 130, cy: 315 },
    { name: 'Kadapa',        cx: 115, cy: 290 },
    { name: 'Srikakulam',    cx: 210, cy: 70  },
    { name: 'Vizianagaram',  cx: 200, cy: 85  },
  ]

  return (
    <div className="bg-white rounded-2xl border border-[#D3D1C7] p-6">
      <svg
        viewBox="0 0 300 380"
        className="w-full max-w-xs mx-auto"
        aria-label="Andhra Pradesh coverage map"
      >
        {/* AP simplified outline */}
        <path
          d="M210,45 L230,60 L245,80 L240,100 L225,115 L215,130 L220,150 L210,165 L200,180 L195,200 L185,215 L175,230 L165,245 L155,260 L145,275 L140,295 L135,315 L130,330 L120,340 L105,335 L95,320 L85,300 L80,280 L75,260 L80,240 L85,220 L90,200 L95,180 L95,160 L100,140 L105,120 L108,100 L112,80 L120,65 L135,52 L155,45 L175,42 L195,44 Z"
          fill="#F5F0E8"
          stroke="#D3D1C7"
          strokeWidth="1.5"
        />

        {/* Coming soon dots */}
        {comingSoonDots.map((dot) => (
          <g key={dot.name}>
            <circle cx={dot.cx} cy={dot.cy} r="5" fill="#D3D1C7" />
            <title>{dot.name} — Coming soon</title>
          </g>
        ))}

        {/* Active dots with pulse ring */}
        {activeDots.map((dot) => (
          <g key={dot.name}>
            <circle cx={dot.cx} cy={dot.cy} r="10" fill="#1D9E75" fillOpacity="0.15" />
            <circle cx={dot.cx} cy={dot.cy} r="6" fill="#1D9E75" />
            <title>{dot.name} — Active</title>
          </g>
        ))}

        {/* Vijayawada label */}
        <text x="150" y="192" textAnchor="middle" fontSize="9" fill="#0A1F14" fontWeight="600">
          Vijayawada
        </text>
        <text x="152" y="68" textAnchor="middle" fontSize="9" fill="#0A1F14" fontWeight="600">
          Vizag
        </text>
      </svg>
    </div>
  )
}