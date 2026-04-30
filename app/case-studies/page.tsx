import { FeaturedCaseStudy } from '@/components/sections/case-studies/FeaturedCaseStudy'
import { CaseStudyRunway } from '@/components/sections/case-studies/CaseStudyRunway'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — HDB, Chevalier, NParks, CPG FM | Softgrid Sensing',
  description:
    'Softgrid case studies — HDB lift monitoring (10,000+ lifts), Chevalier RM&D, NParks satellite forest monitoring, and CPG FM AI facility management. Proven at national scale in Singapore.',
  alternates: { canonical: '/case-studies' },
}

export default function CaseStudiesPage(): React.ReactElement {
  return (
    <>
      {/* Featured Case Study — HDB hero */}
      <FeaturedCaseStudy />

      {/* Secondary Case Studies — horizontal runway */}
      <CaseStudyRunway />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        {/* Top gradient separator */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/8 rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to See Similar Results?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Every deployment starts with a conversation about your specific operational challenges.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
