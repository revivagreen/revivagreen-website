'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const SERVICES = [
  {
    icon: <ComplianceIcon />,
    tag: 'Service 01',
    title: 'GST-Compliant Resource Recovery',
    description:
      'Every pickup generates a fully compliant GST invoice — eliminating your exposure to informal dealers and giving your finance team the documentation they need.',
    href: '/services/recovery',
    metric: '100%',
    metricLabel: 'GST documented',
  },
  {
    icon: <EsgIcon />,
    tag: 'Service 02',
    title: 'ESG Data & BRSR Reporting',
    description:
      'Automatic material-level data on every tonne collected. Your BRSR Principle 6 data is ready for your auditor — no spreadsheets, no manual tracking.',
    href: '/services/esg',
    metric: 'BRSR',
    metricLabel: 'SEBI aligned',
  },
  {
    icon: <EprIcon />,
    tag: 'Service 03',
    title: 'EPR Compliance Management',
    description:
      'End-to-end Extended Producer Responsibility compliance — from collection documentation to regulatory filing support. Starting from ₹3L/year managed service.',
    href: '/services/epr',
    metric: 'EPR',
    metricLabel: 'Fully managed',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0  },
}

export default function Solution() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-[#F5F0E8] section-py"
      aria-labelledby="solution-heading"
    >
      <div className="container">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What we do</p>
            <h2 id="solution-heading" className="h2 text-[#0A1F14]">
              Three ways RevivaGreen works with your business.
            </h2>
          </div>
          <p className="text-[#888780] text-[15px] leading-[1.7] max-w-xs md:text-right">
            Every service is backed by real operations, certified processes,
            and data your auditors can trust.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className="card-light flex flex-col p-8 group"
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
            >
              {/* Tag */}
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#888780] mb-5">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#1D9E75]/10 flex items-center justify-center mb-6 group-hover:bg-[#1D9E75]/20 transition-colors duration-250">
                {service.icon}
              </div>

              {/* Metric callout */}
              <div className="mb-5">
                <span className="text-[28px] font-semibold text-[#1D9E75] leading-none tabular-nums">
                  {service.metric}
                </span>
                <span className="ml-2 text-[13px] text-[#888780] font-medium uppercase tracking-wide">
                  {service.metricLabel}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-[#0A1F14] font-medium text-[20px] leading-[1.3] mb-3">
                {service.title}
              </h3>
              <p className="text-[#2C2C2A] text-[15px] leading-[1.7] flex-1">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1D9E75] hover:gap-3 transition-all duration-200"
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-xl p-6 md:p-8 border border-[#D3D1C7]"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          <div>
            <p className="text-[#0A1F14] font-medium text-[17px]">
              Not sure which service fits your business?
            </p>
            <p className="text-[#888780] text-[14px] mt-1">
              We respond within 4 business hours.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Request a demo
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

/* ── ICONS ─────────────────────────────────────────────────── */
function ComplianceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function EsgIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function EprIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  )
}