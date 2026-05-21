'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

const OFFICE = {
  address:  'RevivaGreen Ventures Private Limited\n2-117, 1 Doctor Road, Ganapavaram\nMylavaram, NTR District\nAndhra Pradesh — 521230',
  phone:    '+91 85006 26999',
  email:    'info@revivagreen.com',
  whatsapp: 'https://wa.me/918500626999?text=Hi%20RevivaGreen%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services',
  maps:     'https://maps.google.com/?q=Mylavaram+NTR+District+Andhra+Pradesh+521230',
}

const COMPLIANCE = [
  { label: 'GSTIN',      value: '37AAOCR8130R1ZG'      },
  { label: 'CIN',        value: 'U38120AP2025PTC120216' },
  { label: 'DPIIT',      value: 'DIPP212171'            },
  { label: 'MSME Udyam', value: 'UDYAM-AP-06-0101707'   },
]

const DISTRICTS = [
  { name: 'Krishna',       active: true  },
  { name: 'NTR',           active: true  },
  { name: 'Guntur',        active: true  },
  { name: 'West Godavari', active: true  },
  { name: 'Visakhapatnam', active: true  },
  { name: 'East Godavari', active: true  },
  { name: 'Prakasam',      active: false },
  { name: 'Nellore',       active: false },
  { name: 'Kadapa',        active: false },
  { name: 'Kurnool',       active: false },
  { name: 'Srikakulam',    active: false },
  { name: 'Vizianagaram',  active: false },
]

/* ── DEMO FORM ───────────────────────────────────────────── */
function DemoForm() {
  const [form, setForm]       = useState({ company: '', locations: '', city: '', scrap: '', name: '', phone: '', email: '' })
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg]   = useState('')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      setErrMsg('Please fill in your name and phone number.')
      return
    }
    setStatus('loading')
    setErrMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'demo', ...form }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrMsg('Something went wrong. Please WhatsApp us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-[#1D9E75]/10 border-2 border-[#1D9E75] flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-[#0A1F14] font-medium text-[20px] mb-2">Request received</h3>
        <p className="text-[#888780] text-[15px]">
          We will contact you within 4 business hours on <strong className="text-[#0A1F14]">{form.phone}</strong>.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="d-company"   label="Company name"        type="text"   placeholder="Lakshmi Group"         value={form.company}   onChange={set('company')}   />
        <Field id="d-locations" label="Number of locations" type="number" placeholder="e.g. 3"                value={form.locations} onChange={set('locations')} />
      </div>
      <Field id="d-city"  label="Primary city"        type="text"  placeholder="e.g. Vijayawada"          value={form.city}  onChange={set('city')}  />
      <Field id="d-scrap" label="Primary scrap types"  type="text"  placeholder="e.g. Iron, plastic"       value={form.scrap} onChange={set('scrap')} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="d-name"  label="Your name"    type="text" placeholder="Full name"       value={form.name}  onChange={set('name')}  required />
        <Field id="d-phone" label="Phone number" type="tel"  placeholder="+91 85006 26999" value={form.phone} onChange={set('phone')} required />
      </div>
      <Field id="d-email" label="Work email" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} />

      {errMsg && <p className="text-red-500 text-[13px]">{errMsg}</p>}

      <p className="text-[12px] text-[#888780]">
        We will respond within 4 business hours. Your information is never shared with third parties.
      </p>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center py-3.5 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Request demo →'}
      </button>
      <p className="text-center text-[12px] text-[#888780]">
        Prefer WhatsApp?{' '}
        <a href={OFFICE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] hover:underline">
          Message us directly
        </a>
      </p>
    </div>
  )
}

/* ── QUOTE FORM ──────────────────────────────────────────── */
function QuoteForm() {
  const [form, setForm]     = useState({ company: '', city: '', volume: '', contact: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.contact) {
      setErrMsg('Please enter your phone number or email.')
      return
    }
    setStatus('loading')
    setErrMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'quote', ...form, name: form.contact, phone: form.contact }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrMsg('Something went wrong. Please WhatsApp us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-[#1D9E75]/10 border-2 border-[#1D9E75] flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-[#0A1F14] font-medium text-[20px] mb-2">Quote request received</h3>
        <p className="text-[#888780] text-[15px]">We will send your quote within 4 business hours.</p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="q-company" label="Company name" type="text" placeholder="Your company" value={form.company} onChange={set('company')} light />
        <Field id="q-city"    label="City"         type="text" placeholder="e.g. Guntur"  value={form.city}    onChange={set('city')}    light />
      </div>
      <div>
        <label htmlFor="q-volume" className="block text-[13px] font-medium text-[#1A1A1A] mb-2">
          Estimated monthly scrap volume
        </label>
        <select
          id="q-volume"
          value={form.volume}
          onChange={set('volume')}
          className="w-full px-4 py-3 rounded-lg border border-[#D3D1C7] bg-white text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors"
        >
          <option value="">Select volume range</option>
          <option>Less than 500 kg/month</option>
          <option>500 kg – 2 tonnes/month</option>
          <option>2 – 10 tonnes/month</option>
          <option>10 – 50 tonnes/month</option>
          <option>More than 50 tonnes/month</option>
        </select>
      </div>
      <Field id="q-contact" label="Your phone or email" type="text" placeholder="+91 85006 26999 or you@company.com" value={form.contact} onChange={set('contact')} required light />

      {errMsg && <p className="text-red-500 text-[13px]">{errMsg}</p>}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center py-3.5 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Get a quote →'}
      </button>
    </div>
  )
}

/* ── REUSABLE FIELD ──────────────────────────────────────── */
function Field({
  id, label, type, placeholder, value, onChange, required, light,
}: {
  id: string; label: string; type: string; placeholder: string
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean; light?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-[#1A1A1A] mb-2">
        {label} {required && <span className="text-[#1D9E75]">*</span>}
      </label>
      <input
        id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border border-[#D3D1C7] text-[15px] text-[#1A1A1A] placeholder-[#888780] focus:outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/10 transition-colors ${light ? 'bg-white' : 'bg-white'}`}
      />
    </div>
  )
}

/* ── PAGE ────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-20 min-h-[40vh] flex items-center">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">Get in touch</p>
              <h1 className="h1 text-white max-w-xl">
                Let&apos;s talk about{' '}
                <span className="text-[#1D9E75]">your waste.</span>
              </h1>
            </div>
            <div className="flex items-center gap-3 bg-[#0F2B1A] border border-[#1D9E75]/20 rounded-xl px-5 py-4 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1D9E75] animate-pulse shrink-0" />
              <div>
                <p className="text-white font-medium text-[15px]">4-hour response</p>
                <p className="text-white/40 text-[12px] mt-0.5">On all demo requests, Mon–Sat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMS + OFFICE ────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Forms */}
            <div className="lg:col-span-2 space-y-12">

              {/* Demo form */}
              <div>
                <div className="mb-8">
                  <p className="eyebrow mb-3">Request a demo</p>
                  <h2 className="h2 text-[#0A1F14] mb-3">See the platform live.</h2>
                  <p className="text-[#888780] text-[16px] leading-[1.7]">
                    We will walk you through the dashboard, ESG reports, and
                    invoicing flow. 4-hour response guaranteed.
                  </p>
                </div>
                <div className="bg-white border border-[#D3D1C7] rounded-2xl p-8">
                  <DemoForm />
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-[#D3D1C7]" />
                <span className="text-[#888780] text-[13px] font-medium uppercase tracking-[0.08em]">Or</span>
                <div className="flex-1 h-px bg-[#D3D1C7]" />
              </div>

              {/* Quote form */}
              <div>
                <div className="mb-8">
                  <p className="eyebrow mb-3">Get a quote</p>
                  <h2 className="text-[#0A1F14] font-medium text-[24px] leading-[1.2] mb-3">
                    Want a pricing estimate first?
                  </h2>
                  <p className="text-[#888780] text-[16px] leading-[1.7]">
                    Share a few details and we will send you a tailored quote within 4 business hours.
                  </p>
                </div>
                <div className="bg-[#F5F0E8] border border-[#D3D1C7] rounded-2xl p-8">
                  <QuoteForm />
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              <div className="bg-[#0A1F14] rounded-2xl p-6">
                <p className="text-[#1D9E75] text-[11px] font-semibold uppercase tracking-[0.1em] mb-4">Our commitment</p>
                <div className="space-y-4">
                  {[
                    { icon: '⏱', text: 'Response within 4 business hours on all enquiries' },
                    { icon: '📋', text: 'Tailored proposal based on your business type and volume' },
                    { icon: '🔒', text: 'Your information is never shared with third parties' },
                  ].map((item) => (
                    <div key={item.text} className="flex gap-3">
                      <span className="text-[18px] shrink-0">{item.icon}</span>
                      <p className="text-white/65 text-[14px] leading-[1.65]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#D3D1C7] rounded-2xl p-6 space-y-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#888780]">Contact details</p>

                <ContactItem icon={<MapIcon />}>
                  <p className="text-[12px] text-[#888780] mb-1">Registered office</p>
                  <p className="text-[#2C2C2A] text-[14px] leading-[1.65] whitespace-pre-line">{OFFICE.address}</p>
                  <a href={OFFICE.maps} target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] text-[12px] hover:underline mt-1 inline-block">
                    View on Google Maps →
                  </a>
                </ContactItem>

                <ContactItem icon={<PhoneIcon />}>
                  <p className="text-[12px] text-[#888780] mb-1">Phone</p>
                  <a href={`tel:+918500626999`} className="text-[#2C2C2A] text-[14px] hover:text-[#1D9E75] transition-colors">{OFFICE.phone}</a>
                </ContactItem>

                <ContactItem icon={<EmailIcon />}>
                  <p className="text-[12px] text-[#888780] mb-1">Email</p>
                  <a href={`mailto:${OFFICE.email}`} className="text-[#2C2C2A] text-[14px] hover:text-[#1D9E75] transition-colors">{OFFICE.email}</a>
                </ContactItem>

                <ContactItem icon={<WAIcon />}>
                  <p className="text-[12px] text-[#888780] mb-1">WhatsApp Business</p>
                  <a href={OFFICE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#2C2C2A] text-[14px] hover:text-[#1D9E75] transition-colors">
                    Message us on WhatsApp
                  </a>
                </ContactItem>
              </div>

              <div className="border border-[#D3D1C7] rounded-2xl p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#888780] mb-4">Follow us</p>
                <div className="space-y-3">
                  {[
                    { label: 'LinkedIn',    href: 'https://linkedin.com/company/revivagreen',  sub: 'Company updates & insights'  },
                    { label: 'Instagram',   href: 'https://instagram.com/revivagreen.in',       sub: 'Operations & team stories'   },
                    { label: 'X (Twitter)', href: 'https://twitter.com/revivagreen',            sub: 'Regulatory news & updates'   },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                      <div>
                        <p className="text-[#2C2C2A] text-[14px] font-medium group-hover:text-[#1D9E75] transition-colors">{s.label}</p>
                        <p className="text-[#888780] text-[12px]">{s.sub}</p>
                      </div>
                      <svg className="w-4 h-4 text-[#D3D1C7] group-hover:text-[#1D9E75] transition-colors" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE ──────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] section-py border-t border-[#D3D1C7]">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-4">Coverage</p>
            <h2 className="h2 text-[#0A1F14]">Where we currently operate.</h2>
            <p className="mt-4 text-[#888780] text-[17px] leading-[1.7]">
              Active in 6 districts across Andhra Pradesh — expanding quarterly.
              Not in your district yet? Contact us — we may be able to help.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {DISTRICTS.map((d) => (
              <div
                key={d.name}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-[14px] font-medium ${
                  d.active ? 'bg-white border-[#1D9E75]/30 text-[#0A1F14]' : 'bg-transparent border-[#D3D1C7] text-[#888780]'
                }`}
              >
                <div className={`w-2 h-2 rounded-full shrink-0 ${d.active ? 'bg-[#1D9E75]' : 'bg-[#D3D1C7]'}`} />
                <span className="truncate">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ────────────────────────────────────── */}
      <section className="bg-white section-py border-t border-[#D3D1C7]">
        <div className="container">
          <div className="max-w-xl mb-10">
            <p className="eyebrow mb-4">Company details</p>
            <h2 className="h2 text-[#0A1F14]">Registered and verifiable.</h2>
            <p className="mt-4 text-[#888780] text-[17px] leading-[1.7]">
              Every number below is publicly verifiable. We publish them because
              our clients deserve complete transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPLIANCE.map((item) => (
              <div key={item.label} className="bg-[#F5F0E8] border border-[#D3D1C7] rounded-xl p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#888780] mb-2">{item.label}</p>
                <p className="font-mono text-[14px] text-[#0A1F14] font-medium break-all">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[#888780] text-[13px]">
            CIN verifiable at{' '}
            <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] hover:underline">mca.gov.in</a>
            . DPIIT recognition verifiable at{' '}
            <a href="https://www.startupindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] hover:underline">startupindia.gov.in</a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ── CONTACT ITEM ────────────────────────────────────────── */
function ContactItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#1D9E75]/08 flex items-center justify-center shrink-0">{icon}</div>
      <div>{children}</div>
    </div>
  )
}

/* ── ICONS ───────────────────────────────────────────────── */
function MapIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
}
function PhoneIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
}
function EmailIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
}
function WAIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M11.5 2C6.262 2 2 6.262 2 11.5c0 1.73.472 3.354 1.293 4.752L2 22l5.875-1.538A9.45 9.45 0 0 0 11.5 21C16.738 21 21 16.738 21 11.5S16.738 2 11.5 2zm0 17.25c-1.615 0-3.116-.468-4.376-1.268l-.314-.188-3.487.913.929-3.389-.205-.34A7.725 7.725 0 0 1 3.75 11.5C3.75 7.22 7.22 3.75 11.5 3.75S19.25 7.22 19.25 11.5 15.78 19.25 11.5 19.25z" /></svg>
}