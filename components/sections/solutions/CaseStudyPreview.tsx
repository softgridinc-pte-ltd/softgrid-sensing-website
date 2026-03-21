import Link from 'next/link'

interface CaseStudyPreviewProps {
  label: string
  headline: string
  description?: string
  href: string
}

export function CaseStudyPreview({ label, headline, description, href }: CaseStudyPreviewProps): React.ReactElement {
  return (
    <section className="bg-navy-900 py-16 md:py-20 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(0,180,216,0.06) 0%, transparent 50%)' }}
      />

      <div className="max-w-[700px] mx-auto px-4 md:px-16 relative z-10" data-animate>
        {/* Label with gradient line */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
          <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">{label}</span>
        </div>

        <h3 className="text-3xl md:text-[40px] font-extrabold text-white mb-4 leading-[1.15] tracking-tight">
          {headline}
        </h3>

        {description && (
          <p className="text-[17px] leading-[1.7] text-slate-400 mb-8">{description}</p>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-2 border-2 border-white/30 text-white rounded-md px-9 py-3.5 font-semibold hover:border-white/50 transition-colors"
        >
          Read Case Study <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
