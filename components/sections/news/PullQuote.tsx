import { Quote } from 'lucide-react'

import type { NewsQuote } from '@/data/news'

interface PullQuoteProps {
  quote: NewsQuote
}

export function PullQuote({ quote }: PullQuoteProps): React.ReactElement {
  const accent = quote.isPartner
    ? { border: 'border-accent-500', icon: 'text-accent-500/25', bar: 'bg-accent-500' }
    : { border: 'border-primary-500', icon: 'text-primary-500/25', bar: 'bg-primary-500' }

  return (
    <figure data-animate className="relative my-12 md:my-14">
      <Quote
        aria-hidden="true"
        className={`absolute -top-7 left-4 h-12 w-12 -scale-x-100 ${accent.icon}`}
        fill="currentColor"
        strokeWidth={0}
      />
      <blockquote
        className={`relative border-l-2 ${accent.border} pl-6 pt-5 md:pl-9`}
      >
        <p className="font-heading text-lg font-normal leading-[1.7] text-navy-800 md:text-xl">
          &ldquo;{quote.text}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 pl-6 md:pl-9">
        <span className={`h-px w-6 ${accent.bar}`} aria-hidden="true" />
        <span className="text-sm">
          <span className="font-bold text-navy-900">{quote.name}</span>
          <span className="text-slate-500">
            , {quote.title}, {quote.organization}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
