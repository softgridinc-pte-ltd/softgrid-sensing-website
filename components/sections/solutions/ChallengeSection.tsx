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
  overlineColor?: string
}

const indicatorStyles: Record<string, React.CSSProperties> = {
  red: { background: '#EF4444', boxShadow: '0 0 8px rgba(239,68,68,0.3)' },
  amber: { background: '#F59E0B', boxShadow: '0 0 8px rgba(245,158,11,0.3)' },
  teal: { background: '#14B8A6', boxShadow: '0 0 8px rgba(20,184,166,0.3)' },
}

export function ChallengeSection({
  overline,
  headline = 'The Challenge',
  subtitle,
  challenges,
  overlineColor = '#64748B',
}: ChallengeSectionProps): React.ReactElement {
  return (
    <section style={{ padding: '100px 64px', background: '#FFFFFF' }}>
      <div data-animate style={{ textAlign: 'center', marginBottom: 56 }}>
        {overline && (
          <span
            style={{
              display: 'block',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 3,
              color: overlineColor,
              marginBottom: 12,
            }}
          >
            {overline}
          </span>
        )}
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: -1,
            color: '#0A1628',
            textAlign: 'center',
          }}
        >
          {headline}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: '#475569',
              marginTop: 12,
              maxWidth: 672,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div
        data-animate-stagger
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 24, maxWidth: 1100, margin: '0 auto' }}
      >
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            data-animate
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: 16,
              padding: 32,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                marginBottom: 16,
                ...indicatorStyles[challenge.indicator ?? 'red'],
              }}
            />
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#0A1628',
                marginBottom: 10,
              }}
            >
              {challenge.title}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#475569' }}>
              {challenge.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
