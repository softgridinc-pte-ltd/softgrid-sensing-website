import { SolutionHero } from '@/components/sections/solutions/SolutionHero'
import { ChallengeSection } from '@/components/sections/solutions/ChallengeSection'
import { ApproachSection } from '@/components/sections/solutions/ApproachSection'
import { ProductsInvolvedSection } from '@/components/sections/solutions/ProductsInvolvedSection'
import { BenefitsSection } from '@/components/sections/solutions/BenefitsSection'
import { CaseStudyPreview } from '@/components/sections/solutions/CaseStudyPreview'
import { CTASection } from '@/components/sections/CTASection'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infrastructure & Environmental Monitoring | Softgrid Sensing',
  description:
    'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale.',
}

const challenges = [
  {
    title: 'Scale Beyond Reach',
    indicator: 'red' as const,
    description:
      "You manage assets measured in square kilometers, not square meters. Manual surveys are expensive, infrequent, and can't keep up with the pace of change.",
  },
  {
    title: 'Slow Detection',
    indicator: 'amber' as const,
    description:
      'By the time a quarterly aerial survey spots encroachment, illegal clearing, or structural degradation, weeks or months have already passed. Early intervention is impossible.',
  },
  {
    title: 'Disconnected Data',
    indicator: 'red' as const,
    description:
      "Environmental monitoring data sits in GIS systems that don't connect to operational workflows. An alert doesn't automatically trigger an investigation or a report.",
  },
  {
    title: 'Compliance Pressure',
    indicator: 'amber' as const,
    description:
      'Environmental regulations increasingly demand continuous monitoring and automated reporting — not annual snapshots.',
  },
]

const steps = [
  {
    title: 'Automated Acquisition',
    description:
      'Satellite imagery acquired automatically at configurable intervals — monthly, weekly, or on-demand. No manual procurement, no waiting for flyovers.',
  },
  {
    title: 'AI Classification',
    description:
      'CNN-based models classify land cover types (vegetation, built environment, water) and detect changes between monitoring cycles — with high classification accuracy.',
  },
  {
    title: 'Alert & Action',
    description:
      'Changes that exceed thresholds trigger alerts through the same AFOS Workflow engine used for building maintenance. An alert for coastline erosion follows the same path as an alert for a lift fault — detection → classification → notification → action → resolution.',
  },
  {
    title: 'Automated Reporting',
    description:
      'Decision-ready reports generated automatically with historical trends, change maps, and statistical summaries. No manual GIS processing.',
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
    description: 'End-to-end automated from satellite to report.',
  },
  {
    title: 'Early Detection',
    description: 'Changes detected within days, not months.',
  },
  {
    title: 'Platform Integration',
    description: 'Same dashboard, same workflow engine, same data layer as your facility operations.',
  },
  {
    title: 'Scalable',
    description: 'Monitor a single site or an entire country — same platform.',
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

      <ChallengeSection
        headline="The Challenge"
        challenges={challenges}
      />

      <ApproachSection
        headline="The Softgrid Approach"
        steps={steps}
      />

      <ProductsInvolvedSection
        overline="Products That Power This Solution"
        products={products}
      />

      <BenefitsSection
        overline="Results You Can Measure"
        benefits={benefits}
      />

      <CaseStudyPreview
        label="Proven at National Scale"
        headline="Monthly Forest Cover Monitoring Across Singapore for NParks"
        description="Automated satellite-based monitoring of 26 ecological areas at 4.76m resolution — fully automated, zero manual processing."
        href="/contact"
      />

      <CTASection />
    </>
  )
}
