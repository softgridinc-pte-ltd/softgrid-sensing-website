import { SolutionHero } from '@/components/sections/solutions/SolutionHero'
import { ChallengeSection } from '@/components/sections/solutions/ChallengeSection'
import { ApproachSection } from '@/components/sections/solutions/ApproachSection'
import { ProductsInvolvedSection } from '@/components/sections/solutions/ProductsInvolvedSection'
import { BenefitsSection } from '@/components/sections/solutions/BenefitsSection'
import { CaseStudyPreview } from '@/components/sections/solutions/CaseStudyPreview'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Vertical Transport | Softgrid Sensing',
  description:
    'BCA-certified lift and escalator remote monitoring, AI-driven fault prediction, and automated compliance for your entire vertical transport fleet.',
  alternates: { canonical: '/solutions/vertical-transport' },
}

const challenges = [
  {
    title: 'Regulatory Pressure',
    description:
      "BCA's Code of Practice now requires Remote Monitoring & Diagnostics for lifts. Compliance isn't optional — it's a requirement. And it's expanding to escalators.",
  },
  {
    title: 'Aging Equipment, Scarce Manpower',
    description:
      "Singapore's lift fleet is aging. Technicians are retiring. Traditional monthly inspections can't keep up — and they miss early-stage faults that lead to costly breakdowns.",
  },
  {
    title: 'Reactive, Not Predictive',
    description:
      'Most operators still fix lifts after they break. By then, the cost is 3-5x higher, passengers are stranded, and complaints pile up.',
  },
  {
    title: 'Siloed Monitoring',
    description:
      "OEM systems only monitor their own brand. If you manage a mixed fleet — Mitsubishi, Toshiba, IFE, others — you're stuck with multiple systems and no unified view.",
  },
]

const steps = [
  {
    title: 'Hardware Layer',
    description:
      'Non-intrusive IoT devices (LMD + LBB for lifts, EMD for escalators) install without modifying the controller or voiding warranties. Edge processing ensures operation even during internet outages. 4G/LTE secure tunnel connectivity.',
  },
  {
    title: 'Monitoring Layer',
    description:
      'LTMS (public sector) and RM&D (private sector) provide real-time status monitoring, alert management, and compliance reporting. Brand-agnostic — supports any lift maker.',
  },
  {
    title: 'AI Layer',
    description:
      'Vibration analysis and ML models predict faults with >83% accuracy. Per-trip health profiling builds a lifetime performance record for every asset. Computer vision monitors escalator passenger behavior with >95% detection accuracy.',
  },
  {
    title: 'Workflow Layer',
    description:
      'Alert → auto-generated work order → dispatched to nearest technician via LiftProf mobile app → resolution verified → service report auto-generated → data fed back to AI. Closed loop.',
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
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Smart Vertical Transport' },
      ]} />
      <SolutionHero
        overline="Smart Vertical Transport"
        headline="Lift & Escalator Monitoring. Predictive. Compliant. Proven."
        subheadline="BCA-certified remote monitoring, AI-driven fault prediction, and automated compliance — for every lift and escalator in your portfolio."
        image="/images/background/bg3.webp"
      />

      <ChallengeSection
        headline="The Challenge"
        challenges={challenges}
      />

      <ApproachSection
        headline="The Softgrid Approach"
        steps={steps}
        accentColor="#1F99C5"
      />

      <ProductsInvolvedSection
        overline="Products Involved"
        headline="Hardware, Cloud, and AI — Working as One"
        products={products}
      />

      <BenefitsSection
        overline="Results You Can Measure"
        headline="Compliant, Predictive, Proven"
        benefits={benefits}
      />

      <CaseStudyPreview
        label="Proven at National Scale"
        headline="10,000+ Lifts Across 4,000+ HDB Blocks"
        description="Singapore's largest public housing lift monitoring deployment — delivering real-time visibility, predictive maintenance, and compliance reporting across the nation's HDB estate."
        href="/case-studies/hdb"
      />

      {/* Closing CTA */}
      <section
        style={{
          padding: '100px 64px',
          background: '#1F99C5',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
        <div data-animate style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1, color: '#FFFFFF', marginBottom: 32 }}>
            Ready to Modernize Your Vertical Transport Operations?
          </h2>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#FFFFFF',
              color: '#0A1628',
              padding: '16px 40px',
              borderRadius: 6,
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
