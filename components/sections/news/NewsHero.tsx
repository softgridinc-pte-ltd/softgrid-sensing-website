import Image from 'next/image'

import { CoBrandLockup } from './CoBrandLockup'

import type { NewsArticle } from '@/data/news'

interface NewsHeroProps {
  article: NewsArticle
}

function ViewfinderCorners(): React.ReactElement {
  const corner = 'absolute h-5 w-5 border-primary-400/80'
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -inset-2.5">
      <span className={`${corner} left-0 top-0 border-l-2 border-t-2 rounded-tl-md`} />
      <span className={`${corner} right-0 top-0 border-r-2 border-t-2 rounded-tr-md`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2 rounded-bl-md`} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2 rounded-br-md`} />
    </div>
  )
}

export function NewsHero({ article }: NewsHeroProps): React.ReactElement {
  const { heroImage } = article

  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="absolute inset-0 grid-pattern-masked" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 78% 45%, rgba(31,153,197,0.16) 0%, transparent 50%), radial-gradient(ellipse at 10% 100%, rgba(31,153,197,0.08) 0%, transparent 45%)',
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <div className="hero-entrance hero-entrance-1 mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary-400/40 bg-primary-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[2px] text-primary-300">
              {article.category}
            </span>
            <span className="h-px w-6 bg-primary-400/40" aria-hidden="true" />
            <time dateTime={article.datePublished} className="text-sm font-medium tracking-wide text-slate-300">
              {article.dateLabel}
            </time>
          </div>

          <h1 className="hero-entrance hero-entrance-2 mb-6 text-3xl font-extrabold leading-[1.16] tracking-tight text-white md:text-4xl lg:text-[42px]">
            {article.title}
          </h1>

          <p className="hero-entrance hero-entrance-3 mb-10 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {article.standfirst}
          </p>

          <div className="hero-entrance hero-entrance-4">
            <CoBrandLockup partner={article.partner} />
          </div>
        </div>

        <figure className="hero-entrance hero-entrance-3 relative mx-auto w-full max-w-xl">
          <div className="relative">
            <ViewfinderCorners />
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-navy-950/60 glow-primary">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
          <figcaption className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[2px] text-slate-400">
            <span className="whitespace-nowrap font-bold text-primary-400">Fig. 01</span>
            <span className="h-px w-5 flex-shrink-0 bg-slate-600" aria-hidden="true" />
            <span className="normal-case tracking-normal text-slate-300">{heroImage.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
