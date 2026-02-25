import { Link } from 'react-router-dom'
import { services } from '../data/services'

/* ── Icon map (SVG inline to avoid extra deps) ── */
const ServiceIcon = ({ name }) => {
  const icons = {
    FaCode: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    FaMobileAlt: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    FaCloud: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    FaChartLine: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    FaServer: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    FaFlask: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    FaGlobe: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    FaBolt: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    FaLandmark: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  }
  return icons[name] || icons.FaCode
}

/* ── Why Choose Us data ── */
const whyUs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trusted & Compliant',
    desc: 'Registered on GeM, CPPP, and other government portals. We adhere to regulatory and compliance frameworks across all engagements.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'End-to-End Delivery',
    desc: 'From concept to post-production support — we handle the full lifecycle so you have one accountable partner.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Deep Domain Expertise',
    desc: 'Specialists across software engineering, AI/ML, EV, cloud infrastructure, and government IT — under one roof.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'India-First, Global Ready',
    desc: 'Built for the Indian market with deep knowledge of local regulations — and the capability to scale globally.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient + grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d1f] via-[#0a1628] to-[#050d1f]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            India&apos;s Enterprise Technology Partner
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Innovating for a{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Ariella GenZ Innovations Pvt. Ltd. delivers cutting-edge AI, software, mobile, EV, and
            digital transformation solutions — empowering enterprises, startups, and governments
            across India and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold text-base hover:bg-white/5 hover:border-white/30 transition-all"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '9+', label: 'Service Domains' },
              { value: '100%', label: 'Delivery Focus' },
              { value: 'Pan-India', label: 'Reach' },
              { value: '24/7', label: 'Support' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {value}
                </div>
                <div className="text-slate-500 text-xs sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── About Strip ── */}
      <section className="bg-[#0a1628] border-y border-white/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Who We Are
              </span>
              <h2
                className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Built for the Age of{' '}
                <span className="text-blue-400">Digital Transformation</span>
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Ariella GenZ Innovations Private Limited is a technology startup headquartered in
                India. We combine fresh GenZ thinking with enterprise-grade execution to help
                organisations of every size harness the power of modern technology.
              </p>
              <p className="mt-3 text-slate-400 leading-relaxed">
                From AI-powered software to EV infrastructure, from SaaS platforms to government
                digitisation — we deliver solutions that drive real business outcomes.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
              >
                Learn more about us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🚀', title: 'Innovation First', desc: 'We embrace emerging tech early to give you a competitive edge.' },
                { icon: '🔒', title: 'Enterprise Security', desc: 'Security and compliance built into every layer of our solutions.' },
                { icon: '🌏', title: 'Global Standards', desc: 'International best practices adapted for the Indian context.' },
                { icon: '🤝', title: 'Partnership Model', desc: 'Long-term relationships, not one-time transactions.' },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-xl bg-[#050d1f] border border-white/5 hover:border-blue-500/20 transition-colors"
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              What We Do
            </span>
            <h2
              className="mt-3 text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Our Core Services
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
              A comprehensive portfolio of technology services spanning every dimension of the digital enterprise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group p-6 rounded-2xl bg-[#0a1628] border border-white/5 hover:border-blue-500/30 hover:bg-[#0f1f3d] transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  <ServiceIcon name={service.icon} />
                </div>
                <h3
                  className="text-white font-semibold text-base mb-2 group-hover:text-blue-300 transition-colors"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {service.shortTitle}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.summary}</p>
                <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500/10 transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-[#0a1628] border-y border-white/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Why Ariella GenZ
            </span>
            <h2
              className="mt-3 text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              The Ariella Advantage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-[#050d1f] border border-white/5 hover:border-blue-500/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl overflow-hidden p-10 lg:p-16 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-[#0a1628] border border-blue-500/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Ariella GenZ can help you achieve your technology goals. Our
              experts are ready to design the right solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
