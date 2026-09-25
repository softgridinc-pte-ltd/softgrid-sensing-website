import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import type { Boilerplate } from '@/data/news'

interface BoilerplatesProps {
  items: Boilerplate[]
}

function BoilerplateLink({ link }: { link: NonNullable<Boilerplate['link']> }): React.ReactElement {
  const className =
    'group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700'
  const isExternal = link.href.startsWith('http')

  if (isExternal) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

export function Boilerplates({ items }: BoilerplatesProps): React.ReactElement {
  return (
    <section className="bg-white py-20 md:py-24">
      <div data-animate-stagger className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12">
        {items.map((item, i) => (
          <div
            key={item.heading}
            data-animate
            className={`border-t-2 pt-7 ${i === 0 ? 'border-primary-500' : 'border-accent-500'}`}
          >
            <h2 className="mb-5 text-xl font-bold text-navy-900 md:text-2xl">{item.heading}</h2>
            <div className="space-y-4 text-[15px] leading-[1.8] text-slate-600">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            {item.link && <BoilerplateLink link={item.link} />}
          </div>
        ))}
      </div>
    </section>
  )
}
