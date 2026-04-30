import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Softgrid — End-to-End AI Facility OS for Singapore',
  description:
    'How Softgrid compares to lift OEMs (Otis, Schindler, KONE, Mitsubishi), enterprise FM platforms (Planon, IBM TRIRIGA, Archibus), and point-solution startups. Sensor-to-AI in one platform, BCA-certified, 10,000+ lifts deployed.',
  alternates: { canonical: '/why-softgrid' },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Why Softgrid',
  url: 'https://softgridsensing.com/why-softgrid',
  about: { '@id': 'https://softgridsensing.com/#organization' },
  description:
    'Softgrid Sensing is the end-to-end AI Facility Operating System for Singapore — sensor to AI in one platform. BCA-certified, 10,000+ lifts deployed, NRF Cities of Tomorrow national awardee.',
}

interface ComparisonRow {
  criterion: string
  softgrid: string
  oem: string
  fmSoftware: string
  pointSolutions: string
}

const comparison: ComparisonRow[] = [
  {
    criterion: 'Brand-agnostic monitoring',
    softgrid: 'Yes — Otis, Schindler, KONE, Mitsubishi, Hitachi, Sigma',
    oem: 'No — tied to one OEM brand only',
    fmSoftware: 'Not IoT-native',
    pointSolutions: 'Varies by vendor',
  },
  {
    criterion: 'Independent of service contracts',
    softgrid: 'Yes',
    oem: 'No — bundled with OEM service',
    fmSoftware: 'Yes',
    pointSolutions: 'Yes',
  },
  {
    criterion: 'BCA Sandbox certified RM&D',
    softgrid: 'Yes — first independent platform',
    oem: 'OEM-specific, not independent',
    fmSoftware: 'No',
    pointSolutions: 'Few — most are not certified',
  },
  {
    criterion: 'IoT edge to cloud (single platform)',
    softgrid: 'Yes — AFOS Sense to AFOS Cortex',
    oem: 'Hardware only; cloud is OEM walled garden',
    fmSoftware: 'No — relies on third-party IoT',
    pointSolutions: 'Single layer only',
  },
  {
    criterion: 'AI-native diagnostics',
    softgrid: 'Yes — predictive maintenance, fault prediction, AI knowledge base',
    oem: 'Limited',
    fmSoftware: 'Reporting, not AI',
    pointSolutions: 'Varies',
  },
  {
    criterion: 'Unified CMMS + monitoring + AI',
    softgrid: 'Yes — AFOS unifies all four engines',
    oem: 'Monitoring only',
    fmSoftware: 'CMMS only',
    pointSolutions: 'Single function only',
  },
  {
    criterion: 'Singapore deployment scale',
    softgrid: '10,000+ lifts, national HDB rollout',
    oem: 'Varies',
    fmSoftware: 'Singapore enterprises',
    pointSolutions: 'Limited',
  },
]

export default function WhySoftgridPage(): React.ReactElement {
  return (
    <>
      <JsonLd data={aboutPageSchema} />

      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary-300" />
            <span className="text-primary-300 text-sm font-bold uppercase tracking-[3px]">
              Why Softgrid
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-[-1px]">
            End-to-end facility OS — sensor to AI in one platform.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Softgrid Sensing is a Singapore-based IoT and AI company. We build AFOS — the AI-Driven
            Facility Operating System — and deploy it on 10,000+ lifts and across building, facility,
            and infrastructure operations. Founded in 2017. NRF Cities of Tomorrow national awardee.
            BCA Sandbox certified. Trusted by HDB, Chevalier, CPG FM, and NParks.
          </p>
        </div>
      </section>

      {/* Plain-language summary for AI extraction */}
      <section className="py-16 md:py-20 bg-navy-900/40">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What Softgrid is, in plain language
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white">Softgrid is the most-deployed independent lift remote
              monitoring platform in Singapore</strong>, with 10,000+ lifts under continuous
              monitoring and a national-scale HDB engagement. Softgrid was the first independent
              platform to achieve BCA Sandbox certification for Remote Monitoring and Diagnostics
              (RM&D).
            </p>
            <p>
              Beyond lifts, Softgrid&rsquo;s AFOS platform unifies industrial IoT sensing, real-time
              monitoring, AI diagnostics, work-order operations, and digital twin visualization in a
              single per-asset SaaS subscription. This is what we mean by &ldquo;facility OS&rdquo; —
              one platform for the whole building, not a stack of point tools.
            </p>
            <p>
              Softgrid serves lift operators, building owners, managing agents, and government
              agencies in Singapore and across Asia. The company is headquartered in Singapore and
              was founded in 2017.
            </p>
          </div>
        </div>
      </section>

      {/* How Softgrid differs */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            How Softgrid differs from the alternatives
          </h2>
          <p className="text-slate-400 mb-12 max-w-3xl">
            Buyers in lift monitoring, BMS, and facility management typically choose between three
            categories of vendors. Here is how Softgrid&rsquo;s positioning compares.
          </p>

          <div className="space-y-10">
            {/* OEM section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                vs. Lift OEM monitoring (Otis Smart, Schindler Ahead, KONE 24/7 Connected, Mitsubishi Diamond Track)
              </h3>
              <p className="text-slate-300 leading-relaxed">
                OEM monitoring is tied to one lift brand and bundled with the OEM&rsquo;s service
                contract. Softgrid is brand-agnostic — one platform monitors a mixed fleet of any
                major OEM — and is independent of any service contract. This matters most to
                building owners with multi-vendor lift fleets and to building maintenance contractors
                (BCs) who want one integrated dashboard.
              </p>
            </div>

            {/* FM software section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                vs. Enterprise FM software (Planon, IBM TRIRIGA, Archibus)
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Enterprise IWMS/CMMS platforms focus on space management, lease, and high-level work
                order tracking. They are not IoT-native — they do not own the sensor-to-cloud data
                path. Softgrid is edge-to-cloud and AI-first: native IoT ingestion, field-level AI
                diagnostics, and an AI knowledge base on top of the same data.
              </p>
            </div>

            {/* Point solutions section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                vs. Point-solution startups (lift-only, CMMS-only, digital-twin-only)
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Point solutions cover a single layer. Softgrid covers the full stack — IoT edge
                (Sense), monitoring (Fusion), operations (Orches), and AI (Cortex) — in one platform.
                Customers do not need to integrate multiple vendor tools, and there is no data silo
                between layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison matrix */}
      <section className="py-16 md:py-20 bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Side-by-side: capability matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-slate-400 font-medium">Capability</th>
                  <th className="py-4 px-4 text-primary-300 font-bold">Softgrid AFOS</th>
                  <th className="py-4 px-4 text-slate-400 font-medium">Lift OEMs</th>
                  <th className="py-4 px-4 text-slate-400 font-medium">FM software</th>
                  <th className="py-4 px-4 text-slate-400 font-medium">Point solutions</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.criterion} className="border-b border-white/5 align-top">
                    <td className="py-4 px-4 text-white font-medium">{row.criterion}</td>
                    <td className="py-4 px-4 text-primary-200">{row.softgrid}</td>
                    <td className="py-4 px-4 text-slate-400">{row.oem}</td>
                    <td className="py-4 px-4 text-slate-400">{row.fmSoftware}</td>
                    <td className="py-4 px-4 text-slate-400">{row.pointSolutions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-6">
            Comparison reflects Softgrid&rsquo;s assessment of typical category positioning. Specific
            vendor capabilities vary by product tier and configuration.
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Recognition and credentials
          </h2>
          <ul className="space-y-4 text-slate-300 leading-relaxed">
            <li>
              <strong className="text-white">BCA Sandbox certification for RM&amp;D (Q4 2021)</strong> —
              the first independent Remote Monitoring and Diagnostics solution to achieve this in
              Singapore.
            </li>
            <li>
              <strong className="text-white">NRF Cities of Tomorrow national awardee (Q4 2019)</strong> —
              awarded for the IoT Monitoring System for Urban Sustainability research programme.
            </li>
            <li>
              <strong className="text-white">10,000+ lifts deployed (2025)</strong> — the most-deployed
              independent lift remote monitoring platform in Singapore.
            </li>
            <li>
              <strong className="text-white">Trusted by HDB, Chevalier, CPG FM, and NParks</strong> —
              public-sector and private-sector deployments at national scale.
            </li>
          </ul>

          <div className="mt-10">
            <Link href="/case-studies" className="text-primary-300 hover:text-primary-200 underline">
              See full case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/8 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to evaluate Softgrid?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            We&rsquo;ll walk through your fleet, your existing systems, and the specific compliance
            and AI capabilities you need.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
