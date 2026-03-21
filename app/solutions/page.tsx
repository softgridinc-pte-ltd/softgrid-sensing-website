import Link from 'next/link'
import { SolutionCardsSection } from '@/components/sections/solutions/SolutionCardsSection'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions | Softgrid Sensing',
  description:
    'Facility solutions for lift operators, building owners, and managing agents. BCA certified, AI-powered, proven at scale across Singapore.',
}

export default function SolutionsPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.1) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center gap-3.5 justify-center mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Solutions Built for How You Operate
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you manage lifts, buildings, or entire facility portfolios &mdash; we have a proven solution that fits your needs.
          </p>
        </div>
      </section>

      <SolutionCardsSection />

      {/* Not Sure CTA */}
      <section
        style={{
          padding: '80px 64px',
          background: '#0A1628',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(0,180,216,0.06) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
        <div data-animate style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: '#FFFFFF', marginBottom: 16, letterSpacing: -1 }}>
            Not Sure Which Solution Fits?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#94A3B8', marginBottom: 36 }}>
            Talk to our team. We&apos;ll help you identify the right starting point &mdash; and show you how the platform grows with you.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#FFFFFF',
              color: '#0A1628',
              padding: '16px 40px',
              borderRadius: 6,
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
