interface Benefit {
  title: string
  description: string
}

interface BenefitsSectionProps {
  benefits: Benefit[]
}

export function BenefitsSection({ benefits }: BenefitsSectionProps): React.ReactElement {
  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div data-animate className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">Key Benefits</span>
        </div>

        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              data-animate
              className="bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-cyan-500/50"
            >
              <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
