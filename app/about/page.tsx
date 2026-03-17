import { JourneySection } from '@/components/sections/about/JourneySection'
import { RDSection } from '@/components/sections/about/RDSection'
import { EcosystemSection } from '@/components/sections/about/EcosystemSection'
import { WhySoftgridSection } from '@/components/sections/about/WhySoftgridSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Softgrid Sensing',
  description:
    "Learn about Softgrid Sensing\u2014Singapore's AI-driven facility platform company. 8 years of experience, 10,000+ assets monitored, backed by NRF and A*STAR.",
}

export default function AboutPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center gap-3.5 justify-center mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Bridging Physical Assets with Digital Intelligence
          </h1>
          <p className="text-lg md:text-xl text-cyan-400 max-w-2xl mx-auto leading-relaxed">
            Since 2017, we&apos;ve been building the technology that transforms how Singapore manages its facilities and infrastructure.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-navy-800 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
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
