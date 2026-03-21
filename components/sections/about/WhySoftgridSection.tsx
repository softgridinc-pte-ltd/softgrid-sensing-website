import { ShieldCheck, Cpu, Link2, FileCheck2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'

import type { ReactNode } from 'react'

interface Pillar {
  icon: ReactNode
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />,
    title: 'Battle-Tested Reliability',
    description:
      'Deployed on over 10,000 public assets. Trusted by HDB for Singapore\u2019s public housing.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-500" />,
    title: 'Deep Tech Advantage',
    description:
      'Proprietary AI and real-time digital twin engines. Not generic white-label software.',
  },
  {
    icon: <Link2 className="w-6 h-6 text-cyan-500" />,
    title: 'End-to-End Integrity',
    description:
      'Complete control from hardware sensors to the technician\u2019s mobile app. Seamless integration.',
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-cyan-500" />,
    title: 'Regulatory Alignment',
    description:
      'Purpose-built for BCA\u2019s Smart FM and RM&D compliance requirements.',
  },
]

export function WhySoftgridSection(): React.ReactElement {
  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Softgrid?</h2>
        </div>

        <div data-animate-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              data-animate
            >
              <Card className="p-8 h-full">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{pillar.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
