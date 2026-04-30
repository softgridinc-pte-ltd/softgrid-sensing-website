import { LayoutGrid, HelpCircle, GitBranch } from 'lucide-react'

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
  title: 'CPG FM — AI-Powered Facility Management | Softgrid Sensing',
  description:
    'Digitizing facility operations with IRIS CMMS and Athena AI knowledge base for CPG FM.',
  alternates: { canonical: '/case-studies/cpg-fm' },
}

const keyNumbers = [
  { value: 'IRIS', label: 'CMMS Deployed', hasCyan: true },
  { value: 'Athena', label: 'AI Knowledge Base Live', hasCyan: true },
  { value: 'Digital', label: 'Work Order Lifecycle' },
  { value: 'AI', label: 'Decision Support Embedded' },
]

const deployed = [
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: 'IRIS — Full CMMS Platform',
    description:
      'Digital work orders, asset registry, contractor management, and SLA monitoring — the complete operational backbone for facility management.',
  },
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: 'Athena — AI Knowledge Base',
    description:
      'Natural language query for equipment procedures, compliance documents, and historical fault data — reducing dependency on senior staff.',
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: 'Monitoring Integration',
    description:
      'Connected to building monitoring feeds for automated work order generation — sensor-detected faults trigger digital work orders automatically.',
  },
]

const results = [
  { metric: 'Digital Operations', detail: 'Paper-based work orders replaced with full digital lifecycle' },
  { metric: 'AI Knowledge Access', detail: 'Athena provides instant answers — reducing dependency on senior staff' },
  { metric: 'Compliance Ready', detail: 'Audit trails and SLA documentation generated automatically' },
  { metric: 'Foundation for Scale', detail: 'Platform ready to extend to additional properties and monitoring' },
]

const related = [
  { kicker: 'Solution', title: 'Smart Facility Operations', href: '/solutions/facility-operations' },
  { kicker: 'Product', title: 'IRIS / Athena', href: '/products/orches' },
  { kicker: 'Case Study', title: 'NParks Forest Monitoring', href: '/case-studies/nparks' },
]

export default function CpgFmCaseStudyPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Case Studies', href: '/case-studies' }, { label: 'CPG FM' }]} />

      <CaseStudyHero
        overline="Facility Operations"
        headline="AI-Powered Facility Management for CPG FM"
        subheadline="Digitizing facility operations with IRIS CMMS and Athena AI knowledge base — replacing paper-based workflows with intelligent, automated building management."
        image="/images/background/bg7.webp"
        logo="/images/logos/CPGFM.png"
        logoAlt="CPG FM"
      />

      <KeyNumbers items={keyNumbers} />

      <ContentBlock title="Background" image="/images/background/bg11.webp">
        <p>
          CPG FM, a property management company serving Singapore&apos;s commercial and institutional properties, operated with paper work orders, Excel-based tracking, and knowledge siloed in experienced staff.
        </p>
        <p>
          As regulatory requirements increased and experienced technicians approached retirement, digital transformation became urgent. CPG FM needed a system that could digitize every aspect of facility operations while preserving decades of institutional knowledge.
        </p>
        <h3 className="!mt-10 !mb-4 text-xl font-bold text-navy-900">Paper-Based Challenges</h3>
        <p>
          Work orders were handwritten and filed manually. SLA tracking relied on spreadsheets. Equipment maintenance history lived in the memory of senior technicians. When these individuals left, critical knowledge walked out the door with them.
        </p>
      </ContentBlock>

      <ContentBlock title="What We Deployed" background="slate">
        <p>
          Softgrid deployed two core products from the AFOS platform — IRIS for operational management and Athena for AI-powered knowledge access — connected to building monitoring feeds for automated work order generation.
        </p>
        <div className="!mt-10">
          <DeployedItems items={deployed} />
        </div>
      </ContentBlock>

      <ResultsTable rows={results} />

      <CustomerQuote
        quote="The transition from paper to digital was seamless. IRIS handles our daily operations while Athena ensures no critical knowledge is ever lost — even as our experienced team members retire."
        attribution="CPG FM Operations Team"
        logo="/images/logos/CPGFM.png"
        logoAlt="CPG FM"
      />

      <RelatedLinks items={related} />
    </>
  )
}
