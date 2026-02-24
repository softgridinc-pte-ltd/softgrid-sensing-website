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
} from 'lucide-react'
import { FeatureCard } from '@/components/ui/Card'
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
    <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform, End-to-End
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From hardware sensors to cloud analytics to mobile apps&mdash;fully integrated.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {architectureLayers.map((layer, i) => (
            <div key={layer.title} className="relative">
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {layer.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{layer.title}</h3>
                <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mb-3">
                  {layer.subtitle}
                </p>
                <div className="space-y-1">
                  {layer.items.map((item) => (
                    <p key={item} className="text-slate-400 text-sm">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Connecting arrow (hidden on last item and mobile) */}
              {i < architectureLayers.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-20">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="text-cyan-500/60"
                  >
                    <path
                      d="M4 8h8m0 0l-3-3m3 3l-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={`transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <FeatureCard
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/platform" variant="ghost">
            Explore the Platform &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
