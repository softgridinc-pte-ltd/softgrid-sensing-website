'use client'

import { useEffect, useRef, useState } from 'react'

interface StatBlockProps {
  value: string
  label: string
}

export function StatBlock({
  value,
  label,
}: StatBlockProps): React.ReactElement {
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

    const suffix = value.replace(/[0-9]/g, '')
    const duration = 1500
    const steps = 40
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setDisplayValue(`${current.toLocaleString()}${suffix}`)

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
        <div className="absolute inset-0 blur-[20px] bg-cyan-300/10 rounded-full" />
        <div className="relative text-5xl md:text-6xl font-bold text-cyan-300 mb-3 font-heading drop-shadow-[0_0_12px_rgba(34,211,238,0.20)]">
          {displayValue}
        </div>
      </div>
      <div className="text-slate-200 text-sm uppercase tracking-[0.15em] font-medium">
        {label}
      </div>
    </div>
  )
}
