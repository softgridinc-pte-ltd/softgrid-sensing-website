import Image from 'next/image'
import Link from 'next/link'

interface SolutionHeroProps {
  overline: string
  headline: string
  subheadline: string
  image?: string
}

export function SolutionHero({ overline, headline, subheadline, image }: SolutionHeroProps): React.ReactElement {
  return (
    <section
      style={{
        padding: '80px 64px 64px',
        background: 'linear-gradient(160deg, #0A1628 0%, #162544 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.28 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(10,22,40,0.85) 0%, rgba(22,37,68,0.78) 100%)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}
      {/* Radial glow overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(31,153,197,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      {/* Grid texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(31,153,197,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(31,153,197,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      <div data-animate style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
        {/* Overline with gradient line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: 'linear-gradient(90deg, transparent, #1F99C5)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 3.5,
              color: '#1F99C5',
            }}
          >
            {overline}
          </span>
        </div>

        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.1,
            color: '#FFFFFF',
            marginBottom: 20,
          }}
        >
          {headline}
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: '#94A3B8',
            maxWidth: 620,
            marginBottom: 36,
          }}
        >
          {subheadline}
        </p>

        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            background: '#1F99C5',
            color: '#FFFFFF',
            padding: '16px 36px',
            borderRadius: 6,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
