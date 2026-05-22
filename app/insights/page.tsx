import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights — RevivaGreen | Regulatory Intelligence for AP Businesses',
  description:
    'EPR updates, BRSR guides, circular economy news, and regulatory intelligence for businesses in Andhra Pradesh. Stay ahead of compliance with RevivaGreen Insights.',
}

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
    cardBg: '#0A1F14',
    cardAccent: '#1D9E75',
    cardLabel: 'EPR Compliance',
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
    cardBg: '#0F2B1A',
    cardAccent: '#5DCAA5',
    cardLabel: 'BRSR Reporting',
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
    cardBg: '#1A3C1A',
    cardAccent: '#1D9E75',
    cardLabel: 'Circular Economy',
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
    cardBg: '#0A1F14',
    cardAccent: '#C8A84B',
    cardLabel: 'GST Compliance',
  },
  {
    slug: 'informal-to-formal-waste-management',
    category: 'Company News',
    title: 'From Informal to Formal: How AP Businesses Made the Switch',
    excerpt:
      'We surveyed businesses that switched from informal scrap dealers to RevivaGreen. The results on compliance exposure, ESG data availability, and CFO satisfaction were unambiguous.',
    readTime: '4 min read',
    date: 'April 2, 2026',
    author: 'RevivaGreen Strategy Team',
    featured: false,
    cardBg: '#0F2B1A',
    cardAccent: '#1D9E75',
    cardLabel: 'Company News',
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
    cardBg: '#0A1F14',
    cardAccent: '#5DCAA5',
    cardLabel: 'E-Waste Rules',
  },
]

const CATEGORIES = ['All', 'EPR', 'BRSR', 'Circular Economy', 'Company News']

const CATEGORY_COLORS: Record<string, string> = {
  'EPR':              'bg-[#E1F5EE] text-[#085041]',
  'BRSR':             'bg-[#EAF0FF] text-[#1A3C8C]',
  'Circular Economy': 'bg-[#FFF8E8] text-[#7A5500]',
  'Company News':     'bg-[#F5F0E8] text-[#5A5850]',
}

// ── STYLED ARTICLE CARD IMAGE ─────────────────────────────────
function ArticleCardImage({
  bg, accent, label, category,
}: {
  bg: string; accent: string; label: string; category: string
}) {
  return (
    <div
      className="w-full aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: bg }}
      aria-hidden="true"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${accent} 0%, transparent 60%), radial-gradient(circle at 80% 20%, ${accent} 0%, transparent 60%)`,
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Category pill */}
      <div
        className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-4"
        style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
      >
        {category}
      </div>
      {/* Label */}
      <p
        className="relative z-10 text-[15px] font-medium text-center px-6 max-w-[280px] leading-[1.4]"
        style={{ color: `${accent}CC` }}
      >
        {label}
      </p>
      {/* RevivaGreen wordmark */}
      <p
        className="absolute bottom-4 right-4 text-[10px] font-semibold uppercase tracking-[0.1em] opacity-30"
        style={{ color: accent }}
      >
        RevivaGreen Insights
      </p>
    </div>
  )
}

export default function InsightsPage() {
  const featured    = ARTICLES.find((a) => a.featured)!
  const nonFeatured = ARTICLES.filter((a) => !a.featured)

  return (
    <main>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────── */}
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

      {/* ── FEATURED ARTICLE ──────────────────────────────── */}
      <section className="bg-white section-py border-b border-[#D3D1C7]">
        <div className="container">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#888780] mb-8">
            Featured article
          </p>
          <Link href={`/insights/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Featured card image */}
              <div className="rounded-2xl overflow-hidden">
                <ArticleCardImage
                  bg={featured.cardBg}
                  accent={featured.cardAccent}
                  label={featured.cardLabel}
                  category={featured.category}
                />
              </div>
              {/* Content */}
              <div>
                <span className={`inline-block text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-5 ${CATEGORY_COLORS[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 className="text-[#0A1F14] font-medium text-[28px] leading-[1.25] mb-4 group-hover:text-[#1D9E75] transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-[#888780] text-[16px] leading-[1.7] mb-6">{featured.excerpt}</p>
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

      {/* ── ARTICLE GRID ──────────────────────────────────── */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonFeatured.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="group block">
                <article className="h-full flex flex-col border border-[#D3D1C7] rounded-2xl overflow-hidden hover:border-[#1D9E75]/50 hover:-translate-y-1 transition-all duration-250">
                  <ArticleCardImage
                    bg={article.cardBg}
                    accent={article.cardAccent}
                    label={article.cardLabel}
                    category={article.category}
                  />
                  <div className="flex flex-col flex-1 p-6">
                    <span className={`self-start text-[11px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full mb-4 ${CATEGORY_COLORS[article.category] ?? 'bg-[#F5F0E8] text-[#5A5850]'}`}>
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
                      <svg className="w-4 h-4 text-[#1D9E75] group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────── */}
      <section className="bg-[#0A1F14] section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-4">Stay informed</p>
            <h2 className="h2 text-white mb-4">Get regulatory updates in your inbox.</h2>
            <p className="text-white/55 text-[17px] leading-[1.7] mb-10">
              EPR rule changes, BRSR filing deadlines, and circular economy
              policy updates — delivered before they affect your business.
            </p>
            <div className="bg-[#0F2B1A] border border-white/[0.08] rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  placeholder="your@company.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0A1F14] border border-white/[0.12] text-white placeholder-white/30 text-[15px] focus:outline-none focus:border-[#1D9E75] transition-colors"
                  aria-label="Work email address"
                />
                <button type="button" className="btn-primary shrink-0 px-6 py-3 text-[15px]">
                  Subscribe
                </button>
              </div>
              <label className="flex items-start gap-3 text-left cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 accent-[#1D9E75] shrink-0" />
                <span className="text-white/40 text-[12px] leading-[1.6]">
                  I agree to receive regulatory updates from RevivaGreen. Unsubscribe anytime.
                  See our{' '}
                  <Link href="/privacy" className="text-[#1D9E75] hover:underline">privacy policy</Link>.
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}