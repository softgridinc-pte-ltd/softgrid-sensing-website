import { ProductBlockSection } from '@/components/sections/products/ProductBlockSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Orches — Operations & Maintenance | Softgrid Sensing',
  description:
    'Work order management, mobile field service, asset tracking, and AI-powered service desk — closing the loop between detection and resolution.',
}

const products = [
  {
    name: 'IRIS',
    fullName: 'Integrated Resource & Information System',
    oneLiner: 'AI-enabled CMMS for managing agents — work orders, assets, contractors, all in one place',
    description:
      'A comprehensive digital workflow platform that replaces paper-based processes. Manages the full work order lifecycle with asset registry, contractor management, and embedded AI knowledge base.',
    capabilities: [
      'Work order lifecycle: creation \u2192 assignment \u2192 execution \u2192 verification \u2192 closure',
      'Asset registry with lifecycle tracking and maintenance history',
      'Contractor and vendor management',
      'Mobile workforce application for field teams',
      'SLA monitoring and automated compliance reporting',
      'Athena AI knowledge base embedded',
      'Customizable dashboards per organization type',
    ],
    meta: [
      { label: 'Traction', value: 'Deployed with CPG FM' },
      { label: 'Pricing', value: 'Per user / per asset per month (SaaS)' },
    ],
  },
  {
    name: 'LiftProf',
    fullName: 'Field Service Mobile App',
    oneLiner: 'The technician\u2019s companion — tasks, diagnostics, and reports in one mobile app',
    description:
      'Mobile app for field technicians. Receives configurable task lists from RM&D or IRIS, with pre-populated symptoms, GPS-based dispatch, and auto-generated service reports.',
    capabilities: [
      'Configurable task lists from RM&D or IRIS backend',
      'Alert-triggered tasks with pre-populated expected symptoms',
      'Actual symptom and solution feedback with site photos',
      'Auto-generated service reports on completion',
      'GPS-based dispatch to nearest qualified technician',
    ],
    meta: [
      { label: 'Traction', value: 'Chevalier — 200+ lifts, per-lift-per-month subscription' },
    ],
  },
  {
    name: 'Nova',
    fullName: 'Voice AI',
    oneLiner: 'AI-powered voice agent for facility call centers — 24/7, no staffing required',
    description:
      'Automated voice AI that handles incoming facility calls — picks up, understands, categorizes, creates cases, and routes escalations. Integrates with IRIS for seamless work order creation.',
    capabilities: [
      'Automated call pick-up and natural language understanding',
      'Case creation and categorization',
      'Escalation routing to appropriate teams',
      '24/7 operation without additional staff',
      'Integration with IRIS work order system',
    ],
    meta: [
      { label: 'Status', value: 'Available as add-on to IRIS or standalone' },
    ],
  },
]

export default function OrchesPage(): React.ReactElement {
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
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">AFOS Orches</span>
          </div>
          <p className="text-cyan-400 text-lg mb-3">Operations &amp; Maintenance</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            From Alert to Resolution. One Seamless Workflow.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Work order management, mobile field service, asset tracking, and AI-powered service desk &mdash; closing the loop between detection and resolution.
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
            See AFOS Orches in Action
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
