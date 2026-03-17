import Link from 'next/link'

interface CaseStudyPreviewProps {
  label: string
  headline: string
  description?: string
  href: string
}

export function CaseStudyPreview({ label, headline, description, href }: CaseStudyPreviewProps): React.ReactElement {
  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="bg-navy-900 border border-cyan-500/20 rounded-xl p-8 md:p-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">{label}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-4">{headline}</h3>
          {description && (
            <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
          )}
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Read Case Study <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
