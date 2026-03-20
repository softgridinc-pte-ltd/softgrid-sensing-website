import { Outfit, DM_Sans } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

import type { Metadata } from 'next'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})


export const metadata: Metadata = {
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
