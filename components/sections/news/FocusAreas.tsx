import Link from 'next/link'
import { ArrowRight, ArrowUpDown, Building2, Wrench } from 'lucide-react'

import type { FocusArea, FocusIcon, NewsArticle } from '@/data/news'

interface FocusAreasProps {
  article: NewsArticle
}

const icons: Record<FocusIcon, React.ComponentType<{ className?: string }>> = {
  lift: ArrowUpDown,
  building: Building2,
  operations: Wrench,
}

function FocusCard({ area, index }: { area: FocusArea; index: number }): React.ReactElement {
  const Icon = icons[area.icon]
  return (
    <Link
      href={area.href}
      data-animate
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg md:p-8"
    >
      <div className="mb-8 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-100 bg-primary-50 text-primary-600 transition-colors group-hover:border-primary-200 group-hover:bg-primary-100">
          <Icon className="h-6 w-6" />
        </div>
        <span className="font-heading text-sm font-semibold tabular-nums text-slate-300" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mb-3 text-xl font-bold leading-tight text-navy-900">{area.title}</h3>
      <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">{area.description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
        View solution
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

function ChipRow({ label, items, muted }: { label: string; items: string[]; muted?: boolean }): React.ReactElement {
  const chip = muted
    ? 'border-slate-300 bg-transparent text-slate-600'
    : 'border-primary-200 bg-primary-50 text-primary-700'
  return (
    <div className="grid gap-3 md:grid-cols-[220px_1fr] md:items-center md:gap-6">
      <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-slate-500">{label}</div>
      <ul className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item} className={`rounded-full border px-4 py-1.5 text-sm font-medium ${chip}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FocusAreas({ article }: FocusAreasProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="absolute inset-0 dot-pattern" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <div data-animate className="mb-12 max-w-2xl md:mb-14">
          <div className="mb-4 flex items-center gap-3.5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary-500" />
            <span className="text-sm font-bold uppercase tracking-[3px] text-primary-600">The Collaboration</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Areas of Exploration</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Initial collaboration areas, and the technologies both teams will explore across mutually agreed
            estate and facilities management projects.
          </p>
        </div>

        <div data-animate-stagger className="mb-14 grid gap-6 md:grid-cols-3">
          {article.focusAreas.map((area, i) => (
            <FocusCard key={area.title} area={area} index={i} />
          ))}
        </div>

        <div data-animate className="space-y-6 border-t border-slate-200 pt-10">
          <ChipRow label="Enabling technologies" items={article.technologies} />
          <ChipRow label="Where relevant" items={article.extendedCapabilities} muted />
        </div>
      </div>
    </section>
  )
}
