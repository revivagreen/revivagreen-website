'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    icon: <RequestIcon />,
    title: 'Request a pickup',
    description:
      'Submit a pickup request via our platform, WhatsApp, or your dedicated account manager. We confirm within 4 business hours.',
  },
  {
    number: '02',
    icon: <CollectIcon />,
    title: 'Collect & document',
    description:
      'Our trained team arrives, weighs your material on a calibrated digital scale, and records every item by material type and weight.',
  },
  {
    number: '03',
    icon: <InvoiceIcon />,
    title: 'Invoice & ESG data',
    description:
      'You receive a GST invoice within 24 hours. Your ESG dashboard updates automatically with material weight, CO₂ equivalent, and BRSR data.',
  },
  {
    number: '04',
    icon: <DashboardIcon />,
    title: 'Dashboard goes live',
    description:
      'Track all pickups, invoices, ESG metrics, and branch performance from one central dashboard — accessible to your GM and finance team.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0  },
}

export default function HowItWorks() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-white section-py"
      aria-labelledby="how-heading"
    >
      <div className="container">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-4">How it works</p>
          <h2 id="how-heading" className="h2 text-[#0A1F14]">
            From your first request to live ESG data — in four steps.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-[44px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-[#D3D1C7]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col"
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.12 }}
              >
                {/* Step number circle */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1F14] mb-6 z-10 shrink-0">
                  <span className="text-[13px] font-semibold text-white tabular-nums">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#1D9E75]/08 flex items-center justify-center mb-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-[#0A1F14] font-medium text-[18px] leading-[1.3] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#888780] text-[14px] leading-[1.7]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-10 border-t border-[#D3D1C7]"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75] shrink-0" />
            <p className="text-[#2C2C2A] text-[14px]">
              <span className="font-medium">4-hour response</span> guaranteed on all demo requests
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75] shrink-0" />
            <p className="text-[#2C2C2A] text-[14px]">
              <span className="font-medium">GST invoice</span> delivered within 24 hours of pickup
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75] shrink-0" />
            <p className="text-[#2C2C2A] text-[14px]">
              <span className="font-medium">Zero setup fee</span> for businesses with 2+ locations
            </p>
          </div>
          <Link
            href="/platform"
            className="sm:ml-auto btn-primary shrink-0"
          >
            See the platform
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

/* ── ICONS ─────────────────────────────────────────────────── */
function RequestIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CollectIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 8h14M5 8a2 2 0 1 0 0-4h14a2 2 0 1 0 0 4M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  )
}

function InvoiceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}