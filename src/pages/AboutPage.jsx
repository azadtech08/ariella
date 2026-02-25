import { Link } from 'react-router-dom'

const values = [
  { emoji: '💡', title: 'Innovation', desc: 'We constantly explore, prototype, and adopt emerging technologies to stay ahead of the curve.' },
  { emoji: '🎯', title: 'Excellence', desc: 'Quality is non-negotiable — we hold every deliverable to the highest engineering and design standards.' },
  { emoji: '🤝', title: 'Integrity', desc: 'Transparent communication, honest advice, and accountable execution in every engagement.' },
  { emoji: '🌱', title: 'Impact', desc: 'We measure success not just in code shipped but in the real-world value created for clients and society.' },
  { emoji: '⚡', title: 'Agility', desc: 'Startup speed with enterprise discipline — we adapt fast without compromising on quality.' },
  { emoji: '🌍', title: 'Inclusivity', desc: 'Technology for everyone — we design solutions that are accessible, affordable, and scalable.' },
]

const team = [
  {
    name: 'Leadership Team',
    desc: 'Our founding team brings together deep expertise in software engineering, enterprise IT, AI/ML research, EV technology, and government project delivery.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d1f] via-[#0a1628] to-[#050d1f]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1
              className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Building Tomorrow&apos;s Technology{' '}
              <span className="text-blue-400">Today</span>
            </h1>
            <p className="mt-5 text-slate-400 text-lg leading-relaxed">
              Ariella GenZ Innovations Private Limited is an Indian technology company on a mission
              to democratise enterprise-grade technology. We blend the agility of a startup with
              the rigour of a seasoned technology partner.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#0a1628] border-y border-white/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
              <h2
                className="mt-3 text-3xl font-bold text-white"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Founded on a Vision of a Digital India
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Ariella GenZ Innovations was founded with a singular vision: to make world-class
                technology accessible to every organisation in India — from the largest enterprise
                to the smallest government department.
              </p>
              <p className="mt-3 text-slate-400 leading-relaxed">
                We are a registered company in India, empanelled on GeM (Government e-Marketplace)
                and active on CPPP and state procurement portals. Our portfolio spans 9 distinct
                service domains — each staffed by domain experts with hands-on delivery experience.
              </p>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Whether you need a custom software platform, a mobile app, an EV charging network,
                or a complete digital transformation programme, Ariella GenZ is your single
                accountable technology partner.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2024', label: 'Founded' },
                { value: '9+', label: 'Service Domains' },
                { value: 'Pan-India', label: 'Presence' },
                { value: 'GeM', label: 'Registered' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-6 rounded-2xl bg-[#050d1f] border border-white/5 text-center"
                >
                  <div
                    className="text-3xl font-bold text-blue-400 mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {value}
                  </div>
                  <div className="text-slate-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border border-blue-500/20">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Vision
              </h3>
              <p className="text-slate-400 leading-relaxed">
                To be India&apos;s most trusted and innovative technology company — enabling every
                organisation, government body, and community to thrive in the digital age through
                purposeful, human-centred technology.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border border-indigo-500/20">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Mission
              </h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver end-to-end technology solutions — from software and AI to EV
                infrastructure and government IT — that solve real problems, drive measurable
                outcomes, and create lasting value for our clients, partners, and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0a1628] border-y border-white/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Our Core Values
            </span>
            <h2
              className="mt-3 text-3xl font-bold text-white"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-[#050d1f] border border-white/5 hover:border-blue-500/20 transition-colors"
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Our Team
            </span>
            <h2
              className="mt-3 text-3xl font-bold text-white"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              The People Behind Ariella GenZ
            </h2>
          </div>
          {team.map(({ name, desc }) => (
            <div key={name} className="max-w-3xl mx-auto text-center">
              <div className="p-10 rounded-2xl bg-[#0a1628] border border-white/5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl mx-auto mb-5">
                  👥
                </div>
                <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {name}
                </h3>
                <p className="text-slate-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] border-t border-white/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Ready to Work With Us?
          </h2>
          <p className="text-slate-400 mb-8">
            Let&apos;s explore how Ariella GenZ can accelerate your technology journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/20"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
