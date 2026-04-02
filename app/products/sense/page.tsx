import { Breadcrumb } from '@/components/ui/Breadcrumb'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Sense — Edge Devices | Softgrid Sensing',
  description:
    'Industrial-grade IoT devices designed for non-intrusive installation, edge intelligence, and resilient operation. Leased, not sold — part of your per-asset subscription.',
}

export default function SensePage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'AFOS Sense' }]} />
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
            AFOS Sense
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              fontWeight: 500,
              color: '#22D3EE',
              letterSpacing: 1,
              marginBottom: 12,
              textTransform: 'uppercase' as const,
            }}
          >
            Edge Devices
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
            Full-Stack Starts at the Edge
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#94A3B8',
              maxWidth: 580,
            }}
          >
            Industrial-grade IoT devices designed for non-intrusive installation, edge intelligence, and resilient operation. Leased, not sold — part of your per-asset subscription.
          </p>
        </div>
      </section>

      {/* PRODUCT 1: LMD Series */}
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
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="8" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="16" y2="10" />
                  <line x1="8" y1="14" x2="12" y2="14" />
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
                LMD Series
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
              Lift Monitoring Device
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              Variants: LMD6000 (HDB spec, RS485, IM8 compliant, tamper detection), LMDC (proprietary RS485 + BACnet, IFE/Toshiba support, 60+ data points, IEC 62443 certified for BCA RM&amp;D), LMDC V2 (next-gen, under development).
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase' as const,
                letterSpacing: 1.5,
                color: '#94A3B8',
                marginBottom: 14,
              }}
            >
              Key Capabilities
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 28, padding: 0 }}>
              {[
                'Non-intrusive: installs without modifying lift controller or voiding warranty',
                'Edge processing: local AI inference reduces cloud dependency',
                'Resilient: continues operating during internet blackouts',
                'Secure: 4G/LTE tunnel connectivity (HDB LSS standard)',
                'Multi-sensor: vibration, acceleration, temperature',
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
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#94A3B8', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Deployment</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>4,000+ LMD6000 (HDB) + 200+ LMDC (Chevalier)</div>
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
                background: 'radial-gradient(ellipse at 50% 50%, rgba(31,153,197,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                color: '#64748B',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                lineHeight: 1.6,
              }}
            >
              [LMD DEVICE PHOTOS]<br /><br />LMD6000 and LMDC<br />standalone + installed
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT 2: LBB Series (reversed) */}
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
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
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
                LBB Series
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
              Lift BlackBox
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              Cartop-mounted sensor unit capturing vibration data along X, Y, and Z axes for lift health monitoring and predictive diagnostics.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase' as const,
                letterSpacing: 1.5,
                color: '#94A3B8',
                marginBottom: 14,
              }}
            >
              Key Capabilities
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 28, padding: 0 }}>
              {[
                'Multiple sensor connections: accelerometer, acoustic, current',
                'Edge computing for feature extraction on raw sensor data',
                'Built-in Powerline Communication (PLC) — single CAT6 cable for data and power',
                'Works independently or paired with LMDC',
                'Option for video analytics via SoC GPU',
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
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#94A3B8', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Variants</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>LBB300 (commercialized), LBB400 (under development)</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#94A3B8', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Deployment</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>200+ units with Chevalier</div>
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
              BCA RM&amp;D Certified
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
                background: 'radial-gradient(ellipse at 50% 50%, rgba(31,153,197,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                color: '#64748B',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                lineHeight: 1.6,
              }}
            >
              [LBB DEVICE PHOTO]<br /><br />Installed on cartop<br />and standalone
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT 3: EMD */}
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
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
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
                EMD
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
              Escalator Monitoring Device
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              Multi-sensor monitoring for escalator subsystems — motor, reduction gear, main drive, step chain, handrail, and machine room environment.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase' as const,
                letterSpacing: 1.5,
                color: '#94A3B8',
                marginBottom: 14,
              }}
            >
              Sensor Specifications
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 28 }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: 'left' as const,
                      padding: '10px 16px',
                      background: '#F8FAFC',
                      fontFamily: 'var(--font-display)',
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase' as const,
                      letterSpacing: 1,
                      color: '#64748B',
                      borderBottom: '1px solid #E2E8F0',
                    }}
                  >
                    Component
                  </th>
                  <th
                    style={{
                      textAlign: 'left' as const,
                      padding: '10px 16px',
                      background: '#F8FAFC',
                      fontFamily: 'var(--font-display)',
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase' as const,
                      letterSpacing: 1,
                      color: '#64748B',
                      borderBottom: '1px solid #E2E8F0',
                    }}
                  >
                    Sensor Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Main Motor', 'Vibration sensor'],
                  ['Reduction Gear', 'Vibration + temperature sensor'],
                  ['Motor Floor Base', 'Vibration sensor'],
                  ['Main Drive Shaft', 'Vibration sensor'],
                  ['Handrail Belt', 'Speed sensor'],
                  ['Step Chain Tensioner', 'Vibration + distance sensor'],
                  ['Machine Room', 'Temperature + noise sensor'],
                ].map(([component, sensor]) => (
                  <tr key={component}>
                    <td
                      style={{
                        padding: '10px 16px',
                        borderBottom: '1px solid #F1F5F9',
                        fontSize: 14,
                        color: '#0A1628',
                        fontWeight: 600,
                      }}
                    >
                      {component}
                    </td>
                    <td
                      style={{
                        padding: '10px 16px',
                        borderBottom: '1px solid #F1F5F9',
                        fontSize: 14,
                        color: '#334155',
                      }}
                    >
                      {sensor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#475569', marginBottom: 28 }}>
              Companion Edge VA Device (180 x 110 x 55mm) processes 6 camera channels for computer vision.
            </p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#94A3B8', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Status</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>Demonstrated to LTA. Deployment-ready.</div>
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
                background: 'radial-gradient(ellipse at 50% 50%, rgba(31,153,197,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                color: '#64748B',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                lineHeight: 1.6,
              }}
            >
              [EMD DEVICE PHOTO/RENDER]<br /><br />Device + sensor<br />placement diagram
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE-AS-A-SERVICE */}
      <section style={{ padding: '80px 64px', background: '#0A1628', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }} data-animate>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 32,
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: 24,
            }}
          >
            Hardware-as-a-Service
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: '#94A3B8' }}>
            All Softgrid hardware is provided as part of your per-asset subscription. No upfront capital expenditure. No hardware procurement headaches. We deploy, we maintain, we upgrade — you just pay per asset per month.
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
            Need Technical Specifications?
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
            Contact Our Engineering Team
          </Link>
        </div>
      </section>
    </>
  )
}
