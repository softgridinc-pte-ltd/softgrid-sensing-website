'use client'

import { useEffect, useState } from 'react'
import { useInView } from './useInView'
import { getHiddenClass, getVisibleClass } from '@/lib/scrollAnimations'

import type { ScrollAnimation } from '@/lib/scrollAnimations'

interface UseScrollRevealGroupOptions {
  staggerInterval?: number
  animation?: ScrollAnimation
}

interface ItemProps {
  className: string
  style: { transitionDelay: string }
}

interface UseScrollRevealGroupReturn {
  containerRef: React.RefObject<HTMLDivElement>
  getItemProps: (index: number) => ItemProps
  isInView: boolean
}

export function useScrollRevealGroup({
  staggerInterval = 100,
  animation = 'fade-up',
}: UseScrollRevealGroupOptions = {}): UseScrollRevealGroupReturn {
  const { ref, isInView } = useInView({
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  })

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent): void => {
      setPrefersReducedMotion(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const shouldShow = isInView || prefersReducedMotion

  const getItemProps = (index: number): ItemProps => ({
    className: shouldShow ? getVisibleClass(animation) : getHiddenClass(animation),
    style: { transitionDelay: shouldShow && !prefersReducedMotion ? `${index * staggerInterval}ms` : '0ms' },
  })

  return { containerRef: ref, getItemProps, isInView: shouldShow }
}
