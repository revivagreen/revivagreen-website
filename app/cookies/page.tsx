import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | RevivaGreen Ventures Private Limited',
  description:
    'What cookies we use on revivagreen.com, why we use them, and how to manage your preferences.',
}

export default function CookiesPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-16">
        <div className="container">
          <p className="eyebrow mb-4">
            Effective date: May 2026 · Applies to: www.revivagreen.com
          </p>
          <h1 className="h1 text-white max-w-2xl">Cookie Policy</h1>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container">
          <div className="max-w-[720px] mx-auto space-y-10">

            <LegalSection number="1" title="What are cookies?">
              <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to website owners.</p>
              <p>This Cookie Policy explains what cookies we use on www.revivagreen.com, why we use them, and how you can manage your preferences.</p>
            </LegalSection>

            <LegalSection number="2" title="Cookies we use">
              <p>We use the following categories of cookies:</p>

              <CookieTable
                category="Strictly Necessary"
                description="These cookies are essential for the Website to function. They cannot be disabled."
                cookies={[
                  { name: '__session',         purpose: 'Session management',           duration: 'Session',  provider: 'RevivaGreen' },
                  { name: 'cookieyes-consent',  purpose: 'Stores your cookie consent',  duration: '1 year',   provider: 'CookieYes'   },
                ]}
              />

              <CookieTable
                category="Analytics"
                description="These cookies help us understand how visitors use our Website. All data is anonymised. These cookies are only set with your consent."
                cookies={[
                  { name: '_ga',        purpose: 'Distinguishes users (Google Analytics)',     duration: '2 years',  provider: 'Google' },
                  { name: '_ga_*',      purpose: 'Maintains session state (Google Analytics)', duration: '2 years',  provider: 'Google' },
                  { name: '_hjSession*', purpose: 'Session recording (Hotjar)',                duration: '30 mins',  provider: 'Hotjar' },
                  { name: '_hjSessionUser*', purpose: 'Persists Hotjar user ID',              duration: '1 year',   provider: 'Hotjar' },
                ]}
              />

              <CookieTable
                category="Marketing"
                description="These cookies enable retargeting on platforms like LinkedIn. Only set with your consent."
                cookies={[
                  { name: 'li_sugr',    purpose: 'LinkedIn browser identification',       duration: '90 days',  provider: 'LinkedIn' },
                  { name: 'UserMatchHistory', purpose: 'LinkedIn ad matching',            duration: '30 days',  provider: 'LinkedIn' },
                  { name: 'bcookie',    purpose: 'LinkedIn browser ID',                   duration: '2 years',  provider: 'LinkedIn' },
                ]}
              />

              <CookieTable
                category="Functional"
                description="These cookies remember your preferences to improve your experience."
                cookies={[
                  { name: 'wa_*', purpose: 'WhatsApp widget preferences', duration: 'Session', provider: 'Meta/WhatsApp' },
                ]}
              />
            </LegalSection>

            <LegalSection number="3" title="Managing your cookie preferences">
              <p>You can manage your cookie preferences at any time using our cookie consent banner (which appears on your first visit). You can also manage cookies through your browser settings:</p>
              <ul>
                <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                <li><strong>Apple Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Samsung Internet:</strong> Settings → Privacy → Smart Anti-Tracking</li>
              </ul>
              <p>Please note that disabling certain cookies may affect the functionality of our Website.</p>
            </LegalSection>

            <LegalSection number="4" title="Third-party opt-out links">
              <p>You can opt out of specific third-party cookies using the following links:</p>
              <ul>
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] hover:underline">tools.google.com/dlpage/gaoptout</a></li>
                <li><strong>Hotjar:</strong> <a href="https://www.hotjar.com/legal/compliance/opt-out" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] hover:underline">hotjar.com/legal/compliance/opt-out</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/psettings/guest-controls" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] hover:underline">linkedin.com/psettings/guest-controls</a></li>
              </ul>
            </LegalSection>

            <LegalSection number="5" title="Changes to this policy">
              <p>We may update this Cookie Policy from time to time. When we do, we will update the effective date at the top of this page. We encourage you to review this policy periodically.</p>
            </LegalSection>

            <LegalSection number="6" title="Contact">
              <p>If you have any questions about our use of cookies, please contact:</p>
              <p>
                <strong>RevivaGreen Ventures Private Limited</strong><br />
                Email: <a href="mailto:info@revivagreen.com" className="text-[#1D9E75] hover:underline">info@revivagreen.com</a><br />
                Phone: +91 85006 26999
              </p>
            </LegalSection>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function LegalSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="pb-10 border-b border-[#D3D1C7] last:border-0">
      <h2 className="text-[#0A1F14] font-medium text-[22px] mb-5">{number}. {title}</h2>
      <div className="space-y-4 text-[#2C2C2A] text-[16px] leading-[1.75] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#1D9E75] [&_a:hover]:underline [&_strong]:font-medium [&_strong]:text-[#0A1F14]">
        {children}
      </div>
    </div>
  )
}

function CookieTable({ category, description, cookies }: {
  category: string
  description: string
  cookies: { name: string; purpose: string; duration: string; provider: string }[]
}) {
  return (
    <div className="my-6">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-[#0A1F14] font-medium text-[16px]">{category}</h3>
        <span className={`text-[11px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full ${
          category === 'Strictly Necessary' ? 'bg-[#E1F5EE] text-[#085041]' :
          category === 'Analytics'          ? 'bg-[#EAF0FF] text-[#1A3C8C]' :
          category === 'Marketing'          ? 'bg-[#FFF8E8] text-[#7A5500]' :
                                             'bg-[#F5F0E8] text-[#5A5850]'
        }`}>
          {category === 'Strictly Necessary' ? 'Always active' : 'Consent required'}
        </span>
      </div>
      <p className="text-[#888780] text-[14px] mb-3">{description}</p>
      <div className="overflow-x-auto rounded-xl border border-[#D3D1C7]">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="bg-[#F5F0E8]">
              {['Cookie name', 'Purpose', 'Duration', 'Provider'].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-[#0A1F14] border-b border-[#D3D1C7]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cookies.map((c, i) => (
              <tr key={c.name} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]/40'}>
                <td className="px-4 py-3 font-mono text-[#1D9E75] border-b border-[#D3D1C7]">{c.name}</td>
                <td className="px-4 py-3 text-[#2C2C2A] border-b border-[#D3D1C7]">{c.purpose}</td>
                <td className="px-4 py-3 text-[#888780] border-b border-[#D3D1C7] whitespace-nowrap">{c.duration}</td>
                <td className="px-4 py-3 text-[#888780] border-b border-[#D3D1C7]">{c.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}