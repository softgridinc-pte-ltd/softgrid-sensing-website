import type { NewsFact } from '@/data/news'

interface KeyFactsProps {
  facts: NewsFact[]
}

export function KeyFacts({ facts }: KeyFactsProps): React.ReactElement {
  return (
    <section className="border-y border-navy-700/60 bg-navy-900">
      <dl
        data-animate
        className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:px-12 lg:grid-cols-4"
      >
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            className={`py-7 pr-4 md:py-9 ${i > 0 ? 'lg:border-l lg:border-navy-700/60 lg:pl-8' : ''} ${
              i % 2 === 1 ? 'border-l border-navy-700/60 pl-5 lg:pl-8' : ''
            } ${i >= 2 ? 'border-t border-navy-700/60 lg:border-t-0' : ''}`}
          >
            <dt className="mb-2 text-[11px] font-bold uppercase tracking-[2.5px] text-primary-400">
              {fact.label}
            </dt>
            <dd className="font-heading text-base font-semibold leading-snug text-white md:text-lg">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
