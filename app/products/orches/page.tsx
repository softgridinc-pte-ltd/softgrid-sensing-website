import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Orches — Operations & Maintenance | Softgrid Sensing',
  description:
    'Work order management, mobile field service, asset tracking, and AI-powered service desk — closing the loop between detection and resolution.',
}

export default function OrchesPage(): React.ReactElement {
  return (
    <>
      {/* SERIES HERO */}
      <section
        style={{
          padding: '80px 64px 64px',
          background: 'linear-gradient(160deg, #0A1628 0%, #162544 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              'radial-gradient(ellipse at 70% 50%, rgba(13,148,136,0.08) 0%, transparent 50%)',
          }}
        />
        {/* Grid texture overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              'linear-gradient(rgba(13,148,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)',
          }}
        />
        <div
          style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}
          data-animate
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              fontWeight: 700,
              textTransform: 'uppercase' as const,
              letterSpacing: 3.5,
              marginBottom: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span
              style={{
                width: 40,
                height: 2,
                background: 'linear-gradient(90deg, transparent, #6CBBD9, #22D3EE)',
                borderRadius: 1,
                display: 'inline-block',
              }}
            />
            <span
              style={{
                background: 'linear-gradient(90deg, #6CBBD9, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 24px rgba(34, 211, 238, 0.3)',
              }}
            >
              AFOS Orches
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              fontWeight: 700,
              color: '#B0BEC9',
              letterSpacing: 1,
              marginBottom: 12,
              textTransform: 'uppercase' as const,
            }}
          >
            Operations &amp; Maintenance
          </div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: 20,
            }}
          >
            From Alert to Resolution. One Seamless Workflow.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#B0BEC9',
              maxWidth: 580,
            }}
          >
            Work order management, mobile field service, asset tracking, and
            AI-powered service desk — closing the loop between detection and
            resolution.
          </p>
        </div>
      </section>

      {/* PRODUCT 1: IRIS */}
      <section style={{ padding: '100px 64px', position: 'relative', background: '#FFFFFF' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 64, alignItems: 'start', maxWidth: 1200, margin: '0 auto' }}
          data-animate
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: '#CCFBF1',
                  border: '1px solid #99F6E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: 22,
                    height: 22,
                    stroke: '#0D9488',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="9" y1="16" x2="13" y2="16" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#0D9488',
                }}
              >
                IRIS
              </div>
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                color: '#0A1628',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Integrated Resource &amp; Information System
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: '#64748B',
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              AI-enabled CMMS for managing agents — work orders, assets,
              contractors, all in one place
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#475569',
                marginBottom: 28,
              }}
            >
              IRIS transforms facility operations from paper trails and
              spreadsheets into a digital, AI-enhanced workflow. Managing agents
              get a single platform to create and track work orders, manage asset
              lifecycles, coordinate contractors, and generate compliance reports
              — with Athena AI embedded for instant knowledge retrieval.
            </p>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase' as const,
                letterSpacing: 1.5,
                color: '#B0BEC9',
                marginBottom: 14,
              }}
            >
              Key Capabilities
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 28, padding: 0 }}>
              {[
                'Work order lifecycle: creation \u2192 assignment \u2192 execution \u2192 verification \u2192 closure',
                'Asset registry with lifecycle tracking and maintenance history',
                'Contractor and vendor management',
                'Mobile workforce application for field teams',
                'SLA monitoring and automated compliance reporting',
                'Athena AI knowledge base embedded (ask any question in natural language)',
                'Customizable dashboards per organization type',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: '#334155',
                    padding: '7px 0 7px 20px',
                    position: 'relative',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 14,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#2DD4BF',
                      display: 'block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase' as const,
                    letterSpacing: 1,
                    color: '#B0BEC9',
                    marginBottom: 4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Traction
                </div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>
                  Deployed with CPG FM
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase' as const,
                    letterSpacing: 1,
                    color: '#B0BEC9',
                    marginBottom: 4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Pricing
                </div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>
                  Per user / per asset per month (SaaS)
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              background: '#0A1628',
              borderRadius: 24,
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(13,148,136,0.1)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background:
                  'radial-gradient(ellipse at 50% 50%, rgba(13,148,136,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                color: '#64748B',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                lineHeight: 1.6,
              }}
            >
              <img src="/images/products/CMP.png" alt="IRIS dashboard" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT 2: LiftProf (reversed) */}
      <section style={{ padding: '100px 64px', position: 'relative', background: '#F8FAFC' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: 64,
            alignItems: 'start',
            maxWidth: 1200,
            margin: '0 auto',
            direction: 'rtl',
          }}
          data-animate
        >
          <div style={{ direction: 'ltr' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: '#CCFBF1',
                  border: '1px solid #99F6E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: 22,
                    height: 22,
                    stroke: '#0D9488',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#0D9488',
                }}
              >
                LiftProf
              </div>
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                color: '#0A1628',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Field Service Mobile App
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: '#64748B',
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              The technician&#39;s companion — tasks, diagnostics, and reports in
              one mobile app
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#475569',
                marginBottom: 28,
              }}
            >
              LiftProf puts everything a field technician needs in their pocket.
              When an alert triggers a work order, LiftProf delivers it to the
              nearest available technician with pre-populated symptom
              expectations and recommended actions. After the repair, it
              auto-generates a service report. No paperwork. No phone calls to
              the office.
            </p>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase' as const,
                letterSpacing: 1.5,
                color: '#B0BEC9',
                marginBottom: 14,
              }}
            >
              Key Capabilities
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 28, padding: 0 }}>
              {[
                'Configurable task lists from RM&D or IRIS backend',
                'Alert-triggered tasks with expected symptoms and potential root causes pre-populated',
                'Actual symptom and solution feedback with site photos',
                'Auto-generated service reports on completion',
                'GPS-based dispatch to nearest qualified technician',
                'Upcoming: Athena LLM integration for on-site knowledge query',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: '#334155',
                    padding: '7px 0 7px 20px',
                    position: 'relative',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 14,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#2DD4BF',
                      display: 'block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase' as const,
                    letterSpacing: 1,
                    color: '#B0BEC9',
                    marginBottom: 4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Traction
                </div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>
                  Chevalier (200+ lifts, per-lift-per-month)
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              direction: 'ltr',
              background: '#0A1628',
              borderRadius: 24,
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(13,148,136,0.1)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background:
                  'radial-gradient(ellipse at 50% 50%, rgba(13,148,136,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                color: '#64748B',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                lineHeight: 1.6,
              }}
            >
              <img src="/images/products/L2-1.png" alt="LiftProf mobile app" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: 24 }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT 3: Nova */}
      <section style={{ padding: '100px 64px', position: 'relative', background: '#FFFFFF' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 64, alignItems: 'start', maxWidth: 1200, margin: '0 auto' }}
          data-animate
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: '#CCFBF1',
                  border: '1px solid #99F6E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: 22,
                    height: 22,
                    stroke: '#0D9488',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#0D9488',
                }}
              >
                Nova
              </div>
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                color: '#0A1628',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Voice AI
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: '#64748B',
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              AI-powered voice agent for facility call centers — 24/7, no
              staffing required
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#475569',
                marginBottom: 28,
              }}
            >
              Nova answers incoming facility calls, understands the issue, logs
              the case, categorizes it, and routes it to the right team — all
              without a human operator. For managing agents handling hundreds of
              buildings, Nova turns a staffing problem into a technology solution.
            </p>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase' as const,
                letterSpacing: 1.5,
                color: '#B0BEC9',
                marginBottom: 14,
              }}
            >
              Key Capabilities
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 28, padding: 0 }}>
              {[
                'Automated call pick-up and natural language understanding',
                'Case creation and categorization',
                'Escalation routing to appropriate teams',
                '24/7 operation',
                'Integration with IRIS work order system',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: '#334155',
                    padding: '7px 0 7px 20px',
                    position: 'relative',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 14,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#2DD4BF',
                      display: 'block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase' as const,
                    letterSpacing: 1,
                    color: '#B0BEC9',
                    marginBottom: 4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Status
                </div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>
                  Available as add-on to IRIS or standalone
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              background: '#0A1628',
              borderRadius: 24,
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(13,148,136,0.1)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background:
                  'radial-gradient(ellipse at 50% 50%, rgba(13,148,136,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                color: '#64748B',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                lineHeight: 1.6,
              }}
            >
              <img src="/images/products/L2-2.png" alt="Nova voice AI" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: 24 }} />
            </div>
          </div>
        </div>
      </section>

      {/* SERIES CTA */}
      <section
        style={{
          padding: '100px 64px',
          background: '#0D9488',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }} data-animate>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: -1,
              color: '#FFFFFF',
              marginBottom: 32,
            }}
          >
            See AFOS Orches in Action
          </h2>
          <Link
            href="/contact"
            className="hover:shadow-lg hover:scale-[1.02]"
            style={{
              display: 'inline-block',
              background: '#FFFFFF',
              color: '#0A1628',
              fontWeight: 600,
              padding: '14px 32px',
              borderRadius: 8,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
