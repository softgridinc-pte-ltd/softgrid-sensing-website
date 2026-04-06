import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export interface RelatedLink {
  kicker: string
  title: string
  href: string
}

interface RelatedLinksProps {
  items: RelatedLink[]
}

export function RelatedLinks({ items }: RelatedLinksProps): React.ReactElement {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="mb-10 text-2xl md:text-3xl font-bold text-navy-900">Related</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              data-animate
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <div>
                <div className="mb-3 text-xs font-bold uppercase tracking-[2px] text-primary-600">
                  {item.kicker}
                </div>
                <div className="mb-6 text-lg font-bold leading-tight text-navy-900 transition-colors group-hover:text-primary-700">
                  {item.title}
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
