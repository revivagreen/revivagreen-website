'use client'

import { useState } from 'react'
import Link from 'next/link'

const CATEGORY_COLORS: Record<string, string> = {
  'EPR':              'bg-[#E1F5EE] text-[#085041]',
  'BRSR':             'bg-[#EAF0FF] text-[#1A3C8C]',
  'Circular Economy': 'bg-[#FFF8E8] text-[#7A5500]',
  'Company News':     'bg-[#F5F0E8] text-[#5A5850]',
}

const CATEGORIES = ['All', 'EPR', 'BRSR', 'Circular Economy', 'Company News']

type Article = {
  slug: string
  category: string
  title: string
  excerpt: string
  readTime: string
  date: string
  author: string
  cardBg: string
  cardAccent: string
  cardLabel: string
}

function ArticleCardImage({ bg, accent, label, category }: {
  bg: string; accent: string; label: string; category: string
}) {
  return (
    <div
      className="w-full aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: bg }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 20% 80%, ${accent} 0%, transparent 60%), radial-gradient(circle at 80% 20%, ${accent} 0%, transparent 60%)` }} />
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-4" style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}>
        {category}
      </div>
      <p className="relative z-10 text-[15px] font-medium text-center px-6 max-w-[280px] leading-[1.4]" style={{ color: `${accent}CC` }}>
        {label}
      </p>
      <p className="absolute bottom-4 right-4 text-[10px] font-semibold uppercase tracking-[0.1em] opacity-30" style={{ color: accent }}>
        RevivaGreen Insights
      </p>
    </div>
  )
}

export default function InsightsGrid({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <section className="bg-white section-py">
      <div className="container">

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0A1F14] text-white border-[#0A1F14]'
                  : 'bg-white text-[#888780] border-[#D3D1C7] hover:border-[#1D9E75] hover:text-[#1D9E75]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#888780] text-[16px]">No articles in this category yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
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
        )}

      </div>
    </section>
  )
}