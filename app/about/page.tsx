import { JourneySection } from '@/components/sections/about/JourneySection'
import { RDSection } from '@/components/sections/about/RDSection'
import { EcosystemSection } from '@/components/sections/about/EcosystemSection'
import { WhySoftgridSection } from '@/components/sections/about/WhySoftgridSection'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Softgrid \u2014 Singapore IoT & AI Facility Platform Company',
  description:
    'Softgrid Sensing is a Singapore IoT and AI company building AFOS \u2014 the AI-Driven Facility Operating System. Founded 2017, backed by NRF and A*STAR, 10,000+ assets monitored. Trusted by HDB.',
  alternates: { canonical: '/about' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Softgrid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Softgrid (legal name Softgrid Sensing Pte. Ltd.) is a Singapore-based AI and IoT company that builds AFOS \u2014 an AI-Driven Facility Operating System for predictive maintenance, lift remote monitoring, and smart building management. Softgrid was founded in 2017 and operates over 10,000 connected assets across Singapore.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Softgrid do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Softgrid provides a unified platform that combines IoT edge devices, real-time monitoring, AI-driven diagnostics, and operations workflows for facility operators. The platform is used by HDB, Chevalier, CPG FM, and other organizations for lift monitoring, building management, and infrastructure monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Softgrid based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Softgrid Sensing is headquartered in Singapore and serves customers across Asia.',
      },
    },
    {
      '@type': 'Question',
      name: 'When was Softgrid founded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Softgrid was founded in 2017 in Singapore, starting with lift remote monitoring. The company has since expanded to facility management, building management systems, and digital twin solutions, and is backed by NRF (National Research Foundation) and A*STAR.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Softgrid the same as Softgrid Sensing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. "Softgrid" is the common short name for Softgrid Sensing Pte. Ltd. The company is also referred to as Softgrid Inc in some contexts.',
      },
    },
  ],
}

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <JsonLd data={faqSchema} />
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center gap-3.5 justify-center mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary-300" />
            <span className="text-primary-300 text-sm font-bold uppercase tracking-[3px]">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Bridging Physical Assets with Digital Intelligence
          </h1>
          <p className="text-lg md:text-xl text-primary-400 max-w-2xl mx-auto leading-relaxed">
            Since 2017, we&apos;ve been building the technology that transforms how Singapore manages its facilities and infrastructure.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-navy-800 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-8" data-animate>
          <p className="text-slate-300 text-lg md:text-xl leading-[1.8] mb-8">
            We started in 2017 with a simple mission: make lift monitoring smarter. What began as remote monitoring for HDB lifts has evolved into a full-stack Facility Operating System&mdash;combining IoT hardware, edge computing, AI analytics, and digital twin visualization.
          </p>
          <p className="text-slate-300 text-lg md:text-xl leading-[1.8]">
            Today, our technology monitors over 10,000 lifts across Singapore, serving both public housing and private sector clients. But lifts are just the beginning. Our platform extends to building management, environmental monitoring, and high-value infrastructure assets.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <JourneySection />

      {/* R&D */}
      <RDSection />

      {/* Ecosystem */}
      <EcosystemSection />

      {/* Why Softgrid */}
      <WhySoftgridSection />

      {/* CTA */}
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/8 rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Let&apos;s discuss how we can help transform your operations.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
