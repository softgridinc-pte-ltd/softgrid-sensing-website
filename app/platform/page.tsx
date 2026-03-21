import { PlatformPhilosophySection } from '@/components/sections/platform/PlatformPhilosophySection'
import { PlatformEnginesSection } from '@/components/sections/platform/PlatformEnginesSection'
import { PlatformCredentialsSection } from '@/components/sections/platform/PlatformCredentialsSection'
import { ProductSeriesSection } from '@/components/sections/products/ProductSeriesSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform | Softgrid Sensing',
  description:
    'The AFOS platform — a unified AI and IoT operating system for facility operations. Four engines: Connect, Intelligence, Workflow, and Data.',
}

export default function PlatformPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center gap-3.5 justify-center mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">The Softgrid AFOS Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
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

      {/* Technology Credentials */}
      <PlatformCredentialsSection />

      {/* What Runs on AFOS */}
      <section className="bg-navy-900 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-[-2rem]" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Runs on AFOS
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Four product series &mdash; all powered by the same platform core.
          </p>
        </div>
      </section>
      <ProductSeriesSection />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See the Platform in Action
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Book a demo to see how AFOS connects your facility operations end-to-end.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Book a Demo
          </Button>
        </div>
      </section>
    </>
  )
}
