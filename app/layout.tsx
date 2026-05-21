import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RevivaGreen | GST-Compliant Waste Management & ESG Platform — Andhra Pradesh',
  description:
    "India's first B2B compliance-grade waste management platform. 100% GST-documented scrap recovery, BRSR-aligned ESG data, and multi-branch dashboard for businesses in Andhra Pradesh.",
  metadataBase: new URL('https://revivagreen.com'),
  openGraph: {
    title: 'RevivaGreen | GST-Compliant Waste Management & ESG Platform',
    description:
      "India's first B2B compliance-grade waste management platform for Andhra Pradesh.",
    url: 'https://revivagreen.com',
    siteName: 'RevivaGreen',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RevivaGreen — Circular Economy Compliance Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevivaGreen | GST-Compliant Waste Management & ESG Platform',
    description:
      "India's first B2B compliance-grade waste management platform for Andhra Pradesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}