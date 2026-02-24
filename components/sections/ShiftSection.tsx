'use client'

import {
  Wrench,
  CalendarClock,
  Users,
  Boxes,
  AlertTriangle,
  ArrowRight,
  Zap,
  Gauge,
  Cpu,
  LayoutDashboard,
  ShieldCheck,
} from 'lucide-react'
import { useInView } from '@/hooks/useInView'

import type { ReactNode } from 'react'

interface ShiftRow {
  traditional: { icon: ReactNode; text: string }
  modern: { icon: ReactNode; text: string }
}

const shiftData: ShiftRow[] = [
  {
    traditional: {
      icon: <Wrench className="w-5 h-5" />,
      text: 'Reactive maintenance\u2014fix when broken',
    },
    modern: {
      icon: <Zap className="w-5 h-5" />,
      text: 'Predictive maintenance\u2014know before it fails',
    },
  },
  {
    traditional: {
      icon: <CalendarClock className="w-5 h-5" />,
      text: 'Monthly routine inspections',
    },
    modern: {
      icon: <Gauge className="w-5 h-5" />,
      text: 'Condition-based intervention',
    },
  },
  {
    traditional: {
      icon: <Users className="w-5 h-5" />,
      text: 'People running processes, supported by technology',
    },
    modern: {
      icon: <Cpu className="w-5 h-5" />,
      text: 'Technology running processes, supported by people',
    },
  },
  {
    traditional: {
      icon: <Boxes className="w-5 h-5" />,
      text: 'Siloed systems for each equipment type',
    },
    modern: {
      icon: <LayoutDashboard className="w-5 h-5" />,
      text: 'One unified platform for all assets',
    },
  },
  {
    traditional: {
      icon: <AlertTriangle className="w-5 h-5" />,
      text: 'Respond after failure occurs',
    },
    modern: {
      icon: <ShieldCheck className="w-5 h-5" />,
      text: 'Prevent failures before they happen',
    },
  },
]

export function ShiftSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Shift
          </h2>
          <p className="text-lg text-cyan-400 max-w-2xl mx-auto">
            Facility operations are changing. Are you ready?
          </p>
        </div>

        {/* Comparison grid */}
        <div className="max-w-4xl mx-auto">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-6">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Traditional Approach
              </span>
            </div>
            <div className="w-8" />
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-200">
                The Softgrid Way
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {shiftData.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center transition-all duration-500 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Traditional */}
                <div className="flex items-center gap-3 bg-navy-900/80 rounded-lg p-4 border border-red-900/20">
                  <div className="text-slate-400 shrink-0">{row.traditional.icon}</div>
                  <span className="text-slate-400 text-sm">{row.traditional.text}</span>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-8">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-6 h-6 rounded-full bg-cyan-500/20 blur-[8px]" />
                    <ArrowRight className="w-5 h-5 text-cyan-400 relative" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Modern */}
                <div className="flex items-center gap-3 bg-cyan-500/10 rounded-lg p-4 border-l-2 border-cyan-500/50 shadow-[0_0_15px_rgba(0,180,216,0.06)]">
                  <div className="text-cyan-400 shrink-0">{row.modern.icon}</div>
                  <span className="text-slate-100 text-sm">{row.modern.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
