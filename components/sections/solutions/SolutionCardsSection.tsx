import Link from 'next/link'

interface SolutionCard {
  title: string
  description: string
  audience: string
  href: string
  accentColor: string
  iconBg: string
  iconStroke: string
  iconPath: React.ReactNode
}

const solutions: SolutionCard[] = [
  {
    title: 'Smart Vertical Transport',
    description: 'BCA-certified monitoring and predictive maintenance for lifts and escalators. From real-time status to AI-driven fault prediction — proven on 10,000+ assets.',
    audience: 'For lift companies, Town Councils, and transport authorities',
    href: '/solutions/vertical-transport',
    accentColor: '#00b4d8',
    iconBg: '#d5f3f9',
    iconStroke: '#0077b6',
    iconPath: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><polyline points="8 12 12 8 16 12"/></>,
  },
  {
    title: 'Smart Building Management',
    description: 'Unified, brand-agnostic monitoring and control for all your building systems. One dashboard for HVAC, energy, fire, lighting — regardless of BMS vendor.',
    audience: 'For building owners and facility managers',
    href: '/solutions/building-management',
    accentColor: '#0D9488',
    iconBg: '#CCFBF1',
    iconStroke: '#0D9488',
    iconPath: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  },
  {
    title: 'Smart Facility Operations',
    description: 'Transform your operations from paper-based and reactive to digital and predictive. AI-powered work orders, asset management, and knowledge at your fingertips.',
    audience: 'For managing agents and property management companies',
    href: '/solutions/facility-operations',
    accentColor: '#F59E0B',
    iconBg: '#FEF3C7',
    iconStroke: '#D97706',
    iconPath: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>,
  },
  {
    title: 'Infrastructure & Environmental Monitoring',
    description: 'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale.',
    audience: 'For government agencies, water authorities, and infrastructure managers',
    href: '/solutions/infrastructure-environmental',
    accentColor: '#059669',
    iconBg: '#D1FAE5',
    iconStroke: '#059669',
    iconPath: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  },
]

export function SolutionCardsSection(): React.ReactElement {
  return (
    <section style={{ padding: '120px 64px', background: '#FFFFFF' }}>
      <div
        data-animate-stagger
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 28, maxWidth: 1100, margin: '0 auto' }}
      >
        {solutions.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            data-animate
            style={{
              padding: '48px 40px',
              borderRadius: 24,
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
            }}
            className="group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
          >
            {/* Accent bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: card.accentColor }} />

            {/* Icon */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                background: card.iconBg,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{ width: 28, height: 28, stroke: card.iconStroke, strokeWidth: 1.6, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}
              >
                {card.iconPath}
              </svg>
            </div>

            <div style={{ fontSize: 24, fontWeight: 700, color: '#0A1628', marginBottom: 6, letterSpacing: -0.3 }}>
              {card.title}
            </div>

            <div style={{ fontSize: 13, fontWeight: 600, color: '#94A3B8', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              {card.audience}
            </div>

            <div style={{ fontSize: 15, lineHeight: 1.7, color: '#475569', marginBottom: 28, flex: 1 }}>
              {card.description}
            </div>

            <span style={{ fontSize: 14, fontWeight: 600, color: '#00b4d8', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Learn More
              <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }} className="transition-transform duration-200 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
