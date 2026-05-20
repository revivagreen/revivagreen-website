'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const FEATURES = [
  {
    icon: <AutoIcon />,
    title: 'Auto-generated from pickups',
    description: 'Every verified pickup automatically populates your BRSR Principle 6 data. No manual entry.',
  },
  {
    icon: <SebiIcon />,
    title: 'SEBI BRSR aligned',
    description: 'Report structure follows SEBI\'s Business Responsibility and Sustainability Reporting framework exactly.',
  },
  {
    icon: <AuditIcon />,
    title: 'Auditor-ready format',
    description: 'Download a PDF your sustainability auditor can verify directly against our GST invoice records.',
  },
  {
    icon: <BranchIcon />,
    title: 'Multi-branch rollup',
    description: 'Consolidates data across all your locations into one company-wide ESG report automatically.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0  },
}

export default function EsgSnapshot() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-[#F5F0E8] section-py"
      aria-labelledby="esg-heading"
    >
      <div className="container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="eyebrow mb-4">ESG reporting</p>
            <h2 id="esg-heading" className="h2 text-[#0A1F14] mb-5">
              Your BRSR data, auto-generated.
            </h2>
            <p className="text-[#2C2C2A] text-[17px] leading-[1.75] mb-10 max-w-lg">
              Every tonne RevivaGreen collects from your business is logged,
              verified, and instantly available as structured ESG data — ready
              for your BRSR filing, sustainability report, or investor deck.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 + i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1D9E75]/10 flex items-center justify-center shrink-0 mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-[#0A1F14] font-medium text-[15px] mb-1">
                      {feature.title}
                    </p>
                    <p className="text-[#888780] text-[13px] leading-[1.6]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/platform" className="btn-primary">
              See the platform →
            </Link>
          </motion.div>

          {/* Right — ESG report mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            {/* Report card mockup */}
            <div className="bg-white rounded-2xl border border-[#D3D1C7] shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">

              {/* Report header */}
              <div className="bg-[#0A1F14] px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-[11px] uppercase tracking-[0.1em]">ESG Impact Report</p>
                  <p className="text-white font-medium text-[15px] mt-0.5">May 2026 · Company Name</p>
                </div>
                <span className="bg-[#1D9E75]/20 text-[#1D9E75] text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                  BRSR Aligned
                </span>
              </div>

              {/* Report body */}
              <div className="p-6">

                {/* Summary row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: '12.4t',  label: 'Total recovered' },
                    { value: '6.9t',   label: 'CO₂ diverted'    },
                    { value: '8',      label: 'Pickups'          },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#F5F0E8] rounded-lg p-3 text-center">
                      <span className="block text-[22px] font-semibold text-[#1D9E75] leading-none tabular-nums">
                        {item.value}
                      </span>
                      <span className="block text-[11px] text-[#888780] mt-1">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Material breakdown */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#888780] mb-3">
                  Material breakdown
                </p>
                {[
                  { label: 'Iron / Steel',  pct: 68, kg: '8,432 kg' },
                  { label: 'Aluminium',     pct: 18, kg: '2,232 kg' },
                  { label: 'Copper',        pct: 8,  kg: '992 kg'   },
                  { label: 'Plastic',       pct: 6,  kg: '744 kg'   },
                ].map((m) => (
                  <div key={m.label} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-[13px] text-[#2C2C2A]">{m.label}</span>
                      <span className="text-[13px] text-[#888780]">{m.kg}</span>
                    </div>
                    <div className="h-1.5 bg-[#F5F0E8] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1D9E75] rounded-full"
                        style={{ width: `${m.pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-[#D3D1C7] flex items-center justify-between">
                  <span className="text-[11px] text-[#888780]">
                    GSTIN verified · APPCB compliant
                  </span>
                  <span className="text-[11px] font-medium text-[#1D9E75]">
                    Download PDF →
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#D3D1C7] rounded-xl px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1D9E75]/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#0A1F14]">SEBI BRSR Principle 6</p>
                <p className="text-[11px] text-[#888780]">Data standards met</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ── ICONS ─────────────────────────────────────────────────── */
function AutoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  )
}

function SebiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function AuditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function BranchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  )
}