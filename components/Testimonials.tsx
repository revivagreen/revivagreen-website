'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ── REPLACE WITH REAL TESTIMONIALS ONCE YOU HAVE WRITTEN PERMISSION ──
// Rules from brief: full name + designation + company + written permission email on file
// Never use stock photos — use real headshots only
const TESTIMONIALS = [
  {
    quote:
      'RevivaGreen completely changed how we handle scrap at our dealership. We now have a GST invoice for every pickup, our accounts team is happy, and we get a monthly report showing our environmental contribution. It is the most professional waste management service we have worked with.',
    name: 'Venkat',
    designation: 'General Manager',
    company: 'Lakshmi Group',
    initials: 'CN',
    // photo: '/images/testimonials/name.jpg',  ← uncomment when you have real photo
  },
  {
    quote:
      'We needed a compliant vendor who could handle our multi-location waste and provide data for our BRSR filing. RevivaGreen delivered exactly that — reliable pickups, clean invoices, and an ESG dashboard our sustainability team actually uses.',
    name: 'Prasad N',
    designation: 'Head of Operations',
    company: 'Vijaya Pvt Ltd, Andhra Pradesh',
    initials: 'CN',
    // photo: '/images/testimonials/name.jpg',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0  },
}

export default function Testimonials() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-white section-py"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">

        {/* Header */}
        <motion.div
          className="max-w-xl mb-14"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-4">Client voices</p>
          <h2 id="testimonials-heading" className="h2 text-[#0A1F14]">
            What our clients say.
          </h2>
        </motion.div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="card-light p-8 md:p-10 flex flex-col"
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.15 }}
            >
              {/* Large quote mark */}
              <svg
                className="w-10 h-10 text-[#1D9E75] opacity-20 mb-6 shrink-0"
                viewBox="0 0 40 40"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 20C0 8.954 8.954 0 20 0v8C13.373 8 8 13.373 8 20v20H0V20zm22 0C22 8.954 30.954 0 42 0v8c-6.627 0-12 5.373-12 12v20H22V20z" />
              </svg>

              {/* Quote text */}
              <p className="text-[#2C2C2A] text-[17px] italic leading-[1.75] flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-[#D3D1C7] mb-6" />

              {/* Attribution */}
              <div className="flex items-center gap-4">
                {/* Avatar — shows initials until real photo is available */}
                <div className="w-12 h-12 rounded-full border-2 border-[#1D9E75] bg-[#1D9E75]/10 flex items-center justify-center shrink-0">
                  <span className="text-[13px] font-semibold text-[#1D9E75]">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-medium text-[15px]">{t.name}</p>
                  <p className="text-[#888780] text-[13px] mt-0.5">
                    {t.designation} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Permission note — internal reminder, hidden from users */}
        {/* DEVELOPER NOTE: Do not publish without written permission from each person quoted.
            Keep permission email on file. Photo must be real person, not stock. */}

      </div>
    </section>
  )
}