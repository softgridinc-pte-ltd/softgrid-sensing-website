import { Mail, Phone, MapPin, Building2, Clock } from 'lucide-react'

import type { ReactNode } from 'react'

interface ContactDetail {
  icon: ReactNode
  label: string
  value: string
  href?: string
}

const contactDetails: ContactDetail[] = [
  {
    icon: <Mail className="w-5 h-5 text-primary-500" />,
    label: 'Email',
    value: 'info@softgridsensing.com',
    href: 'mailto:info@softgridsensing.com',
  },
  {
    icon: <Phone className="w-5 h-5 text-primary-500" />,
    label: 'Phone',
    value: '+65 6123 4567',
    href: 'tel:+6561234567',
  },
]

const locationDetails: ContactDetail[] = [
  {
    icon: <Building2 className="w-5 h-5 text-primary-500" />,
    label: 'Headquarters',
    value: '10 Woodlands Ave 8, #02-01\nHDB CBR, Singapore 738973',
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary-500" />,
    label: 'Office',
    value: '1 Sims Lane, #04-02\nOne Sims Lane, Singapore 387355',
  },
]

export function ContactInfo(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-5">Contact Details</h3>
        <div className="space-y-5">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {detail.icon}
              </div>
              <div>
                <p className="text-xs text-slate-300 uppercase tracking-wider font-medium mb-0.5">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-slate-200 text-sm hover:text-primary-400 transition-colors whitespace-pre-line"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-slate-200 text-sm whitespace-pre-line">
                    {detail.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-navy-700" />

      {/* Locations */}
      <div>
        <div className="space-y-5">
          {locationDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {detail.icon}
              </div>
              <div>
                <p className="text-xs text-slate-300 uppercase tracking-wider font-medium mb-0.5">
                  {detail.label}
                </p>
                <p className="text-slate-200 text-sm whitespace-pre-line">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-navy-700" />

      {/* Office Hours */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-primary-500" />
          <h3 className="text-lg font-semibold text-white">Office Hours</h3>
        </div>
        <p className="text-slate-300 text-sm">
          Monday &ndash; Friday
        </p>
        <p className="text-slate-300 text-sm">
          9:00 AM &ndash; 6:00 PM (SGT)
        </p>
      </div>

    </div>
  )
}
