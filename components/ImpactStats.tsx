'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// ── UPDATE THESE NUMBERS EVERY MONTH ─────────────────────────
// Change the `value` field only. The animation handles the rest.
const STATS = [
  { value: 500,  suffix: '+',   prefix: '',  label: 'Tonnes Recovered',       sublabel: 'and growing monthly'         },
  { value: 280,  suffix: '+',   prefix: '',  label: 'Tonnes CO₂ Diverted',    sublabel: 'from landfill equivalent'    },
  { value: 100,  suffix: '+',   prefix: '',  label: 'Active B2B Clients',      sublabel: 'across Andhra Pradesh'       },
  { value: 6,    suffix: '',    prefix: '',  label: 'Districts Covered',       sublabel: 'and expanding'               },
]

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let current = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
}

export default function ImpactStats() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-[#0A1F14] section-py"
      aria-labelledby="impact-heading"
    >
      <div className="container">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <p className="eyebrow mb-4">Real impact</p>
            <h2 id="impact-heading" className="h2 text-white max-w-lg">
              Powered by real operations, not estimates.
            </h2>
          </div>
          <p className="text-white/40 text-[13px] uppercase tracking-[0.08em] md:text-right max-w-xs">
            Numbers verified from Zoho Books data.<br />Updated monthly.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              active={inView}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-8 text-center text-[13px] text-white/30"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          Data sourced from operational records. Last updated: May 2026.
        </motion.p>

      </div>
    </section>
  )
}

function StatCard({
  stat,
  active,
  delay,
}: {
  stat: (typeof STATS)[number]
  active: boolean
  delay: number
}) {
  const count = useCountUp(stat.value, 2000, active)

  return (
    <motion.div
      className="bg-[#0F2B1A] flex flex-col items-center justify-center text-center px-8 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <span
        className="block text-[56px] font-semibold text-[#1D9E75] leading-none tabular-nums"
        data-target={stat.value}
      >
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span className="block mt-3 text-white/90 font-medium text-[16px]">
        {stat.label}
      </span>
      <span className="block mt-1 text-white/35 text-[13px]">
        {stat.sublabel}
      </span>
    </motion.div>
  )
}