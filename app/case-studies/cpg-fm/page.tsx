import { Button } from '@/components/ui/Button'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CPG FM — AI-Powered Facility Management | Softgrid Sensing',
  description:
    'Digitizing facility operations with IRIS CMMS and Athena AI knowledge base for CPG FM.',
}

const keyNumbers = [
  { value: 'IRIS', label: 'CMMS Deployed' },
  { value: 'Athena', label: 'AI Knowledge Base Live' },
  { value: 'Digital', label: 'Work Order Lifecycle' },
  { value: 'AI', label: 'Decision Support Embedded' },
]

const results = [
  {
    metric: 'Digital Operations',
    detail: 'Paper-based work orders replaced with full digital lifecycle',
  },
  {
    metric: 'AI Knowledge Access',
    detail:
      'Athena provides instant answers — reducing dependency on senior staff',
  },
  {
    metric: 'Compliance Ready',
    detail:
      'Audit trails and SLA documentation generated automatically',
  },
  {
    metric: 'Foundation for Scale',
    detail:
      'Platform ready to extend to additional properties and monitoring',
  },
]

export default function CpgFmCaseStudyPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,180,216,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center gap-3.5 justify-center mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">
              Facility Operations / Managing Agent
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            AI-Powered Facility Management for CPG FM
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Digitizing facility operations with IRIS CMMS and Athena AI knowledge base.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {keyNumbers.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Background</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            CPG FM, a property management company serving Singapore&apos;s commercial and
            institutional properties, operated with paper work orders, Excel-based tracking, and
            knowledge siloed in experienced staff.
          </p>
          <p className="text-slate-300 leading-relaxed">
            As regulatory requirements increased and experienced technicians approached retirement,
            digital transformation became urgent.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-navy-800 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Solution</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">IRIS</h3>
              <p className="text-slate-300 leading-relaxed">
                Full CMMS platform — digital work orders, asset registry, contractor management, SLA
                monitoring.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Athena</h3>
              <p className="text-slate-300 leading-relaxed">
                AI knowledge base embedded in IRIS — natural language query for equipment procedures,
                compliance documents, historical fault data.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Integration</h3>
              <p className="text-slate-300 leading-relaxed">
                Connected to monitoring feeds for automated work order generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Results</h2>
          <div className="border border-navy-700 rounded-lg overflow-hidden">
            {results.map((row, index) => (
              <div
                key={row.metric}
                className={`flex flex-col md:flex-row gap-2 md:gap-8 p-4 md:p-5 ${
                  index < results.length - 1 ? 'border-b border-navy-700' : ''
                }`}
              >
                <div className="text-cyan-400 font-semibold md:w-48 shrink-0">{row.metric}</div>
                <div className="text-slate-300">{row.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related</h3>
          <div className="space-y-2 text-sm">
            <p className="text-slate-400">
              Solution:{' '}
              <Link
                href="/solutions/facility-operations"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Smart Facility Operations
              </Link>
            </p>
            <p className="text-slate-400">
              Products:{' '}
              <Link
                href="/products/orches"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                IRIS
              </Link>
              {' / '}
              <Link
                href="/products/cortex"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Athena
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Let&apos;s discuss how Softgrid can help transform your operations.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
