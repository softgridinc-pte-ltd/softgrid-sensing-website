import { PlatformPhilosophySection } from '@/components/sections/platform/PlatformPhilosophySection'
import { PlatformEnginesSection } from '@/components/sections/platform/PlatformEnginesSection'
import { PlatformOutcomesSection } from '@/components/sections/platform/PlatformOutcomesSection'
import { CTASection } from '@/components/sections/CTASection'
import { PlatformFlow } from '@/components/sections/hero/PlatformFlow'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Platform — AI Facility Operating System | Softgrid',
  description:
    'AFOS — the AI-Driven Facility Operating System. A unified AI and IoT platform for lift monitoring, building management, and predictive maintenance. Four engines: Connect, Intelligence, Workflow, Data.',
  alternates: { canonical: '/platform' },
}

export default function PlatformPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.1) 0%, transparent 70%)' }}
        />

        {/* Platform flow — Sense -> Analyze -> Predict -> Act */}
        <div className="hidden md:block">
          <PlatformFlow />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-center -mt-12">
          <div className="flex items-center gap-3.5 justify-center mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary-300" />
            <span className="text-primary-300 text-sm font-bold uppercase tracking-[3px]">
              The Softgrid AFOS Platform
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl mx-auto leading-tight">
            The Platform That Transforms Your Facility Operations
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            A unified AI and IoT platform &mdash; connecting edge devices, cloud intelligence, automated workflows, and data analytics into one operating system for facilities.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Book a Demo
          </Button>
        </div>
      </section>

      {/* Philosophy — What Makes AFOS a Platform */}
      <PlatformPhilosophySection />

      {/* Four Engines */}
      <PlatformEnginesSection />

      {/* Outcomes / Key Advantages */}
      <PlatformOutcomesSection />

      {/* CTA */}
      <CTASection />
    </>
  )
}
