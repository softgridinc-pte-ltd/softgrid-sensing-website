'use client'

import Link from 'next/link'
import { ScrollRevealItem } from '@/components/ui/ScrollRevealItem'

interface Stat {
  value: string
  label: string
}

interface CaseStudy {
  client: string
  industry: string
  headline: string
  summary: string
  stats: Stat[]
  products: string[]
  href: string
}

const caseStudies: CaseStudy[] = [
  {
    client: 'Housing & Development Board (HDB)',
    industry: 'Public Housing',
    headline: 'Transforming Lift Monitoring at National Scale',
    summary:
      'Softgrid deployed its Lift Telemonitoring System across HDB estates, enabling 24/7 remote monitoring of over 10,000 lifts — replacing legacy phone-line systems with smart IoT acquisition.',
    stats: [
      { value: '10,000+', label: 'Lifts Monitored' },
      { value: '4,000+', label: 'HDB Blocks' },
      { value: '24/7', label: 'Remote Monitoring' },
    ],
    products: ['LMD 6000', 'LTMS'],
    href: '/case-studies/hdb',
  },
  {
    client: 'Chevalier Group',
    industry: 'Lift Servicing',
    headline: 'Achieving BCA Compliance for Private Sector Lifts',
    summary:
      'Chevalier partnered with Softgrid to implement BCA-certified Remote Monitoring & Diagnostics, enabling condition-based maintenance and automated compliance reporting across their managed portfolio.',
    stats: [
      { value: 'BCA', label: 'Sandbox Certified' },
      { value: 'RM&D', label: 'Compliant' },
      { value: 'Predictive', label: 'Maintenance Enabled' },
    ],
    products: ['LMD Series', 'RM&D System'],
    href: '/case-studies/chevalier',
  },
  {
    client: 'CPG FM',
    industry: 'Facility Operations',
    headline: 'AI-Powered Facility Management for Singapore\u2019s Properties',
    summary:
      'CPG FM deployed IRIS CMMS and Athena AI knowledge base to digitize facility operations — replacing paper work orders with a full digital lifecycle and AI-powered decision support.',
    stats: [
      { value: 'IRIS', label: 'CMMS Deployed' },
      { value: 'Athena', label: 'AI Knowledge Base' },
      { value: 'Digital', label: 'Work Order Lifecycle' },
    ],
    products: ['IRIS', 'Athena'],
    href: '/case-studies/cpg-fm',
  },
  {
    client: 'National Parks Board (NParks)',
    industry: 'Infrastructure & Environmental',
    headline: 'Monthly Forest Cover Monitoring Across Singapore',
    summary:
      'Automated satellite-based monitoring of 26 ecological areas — AI-powered image classification at 4.76m resolution, fully automated with zero manual processing.',
    stats: [
      { value: '26', label: 'Ecological Areas' },
      { value: '4.76m', label: 'Resolution' },
      { value: 'Monthly', label: 'Monitoring Cycle' },
    ],
    products: ['Fusion RSA'],
    href: '/case-studies/nparks',
  },
]

function CaseStudyCard({ study }: { study: CaseStudy }): React.ReactElement {
  return (
    <div className="group bg-navy-800 border border-navy-700 rounded-xl p-8 hover:border-cyan-500/30">
      <div className="space-y-5">
        {/* Client + industry */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-white">{study.client}</span>
          <span className="bg-cyan-500/10 text-cyan-400 text-xs rounded-full px-3 py-1">
            {study.industry}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
          {study.headline}
        </h3>

        {/* Summary */}
        <p className="text-slate-400 leading-relaxed">{study.summary}</p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 pt-2">
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-cyan-500">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Products used */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-500 mr-1">Products used:</span>
          {study.products.map((product) => (
            <span
              key={product}
              className="border border-navy-600 text-slate-400 text-xs rounded-full px-3 py-1"
            >
              {product}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={study.href}
          className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
        >
          Read Case Study
          <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </div>
  )
}

export function CaseStudyCardsSection(): React.ReactElement {
  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <ScrollRevealItem key={study.client}>
              <CaseStudyCard study={study} />
            </ScrollRevealItem>
          ))}
        </div>
      </div>
    </section>
  )
}
