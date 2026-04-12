'use client'

import { useState, useEffect, FormEvent } from 'react'

const SITE_PASSWORD = 'softgrid@2026'
const STORAGE_KEY = 'sg-site-auth'

export function PasswordGate({ children }: { children: React.ReactNode }): React.ReactElement {
  const [authenticated, setAuthenticated] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (stored === 'true') {
        setAuthenticated(true)
      }
    }
  }, [])

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    if (input === SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setAuthenticated(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (!mounted) {
    return <div />
  }

  if (authenticated) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-950">
      <div className="w-full max-w-sm mx-4 p-8 bg-navy-900 border border-navy-700 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-heading font-bold text-white mb-2">
            Softgrid Sensing
          </h1>
          <p className="text-sm text-slate-400">
            This site is under development. Enter password to continue.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                setError(false)
              }}
              placeholder="Enter password"
              autoFocus
              className="w-full px-4 py-3 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            />
            {error && (
              <p className="mt-2 text-sm text-red-400">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900"
          >
            Enter Site
          </button>
        </form>
      </div>
    </div>
  )
}
