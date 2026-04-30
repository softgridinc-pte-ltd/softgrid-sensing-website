import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { HdbOverview } from '@/components/sections/case-studies/hdb/HdbOverview'
import { HdbSolution } from '@/components/sections/case-studies/hdb/HdbSolution'
import { HdbResults } from '@/components/sections/case-studies/hdb/HdbResults'
import { HdbJourney } from '@/components/sections/case-studies/hdb/HdbJourney'
import { HdbRecognition } from '@/components/sections/case-studies/hdb/HdbRecognition'
import { RelatedLinks } from '@/components/sections/case-studies/RelatedLinks'

import type { Metadata } from 'next'

const related = [
  { kicker: 'Related Solution', title: 'Smart Vertical Transport', href: '/solutions/vertical-transport' },
  { kicker: 'Related Products', title: 'LTMS, LMD6000', href: '/products/fusion' },
  { kicker: 'Related Page', title: 'Why Softgrid', href: '/about' },
]

export const metadata: Metadata = {
  title: 'HDB Lift Monitoring — 10,000+ Lifts AFOS Deployment | Softgrid',
  description:
    "Singapore's largest AI lift remote monitoring deployment — 10,000+ HDB lifts monitored with AFOS. From Cities of Tomorrow (NRF) research grant to national-scale rollout.",
  alternates: { canonical: '/case-studies/hdb' },
}

export default function HdbCaseStudyPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Case Studies', href: '/case-studies' }, { label: 'HDB Smart Lift Intelligence' }]} />

      <HdbOverview />
      <HdbRecognition />
      <HdbSolution />
      <HdbResults />
      <HdbJourney />
      <RelatedLinks items={related} />
    </>
  )
}
