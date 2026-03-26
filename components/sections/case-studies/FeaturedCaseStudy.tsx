import Link from 'next/link'

import { featuredStudy } from '@/data/caseStudies'
import { Button } from '@/components/ui/Button'

function DotMatrix(): React.ReactElement {
  const rows = 8
  const cols = 6
  const accentIndices = new Set([5, 14, 27, 35, 42])

  return (
    <div
      className="hidden lg:grid gap-4"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      data-animate="fade"
    >
      {Array.from({ length: rows * cols }, (_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full transition-colors duration-700 ${
            accentIndices.has(i)
              ? 'bg-primary-500/60'
              : 'bg-navy-700/50'
          }`}
        />
      ))}
    </div>
  )
}

export function FeaturedCaseStudy(): React.ReactElement {
  const study = featuredStudy

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950 to-navy-800" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div data-animate="slide-left">
            {/* Overline */}
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-400 text-xs font-bold uppercase tracking-[3px]">
                Featured Case Study
              </span>
            </div>

            {/* Client + Industry */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-slate-300">{study.client}</span>
              <span className="bg-primary-500/10 text-primary-400 text-xs rounded-full px-3 py-1">
                {study.industry}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              {study.headline}
            </h1>

            {/* Summary */}
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              {study.summary}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mb-10" data-animate-stagger>
              {study.stats.map((stat) => (
                <div key={stat.label} data-animate>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Products */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="text-xs text-slate-500 mr-1">Products:</span>
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
            <Button href={study.href} variant="primary" className="min-w-[180px]">
              Read Full Case Study
            </Button>
          </div>

          {/* Right: Decorative dot matrix */}
          <div className="hidden lg:flex items-center justify-center">
            <DotMatrix />
          </div>
        </div>
      </div>
    </section>
  )
}
