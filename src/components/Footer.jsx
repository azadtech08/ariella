import { Link } from 'react-router-dom'
import { services } from '../data/services'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#020810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>A</span>
              </div>
              <div>
                <span className="block text-white font-semibold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Ariella GenZ
                </span>
                <span className="block text-blue-400 text-xs">Innovations Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              India&apos;s enterprise technology partner — delivering AI, software, mobile, EV, and digital transformation solutions for enterprises and governments.
            </p>
            <a
              href="mailto:contact@ariella.in"
              className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
            >
              contact@ariella.in
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Our Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            &copy; {year} Ariella GenZ Innovations Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/ariella-genz-innovations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
