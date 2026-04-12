'use client'

import { useEffect, useRef, useState } from 'react'

interface HeroStatCounterProps {
  value: string
  suffix?: string
  label: string
}

export function HeroStatCounter({
  value,
  suffix,
  label,
}: HeroStatCounterProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericPart = value.replace(/[^0-9]/g, '')
    const target = parseInt(numericPart, 10)
    if (isNaN(target)) {
      setDisplayValue(value)
      return
    }

    const nonNumericSuffix = value.replace(/[0-9]/g, '')
    const duration = 1500
    const steps = 40
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setDisplayValue(`${current.toLocaleString()}${nonNumericSuffix}`)

      if (step >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center">
      <div className="relative inline-block">
        <div className="absolute inset-0 blur-[16px] bg-cyan-300/10 rounded-full" />
        <div className="relative text-4xl md:text-5xl font-bold text-cyan-300 mb-2 font-heading drop-shadow-[0_0_12px_rgba(34,211,238,0.20)]">
          {displayValue}
          {suffix && (
            <span className="text-primary-400">{suffix}</span>
          )}
        </div>
      </div>
      <div className="text-slate-300 text-xs uppercase tracking-[0.15em] font-medium">
        {label}
      </div>
    </div>
  )
}
