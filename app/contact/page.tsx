import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactInfo } from '@/components/sections/contact/ContactInfo'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Softgrid — Lift Monitoring & Smart FM Singapore',
  description:
    'Contact Softgrid Sensing for lift remote monitoring, BCA RM&D compliance, smart building management, or AI facility management. Based in Singapore, serving clients across Asia.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage(): React.ReactElement {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-navy-800/40">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.1) 0%, transparent 70%)' }}
      />

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-primary-300 max-w-xl mx-auto">
          Whether you&apos;re exploring solutions or ready to deploy&mdash;we&apos;d love to hear from you.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16" data-animate>
            {/* Left: Form (60%) */}
            <div className="lg:col-span-3">
              <div className="bg-navy-800/50 border border-navy-700 rounded-xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            {/* Right: Info (40%) */}
            <div className="lg:col-span-2 flex">
              <div className="bg-navy-800/50 border border-navy-700 rounded-xl p-6 md:p-8 w-full flex flex-col justify-between">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
