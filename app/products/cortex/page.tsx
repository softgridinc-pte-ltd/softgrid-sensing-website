import { ProductBlockSection } from '@/components/sections/products/ProductBlockSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFOS Cortex — Data & Intelligence | Softgrid Sensing',
  description:
    'AI knowledge base, digital twin visualization, and predictive analytics — turning your operational data into your most valuable asset.',
}

const products = [
  {
    name: 'Athena',
    fullName: 'AI Knowledge Base',
    oneLiner: 'Ask any question about your facilities — in plain English',
    description:
      'RAG-powered AI assistant that indexes equipment manuals, SOPs, compliance documents, and historical fault records. Available in any AFOS product surface or as a standalone deployment.',
    capabilities: [
      'Retrieval-Augmented Generation on enterprise knowledge',
      'Natural language query in any language',
      'Three deployment modes: embedded in IRIS, embedded in any AFOS product, standalone',
      'Reduces dependency on senior technician expertise',
      'Training tool for junior staff',
    ],
    meta: [
      { label: 'Traction', value: 'Deployed within IRIS (CPG FM); standalone confirmed' },
    ],
  },
  {
    name: 'Digital Twin',
    fullName: 'Digital Twin Platform',
    oneLiner: 'Web-based 3D visualization and simulation — see your building live, simulate its future',
    description:
      'Powered by Unreal Engine with Pixel Streaming — cloud GPU rendered, browser-based. No client-side installation required. Overlays live sensor data on 3D building models for real-time operational visualization.',
    capabilities: [
      '300,000+ data updates per second',
      'Real-time Finite Element Analysis (FEA) visualization',
      'Live sensor data overlay on 3D building/asset model',
      "'What-if' scenario simulation for maintenance planning",
      'Structural Health Monitoring for high-value assets',
      'No client-side installation required',
    ],
    meta: [
      { label: 'Reference', value: 'Deployed for TCOMS structural health monitoring (offshore/marine)' },
    ],
  },
  {
    name: 'AI Predictive Analytics',
    fullName: 'AI Predictive Analytics',
    oneLiner: 'ML models that predict equipment failures before they happen',
    description:
      'Unsupervised learning for anomaly detection and semi-supervised soft clustering for multi-class fault prediction. Developed in collaboration with A*STAR and SIMTech.',
    capabilities: [
      '>85% prediction accuracy',
      '<25% customization for new data models',
      'Self-training capability from operational data',
      'Vibration, acceleration, and temperature analysis',
      'Deployed within RM&D and LTMS',
    ],
    meta: [
      { label: 'R&D Partners', value: 'A*STAR, SIMTech' },
      { label: 'Status', value: 'Deployed in RM&D and LTMS; standalone packaging evaluated' },
    ],
  },
  {
    name: 'ESG & Compliance Reporting',
    fullName: 'ESG & Compliance Reporting',
    oneLiner: 'Automated compliance reports from operational data',
    description:
      'Generates Green Mark 2021 documentation, energy audit reports, and ESG compliance outputs from data already collected by the AFOS platform.',
    capabilities: [
      'Green Mark 2021 documentation',
      'Energy audit report generation',
      'ESG compliance data outputs',
      'Automated data collection from all AFOS products',
    ],
    meta: [
      { label: 'Status', value: 'Data collection capabilities exist; report templates under development' },
    ],
    badge: 'Under Development',
  },
]

export default function CortexPage(): React.ReactElement {
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
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">AFOS Cortex</span>
          </div>
          <p className="text-cyan-400 text-lg mb-3">Data &amp; Intelligence</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            From Data to Decisions. From Monitoring to Foresight.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AI knowledge base, digital twin visualization, and predictive analytics &mdash; turning your operational data into your most valuable asset.
          </p>
        </div>
      </section>

      {/* Product Blocks */}
      <ProductBlockSection products={products} />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See AFOS Cortex in Action
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
