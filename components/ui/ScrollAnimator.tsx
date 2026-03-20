'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Global scroll animation controller — mirrors the design reference's
 * [data-animate] + [data-animate-stagger] pattern.
 *
 * How it works:
 * - Elements with `data-animate` start hidden (opacity:0, translateY:60px via CSS)
 * - IntersectionObserver watches each element individually
 * - When the element enters the viewport, `.animated` class is added
 * - Inside `[data-animate-stagger]` containers, direct children with `[data-animate]`
 *   get auto-calculated delays (index * 100ms)
 *
 * Mount this component once in the layout. Re-runs on route changes.
 */
export function ScrollAnimator(): null {
  const pathname = usePathname()

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered after hydration/navigation
    const timeoutId = setTimeout(() => {
      init()
    }, 50)

    function init(): void {
      // Respect reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        document.querySelectorAll('[data-animate]:not(.animated)').forEach(el => {
          el.classList.add('animated')
        })
        return
      }

      // Process stagger containers — assign delays to direct children
      document.querySelectorAll('[data-animate-stagger]').forEach(container => {
        const children = container.querySelectorAll(':scope > [data-animate]')
        children.forEach((child, i) => {
          ;(child as HTMLElement).style.transitionDelay = `${i * 100}ms`
        })
      })

      // Set up IntersectionObserver for all non-animated [data-animate] elements
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -40px 0px',
        }
      )

      document.querySelectorAll('[data-animate]:not(.animated)').forEach(el => {
        observer.observe(el)
      })

      // Store observer reference for cleanup
      cleanupRef = () => observer.disconnect()
    }

    let cleanupRef: (() => void) | undefined

    return () => {
      clearTimeout(timeoutId)
      cleanupRef?.()
    }
  }, [pathname])

  return null
}
