import { ArrowUpRight, ChevronRight } from 'lucide-react'

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

function CameraFrame(): React.ReactElement {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(160deg,#1A2B45_0%,#0D1A2E_100%)]">
      {/* Corridor perspective lines */}
      <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
        <g stroke="rgba(148,163,184,0.18)" strokeWidth="1" fill="none">
          <path d="M0 0 L120 80 L200 80 L320 0" />
          <path d="M0 200 L120 130 L200 130 L320 200" />
          <path d="M120 80 L120 130 M200 80 L200 130" />
          <path d="M60 40 L60 165 M260 40 L260 165" />
        </g>
        <rect x="128" y="88" width="20" height="34" fill="rgba(148,163,184,0.12)" />
      </svg>

      {/* Viewfinder corners */}
      {['left-3 top-3 border-l-2 border-t-2', 'right-3 top-3 border-r-2 border-t-2', 'left-3 bottom-3 border-l-2 border-b-2', 'right-3 bottom-3 border-r-2 border-b-2'].map((pos) => (
        <span key={pos} className={`absolute h-4 w-4 border-white/50 ${pos}`} />
      ))}

      {/* Detection box */}
      <div className="absolute left-[38%] top-[42%] h-[30%] w-[22%] rounded-sm border-2 border-[#D4F53C] shadow-[0_0_18px_rgba(212,245,60,0.35)]">
        <span className="absolute -top-6 left-[-2px] whitespace-nowrap rounded-sm bg-[#D4F53C] px-1.5 py-0.5 text-[10px] font-bold text-navy-900">
          Obstruction 0.91
        </span>
      </div>

      {/* HUD */}
      <div className="absolute left-6 top-5 flex items-center gap-1.5 font-mono text-[10px] text-white/80">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF5A1F]" />
        REC 00:14:32
      </div>
      <div className="absolute right-6 top-5 font-mono text-[10px] text-white/60">BLK 214, LEVEL 7</div>
      <div className="absolute bottom-5 left-6 font-mono text-[10px] text-white/60">1.3521 N, 103.8198 E</div>
      <div className="absolute bottom-5 right-6 rounded-full border border-white/15 bg-navy-900/70 px-2 py-0.5 text-[10px] font-semibold text-white/80 backdrop-blur">
        Pending review
      </div>
    </div>
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

        <a
          href={PATROLENS_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden
          className="block rounded-2xl bg-[linear-gradient(160deg,#0A1628_0%,#162544_100%)] p-3 shadow-xl ring-1 ring-navy-900/10 transition hover:-translate-y-1 hover:shadow-2xl lg:order-1"
        >
          <CameraFrame />
        </a>
      </div>
    </section>
  )
}
