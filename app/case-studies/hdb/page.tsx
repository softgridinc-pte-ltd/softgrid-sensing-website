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
  title: 'HDB Smart Lift Intelligence — 10,000+ Lifts | Softgrid Sensing',
  description:
    "From a Cities of Tomorrow research grant to Singapore's largest AI-driven lift intelligence deployment — 10,000+ lifts monitored with AFOS at national scale.",
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
