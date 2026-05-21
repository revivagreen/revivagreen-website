'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show banner only if consent not already given
    const consent = localStorage.getItem('rg-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('rg-cookie-consent', 'accepted')
    setVisible(false)
    // Load GA4 here once you have the measurement ID
    // window.gtag('consent', 'update', { analytics_storage: 'granted' })
  }

  const decline = () => {
    localStorage.setItem('rg-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[80] bg-[#0A1F14] border-t border-white/[0.08] px-6 py-5 md:py-4"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="container flex flex-col md:flex-row md:items-center gap-4 md:gap-8">

        <p className="text-white/70 text-[14px] leading-[1.6] flex-1">
          We use cookies to understand how visitors use our website and to improve your experience.
          See our{' '}
          <Link href="/cookies" className="text-[#1D9E75] hover:underline">Cookie Policy</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-[#1D9E75] hover:underline">Privacy Policy</Link>.
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-lg border border-white/20 text-white/70 text-[13px] font-medium hover:border-white/40 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="btn-primary !py-2.5 !px-5 text-[13px]"
          >
            Accept cookies
          </button>
        </div>

      </div>
    </div>
  )
}