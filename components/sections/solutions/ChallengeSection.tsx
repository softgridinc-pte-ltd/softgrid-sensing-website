interface Challenge {
  title: string
  description: string
}

interface ChallengeSectionProps {
  overline?: string
  headline?: string
  subtitle?: string
  challenges: Challenge[]
}

export function ChallengeSection({
  overline,
  headline = 'The Challenge',
  subtitle,
  challenges,
}: ChallengeSectionProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[700px] -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(31,153,197,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 max-w-3xl" data-animate>
          {overline && (
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-primary-400">
              <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-primary-400" />
              {overline}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
            {headline}
          </h2>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
              {subtitle}
            </p>
          )}
        </div>

        {/* Numbered challenge list */}
        <div
          data-animate-stagger
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14"
        >
          {challenges.map((challenge, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <div
                key={challenge.title}
                data-animate
                className="group relative border-t border-white/10 pt-8"
              >
                {/* Cyan accent that grows on hover */}
                <span className="absolute left-0 top-0 h-px w-12 bg-primary-400 transition-all duration-500 group-hover:w-24" />

                <div className="flex items-start gap-7">
                  {/* Number */}
                  <div className="flex-shrink-0 text-5xl md:text-6xl font-light leading-none text-primary-400/90 tabular-nums">
                    {num}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 pt-1">
                    <h3 className="mb-4 text-xl md:text-2xl font-bold leading-tight text-white">
                      {challenge.title}
                    </h3>
                    <p className="text-base leading-[1.8] text-slate-300">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
