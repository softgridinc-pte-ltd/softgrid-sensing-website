import Image from 'next/image'
import { Satellite, BrainCircuit, Zap } from 'lucide-react'

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
  title: 'NParks Forest Monitoring — AI Satellite Analysis | Softgrid Sensing',
  description:
    'AI-powered satellite image analysis for national-scale environmental monitoring — monthly forest cover monitoring across Singapore.',
}

const keyNumbers = [
  { value: '26', label: 'Ecological Areas' },
  { value: '4.76m', label: 'Spatial Resolution' },
  { value: 'Monthly', label: 'Monitoring Cycles', hasCyan: true },
  { value: 'Zero', label: 'Manual Processing' },
]

const deployed = [
  {
    icon: <Satellite className="h-6 w-6" />,
    title: 'Fusion RSA — Satellite Pipeline',
    description:
      'Automated pipeline from PlanetScope satellite data acquisition through spectral analysis, cloud detection, and AI classification to decision-ready reports.',
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: 'CNN Classification Model',
    description:
      'TensorFlow/Keras CNN with 21-dimensional feature input for forest, non-forest, water, and cloud classification — trained on Singapore-specific vegetation signatures.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'End-to-End Automation',
    description:
      'Fully automated monthly pipeline — satellite data, cloud detection, spectral analysis, CNN classification, change detection, and report generation with zero manual steps.',
  },
]

const results = [
  { metric: 'National Coverage', detail: 'All of Singapore monitored monthly at 4.76m resolution' },
  { metric: 'Detection Speed', detail: 'Change detection latency reduced from months to ~5 days' },
  { metric: 'Automated Pipeline', detail: 'Zero manual processing — raw satellite data to decision-ready reports' },
  { metric: 'Resolution', detail: 'Captures forest patches as small as 0.5 hectares' },
]

const related = [
  { kicker: 'Solution', title: 'Infrastructure & Environmental', href: '/solutions/infrastructure-environmental' },
  { kicker: 'Product', title: 'Fusion RSA', href: '/products/fusion' },
  { kicker: 'Case Study', title: 'CPG FM — AI Facility Management', href: '/case-studies/cpg-fm' },
]

export default function NparksCaseStudyPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Case Studies', href: '/case-studies' }, { label: 'NParks' }]} />

      <CaseStudyHero
        overline="Infrastructure & Environmental"
        headline="Monthly Forest Cover Monitoring Across Singapore"
        subheadline="AI-powered satellite image analysis for national-scale environmental monitoring — automated change detection replacing labor-intensive manual surveys."
        image="/images/background/bg2.jpg"
        logo="/images/logos/NPARKS.png"
        logoAlt="NParks"
      />

      <KeyNumbers items={keyNumbers} />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid items-start gap-10 md:gap-16 lg:grid-cols-[1.2fr_1fr]" data-animate>
            <div>
              <h2 className="mb-8 text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
                Background
              </h2>
              <div className="space-y-5 text-base md:text-[17px] leading-[1.8] text-slate-600">
                <p>
                  Singapore&apos;s National Parks Board (NParks) is responsible for monitoring and protecting the city-state&apos;s green cover — from nature reserves and parks to roadside trees and mangroves. Understanding changes in forest cover is critical for urban planning, conservation, and climate resilience.
                </p>
                <p>
                  Traditional monitoring relied on labor-intensive manual surveys and periodic aerial photography — expensive, slow, and unable to provide the monthly cadence required for timely intervention.
                </p>
                <h3 className="!mt-10 !mb-4 text-xl font-bold text-navy-900">The Challenge</h3>
                <p>
                  NParks needed a system that could automatically monitor 26 ecological areas at high spatial resolution on a monthly basis — detecting changes in forest cover, identifying illegal clearing, and generating decision-ready reports without manual intervention.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-full overflow-hidden shadow-lg">
                <Image
                  src="/images/cases/case5.png"
                  alt="NParks forest cover monitoring"
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative w-full overflow-hidden shadow-lg">
                <Image
                  src="/images/cases/case6.png"
                  alt="NParks forest cover analysis"
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentBlock title="What We Deployed" background="slate">
        <p>
          Softgrid deployed Fusion RSA — an automated pipeline from satellite data acquisition through AI classification to report generation. The system processes PlanetScope satellite imagery at 4.76m resolution using a custom CNN model.
        </p>
        <div className="!mt-10">
          <DeployedItems items={deployed} />
        </div>
      </ContentBlock>

      <ResultsTable rows={results} />

      <CustomerQuote
        quote="This deployment demonstrates that the AFOS platform is scale-invariant. The same four engines that monitor a lift motor's vibration also process satellite imagery across an entire country."
        attribution="NParks / Softgrid Engineering"
        logo="/images/logos/NPARKS.png"
        logoAlt="NParks"
      />

      <RelatedLinks items={related} />
    </>
  )
}
