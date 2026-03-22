import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NParks Forest Monitoring — AI Satellite Analysis | Softgrid Sensing',
  description:
    'AI-powered satellite image analysis for national-scale environmental monitoring — monthly forest cover monitoring across Singapore.',
}

export default function NparksCaseStudyPage(): React.ReactElement {
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
              Infrastructure &amp; Environmental
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
            Monthly Forest Cover Monitoring Across Singapore
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
            AI-powered satellite image analysis for national-scale environmental
            monitoring — automated change detection replacing labor-intensive
            manual surveys.
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
            <div style={{ fontSize: 60, fontWeight: 300, color: 'white' }}>
              26
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
              Ecological Areas
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
              4<span style={{ color: '#00b4d8' }}>.</span>76m
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
              Spatial Resolution
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
              Monthly
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
              Monitoring Cycles
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
              Zero
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
              Manual Processing
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
            Singapore&apos;s National Parks Board (NParks) is responsible for
            monitoring and protecting the city-state&apos;s green cover — from
            nature reserves and parks to roadside trees and mangroves. Understanding
            changes in forest cover is critical for urban planning, conservation, and
            climate resilience.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: 24,
            }}
          >
            Traditional monitoring relied on labor-intensive manual surveys and
            periodic aerial photography — expensive, slow, and unable to provide the
            monthly cadence required for timely intervention.
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
            The Challenge
          </h3>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: 0,
            }}
          >
            NParks needed a system that could automatically monitor 26 ecological
            areas at high spatial resolution on a monthly basis — detecting changes
            in forest cover, identifying illegal clearing, and generating
            decision-ready reports without manual intervention.
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
            Softgrid deployed Fusion RSA — an automated pipeline from satellite data
            acquisition through AI classification to report generation. The system
            processes PlanetScope satellite imagery at 4.76m resolution using a
            custom CNN model.
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
                🛰
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>
                  Fusion RSA — Satellite Pipeline
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  Automated pipeline from PlanetScope satellite data acquisition
                  through spectral analysis, cloud detection, and AI classification
                  to decision-ready reports.
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
                <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, stroke: '#0077b6', strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>
                  CNN Classification Model
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  TensorFlow/Keras CNN with 21-dimensional feature input for
                  forest/non-forest/water/cloud classification — trained on
                  Singapore-specific vegetation signatures.
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
                <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, stroke: '#0077b6', strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>
                  End-to-End Automation
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                  Fully automated monthly pipeline — satellite data, cloud
                  detection, spectral analysis, CNN classification, change
                  detection, and report generation with zero manual steps.
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
                  National Coverage
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
                  All of Singapore monitored monthly at 4.76m resolution
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
                  Detection Speed
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
                  Change detection latency reduced from months to ~5 days
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
                  Automated Pipeline
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
                  Zero manual processing — raw satellite data to decision-ready
                  reports
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
                  Resolution
                </td>
                <td
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#334155',
                    padding: '18px 16px',
                  }}
                >
                  Captures forest patches as small as 0.5 hectares
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
            This deployment demonstrates that the AFOS platform is
            scale-invariant. The same four engines that monitor a lift
            motor&apos;s vibration also process satellite imagery across an
            entire country.
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
              href="/solutions/infrastructure-environmental"
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
                  Infrastructure &amp; Environmental
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#00b4d8' }}>
                Learn more
                <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </Link>
            <Link
              href="/products/fusion"
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
                  Fusion RSA
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#00b4d8' }}>
                Learn more
                <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </Link>
            <Link
              href="/case-studies/cpg-fm"
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
                  CPG FM — AI Facility Management
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#00b4d8' }}>
                Read case study
                <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
