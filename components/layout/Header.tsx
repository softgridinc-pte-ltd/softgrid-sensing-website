'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search, Cpu, MonitorDot, Workflow, ArrowUpDown, Building2, Wrench, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CortexIcon } from '@/components/icons/CortexIcon'

type NavIcon = React.ComponentType<{ className?: string }>

interface NavChild {
  label: string
  href: string
  subtitle?: string
  description?: string
  icon?: NavIcon
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

const navigation: NavItem[] = [
  { label: 'Platform', href: '/platform' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'Smart Vertical Transport',
        description: 'Lift monitoring, diagnostics, and compliance',
        icon: ArrowUpDown,
        href: '/solutions/vertical-transport',
      },
      {
        label: 'Smart Building Management',
        description: 'Centralized building systems oversight',
        icon: Building2,
        href: '/solutions/building-management',
      },
      {
        label: 'Smart Facility Operations',
        description: 'Digital work orders and maintenance',
        icon: Wrench,
        href: '/solutions/facility-operations',
      },
      {
        label: 'Infrastructure & Environmental',
        description: 'Remote sensing and environmental analytics',
        icon: Leaf,
        href: '/solutions/infrastructure-environmental',
      },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Edge Devices',
        subtitle: 'AFOS Sense',
        description: 'IoT sensors and edge acquisition hardware',
        icon: Cpu,
        href: '/products/sense',
      },
      {
        label: 'Monitoring & Diagnostics',
        subtitle: 'AFOS Fusion',
        description: 'Real-time monitoring and fault detection',
        icon: MonitorDot,
        href: '/products/fusion',
      },
      {
        label: 'Operations & Maintenance',
        subtitle: 'AFOS Orches',
        description: 'Work order and maintenance management',
        icon: Workflow,
        href: '/products/orches',
      },
      {
        label: 'Data & Intelligence',
        subtitle: 'AFOS Cortex',
        description: 'AI analytics and digital twins',
        icon: CortexIcon,
        href: '/products/cortex',
      },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const dropdownRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const triggerRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const pathname = usePathname()

  const focusDropdownItem = useCallback((label: string, index: number): void => {
    const container = dropdownRefs.current.get(label)
    if (!container) return
    const items = container.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]')
    items[index]?.focus()
  }, [])

  const handleTriggerKeyDown = useCallback((e: React.KeyboardEvent, item: typeof navigation[0]): void => {
    if (!item.children) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpenDropdown(item.label)
      setTimeout(() => focusDropdownItem(item.label, 0), 0)
    } else if (e.key === 'Escape') {
      setOpenDropdown(null)
    }
  }, [focusDropdownItem])

  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent, item: typeof navigation[0]): void => {
    if (!item.children) return
    const container = dropdownRefs.current.get(item.label)
    if (!container) return
    const items = container.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]')
    const currentIndex = Array.from(items).indexOf(e.target as HTMLAnchorElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = currentIndex + 1 < items.length ? currentIndex + 1 : 0
      items[next]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1
      items[prev]?.focus()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setOpenDropdown(null)
      triggerRefs.current.get(item.label)?.focus()
    }
  }, [])

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
        if (mobileMenuOpen) {
          setMobileMenuOpen(false)
        }
        if (searchOpen) {
          setSearchOpen(false)
          setSearchQuery('')
        }
      }
    }
    if (searchOpen || mobileMenuOpen) {
      document.addEventListener('keydown', handleEsc)
    }
    return () => document.removeEventListener('keydown', handleEsc)
  }, [searchOpen, mobileMenuOpen])

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
            SOFTGRID<span className="text-primary-500"> SENSING</span>
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
              onBlur={(e) => {
                if (item.children && !e.currentTarget.contains(e.relatedTarget as Node)) {
                  setOpenDropdown(null)
                }
              }}
            >
              <Link
                ref={(el) => { if (el) triggerRefs.current.set(item.label, el) }}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md inline-flex items-center gap-1 ${
                  isActive(item.href)
                    ? 'text-primary-400'
                    : 'text-slate-100 hover:text-primary-400'
                }`}
                {...(item.children ? {
                  'aria-haspopup': 'true' as const,
                  'aria-expanded': openDropdown === item.label,
                } : {})}
                onKeyDown={(e) => handleTriggerKeyDown(e, item)}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {item.children && (
                <div className={`absolute top-full left-0 pt-2 transition-all duration-150 ease-out ${
                  openDropdown === item.label
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}>
                  <div
                    ref={(el) => { if (el) dropdownRefs.current.set(item.label, el) }}
                    role="menu"
                    className="bg-navy-800 border border-navy-700 rounded-xl p-2 whitespace-nowrap shadow-xl shadow-navy-950/50"
                    onKeyDown={(e) => handleDropdownKeyDown(e, item)}
                  >
                    {item.children.map((child) => {
                      const Icon = child.icon
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          tabIndex={openDropdown === item.label ? 0 : -1}
                          className="group/item flex items-start gap-3.5 px-3 py-3 rounded-lg border-l-2 border-transparent hover:border-primary-500 hover:bg-primary-500/8 hover:translate-x-0.5 transition-all duration-200"
                        >
                          {Icon && (
                            <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary-500/20 group-hover/item:border-primary-500/40 group-hover/item:shadow-[0_0_12px_rgba(31,153,197,0.15)] transition-all duration-200">
                              <Icon className="w-4.5 h-4.5 text-primary-200 group-hover/item:text-primary-100 transition-colors duration-200" />
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">
                              {child.label}{child.subtitle ? ` (${child.subtitle})` : ''}
                            </div>
                            {child.description && (
                              <p className="text-xs text-slate-400 mt-0.5 group-hover/item:text-slate-200 transition-colors">
                                {child.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      )
                    })}
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
                ? 'w-72 bg-navy-800 border border-primary-500/30 shadow-[0_0_12px_rgba(31,153,197,0.1)] px-2 py-0.5'
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
                  : 'text-slate-100 hover:text-primary-400 hover:scale-105'
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
              aria-label="Search the site"
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
          className="lg:hidden text-slate-100 hover:text-primary-400 transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
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
                      ? 'text-primary-400 bg-navy-800'
                      : 'text-slate-100 hover:text-primary-400 hover:bg-navy-800'
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
                        className="block px-3 py-2 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.subtitle ? `${child.label} (${child.subtitle})` : child.label}
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
                  aria-label="Search the site"
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
