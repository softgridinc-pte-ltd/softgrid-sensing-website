import { Outfit, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollAnimator } from '@/components/ui/ScrollAnimator'
import { JsonLd } from '@/components/seo/JsonLd'
// import { PasswordGate } from '@/components/ui/PasswordGate'
import './globals.css'

import type { Metadata } from 'next'

const SITE_URL = 'https://softgridsensing.com'

const ORG_ID = `${SITE_URL}/#organization`

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Softgrid Sensing',
  alternateName: ['Softgrid', 'Softgrid Sensing Pte. Ltd.'],
  legalName: 'Softgrid Sensing Pte. Ltd.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    'AI-driven facility operating systems for predictive maintenance, lift monitoring, and smart building management.',
  slogan: 'AI-Driven Facility Operating System',
  foundingDate: '2017',
  foundingLocation: {
    '@type': 'Place',
    name: 'Singapore',
  },
  areaServed: ['Singapore', 'Asia'],
  knowsAbout: [
    'AI-Driven Facility Operating System',
    'Predictive Maintenance',
    'Lift Remote Monitoring',
    'Building Management Systems',
    'Industrial IoT',
    'Smart Facility Management',
    'BCA RM&D Compliance',
    'Digital Twin',
    'Edge Computing',
  ],
  award: [
    'NRF Cities of Tomorrow National Awardee',
    'BCA Sandbox Certification for RM&D',
  ],
  sameAs: ['https://www.linkedin.com/company/softgridinc'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SG',
    addressLocality: 'Singapore',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Softgrid Sensing',
  alternateName: 'Softgrid',
  url: SITE_URL,
  inLanguage: 'en-SG',
  publisher: { '@id': ORG_ID },
}

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
  metadataBase: new URL(SITE_URL),
  title: 'Softgrid — AI Facility Operating System (AFOS) | Singapore',
  description:
    'Softgrid Sensing builds AFOS — an AI-Driven Facility Operating System for lift monitoring, predictive maintenance, and smart building management in Singapore. BCA-certified RM&D, trusted by HDB on 10,000+ lifts.',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Softgrid — AI Facility Operating System (AFOS) | Singapore',
    description:
      'AFOS unifies IoT sensing, real-time monitoring, AI diagnostics, and operations workflows for facility teams. Lift monitoring, building management, and predictive maintenance — Singapore.',
    type: 'website',
    locale: 'en_SG',
    siteName: 'Softgrid Sensing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Softgrid Sensing - AI-Driven Facility Operating System' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softgrid — AI Facility Operating System (AFOS) | Singapore',
    description:
      'AFOS — AI-driven lift monitoring, building management, and predictive maintenance. By Softgrid Sensing, Singapore.',
    images: ['/og-image.png'],
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        {/* PasswordGate disabled for public launch — re-enable by wrapping the children below. */}
        <ScrollAnimator />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
