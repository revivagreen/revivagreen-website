import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | RevivaGreen Ventures Private Limited',
  description:
    'Terms governing use of www.revivagreen.com and all RevivaGreen services. Governed by laws of India. Jurisdiction: Vijayawada courts.',
}

export default function TermsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#0A1F14] hero-pattern pt-40 pb-16">
        <div className="container">
          <p className="eyebrow mb-4">
            Effective date: May 2026 · Governing law: Laws of India · Jurisdiction: Vijayawada courts
          </p>
          <h1 className="h1 text-white max-w-2xl">Terms of Service</h1>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container">
          <div className="max-w-[720px] mx-auto">

            <div className="mb-8 p-5 bg-[#F5F0E8] border border-[#D3D1C7] rounded-xl">
              <p className="text-[#2C2C2A] text-[15px] leading-[1.7]">
                Please read these Terms of Service carefully before using www.revivagreen.com or engaging
                RevivaGreen Ventures Private Limited for any services. By accessing our Website or engaging
                our services, you agree to be bound by these Terms.
              </p>
            </div>

            <LegalSection number="1" title="Parties and definitions">
              <p>&ldquo;RevivaGreen&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo; refers to RevivaGreen Ventures Private Limited (CIN: U38120AP2025PTC120216), registered at 2-117, 1 Doctor Road, Ganapavaram, Mylavaram, NTR District, Andhra Pradesh — 521230.</p>
              <p>&ldquo;Client&rdquo; or &ldquo;you&rdquo; refers to any individual or legal entity that accesses our Website or engages our services.</p>
              <p>&ldquo;Services&rdquo; refers to GST-compliant resource recovery, ESG data reporting, EPR compliance management, and the RevivaGreen digital platform.</p>
              <p>&ldquo;Website&rdquo; refers to www.revivagreen.com and all associated subdomains and pages.</p>
            </LegalSection>

            <LegalSection number="2" title="Use of the website">
              <p>By accessing our Website, you agree that you:</p>
              <ul>
                <li>Are at least 18 years of age or accessing on behalf of a legal entity</li>
                <li>Will not use the Website for any unlawful purpose or in any manner that could damage, disable, or impair the Website</li>
                <li>Will not attempt to gain unauthorised access to any part of the Website or its related systems</li>
                <li>Will not reproduce, duplicate, copy, sell, or exploit any portion of the Website without express written permission from RevivaGreen</li>
              </ul>
            </LegalSection>

            <LegalSection number="3" title="Services and client agreements">
              <p>Use of RevivaGreen services is governed by a separate Service Agreement entered into between RevivaGreen and each client. These Terms of Service govern use of the Website only.</p>
              <p>Submission of a demo request or quote form on the Website does not constitute a binding agreement for services. Services commence only upon execution of a written Service Agreement signed by both parties.</p>
              <p>Pricing displayed on the Website (including Platform page pricing tiers) is indicative only and subject to change. Final pricing is confirmed in the Service Agreement.</p>
            </LegalSection>

            <LegalSection number="4" title="Intellectual property">
              <p>All content on this Website — including but not limited to text, graphics, logos, images, data compilations, and software — is the property of RevivaGreen Ventures Private Limited and is protected by applicable intellectual property laws.</p>
              <p>You may not reproduce, distribute, modify, or create derivative works from any content on this Website without our prior written consent.</p>
              <p>The RevivaGreen name, logo, and tagline are trademarks of RevivaGreen Ventures Private Limited. Unauthorised use is prohibited.</p>
            </LegalSection>

            <LegalSection number="5" title="Accuracy of information">
              <p>We endeavour to keep all information on this Website accurate and up to date. However:</p>
              <ul>
                <li>Information on this Website is provided for general informational purposes only and does not constitute professional advice</li>
                <li>Pricing information is indicative and subject to change without notice</li>
                <li>Service availability may vary by location and is subject to operational capacity</li>
              </ul>
              <p><strong>5.2 — Accuracy of impact statistics:</strong> Impact statistics shown on our website are updated manually on a monthly basis and represent our best estimates based on operational data from our Zoho Books system. These figures are not independently audited unless specifically noted.</p>
              <p>We make reasonable efforts to ensure accuracy but do not warrant that the Website is error-free or that errors will be corrected.</p>
            </LegalSection>

            <LegalSection number="6" title="Limitation of liability">
              <p>To the fullest extent permitted by applicable law, RevivaGreen shall not be liable for:</p>
              <ul>
                <li>Any indirect, incidental, special, or consequential damages arising from use of this Website</li>
                <li>Any loss of data, profit, or business opportunity arising from reliance on Website content</li>
                <li>Any damages arising from third-party websites linked from our Website</li>
              </ul>
              <p>Our total liability to you in connection with your use of the Website shall not exceed ₹10,000 (Indian Rupees Ten Thousand).</p>
            </LegalSection>

            <LegalSection number="7" title="Third-party links">
              <p>Our Website may contain links to third-party websites (including government portals, partner sites, and social media platforms). These links are provided for convenience only. RevivaGreen does not endorse and is not responsible for the content, privacy practices, or availability of any third-party website.</p>
            </LegalSection>

            <LegalSection number="8" title="Privacy">
              <p>Your use of this Website is also governed by our <a href="/privacy" className="text-[#1D9E75] hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>
            </LegalSection>

            <LegalSection number="9" title="Modifications to terms">
              <p>RevivaGreen reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website with an updated effective date. Your continued use of the Website after any modifications constitutes your acceptance of the updated Terms.</p>
            </LegalSection>

            <LegalSection number="10" title="Governing law and jurisdiction">
              <p>These Terms are governed by the laws of India. Any disputes arising from or in connection with these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts in Vijayawada, Andhra Pradesh, India.</p>
            </LegalSection>

            <LegalSection number="11" title="Contact">
              <p>For any queries regarding these Terms, please contact:</p>
              <p>
                <strong>RevivaGreen Ventures Private Limited</strong><br />
                2-117, 1 Doctor Road, Ganapavaram, Mylavaram<br />
                NTR District, Andhra Pradesh — 521230<br />
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
    <div className="mb-10 pb-10 border-b border-[#D3D1C7] last:border-0">
      <h2 className="text-[#0A1F14] font-medium text-[22px] mb-5">{number}. {title}</h2>
      <div className="space-y-4 text-[#2C2C2A] text-[16px] leading-[1.75] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#1D9E75] [&_a:hover]:underline [&_strong]:font-medium [&_strong]:text-[#0A1F14]">
        {children}
      </div>
    </div>
  )
}