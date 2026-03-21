import { ProductBlockSection } from '@/components/sections/products/ProductBlockSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Fusion — Monitoring & Diagnostics | Softgrid Sensing',
  description:
    'Real-time monitoring, intelligent alerting, and predictive diagnostics across lifts, escalators, buildings, and large-scale infrastructure.',
}

const products = [
  {
    name: 'LTMS',
    fullName: 'Lift Telemonitoring System',
    oneLiner: 'National-scale lift monitoring for public sector operations',
    description:
      "Purpose-built for Singapore's public housing infrastructure. LTMS provides real-time lift status, multi-tenant architecture, alert management, and MND TCMR framework compliance reporting.",
    capabilities: [
      'Real-time lift status (movement, speed, door, load, floor level)',
      'Multi-tenant, multi-organization architecture',
      'Alert management with configurable escalation workflows',
      'MND TCMR framework compliance reporting',
      'P-trap and lift fault case lifecycle management',
      'Optional LLM-powered natural language data query',
      'Customizable dashboards per organization type',
    ],
    meta: [
      { label: 'Hardware', value: 'LMD6000' },
      { label: 'Traction', value: '10,000+ lifts, HDB trial successful' },
      { label: 'Pricing', value: 'Per lift per month' },
    ],
    badge: 'HDB Validated',
  },
  {
    name: 'RM&D',
    fullName: 'Remote Monitoring & Diagnostics',
    oneLiner: 'BCA-certified predictive lift diagnostics for private sector',
    description:
      'The only locally developed, BCA Sandbox Certified RM&D solution. Provides real-time fault detection, vibration-based health profiling, and automated BCA Code of Practice compliance.',
    capabilities: [
      'Real-time fault detection and vibration-based health profiling',
      'BCA Code of Practice compliance (auto-categorized faults)',
      '50+ fault types defined (breakdown and non-breakdown)',
      'Per-trip vibration analysis (peak-to-peak, jerk, FFT)',
      'Post-maintenance vibration comparison for service quality',
      'Brand-agnostic error code mapping',
      'Auto task generation for depot maintenance teams',
    ],
    meta: [
      { label: 'Hardware', value: 'LMDC + LBB300' },
      { label: 'Traction', value: '200+ lifts with Chevalier' },
      { label: 'Pricing', value: 'Per lift per month (HW leasing + SaaS)' },
    ],
    badge: 'BCA Sandbox Certified',
  },
  {
    name: 'Cloud BMS',
    fullName: 'Cloud Building Management System',
    oneLiner: 'Brand-agnostic cloud monitoring and control for all building systems',
    description:
      'Integrates with Tridium Niagara, Midea iBuilding/iEasyCare, and other BMS platforms. Provides unified monitoring for HVAC, lighting, energy, fire alarm, lifts, escalators, and more.',
    capabilities: [
      'BACnet / Modbus cross-brand communication',
      'Bi-directional MQTT control (QoS Level 2)',
      'Unified dashboard: HVAC, lighting, energy, fire alarm, lifts, escalators',
      'Energy consumption monitoring and trend analysis',
      'ESG data collection ready',
    ],
    meta: [
      { label: 'Hardware', value: 'Third-party BMS controllers' },
      { label: 'Traction', value: 'Deployed for HDB commercial buildings' },
      { label: 'Pricing', value: 'Per building / per asset per month' },
    ],
  },
  {
    name: 'Fusion RSA',
    fullName: 'Remote Sensing & Analytics',
    oneLiner: 'Satellite-based monitoring and AI-powered change detection',
    description:
      'Automated satellite imagery acquisition and AI-powered classification for large-scale assets — coastlines, forests, reservoirs, solar farms, construction sites.',
    capabilities: [
      'Automated satellite imagery acquisition (PlanetScope)',
      'AI-powered image classification (TensorFlow/Keras CNN)',
      'Multi-class land cover classification',
      'Change detection with configurable alert thresholds',
      'Automated monitoring cycles (monthly/weekly/custom)',
      'End-to-end automation (zero manual processing)',
      '4.76m spatial resolution, detects changes as small as 0.5 hectares',
    ],
    meta: [
      { label: 'Traction', value: 'NParks — 26 ecological areas' },
      { label: 'Pricing', value: 'Per area per month' },
    ],
  },
  {
    name: 'Escalator Monitoring',
    fullName: 'Escalator Monitoring & Diagnostics',
    oneLiner: 'AI-powered escalator monitoring combining vibration diagnostics with computer vision',
    description:
      'Multi-subsystem vibration monitoring combined with computer vision passenger behavior analysis. Processes 6 camera channels locally on edge devices.',
    capabilities: [
      'Multi-subsystem vibration monitoring: motor, gear, chain, handrail, brake',
      'Computer vision: fall detection 96.4%, reverse travel 95%, crowd detection 100%',
      'Edge VA device processes 6 camera channels locally',
      'Predictive maintenance at component level',
      'Monthly SLA report generation',
    ],
    meta: [
      { label: 'Hardware', value: 'EMD + Edge VA + 2-4 cameras' },
      { label: 'Reference', value: 'Guangzhou Metro Lines 18 and 7' },
      { label: 'Status', value: 'Demonstrated to LTA' },
    ],
  },
]

export default function FusionPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center gap-3.5 justify-center mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">AFOS Fusion</span>
          </div>
          <p className="text-cyan-400 text-lg mb-3">Monitoring &amp; Diagnostics</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            See What&apos;s Happening. Before It Becomes a Problem.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real-time monitoring, intelligent alerting, and predictive diagnostics across lifts, escalators, buildings, and large-scale infrastructure.
          </p>
        </div>
      </section>

      {/* Product Blocks */}
      <ProductBlockSection products={products} />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See AFOS Fusion in Action
          </h2>
          <p className="text-lg text-slate-400 mb-10">Schedule a demo with our team.</p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Request a Demo
          </Button>
        </div>
      </section>
    </>
  )
}
