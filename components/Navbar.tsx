'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'GST-Compliant Resource Recovery', href: '/services/recovery' },
      { label: 'ESG Data & BRSR Reporting',       href: '/services/esg'      },
      { label: 'EPR Compliance Management',        href: '/services/epr'      },
    ],
  },
  { label: 'Platform',   href: '/platform'  },
  { label: 'ESG Impact', href: '/impact'    },
  { label: 'About',      href: '/about'     },
  { label: 'Insights',   href: '/insights'  },
  { label: 'Contact',    href: '/contact'   },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg     = scrolled ? 'bg-white shadow-[0_1px_0_#D3D1C7]' : 'bg-transparent'
  const linkColor = scrolled
    ? 'text-[#1A1A1A] hover:text-[#1D9E75]'
    : 'text-white/75 hover:text-white'
  const py = scrolled ? 'py-4' : 'py-7'

  return (
    <>
      {/* ── DESKTOP NAV ─────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ease-in-out ${navBg} ${py}`}
      >
        <div className="container flex items-center gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 min-w-[140px]">
            <img
              src="/logo.svg"
              alt="RevivaGreen"
              width={45}
              height={45}
              style={{ objectFit: 'contain' }}
            />
            <span
              className="text-[18px] font-semibold tracking-[-0.02em] text-[#1D9E75] transition-colors duration-[250ms]"
            >
              RevivaGreen
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer ${linkColor}`}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-white border border-[#D3D1C7] rounded-lg py-2 min-w-[260px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-[14px] font-medium text-[#1A1A1A] hover:text-[#1D9E75] hover:bg-[#F5F0E8] transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-200 ${linkColor}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex btn-primary ml-4 !py-[10px] !px-5 text-[14px]"
          >
            Request a demo
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className={`lg:hidden ml-auto p-2 transition-colors border-none bg-transparent cursor-pointer ${
              scrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

        </div>
      </header>

      {/* ── MOBILE DRAWER ───────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-[#0A1F14] flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <img
                    src="/logo.svg"
                    alt="RevivaGreen"
                    width={32}
                    height={32}
                    style={{ objectFit: 'contain' }}
                  />
                  <span className="text-[18px] font-semibold text-[#1D9E75] tracking-[-0.02em]">
                    RevivaGreen
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className="text-white/70 hover:text-white p-2 bg-transparent border-none cursor-pointer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col px-6 py-8 gap-1 flex-1 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-[20px] font-medium text-white/80 hover:text-[#1D9E75] transition-colors border-b border-white/[0.08]"
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 mt-1 mb-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-[15px] text-white/50 hover:text-[#1D9E75] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="px-6 pb-8 pt-4 border-t border-white/[0.08]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center flex text-[15px]"
                >
                  Request a demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}