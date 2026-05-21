import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://revivagreen.com'
  const lastModified = new Date()

  const routes = [
    { url: '/',         priority: 1.0,  changeFrequency: 'monthly'  as const },
    { url: '/services', priority: 0.9,  changeFrequency: 'monthly'  as const },
    { url: '/platform', priority: 0.9,  changeFrequency: 'monthly'  as const },
    { url: '/impact',   priority: 0.8,  changeFrequency: 'monthly'  as const },
    { url: '/about',    priority: 0.8,  changeFrequency: 'monthly'  as const },
    { url: '/clients',  priority: 0.7,  changeFrequency: 'monthly'  as const },
    { url: '/insights', priority: 0.7,  changeFrequency: 'weekly'   as const },
    { url: '/contact',  priority: 0.9,  changeFrequency: 'monthly'  as const },
    { url: '/careers',  priority: 0.5,  changeFrequency: 'monthly'  as const },
    { url: '/privacy',  priority: 0.3,  changeFrequency: 'yearly'   as const },
    { url: '/terms',    priority: 0.3,  changeFrequency: 'yearly'   as const },
    { url: '/cookies',  priority: 0.3,  changeFrequency: 'yearly'   as const },

    // Blog articles
    { url: '/insights/epr-compliance-guide-andhra-pradesh-2026', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/brsr-waste-data-explainer',                priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/circular-economy-andhra-pradesh',          priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/insights/gst-compliant-scrap-management',           priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/insights/informal-to-formal-waste-management',      priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/insights/e-waste-rules-2022-guide',                 priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}