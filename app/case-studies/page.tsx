import { CaseStudyCardsSection } from '@/components/sections/case-studies/CaseStudyCardsSection'
import { IndustriesSection } from '@/components/sections/case-studies/IndustriesSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Softgrid Sensing',
  description:
    'See how HDB, Chevalier, and others trust Softgrid for lift monitoring, facility management, and predictive maintenance at scale.',
}

export default function CaseStudiesPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center gap-3.5 justify-center mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs font-bold uppercase tracking-[3px]">Proven at Scale</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real deployments. Measurable outcomes. See how organizations across Singapore trust Softgrid to run their operations.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <CaseStudyCardsSection />

      {/* Industries */}
      <IndustriesSection />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/8 rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Let&apos;s discuss how Softgrid can help transform your operations.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
