import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights — RevivaGreen | Regulatory Intelligence for AP Businesses',
  description:
    'EPR updates, BRSR guides, circular economy news, and regulatory intelligence for businesses in Andhra Pradesh. Stay ahead of compliance with RevivaGreen Insights.',
}

/* ── ARTICLES DATA ───────────────────────────────────────────
   Add new articles here as you publish them.
   Minimum 2 articles required at launch (per brief).
   Each article needs a matching page at /insights/[slug]       */
const ARTICLES = [
  {
    slug: 'epr-compliance-guide-andhra-pradesh-2026',
    category: 'EPR',
    title: 'The Complete EPR Compliance Guide for Andhra Pradesh Businesses in 2026',
    excerpt:
      'Extended Producer Responsibility regulations are tightening across plastic, e-waste, and battery categories. Here is everything AP businesses need to know to stay compliant this year.',
    readTime: '8 min read',
    date: 'May 15, 2026',
    author: 'RevivaGreen Strategy Team',
    featured: true,
  },
  {
    slug: 'brsr-waste-data-explainer',
    category: 'BRSR',
    title: 'How to Complete BRSR Principle 6 — A Practical Guide for Waste Data',
    excerpt:
      'SEBI\'s Business Responsibility and Sustainability Report requires structured waste data under Principle 6. This guide explains exactly what data you need, where to get it, and how to report it.',
    readTime: '6 min read',
    date: 'May 8, 2026',
    author: 'RevivaGreen Strategy Team',
    featured: false,
  },
  {
    slug: 'circular-economy-andhra-pradesh',
    category: 'Circular Economy',
    title: 'Why Andhra Pradesh is Positioned to Lead India\'s Circular Economy Transition',
    excerpt:
      'The Krishna–Guntur–Eluru industrial corridor generates more recyclable material per square kilometre than almost anywhere else in South India. Here is the opportunity that organised businesses are missing.',
    readTime: '5 min read',
    date: 'April 28, 2026',
    author: 'Surendra Reddy Pamulapati',
    featured: false,
  },
  {
    slug: 'gst-compliant-scrap-management',
    category: 'EPR',
    title: 'GST on Scrap Sales: What Every Finance Manager in AP Needs to Know',
    excerpt:
      'Scrap sales are taxable under GST — and most businesses in AP are getting it wrong. Here is a plain-language breakdown of GST applicability, ITC claims, and what your CA needs from your waste vendor.',
    readTime: '7 min read',
    date: 'April 15, 2026',
    author: 'RevivaGreen Strategy Team',
    featured: false,
  },
  {
    slug: 'informal-to-formal-waste-management',
    category: 'Company News',
    title: 'From Informal to Formal: How 100 AP Businesses Made the Switch',
    excerpt:
      'We surveyed 100 businesses that switched from informal scrap dealers to RevivaGreen. The results on compliance exposure, ESG data availability, and CFO satisfaction were unambiguous.',
    readTime: '4 min read',
    date: 'April 2, 2026',
    author: 'RevivaGreen Strategy Team',
    featured: false,
  },
  {
    slug: 'e-waste-rules-2022-guide',
    category: 'EPR',
    title: 'E-Waste Rules 2022: What Changed and What Your Business Must Do Now',
    excerpt:
      'The E-Waste (Management) Rules 2022 significantly expanded producer responsibility. Here is what the rules mean for AP businesses and how to ensure you are on the right side of compliance.',
    readTime: '6 min read',
    date: 'March 20, 2026',
    author: 'RevivaGreen Strategy Team',
    featured: false,
  },
]

const CATEGORIES = ['All', 'EPR', 'BRSR', 'Circular Economy', 'Company News']

const CATEGORY_COLORS: Record<string, string> = {
  'EPR':              'bg-[#E1F5EE] text-[#085041]',
  'BRSR':             'bg-[#EAF0FF] text-[#1A3C8C]',
  'Circular Economy': 'bg-[#FFF8E8] text-[#7A5500]',
  'Company News':     'bg-[#F5F0E8] text-[#5A5850]',
}

/* ── PAGE ────────────────────────────────────────────────── */
export default function InsightsPage() {
  const featured    = ARTICLES.find((a) => a.featured)!
  const nonFeatured = ARTICLES.filter((a) => !a.featured)

  return (
    <main>
      <Navbar />

      {/* ── S1: HERO ──────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] pt-40 pb-16 border-b border-[#D3D1C7]">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Insights</p>
            <h1 className="h1 text-[#0A1F14]">
              Regulatory intelligence{' '}
              <span className="text-[#1D9E75]">for AP businesses.</span>
            </h1>
            <p className="mt-5 text-[#888780] text-[18px] leading-[1.7]">
              EPR updates, BRSR guides, circular economy news, and practical
              compliance advice — written specifically for businesses operating
              in Andhra Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* ── S2: FEATURED ARTICLE ──────────────────────────── */}
      <section className="bg-white section-py border-b border-[#D3D1C7]">
        <div className="container">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#888780] mb-8">
            Featured article
          </p>
          <Link
            href={`/insights/${featured.slug}`}
            className="group block"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Article image placeholder */}
              <div className="bg-[#0A1F14] rounded-2xl overflow-hidden aspect-[16/9] flex items-center justify-center relative">
                {/* Replace with real article image:
                <img src={`/images/insights/${featured.slug}.jpg`} alt={featured.title} className="w-full h-full object-cover" /> */}
                <div className="text-center p-8">
                  <span
                    className={`inline-block text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-4 ${CATEGORY_COLORS[featured.category]}`}
                  >
                    {featured.category}
                  </span>
                  <p className="text-white/30 text-[13px]">Article cover image</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F14]/60 to-transparent" />
              </div>

              {/* Article content */}
              <div>
                <span
                  className={`inline-block text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-5 ${CATEGORY_COLORS[featured.category]}`}
                >
                  {featured.category}
                </span>
                <h2 className="text-[#0A1F14] font-medium text-[28px] leading-[1.25] mb-4 group-hover:text-[#1D9E75] transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-[#888780] text-[16px] leading-[1.7] mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[13px] text-[#888780]">
                  <span>{featured.author}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D3D1C7]" />
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D3D1C7]" />
                  <span>{featured.readTime}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-[#1D9E75] text-[14px] font-medium group-hover:gap-3 transition-all duration-200">
                  Read article
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

            </div>
          </Link>
        </div>
      </section>

      {/* ── S3: CATEGORY FILTER + GRID ────────────────────── */}
      <section className="bg-white section-py">
        <div className="container">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 border ${
                  cat === 'All'
                    ? 'bg-[#0A1F14] text-white border-[#0A1F14]'
                    : 'bg-white text-[#888780] border-[#D3D1C7] hover:border-[#1D9E75] hover:text-[#1D9E75]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonFeatured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-14 flex items-center justify-center gap-2">
            <button className="w-9 h-9 rounded-lg bg-[#0A1F14] text-white text-[13px] font-medium flex items-center justify-center">
              1
            </button>
            <button className="w-9 h-9 rounded-lg border border-[#D3D1C7] text-[#888780] text-[13px] font-medium flex items-center justify-center hover:border-[#1D9E75] hover:text-[#1D9E75] transition-colors">
              2
            </button>
            <button className="w-9 h-9 rounded-lg border border-[#D3D1C7] text-[#888780] text-[13px] font-medium flex items-center justify-center hover:border-[#1D9E75] hover:text-[#1D9E75] transition-colors">
              →
            </button>
          </div>

        </div>
      </section>

      {/* ── S4: NEWSLETTER SIGNUP ─────────────────────────── */}
      <section className="bg-[#0A1F14] section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-4">Stay informed</p>
            <h2 className="h2 text-white mb-4">
              Get regulatory updates in your inbox.
            </h2>
            <p className="text-white/55 text-[17px] leading-[1.7] mb-10">
              EPR rule changes, BRSR filing deadlines, and circular economy
              policy updates — delivered to your inbox before they affect
              your business.
            </p>

            {/* Newsletter form */}
            <div className="bg-[#0F2B1A] border border-white/[0.08] rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  placeholder="your@company.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0A1F14] border border-white/[0.12] text-white placeholder-white/30 text-[15px] focus:outline-none focus:border-[#1D9E75] transition-colors"
                  aria-label="Work email address"
                />
                <button
                  type="button"
                  className="btn-primary shrink-0 px-6 py-3 text-[15px]"
                >
                  Subscribe
                </button>
              </div>

              {/* Consent checkbox — required under IT Act 2000 */}
              <label className="flex items-start gap-3 text-left cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-transparent accent-[#1D9E75] shrink-0"
                  aria-label="Consent to receive regulatory updates"
                />
                <span className="text-white/40 text-[12px] leading-[1.6]">
                  I agree to receive regulatory updates and insights from
                  RevivaGreen. I can unsubscribe at any time. RevivaGreen
                  will never share my information with third parties.
                  See our{' '}
                  <Link href="/privacy" className="text-[#1D9E75] hover:underline">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            <p className="mt-4 text-white/25 text-[12px]">
              Sent fortnightly. No spam. Unsubscribe anytime.
              Connects to Zoho Campaigns — double opt-in confirmation sent.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ── ARTICLE CARD COMPONENT ──────────────────────────────── */
function ArticleCard({ article }: { article: (typeof ARTICLES)[number] }) {
  const colorClass = CATEGORY_COLORS[article.category] ?? 'bg-[#F5F0E8] text-[#5A5850]'

  return (
    <Link href={`/insights/${article.slug}`} className="group block">
      <article className="h-full flex flex-col border border-[#D3D1C7] rounded-2xl overflow-hidden hover:border-[#1D9E75]/50 hover:-translate-y-1 transition-all duration-250">

        {/* Article image placeholder */}
        <div className="bg-[#F5F0E8] aspect-[16/9] flex items-center justify-center">
          {/* Replace with:
          <img src={`/images/insights/${article.slug}.jpg`} alt={article.title} className="w-full h-full object-cover" /> */}
          <span className="text-[#D3D1C7] text-[12px]">Article image</span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <span className={`self-start text-[11px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full mb-4 ${colorClass}`}>
            {article.category}
          </span>

          <h3 className="text-[#0A1F14] font-medium text-[18px] leading-[1.35] mb-3 group-hover:text-[#1D9E75] transition-colors duration-200 flex-1">
            {article.title}
          </h3>

          <p className="text-[#888780] text-[14px] leading-[1.65] mb-5 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#D3D1C7]">
            <div className="flex items-center gap-2 text-[12px] text-[#888780]">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-[#D3D1C7]" />
              <span>{article.readTime}</span>
            </div>
            <svg
              className="w-4 h-4 text-[#1D9E75] group-hover:translate-x-1 transition-transform duration-200"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </article>
    </Link>
  )
}