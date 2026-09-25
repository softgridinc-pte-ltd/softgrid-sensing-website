import { ArticleSidebar } from './ArticleSidebar'
import { PullQuote } from './PullQuote'

import type { NewsArticle, NewsBlock } from '@/data/news'

interface ArticleBodyProps {
  article: NewsArticle
  url: string
}

function renderBlock(block: NewsBlock, index: number, dateline: string): React.ReactElement {
  if (block.type === 'quote') {
    return <PullQuote key={`quote-${block.quote.name}`} quote={block.quote} />
  }

  if (index === 0) {
    return (
      <p key="lead" className="text-lg leading-[1.75] text-slate-700 md:text-xl">
        <span className="font-bold uppercase tracking-wide text-navy-900">{dateline}</span>
        <span className="text-slate-400"> &mdash; </span>
        {block.text}
      </p>
    )
  }

  return (
    <p key={`p-${index}`} className="mt-6 text-base leading-[1.8] text-slate-600 md:text-[17px]">
      {block.text}
    </p>
  )
}

export function ArticleBody({ article, url }: ArticleBodyProps): React.ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:px-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20">
        <article className="max-w-[68ch]">
          {article.body.map((block, i) => renderBlock(block, i, article.dateline))}
        </article>
        <ArticleSidebar article={article} url={url} />
      </div>
    </section>
  )
}
