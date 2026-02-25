import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div
          className="text-8xl font-bold text-blue-500/20 mb-4"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
          Page Not Found
        </h1>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition-all"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  )
}
