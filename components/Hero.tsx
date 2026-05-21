'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

// ── UPDATE THESE NUMBERS MONTHLY — verified from Zoho Books ──
const STATS = [
  { value: 400, suffix: '+', label: 'Tonnes Recovered'  },
  { value: 50,  suffix: '+', label: 'Active B2B Clients' },
  { value: 6,   suffix: '',  label: 'Districts Covered'  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0  },
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A1F14] hero-pattern overflow-hidden"
      aria-label="RevivaGreen hero"
    >
      <div className="container relative z-10 flex flex-col items-center text-center pt-32 pb-0">

        {/* Eyebrow */}
        <motion.p
          className="eyebrow mb-6"
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
        >
          DPIIT Recognised&nbsp;&nbsp;·&nbsp;&nbsp;APPCB Certified&nbsp;&nbsp;·&nbsp;&nbsp;Andhra Pradesh
        </motion.p>

        {/* H1 */}
        <motion.h1
          className="h1 text-white max-w-4xl mx-auto"
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          India&apos;s most trusted{' '}
          <span className="text-[#1D9E75]">circular economy</span>{' '}
          compliance platform
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="mt-6 text-white/65 text-[18px] leading-[1.7] max-w-[580px] mx-auto"
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          100% GST-documented scrap recovery, BRSR-aligned ESG reporting,
          and a real-time multi-branch dashboard — built for AP businesses
          that need compliance, not guesswork.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          <Link href="/contact" className="btn-primary text-[15px] px-7 py-3">
            For businesses
          </Link>
          <Link href="/platform" className="btn-outline-white text-[15px] px-7 py-3">
            See our platform
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          ref={statsRef}
          className="mt-16 w-full"
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          <div className="bg-[#0F2B1A] border-t border-[#1D9E75]/30 rounded-t-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <StatItem key={stat.label} stat={stat} active={statsVisible} isLast={i === STATS.length - 1} />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function StatItem({ stat, active, isLast }: { stat: (typeof STATS)[number]; active: boolean; isLast: boolean }) {
  const count = useCountUp(stat.value, 2000, active)
  return (
    <div className={`flex flex-col items-center justify-center py-8 px-6 ${!isLast ? 'border-b sm:border-b-0 sm:border-r border-white/8' : ''}`}>
      <span className="stat-number" data-target={stat.value} aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
        {count}{stat.suffix}
      </span>
      <span className="mt-1 text-[14px] text-white/55 font-normal">{stat.label}</span>
    </div>
  )
}