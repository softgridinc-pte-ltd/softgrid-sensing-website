import { Button } from '@/components/ui/Button'

import { SolutionsHero } from '@/components/sections/solutions/SolutionsHero'
import { SolutionsIntro } from '@/components/sections/solutions/SolutionsIntro'
import { SolutionsNarrative } from '@/components/sections/solutions/SolutionsNarrative'
import { SolutionCardsSection } from '@/components/sections/solutions/SolutionCardsSection'
import { RealWorldImpact } from '@/components/sections/solutions/RealWorldImpact'
import { CapabilitiesGrid } from '@/components/sections/solutions/CapabilitiesGrid'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Facility Solutions — Lift, BMS & FM | Softgrid Singapore',
  description:
    'Facility solutions for lift operators, building owners, and managing agents — lift remote monitoring, smart BMS, AI facility management, and infrastructure monitoring. BCA certified.',
  alternates: { canonical: '/solutions' },
}

export default function SolutionsPage(): React.ReactElement {
  return (
    <>
      <SolutionsHero />

      <SolutionsIntro />

      <SolutionsNarrative />

      <section className="bg-white pt-20 md:pt-28 pb-4">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-10 max-w-2xl" data-animate>
            <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-600">
              Solutions Across Domains
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
              Pick the entry point that fits your operation
            </h2>
          </div>
        </div>
      </section>
      <SolutionCardsSection />

      <RealWorldImpact />

      <CapabilitiesGrid />

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.14) 0%, transparent 70%)',
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 md:px-12 text-center" data-animate>
          <h2 className="mb-5 text-3xl md:text-4xl font-bold text-white">
            Not Sure Where to Start?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-slate-300">
            Talk to our team. We&apos;ll help you identify the right starting point — and show you how the platform grows with you.
          </p>
          <Button href="/contact" variant="primary" colorScheme="dark" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
