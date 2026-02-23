'use client'

import { useEffect, useRef, useState } from 'react'

interface StatBlockProps {
  value: string
  label: string
  isNumeric?: boolean
}

export function StatBlock({
  value,
  label,
  isNumeric = true,
}: StatBlockProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [displayValue, setDisplayValue] = useState(isNumeric ? '0' : value)

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
    if (!isVisible || !isNumeric) return

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
  }, [isVisible, isNumeric, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-cyan-500 mb-2 font-heading">
        {isNumeric ? displayValue : value}
      </div>
      <div className="text-slate-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}
