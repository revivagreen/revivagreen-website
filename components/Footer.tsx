import Link from 'next/link'

const REGISTRATION = {
  gstin: 'GSTIN: 37AAOCR8130R1ZG',
  cin:   'CIN: U38120AP2025PTC120216',
  dpiit: 'DPIIT: DIPP212171',
  msme:  'MSME: UDYAM-AP-06-0101707',
}

const WHATSAPP = 'https://wa.me/918500626999?text=Hi%20RevivaGreen%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services'

const SERVICES_LINKS = [
  { label: 'GST-Compliant Recovery', href: '/services#recovery' },
  { label: 'ESG Data & BRSR',        href: '/services#esg'      },
  { label: 'EPR Compliance',         href: '/services#epr'      },
  { label: 'B2B Dashboard',          href: '/platform'          },
]

const COMPANY_LINKS = [
  { label: 'About us',  href: '/about'    },
  { label: 'Our team',  href: '/about'    },
  { label: 'Clients',   href: '/clients'  },
  { label: 'Insights',  href: '/insights' },
  { label: 'Careers',   href: '/careers'  },
  { label: 'Contact',   href: '/contact'  },
]

const LEGAL_LINKS = [
  { label: 'Privacy policy',  href: '/privacy' },
  { label: 'Terms of service', href: '/terms'  },
  { label: 'Cookie policy',   href: '/cookies' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1F14]" aria-label="Site footer">

      {/* ── MAIN FOOTER ─────────────────────────────────── */}
      <div className="container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.svg" alt="RevivaGreen" width={32} height={32} style={{ objectFit: 'contain' }} />
              <span className="text-[17px] font-semibold text-[#1D9E75] tracking-[-0.02em]">
                RevivaGreen
              </span>
            </Link>

             <p className="text-[#1D9E75]/60 text-[13px] font-medium tracking-[0.04em] mb-6">
  Connecting Communities. Future-Proofing Our Planet.
</p>
            <p className="text-white/50 text-[14px] leading-[1.7] max-w-[240px] mb-2">
              Andhra Pradesh&apos;s first B2B compliance-grade circular economy platform.
              GST-documented. ESG-ready. DPIIT recognised.
            </p>
           
            <p className="text-white/30 text-[13px] leading-[1.6] max-w-[240px] mb-6">
              2-117, 1 Doctor Road, Ganapavaram<br />
              Mylavaram, NTR District, AP — 521230<br />
              +91 85006 26999
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/revivagreen" target="_blank" rel="noopener noreferrer" aria-label="RevivaGreen on LinkedIn" className="text-white/40 hover:text-[#1D9E75] transition-colors duration-200">
                <LinkedInIcon />
              </a>
              <a href="https://instagram.com/revivagreen.in" target="_blank" rel="noopener noreferrer" aria-label="RevivaGreen on Instagram" className="text-white/40 hover:text-[#1D9E75] transition-colors duration-200">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/revivagreen" target="_blank" rel="noopener noreferrer" aria-label="RevivaGreen on X (Twitter)" className="text-white/40 hover:text-[#1D9E75] transition-colors duration-200">
                <XIcon />
              </a>
            </div>

            {/* DPIIT badge */}
            <div className="mt-6 inline-flex items-center gap-2 border border-[#C8A84B]/30 rounded-lg px-3 py-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A84B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[#C8A84B] text-[11px] font-medium uppercase tracking-[0.08em]">
                DPIIT Recognised
              </span>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-white/80 text-[12px] font-semibold uppercase tracking-[0.1em] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-[#1D9E75] text-[14px] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="text-white/80 text-[12px] font-semibold uppercase tracking-[0.1em] mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-[#1D9E75] text-[14px] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal + Contact */}
          <div>
            <h3 className="text-white/80 text-[12px] font-semibold uppercase tracking-[0.1em] mb-5">
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-[#1D9E75] text-[14px] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white/80 text-[12px] font-semibold uppercase tracking-[0.1em] mb-3">
              Contact
            </h3>
            <a href="mailto:info@revivagreen.com" className="text-white/50 hover:text-[#1D9E75] text-[14px] transition-colors duration-200 block mb-2">
              info@revivagreen.com
            </a>
            <a href="tel:+918500626999" className="text-white/50 hover:text-[#1D9E75] text-[14px] transition-colors duration-200 block mb-2">
              +91 85006 26999
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#1D9E75] text-[14px] transition-colors duration-200 flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.5 2C6.262 2 2 6.262 2 11.5c0 1.73.472 3.354 1.293 4.752L2 22l5.875-1.538A9.45 9.45 0 0 0 11.5 21C16.738 21 21 16.738 21 11.5S16.738 2 11.5 2zm0 17.25c-1.615 0-3.116-.468-4.376-1.268l-.314-.188-3.487.913.929-3.389-.205-.34A7.725 7.725 0 0 1 3.75 11.5C3.75 7.22 7.22 3.75 11.5 3.75S19.25 7.22 19.25 11.5 15.78 19.25 11.5 19.25z" />
              </svg>
              WhatsApp us
            </a>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ──────────────────────────────────── */}
      <div className="border-t border-white/[0.08]">
        <div className="container py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <p className="text-white/30 text-[13px]">
              © {new Date().getFullYear()} RevivaGreen Ventures Private Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {Object.values(REGISTRATION).map((reg) => (
                <span key={reg} className="text-white/25 text-[11px] font-mono">
                  {reg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WHATSAPP FLOATING BUTTON ─────────────────────── */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RevivaGreen on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-200"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M11.5 2C6.262 2 2 6.262 2 11.5c0 1.73.472 3.354 1.293 4.752L2 22l5.875-1.538A9.45 9.45 0 0 0 11.5 21C16.738 21 21 16.738 21 11.5S16.738 2 11.5 2zm0 17.25c-1.615 0-3.116-.468-4.376-1.268l-.314-.188-3.487.913.929-3.389-.205-.34A7.725 7.725 0 0 1 3.75 11.5C3.75 7.22 7.22 3.75 11.5 3.75S19.25 7.22 19.25 11.5 15.78 19.25 11.5 19.25z" />
        </svg>
      </a>

    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}