import Link from 'next/link'

interface ProductSeries {
  name: string
  subtitle: string
  description: string
  products: { name: string; tbd?: boolean }[]
  href: string
  iconPath: React.ReactNode
  iconBg: string
  iconBorder: string
  iconStroke: string
  linkColor: string
  cardStyle: 'dark' | 'light' | 'dark-alt'
}

const productSeries: ProductSeries[] = [
  {
    name: 'AFOS Sense',
    subtitle: 'Edge Devices',
    description: 'Industrial-grade IoT devices designed for non-intrusive installation, edge intelligence, and resilient operation. Hardware-as-a-Service, not hardware-for-sale.',
    products: [{ name: 'LMD' }, { name: 'LBB' }, { name: 'EMD' }],
    href: '/products/sense',
    iconPath: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>,
    iconBg: 'rgba(31,153,197,0.12)',
    iconBorder: 'rgba(31,153,197,0.2)',
    iconStroke: '#1F99C5',
    linkColor: '#1F99C5',
    cardStyle: 'dark',
  },
  {
    name: 'AFOS Fusion',
    subtitle: 'Monitoring & Diagnostics',
    description: "From lift sensors to satellite imagery \u2014 see what's happening across all your assets, at any scale, before problems escalate.",
    products: [{ name: 'LTMS' }, { name: 'RM&D' }, { name: 'Cloud BMS' }, { name: 'Fusion RSA' }, { name: 'Escalator Monitoring [TBD]', tbd: true }],
    href: '/products/fusion',
    iconPath: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    iconBg: 'rgba(31,153,197,0.15)',
    iconBorder: 'rgba(31,153,197,0.25)',
    iconStroke: '#6CBBD9',
    linkColor: '#6CBBD9',
    cardStyle: 'dark',
  },
  {
    name: 'AFOS Orches',
    subtitle: 'Operations & Maintenance',
    description: 'Work order management, field service, asset tracking, and intelligent service desk. Manage the full lifecycle from detection to resolution.',
    products: [{ name: 'IRIS' }, { name: 'LiftProf' }, { name: 'Nova' }],
    href: '/products/orches',
    iconPath: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>,
    iconBg: 'rgba(13,148,136,0.15)',
    iconBorder: 'rgba(13,148,136,0.25)',
    iconStroke: '#2DD4BF',
    linkColor: '#2DD4BF',
    cardStyle: 'dark',
  },
  {
    name: 'AFOS Cortex',
    subtitle: 'Data & Intelligence',
    description: 'AI knowledge base, digital twin visualization, predictive analytics, and compliance reporting. Turn your operational data into decisions and foresight.',
    products: [{ name: 'Athena' }, { name: 'Digital Twin' }, { name: 'AI Analytics [TBD]', tbd: true }, { name: 'ESG Reporting [TBD]', tbd: true }],
    href: '/products/cortex',
    iconPath: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
    iconBg: 'rgba(108,187,217,0.08)',
    iconBorder: 'rgba(108,187,217,0.15)',
    iconStroke: '#6CBBD9',
    linkColor: '#6CBBD9',
    cardStyle: 'dark-alt',
  },
]

function getCardStyles(style: 'dark' | 'light' | 'dark-alt'): React.CSSProperties {
  if (style === 'light') return { background: '#F8FAFC', border: '1px solid #E2E8F0' }
  if (style === 'dark-alt') return { background: 'linear-gradient(160deg, #0a1a2e 0%, #0d2240 100%)' }
  return { background: 'linear-gradient(160deg, #05192d 0%, #111D35 100%)' }
}

function getTextColors(style: 'dark' | 'light' | 'dark-alt') {
  if (style === 'light') return { title: '#0A1628', desc: '#475569', subtitle: '#64748B', tagBg: '#FFFFFF', tagBorder: '#E2E8F0', tagColor: '#334155', tagTbdColor: '#94A3B8' }
  return { title: '#FFFFFF', desc: '#94A3B8', subtitle: '#64748B', tagBg: 'rgba(255,255,255,0.08)', tagBorder: 'rgba(255,255,255,0.12)', tagColor: '#CBD5E1', tagTbdColor: '#64748B' }
}

export function ProductSeriesSection(): React.ReactElement {
  return (
    <section style={{ padding: '120px 64px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div data-animate style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 72px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, color: '#1F99C5', marginBottom: 16 }}>
            Product Series
          </div>
          <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1.5, color: '#0A1628', lineHeight: 1.15 }}>
            Four Product Series. One Platform.
          </h2>
        </div>

        <div data-animate-stagger style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {productSeries.map((series) => {
            const colors = getTextColors(series.cardStyle)
            return (
              <div
                key={series.name}
                data-animate
                className="group hover:-translate-y-1"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 36,
                  padding: '52px 48px',
                  borderRadius: 24,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  ...getCardStyles(series.cardStyle),
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                    background: series.iconBg,
                    border: `1px solid ${series.iconBorder}`,
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: 36, height: 36, stroke: series.iconStroke, strokeWidth: 1.6, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                    {series.iconPath}
                  </svg>
                </div>

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: 26, fontWeight: 700, color: colors.title, marginBottom: 14, letterSpacing: -0.3 }}>
                    {series.name}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1.5, color: colors.subtitle, marginBottom: 6, marginTop: -8 }}>
                    {series.subtitle}
                  </div>
                  <div style={{ fontSize: 16, lineHeight: 1.7, color: colors.desc, marginBottom: 22, maxWidth: 700 }}>
                    {series.description}
                  </div>

                  {/* Product tags */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                    {series.products.map((p) => (
                      <span
                        key={p.name}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '7px 16px',
                          background: colors.tagBg,
                          border: `1px ${p.tbd ? 'dashed' : 'solid'} ${colors.tagBorder}`,
                          borderRadius: 100,
                          fontSize: 13,
                          fontWeight: 600,
                          color: p.tbd ? colors.tagTbdColor : colors.tagColor,
                        }}
                      >
                        {p.name}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={series.href}
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: series.linkColor,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      textDecoration: 'none',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    Explore Series
                    <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }} className="transition-transform duration-200 group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
