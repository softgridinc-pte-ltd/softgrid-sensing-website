import Link from 'next/link'

interface CaseStudyPreviewProps {
  label: string
  headline: string
  description?: string
  href: string
  buttonText?: string
}

export function CaseStudyPreview({
  label,
  headline,
  description,
  href,
  buttonText = 'Read Case Study',
}: CaseStudyPreviewProps): React.ReactElement {
  return (
    <section
      style={{
        padding: '80px 64px',
        background: '#0A1628',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0,180,216,0.06) 0%, transparent 50%)',
        }}
      />

      <div
        data-animate
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 700,
        }}
      >
        {/* Label with gradient line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: 'linear-gradient(90deg, transparent, #00b4d8)',
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 3,
              color: '#00b4d8',
            }}
          >
            {label}
          </span>
        </div>

        <h3
          style={{
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: -1,
            color: '#FFFFFF',
            marginBottom: 16,
            lineHeight: 1.15,
          }}
        >
          {headline}
        </h3>

        {description && (
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: '#94A3B8',
              marginBottom: 32,
            }}
          >
            {description}
          </p>
        )}

        <Link
          href={href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'transparent',
            color: '#FFFFFF',
            padding: '14px 36px',
            borderRadius: 6,
            fontSize: 16,
            border: '2px solid rgba(255,255,255,0.3)',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          {buttonText} <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
