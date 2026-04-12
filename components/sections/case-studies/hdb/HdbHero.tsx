'use client'

import Image from 'next/image'

import { HeroStatCounter } from './HeroStatCounter'

const stats = [
  { value: '10,000', suffix: '+', label: 'Lifts Live Islandwide' },
  { value: '50', suffix: '%', label: 'Faster Fault Response' },
  { value: 'BCA', label: 'Regulatory Sandbox Validated' },
]

export function HdbHero(): React.ReactElement {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28">
      {/* Background — LMD hardware photo */}
      <Image
        src="/images/cases/case10.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-40"
      />
      {/* Dark gradient overlay — dark left, transparent right to reveal photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl" data-animate>
          {/* Overline */}
          <div className="flex items-center gap-3.5 mb-8">
            <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary-300 to-cyan-400" />
            <span className="text-primary-300 text-sm font-bold uppercase tracking-[3px]">
              Public Sector / Vertical Transport
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
            Monitoring 10,000+ Lifts Across 4,000+ HDB Blocks
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-12">
            How Softgrid&apos;s technology became the backbone of Singapore&apos;s public housing lift safety infrastructure.
          </p>
        </div>

        {/* Stat counters */}
        <div className="flex flex-wrap gap-10 md:gap-14" data-animate>
          {stats.map((stat) => (
            <HeroStatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
