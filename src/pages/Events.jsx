import { useMemo, useState } from 'react'
import { Search, Calendar, X } from 'lucide-react'
import PageBanner from '../components/ui/PageBanner'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { notices } from '../data/notices'

const TODAY = new Date('2026-10-12') // demo ke liye fixed "aaj" ki date
const PAGE_SIZE = 6
const categories = ['All', 'Circular', 'Exam', 'Holiday', 'Event', 'Competition']
const badge = {
  Circular: 'bg-blue-100 text-blue-700',
  Exam: 'bg-red-100 text-red-700',
  Holiday: 'bg-amber-100 text-amber-700',
  Event: 'bg-purple-100 text-purple-700',
  Competition: 'bg-green-100 text-green-700',
}
const dateOptions = [
  { value: 'all', label: 'All dates' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'past30', label: 'Last 30 days' },
]

const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })

export default function Events() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [range, setRange] = useState('all')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return notices
      .filter((n) => category === 'All' || n.category === category)
      .filter((n) => !q || n.title.toLowerCase().includes(q) || n.text.toLowerCase().includes(q))
      .filter((n) => {
        const d = new Date(n.date)
        const diffDays = (TODAY - d) / 86400000
        if (range === 'upcoming') return d >= TODAY
        if (range === 'past30') return diffDays >= 0 && diffDays <= 30
        return true
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [query, category, range])

  // filter badalte hi list wapas pehle 6 par aa jaye
  const change = (setter) => (value) => { setter(value); setVisible(PAGE_SIZE) }
  const reset = () => { setQuery(''); setCategory('All'); setRange('all'); setVisible(PAGE_SIZE) }
  const filtered = query || category !== 'All' || range !== 'all'

  return (
    <>
      <PageBanner
        title="Events &"
        highlight="Notices"
        subtitle="Circulars, exam notices, holidays and everything happening at EAK."
      />

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Search + date filter */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="relative sm:col-span-2">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => change(setQuery)(e.target.value)}
                placeholder="Search notices and events..."
                aria-label="Search notices and events"
                className="w-full rounded-full border border-slate-300 pl-11 pr-4 py-3 text-sm focus:border-gold focus:outline-none"
              />
            </div>
            <select
              value={range}
              onChange={(e) => change(setRange)(e.target.value)}
              aria-label="Filter by date"
              className="rounded-full border border-slate-300 px-4 py-3 text-sm focus:border-gold focus:outline-none bg-white"
            >
              {dateOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mt-5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => change(setCategory)(c)}
                aria-pressed={category === c}
                className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition ${
                  category === c ? 'bg-navy border-navy text-white' : 'border-slate-300 text-slate-600 hover:border-navy hover:text-navy'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Result count */}
          <div className="flex items-center justify-between mt-8 text-sm text-slate-500">
            <p aria-live="polite">Showing {Math.min(visible, results.length)} of {results.length} results</p>
            {filtered && (
              <button onClick={reset} className="flex items-center gap-1 text-navy font-semibold hover:text-gold transition">
                <X size={14} /> Clear filters
              </button>
            )}
          </div>

          {/* List */}
          <div className="grid gap-5 mt-5">
            {results.slice(0, visible).map((n) => (
              <Reveal key={n.id}>
                <article className="flex gap-5 bg-white rounded-3xl p-6 shadow-md shadow-navy/10 hover:-translate-y-1 hover:shadow-xl transition duration-300">
                  <div className="shrink-0 w-16 h-20 rounded-2xl bg-navy text-center text-white grid place-content-center leading-none">
                    <span className="font-display text-3xl font-bold text-gold">{new Date(n.date).getDate()}</span>
                    <span className="text-xs tracking-widest mt-1 uppercase">
                      {new Date(n.date).toLocaleString('en-IN', { month: 'short' })}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${badge[n.category]}`}>{n.category}</span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500"><Calendar size={13} /> {fmt(n.date)}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy mt-2">{n.title}</h3>
                    <p className="text-sm mt-1 leading-relaxed">{n.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}

            {results.length === 0 && (
              <div className="text-center py-16 bg-soft rounded-3xl">
                <p className="font-display text-xl font-bold text-navy">No notices found</p>
                <p className="text-sm mt-1">Try a different word or clear the filters.</p>
                <Button variant="navy" onClick={reset} className="mt-5">Clear filters</Button>
              </div>
            )}
          </div>

          {/* Load More */}
          {visible < results.length && (
            <div className="text-center mt-10">
              <Button onClick={() => setVisible((v) => v + PAGE_SIZE)}>Load More</Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}