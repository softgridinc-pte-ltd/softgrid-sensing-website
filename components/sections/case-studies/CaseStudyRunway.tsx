import Link from 'next/link'

import { secondaryStudies } from '@/data/caseStudies'

import type { CaseStudy } from '@/data/caseStudies'

const accentBorderMap: Record<CaseStudy['accentColor'], string> = {
  primary: 'border-l-primary-500',
  amber: 'border-l-amber-500',
  slate: 'border-l-slate-500',
}

const accentTextMap: Record<CaseStudy['accentColor'], string> = {
  primary: 'text-primary-400',
  amber: 'text-amber-400',
  slate: 'text-slate-400',
}

function RunwayCard({ study }: { study: CaseStudy }): React.ReactElement {
  return (
    <div
      className={`group h-full min-w-[340px] md:min-w-[380px] lg:min-w-0 snap-start flex-shrink-0 lg:flex-shrink bg-navy-800 border border-navy-700 ${accentBorderMap[study.accentColor]} border-l-4 rounded-xl p-7 hover:border-primary-500/30 transition-all duration-300 flex flex-col`}
    >
      {/* Client + Industry */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm font-semibold text-white">{study.client}</span>
        <span className="bg-primary-500/10 text-primary-400 text-xs rounded-full px-3 py-1">
          {study.industry}
        </span>
      </div>

      {/* Headline */}
      <h3 className="text-xl font-bold text-white leading-snug mb-3">
        {study.headline}
      </h3>

      {/* Summary — clamped */}
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6">
        {study.summary}
      </p>

      {/* Hero stat */}
      <div className="mt-auto mb-6 pt-5 border-t border-navy-700">
        <div className={`text-3xl font-bold ${accentTextMap[study.accentColor]}`}>
          {study.heroStat.value}
        </div>
        <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
          {study.heroStat.label}
        </div>
      </div>

      {/* CTA */}
      <Link
        href={study.href}
        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors duration-200"
      >
        Read Case Study
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>
    </div>
  )
}

export function CaseStudyRunway(): React.ReactElement {
  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header with extending line */}
        <div className="flex items-center gap-5 mb-12" data-animate>
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
            More Case Studies
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-navy-600 to-transparent" />
        </div>

        {/* Runway container */}
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible pb-4 lg:pb-0 scrollbar-thin"
          data-animate-stagger
        >
          {secondaryStudies.map((study) => (
            <div key={study.client} data-animate className="h-full">
              <RunwayCard study={study} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
