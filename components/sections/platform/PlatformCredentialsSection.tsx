import { Clock, Microscope, Award, Shield, Cloud, Activity, Plug } from 'lucide-react'

const highlights = [
  { value: '8 Years', label: 'R&D in Singapore', icon: <Clock className="w-5 h-5 text-cyan-500" /> },
  { value: '10,000+', label: 'Assets Monitored', icon: <Activity className="w-5 h-5 text-cyan-500" /> },
  { value: 'BCA', label: 'RM&D Certified', icon: <Award className="w-5 h-5 text-cyan-500" /> },
]

const badges = [
  { icon: <Microscope className="w-4 h-4 text-cyan-400" />, label: 'A*STAR & SIMTech' },
  { icon: <Award className="w-4 h-4 text-cyan-400" />, label: 'NRF Grant Awarded' },
  { icon: <Shield className="w-4 h-4 text-cyan-400" />, label: 'IM8 & IEC 62443' },
  { icon: <Cloud className="w-4 h-4 text-cyan-400" />, label: 'AWS & Azure Native' },
  { icon: <Plug className="w-4 h-4 text-cyan-400" />, label: 'Open Standards' },
]

export function PlatformCredentialsSection(): React.ReactElement {
  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div data-animate className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built on Proven Technology
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            AFOS is backed by years of research, real-world deployment, and recognized partnerships.
          </p>
        </div>

        {/* Stat strip — key metrics */}
        <div
          data-animate
          className="flex flex-col sm:flex-row items-stretch justify-center divide-y sm:divide-y-0 sm:divide-x divide-navy-700/50 bg-navy-900/50 border border-navy-700 rounded-xl mb-10"
        >
          {highlights.map((stat) => (
            <div key={stat.label} className="flex-1 px-6 py-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                {stat.icon}
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</p>
              </div>
              <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Badge row — partnerships & compliance */}
        <div data-animate className="flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="inline-flex items-center gap-2 bg-navy-900/50 border border-navy-700 rounded-full px-4 py-2 hover:border-cyan-500/30 transition-colors duration-200"
            >
              {badge.icon}
              <span className="text-slate-300 text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
