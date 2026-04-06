import { Cpu, LayoutGrid, BrainCircuit } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CaseStudyHero } from '@/components/sections/case-studies/CaseStudyHero'
import { KeyNumbers } from '@/components/sections/case-studies/KeyNumbers'
import { ContentBlock } from '@/components/sections/case-studies/ContentBlock'
import { DeployedItems } from '@/components/sections/case-studies/DeployedItems'
import { ResultsTable } from '@/components/sections/case-studies/ResultsTable'
import { CustomerQuote } from '@/components/sections/case-studies/CustomerQuote'
import { RelatedLinks } from '@/components/sections/case-studies/RelatedLinks'
import { HdbDeploymentDiagram } from '@/components/sections/case-studies/HdbDeploymentDiagram'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HDB Lift Monitoring — 10,000+ Lifts Case Study | Softgrid Sensing',
  description:
    "How Softgrid became the backbone of Singapore's public housing lift safety infrastructure — monitoring 10,000+ lifts across 4,000+ HDB blocks.",
}

const keyNumbers = [
  { value: '10,000', suffix: '+', label: 'Lifts Monitored', hasCyan: true },
  { value: '4,000', suffix: '+', label: 'HDB Blocks', hasCyan: true },
  { value: 'NRF CoT', label: 'National Research Awardee' },
  { value: 'Co-Owned', label: 'IP with HDB' },
]

const deployed = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Hardware: LMD6000 Devices',
    description:
      'Non-intrusive IoT sensors with edge processing and 4G/LTE connectivity. 4,000+ units installed across HDB estates.',
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: 'Software: Fusion TMS (LTMS)',
    description:
      'Multi-tenant monitoring platform supporting Town Councils, managing agents, lift companies, EMSU, and HDB simultaneously.',
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: 'AI: Predictive Diagnostic Models',
    description:
      'Analyzing vibration and operational data with greater than 83% fault prediction accuracy.',
  },
]

const decisions = [
  { bold: 'Non-intrusive installation:', text: ' no modification to existing lift controllers, no warranty impact' },
  { bold: 'Edge resilience:', text: ' lifts continue to be monitored even during internet outages' },
  { bold: 'Multi-organization architecture:', text: ' different user types see different dashboards and workflows' },
  { bold: 'Backwards compatible', text: ' with existing LMD 6000 fleet' },
]

const results = [
  {
    metric: 'Scale',
    detail:
      '10,000+ lifts across 4,000+ blocks — one of the largest IoT-based lift monitoring deployments globally',
  },
  {
    metric: 'Co-Owned IP',
    detail:
      'Technology IP jointly owned with HDB — a rare government endorsement of commercial technology',
  },
  {
    metric: 'National Recognition',
    detail:
      'NRF Cities of Tomorrow awardee — among the few NRF R&D projects to achieve full commercialization',
  },
  {
    metric: 'BCA Alignment',
    detail: "Platform designed for compliance with BCA's RM&D Code of Practice",
  },
  {
    metric: 'Foundation for AFOS',
    detail:
      'The HDB deployment validated the platform architecture that now powers the entire AFOS product portfolio',
  },
]

const related = [
  { kicker: 'Related Solution', title: 'Smart Vertical Transport', href: '/solutions/vertical-transport' },
  { kicker: 'Related Products', title: 'LTMS, LMD6000', href: '/products/fusion' },
  { kicker: 'Related Page', title: 'Why Softgrid', href: '/about' },
]

export default function HdbCaseStudyPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Case Studies', href: '/case-studies' }, { label: 'HDB' }]} />

      <CaseStudyHero
        overline="Public Sector / Vertical Transport"
        headline="Monitoring 10,000+ Lifts Across 4,000+ HDB Blocks"
        subheadline="How Softgrid's technology became the backbone of Singapore's public housing lift safety infrastructure."
        image="/images/background/bg4.jpg"
        logo="/images/logos/HDB.png"
        logoAlt="HDB"
      />

      <KeyNumbers items={keyNumbers} />

      <ContentBlock title="The Background" image="/images/background/bg10.jpg">
        <p>
          Singapore&apos;s Housing &amp; Development Board (HDB) manages the world&apos;s largest public housing programme, with over 1 million flats housing 80% of the population. The lift infrastructure serving these buildings — approximately 26,000+ lifts — requires continuous monitoring to ensure safety and service reliability.
        </p>
        <p>
          The existing monitoring system, based on legacy SCADA technology operational since 1984, needed modernization to support real-time diagnostics, predictive maintenance, and compliance with BCA&apos;s evolving regulatory requirements.
        </p>
      </ContentBlock>

      <ContentBlock title="The Solution" background="slate">
        <p>
          Softgrid was selected through the NRF Cities of Tomorrow R&amp;D Programme to co-develop with HDB a next-generation lift monitoring and diagnostic system.
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
        <h3 className="!mt-12 !mb-5 text-xl font-bold text-navy-900">Data Flow</h3>
        <HdbDeploymentDiagram />
      </ContentBlock>

      <ResultsTable rows={results} />

      <CustomerQuote
        quote="[Placeholder for customer testimonial from HDB or Town Council stakeholder — to be obtained]"
        attribution="HDB Stakeholder"
        logo="/images/logos/HDB.png"
        logoAlt="HDB"
      />

      <RelatedLinks items={related} />
    </>
  )
}
