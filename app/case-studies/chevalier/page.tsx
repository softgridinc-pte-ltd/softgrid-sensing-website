import { Button } from '@/components/ui/Button'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chevalier RM&D — BCA-Certified Lift Diagnostics | Softgrid Sensing',
  description:
    'The first independent RM&D solution to achieve BCA Sandbox certification — now operating on 200+ lifts for Chevalier.',
}

const keyNumbers = [
  { value: '200+', label: 'Lifts Monitored' },
  { value: 'BCA', label: 'Sandbox Certified' },
  { value: 'SaaS', label: 'Per-Lift-Per-Month Model' },
  { value: '50+', label: 'Fault Types Detected' },
]

const results = [
  {
    metric: 'BCA Certified',
    detail:
      "Official BCA Sandbox certification — listed on BCA's approved solutions",
  },
  {
    metric: 'Brand-Agnostic',
    detail: 'Single platform monitoring IFE, Toshiba, and other brands',
  },
  {
    metric: 'IoT SaaS Model',
    detail: 'Subscription model validated in commercial deployment',
  },
  {
    metric: 'Full Closed Loop',
    detail:
      'Alert \u2192 auto work order \u2192 technician dispatch \u2192 verified resolution \u2192 data feedback',
  },
]

export default function ChevalierCaseStudyPage(): React.ReactElement {
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
              Private Sector / Vertical Transport
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            BCA-Certified Predictive Maintenance for Chevalier&apos;s Lift Fleet
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The first independent RM&amp;D solution to achieve BCA Sandbox certification — now
            operating on 200+ lifts.
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
            Chevalier, a leading lift servicing company in Singapore, needed a remote monitoring and
            diagnostics solution compliant with BCA&apos;s Code of Practice — supporting their
            diverse fleet of lift brands (IFE, Toshiba, others).
          </p>
          <p className="text-slate-300 leading-relaxed">
            OEM solutions only support their own brands. Chevalier needed a brand-agnostic solution
            for unified monitoring.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-navy-800 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Solution</h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Hardware</h3>
              <p className="text-slate-300 leading-relaxed">
                LMDC (lift monitoring) + LBB300 (vibration sensing) — proprietary protocol
                supporting multi-brand lifts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Software</h3>
              <p className="text-slate-300 leading-relaxed">
                RM&amp;D — BCA-compliant monitoring with auto-categorized faults, performance
                indicators, per-trip vibration profiling.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Mobile</h3>
              <p className="text-slate-300 leading-relaxed">
                LiftProf — GPS-dispatched field service with auto-generated reports.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Commercial Model</h3>
              <p className="text-slate-300 leading-relaxed">
                Per lift per month subscription (hardware leasing + software). No upfront CapEx.
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
                RM&amp;D, LiftProf
              </Link>
              {' / '}
              <Link
                href="/products/orches"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                AFOS Orches
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
