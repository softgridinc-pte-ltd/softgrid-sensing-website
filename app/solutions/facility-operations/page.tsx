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
  title: 'Smart Facility Operations | Softgrid Sensing',
  description:
    'AI-driven work orders, asset management, knowledge base, and voice AI service desk — everything a modern managing agent needs.',
}

const challenges = [
  {
    title: 'Manual Everything',
    indicator: 'amber' as const,
    description:
      "Work orders on paper or Excel. Maintenance schedules in someone's head. Contractor coordination via WhatsApp. Knowledge locked in senior staff who are about to retire.",
  },
  {
    title: 'No Visibility',
    indicator: 'amber' as const,
    description:
      "You manage dozens of buildings but can't see the real-time status of any asset. Problems surface as tenant complaints, not as early warnings.",
  },
  {
    title: 'Compliance Overhead',
    indicator: 'amber' as const,
    description:
      'BCA requirements, SLA documentation, audit trails — all manually compiled. Every audit is a fire drill.',
  },
  {
    title: 'Knowledge Loss',
    indicator: 'amber' as const,
    description:
      'When experienced technicians leave, their knowledge walks out the door. Junior staff are left guessing.',
  },
]

const steps = [
  {
    title: 'Digital Work Orders (IRIS)',
    description:
      'Every work order is created, assigned, tracked, and closed digitally. Full lifecycle with audit trail. SLA countdown built in.',
  },
  {
    title: 'AI Knowledge Base (Athena)',
    description:
      'Your equipment manuals, SOPs, compliance docs, and historical fault data — all indexed and queryable in plain English. New technicians get answers in seconds, not hours.',
  },
  {
    title: 'Voice AI Service Desk (Nova)',
    description:
      'Incoming facility calls are answered, logged, categorized, and routed by AI. 24/7 coverage without additional headcount.',
  },
  {
    title: 'Connected Monitoring (Optional)',
    description:
      'Plug in AFOS Fusion products and the loop closes: equipment fault → auto work order → dispatch → resolution → data back to AI.',
    badge: 'Closes the Loop',
  },
]

const products = [
  { product: 'IRIS', series: 'AFOS Orches', role: 'Core CMMS platform' },
  { product: 'Athena', series: 'AFOS Cortex', role: 'AI knowledge base' },
  { product: 'Nova', series: 'AFOS Orches', role: 'Voice AI service desk' },
  { product: 'LiftProf', series: 'AFOS Orches', role: 'Technician mobile app', optional: true },
  { product: 'LTMS / RM&D', series: 'AFOS Fusion', role: 'Connected monitoring', optional: true },
  { product: 'Cloud BMS', series: 'AFOS Fusion', role: 'Building monitoring', optional: true },
]

const benefits = [
  {
    title: 'Zero Paper',
    description: 'Fully digital work order lifecycle with complete audit trail.',
  },
  {
    title: 'AI-Powered Knowledge',
    description: 'Athena eliminates knowledge gaps — any question, instant answer.',
  },
  {
    title: '24/7 Service Desk',
    description: 'Nova handles calls around the clock — no additional staff needed.',
  },
  {
    title: 'Compliance Automated',
    description: 'SLA tracking, audit trails, and reporting built into every workflow.',
  },
  {
    title: 'Scalable',
    description: 'Manage 10 buildings or 100 — same platform, same process.',
  },
]

export default function FacilityOperationsPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Smart Facility Operations' }]} />
      <SolutionHero
        overline="Smart Facility Operations"
        headline="Transform Facility Management. From Paper to Platform."
        subheadline="AI-powered work orders, asset management, knowledge at your fingertips, and a voice AI that never sleeps — everything a modern managing agent needs."
      />

      <ChallengeSection
        overline="The Challenge"
        headline="What&apos;s Holding You Back"
        subtitle="Managing agents face compounding operational challenges that paper-based processes can't solve."
        challenges={challenges}
        overlineColor="#D97706"
      />

      <ApproachSection
        overline="The Softgrid Approach"
        headline="Four Steps to Digital Operations"
        subtitle="A systematic transformation path — from digital work orders to a fully connected, AI-augmented facility management platform."
        steps={steps}
        accentColor="#D97706"
        lineColor="linear-gradient(180deg, #D97706 0%, rgba(217,119,6,0.15) 100%)"
        overlineColor="#D97706"
      />

      <ProductsInvolvedSection
        overline="Products That Power This Solution"
        headline="Products Involved"
        products={products}
      />

      <BenefitsSection
        overline="Why It Matters"
        headline="Key Benefits"
        benefits={benefits}
        overlineColor="#D97706"
      />

      <CaseStudyPreview
        label="In Production"
        headline="Deployed with CPG FM — Digitizing Facility Operations for Singapore's Properties"
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
          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1, color: '#FFFFFF', marginBottom: 32 }}>
            Ready to Digitize Your Facility Operations?
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
