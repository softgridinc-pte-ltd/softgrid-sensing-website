import { SolutionHero } from '@/components/sections/solutions/SolutionHero'
import { ChallengeSection } from '@/components/sections/solutions/ChallengeSection'
import { ApproachSection } from '@/components/sections/solutions/ApproachSection'
import { ProductsInvolvedSection } from '@/components/sections/solutions/ProductsInvolvedSection'
import { BenefitsSection } from '@/components/sections/solutions/BenefitsSection'
import { CaseStudyPreview } from '@/components/sections/solutions/CaseStudyPreview'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infrastructure & Environmental Monitoring | Softgrid Sensing',
  description:
    'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale.',
}

const challenges = [
  {
    title: 'Scale Beyond Reach',
    description:
      'Assets measured in square kilometers, not meters. Manual surveys are expensive, slow, and infrequent.',
  },
  {
    title: 'Slow Detection',
    description:
      'Quarterly surveys miss encroachment, illegal clearing, and structural changes. Weeks pass before detection.',
  },
  {
    title: 'Disconnected Data',
    description:
      "Environmental monitoring data in GIS systems doesn't connect to operational workflows or alerts.",
  },
  {
    title: 'Compliance Pressure',
    description:
      'Environmental regulations demand continuous monitoring and automated reporting — not annual surveys.',
  },
]

const steps = [
  {
    title: 'Automated Acquisition',
    description:
      'Satellite imagery acquired automatically at configurable intervals — monthly, weekly, or on-demand.',
  },
  {
    title: 'AI Classification',
    description:
      'CNN-based models classify land cover types and detect changes with high spatial accuracy.',
  },
  {
    title: 'Alert & Action',
    description:
      'Changes exceeding configured thresholds trigger alerts through the AFOS Workflow engine.',
  },
  {
    title: 'Automated Reporting',
    description:
      'Decision-ready reports with historical trends, change maps, and statistical summaries.',
  },
]

const products = [
  { product: 'Fusion RSA', series: 'AFOS Fusion', role: 'Satellite monitoring and AI analysis' },
  { product: 'Athena', series: 'AFOS Cortex', role: 'Knowledge base for procedures and compliance' },
  { product: 'Digital Twin', series: 'AFOS Cortex', role: '3D/GIS visualization (optional)' },
]

const benefits = [
  {
    title: 'Continuous Monitoring',
    description: 'Monthly or weekly cycles, not annual surveys.',
  },
  {
    title: 'Zero Manual Processing',
    description: 'End-to-end automated from satellite acquisition to final report.',
  },
  {
    title: 'Early Detection',
    description: 'Changes detected within days, not months.',
  },
  {
    title: 'Platform Integration',
    description: 'Same dashboard, workflow engine, and data layer as facility operations.',
  },
  {
    title: 'Scalable',
    description: 'Monitor a single site or an entire country on the same platform.',
  },
]

export default function InfrastructureEnvironmentalPage(): React.ReactElement {
  return (
    <>
      <SolutionHero
        overline="Infrastructure & Environmental Monitoring"
        headline="Monitor What You Can't Touch"
        subheadline="Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale."
      />

      <ChallengeSection challenges={challenges} />

      <ApproachSection steps={steps} />

      <ProductsInvolvedSection products={products} />

      <BenefitsSection benefits={benefits} />

      <CaseStudyPreview
        label="Proven at National Scale"
        headline="Monthly Forest Cover Monitoring for NParks"
        description="Automated satellite-based monitoring of 26 ecological areas across Singapore — fully automated, zero manual processing."
        href="/contact"
      />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Monitor at Scale?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            See how satellite-based AI monitoring can transform your environmental and infrastructure operations.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
