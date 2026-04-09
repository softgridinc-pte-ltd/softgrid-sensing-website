import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function SolutionsIntro(): React.ReactElement {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
          data-animate
        >
          <div>
            <h2 className="mb-8 text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
              Why a unified solution
            </h2>
            <div className="space-y-5 text-base md:text-[17px] leading-[1.8] text-slate-600">
              <p>
                Most facility software is built for a single use case — a lift monitoring tool here, a BMS dashboard there, a CMMS over there. Operations teams end up stitching together half a dozen tools that never share data, never share workflows, and never deliver a single source of truth.
              </p>
              <p>
                AFOS takes a different approach. One operating system. Four engines. A modular product portfolio that lets you start small — say, lift monitoring on 200 assets — and grow into building management, facility operations, and environmental monitoring without ever changing platforms.
              </p>
            </div>
            <Link
              href="/platform"
              className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary-600"
            >
              Learn more about the platform
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/background/bg26.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
