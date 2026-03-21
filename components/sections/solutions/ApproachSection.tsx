interface ApproachStep {
  title: string
  description: string
  badge?: string
}

interface ApproachSectionProps {
  overline?: string
  headline?: string
  subtitle?: string
  steps: ApproachStep[]
}

export function ApproachSection({
  overline,
  headline = 'Our Approach',
  subtitle,
  steps,
}: ApproachSectionProps): React.ReactElement {
  return (
    <section className="bg-slate-50 py-20 md:py-[100px]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-16">
        <div data-animate className="text-center mb-14">
          {overline && (
            <span className="block text-xs font-bold uppercase tracking-[3px] text-cyan-600 mb-3">{overline}</span>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">{headline}</h2>
          {subtitle && <p className="text-[15px] text-slate-600 mt-3 max-w-2xl mx-auto leading-[1.7]">{subtitle}</p>}
        </div>

        <div data-animate-stagger className="max-w-[800px] mx-auto relative">
          {steps.map((step, i) => (
            <div key={step.title} data-animate className="relative flex gap-8 items-start" style={{ paddingBottom: i < steps.length - 1 ? '48px' : '0' }}>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-[52px] h-[52px] bg-cyan-500 rounded-full flex items-center justify-center text-white font-extrabold text-xl relative z-10">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-cyan-200 mt-2" />
                )}
              </div>

              <div className="pt-2.5">
                <h3 className="text-[22px] font-bold text-navy-900 mb-2.5">{step.title}</h3>
                <p className="text-[15px] leading-[1.8] text-slate-600">{step.description}</p>
                {step.badge && (
                  <span className="inline-block mt-3 text-xs font-bold uppercase tracking-[2px] text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
                    {step.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
