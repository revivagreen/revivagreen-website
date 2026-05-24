import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── REDIRECTS — old site URLs ────────────────────────────
  // These pages existed on the old RevivaGreen website and are
  // still indexed by Google. Redirect them permanently (308) so
  // visitors land on the closest relevant new page instead of a 404.
  async redirects() {
    return [
      // Old homepage sections that were separate pages
      {
        source: '/households',
        destination: '/',
        permanent: true,
      },
      {
        source: '/businesses',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/recycling',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/what-we-collect',
        destination: '/services',
        permanent: true,
      },
      // Old service sub-pages (Learn more links)
      {
        source: '/services/recovery',
        destination: '/services#recovery',
        permanent: true,
      },
      {
        source: '/services/esg',
        destination: '/services#esg',
        permanent: true,
      },
      {
        source: '/services/epr',
        destination: '/services#epr',
        permanent: true,
      },
      // Old blog path
      {
        source: '/blog',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/insights/:slug',
        permanent: true,
      },
      // Old about paths
      {
        source: '/team',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      // Old contact paths
      {
        source: '/get-in-touch',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/book-a-demo',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

export default nextConfig