'use client'

import {
  Wrench,
  CalendarClock,
  Users,
  Boxes,
  MonitorSmartphone,
  ArrowRight,
  Zap,
  Gauge,
  Cpu,
  LayoutDashboard,
  Atom,
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
      icon: <Wrench className="w-6 h-6" />,
      text: 'Reactive maintenance\u2014fix when broken',
    },
    modern: {
      icon: <Zap className="w-6 h-6" />,
      text: 'Predictive maintenance\u2014know before it fails',
    },
  },
  {
    traditional: {
      icon: <CalendarClock className="w-6 h-6" />,
      text: 'Monthly routine inspections',
    },
    modern: {
      icon: <Gauge className="w-6 h-6" />,
      text: 'Condition-based intervention',
    },
  },
  {
    traditional: {
      icon: <Users className="w-6 h-6" />,
      text: 'People running processes, supported by technology',
    },
    modern: {
      icon: <Cpu className="w-6 h-6" />,
      text: 'Technology running processes, supported by people',
    },
  },
  {
    traditional: {
      icon: <Boxes className="w-6 h-6" />,
      text: 'Siloed systems for each equipment type',
    },
    modern: {
      icon: <LayoutDashboard className="w-6 h-6" />,
      text: 'One unified platform for all assets',
    },
  },
  {
    traditional: {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      text: 'Generic IT tools adapted for facilities',
    },
    modern: {
      icon: <Atom className="w-6 h-6" />,
      text: 'Purpose-built AI for facility operations',
    },
  },
]

export function ShiftSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
      {/* Background: subtle left-to-right gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.4) 0%, transparent 40%, rgba(0,180,216,0.03) 100%)' }}
      />
      {/* Background: faint cyan glow on the right side */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            The Shift
          </h2>
          <p className="text-xl text-cyan-400 max-w-2xl mx-auto">
            Facility operations are changing. Are you ready?
          </p>
        </div>

        {/* Comparison grid */}
        <div className="max-w-5xl mx-auto">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-5 mb-8">
            <div className="text-center">
              <span className="text-base font-semibold uppercase tracking-wider text-slate-400">
                Traditional Approach
              </span>
            </div>
            <div className="w-10" />
            <div className="text-center">
              <span className="text-base font-bold uppercase tracking-wider text-cyan-200">
                The Softgrid Way
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-5">
            {shiftData.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 items-center transition-all duration-500 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Traditional */}
                <div className="flex items-center gap-4 bg-navy-900/80 rounded-lg px-5 py-5 border border-red-900/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] transition-all duration-300 hover:brightness-110 hover:border-red-900/30">
                  <div className="text-slate-400 shrink-0">{row.traditional.icon}</div>
                  <span className="text-slate-400 text-base">{row.traditional.text}</span>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-10">
                  <div className="relative flex items-center justify-center shift-arrow" style={{ animationDelay: `${i * 200}ms` }}>
                    <div className="absolute w-8 h-8 rounded-full bg-cyan-500/25 blur-[10px]" />
                    <ArrowRight className="w-6 h-6 text-cyan-400 relative drop-shadow-[0_0_4px_rgba(0,180,216,0.4)]" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Modern */}
                <div className="flex items-center gap-4 bg-cyan-500/10 rounded-lg px-5 py-5 border-l-2 border-cyan-500/50 shadow-[0_4px_20px_rgba(0,180,216,0.08)] -translate-y-px transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(0,180,216,0.12)]">
                  <div className="text-cyan-400 shrink-0">{row.modern.icon}</div>
                  <span className="text-slate-100 text-base">{row.modern.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
