import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ESG Impact Data | RevivaGreen Circular Economy Platform — Andhra Pradesh',
  description:
    "Live ESG impact data from RevivaGreen's verified waste recovery operations. 400+ tonnes recovered, CO₂ diversion figures, BRSR-aligned reporting, and material breakdown across Andhra Pradesh.",
}

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}