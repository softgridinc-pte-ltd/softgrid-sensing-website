import Link from 'next/link'
import Image from 'next/image'

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'Vertical Transport', href: '/solutions/vertical-transport' },
      { label: 'Building Management', href: '/solutions/building-management' },
      { label: 'Facility Operations', href: '/solutions/facility-operations' },
      { label: 'Infrastructure & Environmental', href: '/solutions/infrastructure-environmental' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'AFOS Sense', href: '/products/sense' },
      { label: 'AFOS Fusion', href: '/products/fusion' },
      { label: 'AFOS Orches', href: '/products/orches' },
      { label: 'AFOS Cortex', href: '/products/cortex' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export function Footer(): React.ReactElement {
  return (
    <footer className="bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Softgrid Sensing"
                width={36}
                height={36}
              />
              <span className="text-white font-heading font-semibold text-lg">
                SOFTGRID<span className="text-primary-500"> SENSING</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Bridging Physical Assets with Digital Intelligence
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>10 Woodlands Ave 8, #02-01, Singapore 738973</p>
              <p>1 Sims Lane, #04-02, Singapore 387355</p>
              <p>
                <a
                  href="mailto:info@softgridsensing.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@softgridsensing.com
                </a>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <p>&copy; {new Date().getFullYear()} Softgrid Sensing Pte. Ltd. All rights reserved.</p>
            <span className="hidden md:inline text-navy-700">|</span>
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Use</Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/softgrid-sensing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:info@softgridsensing.com"
              className="text-slate-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
