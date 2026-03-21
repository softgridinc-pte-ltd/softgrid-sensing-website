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
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4 md:px-16">
        <div data-animate className="text-center mb-10">
          <span className="block text-xs font-bold uppercase tracking-[2px] text-cyan-600 mb-3">{overline}</span>
          {headline && <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">{headline}</h2>}
          {subtitle && <p className="text-[15px] text-slate-600 mt-3 max-w-2xl mx-auto leading-[1.7]">{subtitle}</p>}
        </div>

        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              data-animate
              className="bg-white border border-slate-200 rounded-2xl p-8"
            >
              <h3 className="text-[17px] font-bold text-navy-900 mb-1.5">{benefit.title}</h3>
              <p className="text-sm leading-[1.7] text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
