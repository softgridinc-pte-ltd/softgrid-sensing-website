import Image from 'next/image'
import Link from 'next/link'

import { getArticlePath } from '@/data/news'

import type { NewsArticle } from '@/data/news'

interface NewsCardProps {
  article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps): React.ReactElement {
  return (
    <Link
      href={getArticlePath(article)}
      data-animate
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2px]">
          <span className="text-primary-600">{article.category}</span>
          <time dateTime={article.datePublished} className="text-slate-500">
            {article.dateLabel}
          </time>
        </div>
        <h3 className="text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-primary-700">
          {article.title}
        </h3>
      </div>
    </Link>
  )
}
