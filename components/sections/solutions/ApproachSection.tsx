interface ApproachStep {
  title: string
  description: string
}

interface ApproachSectionProps {
  title?: string
  subtitle?: string
  steps: ApproachStep[]
}

export function ApproachSection({
  title = 'Our Approach',
  subtitle,
  steps,
}: ApproachSectionProps): React.ReactElement {
  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div data-animate className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">{title}</span>
          {subtitle && <p className="text-lg text-slate-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              data-animate
              className="relative bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-cyan-500/50"
            >
              <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-cyan-400 text-sm font-bold">{i + 1}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
