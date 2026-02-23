'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/platform' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Lift Monitoring & Compliance', href: '/solutions/lift-monitoring' },
      { label: 'Smart Facility Management', href: '/solutions/facility-management' },
      { label: 'Digital Twin & Visualization', href: '/solutions/digital-twin' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Hardware', href: '/products/hardware' },
      { label: 'Software', href: '/products/software' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
]

export function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-navy-900/80 backdrop-blur-md border-b border-navy-800/50 fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <span className="text-white font-heading font-bold text-sm">SG</span>
          </div>
          <span className="text-white font-heading font-semibold text-lg hidden sm:block">
            SOFTGRID<span className="text-cyan-500"> SENSING</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md inline-flex items-center gap-1 ${
                  isActive(item.href)
                    ? 'text-cyan-400'
                    : 'text-slate-100 hover:text-cyan-400'
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="bg-navy-800 border border-navy-700 rounded-lg py-2 min-w-[240px] shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-100 hover:text-cyan-400 hover:bg-navy-700/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" className="text-sm px-4 py-2">
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden text-slate-100 hover:text-cyan-400 transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-800/50">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-navy-800'
                      : 'text-slate-100 hover:text-cyan-400 hover:bg-navy-800'
                  }`}
                  onClick={() => {
                    if (!item.children) setMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Button href="/contact" variant="primary" className="w-full text-center text-sm">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
