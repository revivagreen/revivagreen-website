import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | RevivaGreen Ventures Private Limited',
  description:
    'Privacy policy for revivagreen.com. How we collect, use, and protect your data. IT Act 2000 and DPDP Act 2023 compliant.',
}

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-16">
        <div className="container">
          <p className="eyebrow mb-4">
            Effective date: May 2026 · Governing law: IT Act 2000 · DPDP Act 2023
          </p>
          <h1 className="h1 text-white max-w-2xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container">
          <div className="max-w-[720px] mx-auto prose-legal">

            <LegalSection number="1" title="Who we are">
              <p>RevivaGreen Ventures Private Limited (&ldquo;RevivaGreen&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a company incorporated under the Companies Act 2013, with CIN U38120AP2025PTC120216, having its registered office at 2-117, 1 Doctor Road, Ganapavaram, Mylavaram, NTR District, Andhra Pradesh — 521230.</p>
              <p>We operate the website www.revivagreen.com (&ldquo;Website&rdquo;) and provide B2B waste management, ESG reporting, and EPR compliance services to businesses in Andhra Pradesh.</p>
              <p>This Privacy Policy explains how we collect, use, store, and protect information about you when you use our Website or services.</p>
            </LegalSection>

            <LegalSection number="2" title="Information we collect">
              <p>We collect the following categories of information:</p>
              <LegalTable rows={[
                ['Contact information', 'Name, email address, phone number, company name, designation', 'When you submit a form, request a demo, or contact us'],
                ['Business information', 'Number of locations, city, scrap material types, estimated volume', 'When you complete a demo request or quote form'],
                ['Usage data', 'IP address, browser type, pages visited, time on site, referrer URL', 'Automatically via Google Analytics (with your consent)'],
                ['Communications', 'Content of messages, emails, and WhatsApp conversations', 'When you contact us directly'],
                ['Newsletter subscription', 'Email address and consent timestamp', 'When you subscribe to our Insights newsletter'],
              ]} headers={['Category', 'Data collected', 'When collected']} />
              <p>We do not collect sensitive personal data including financial account numbers, Aadhaar numbers, biometric data, health information, or data related to minors.</p>
            </LegalSection>

            <LegalSection number="3" title="How we use your information">
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To respond to demo requests and enquiries within 4 business hours</li>
                <li>To send you a tailored proposal based on your business requirements</li>
                <li>To onboard you as a client and deliver our waste management services</li>
                <li>To send our Insights newsletter (only with explicit consent)</li>
                <li>To improve our Website and services using anonymised analytics data</li>
                <li>To comply with our legal and regulatory obligations</li>
                <li>To protect our rights and prevent fraud or misuse</li>
              </ul>
              <p>We will never use your information to send unsolicited marketing communications beyond what you have consented to receive.</p>
            </LegalSection>

            <LegalSection number="4" title="Legal basis for processing">
              <p>We process your personal data on the following legal bases under applicable Indian law (IT Act 2000, DPDP Act 2023):</p>
              <ul>
                <li><strong>Consent:</strong> For newsletter subscriptions and non-essential cookies</li>
                <li><strong>Contract performance:</strong> For delivering services to clients</li>
                <li><strong>Legitimate interests:</strong> For responding to enquiries and improving our services</li>
                <li><strong>Legal obligation:</strong> For GST compliance, regulatory filings, and statutory requirements</li>
              </ul>
            </LegalSection>

            <LegalSection number="5" title="Data sharing and third parties">
              <p>We share your data only with the following categories of third parties, and only to the extent necessary:</p>
              <LegalTable rows={[
                ['Zoho Corporation',    'CRM, email campaigns, accounting', 'Lead management and client communication'],
                ['Google LLC',          'Analytics (GA4), Tag Manager',     'Website performance analysis (with consent)'],
                ['Vercel Inc.',         'Website hosting',                   'Infrastructure for www.revivagreen.com'],
                ['Meta Platforms Inc.', 'WhatsApp Business',                 'Client communication via WhatsApp'],
              ]} headers={['Provider', 'Service', 'Purpose']} />
              <p>We do not sell, rent, or trade your personal data to any third party for commercial purposes. We do not share your data with any party not listed above without your explicit consent, unless required by law.</p>
            </LegalSection>

            <LegalSection number="6" title="Cookies">
              <p>Our Website uses cookies. Please refer to our <a href="/cookies" className="text-[#1D9E75] hover:underline">Cookie Policy</a> for full details of what cookies we use, why we use them, and how to manage your preferences.</p>
              <p>We obtain your consent for non-essential cookies (analytics and marketing) via our cookie consent banner on your first visit.</p>
            </LegalSection>

            <LegalSection number="7" title="Data retention">
              <p>We retain your personal data for as long as necessary to fulfil the purposes for which it was collected:</p>
              <ul>
                <li><strong>Enquiry data (non-clients):</strong> 12 months from last contact</li>
                <li><strong>Client data:</strong> Duration of the client relationship plus 7 years (as required by Indian accounting and tax law)</li>
                <li><strong>Newsletter subscribers:</strong> Until you unsubscribe</li>
                <li><strong>Analytics data:</strong> 14 months (Google Analytics default)</li>
              </ul>
            </LegalSection>

            <LegalSection number="8" title="Your rights">
              <p>Under the Digital Personal Data Protection Act 2023 (DPDP Act), you have the following rights:</p>
              <ul>
                <li><strong>Right to access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to erasure:</strong> Request deletion of your personal data (subject to legal retention obligations)</li>
                <li><strong>Right to withdraw consent:</strong> Withdraw any consent you have previously given</li>
                <li><strong>Right to grievance redressal:</strong> Raise a complaint with our Grievance Officer</li>
              </ul>
              <p>To exercise any of these rights, contact our Grievance Officer using the details in Section 10.</p>
            </LegalSection>

            <LegalSection number="9" title="Data security">
              <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include:</p>
              <ul>
                <li>HTTPS encryption on all pages of www.revivagreen.com</li>
                <li>Access controls limiting data access to authorised personnel only</li>
                <li>Secure cloud hosting via Vercel with data centres in compliant jurisdictions</li>
                <li>Regular review of data access and security practices</li>
              </ul>
              <p>No method of transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.</p>
            </LegalSection>

            <LegalSection number="10" title="Grievance Officer">
              <p>In accordance with the Information Technology Act 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below:</p>
              <LegalTable rows={[
                ['Name',            'Tulasi Pamulapati'                         ],
                ['Designation',     'Chief Financial Officer & Grievance Officer'],
                ['Email',           'info@revivagreen.com'                       ],
                ['Phone',           '+91 85006 26999'                            ],
                ['Address',         '2-117, 1 Doctor Road, Ganapavaram, Mylavaram, NTR District, Andhra Pradesh — 521230'],
                ['Response time',   'Within 30 days of receipt of complaint'    ],
              ]} headers={['Field', 'Details']} />
            </LegalSection>

            <LegalSection number="11" title="Changes to this policy">
              <p>We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. We encourage you to review this policy periodically. Continued use of our Website after any changes constitutes your acceptance of the updated policy.</p>
            </LegalSection>

            <LegalSection number="12" title="Contact us">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
              <p><strong>RevivaGreen Ventures Private Limited</strong><br />
              2-117, 1 Doctor Road, Ganapavaram, Mylavaram<br />
              NTR District, Andhra Pradesh — 521230<br />
              Email: <a href="mailto:info@revivagreen.com" className="text-[#1D9E75] hover:underline">info@revivagreen.com</a><br />
              Phone: +91 85006 26999</p>
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
    <div className="mb-10 pb-10 border-b border-[#D3D1C7] last:border-0">
      <h2 className="text-[#0A1F14] font-medium text-[22px] mb-5">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-[#2C2C2A] text-[16px] leading-[1.75] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#1D9E75] [&_a:hover]:underline [&_strong]:font-medium [&_strong]:text-[#0A1F14]">
        {children}
      </div>
    </div>
  )
}

function LegalTable({ rows, headers }: { rows: string[][]; headers: string[] }) {
  return (
    <div className="overflow-x-auto my-5 rounded-xl border border-[#D3D1C7]">
      <table className="w-full text-[14px]">
        <thead>
          <tr className="bg-[#F5F0E8]">
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-semibold text-[#0A1F14] border-b border-[#D3D1C7]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]/40'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-[#2C2C2A] border-b border-[#D3D1C7] last:border-0 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}