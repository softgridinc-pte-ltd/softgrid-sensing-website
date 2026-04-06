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
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-100">
      {/* Layer 1: Diagonal gradient wash — directional shift feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-primary-50/40" />

      {/* Layer 2: Decorative blob-mesh backdrop — edge-faded */}
      <ShiftBackdrop />

      {/* Layer 3: Dot-pattern texture — repeating dots, edge-faded */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            'radial-gradient(ellipse 95% 85% at 50% 50%, black 45%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 85% at 50% 50%, black 45%, transparent 100%)',
        }}
      >
        <div className="absolute inset-0 dot-pattern" style={{ opacity: 0.2 }} />
      </div>

      {/* Layer 4: Directional diagonal stripes — modern (right) side only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 55%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 55%, black 92%, transparent 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)',
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="shift-diagonal-stripes"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="rgba(31, 153, 197, 0.12)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#shift-diagonal-stripes)" />
          </svg>
        </div>
      </div>

      {/* Layer 5a: Muted slate glow — anchors the traditional (left) side */}
      <div className="pointer-events-none absolute top-1/2 -left-24 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-slate-400/10 blur-[120px]" />

      {/* Layer 5b: Primary accent glow — energizes the modern (right) side */}
      <div className="pointer-events-none absolute top-1/2 -right-24 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-primary-500/10 blur-[140px]" />

      {/* Layer 6: Calibration cross marks — industrial precision accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <CalibMark className="absolute top-[7%] left-[3%]" />
        <CalibMark className="absolute top-[7%] right-[3%]" />
        <CalibMark className="absolute bottom-[7%] left-[3%]" />
        <CalibMark className="absolute bottom-[7%] right-[3%]" />
        <CalibMark className="absolute top-1/2 left-[2%] -translate-y-1/2" />
        <CalibMark className="absolute top-1/2 right-[2%] -translate-y-1/2" />
      </div>

      {/* Layer 7: Hairline dividers for clean handoff to dark sections */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div data-animate className="text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-5">
            The Shift
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Facility operations are changing. Are you ready?
          </p>
        </div>

        {/* Comparison grid */}
        <div className="max-w-5xl mx-auto">
          {/* Column headers */}
          <div data-animate className="grid grid-cols-[1fr_auto_1fr] gap-5 mb-8">
            <div className="text-center">
              <span className="text-base font-semibold uppercase tracking-wider text-slate-400">
                Traditional Approach
              </span>
            </div>
            <div className="w-10" />
            <div className="text-center">
              <span className="text-base font-bold uppercase tracking-wider text-primary-600">
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
                <div className="flex items-center gap-4 bg-white rounded-lg px-5 py-5 border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_2px_4px_rgba(15,23,42,0.06),0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5">
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
                <div className="flex items-center gap-4 bg-white rounded-lg px-5 py-5 border border-slate-200/60 border-l-[3px] border-l-primary-500 shadow-[0_1px_3px_rgba(31,153,197,0.08),0_8px_24px_rgba(31,153,197,0.12)] transition-all duration-300 hover:shadow-[0_2px_6px_rgba(31,153,197,0.14),0_14px_32px_rgba(31,153,197,0.18)] hover:-translate-y-0.5">
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

/**
 * Decorative "Soft Blob Mesh" backdrop.
 *
 * Large blurred color blobs — muted slate on the traditional (left) side,
 * vibrant primary on the modern (right) side. No shapes, no outlines — the
 * color itself is the pattern. Wrapped in a radial mask so the pattern fades
 * cleanly at the section edges.
 */
function ShiftBackdrop(): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        maskImage:
          'radial-gradient(ellipse 100% 90% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 100% 90% at 50% 50%, black 40%, transparent 100%)',
      }}
    >
      {/* Slate blob — top-left (traditional anchor) */}
      <div className="absolute -top-20 -left-24 w-[700px] h-[520px] rounded-full bg-slate-400/15 blur-[130px]" />
      {/* Primary-300 — mid */}
      <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full bg-primary-300/25 blur-[130px]" />
      {/* Primary-400 — top-right */}
      <div className="absolute -top-10 right-1/4 w-[620px] h-[520px] rounded-full bg-primary-400/25 blur-[130px]" />
      {/* Primary-500 — bottom-right (modern anchor, strongest) */}
      <div className="absolute -bottom-24 -right-20 w-[800px] h-[620px] rounded-full bg-primary-500/25 blur-[140px]" />
      {/* Small accent — bottom-center */}
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-primary-300/20 blur-[110px]" />
    </div>
  )
}

/**
 * Industrial calibration cross — small SVG plus mark used as a precision-detail
 * accent in the section background. Stroke is intentionally muted so it reads
 * as a draft/blueprint mark rather than UI.
 */
function CalibMark({ className }: { className?: string }): React.ReactElement {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="-6 -6 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="-5"
        y1="0"
        x2="5"
        y2="0"
        stroke="rgba(100, 116, 139, 0.35)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="-5"
        x2="0"
        y2="5"
        stroke="rgba(100, 116, 139, 0.35)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}
