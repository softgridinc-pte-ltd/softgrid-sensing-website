import { SolutionHero } from '@/components/sections/solutions/SolutionHero'
import { ChallengeSection } from '@/components/sections/solutions/ChallengeSection'
import { ApproachSection } from '@/components/sections/solutions/ApproachSection'
import { ProductsInvolvedSection } from '@/components/sections/solutions/ProductsInvolvedSection'
import { BenefitsSection } from '@/components/sections/solutions/BenefitsSection'
import { CaseStudyPreview } from '@/components/sections/solutions/CaseStudyPreview'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Vertical Transport | Softgrid Sensing',
  description:
    'BCA-certified lift and escalator remote monitoring, AI-driven fault prediction, and automated compliance for your entire vertical transport fleet.',
}

const challenges = [
  {
    title: 'Regulatory Pressure',
    description:
      'BCA Code of Practice now requires Remote Monitoring & Diagnostics for lifts. Compliance is no longer optional.',
  },
  {
    title: 'Aging Equipment, Scarce Manpower',
    description:
      "Singapore's lift fleet is aging while qualified technicians are increasingly hard to find.",
  },
  {
    title: 'Reactive, Not Predictive',
    description:
      'Most operators still fix after breaking — costing 3-5x more than predictive intervention.',
  },
  {
    title: 'Siloed Monitoring',
    description:
      'OEM systems only monitor their own brand. No unified view across your fleet.',
  },
]

const steps = [
  {
    title: 'Hardware Layer',
    description:
      'Non-intrusive IoT devices installed on lifts (LMD, LBB) and escalators (EMD) — no modification to existing equipment.',
  },
  {
    title: 'Monitoring Layer',
    description:
      'LTMS for public sector and RM&D for private sector provide brand-agnostic, real-time monitoring across your entire fleet.',
  },
  {
    title: 'AI Layer',
    description:
      'Vibration-based fault prediction with >85% accuracy. Per-trip health profiling and >95% escalator passenger behavior detection.',
  },
  {
    title: 'Workflow Layer',
    description:
      'Alert \u2192 work order \u2192 dispatch \u2192 resolution \u2192 verification \u2192 auto-generated reports \u2192 AI feedback loop.',
  },
]

const products = [
  { product: 'LTMS', series: 'AFOS Fusion', role: 'Public sector lift monitoring' },
  { product: 'RM&D', series: 'AFOS Fusion', role: 'Private sector lift monitoring & BCA compliance' },
  { product: 'Escalator Monitoring', series: 'AFOS Fusion', role: 'Escalator vibration + vision monitoring' },
  { product: 'LiftProf', series: 'AFOS Orches', role: 'Technician mobile field service' },
  { product: 'Athena', series: 'AFOS Cortex', role: 'AI knowledge base for diagnostics' },
  { product: 'LMD Series', series: 'AFOS Sense', role: 'Lift monitoring device' },
  { product: 'LBB Series', series: 'AFOS Sense', role: 'Lift blackbox sensor' },
  { product: 'EMD', series: 'AFOS Sense', role: 'Escalator monitoring device' },
]

const benefits = [
  {
    title: 'BCA Compliant',
    description: 'Certified RM&D solution meeting Code of Practice requirements.',
  },
  {
    title: '50%+ Cost Reduction',
    description: 'Predictive approach replaces reactive callouts and unnecessary routine visits.',
  },
  {
    title: 'Extended Asset Life',
    description: 'Early fault detection prevents cascading damage to lift components.',
  },
  {
    title: 'Less Manpower Required',
    description: 'Remote monitoring reduces the need for routine site visits.',
  },
  {
    title: 'Unified Fleet View',
    description: 'One dashboard for all brands, all sites, all assets.',
  },
  {
    title: 'Proven at Scale',
    description: '10,000+ lifts across 4,000+ HDB blocks in Singapore.',
  },
]

export default function VerticalTransportPage(): React.ReactElement {
  return (
    <>
      <SolutionHero
        overline="Smart Vertical Transport"
        headline="Lift & Escalator Monitoring. Predictive. Compliant. Proven."
        subheadline="BCA-certified remote monitoring, AI-driven fault prediction, and automated compliance — for every lift and escalator in your portfolio."
      />

      <ChallengeSection challenges={challenges} />

      <ApproachSection steps={steps} />

      <ProductsInvolvedSection products={products} />

      <BenefitsSection benefits={benefits} />

      <CaseStudyPreview
        label="Proven at National Scale"
        headline="10,000+ Lifts Across 4,000+ HDB Blocks"
        description="Singapore's largest public housing lift monitoring deployment — delivering real-time visibility, predictive maintenance, and compliance reporting across the nation's HDB estate."
        href="/case-studies/hdb"
      />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Vertical Transport Operations?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            See how our BCA-certified platform can transform your lift and escalator management.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
