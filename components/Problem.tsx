'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PAIN_POINTS = [
  {
    icon: <InvoiceIcon />,
    title: 'No GST documentation',
    description:
      'Informal scrap dealers cannot issue GST invoices, leaving your finance team exposed during audits and blocking legitimate input tax credit claims.',
  },
  {
    icon: <ChartIcon />,
    title: 'Zero ESG data visibility',
    description:
      'Without material-level data on what you discard, your BRSR report is incomplete and your ESG score suffers — costing you investor and regulatory credibility.',
  },
  {
    icon: <BranchIcon />,
    title: 'No control across branches',
    description:
      'Managing waste across multiple plants or outlets with no centralised system means inconsistent practices, missed pickups, and zero accountability.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0  },
}

export default function Problem() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-[#0A1F14] section-py"
      aria-labelledby="problem-heading"
    >
      <div className="container">

        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-4">The problem</p>
          <h2
            id="problem-heading"
            className="h2 text-white"
          >
            The informal waste sector is a compliance liability for your business.
          </h2>
          <p className="mt-5 text-white/60 text-[17px] leading-[1.75] max-w-[600px]">
            Every tonne handed to an unregistered dealer is a tonne of missing documentation,
            missing data, and missing accountability — in the eyes of your auditors,
            investors, and regulators.
          </p>
        </motion.div>

        {/* Pain point cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              className="card-dark p-8"
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.1 }}
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-[#1D9E75]/10 flex items-center justify-center mb-6">
                {point.icon}
              </div>

              <h3 className="text-white font-medium text-[20px] leading-[1.3] mb-3">
                {point.title}
              </h3>
              <p className="text-white/55 text-[15px] leading-[1.7]">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat callout */}
        <motion.div
          className="mt-12 border border-[#1D9E75]/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="shrink-0">
            <span className="block text-[48px] font-semibold text-[#1D9E75] leading-none tabular-nums">
              90%
            </span>
            <span className="block text-white/40 text-[13px] mt-1 uppercase tracking-wide">
              of AP businesses
            </span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block shrink-0" />
          <p className="text-white/65 text-[16px] leading-[1.7]">
            still rely on the informal sector for waste disposal — with no GST documentation,
            no ESG data trail, and full exposure to regulatory non-compliance.
            RevivaGreen is built to fix exactly this.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

/* ── ICONS ─────────────────────────────────────────────────── */
function InvoiceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4"  />
      <line x1="6"  y1="20" x2="6"  y2="14" />
    </svg>
  )
}

function BranchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3"  y="3"  width="6" height="6" rx="1" />
      <rect x="15" y="3"  width="6" height="6" rx="1" />
      <rect x="9"  y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  )
}