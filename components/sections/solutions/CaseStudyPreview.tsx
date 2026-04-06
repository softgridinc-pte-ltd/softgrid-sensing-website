import { Button } from '@/components/ui/Button'

interface CaseStudyPreviewProps {
  label: string
  headline: string
  description?: string
  href: string
  buttonText?: string
}

export function CaseStudyPreview({
  label,
  headline,
  description,
  href,
  buttonText = 'Read Case Study',
}: CaseStudyPreviewProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
      {/* Cyan radial glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[700px] -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(31,153,197,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-12" data-animate>
        <div className="max-w-3xl">
          {/* Overline with gradient line */}
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-primary-400">
            <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-primary-400" />
            {label}
          </div>

          <h3 className="mb-5 text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white">
            {headline}
          </h3>

          {description && (
            <p className="mb-10 text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          )}

          <Button href={href} variant="secondary" colorScheme="dark">
            {buttonText} &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
