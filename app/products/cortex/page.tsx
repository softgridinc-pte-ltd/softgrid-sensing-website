import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { BrowserFrameCarousel } from '@/components/ui/BrowserFrameCarousel'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Cortex — Data & Intelligence | Softgrid Sensing',
  description:
    'AI knowledge base, digital twin visualization, and predictive analytics — turning your operational data into your most valuable asset.',
}

export default function CortexPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'AFOS Cortex' }]} />
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
              'radial-gradient(ellipse at 70% 50%, rgba(31,153,197,0.08) 0%, transparent 50%)',
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
              'linear-gradient(rgba(31,153,197,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(31,153,197,0.03) 1px, transparent 1px)',
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
              AFOS Cortex
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
            Data &amp; Intelligence
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
            From Data to Decisions. From Monitoring to Foresight.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#B0BEC9',
              maxWidth: 580,
            }}
          >
            AI knowledge base, digital twin visualization, and predictive
            analytics — turning your operational data into your most valuable
            asset.
          </p>
        </div>
      </section>

      {/* PRODUCT 1: AI PREDICTIVE ANALYTICS */}
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
                  background: '#111D35',
                  border: '1px solid rgba(108,187,217,0.2)',
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
                    stroke: '#6CBBD9',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#197EA3',
                }}
              >
                AI Predictive Analytics
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
              AI Predictive Analytics
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
              ML models that predict equipment failures before they happen —
              with &gt;83% accuracy
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#475569',
                marginBottom: 28,
              }}
            >
              Our predictive AI engine analyzes vibration, acceleration, and
              temperature data from connected sensors to detect anomalies and
              predict failures — weeks before they occur. Developed in
              collaboration with A*STAR and SIMTech, these models use
              unsupervised learning for anomaly detection and semi-supervised
              soft clustering for multi-class fault prediction. Currently
              powering predictions across our AFOS Fusion products, with less
              than 25% customization effort required for new equipment types.
            </p>
            {/* Metrics display */}
            <div style={{ display: 'flex', gap: 32, marginBottom: 28 }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 28,
                    fontWeight: 800,
                    color: '#0A1628',
                  }}
                >
                  &gt;83%
                </div>
                <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                  Prediction accuracy
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 28,
                    fontWeight: 800,
                    color: '#0A1628',
                  }}
                >
                  &lt;25%
                </div>
                <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                  Customization for new data models
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 28,
                    fontWeight: 800,
                    color: '#0A1628',
                  }}
                >
                  Self-training
                </div>
                <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                  Capability
                </div>
              </div>
            </div>
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
                  R&amp;D Partners
                </div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>
                  A*STAR, SIMTech
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
                  Status
                </div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>
                  Deployed within RM&amp;D and LTMS.
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
              border: '1px solid rgba(31,153,197,0.1)',
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
                  'radial-gradient(ellipse at 50% 50%, rgba(31,153,197,0.06) 0%, transparent 60%)',
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
              [AI PREDICTION VISUALIZATION]
              <br />
              <br />
              Anomaly detection chart
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT 2: ATHENA (reversed) */}
      <section style={{ padding: '100px 64px', position: 'relative', background: '#F8FAFC' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 64, alignItems: 'start', maxWidth: 1200, margin: '0 auto', direction: 'rtl' }}
          data-animate
        >
          <div style={{ direction: 'ltr' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: '#111D35',
                  border: '1px solid rgba(108,187,217,0.2)',
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
                    stroke: '#6CBBD9',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#197EA3',
                }}
              >
                Athena
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
              Enterprise AI Knowledge Base
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
              Ask any question about your facilities — in plain English — and
              get an instant, accurate answer
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#475569',
                marginBottom: 28,
              }}
            >
              Athena is an AI assistant purpose-built for facility operations.
              Powered by Retrieval-Augmented Generation (RAG), it indexes your
              equipment manuals, maintenance procedures, compliance documents,
              and historical fault data — then answers questions in natural
              language. Embed it in any dashboard, mobile app, or deploy it
              standalone.
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
                'RAG-powered enterprise knowledge retrieval',
                'Natural language query: "What\'s the procedure for replacing the drive belt on escalator model X?"',
                'Indexes: equipment manuals, SOPs, compliance docs, historical fault records',
                'Three deployment modes: embedded in IRIS, embedded in any AFOS product, standalone',
                'Reduces dependency on senior technician expertise',
                'Training tool for junior staff',
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
                      background: '#1F99C5',
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
                  Deployed within IRIS (CPG FM). Standalone confirmed.
                </div>
              </div>
            </div>
          </div>
          <div style={{ direction: 'ltr' }}>
            <BrowserFrame
              src="/images/products/Athenna/Athenna.png"
              alt="Athena — Enterprise AI Knowledge Base chat interface"
              url="iris.softgridsensing.com/athena"
              reverse
            />
          </div>
        </div>
      </section>

      {/* PRODUCT 3: DIGITAL TWIN */}
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
                  background: '#111D35',
                  border: '1px solid rgba(108,187,217,0.2)',
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
                    stroke: '#6CBBD9',
                    strokeWidth: 1.8,
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#197EA3',
                }}
              >
                Digital Twin Platform
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
              Digital Twin Platform
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
              Web-based 3D visualization and simulation — see your building
              live, simulate its future
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#475569',
                marginBottom: 28,
              }}
            >
              Softgrid&#39;s Digital Twin platform turns your physical assets
              into interactive 3D models with live sensor data overlay. Powered
              by Unreal Engine and delivered via Pixel Streaming, it runs in any
              web browser — no installation, no special hardware. Use it for
              real-time monitoring visualization, &quot;what-if&quot; scenario
              simulation, or structural health monitoring with real-time finite
              element analysis.
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
                'Unreal Engine + Pixel Streaming (cloud GPU rendered, browser-based)',
                '300,000+ data updates per second',
                'Real-time Finite Element Analysis (FEA) visualization',
                'Live sensor data overlay on 3D building/asset model',
                '"What-if" scenario simulation for maintenance planning',
                'Structural Health Monitoring for high-value assets',
                'No client-side installation required',
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
                      background: '#1F99C5',
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
                  Reference
                </div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>
                  TCOMS structural health monitoring (offshore/marine)
                </div>
              </div>
            </div>
          </div>
          <BrowserFrameCarousel
            url="dt.softgridsensing.com"
            large
            images={[
              { src: '/images/products/DTL1.png', alt: 'Digital Twin — Port IOC Distribution', label: 'Port Distribution' },
              { src: '/images/products/DTL2-1.png', alt: 'Digital Twin — Urban Traffic Operations', label: 'Traffic Operations' },
              { src: '/images/products/DTL2-2.png', alt: 'Digital Twin — Traffic Control', label: 'Traffic Control' },
              { src: '/images/products/L4.png', alt: 'Digital Twin — Smart Parking IOC', label: 'Smart Parking' },
              { src: '/images/products/DTL3-1.png', alt: 'Digital Twin — Terminal Operations', label: 'Terminal Operations' },
              { src: '/images/products/DTL3-2.png', alt: 'Digital Twin — Yard Management', label: 'Yard Management' },
            ]}
          />
        </div>
      </section>

      {/* CROSS-SERIES ENHANCEMENT */}
      <section
        style={{
          padding: '80px 64px',
          background: '#0A1628',
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
              'radial-gradient(ellipse at 30% 50%, rgba(31,153,197,0.06) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 800,
            margin: '0 auto',
            textAlign: 'center',
          }}
          data-animate
        >
          <span
            style={{
              display: 'block',
              width: 48,
              height: 2,
              background: '#1F99C5',
              margin: '0 auto 32px',
            }}
          />
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: -1,
              color: '#FFFFFF',
              marginBottom: 24,
            }}
          >
            Intelligence That Powers Everything
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: '#B0BEC9',
            }}
          >
            AFOS Cortex products don&#39;t just stand alone — they enhance every
            product across the platform. Athena can be embedded in IRIS for
            instant knowledge retrieval during work orders. Digital Twin can
            visualize any asset monitored by our AFOS Fusion products. AI
            Predictive Analytics powers the fault predictions in RM&amp;D and
            LTMS. When you add intelligence, the entire platform gets smarter.
          </p>
        </div>
      </section>

      {/* SERIES CTA */}
      <section
        style={{
          padding: '100px 64px',
          background: '#1F99C5',
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
            See AFOS Cortex in Action
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
