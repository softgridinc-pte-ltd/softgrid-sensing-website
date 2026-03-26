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
  lineColor?: string
  overlineColor?: string
}

export function ApproachSection({
  overline,
  headline = 'Our Approach',
  subtitle,
  steps,
  accentColor = '#1F99C5',
  lineColor = '#A5D5E9',
  overlineColor = '#64748B',
}: ApproachSectionProps): React.ReactElement {
  return (
    <section style={{ padding: '100px 64px', background: '#F8FAFC' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div data-animate style={{ textAlign: 'center', marginBottom: 56 }}>
          {overline && (
            <div style={{ fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: overlineColor, marginBottom: 12 }}>
              {overline}
            </div>
          )}
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: '#0A1628', lineHeight: 1.2 }}>
            {headline}
          </h2>
          {subtitle && (
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#475569', marginTop: 12, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Approach flow */}
        <div data-animate style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          {steps.map((step, i) => (
            <div
              key={step.title}
              style={{
                display: 'flex',
                gap: 32,
                alignItems: 'stretch',
                position: 'relative',
                paddingBottom: i < steps.length - 1 ? 48 : 0,
              }}
            >
              {/* Left: number + connector line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: accentColor,
                    color: '#FFFFFF',
                    fontSize: 20,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      flexGrow: 1,
                      background: lineColor,
                      marginTop: 8,
                      minHeight: 48,
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingTop: 6 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#0A1628', marginBottom: 10 }}>
                  {step.title}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#475569', margin: 0 }}>
                  {step.description}
                </p>
                {step.badge && (
                  <div
                    style={{
                      display: 'inline-block',
                      marginTop: 12,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 2,
                      color: '#92400E',
                      background: '#FEF3C7',
                      border: '1px solid #FDE68A',
                      borderRadius: 100,
                      padding: '4px 14px',
                    }}
                  >
                    {step.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
