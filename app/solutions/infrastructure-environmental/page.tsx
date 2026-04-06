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
  title: 'Infrastructure & Environmental Monitoring | Softgrid Sensing',
  description:
    'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale.',
}

const challenges = [
  {
    title: 'Scale Beyond Reach',
    description:
      "You manage assets measured in square kilometers, not square meters. Manual surveys are expensive, infrequent, and can't keep up with the pace of change.",
  },
  {
    title: 'Slow Detection',
    description:
      'By the time a quarterly aerial survey spots encroachment, illegal clearing, or structural degradation, weeks or months have already passed. Early intervention is impossible.',
  },
  {
    title: 'Disconnected Data',
    description:
      "Environmental monitoring data sits in GIS systems that don't connect to operational workflows. An alert doesn't automatically trigger an investigation or a report.",
  },
  {
    title: 'Compliance Pressure',
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
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Infrastructure & Environmental' }]} />
      <SolutionHero
        overline="Infrastructure & Environmental Monitoring"
        headline="Monitor What You Can't Touch"
        subheadline="Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale."
        image="/images/background/bg2.jpg"
      />

      <ChallengeSection
        headline="The Challenge"
        challenges={challenges}
      />

      <ApproachSection
        headline="The Softgrid Approach"
        steps={steps}
        accentColor="#059669"
      />

      <ProductsInvolvedSection
        overline="What Sees the Planet"
        headline="Satellites, Pipelines, and Models"
        products={products}
      />

      <BenefitsSection
        overline="Planetary-Scale Outcomes"
        headline="Monitor What You Couldn't Reach Before"
        benefits={benefits}
      />

      <CaseStudyPreview
        label="Proven at National Scale"
        headline="Monthly Forest Cover Monitoring Across Singapore for NParks"
        description="Automated satellite-based monitoring of 26 ecological areas at 4.76m resolution — fully automated, zero manual processing."
        href="/contact"
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
          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1, color: '#FFFFFF', marginBottom: 16 }}>
            Ready to Monitor at Scale?
          </h2>
          <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
            Let&apos;s discuss how satellite-based monitoring can transform your operations.
          </div>
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
