'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  interest: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  interest?: string
  message?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzlplbq'

const interestOptions = [
  'Lift Monitoring & Compliance',
  'Smart Facility Management',
  'Digital Twin & Visualization',
  'General Inquiry',
  'Partnership Opportunity',
  'Other',
]

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  interest: '',
  message: '',
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email'
  }

  if (!data.company.trim()) {
    errors.company = 'Company name is required'
  }

  if (!data.interest) {
    errors.interest = 'Please select an area of interest'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  }

  return errors
}

const inputStyles =
  'w-full bg-navy-800 border border-navy-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-400 outline-none transition-all duration-200 focus:border-primary-500/50 focus:shadow-[0_0_12px_rgba(31,153,197,0.08)]'

const labelStyles = 'block text-sm font-medium text-slate-300 mb-1.5'

const errorStyles = 'text-red-300 text-xs mt-1'

export function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [touched, setTouched] = useState<Set<string>>(new Set())

  const handleChange = (
    field: keyof FormData,
    value: string
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched.has(field)) {
      const newErrors = validateForm({ ...formData, [field]: value })
      setErrors((prev) => {
        const updated = { ...prev }
        if (newErrors[field as keyof FormErrors]) {
          updated[field as keyof FormErrors] = newErrors[field as keyof FormErrors]
        } else {
          delete updated[field as keyof FormErrors]
        }
        return updated
      })
    }
  }

  const handleBlur = (field: keyof FormData): void => {
    setTouched((prev) => new Set(prev).add(field))
    const newErrors = validateForm(formData)
    if (newErrors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field as keyof FormErrors]: newErrors[field as keyof FormErrors],
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    setErrors(validationErrors)
    setTouched(new Set(Object.keys(formData)))

    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`)
      }

      setStatus('success')
      setFormData(initialFormData)
      setTouched(new Set())
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const handleReset = (): void => {
    setStatus('idle')
    setFormData(initialFormData)
    setTouched(new Set())
    setErrors({})
  }

  if (status === 'success') {
    return (
      <div className="bg-navy-800 border border-primary-500/30 rounded-xl p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-primary-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent</h3>
        <p className="text-slate-300 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 1&ndash;2 business days.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name & Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Name <span className="text-primary-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            placeholder="Your name"
            aria-invalid={errors.name && touched.has('name') ? true : undefined}
            aria-describedby={errors.name && touched.has('name') ? 'name-error' : undefined}
            className={`${inputStyles} ${errors.name && touched.has('name') ? 'border-red-500/50' : ''}`}
          />
          {errors.name && touched.has('name') && (
            <p id="name-error" className={errorStyles}>{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelStyles}>
            Email <span className="text-primary-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="Work email"
            aria-invalid={errors.email && touched.has('email') ? true : undefined}
            aria-describedby={errors.email && touched.has('email') ? 'email-error' : undefined}
            className={`${inputStyles} ${errors.email && touched.has('email') ? 'border-red-500/50' : ''}`}
          />
          {errors.email && touched.has('email') && (
            <p id="email-error" className={errorStyles}>{errors.email}</p>
          )}
        </div>
      </div>

      {/* Company & Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className={labelStyles}>
            Company <span className="text-primary-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            onBlur={() => handleBlur('company')}
            placeholder="Company name"
            aria-invalid={errors.company && touched.has('company') ? true : undefined}
            aria-describedby={errors.company && touched.has('company') ? 'company-error' : undefined}
            className={`${inputStyles} ${errors.company && touched.has('company') ? 'border-red-500/50' : ''}`}
          />
          {errors.company && touched.has('company') && (
            <p id="company-error" className={errorStyles}>{errors.company}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone <span className="text-slate-400 text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="Phone number"
            className={inputStyles}
          />
        </div>
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className={labelStyles}>
          Area of Interest <span className="text-primary-500">*</span>
        </label>
        <select
          id="interest"
          value={formData.interest}
          onChange={(e) => handleChange('interest', e.target.value)}
          onBlur={() => handleBlur('interest')}
          aria-invalid={errors.interest && touched.has('interest') ? true : undefined}
          aria-describedby={errors.interest && touched.has('interest') ? 'interest-error' : undefined}
          className={`${inputStyles} ${!formData.interest ? 'text-slate-500' : ''} ${errors.interest && touched.has('interest') ? 'border-red-500/50' : ''}`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option} className="bg-navy-800 text-white">
              {option}
            </option>
          ))}
        </select>
        {errors.interest && touched.has('interest') && (
          <p id="interest-error" className={errorStyles}>{errors.interest}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelStyles}>
          Message <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          placeholder="How can we help?"
          aria-invalid={errors.message && touched.has('message') ? true : undefined}
          aria-describedby={errors.message && touched.has('message') ? 'message-error' : undefined}
          className={`${inputStyles} resize-none ${errors.message && touched.has('message') ? 'border-red-500/50' : ''}`}
        />
        {errors.message && touched.has('message') && (
          <p id="message-error" className={errorStyles}>{errors.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 text-red-300 flex-shrink-0" />
          <p className="text-red-300 text-sm">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] inline-flex items-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-slate-600 text-xs">
        We typically respond within 24 hours.
      </p>
    </form>
  )
}
