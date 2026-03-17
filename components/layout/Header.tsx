'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navigation: NavItem[] = [
  { label: 'Platform', href: '/platform' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Smart Vertical Transport', href: '/solutions/vertical-transport' },
      { label: 'Smart Building Management', href: '/solutions/building-management' },
      { label: 'Smart Facility Operations', href: '/solutions/facility-operations' },
      { label: 'Infrastructure & Environmental', href: '/solutions/infrastructure-environmental' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'AFOS Sense', href: '/products/sense' },
      { label: 'AFOS Fusion', href: '/products/fusion' },
      { label: 'AFOS Orches', href: '/products/orches' },
      { label: 'AFOS Cortex', href: '/products/cortex' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
]

export function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
        setSearchQuery('')
      }
    }
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setSearchQuery('')
      }
    }
    if (searchOpen) {
      document.addEventListener('keydown', handleEsc)
    }
    return () => document.removeEventListener('keydown', handleEsc)
  }, [searchOpen])

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-navy-900/80 backdrop-blur-md border-b border-navy-800/50 fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Softgrid Sensing"
            width={36}
            height={36}
            className="transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-white font-heading font-semibold text-lg hidden sm:block">
            SOFTGRID<span className="text-cyan-500"> SENSING</span>
          </span>
        </Link>

        {/* Desktop Navigation — absolutely centered */}
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
                  <div className="bg-navy-800 border border-navy-700 rounded-lg py-2 min-w-[280px] shadow-xl">
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

        {/* Desktop Search */}
        <div ref={searchContainerRef} className="hidden lg:flex items-center flex-shrink-0">
          <div
            className={`flex items-center rounded-lg overflow-hidden transition-all duration-350 ease-out ${
              searchOpen
                ? 'w-72 bg-navy-800 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,180,216,0.1)] px-2 py-0.5'
                : 'w-9 bg-transparent border border-transparent px-0 py-0'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                if (searchOpen) {
                  setSearchOpen(false)
                  setSearchQuery('')
                } else {
                  setSearchOpen(true)
                }
              }}
              className={`flex-shrink-0 p-2 rounded-md transition-all duration-300 ${
                searchOpen
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-100 hover:text-cyan-400 hover:scale-105'
              }`}
              aria-label={searchOpen ? 'Close search' : 'Search'}
            >
              <div className="relative w-5 h-5">
                <Search
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                    searchOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                    searchOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                  }`}
                />
              </div>
            </button>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              tabIndex={searchOpen ? 0 : -1}
              className={`bg-transparent text-sm text-white placeholder-slate-500 outline-none transition-all duration-350 ease-out ${
                searchOpen ? 'w-full opacity-100 ml-1' : 'w-0 opacity-0 ml-0'
              }`}
            />
          </div>
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
            <div className="pt-3 px-3">
              <div className="flex items-center gap-2 bg-navy-800 border border-navy-700 rounded-lg px-3 py-2.5">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-sm text-white placeholder-slate-500 outline-none w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
