import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { getArticlePath } from '@/data/news'

import type { NewsArticle } from '@/data/news'

interface FeaturedNewsCardProps {
  article: NewsArticle
}

export function FeaturedNewsCard({ article }: FeaturedNewsCardProps): React.ReactElement {
  return (
    <Link
      href={getArticlePath(article)}
      data-animate
      className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl lg:grid-cols-[1.1fr_1fr]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-900 lg:aspect-auto lg:min-h-[420px]">
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute left-5 top-5 rounded-full bg-navy-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[2px] text-primary-300 backdrop-blur-sm">
          Latest
        </div>
      </div>

      <div className="flex flex-col p-7 md:p-10">
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[2px]">
          <span className="text-primary-600">{article.category}</span>
          <span className="h-px w-5 bg-slate-300" aria-hidden="true" />
          <time dateTime={article.datePublished} className="text-slate-500">
            {article.dateLabel}
          </time>
        </div>
        <h2 className="mb-5 text-2xl font-bold leading-snug tracking-tight text-navy-900 transition-colors group-hover:text-primary-700 md:text-[28px]">
          {article.title}
        </h2>
        <p className="mb-8 flex-1 text-base leading-relaxed text-slate-600">{article.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
          Read the announcement
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
