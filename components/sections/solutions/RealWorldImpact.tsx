import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { caseStudies } from '@/data/caseStudies'

export function RealWorldImpact(): React.ReactElement {
  const featured = caseStudies.find((s) => s.featured) ?? caseStudies[0]
  const secondary = caseStudies.filter((s) => !s.featured).slice(0, 3)

  return (
    <section className="bg-slate-200 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 max-w-2xl" data-animate>
          <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-600">
            Real-World Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
            Solutions deployed where they matter
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]" data-animate-stagger>
          {/* Featured */}
          <Link
            href={featured.href}
            data-animate
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
              <Image
                src={featured.image}
                alt={featured.client}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
                Featured Case Study
              </div>
            </div>
            <div className="flex flex-1 flex-col p-8 md:p-10">
              <div className="mb-3 text-xs font-bold uppercase tracking-[2px] text-primary-600">
                {featured.client}
              </div>
              <h3 className="mb-4 text-2xl font-bold leading-snug text-navy-900 transition-colors group-hover:text-primary-700">
                {featured.headline}
              </h3>
              <p className="mb-6 flex-1 text-base leading-relaxed text-slate-600">
                {featured.summary}
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                <div>
                  <div className="text-3xl font-bold text-primary-600">{featured.heroStat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    {featured.heroStat.label}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* Secondary list */}
          <div className="flex flex-col gap-5">
            {secondary.map((study) => (
              <Link
                key={study.client}
                href={study.href}
                data-animate
                className="group flex gap-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg"
              >
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-200">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-[1.5px] text-primary-600">
                      {study.industry}
                    </div>
                    <div className="text-sm font-bold leading-snug text-navy-900 transition-colors group-hover:text-primary-700 line-clamp-2">
                      {study.headline}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-primary-600">
                    {study.heroStat.value}
                    <span className="text-slate-400">·</span>
                    <span className="font-normal text-slate-500">{study.heroStat.label}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
