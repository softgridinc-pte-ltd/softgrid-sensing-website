import Image from 'next/image'
import Link from 'next/link'

import { featuredStudy } from '@/data/caseStudies'
import { Button } from '@/components/ui/Button'

export function FeaturedCaseStudy(): React.ReactElement {
  const study = featuredStudy

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cases/hdb.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-40"
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/70 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div>
          <div data-animate="slide-left">
            {/* Overline */}
            <div className="flex items-center gap-3.5 mb-8">
              <span className="w-10 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#6CBBD9] to-[#22D3EE]" />
              <span
                className="font-heading text-sm font-bold uppercase tracking-[3.5px]"
                style={{
                  background: 'linear-gradient(90deg, #6CBBD9, #22D3EE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 24px rgba(34, 211, 238, 0.3)',
                }}
              >
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
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {study.summary}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mb-10" data-animate-stagger>
              {study.stats.map((stat) => (
                <div key={stat.label} data-animate>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Products */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="text-xs text-slate-400 mr-1">Products:</span>
              {study.products.map((product) => (
                <span
                  key={product}
                  className="border border-navy-600 text-slate-300 text-xs rounded-full px-3 py-1"
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
        </div>
      </div>
    </section>
  )
}
