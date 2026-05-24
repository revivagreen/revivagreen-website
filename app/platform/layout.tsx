import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform — RevivaGreen | Waste Management Dashboard & ESG Reporting',
  description:
    'One screen for your entire waste operation. Real-time multi-branch dashboard, GST invoice management, ESG reporting, and mobile access for GMs across Andhra Pradesh.',
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}