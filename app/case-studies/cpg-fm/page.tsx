import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CPG FM — AI-Powered Facility Management | Softgrid Sensing',
  description:
    'Digitizing facility operations with IRIS CMMS and Athena AI knowledge base for CPG FM.',
}

export default function CpgFmCaseStudyPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: '80px 64px',
          background: 'linear-gradient(160deg, #0A1628, #162544)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 400,
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(0,180,216,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }} data-animate>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 32,
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
              Facility Operations
            </span>
          </div>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: -2,
              color: '#FFFFFF',
              margin: 0,
              marginBottom: 24,
              lineHeight: 1.1,
            }}
          >
            AI-Powered Facility Management for CPG FM
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#94A3B8',
              maxWidth: 680,
              margin: 0,
            }}
          >
            Digitizing facility operations with IRIS CMMS and Athena AI knowledge
            base — replacing paper-based workflows with intelligent, automated
            building management.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section style={{ background: '#111D35', padding: '64px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 48,
            flexWrap: 'wrap',
          }}
          data-animate
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 60, fontWeight: 300, color: '#00b4d8' }}>
              IRIS
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: '#94A3B8',
              }}
            >
              CMMS Deployed
            </div>
          </div>
          <div
            style={{
              width: 1,
              height: 64,
              background:
                'linear-gradient(to bottom, transparent, #00b4d8, transparent)',
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 60, fontWeight: 300, color: '#00b4d8' }}>
              Athena
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: '#94A3B8',
              }}
            >
              AI Knowledge Base Live
            </div>
          </div>
          <div
            style={{
              width: 1,
              height: 64,
              background:
                'linear-gradient(to bottom, transparent, #00b4d8, transparent)',
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 60, fontWeight: 300, color: 'white' }}>
              Digital
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: '#94A3B8',
              }}
            >
              Work Order Lifecycle
            </div>
          </div>
          <div
            style={{
              width: 1,
              height: 64,
              background:
                'linear-gradient(to bottom, transparent, #00b4d8, transparent)',
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 60, fontWeight: 300, color: 'white' }}>
              AI
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: '#94A3B8',
              }}
            >
              Decision Support Embedded
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section style={{ background: '#FFFFFF', padding: '80px 64px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }} data-animate>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -1,
              color: '#0A1628',
              marginTop: 0,
              marginBottom: 32,
            }}
          >
            Background
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: 24,
            }}
          >
            CPG FM, a property management company serving Singapore&apos;s commercial
            and institutional properties, operated with paper work orders,
            Excel-based tracking, and knowledge siloed in experienced staff.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: 24,
            }}
          >
            As regulatory requirements increased and experienced technicians
            approached retirement, digital transformation became urgent. CPG FM
            needed a system that could digitize every aspect of facility operations
            while preserving decades of institutional knowledge.
          </p>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0A1628',
              marginTop: 40,
              marginBottom: 24,
            }}
          >
            Paper-Based Challenges
          </h3>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: 0,
            }}
          >
            Work orders were handwritten and filed manually. SLA tracking relied on
            spreadsheets. Equipment maintenance history lived in the memory of
            senior technicians. When these individuals left, critical knowledge
            walked out the door with them.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section style={{ background: '#F8FAFC', padding: '80px 64px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }} data-animate>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -1,
              color: '#0A1628',
              marginTop: 0,
              marginBottom: 32,
            }}
          >
            What We Deployed
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: 24,
            }}
          >
            Softgrid deployed two core products from the AFOS platform — IRIS for
            operational management and Athena for AI-powered knowledge access —
            connected to building monitoring feeds for automated work order
            generation.
          </p>

          {/* Deployed Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 40 }}>
            <div
              style={{
                display: 'flex',
                gap: 20,
                padding: 24,
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: '#eafbfd',
                  border: '1px solid #b8ecf4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 20,
                }}
              >
                <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, stroke: '#0077b6', strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>
                  IRIS — Full CMMS Platform
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  Digital work orders, asset registry, contractor management, SLA
                  monitoring — the complete operational backbone for facility
                  management.
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 20,
                padding: 24,
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: '#eafbfd',
                  border: '1px solid #b8ecf4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 20,
                }}
              >
                <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, stroke: '#0077b6', strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>
                  Athena — AI Knowledge Base
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  Natural language query for equipment procedures, compliance
                  documents, and historical fault data — reducing dependency on
                  senior staff.
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 20,
                padding: 24,
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: '#eafbfd',
                  border: '1px solid #b8ecf4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 20,
                }}
              >
                🔗
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>
                  Monitoring Integration
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  Connected to building monitoring feeds for automated work order
                  generation — faults detected by sensors trigger digital work
                  orders automatically.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{ background: '#FFFFFF', padding: '80px 64px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }} data-animate>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -1,
              color: '#0A1628',
              marginTop: 0,
              marginBottom: 32,
            }}
          >
            Results
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    color: '#94A3B8',
                    padding: '14px 16px',
                    borderBottom: '2px solid #E2E8F0',
                    textAlign: 'left',
                  }}
                >
                  Metric
                </th>
                <th
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    color: '#94A3B8',
                    padding: '14px 16px',
                    borderBottom: '2px solid #E2E8F0',
                    textAlign: 'left',
                  }}
                >
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#0A1628',
                    fontWeight: 700,
                    padding: '18px 16px',
                    borderBottom: '1px solid #F1F5F9',
                    whiteSpace: 'nowrap',
                    width: 200,
                  }}
                >
                  Digital Operations
                </td>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#334155',
                    padding: '18px 16px',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  Paper-based work orders replaced with full digital lifecycle
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#0A1628',
                    fontWeight: 700,
                    padding: '18px 16px',
                    borderBottom: '1px solid #F1F5F9',
                    whiteSpace: 'nowrap',
                    width: 200,
                  }}
                >
                  AI Knowledge Access
                </td>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#334155',
                    padding: '18px 16px',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  Athena provides instant answers — reducing dependency on senior
                  staff
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#0A1628',
                    fontWeight: 700,
                    padding: '18px 16px',
                    borderBottom: '1px solid #F1F5F9',
                    whiteSpace: 'nowrap',
                    width: 200,
                  }}
                >
                  Compliance Ready
                </td>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#334155',
                    padding: '18px 16px',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  Audit trails and SLA documentation generated automatically
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#0A1628',
                    fontWeight: 700,
                    padding: '18px 16px',
                    whiteSpace: 'nowrap',
                    width: 200,
                  }}
                >
                  Foundation for Scale
                </td>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#334155',
                    padding: '18px 16px',
                  }}
                >
                  Platform ready to extend to additional properties and monitoring
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quote */}
      <section
        style={{
          padding: 64,
          background: '#F8FAFC',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }} data-animate>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 120,
              color: '#00b4d8',
              opacity: 0.3,
              lineHeight: 0.8,
              display: 'block',
            }}
          >
            &ldquo;
          </span>
          <p
            style={{
              fontSize: 18,
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: '#64748B',
              margin: 0,
              marginTop: -24,
            }}
          >
            The transition from paper to digital was seamless. IRIS handles our
            daily operations while Athena ensures no critical knowledge is ever lost
            — even as our experienced team members retire.
          </p>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: 64, background: '#FFFFFF' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }} data-animate>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#0A1628',
              marginTop: 0,
              marginBottom: 32,
            }}
          >
            Related
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
            data-animate-stagger
          >
            <Link
              href="/solutions/facility-operations"
              style={{
                padding: 32,
                border: '1px solid #E2E8F0',
                borderRadius: 10,
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                    color: '#0077b6',
                    marginBottom: 12,
                  }}
                >
                  Solution
                </div>
                <div
                  style={{ fontSize: 18, fontWeight: 700, color: '#0A1628' }}
                >
                  Smart Facility Operations
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#00b4d8' }}>
                Learn more →
              </div>
            </Link>
            <Link
              href="/products/orches"
              style={{
                padding: 32,
                border: '1px solid #E2E8F0',
                borderRadius: 10,
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                    color: '#0077b6',
                    marginBottom: 12,
                  }}
                >
                  Product
                </div>
                <div
                  style={{ fontSize: 18, fontWeight: 700, color: '#0A1628' }}
                >
                  IRIS / Athena
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#00b4d8' }}>
                Learn more →
              </div>
            </Link>
            <Link
              href="/case-studies/nparks"
              style={{
                padding: 32,
                border: '1px solid #E2E8F0',
                borderRadius: 10,
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                    color: '#0077b6',
                    marginBottom: 12,
                  }}
                >
                  Case Study
                </div>
                <div
                  style={{ fontSize: 18, fontWeight: 700, color: '#0A1628' }}
                >
                  NParks Forest Monitoring
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#00b4d8' }}>
                Read case study →
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
