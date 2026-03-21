import { Button } from '@/components/ui/Button'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NParks Forest Monitoring — AI Satellite Analysis | Softgrid Sensing',
  description:
    'AI-powered satellite image analysis for national-scale environmental monitoring — monthly forest cover monitoring across Singapore.',
}

const keyNumbers = [
  { value: 'Monthly', label: 'Monitoring Frequency' },
  { value: '4.76m', label: 'Spatial Resolution' },
  { value: 'CNN', label: 'AI Classification Model' },
  { value: '26', label: 'Ecological Areas Covered' },
]

const results = [
  {
    metric: 'National Coverage',
    detail: 'All of Singapore monitored monthly at 4.76m resolution',
  },
  {
    metric: 'Detection Speed',
    detail: 'Change detection latency reduced from months to ~5 days',
  },
  {
    metric: 'Automated Pipeline',
    detail:
      'Zero manual processing — raw satellite data to decision-ready reports',
  },
  {
    metric: 'Resolution',
    detail: 'Captures forest patches as small as 0.5 hectares',
  },
]

export default function NparksCaseStudyPage(): React.ReactElement {
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
              Infrastructure &amp; Environmental / Government
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Monthly Forest Cover Monitoring Across Singapore
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AI-powered satellite image analysis for national-scale environmental monitoring — the
            same AFOS platform, at planetary scale.
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
          <p className="text-slate-300 leading-relaxed">
            Singapore&apos;s National Parks Board (NParks) required a system for monthly monitoring
            of forest cover and change detection across 26 ecological areas — replacing
            labor-intensive manual surveys with automated, AI-driven satellite analysis.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-navy-800 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Solution</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Fusion RSA</h3>
              <p className="text-slate-300 leading-relaxed">
                Automated pipeline from satellite data acquisition (PlanetScope) through AI
                classification to report generation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI Model</h3>
              <p className="text-slate-300 leading-relaxed">
                TensorFlow/Keras CNN with 21-dimensional feature input for
                forest/non-forest/water/cloud classification.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Automation</h3>
              <p className="text-slate-300 leading-relaxed">
                End-to-end monthly pipeline — satellite data, cloud detection, spectral analysis, CNN
                classification, change detection, report generation — fully automated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Scale Note */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="border-l-4 border-cyan-400 pl-6 py-2">
            <h3 className="text-lg font-semibold text-white mb-3">Platform Scale Note</h3>
            <p className="text-slate-300 leading-relaxed italic">
              &ldquo;This deployment demonstrates that the AFOS platform is scale-invariant. The
              same four engines — Connect, Intelligence, Workflow, Data — that monitor a lift
              motor&apos;s vibration also process satellite imagery across an entire
              country.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-navy-800 py-16 md:py-24">
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
                href="/solutions/infrastructure-environmental"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Infrastructure &amp; Environmental
              </Link>
            </p>
            <p className="text-slate-400">
              Products:{' '}
              <Link
                href="/products/fusion"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Fusion RSA
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
