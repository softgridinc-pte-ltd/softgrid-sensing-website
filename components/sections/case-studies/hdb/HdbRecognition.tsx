import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const congressLinks = [
  {
    kicker: 'MND Official',
    label: 'Congress Gallery',
    description: 'Photo highlights from Day 1 of the USS R&I Congress 2026.',
    href: 'https://www.mnd.gov.sg/usscongress2026/uss-ri-congress-gallery-day-1',
  },
  {
    kicker: 'MND Report',
    label: 'Congress Report',
    description: 'Full programme report and key announcements from the Congress.',
    href: 'https://www.mnd.gov.sg/api/media/859acce1-5bab-4a35-891f-049444c35e3d',
  },
  {
    kicker: 'Media Release',
    label: 'Press Statement',
    description: 'Official media release on the Built Environment AI initiatives.',
    href: 'https://www.mnd.gov.sg/api/media/d241bcc5-0f01-4e7a-9871-2495a7047d95',
  },
]


const logos = [
  { name: 'Ministry of National Development', src: '/images/logos/MND.png', scale: 'scale-[3.0]' },
  { name: 'HDB', src: '/images/logos/HDB.png', scale: 'scale-[1.1]' },
  { name: 'BCA', src: '/images/logos/bca.png', scale: 'scale-[1.3]' },
  { name: 'Cities of Tomorrow R&D', src: '/images/logos/NRF.png', scale: '' },
]

export function HdbRecognition(): React.ReactElement {
  return (
    <section
      className="py-14 md:py-20 relative overflow-hidden border-y border-amber-200/80"
      style={{ backgroundColor: '#FFF5E6' }}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div data-animate className="mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
            Recognized at the National Stage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
            Recognition
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
          {/* Left — Text */}
          <div data-animate="slide-left" className="space-y-5 text-base md:text-[17px] text-slate-600 leading-[1.8]">
            <p>
              On 5&ndash;6 February 2026, the HDB Smart Lift project was featured at the{' '}
              <strong className="text-navy-900">
                Urban Solutions &amp; Sustainability R&amp;I Congress 2026
              </strong>{' '}
              — MND and MSE&apos;s flagship national platform for urban innovation, convening 2,000+ stakeholders across government, industry, and academia under the theme{' '}
              <em>&ldquo;Re-inventing Cities of Tomorrow.&rdquo;</em>
            </p>
            <p>
              SoftGrid and HDB jointly presented the project to{' '}
              <strong className="text-navy-900">Mr Chee Hong Tat, Minister for National Development</strong>,
              as a showcase example of research-to-market translation in Singapore&apos;s built environment sector.
            </p>
            <p>
              The Congress also marked MND&apos;s announcement of a{' '}
              <strong className="text-navy-900">Built Environment AI Centre of Excellence</strong> and a{' '}
              <strong className="text-navy-900">USS Translation Fund</strong>{' '}
              — a clear national signal that AI-driven facility intelligence is core infrastructure for Singapore&apos;s urban future.
            </p>
          </div>

          {/* Right — Photo */}
          <div data-animate="slide-right" className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/cases/case7.jpg"
              alt="USS R&I Congress 2026"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Congress resources */}
        <div data-animate className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {congressLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[2px] text-primary-600">
                  {link.kicker}
                </div>
                <div className="mb-3 text-base font-bold leading-tight text-navy-900 transition-colors group-hover:text-primary-700">
                  {link.label}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {link.description}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 mt-5">
                Visit
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Logo strip */}
        <div data-animate className="mt-12 pt-10 border-t border-navy-900/20">
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-4 flex items-center justify-center w-36 h-20 md:w-40 md:h-22"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className={`object-contain max-h-10 md:max-h-12 w-auto ${logo.scale}`}
                />
              </div>
            ))}
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-4 flex items-center justify-center w-36 h-20 md:w-40 md:h-22">
              <span className="text-sm font-extrabold text-navy-900 text-center leading-tight tracking-tight font-heading">
                USS R&amp;I<br />Congress 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
