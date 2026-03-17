'use client'

import { Radio, BrainCircuit, Workflow, Database, ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useInView } from '@/hooks/useInView'

import type { ReactNode } from 'react'

interface Engine {
  icon: ReactNode
  name: string
  role: string
}

const engines: Engine[] = [
  { icon: <Radio className="w-5 h-5 text-cyan-500" />, name: 'Connect', role: 'The nervous system' },
  { icon: <BrainCircuit className="w-5 h-5 text-cyan-500" />, name: 'Intelligence', role: 'The brain' },
  { icon: <Workflow className="w-5 h-5 text-cyan-500" />, name: 'Workflow', role: 'The hands & feet' },
  { icon: <Database className="w-5 h-5 text-cyan-500" />, name: 'Data', role: 'The memory' },
]

export function PlatformSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="platform" className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform. Modular Products. Tailored Solutions.
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            AFOS is an AI-driven Facility Operating System &mdash; a modular platform that replaces fragmented tools and manual processes with one unified system for facility operations.
          </p>
        </div>

        {/* Stack — rendered top to bottom visually, but conceptually bottom-up */}
        <div className="space-y-0">

          {/* Layer 4: Solutions (top) */}
          <div
            className={`rounded-t-xl border border-navy-700/50 bg-navy-800/30 px-6 py-5 md:px-8 md:py-6 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-[3px] text-slate-500">Solutions</span>
                <p className="text-sm text-slate-400 mt-1">Tailored for your operations</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Vertical Transport', 'Building Management', 'Facility Operations', 'Infrastructure & Environmental'].map((s) => (
                  <span key={s} className="text-xs text-slate-300 bg-navy-700/50 rounded-full px-3 py-1">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Layer 3: Products */}
          <div
            className={`border-x border-navy-700/50 bg-navy-800/50 px-6 py-5 md:px-8 md:py-6 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-[3px] text-slate-400">Products</span>
                <p className="text-sm text-slate-400 mt-1">Modular. Built on the platform</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AFOS Sense', 'AFOS Fusion', 'AFOS Orches', 'AFOS Cortex'].map((p) => (
                  <span key={p} className="text-xs text-slate-200 bg-navy-700/70 border border-navy-600/50 rounded-full px-3 py-1">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Layer 2: Platform (the core — most prominent) */}
          <div
            className={`border border-cyan-500/20 bg-navy-800 px-6 py-8 md:px-8 md:py-10 relative transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.03] via-cyan-500/[0.06] to-cyan-500/[0.03] pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">Platform</span>
                <p className="text-sm text-slate-400 mt-1">Cross-cutting engines. One closed loop.</p>
              </div>

              {/* 2x2 Engine Loop — Desktop */}
              <div className="hidden md:block">
                <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] gap-x-6 gap-y-3 max-w-xl mx-auto">
                  {/* Row 1: Connect → Intelligence */}
                  <div className="flex items-center gap-3 bg-navy-900/80 rounded-lg px-4 py-3 border border-navy-700">
                    <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                      {engines[0].icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{engines[0].name}</p>
                      <p className="text-slate-500 text-xs">{engines[0].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-cyan-500/60" />
                  </div>
                  <div className="flex items-center gap-3 bg-navy-900/80 rounded-lg px-4 py-3 border border-navy-700">
                    <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                      {engines[1].icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{engines[1].name}</p>
                      <p className="text-slate-500 text-xs">{engines[1].role}</p>
                    </div>
                  </div>

                  {/* Row 2: Arrows — up on left, down on right */}
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-cyan-500/60 rotate-180" />
                  </div>
                  <div />
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-cyan-500/60" />
                  </div>

                  {/* Row 3: Data ← Workflow */}
                  <div className="flex items-center gap-3 bg-navy-900/80 rounded-lg px-4 py-3 border border-navy-700">
                    <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                      {engines[3].icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{engines[3].name}</p>
                      <p className="text-slate-500 text-xs">{engines[3].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-cyan-500/60 rotate-180" />
                  </div>
                  <div className="flex items-center gap-3 bg-navy-900/80 rounded-lg px-4 py-3 border border-navy-700">
                    <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                      {engines[2].icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{engines[2].name}</p>
                      <p className="text-slate-500 text-xs">{engines[2].role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2x2 Engine Loop — Mobile */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                {engines.map((engine) => (
                  <div key={engine.name} className="flex items-center gap-2.5 bg-navy-900/80 rounded-lg px-3 py-3 border border-navy-700">
                    <div className="w-7 h-7 bg-cyan-500/10 border border-cyan-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                      {engine.icon}
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{engine.name}</p>
                      <p className="text-slate-500 text-[10px]">{engine.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Layer 1: Industry (bottom — the ground) */}
          <div
            className={`rounded-b-xl border border-navy-700/50 border-t-0 bg-navy-900 px-6 py-5 md:px-8 md:py-6 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-[3px] text-slate-500">Industry</span>
                <p className="text-sm text-slate-400 mt-1">Purpose-built for facility operations</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Lifts & Escalators', 'Buildings', 'Facilities', 'Infrastructure & Environmental'].map((ind) => (
                  <span key={ind} className="text-xs text-slate-400 bg-navy-800/50 rounded-full px-3 py-1">{ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button href="/platform" variant="ghost">
            Explore the Platform &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
