import Link from 'next/link'
import { ProductSeriesSection } from '@/components/sections/products/ProductSeriesSection'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Softgrid Sensing',
  description:
    "Explore Softgrid's AFOS product portfolio: Sense, Fusion, Orches, and Cortex — four product series powered by the AFOS platform.",
}

const integrationTags = [
  'MQTT',
  'CoAP',
  'OPC-UA',
  'BACnet',
  'Modbus',
  'REST API',
  'Tridium Niagara',
  'Midea iBuilding',
]

export default function ProductsPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          padding: '180px 64px 120px',
          background: '#0A1628',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Radial glows */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 30%, rgba(0,180,216,0.10) 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, rgba(0,119,182,0.06) 0%, transparent 40%), radial-gradient(ellipse at 80% 60%, rgba(144,224,239,0.04) 0%, transparent 35%)',
            pointerEvents: 'none',
          }}
        />
        {/* Grid texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,180,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)',
            maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div data-animate style={{ position: 'relative', zIndex: 2, maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, #00b4d8)' }} />
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, color: '#00b4d8' }}>Product Portfolio</span>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, #00b4d8, transparent)' }} />
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 800, letterSpacing: -2.5, lineHeight: 1.1, color: '#FFFFFF', marginBottom: 24 }}>
            End-to-End Products.<br />Built In-House.{' '}
            <span style={{ background: 'linear-gradient(135deg, #00b4d8, #90e0ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Powered by AFOS.
            </span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: '#94A3B8', maxWidth: 640, margin: '0 auto' }}>
            From real-time monitoring to AI-powered analytics &mdash; every product is designed, developed, and deployed by our team. No reselling. No stitching together third-party tools.
          </p>
        </div>
      </section>

      {/* Product Series */}
      <ProductSeriesSection />

      {/* Integration Note */}
      <section style={{ padding: '80px 64px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }} data-animate>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: '#0A1628', marginBottom: 16 }}>
            Built to Integrate
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#475569', marginBottom: 32 }}>
            Our products work together as one system &mdash; and connect to your existing infrastructure through BACnet, Modbus, REST APIs, and cloud-to-cloud integrations.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {integrationTags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '7px 16px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#334155',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 64px',
          background: '#00b4d8',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(0,119,182,0.3) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
        <div data-animate style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: -1.5, color: '#FFFFFF', marginBottom: 16, lineHeight: 1.15 }}>
            Want to See Our Products in Action?
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 44 }}>
            Schedule a walkthrough with our solutions team.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#FFFFFF',
              color: '#0A1628',
              padding: '16px 40px',
              borderRadius: 6,
              fontSize: 16,
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
