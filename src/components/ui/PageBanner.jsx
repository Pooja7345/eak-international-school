import { Link } from 'react-router-dom'

export default function PageBanner({ title, highlight, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-light text-white">
      <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-gold/15 animate-float" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-white/70">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gold">{title}</span>
        </nav>
        <h1 className="animate-fade-up font-display text-4xl sm:text-5xl font-bold mt-4">
          {title} <em className="text-gold">{highlight}</em>
        </h1>
        {subtitle && <p className="animate-fade-up mt-4 max-w-2xl text-lg text-white/80" style={{ animationDelay: '150ms' }}>{subtitle}</p>}
      </div>
    </section>
  )
}