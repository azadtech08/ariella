import { useParams, Link, Navigate } from 'react-router-dom'
import { getServiceBySlug, services } from '../data/services'

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
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {map[name] || map.FaCode}
    </svg>
  )
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d1f] via-[#0a1628] to-[#050d1f]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-300">{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-xl mb-6`}
              >
                <ServiceIcon name={service.icon} />
              </div>
              <h1
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {service.title}
              </h1>
              <p className="text-blue-400 text-lg font-medium mb-4">{service.tagline}</p>
              <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/20 text-center"
                >
                  Get a Consultation
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition-all text-center"
                >
                  All Services
                </Link>
              </div>
            </div>

            {/* Highlights card */}
            <div className="p-7 rounded-2xl bg-[#0a1628] border border-white/5">
              <h3 className="text-white font-semibold mb-5 flex items-center gap-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What We Deliver
              </h3>
              <ul className="space-y-3">
                {service.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center flex-shrink-0 font-semibold">
                      {i + 1}
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[#0a1628] border-y border-white/5 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Applications
            </span>
            <h2
              className="mt-3 text-2xl lg:text-3xl font-bold text-white"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Industry Use Cases
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.useCases.map((uc, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#050d1f] border border-white/5 hover:border-blue-500/20 transition-colors">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xs font-bold mb-3 shadow-md`}
                >
                  {i + 1}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      {otherServices.length > 0 && (
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                Explore Related Services
              </h2>
              <Link
                to="/services"
                className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                View all
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="group p-5 rounded-2xl bg-[#0a1628] border border-white/5 hover:border-blue-500/30 hover:bg-[#0f1f3d] transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-3 shadow-md`}
                  >
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3
                    className="text-white font-semibold text-sm mb-1 group-hover:text-blue-300 transition-colors"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {s.shortTitle}
                  </h3>
                  <p className="text-slate-500 text-xs line-clamp-2">{s.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0a1628] border-t border-white/5 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Connect with our {service.shortTitle} specialists for a free consultation and custom
            project estimate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/20"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
