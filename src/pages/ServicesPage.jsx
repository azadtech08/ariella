import { Link } from 'react-router-dom'
import { services } from '../data/services'

/* Inline SVG icon map */
const ServiceIcon = ({ name }) => {
  const map = {
    FaCode: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    FaMobileAlt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    FaCloud: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
    FaChartLine: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
    FaServer: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />,
    FaFlask: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
    FaGlobe: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    FaBolt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    FaLandmark: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />,
  }
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {map[name] || map.FaCode}
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d1f] via-[#0a1628] to-[#050d1f]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h1
            className="mt-3 text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            A Full Spectrum of{' '}
            <span className="text-blue-400">Technology Services</span>
          </h1>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From software engineering and AI to EV infrastructure and government consulting — we
            deliver end-to-end technology solutions across 9 specialised domains.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group flex flex-col p-7 rounded-2xl bg-[#0a1628] border border-white/5 hover:border-blue-500/30 hover:bg-[#0f1f3d] transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <ServiceIcon name={service.icon} />
                  </div>
                  <span className="text-slate-600 text-sm font-mono">{String(idx + 1).padStart(2, '0')}</span>
                </div>

                <h2
                  className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {service.title}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed flex-1">{service.summary}</p>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-blue-400 text-sm font-medium">
                  Explore service
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-3xl bg-[#0a1628] border border-blue-500/20">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Not Sure Which Service You Need?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Our team is happy to understand your requirements and recommend the right solution.
              Book a free 30-minute consultation today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/20"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
