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

import type { ReactNode } from 'react'

interface ShiftRow {
  traditional: { icon: ReactNode; text: string }
  modern: { icon: ReactNode; text: string }
}

const shiftData: ShiftRow[] = [
  {
    traditional: {
      icon: <Wrench className="w-6 h-6" />,
      text: 'Reactive maintenance \u2014 fix when broken',
    },
    modern: {
      icon: <Zap className="w-6 h-6" />,
      text: 'Predictive maintenance \u2014 know before it fails',
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
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Two-tone split background with grids anchored to the seam */}
      <div aria-hidden className="absolute inset-0 flex">
        <div
          className="w-1/2 bg-[#DEE3EA]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            backgroundPosition: 'right top',
          }}
        />
        <div
          className="w-1/2 bg-[#CCE6F0]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            backgroundPosition: 'left top',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div data-animate className="text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-5">
            The Shift
          </h2>
          <p className="text-xl text-navy-700 max-w-2xl mx-auto">
            Facility operations are changing. Are you ready?
          </p>
        </div>

        {/* Comparison grid */}
        <div className="max-w-5xl mx-auto">
          {/* Column headers */}
          <div data-animate className="grid grid-cols-[1fr_auto_1fr] gap-5 mb-8">
            <div className="text-center">
              <span className="text-base font-semibold uppercase tracking-wider text-slate-500">
                Traditional Approach
              </span>
            </div>
            <div className="w-10" />
            <div className="text-center">
              <span className="text-base font-bold uppercase tracking-wider text-primary-700">
                The Next Era
              </span>
            </div>
          </div>

          {/* Rows */}
          <div data-animate-stagger className="space-y-5">
            {shiftData.map((row, i) => (
              <div
                key={i}
                data-animate
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 items-center"
              >
                {/* Traditional */}
                <div className="flex items-center gap-4 bg-white rounded-lg px-5 py-5 border border-slate-200 shadow-[0_2px_6px_rgba(15,23,42,0.04),0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1">
                  <div className="text-slate-400 shrink-0">{row.traditional.icon}</div>
                  <span className="text-slate-600 text-base">{row.traditional.text}</span>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-10">
                  <div className="relative flex items-center justify-center shift-arrow" style={{ animationDelay: `${i * 200}ms` }}>
                    <ArrowRight className="w-6 h-6 text-primary-600 relative" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Modern */}
                <div className="flex items-center gap-4 bg-white rounded-lg px-5 py-5 border border-primary-200 border-l-[3px] border-l-primary-500 shadow-[0_3px_8px_rgba(31,153,197,0.10),0_14px_32px_rgba(31,153,197,0.14)] transition-all duration-300 hover:shadow-[0_6px_14px_rgba(31,153,197,0.18),0_20px_44px_rgba(31,153,197,0.22)] hover:-translate-y-1">
                  <div className="text-primary-600 shrink-0">{row.modern.icon}</div>
                  <span className="text-navy-900 text-base font-medium">{row.modern.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

