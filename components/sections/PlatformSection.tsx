'use client'

import {
  Server,
  Cpu,
  Cloud,
  MonitorSmartphone,
  Database,
  BrainCircuit,
  Workflow,
  Box,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useInView } from '@/hooks/useInView'

const architectureLayers = [
  {
    icon: <Server className="w-6 h-6 text-cyan-500" />,
    title: 'Hardware',
    subtitle: 'Sensors & Edge Devices',
    items: ['LMD Series', 'LBB', 'Sensors'],
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-500" />,
    title: 'Edge',
    subtitle: 'Local Processing',
    items: ['Local AI', 'Resilient Logic', 'Connectivity'],
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-500" />,
    title: 'Cloud',
    subtitle: 'FOS Engine & Analytics',
    items: ['Analytics', 'AI/ML', 'Storage'],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-cyan-500" />,
    title: 'Applications',
    subtitle: 'Dashboard & Mobile',
    items: ['Dashboard', 'Mobile App', 'Alerts'],
  },
]

const capabilities = [
  {
    icon: <Database className="w-6 h-6 text-cyan-500" />,
    title: 'Data Integration',
    description:
      'Connect any asset, any brand. Multi-protocol support for lifts, HVAC, pumps, and more.',
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-cyan-500" />,
    title: 'AI Analytics',
    description:
      '85%+ fault prediction accuracy. Unsupervised anomaly detection and multi-class fault classification.',
  },
  {
    icon: <Workflow className="w-6 h-6 text-cyan-500" />,
    title: 'Workflow Automation',
    description:
      'From alert to work order to completion\u2014closed-loop maintenance without manual coordination.',
  },
  {
    icon: <Box className="w-6 h-6 text-cyan-500" />,
    title: 'Digital Twin',
    description:
      'Real-time 3D visualization with web-based FEA. See your assets like never before.',
  },
]

export function PlatformSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="platform" className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform, End-to-End
          </h2>
          <p className="text-lg text-cyan-400 max-w-2xl mx-auto">
            From hardware sensors to cloud analytics to mobile apps&mdash;fully integrated.
          </p>
        </div>

        {/* Platform Architecture */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-6 text-center">
            Platform Architecture
          </p>
          {/* Desktop: flex row with arrows between cards */}
          <div
            className={`hidden lg:flex items-center justify-center gap-3 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {architectureLayers.map((layer, i) => (
              <div key={layer.title} className="contents">
                <div className="bg-navy-800 border border-navy-700 rounded-xl px-5 py-5 text-center hover:border-cyan-500/30 transition-colors duration-300 flex-1">
                  <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {layer.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">{layer.title}</h3>
                  <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mb-2">
                    {layer.subtitle}
                  </p>
                  <div className="space-y-0.5">
                    {layer.items.map((item) => (
                      <p key={item} className="text-slate-400 text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Arrow between cards */}
                {i < architectureLayers.length - 1 && (
                  <div className="shrink-0 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-cyan-500" strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/tablet: grid without arrows */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {architectureLayers.map((layer) => (
              <div key={layer.title} className="bg-navy-800 border border-navy-700 rounded-xl px-5 py-5 text-center hover:border-cyan-500/30 transition-colors duration-300">
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {layer.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{layer.title}</h3>
                <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mb-2">
                  {layer.subtitle}
                </p>
                <div className="space-y-0.5">
                  {layer.items.map((item) => (
                    <p key={item} className="text-slate-400 text-sm">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual connector between rows */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-6 bg-gradient-to-b from-navy-700 to-cyan-500/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
            <div className="w-px h-6 bg-gradient-to-b from-cyan-500/30 to-navy-700" />
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-6 text-center">
            Core Capabilities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="bg-navy-800 border border-navy-700 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-100 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/solutions" variant="ghost">
            Explore Solutions &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
