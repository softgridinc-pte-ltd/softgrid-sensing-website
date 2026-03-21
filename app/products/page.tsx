import { ProductSeriesSection } from '@/components/sections/products/ProductSeriesSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Softgrid Sensing',
  description:
    "Explore Softgrid's AFOS product portfolio: Sense, Fusion, Orches, and Cortex — four product series powered by the AFOS platform.",
}

const integrationTags = [
  'MQTT',
  'CoAP',
  'OPC-UA',
  'BACnet',
  'Modbus',
  'REST API',
  'Tridium Niagara',
  'Midea iBuilding',
]

export default function ProductsPage(): React.ReactElement {
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
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">Product Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            End-to-End Products. Built In-House. Powered by AFOS.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From real-time monitoring to AI-powered analytics &mdash; every product is designed, developed, and deployed by our team. No reselling. No stitching together third-party tools.
          </p>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8" data-animate>
          <div className="border-l-2 border-cyan-500/40 pl-6 md:pl-8">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              We&apos;re not a system integrator reselling other vendors&apos; products. Every component in our stack &mdash; from the sensor on the lift to the dashboard on your screen &mdash; is designed and built by our engineering team. This means seamless integration, faster iteration, and solutions tailored to your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Product Series */}
      <ProductSeriesSection />

      {/* Integration Note */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built to Integrate
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Our products work together as one system &mdash; and connect to your existing infrastructure through BACnet, Modbus, REST APIs, and cloud-to-cloud integrations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrationTags.map((tag) => (
              <span
                key={tag}
                className="border border-navy-600 text-slate-400 text-xs rounded-full px-4 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to See Our Products in Action?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Schedule a demo with our team.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Request a Demo
          </Button>
        </div>
      </section>
    </>
  )
}
