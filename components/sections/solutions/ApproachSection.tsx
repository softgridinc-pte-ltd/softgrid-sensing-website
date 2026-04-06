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
  accentColor?: string
}

export function ApproachSection({
  overline,
  headline = 'Our Approach',
  subtitle,
  steps,
  accentColor = '#1F99C5',
}: ApproachSectionProps): React.ReactElement {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div data-animate className="mb-14 max-w-3xl">
          {overline && (
            <div
              className="mb-4 text-xs font-bold uppercase tracking-[3px]"
              style={{ color: accentColor }}
            >
              {overline}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
            {headline}
          </h2>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base md:text-[17px] leading-[1.8] text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps */}
        <div data-animate className="relative mx-auto max-w-3xl">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1
            return (
              <div
                key={step.title}
                className={`relative grid grid-cols-[56px_1fr] gap-6 ${isLast ? '' : 'pb-12'}`}
              >
                {/* Number + connector line */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="z-10 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white shadow-md"
                    style={{ backgroundColor: accentColor }}
                  >
                    {i + 1}
                  </div>
                  {!isLast && (
                    <div
                      className="absolute left-1/2 top-14 -translate-x-1/2 h-[calc(100%-3.5rem)] w-px opacity-30"
                      style={{ backgroundColor: accentColor }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="mb-3 text-xl font-bold text-navy-900">{step.title}</h3>
                  <p className="text-base leading-[1.8] text-slate-600">{step.description}</p>
                  {step.badge && (
                    <span
                      className="mt-4 inline-flex items-center rounded-full border px-3.5 py-1 text-[11px] font-bold uppercase tracking-[2px]"
                      style={{
                        borderColor: `${accentColor}55`,
                        backgroundColor: `${accentColor}14`,
                        color: accentColor,
                      }}
                    >
                      {step.badge}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
