'use client'

import { Clock, Microscope, Award, Shield, Cloud, Activity, Plug } from 'lucide-react'
import { useScrollRevealGroup } from '@/hooks/useScrollRevealGroup'

interface Credential {
  icon: React.ReactNode
  label: string
  detail: string
}

const credentials: Credential[] = [
  {
    icon: <Clock className="w-5 h-5 text-cyan-500" />,
    label: '8 Years of R&D',
    detail: 'Building facility technology in Singapore since 2017',
  },
  {
    icon: <Microscope className="w-5 h-5 text-cyan-500" />,
    label: 'A*STAR & SIMTech',
    detail: 'Joint research partnerships for predictive AI',
  },
  {
    icon: <Award className="w-5 h-5 text-cyan-500" />,
    label: 'S$2.1M NRF Grant',
    detail: 'Cities of Tomorrow national research award',
  },
  {
    icon: <Shield className="w-5 h-5 text-cyan-500" />,
    label: 'IM8 & IEC 62443',
    detail: 'Security compliance for government and enterprise',
  },
  {
    icon: <Cloud className="w-5 h-5 text-cyan-500" />,
    label: 'AWS & Azure Native',
    detail: 'Cloud-native deployment on major providers',
  },
  {
    icon: <Activity className="w-5 h-5 text-cyan-500" />,
    label: '10,000+ Assets',
    detail: 'Monitored across Singapore at national scale',
  },
  {
    icon: <Plug className="w-5 h-5 text-cyan-500" />,
    label: 'Open Standards',
    detail: 'BACnet, Modbus, MQTT, OPC-UA, REST APIs',
  },
]

export function PlatformCredentialsSection(): React.ReactElement {
  const { containerRef, getItemProps } = useScrollRevealGroup({ staggerInterval: 80 })

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built on Proven Technology
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            AFOS is backed by years of research, real-world deployment, and recognized partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, i) => (
            <div
              key={cred.label}
              className={`bg-navy-900 border border-navy-700 rounded-xl p-6 hover:border-cyan-500/50 ${getItemProps(i).className}`}
              style={getItemProps(i).style}
            >
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                {cred.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{cred.label}</h3>
              <p className="text-slate-400 text-sm">{cred.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
