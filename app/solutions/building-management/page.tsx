import { SolutionHero } from '@/components/sections/solutions/SolutionHero'
import { ChallengeSection } from '@/components/sections/solutions/ChallengeSection'
import { ApproachSection } from '@/components/sections/solutions/ApproachSection'
import { ProductsInvolvedSection } from '@/components/sections/solutions/ProductsInvolvedSection'
import { BenefitsSection } from '@/components/sections/solutions/BenefitsSection'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Building Management System (BMS) — Singapore | Softgrid',
  description:
    'AI-driven smart building management system (BMS) for HVAC, lighting, energy optimization, and unified building operations. Brand-agnostic, IoT-ready. By Softgrid Sensing, Singapore.',
  alternates: { canonical: '/solutions/building-management' },
}

const challenges = [
  {
    title: 'Multi-Vendor Fragmentation',
    description:
      'Your building has Tridium for HVAC, another system for lighting, a third for fire alarm. Each has its own dashboard, its own data silo, its own login. No unified view of building health.',
  },
  {
    title: 'Energy Blind Spots',
    description:
      "Without integrated monitoring, energy waste goes undetected. Green Mark 2021 and the upcoming Mandatory Energy Improvement regime demand data you can't easily get from fragmented systems.",
  },
  {
    title: 'Reactive Operations',
    description:
      'Equipment failures are discovered when tenants complain. By then, comfort is degraded, costs escalate, and SLAs are breached.',
  },
  {
    title: 'Compliance Burden',
    description:
      'Green Mark, energy audits, ESG reporting — all require data that sits in multiple disconnected systems. Manual compilation is expensive and error-prone.',
  },
]

const steps = [
  {
    title: 'Integration Layer',
    description:
      'Cloud BMS connects to your existing BMS controllers (Tridium, Midea, and others) via BACnet and Modbus. No rip-and-replace. Your existing investment is preserved — we add intelligence on top.',
  },
  {
    title: 'Unified Monitoring',
    description:
      'One dashboard for HVAC, lighting, energy, fire alarm, lifts, escalators, gensets, FCU, AHU, chillers. Bi-directional MQTT control with guaranteed message delivery (QoS Level 2).',
  },
  {
    title: 'Operations Management',
    description:
      'IRIS integrates with Cloud BMS for closed-loop maintenance: equipment fault detected → work order auto-generated → technician dispatched → resolution verified.',
  },
  {
    title: 'Intelligence Layer',
    description:
      'AI analytics identify energy waste patterns. Athena answers questions about building procedures. ESG data collection runs automatically in the background.',
  },
]

const products = [
  { product: 'Cloud BMS', series: 'AFOS Fusion', role: 'Building equipment monitoring & control' },
  { product: 'IRIS', series: 'AFOS Orches', role: 'Work orders, assets, compliance' },
  { product: 'Athena', series: 'AFOS Cortex', role: 'AI knowledge base for building operations' },
  { product: 'Digital Twin', series: 'AFOS Cortex', role: '3D building visualization (optional)' },
]

const benefits = [
  {
    title: 'Brand-Agnostic',
    description: 'Works with any BMS: Tridium, Midea, Schneider, Honeywell — no lock-in.',
  },
  {
    title: 'Energy Optimization',
    description: 'Identify waste patterns, optimize operations, reduce utility costs.',
  },
  {
    title: 'Green Mark Ready',
    description: 'Automated data collection for Green Mark, energy audits, ESG reports.',
  },
  {
    title: 'Single Pane of Glass',
    description: 'One dashboard, one alert stream, one data layer for the entire building.',
  },
  {
    title: 'Closed-Loop Maintenance',
    description: 'From fault detection to resolution — automated, tracked, reported.',
  },
]

export default function BuildingManagementPage(): React.ReactElement {
  return (
    <>
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Smart Building Management' }]} />
      <SolutionHero
        overline="Smart Building Management"
        headline="One Dashboard for Every System in Your Building"
        subheadline="Brand-agnostic building monitoring, energy optimization, and automated operations — regardless of what BMS you have installed."
        image="/images/background/bg15.webp"
      />

      <ChallengeSection
        overline="The Challenge"
        headline="Why Building Management Falls Short"
        subtitle="Multi-vendor buildings create fragmented operations, energy blind spots, and compliance headaches."
        challenges={challenges}
      />

      <ApproachSection
        overline="Our Approach"
        headline="How Softgrid Unifies Your Building"
        subtitle="A layered approach that preserves your existing investment and adds intelligence on top."
        steps={steps}
        accentColor="#0D9488"
      />

      <ProductsInvolvedSection
        overline="What Runs This Solution"
        headline="An Open Stack for Every Brand"
        subtitle="Four products from the AFOS platform, working together — vendor-agnostic by design."
        products={products}
      />

      <BenefitsSection
        overline="What You Get"
        headline="One Dashboard. Real Energy Savings."
        subtitle="Measurable outcomes for building owners and facility managers."
        benefits={benefits}
      />

      {/* Closing CTA */}
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
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
        <div data-animate style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1, color: '#FFFFFF', marginBottom: 32 }}>
            Ready to Unify Your Building Operations?
          </h2>
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
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
