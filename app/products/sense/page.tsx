import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ProductImageCarousel } from '@/components/ui/ProductImageCarousel'
import Image from 'next/image'
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
              AFOS Sense
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
              color: '#B0BEC9',
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
                color: '#B0BEC9',
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
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Deployment</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>4,000+ LMD6000 (HDB) + 200+ LMDC (Chevalier)</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {/* Hero image — full interior view */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
              <Image
                src="/images/products/LMD/LMD6000 full set without adapter_03.jpg"
                alt="LMD6000 interior — door open showing PCB and edge computing board"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 shadow backdrop-blur">
                LMD6000 — Interior View
              </span>
            </div>
            {/* Detail shots — 3-column strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { src: '/images/products/LMD/LMD6000 full set without adapter_01.jpg', label: 'Full Set' },
                { src: '/images/products/LMD/LMD6000 full set without adapter_04 (door panel).jpg', label: 'Door Panel' },
                { src: '/images/products/LMD/LMD6000 full set without adapter_05 (main).jpg', label: 'Main Board' },
              ].map((img) => (
                <div
                  key={img.src}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={`LMD6000 — ${img.label}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 inline-flex items-center rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-navy-800 shadow-sm backdrop-blur">
                    {img.label}
                  </span>
                </div>
              ))}
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
                color: '#B0BEC9',
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
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Variants</div>
                <div style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>LBB300 (commercialized), LBB400 (under development)</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#B0BEC9', marginBottom: 4, fontFamily: 'var(--font-display)' }}>Deployment</div>
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
          <div style={{ direction: 'ltr' }} className="flex flex-col gap-3">
            {/* Carousel — first 4 LBB images */}
            <ProductImageCarousel
              alt="LBB Lift BlackBox"
              images={[
                { src: '/images/products/LBB/Image_20241014140800.jpg', label: 'LBB300 — Front I/O Panel' },
                { src: '/images/products/LBB/Image_20241014140814.jpg', label: 'LBB300 — Side View' },
                { src: '/images/products/LBB/Image_20241014140823.jpg', label: 'LBB300 — Terminal Connectors' },
                { src: '/images/products/LBB/Image_20241014140826.jpg', label: 'LBB300 — Exterior' },
              ]}
            />
            {/* Detail shots — 3-column strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { src: '/images/products/LBB/Image_20250407174437.jpg', label: 'Internal PCB' },
                { src: '/images/products/LBB/LBB400 SIM HDMI DC FPOE and other ports 2.jpg', label: 'LBB400 Ports' },
                { src: '/images/products/LBB/LBB400 SIM HDMI DC FPOE and other ports.jpg', label: 'LBB400 Packaging' },
              ].map((img) => (
                <div
                  key={img.src}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={`LBB — ${img.label}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 inline-flex items-center rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-navy-800 shadow-sm backdrop-blur">
                    {img.label}
                  </span>
                </div>
              ))}
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
                color: '#B0BEC9',
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
          </div>
          <ProductImageCarousel
            alt="EMD Escalator Monitoring Device"
            images={[
              { src: '/images/products/EMD/EMD Enclosure inside view 2.jpg', label: 'EMD — Enclosure Interior' },
              { src: '/images/products/EMD/EMD PCB Board 4.jpg', label: 'EMD — PCB Board Close-up' },
              { src: '/images/products/EMD/EMD PCB.png', label: 'EMD-V1 — Main Board' },
            ]}
          />
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
