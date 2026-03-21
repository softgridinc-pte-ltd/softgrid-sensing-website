import { ProductBlockSection } from '@/components/sections/products/ProductBlockSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Sense — Edge Devices | Softgrid Sensing',
  description:
    'Industrial-grade IoT devices designed for non-intrusive installation, edge intelligence, and resilient operation.',
}

const products = [
  {
    name: 'LMD Series',
    fullName: 'Lift Monitoring Device',
    oneLiner: 'Non-intrusive IoT sensors for elevator monitoring',
    description:
      'The LMD Series is the primary sensing device for lift monitoring. Available in multiple variants (LMD6000, LMDC, LMDC V2) to support different protocols and building types. Installed non-intrusively with edge processing, 4G/LTE connectivity, and resilient operation during network outages.',
    capabilities: [
      'RS485 protocol support (Gen-1/Gen-2 adapters)',
      'IM8 security compliant with tamper detection',
      'Edge processing and local data buffering',
      '4G/LTE tunnel for reliable connectivity',
      'Multi-sensor: vibration, acceleration, temperature',
      '60+ data points per lift (LMDC variant)',
    ],
    meta: [
      { label: 'Variants', value: 'LMD6000, LMDC, LMDC V2' },
      { label: 'Deployment', value: '4,000+ LMD6000 (HDB), 200+ LMDC (Chevalier)' },
    ],
  },
  {
    name: 'LBB Series',
    fullName: 'Lift BlackBox',
    oneLiner: 'Cartop-mounted sensor for vibration-based diagnostics',
    description:
      'The LBB Series captures X/Y/Z axis vibration data from the lift car top. Works independently or paired with LMDC for comprehensive monitoring. Supports multiple sensor connections and optional GPU for video analytics.',
    capabilities: [
      'X/Y/Z axis accelerometer and acoustic sensors',
      'Edge computing for real-time feature extraction',
      'Powerline Communication (PLC) — CAT6 for data and power',
      'Optional SoC GPU for video analytics',
      'Works standalone or paired with LMDC',
    ],
    meta: [
      { label: 'Variants', value: 'LBB300 (commercialized), LBB400 (in development)' },
      { label: 'Deployment', value: '200+ units with Chevalier' },
    ],
    badge: 'BCA RM&D Certified',
  },
  {
    name: 'EMD',
    fullName: 'Escalator Monitoring Device',
    oneLiner: 'Multi-sensor suite for escalator subsystem monitoring',
    description:
      'The EMD monitors all critical escalator subsystems — motor, reduction gear, main drive, step chain, handrail, and machine room. Paired with an Edge VA device that processes 6 camera channels for passenger behavior detection (fall detection 96.4%, reverse travel 95%).',
    capabilities: [
      '7 sensor types covering all escalator subsystems',
      'Motor, reduction gear, main drive, step chain, handrail monitoring',
      'Companion Edge VA Device (180\u00d7110\u00d755mm)',
      '6 camera channel processing for video analytics',
      'Fall detection 96.4%, crowd detection 100%',
    ],
    meta: [
      { label: 'Status', value: 'Demonstrated to LTA, deployment-ready' },
      { label: 'Reference', value: 'Guangzhou Metro Lines 18 and 7' },
    ],
  },
]

export default function SensePage(): React.ReactElement {
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
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">AFOS Sense</span>
          </div>
          <p className="text-cyan-400 text-lg mb-3">Edge Devices</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Full-Stack Starts at the Edge
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Industrial-grade IoT devices designed for non-intrusive installation, edge intelligence, and resilient operation. Leased, not sold &mdash; part of your per-asset subscription.
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
            Need Technical Specifications?
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
