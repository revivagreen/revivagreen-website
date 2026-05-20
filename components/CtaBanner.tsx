'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0  },
}

export default function CtaBanner() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-[#0A1F14] hero-pattern section-py"
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">

          <motion.p
            className="eyebrow mb-6"
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Get started
          </motion.p>

          <motion.h2
            id="cta-heading"
            className="h2 text-white mb-6"
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Ready to make your waste work for your business?
          </motion.h2>

          <motion.p
            className="text-white/60 text-[17px] leading-[1.75] mb-10 max-w-xl mx-auto"
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Whether you need GST-compliant scrap recovery, ESG data for your
            BRSR report, or full EPR compliance management — RevivaGreen
            has a solution built for your business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary text-[15px] px-8 py-3.5">
              Request a demo
            </Link>
            <Link href="/services" className="btn-outline-white text-[15px] px-8 py-3.5">
              Explore our services
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            {[
              'DPIIT Recognised',
              'APPCB Certified',
              'GST Registered',
              'MSME Registered',
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-white/40 text-[13px]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {badge}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}