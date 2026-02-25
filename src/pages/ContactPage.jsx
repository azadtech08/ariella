import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@ariella.in',
    href: 'mailto:contact@ariella.in',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'India',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: 'Website',
    value: 'ariella.in',
    href: 'https://ariella.in',
  },
]

const serviceOptions = [
  'Software Development & Engineering',
  'Mobile Application Development',
  'Web Portals, SaaS & Cloud Platforms',
  'Digital Transformation & IT Consulting',
  'IT Infrastructure & Data Centre Solutions',
  'Research, Innovation & ICT Solutions',
  'Societal & Global Digital Transformation',
  'Electric Vehicle (EV) Solutions',
  'Government Projects & Consultancy',
  'General Inquiry',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Please tell us about your requirement.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    /* In production connect to your backend / form service here */
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-10 lg:pt-36 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d1f] via-[#0a1628] to-[#050d1f]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Contact Us
          </span>
          <h1
            className="mt-3 text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Let&apos;s Build Something{' '}
            <span className="text-blue-400">Great Together</span>
          </h1>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            Tell us about your project or requirement. Our team will get back to you within one
            business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  Get in Touch
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether you&apos;re ready to start a project, need a consultation, or just have
                  a question — we&apos;d love to hear from you.
                </p>
              </div>

              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-blue-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-white text-sm font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/company/ariella-genz-innovations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium hover:text-blue-400 transition-colors"
                  >
                    Ariella GenZ Innovations
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0a1628] border border-white/5">
                <p className="text-slate-400 text-sm">
                  <span className="text-white font-medium">Response time:</span> We typically
                  respond within 1 business day. For urgent requirements, please mention it in
                  your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex items-center justify-center p-12 rounded-2xl bg-[#0a1628] border border-blue-500/20">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                      Message Received!
                    </h3>
                    <p className="text-slate-400 max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your message and get back
                      to you within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-7 rounded-2xl bg-[#0a1628] border border-white/5 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="name">
                        Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl bg-[#050d1f] border text-white placeholder-slate-600 text-sm outline-none focus:border-blue-500 transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="email">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#050d1f] border text-white placeholder-slate-600 text-sm outline-none focus:border-blue-500 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Organisation */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="organisation">
                      Organisation / Company
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Your organisation name"
                      className="w-full px-4 py-3 rounded-xl bg-[#050d1f] border border-white/10 text-white placeholder-slate-600 text-sm outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="service">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#050d1f] border border-white/10 text-white text-sm outline-none focus:border-blue-500 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#050d1f]">Select a service…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#050d1f]">{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="message">
                      Your Requirement <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, timeline, and any other relevant details…"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050d1f] border text-white placeholder-slate-600 text-sm outline-none focus:border-blue-500 transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40"
                  >
                    Send Message
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    By submitting this form you agree to be contacted by our team regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
