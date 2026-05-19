import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RevivaGreen | GST-Compliant Waste Management & ESG Platform — Andhra Pradesh',
  description:
    "India's first B2B compliance-grade waste management platform. 100% GST-documented scrap recovery, BRSR-aligned ESG data, and multi-branch dashboard for businesses in Andhra Pradesh.",
  openGraph: {
    title: 'RevivaGreen | GST-Compliant Waste Management & ESG Platform',
    description:
      "India's first B2B compliance-grade waste management platform for Andhra Pradesh.",
    url: 'https://revivagreen.com',
    siteName: 'RevivaGreen',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}