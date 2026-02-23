import { Button } from '@/components/ui/Button'

export function CTASection(): React.ReactElement {
  return (
    <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          Let&apos;s discuss how Softgrid can help you move from reactive to predictive.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" className="min-w-[160px]">
            Contact Us
          </Button>
          <Button href="/contact" variant="secondary" className="min-w-[160px]">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
