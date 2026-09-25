'use client'

import { useState, useCallback, useEffect } from 'react'
import { Linkedin, Mail, Link2, Check } from 'lucide-react'

interface ShareLinksProps {
  url: string
  title: string
}

const COPIED_RESET_MS = 2000

const buttonClass =
  'flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400'

export function ShareLinks({ url, title }: ShareLinksProps): React.ReactElement {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), COPIED_RESET_MS)
    return () => clearTimeout(timer)
  }, [copied])

  const handleCopy = useCallback(async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch (error) {
      console.error('Copy link failed:', error)
    }
  }, [url])

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={buttonClass}
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        aria-label="Share by email"
        className={buttonClass}
      >
        <Mail className="h-4 w-4" />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        className={buttonClass}
      >
        {copied ? <Check className="h-4 w-4 text-primary-600" /> : <Link2 className="h-4 w-4" />}
      </button>
      <span aria-live="polite" className="text-xs font-medium text-primary-600">
        {copied ? 'Link copied' : ''}
      </span>
    </div>
  )
}
