const results = [
  {
    metric: 'Fault Response Time',
    direction: 'down' as const,
    value: '50%',
    explanation:
      'Predictive alerts replace reactive dispatch. Technicians arrive before residents call.',
  },
  {
    metric: 'Inspection Efficiency',
    direction: 'up' as const,
    value: '20%',
    explanation:
      'AI triages which lifts need human eyes. Manpower goes where it matters.',
  },
  {
    metric: 'Overall Lift Availability',
    direction: 'up' as const,
    value: '10%',
    explanation:
      'Fewer breakdowns. Faster recovery. Millions of uninterrupted rides.',
  },
]

function DirectionArrow({ direction }: { direction: 'up' | 'down' }): React.ReactElement {
  return (
    <span className={direction === 'down' ? 'text-emerald-400' : 'text-cyan-300'}>
      {direction === 'down' ? '\u2193' : '\u2191'}
    </span>
  )
}

export function HdbResults(): React.ReactElement {
  return (
    <section className="bg-navy-900 py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(31,153,197,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div data-animate className="mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
            What Changed
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            The Results
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
            Results from BCA-validated field trials and post-deployment operational data.
          </p>
        </div>

        {/* Three result cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-animate-stagger>
          {results.map((result) => (
            <div
              key={result.metric}
              data-animate="scale"
              className="bg-navy-800 border border-navy-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-4">
                {result.metric}
              </p>
              <div className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading">
                <DirectionArrow direction={result.direction} />{' '}
                {result.value}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {result.explanation}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
