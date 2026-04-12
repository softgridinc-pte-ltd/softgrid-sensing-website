import { Outfit, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollAnimator } from '@/components/ui/ScrollAnimator'
import { PasswordGate } from '@/components/ui/PasswordGate'
import './globals.css'

import type { Metadata } from 'next'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://softgridsensing.com'),
  title: 'Softgrid Sensing | AI-Driven Facility Operating System',
  description:
    'Softgrid provides AI-driven facility operating systems for predictive maintenance, lift monitoring, and smart building management. Trusted by HDB with 10,000+ assets monitored in Singapore.',
  openGraph: {
    title: 'Softgrid Sensing | AI-Driven Facility Operating System',
    description:
      'One intelligent platform for predictive maintenance, real-time control, and operational excellence. From lift monitoring to building management.',
    type: 'website',
    locale: 'en_SG',
    siteName: 'Softgrid Sensing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Softgrid Sensing - AI-Driven Facility Operating System' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <PasswordGate>
          <ScrollAnimator />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </PasswordGate>
      </body>
    </html>
  )
}
