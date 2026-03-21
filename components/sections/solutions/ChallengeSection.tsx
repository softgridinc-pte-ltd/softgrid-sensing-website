interface Challenge {
  title: string
  description: string
  indicator?: 'red' | 'amber' | 'teal'
}

interface ChallengeSectionProps {
  overline?: string
  headline?: string
  subtitle?: string
  challenges: Challenge[]
}

const indicatorStyles: Record<string, string> = {
  red: 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]',
  amber: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]',
  teal: 'bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.3)]',
}

export function ChallengeSection({
  overline,
  headline = 'The Challenge',
  subtitle,
  challenges,
}: ChallengeSectionProps): React.ReactElement {
  return (
    <section className="bg-white py-20 md:py-[100px]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-16">
        <div data-animate className="text-center mb-14">
          {overline && (
            <span className="block text-xs font-bold uppercase tracking-[3px] text-slate-500 mb-3">{overline}</span>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">{headline}</h2>
          {subtitle && <p className="text-[15px] text-slate-600 mt-3 max-w-2xl mx-auto leading-[1.7]">{subtitle}</p>}
        </div>

        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              data-animate
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
            >
              <div className={`w-2.5 h-2.5 rounded-full mb-4 ${indicatorStyles[challenge.indicator ?? 'red']}`} />
              <h3 className="text-xl font-bold text-navy-900 mb-2.5">{challenge.title}</h3>
              <p className="text-[15px] leading-[1.7] text-slate-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
