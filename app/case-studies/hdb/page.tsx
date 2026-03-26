import { Breadcrumb } from '@/components/ui/Breadcrumb'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HDB Lift Monitoring — 10,000+ Lifts Case Study | Softgrid Sensing',
  description:
    'How Softgrid became the backbone of Singapore\'s public housing lift safety infrastructure — monitoring 10,000+ lifts across 4,000+ HDB blocks.',
}

export default function HdbCaseStudyPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Case Studies', href: '/case-studies' }, { label: 'HDB' }]} />
      {/* Hero */}
      <section
        style={{
          padding: '80px 64px',
          background: 'linear-gradient(160deg, #0A1628 0%, #162544 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              'radial-gradient(ellipse at 70% 50%, rgba(31,153,197,0.08) 0%, transparent 50%)',
          }}
        />
        {/* Grid texture */}
        <div
          style={{
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              'linear-gradient(rgba(31,153,197,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(31,153,197,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }} data-animate>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase' as const,
              letterSpacing: 3,
              color: '#1F99C5',
              marginBottom: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span
              style={{
                width: 32,
                height: 1,
                background: 'linear-gradient(90deg, transparent, #1F99C5)',
                display: 'inline-block',
              }}
            />
            Public Sector / Vertical Transport
          </div>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: 20,
            }}
          >
            Monitoring 10,000+ Lifts Across 4,000+ HDB Blocks
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#94A3B8',
              maxWidth: 680,
            }}
          >
            How Softgrid&apos;s technology became the backbone of Singapore&apos;s public housing
            lift safety infrastructure.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section style={{ background: '#111D35', padding: 64 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0,
          }}
          data-animate
        >
          {[
            { value: '10,000', suffix: '+', label: 'Lifts Monitored', hasCyan: true },
            { value: '4,000', suffix: '+', label: 'HDB Blocks', hasCyan: true },
            { value: 'NRF CoT', suffix: '', label: 'National Research Awardee', hasCyan: false },
            { value: 'Co-Owned', suffix: '', label: 'IP with HDB', hasCyan: false },
          ].map((item, index) => (
            <div
              key={item.label}
              style={{
                flex: 1,
                textAlign: 'center' as const,
                padding: '0 40px',
                position: 'relative' as const,
              }}
            >
              <div
                style={{
                  fontSize: 60,
                  fontWeight: 300,
                  color: '#ffffff',
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {item.value}
                {item.hasCyan && (
                  <span style={{ color: '#1F99C5' }}>{item.suffix}</span>
                )}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 2,
                  color: '#94A3B8',
                }}
              >
                {item.label}
              </div>
              {index < 3 && (
                <div
                  style={{
                    position: 'absolute' as const,
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 1,
                    height: 64,
                    background:
                      'linear-gradient(180deg, transparent, rgba(31,153,197,0.25), transparent)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Background */}
      <section style={{ padding: '80px 64px', background: '#ffffff' }}>
        <div style={{ maxWidth: 880 }} data-animate>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -1,
              color: '#0A1628',
              marginBottom: 32,
              lineHeight: 1.2,
            }}
          >
            The Background
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: 24,
            }}
          >
            Singapore&apos;s Housing &amp; Development Board (HDB) manages the world&apos;s largest
            public housing programme, with over 1 million flats housing 80% of the population. The
            lift infrastructure serving these buildings — approximately 26,000+ lifts — requires
            continuous monitoring to ensure safety and service reliability.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
            }}
          >
            The existing monitoring system, based on legacy SCADA technology operational since 1984,
            needed modernization to support real-time diagnostics, predictive maintenance, and
            compliance with BCA&apos;s evolving regulatory requirements.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section style={{ padding: '80px 64px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 880 }} data-animate>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -1,
              color: '#0A1628',
              marginBottom: 32,
              lineHeight: 1.2,
            }}
          >
            The Solution
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: 24,
            }}
          >
            Softgrid was selected through the NRF Cities of Tomorrow R&amp;D Programme to co-develop
            with HDB a next-generation lift monitoring and diagnostic system.
          </p>

          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0A1628',
              marginTop: 40,
              marginBottom: 24,
            }}
          >
            What Was Deployed
          </div>

          {/* Deployed Items */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              marginBottom: 40,
            }}
          >
            {/* Hardware */}
            <div
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                padding: 24,
                background: '#ffffff',
                border: '1px solid #E2E8F0',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  borderRadius: 12,
                  background: '#EBF5FA',
                  border: '1px solid #A5D5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: 24,
                    height: 24,
                    stroke: '#06b6d4',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="8" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="16" y2="10" />
                  <circle cx="12" cy="16" r="2" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#0A1628',
                    marginBottom: 6,
                  }}
                >
                  Hardware: LMD6000 Devices
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  Non-intrusive IoT sensors with edge processing and 4G/LTE connectivity. 4,000+
                  units installed across HDB estates.
                </div>
              </div>
            </div>

            {/* Software */}
            <div
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                padding: 24,
                background: '#ffffff',
                border: '1px solid #E2E8F0',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  borderRadius: 12,
                  background: '#EBF5FA',
                  border: '1px solid #A5D5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: 24,
                    height: 24,
                    stroke: '#06b6d4',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#0A1628',
                    marginBottom: 6,
                  }}
                >
                  Software: Fusion TMS (LTMS)
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  Multi-tenant monitoring platform supporting Town Councils, managing agents, lift
                  companies, EMSU, and HDB simultaneously.
                </div>
              </div>
            </div>

            {/* AI */}
            <div
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                padding: 24,
                background: '#ffffff',
                border: '1px solid #E2E8F0',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  borderRadius: 12,
                  background: '#EBF5FA',
                  border: '1px solid #A5D5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: 24,
                    height: 24,
                    stroke: '#06b6d4',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 0 1 4-4z" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                  <line x1="10" y1="17" x2="14" y2="17" />
                  <line x1="11" y1="20" x2="13" y2="20" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#0A1628',
                    marginBottom: 6,
                  }}
                >
                  AI: Predictive Diagnostic Models
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  Analyzing vibration and operational data with &gt;83% fault prediction accuracy.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0A1628',
              marginTop: 40,
              marginBottom: 24,
            }}
          >
            Key Design Decisions
          </div>

          {/* Decisions List */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              {
                bold: 'Non-intrusive installation:',
                text: ' no modification to existing lift controllers, no warranty impact',
              },
              {
                bold: 'Edge resilience:',
                text: ' lifts continue to be monitored even during internet outages',
              },
              {
                bold: 'Multi-organization architecture:',
                text: ' different user types see different dashboards and workflows',
              },
              {
                bold: 'Backwards compatible',
                text: ' with existing LMD 6000 fleet',
              },
            ].map((item) => (
              <li
                key={item.bold}
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: '#334155',
                  padding: '12px 0 12px 24px',
                  position: 'relative' as const,
                  borderBottom: '1px solid #F1F5F9',
                }}
              >
                <div
                  style={{
                    position: 'absolute' as const,
                    left: 0,
                    top: 20,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#1F99C5',
                  }}
                />
                <strong style={{ color: '#0A1628', fontWeight: 600 }}>{item.bold}</strong>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: '80px 64px', background: '#ffffff' }}>
        <div style={{ maxWidth: 880 }} data-animate>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -1,
              color: '#0A1628',
              marginBottom: 32,
              lineHeight: 1.2,
            }}
          >
            The Results
          </h2>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse' as const,
              marginTop: 8,
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: 'uppercase' as const,
                    letterSpacing: 1.5,
                    color: '#94A3B8',
                    textAlign: 'left' as const,
                    padding: '14px 16px',
                    borderBottom: '2px solid #E2E8F0',
                  }}
                >
                  Outcome
                </th>
                <th
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: 'uppercase' as const,
                    letterSpacing: 1.5,
                    color: '#94A3B8',
                    textAlign: 'left' as const,
                    padding: '14px 16px',
                    borderBottom: '2px solid #E2E8F0',
                  }}
                >
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  metric: 'Scale',
                  detail:
                    '10,000+ lifts across 4,000+ blocks — one of the largest IoT-based lift monitoring deployments globally',
                },
                {
                  metric: 'Co-Owned IP',
                  detail:
                    'Technology IP jointly owned with HDB — a rare government endorsement of commercial technology',
                },
                {
                  metric: 'National Recognition',
                  detail:
                    'NRF Cities of Tomorrow awardee — among the few NRF R&D projects to achieve full commercialization',
                },
                {
                  metric: 'BCA Alignment',
                  detail:
                    "Platform designed for compliance with BCA's RM&D Code of Practice",
                },
                {
                  metric: 'Foundation for AFOS',
                  detail:
                    'The HDB deployment validated the platform architecture that now powers the entire AFOS product portfolio',
                },
              ].map((row) => (
                <tr key={row.metric}>
                  <td
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: '#0A1628',
                      padding: '18px 16px',
                      borderBottom: '1px solid #F1F5F9',
                      fontWeight: 700,
                      whiteSpace: 'nowrap' as const,
                      width: 200,
                      verticalAlign: 'top' as const,
                    }}
                  >
                    {row.metric}
                  </td>
                  <td
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: '#334155',
                      padding: '18px 16px',
                      borderBottom: '1px solid #F1F5F9',
                      verticalAlign: 'top' as const,
                    }}
                  >
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quote */}
      <section
        style={{
          padding: 64,
          background: '#F8FAFC',
          textAlign: 'center' as const,
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            position: 'relative' as const,
          }}
          data-animate
        >
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 120,
              lineHeight: 1,
              color: '#1F99C5',
              opacity: 0.3,
              position: 'absolute' as const,
              top: -40,
              left: -20,
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontSize: 18,
              fontStyle: 'italic' as const,
              lineHeight: 1.8,
              color: '#64748B',
              position: 'relative' as const,
              zIndex: 1,
            }}
          >
            [Placeholder for customer testimonial from HDB or Town Council stakeholder — to be
            obtained]
          </p>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: 64, background: '#ffffff' }}>
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: '#0A1628',
            marginBottom: 32,
            letterSpacing: -0.5,
          }}
        >
          Related
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 24,
          }}
        >
          <Link
            href="/solutions/vertical-transport"
            style={{
              padding: 32,
              border: '1px solid #E2E8F0',
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 160,
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
            data-animate
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 2,
                  color: '#197EA3',
                  marginBottom: 12,
                }}
              >
                Related Solution
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0A1628',
                  lineHeight: 1.3,
                  marginBottom: 20,
                }}
              >
                Smart Vertical Transport
              </div>
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#1F99C5',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Learn more
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: 16,
                  height: 16,
                  stroke: 'currentColor',
                  strokeWidth: 2,
                  fill: 'none',
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>

          <Link
            href="/products/fusion"
            style={{
              padding: 32,
              border: '1px solid #E2E8F0',
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 160,
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
            data-animate
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 2,
                  color: '#197EA3',
                  marginBottom: 12,
                }}
              >
                Related Products
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0A1628',
                  lineHeight: 1.3,
                  marginBottom: 20,
                }}
              >
                LTMS, LMD6000
              </div>
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#1F99C5',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Learn more
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: 16,
                  height: 16,
                  stroke: 'currentColor',
                  strokeWidth: 2,
                  fill: 'none',
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>

          <Link
            href="/case-studies/chevalier"
            style={{
              padding: 32,
              border: '1px solid #E2E8F0',
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 160,
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
            data-animate
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 2,
                  color: '#197EA3',
                  marginBottom: 12,
                }}
              >
                Next Case Study
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0A1628',
                  lineHeight: 1.3,
                  marginBottom: 20,
                }}
              >
                Chevalier RM&amp;D
              </div>
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#1F99C5',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Read case study
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: 16,
                  height: 16,
                  stroke: 'currentColor',
                  strokeWidth: 2,
                  fill: 'none',
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
