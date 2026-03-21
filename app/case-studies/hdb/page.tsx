import { Button } from '@/components/ui/Button'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HDB Lift Monitoring — 10,000+ Lifts Case Study | Softgrid Sensing',
  description:
    'How Softgrid became the backbone of Singapore\'s public housing lift safety infrastructure — monitoring 10,000+ lifts across 4,000+ HDB blocks.',
}

const keyNumbers = [
  { value: '10,000+', label: 'Lifts Monitored' },
  { value: '4,000+', label: 'HDB Blocks' },
  { value: 'NRF CoT', label: 'National Research Awardee' },
  { value: 'Co-Owned', label: 'IP with HDB' },
]

const results = [
  {
    metric: 'Scale',
    detail:
      '10,000+ lifts across 4,000+ blocks — one of the largest IoT lift monitoring deployments globally',
  },
  {
    metric: 'Co-Owned IP',
    detail:
      'Technology IP jointly owned with HDB — a rare government endorsement',
  },
  {
    metric: 'National Recognition',
    detail:
      'NRF Cities of Tomorrow awardee — among few NRF projects to achieve full commercialization',
  },
  {
    metric: 'BCA Alignment',
    detail:
      "Platform designed for compliance with BCA's RM&D Code of Practice",
  },
  {
    metric: 'Foundation for AFOS',
    detail:
      'The HDB deployment validated the platform architecture that powers the entire AFOS product portfolio',
  },
]

export default function HdbCaseStudyPage(): React.ReactElement {
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
              Public Sector / Vertical Transport
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Monitoring 10,000+ Lifts Across 4,000+ HDB Blocks
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            How Softgrid&apos;s technology became the backbone of Singapore&apos;s public housing
            lift safety infrastructure.
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
            Singapore&apos;s Housing &amp; Development Board (HDB) manages the world&apos;s largest
            public housing programme, with over 1 million flats housing 80% of the population. The
            lift infrastructure — approximately 26,000+ lifts — requires continuous monitoring.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The existing SCADA-based system, operational since 1984, needed modernization for
            real-time diagnostics, predictive maintenance, and BCA compliance.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-navy-800 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Solution — What Was Deployed
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Hardware</h3>
              <p className="text-slate-300 leading-relaxed">
                LMD6000 devices — non-intrusive IoT sensors with edge processing and 4G/LTE
                connectivity. 4,000+ units installed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Software</h3>
              <p className="text-slate-300 leading-relaxed">
                LTMS — multi-tenant monitoring platform supporting Town Councils, managing agents,
                lift companies, EMSU, and HDB simultaneously.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI</h3>
              <p className="text-slate-300 leading-relaxed">
                Predictive diagnostic models analyzing vibration and operational data with &gt;85%
                fault prediction accuracy.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">Key Design Decisions</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0">&#8226;</span>
              <span>Non-intrusive installation: no modification to existing lift controllers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0">&#8226;</span>
              <span>Edge resilience: monitoring continues during internet outages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0">&#8226;</span>
              <span>
                Multi-organization architecture: different user types see different dashboards
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0">&#8226;</span>
              <span>Backwards compatible with existing LMD 6000 fleet</span>
            </li>
          </ul>
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
                href="/solutions/vertical-transport"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Smart Vertical Transport
              </Link>
            </p>
            <p className="text-slate-400">
              Products:{' '}
              <Link
                href="/products/fusion"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                LTMS
              </Link>
              {' / '}
              <Link
                href="/products/sense"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                LMD6000
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
