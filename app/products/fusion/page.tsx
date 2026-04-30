import { Building2, Satellite } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { JsonLd } from '@/components/seo/JsonLd'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Fusion — Monitoring & Diagnostics | Softgrid Sensing',
  description:
    'Real-time monitoring, intelligent alerting, and predictive diagnostics across lifts, escalators, and building systems — powered by the AFOS platform.',
  alternates: { canonical: '/products/fusion' },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AFOS Fusion',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Monitoring & Diagnostics',
  operatingSystem: 'Web',
  description:
    'Real-time monitoring, intelligent alerting, and predictive diagnostics across lifts, escalators, and building systems.',
  url: 'https://softgridsensing.com/products/fusion',
  provider: {
    '@type': 'Organization',
    name: 'Softgrid Sensing',
    url: 'https://softgridsensing.com',
  },
}

export default function FusionPage(): React.ReactElement {
  return (
    <>
      <JsonLd data={productSchema} />
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'AFOS Fusion' }]} />
      {/* SERIES HERO */}
      <section
        style={{
          padding: '80px 64px 64px',
          background: 'linear-gradient(160deg, #0A1628 0%, #162544 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(31,153,197,0.08) 0%, transparent 50%)',
          }}
        />
        {/* Grid texture */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: 'linear-gradient(rgba(31,153,197,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(31,153,197,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680 }} data-animate>
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
              AFOS Fusion
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
            Monitoring &amp; Diagnostics
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: 20,
            }}
          >
            See What&apos;s Happening. Before It Becomes a Problem.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#B0BEC9',
              maxWidth: 580,
            }}
          >
            Real-time monitoring, intelligent alerting, and predictive diagnostics across lifts, escalators, and building systems — powered by the AFOS platform.
          </p>
        </div>
      </section>

      {/* PRODUCT 1: LTMS */}
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
                  background: '#D2EAF4',
                  border: '1px solid #A5D5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, stroke: '#197EA3', strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#197EA3',
                }}
              >
                LTMS
              </div>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                color: '#0A1628',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Lift Telemonitoring System
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                fontWeight: 500,
                color: '#64748B',
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              National-scale lift monitoring for public sector operations
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              Purpose-built for Singapore&apos;s public housing infrastructure. LTMS monitors lift status in real time across complex multi-stakeholder environments — Town Councils, managing agents, lift companies, EMSU, and HDB — all on a single platform.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
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
                'Real-time lift status: movement, speed, door, load, floor level',
                'Multi-tenant, multi-organization architecture',
                'Alert management with configurable escalation workflows',
                'MND TCMR framework compliance reporting',
                'P-trap and lift fault case lifecycle management',
                'Optional LLM-powered natural language data query',
                'Customizable dashboards per organization type',
                'Backwards compatible with LMD 6000 devices',
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
                      display: 'inline-block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Hardware</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>LMD6000</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Pricing</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Per lift per month</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Scale</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>10,000+ lifts deployment-ready</div>
              </div>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                background: 'rgba(31,153,197,0.08)',
                border: '1px solid rgba(31,153,197,0.15)',
                borderRadius: 100,
                fontFamily: 'var(--font-display)',
                fontSize: 12,
                fontWeight: 600,
                color: '#197EA3',
                marginTop: 20,
              }}
            >
              HDB Validated
            </div>
          </div>
          <BrowserFrame
            src="/images/products/Fusion/LTMS.webp"
            alt="LTMS — Lift Telemonitoring System dashboard"
            url="ltms.softgridsensing.com"
          />
        </div>
      </section>

      {/* PRODUCT 2: RM&D (reversed) */}
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
                  background: '#D2EAF4',
                  border: '1px solid #A5D5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, stroke: '#197EA3', strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#197EA3',
                }}
              >
                RM&amp;D
              </div>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                color: '#0A1628',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Remote Monitoring &amp; Diagnostics
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                fontWeight: 500,
                color: '#64748B',
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              BCA-certified predictive lift diagnostics for private sector
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              The only BCA Sandbox-certified remote monitoring and diagnostics solution built by a local independent provider. RM&amp;D delivers real-time fault detection, vibration-based health profiling, and automated compliance reporting for private sector lift operations.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
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
                'BCA Code of Practice compliance (auto-categorized faults and performance indicators)',
                '50+ fault types defined (breakdown and non-breakdown)',
                'Per-trip vibration analysis (peak-to-peak, jerk, FFT)',
                'Post-maintenance vibration comparison for service quality verification',
                'Brand-agnostic: customizable error code mapping for any lift maker',
                'Auto task generation forwarded to depot maintenance teams',
                'Real-time car call and hall call monitoring for traffic analysis',
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
                      display: 'inline-block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Hardware</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>LMDC + LBB300</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Pricing</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Per lift/month (HW lease + SaaS)</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Traction</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Chevalier (200+ lifts)</div>
              </div>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                background: 'rgba(31,153,197,0.08)',
                border: '1px solid rgba(31,153,197,0.15)',
                borderRadius: 100,
                fontFamily: 'var(--font-display)',
                fontSize: 12,
                fontWeight: 600,
                color: '#197EA3',
                marginTop: 20,
              }}
            >
              BCA Sandbox Certified
            </div>
          </div>
          <div style={{ direction: 'ltr' }}>
            <BrowserFrame
              src="/images/products/Fusion/RMD.webp"
              alt="RM&D — Remote Monitoring & Diagnostics dashboard"
              url="rmd.softgridsensing.com"
              reverse
            />
          </div>
        </div>
      </section>

      {/* PRODUCT 3: Cloud BMS */}
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
                  background: '#D2EAF4',
                  border: '1px solid #A5D5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Building2 size={22} color="#197EA3" strokeWidth={1.8} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#197EA3',
                }}
              >
                Cloud BMS
              </div>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                color: '#0A1628',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Cloud Building Management System
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                fontWeight: 500,
                color: '#64748B',
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              Brand-agnostic cloud monitoring and control for all your building systems
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              Your building has Tridium controllers, Midea edge devices, and maybe three other BMS brands installed over the years. Cloud BMS sits above all of them — providing one unified dashboard, one alert stream, and one data layer. No rip-and-replace required.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
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
                'Integration with Tridium Niagara, Midea iBuilding/iStation, and other BMS platforms',
                'BACnet / Modbus cross-brand communication',
                'Bi-directional MQTT control with QoS Level 2 (guaranteed delivery)',
                'Unified dashboard: HVAC, lighting, energy, fire alarm, lifts, escalators, gensets, FCU, AHU, chillers',
                'Energy consumption monitoring and trend analysis',
                'ESG data collection ready',
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
                      display: 'inline-block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Hardware</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Third-party BMS controllers</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Pricing</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Per building / per asset/month</div>
              </div>
            </div>
          </div>
          <BrowserFrame
            src="/images/products/Fusion/BMS.webp"
            alt="Cloud BMS — Building Management System dashboard"
            url="bms.softgridsensing.com"
          />
        </div>
      </section>

      {/* PRODUCT 4: Fusion RSA (reversed) */}
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
                  background: 'linear-gradient(135deg, #0c1e3a, #0a2847)',
                  border: '1px solid rgba(31,153,197,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Satellite size={22} color="#6CBBD9" strokeWidth={1.8} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#197EA3',
                }}
              >
                Fusion RSA
              </div>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                color: '#0A1628',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Remote Sensing &amp; Analytics
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                fontWeight: 500,
                color: '#64748B',
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              Satellite-based monitoring and AI-powered change detection for large-scale assets and environments
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              Some assets can&apos;t be reached by a sensor on a wall. Coastlines, forests, reservoirs, solar farms, construction sites — they&apos;re too large, too distributed, or too remote for contact-based monitoring. Fusion RSA brings them onto the same AFOS platform. Satellite imagery is acquired automatically, processed through AI classification models, and analyzed for changes — with alerts, reports, and dashboards delivered through the same engines that monitor your lifts and buildings.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
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
                'Automated satellite imagery acquisition (PlanetScope and other providers)',
                'AI-powered image classification (TensorFlow/Keras CNN, 21-dimensional feature input)',
                'Multi-class land cover classification (vegetation, built environment, water, cloud masking)',
                'Change detection with configurable alert thresholds',
                'Automated monthly/weekly/custom-frequency monitoring cycles',
                'Report generation with historical trend analysis',
                'End-to-end automation: zero manual processing from raw imagery to decision-ready outputs',
                'Resolution: 4.76m spatial resolution, detecting changes as small as 0.5 hectares',
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
                      display: 'inline-block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Data Source</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Satellite imagery (not physical sensors)</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Pricing</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Per area per month</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Traction</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>NParks — 26 ecological areas</div>
              </div>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                background: 'rgba(31,153,197,0.06)',
                border: '1px solid rgba(31,153,197,0.12)',
                borderRadius: 100,
                fontFamily: 'var(--font-display)',
                fontSize: 12,
                fontWeight: 600,
                color: '#197EA3',
                marginTop: 20,
              }}
            >
              <Satellite size={14} color="#197EA3" strokeWidth={2} />
              Planetary Scale Monitoring
            </div>
          </div>
          <div style={{ direction: 'ltr' }}>
            <BrowserFrame
              src="/images/products/Fusion/RSA.webp"
              alt="Fusion RSA — Remote Sensing Analytics for forest cover change detection"
              url="rsa.softgridsensing.com"
              reverse
            />
          </div>
        </div>
      </section>

      {/* PRODUCT 5: Escalator Monitoring (reversed) */}
      <section style={{ padding: '100px 64px', position: 'relative', background: '#FFFFFF' }}>
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
                  background: '#D2EAF4',
                  border: '1px solid #A5D5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, stroke: '#197EA3', strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <polyline points="22 5 14 5 4 19 2 19" />
                  <line x1="22" y1="9" x2="16" y2="9" />
                  <line x1="8" y1="19" x2="2" y2="19" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                  color: '#197EA3',
                }}
              >
                Escalator Monitoring
              </div>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                color: '#0A1628',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Escalator Monitoring &amp; Diagnostics
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                fontWeight: 500,
                color: '#64748B',
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              AI-powered escalator monitoring combining vibration diagnostics with computer vision
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              Comprehensive escalator health monitoring that goes beyond basic status checks. Multi-sensor vibration analysis detects component-level degradation (motor bearings, chain tension, gear wear), while computer vision identifies dangerous passenger behavior in real time — with accuracy rates above 95%.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
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
                'Multi-subsystem vibration monitoring: motor, reduction gear, drive chain, step chain, handrail, brake',
                'Computer vision passenger behavior analysis (fall detection 96.4%, reverse travel 95%, crowd detection 100%)',
                'Edge VA device processes 6 camera channels locally',
                'Predictive maintenance at component level',
                'Monthly SLA report generation',
                'Seamless integration with AFOS Workflow engine for automated maintenance dispatch',
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
                      display: 'inline-block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Hardware</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>EMD + Edge VA + 2-4 cameras</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Reference</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Guangzhou Metro Lines 18 &amp; 7</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Status</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Demonstrated to LTA. Deployment-ready.</div>
              </div>
            </div>
          </div>
          <div style={{ direction: 'ltr' }}>
            <BrowserFrame
              src="/images/products/Fusion/EMS.webp"
              alt="Escalator Monitoring System — floor plan with sensor placement"
              url="ems.softgridsensing.com"
              reverse
            />
          </div>
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
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }} data-animate>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: -1,
              color: '#FFFFFF',
              marginBottom: 32,
            }}
          >
            See AFOS Fusion in Action
          </h2>
          <Link
            href="/contact"
            className="hover:opacity-90"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: '#FFFFFF',
              color: '#0A1628',
              borderRadius: 8,
              fontFamily: 'var(--font-display)',
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
