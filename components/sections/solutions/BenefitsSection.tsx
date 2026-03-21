interface Benefit {
  title: string
  description: string
}

interface BenefitsSectionProps {
  overline?: string
  headline?: string
  subtitle?: string
  benefits: Benefit[]
  overlineColor?: string
}

export function BenefitsSection({
  overline = 'Key Benefits',
  headline,
  subtitle,
  benefits,
  overlineColor = '#64748B',
}: BenefitsSectionProps): React.ReactElement {
  return (
    <section style={{ padding: '80px 64px', background: '#F8FAFC' }}>
      <div data-animate style={{ textAlign: 'center', marginBottom: 56 }}>
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
        {headline && (
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
        )}
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: 24, maxWidth: 1100, margin: '0 auto' }}
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            data-animate
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 16,
              padding: 32,
            }}
          >
            <h3
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: '#0A1628',
                marginBottom: 6,
              }}
            >
              {benefit.title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
