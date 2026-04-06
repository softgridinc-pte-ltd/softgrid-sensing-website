interface Benefit {
  title: string
  description: string
}

interface BenefitsSectionProps {
  overline?: string
  headline?: string
  subtitle?: string
  benefits: Benefit[]
}

export function BenefitsSection({
  overline = 'Key Benefits',
  headline,
  subtitle,
  benefits,
}: BenefitsSectionProps): React.ReactElement {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          {/* Sticky header */}
          <div className="lg:sticky lg:top-28 lg:self-start" data-animate>
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-primary-600">
              <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-primary-600" />
              {overline}
            </div>
            {headline && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-navy-900">
                {headline}
              </h2>
            )}
            {subtitle && (
              <p className="mt-6 text-base md:text-[17px] leading-[1.8] text-slate-600">
                {subtitle}
              </p>
            )}
          </div>

          {/* Divided benefit list */}
          <div data-animate-stagger>
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                data-animate
                className={`group flex items-start gap-6 py-8 transition-colors duration-300 ${
                  i === 0 ? 'pt-0' : 'border-t border-slate-200'
                }`}
              >
                {/* Cyan accent line */}
                <span className="mt-[14px] h-px w-8 flex-shrink-0 bg-primary-500 transition-all duration-500 group-hover:w-12" aria-hidden />

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-navy-900 transition-colors group-hover:text-primary-700">
                    {benefit.title}
                  </h3>
                  <p className="text-base leading-[1.8] text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
