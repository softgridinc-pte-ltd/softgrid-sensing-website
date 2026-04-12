'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const milestones = [
  {
    step: '01',
    title: 'Cities of Tomorrow R&D Grant',
    description:
      'Awarded funding to develop next-generation lift monitoring architecture.',
  },
  {
    step: '02',
    title: 'Prototype & Co-Design with HDB',
    description:
      'Hardware and AI models built around real operational needs, not lab assumptions.',
  },
  {
    step: '03',
    title: 'BCA Regulatory Sandbox',
    description:
      "Validated under Singapore's Remote Monitoring & Diagnostics framework.",
  },
  {
    step: '04',
    title: 'Tender Award',
    description:
      "Selected as an enhanced LMD supplier for HDB's nationwide technology refresh programme.",
  },
  {
    step: '05',
    title: 'Dec 2025 — 10,000+ Lifts Deployed',
    description:
      'Legacy LMDs replaced. A new monitoring backbone, live across Singapore.',
  },
]

export function HdbJourney(): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 'left' | 'right'): void {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = container.clientWidth * 0.6
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-navy-800 py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(31,153,197,0.06) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div data-animate className="mb-6 md:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
            From Research Grant to National Infrastructure
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            The Journey
          </h2>
        </div>

        <div data-animate className="max-w-3xl mb-12 md:mb-16">
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            In Singapore&apos;s built environment sector, dozens of projects receive R&amp;D funding every year. Very few complete the full journey from research grant to national deployment. This is one of them.
          </p>
        </div>

        {/* Mobile scroll arrows */}
        <div className="flex justify-end gap-2 mb-4 lg:hidden">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="p-2 rounded-lg border border-navy-600 text-slate-400 hover:text-white hover:border-primary-500/40 transition-colors"
            aria-label="Scroll timeline left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="p-2 rounded-lg border border-navy-600 text-slate-400 hover:text-white hover:border-primary-500/40 transition-colors"
            aria-label="Scroll timeline right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Timeline */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-thin lg:overflow-visible"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="relative min-w-[800px] lg:min-w-0">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-[20px] h-px bg-gradient-to-r from-primary-500/10 via-primary-500/50 to-primary-500/10" />
            <div className="absolute left-0 right-0 top-[20px] h-px bg-gradient-to-r from-primary-400/5 via-primary-400/20 to-primary-400/5 blur-[2px]" />

            <div className="grid grid-cols-5 gap-0" data-animate-stagger>
              {milestones.map((milestone, i) => (
                <div
                  key={milestone.step}
                  data-animate
                  className="relative pt-0 px-3 first:pl-0 last:pr-0"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  {/* Dot */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                        i === milestones.length - 1
                          ? 'border-cyan-400 bg-navy-800 shadow-[0_0_16px_rgba(34,211,238,0.35)]'
                          : 'border-primary-500/60 bg-navy-800 shadow-[0_0_10px_rgba(31,153,197,0.25)]'
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full timeline-dot ${
                          i === milestones.length - 1 ? 'bg-cyan-400' : 'bg-primary-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Step number */}
                  <p className="text-xs font-bold text-primary-400 mb-2 text-center tracking-wider">
                    {milestone.step}
                  </p>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-white mb-2 text-center leading-snug">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 text-center leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
