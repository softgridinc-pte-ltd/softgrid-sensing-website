import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { HdbHero } from '@/components/sections/case-studies/hdb/HdbHero'
import { HdbStakes } from '@/components/sections/case-studies/hdb/HdbStakes'
import { HdbSolution } from '@/components/sections/case-studies/hdb/HdbSolution'
import { HdbResults } from '@/components/sections/case-studies/hdb/HdbResults'
import { HdbJourney } from '@/components/sections/case-studies/hdb/HdbJourney'
import { HdbRecognition } from '@/components/sections/case-studies/hdb/HdbRecognition'
import { HdbClosingCta } from '@/components/sections/case-studies/hdb/HdbClosingCta'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HDB Smart Lift Intelligence — 10,000+ Lifts | Softgrid Sensing',
  description:
    "From a Cities of Tomorrow research grant to Singapore's largest AI-driven lift intelligence deployment — 10,000+ lifts monitored with AFOS at national scale.",
}

export default function HdbCaseStudyPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Case Studies', href: '/case-studies' }, { label: 'HDB Smart Lift Intelligence' }]} />
      <HdbHero />
      <HdbStakes />
      <HdbSolution />
      <HdbResults />
      <HdbJourney />
      <HdbRecognition />
      <HdbClosingCta />
    </>
  )
}
