import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactInfo } from '@/components/sections/contact/ContactInfo'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Softgrid Sensing',
  description:
    'Contact Softgrid Sensing for lift monitoring, facility management, or digital twin solutions. Based in Singapore, serving clients across Asia.',
}

export default function ContactPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-cyan-400 max-w-xl mx-auto">
            Whether you&apos;re exploring solutions or ready to deploy&mdash;we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16" data-animate>
            {/* Left: Form (60%) */}
            <div className="lg:col-span-3">
              <div className="bg-navy-800/50 border border-navy-700 rounded-xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            {/* Right: Info (40%) */}
            <div className="lg:col-span-2">
              <div className="bg-navy-800/50 border border-navy-700 rounded-xl p-6 md:p-8 lg:sticky lg:top-24">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
