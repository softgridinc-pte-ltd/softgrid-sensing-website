import { Cpu, LayoutGrid, Smartphone } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CaseStudyHero } from '@/components/sections/case-studies/CaseStudyHero'
import { KeyNumbers } from '@/components/sections/case-studies/KeyNumbers'
import { ContentBlock } from '@/components/sections/case-studies/ContentBlock'
import { DeployedItems } from '@/components/sections/case-studies/DeployedItems'
import { ResultsTable } from '@/components/sections/case-studies/ResultsTable'
import { CustomerQuote } from '@/components/sections/case-studies/CustomerQuote'
import { RelatedLinks } from '@/components/sections/case-studies/RelatedLinks'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chevalier RM&D — BCA-Certified Lift Diagnostics | Softgrid Sensing',
  description:
    'The first independent RM&D solution to achieve BCA Sandbox certification — now operating on 200+ lifts for Chevalier.',
}

const keyNumbers = [
  { value: '200', suffix: '+', label: 'Lifts Monitored', hasCyan: true },
  { value: 'BCA', label: 'Sandbox Certified' },
  { value: 'SaaS', label: 'Per-Lift-Per-Month' },
  { value: '50', suffix: '+', label: 'Fault Types Detected', hasCyan: true },
]

const deployed = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Hardware: LMDC + LBB300',
    description:
      'LMDC (lift monitoring) and LBB300 (vibration sensing) — proprietary protocol supporting multi-brand lifts.',
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: 'Software: RM&D Platform',
    description:
      'BCA-compliant monitoring with auto-categorized faults, performance indicators, and per-trip vibration profiling.',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Mobile: LiftProf',
    description: 'GPS-dispatched field service with auto-generated reports.',
  },
]

const decisions = [
  { bold: 'Brand-agnostic architecture:', text: ' single platform monitoring IFE, Toshiba, and other brands simultaneously' },
  { bold: 'BCA-compliant from day one:', text: ' designed to meet RM&D Code of Practice requirements out of the box' },
  { bold: 'SaaS commercial model:', text: ' per lift per month subscription (hardware leasing + software), no upfront CapEx' },
  { bold: 'Closed-loop workflow:', text: ' alert to auto work order to technician dispatch to verified resolution to data feedback' },
]

const results = [
  { metric: 'BCA Certified', detail: "Official BCA Sandbox certification — listed on BCA's approved solutions" },
  { metric: 'Brand-Agnostic', detail: 'Single platform monitoring IFE, Toshiba, and other brands' },
  { metric: 'IoT SaaS Model', detail: 'Subscription model validated in commercial deployment' },
  { metric: 'Full Closed Loop', detail: 'Alert → auto work order → technician dispatch → verified resolution → data feedback' },
]

const related = [
  { kicker: 'Related Solution', title: 'Smart Vertical Transport', href: '/solutions/vertical-transport' },
  { kicker: 'Related Products', title: 'RM&D, LMDC', href: '/products/fusion' },
  { kicker: 'Next Case Study', title: 'HDB Lift Monitoring', href: '/case-studies/hdb' },
]

export default function ChevalierCaseStudyPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Case Studies', href: '/case-studies' }, { label: 'Chevalier' }]} />

      <CaseStudyHero
        overline="Private Sector / Vertical Transport"
        headline="BCA-Certified Predictive Maintenance for Chevalier's Lift Fleet"
        subheadline="The first independent RM&D solution to achieve BCA Sandbox certification — now operating on 200+ lifts."
        image="/images/background/bg3.jpg"
        logo="/images/logos/chevalier.jpeg"
        logoAlt="Chevalier"
      />

      <KeyNumbers items={keyNumbers} />

      <ContentBlock title="The Background" image="/images/background/bg14.jpg">
        <p>
          Chevalier, a leading lift servicing company in Singapore, needed a remote monitoring and diagnostics solution compliant with BCA&apos;s Code of Practice — supporting their diverse fleet of lift brands (IFE, Toshiba, others).
        </p>
        <p>
          OEM solutions only support their own brands. Chevalier needed a brand-agnostic solution for unified monitoring across their entire portfolio.
        </p>
      </ContentBlock>

      <ContentBlock title="The Solution" background="slate">
        <p>
          Softgrid deployed a full-stack BCA-compliant RM&amp;D solution — from edge hardware to cloud platform to mobile field service — enabling Chevalier to monitor multi-brand lifts under a single system.
        </p>
        <h3 className="!mt-10 !mb-5 text-xl font-bold text-navy-900">What Was Deployed</h3>
        <DeployedItems items={deployed} />
        <h3 className="!mt-12 !mb-5 text-xl font-bold text-navy-900">Key Design Decisions</h3>
        <ul className="space-y-3">
          {decisions.map((d) => (
            <li key={d.bold} className="relative pl-6 text-base text-slate-700 leading-relaxed">
              <span className="absolute left-0 top-[10px] inline-block h-2 w-2 rounded-full bg-primary-500" />
              <strong className="font-semibold text-navy-900">{d.bold}</strong>
              {d.text}
            </li>
          ))}
        </ul>
      </ContentBlock>

      <ResultsTable rows={results} />

      <CustomerQuote
        quote="[Placeholder for customer testimonial from Chevalier stakeholder — to be obtained]"
        attribution="Chevalier Stakeholder"
        logo="/images/logos/chevalier.jpeg"
        logoAlt="Chevalier"
      />

      <RelatedLinks items={related} />
    </>
  )
}
