'use client'

import { Radio, BrainCircuit, Workflow, Database, ChevronRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

interface Engine {
  icon: React.ReactNode
  name: string
  subtitle: string
  description: string
  capabilities: string[]
}

const engines: Engine[] = [
  {
    icon: <Radio className="w-6 h-6 text-cyan-500" />,
    name: 'Connect',
    subtitle: 'Powered by Fusion Core',
    description: 'Multi-protocol ingestion and device management for any data source.',
    capabilities: [
      'MQTT, CoAP, OPC-UA, HTTP',
      'BACnet, Modbus',
      'AWS IoT Core & Azure IoT Hub',
      'Device management & auth',
      'Rule engine',
      'RESTful APIs',
      'Multi-tenancy',
    ],
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-cyan-500" />,
    name: 'Intelligence',
    subtitle: 'Powered by Fusion AI',
    description: 'Predictive and cognitive AI that turns sensor data into actionable insights.',
    capabilities: [
      'Predictive AI: >83% accuracy',
      'Anomaly detection (unsupervised)',
      'Multi-class fault prediction',
      '<25% customization for new assets',
      'A*STAR & SIMTech collaboration',
      'Athena RAG knowledge base',
      'Natural language Q&A',
    ],
  },
  {
    icon: <Workflow className="w-6 h-6 text-cyan-500" />,
    name: 'Workflow',
    subtitle: 'Detection to Resolution',
    description: 'Automated lifecycle from fault detection to verified resolution.',
    capabilities: [
      'Detection \u2192 Classification',
      'Auto work order generation',
      'GPS-based technician dispatch',
      '50+ configurable fault types',
      'Auto-severity calculation',
      'Auto-generated service reports',
      'Data feedback to Intelligence',
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-500" />,
    name: 'Data',
    subtitle: 'Unified Data Layer',
    description: 'Cross-module storage, dashboards, analytics, and compliance reporting.',
    capabilities: [
      'Unified cross-module storage',
      'Custom dashboards per org type',
      'Analytics & historical trends',
      'BCA compliance reporting',
      'Green Mark documentation',
      'ESG data collection',
      'Continuous feedback loop',
    ],
  },
]

export function PlatformEnginesSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How AFOS Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Four engines working in a closed loop &mdash; data flows in, intelligence extracts insights,
            workflows execute, and outcomes feed back to make the system smarter.
          </p>
        </div>

        {/* Engine flow diagram — Desktop */}
        <div
          className={`hidden lg:flex items-center justify-center gap-3 mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {engines.map((engine, i) => (
            <div key={engine.name} className="contents">
              <div className="bg-navy-800 border border-navy-700 rounded-xl px-6 py-6 text-center hover:border-cyan-500/30 transition-colors duration-300 flex-1">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {engine.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{engine.name}</h3>
                <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider">
                  {engine.subtitle}
                </p>
              </div>

              {i < engines.length - 1 && (
                <div className="shrink-0 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-cyan-500" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Engine flow diagram — Mobile */}
        <div
          className={`grid grid-cols-2 gap-4 lg:hidden mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {engines.map((engine) => (
            <div key={engine.name} className="bg-navy-800 border border-navy-700 rounded-xl px-4 py-5 text-center hover:border-cyan-500/30 transition-colors duration-300">
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                {engine.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-1">{engine.name}</h3>
              <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider">
                {engine.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Closed-loop indicator */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse-slow" />
            <span className="text-cyan-400 text-sm font-medium">Closed-loop: outcomes feed back into Intelligence</span>
          </div>
        </div>

        {/* Engine detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engines.map((engine, i) => (
            <div
              key={engine.name}
              className={`bg-navy-800 border border-navy-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {engine.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{engine.name} Engine</h3>
                  <p className="text-sm text-cyan-400">{engine.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-400 mb-5">{engine.description}</p>

              <div className="flex flex-wrap gap-2">
                {engine.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="border border-navy-600 text-slate-300 text-xs rounded-full px-3 py-1"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
