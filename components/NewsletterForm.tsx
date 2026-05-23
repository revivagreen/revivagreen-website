'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NewsletterForm() {
  const [email,   setEmail]   = useState('')
  const [consent, setConsent] = useState(false)
  const [status,  setStatus]  = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg,  setErrMsg]  = useState('')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setErrMsg('Please enter a valid email address.')
      return
    }
    if (!consent) {
      setErrMsg('Please tick the consent checkbox to subscribe.')
      return
    }
    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrMsg('Something went wrong. Please try again or email us at info@revivagreen.com.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#0F2B1A] border border-white/[0.08] rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[#1D9E75]/15 border-2 border-[#1D9E75] flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-white font-medium text-[18px] mb-2">You are subscribed.</h3>
        <p className="text-white/50 text-[14px] leading-[1.6]">
          A confirmation has been sent to <strong className="text-white/80">{email}</strong>.
          We will be in touch with regulatory updates fortnightly.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[#0F2B1A] border border-white/[0.08] rounded-2xl p-8">
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="email"
          placeholder="your@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          className="flex-1 px-4 py-3 rounded-lg bg-[#0A1F14] border border-white/[0.12] text-white placeholder-white/30 text-[15px] focus:outline-none focus:border-[#1D9E75] transition-colors"
          aria-label="Work email address"
          disabled={status === 'loading'}
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className="btn-primary shrink-0 px-6 py-3 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>

      {errMsg && (
        <p className="text-red-400 text-[13px] mb-3">{errMsg}</p>
      )}

      <label className="flex items-start gap-3 text-left cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 w-4 h-4 accent-[#1D9E75] shrink-0 cursor-pointer"
          aria-label="Consent to receive regulatory updates"
        />
        <span className="text-white/40 text-[12px] leading-[1.6]">
          I agree to receive regulatory updates from RevivaGreen. Unsubscribe anytime.
          See our{' '}
          <Link href="/privacy" className="text-[#1D9E75] hover:underline">privacy policy</Link>.
        </span>
      </label>
    </div>
  )
}