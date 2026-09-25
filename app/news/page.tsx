import { Mail } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FeaturedNewsCard } from '@/components/sections/news/FeaturedNewsCard'
import { NewsCard } from '@/components/sections/news/NewsCard'
import { CTASection } from '@/components/sections/CTASection'
import { getAllArticles } from '@/data/news'

import type { Metadata } from 'next'

const MEDIA_EMAIL = 'info@softgridsensing.com'

export const metadata: Metadata = {
  title: 'Newsroom — Softgrid Announcements & Partnerships',
  description:
    'Press releases, partnerships and milestones from Softgrid Sensing, the Singapore company behind AFOS, the AI-Driven Facility Operating System.',
  alternates: { canonical: '/news' },
}

export default function NewsroomPage(): React.ReactElement {
  const [latest, ...earlier] = getAllArticles()

  return (
    <>
      <Breadcrumb items={[{ label: 'Newsroom' }]} />

      <section className="relative overflow-hidden bg-navy-950 pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="absolute inset-0 grid-pattern-masked" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 75% 40%, rgba(31,153,197,0.14) 0%, transparent 55%)' }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
          <div className="hero-entrance hero-entrance-1 mb-6 flex items-center gap-3.5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary-300" />
            <span className="text-sm font-bold uppercase tracking-[3px] text-primary-300">Newsroom</span>
          </div>
          <h1 className="hero-entrance hero-entrance-2 mb-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
            Announcements, Partnerships and Milestones
          </h1>
          <p className="hero-entrance hero-entrance-3 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            The latest from Softgrid as we build the AI-Driven Facility Operating System for Singapore&apos;s
            estates, buildings and critical infrastructure.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6 md:px-12">
          {latest && <FeaturedNewsCard article={latest} />}

          {earlier.length > 0 && (
            <div data-animate-stagger className="grid gap-6 md:grid-cols-3">
              {earlier.map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          )}

          <div
            data-animate
            className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 md:flex-row md:items-center md:justify-between md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-primary-100 bg-primary-50 text-primary-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="mb-1 text-lg font-bold text-navy-900">Media enquiries</h2>
                <p className="text-sm text-slate-600">
                  For interviews, images or press information, contact our corporate communications team.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${MEDIA_EMAIL}`}
              className="text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              {MEDIA_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  )
}
