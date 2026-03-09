import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Westrose Interiors - Commercial Interior Systems Calgary',
  description: 'Premium commercial interior systems including acoustical ceilings, specialty ceilings, and complete interior solutions in Calgary, Alberta.',
  keywords: 'commercial interiors, acoustical ceilings, specialty ceilings, Calgary, interior systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  )
}
