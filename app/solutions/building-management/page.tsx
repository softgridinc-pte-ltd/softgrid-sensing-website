import { SolutionHero } from '@/components/sections/solutions/SolutionHero'
import { ChallengeSection } from '@/components/sections/solutions/ChallengeSection'
import { ApproachSection } from '@/components/sections/solutions/ApproachSection'
import { ProductsInvolvedSection } from '@/components/sections/solutions/ProductsInvolvedSection'
import { BenefitsSection } from '@/components/sections/solutions/BenefitsSection'
import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Building Management | Softgrid Sensing',
  description:
    'Brand-agnostic building monitoring, energy optimization, and automated operations — one dashboard for every system in your building.',
}

const challenges = [
  {
    title: 'Multi-Vendor Fragmentation',
    description:
      'Tridium for HVAC, separate system for lighting, another for fire alarm — each with its own dashboard and login.',
  },
  {
    title: 'Energy Blind Spots',
    description:
      'Green Mark 2021 and energy improvement regulations require data trapped in fragmented systems.',
  },
  {
    title: 'Reactive Operations',
    description:
      'Equipment failures discovered when tenants complain, not when sensors detect.',
  },
  {
    title: 'Compliance Burden',
    description:
      'Green Mark, energy audits, and ESG reporting require manual data collection from disconnected systems.',
  },
]

const steps = [
  {
    title: 'Integration Layer',
    description:
      'Cloud BMS connects to your existing controllers (Tridium, Midea) via BACnet and Modbus — no rip-and-replace.',
  },
  {
    title: 'Unified Monitoring',
    description:
      'One dashboard for HVAC, lighting, energy, fire alarm, lifts, escalators, gensets, FCU, AHU, and chillers.',
  },
  {
    title: 'Operations Management',
    description:
      'IRIS integrates with Cloud BMS for closed-loop maintenance — from fault detection to work order to resolution.',
  },
  {
    title: 'Intelligence Layer',
    description:
      'AI analytics identify energy waste patterns. Athena answers building questions. ESG data collection automated.',
  },
]

const products = [
  { product: 'Cloud BMS', series: 'AFOS Fusion', role: 'Building equipment monitoring & control' },
  { product: 'IRIS', series: 'AFOS Orches', role: 'Work orders, assets, compliance' },
  { product: 'Athena', series: 'AFOS Cortex', role: 'AI knowledge base for building operations' },
  { product: 'Digital Twin', series: 'AFOS Cortex', role: '3D building visualization (optional)' },
]

const benefits = [
  {
    title: 'Brand-Agnostic',
    description: 'Works with any BMS — Tridium, Midea, Schneider, Honeywell.',
  },
  {
    title: 'Energy Optimization',
    description: 'Identify waste patterns, optimize schedules, reduce utility costs.',
  },
  {
    title: 'Green Mark Ready',
    description: 'Automated data collection for Green Mark 2021, energy audits, and ESG reports.',
  },
  {
    title: 'Single Pane of Glass',
    description: 'One dashboard, one alert stream, one data layer for every building system.',
  },
  {
    title: 'Closed-Loop Maintenance',
    description: 'From fault detection to resolution — automated and tracked.',
  },
]

export default function BuildingManagementPage(): React.ReactElement {
  return (
    <>
      <SolutionHero
        overline="Smart Building Management"
        headline="One Dashboard for Every System in Your Building"
        subheadline="Brand-agnostic building monitoring, energy optimization, and automated operations — regardless of what BMS you have installed."
      />

      <ChallengeSection challenges={challenges} />

      <ApproachSection steps={steps} />

      <ProductsInvolvedSection products={products} />

      <BenefitsSection benefits={benefits} />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Unify Your Building Operations?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            See how Cloud BMS can bring every building system into a single platform.
          </p>
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
