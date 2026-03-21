import { SolutionHero } from '@/components/sections/solutions/SolutionHero'
import { ChallengeSection } from '@/components/sections/solutions/ChallengeSection'
import { ApproachSection } from '@/components/sections/solutions/ApproachSection'
import { ProductsInvolvedSection } from '@/components/sections/solutions/ProductsInvolvedSection'
import { BenefitsSection } from '@/components/sections/solutions/BenefitsSection'
import { CaseStudyPreview } from '@/components/sections/solutions/CaseStudyPreview'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Facility Operations | Softgrid Sensing',
  description:
    'AI-driven work orders, asset management, knowledge base, and voice AI service desk — everything a modern managing agent needs.',
}

const challenges = [
  {
    title: 'Manual Everything',
    description:
      "Work orders on paper or Excel, schedules in people's heads, coordination over WhatsApp.",
  },
  {
    title: 'No Visibility',
    description:
      "Can't see real-time status of any asset across your portfolio. Problems surface as complaints.",
  },
  {
    title: 'Compliance Overhead',
    description:
      'BCA requirements, SLA documentation, and audit trails manually compiled every reporting cycle.',
  },
  {
    title: 'Knowledge Loss',
    description:
      'When experienced technicians leave, their knowledge walks out the door with them.',
  },
]

const steps = [
  {
    title: 'Digital Work Orders',
    description:
      'Every work order created, assigned, tracked, and closed digitally with complete audit trail and SLA countdown.',
  },
  {
    title: 'AI Knowledge Base',
    description:
      'Equipment manuals, SOPs, compliance docs, and fault history indexed and queryable in plain English via Athena.',
  },
  {
    title: 'Voice AI Service Desk',
    description:
      'Incoming facility calls answered, logged, categorized, and routed by Nova — 24/7, no additional staff.',
  },
  {
    title: 'Connected Monitoring',
    description:
      'Optionally plug in AFOS Fusion products to close the loop — fault \u2192 work order \u2192 dispatch \u2192 resolution \u2192 AI feedback.',
  },
]

const products = [
  { product: 'IRIS', series: 'AFOS Orches', role: 'Core CMMS platform' },
  { product: 'Athena', series: 'AFOS Cortex', role: 'AI knowledge base' },
  { product: 'Nova', series: 'AFOS Orches', role: 'Voice AI service desk' },
  { product: 'LiftProf', series: 'AFOS Orches', role: 'Technician mobile app (optional)' },
  { product: 'LTMS / RM&D', series: 'AFOS Fusion', role: 'Connected monitoring (optional)' },
  { product: 'Cloud BMS', series: 'AFOS Fusion', role: 'Building monitoring (optional)' },
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
    description: 'Nova handles calls around the clock without additional staff.',
  },
  {
    title: 'Compliance Automated',
    description: 'SLA tracking, audit trails, and reporting built into every workflow.',
  },
  {
    title: 'Scalable',
    description: 'Manage 10 buildings or 100 — same platform, same workflows.',
  },
]

export default function FacilityOperationsPage(): React.ReactElement {
  return (
    <>
      <SolutionHero
        overline="Smart Facility Operations"
        headline="Transform Facility Management. From Paper to Platform."
        subheadline="AI-powered work orders, asset management, knowledge at your fingertips, and a voice AI that never sleeps — everything a modern managing agent needs."
      />

      <ChallengeSection challenges={challenges} />

      <ApproachSection steps={steps} />

      <ProductsInvolvedSection products={products} />

      <BenefitsSection benefits={benefits} />

      <CaseStudyPreview
        label="In Production"
        headline="Deployed with CPG FM"
        description="Digitizing facility operations for Singapore's properties with IRIS and Athena."
        href="/contact"
      />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Digitize Your Facility Operations?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            See how IRIS, Athena, and Nova can modernize your facility management workflows.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
