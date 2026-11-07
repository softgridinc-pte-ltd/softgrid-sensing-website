import { ArrowUpRight, ChevronRight } from 'lucide-react'

import { PatrolensFinder } from './PatrolensFinder'

export const PATROLENS_URL = 'https://patrolens.softgridsensing.com/'

const steps: string[] = ['Capture', 'Detect', 'Verify', 'Review & report']

function ScanIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 32 32" className="h-[22px] w-[22px]" fill="none" aria-hidden>
      <path
        d="M3 11V3h8M21 3h8v8M29 21v8h-8M11 29H3v-8"
        stroke="#197EA3"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <circle cx="16" cy="16" r="4.5" fill="#FF5A1F" />
    </svg>
  )
}

export function PatrolensSection(): React.ReactElement {
  return (
    <section id="patrolens" className="relative scroll-mt-24 bg-[#F8FAFC] px-6 py-20 md:px-16 md:py-[100px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" data-animate>
        <div className="lg:order-2">
          <div className="mb-2 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-200 bg-primary-100">
              <ScanIcon />
            </div>
            <div className="font-heading text-sm font-bold uppercase tracking-[1.5px] text-primary-600">Patrolens</div>
            <span className="rounded-full border border-primary-500/15 bg-primary-500/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-600">
              New
            </span>
          </div>
          <h2 className="mb-3 font-heading text-[32px] font-bold leading-[1.2] tracking-[-1px] text-navy-900">
            AI Patrol Inspection
          </h2>
          <p className="mb-7 text-base leading-[1.8] text-slate-600">
            Every patrol becomes an inspection. Patrolens turns the photos and video your teams take on their rounds into AI-detected, human-confirmed findings, mapped and ready to report.
          </p>

          <ol className="mb-9 flex flex-wrap items-center gap-x-2 gap-y-2" aria-label="How Patrolens works">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[13px] font-semibold text-navy-800">{step}</span>
                {i < steps.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden />}
              </li>
            ))}
          </ol>

          <a
            href={PATROLENS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition hover:bg-primary-600"
          >
            Explore Patrolens
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </a>
        </div>

        <div className="pt-10 lg:order-1">
          <PatrolensFinder />
        </div>
      </div>
    </section>
  )
}
