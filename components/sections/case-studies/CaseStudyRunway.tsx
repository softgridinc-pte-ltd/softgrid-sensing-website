import { secondaryStudies } from '@/data/caseStudies'
import { ImageCard } from '@/components/ui/ImageCard'

export function CaseStudyRunway(): React.ReactElement {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header with extending line */}
        <div className="flex items-center gap-5 mb-12" data-animate>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 whitespace-nowrap">
            More Case Studies
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
        </div>

        <div
          data-animate-stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {secondaryStudies.map((study) => (
            <div key={study.client} data-animate="scale" className="h-full">
              <ImageCard
                image={study.image}
                kicker={study.industry}
                title={study.headline}
                description={study.summary}
                href={study.href}
                ctaLabel="Read case study"
                footerStat={study.heroStat}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
