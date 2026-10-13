import useCounter from '../../hooks/useCounter'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/school'

function Stat({ value, suffix, label }) {
  const [ref, count] = useCounter(value)
  return (
    <div ref={ref} className="bg-white rounded-3xl p-6 text-center shadow-xl shadow-navy/10">
      <p className="font-display text-3xl sm:text-4xl font-bold text-navy">
        {count.toLocaleString('en-IN')}{suffix}
      </p>
      <p className="text-sm text-slate-500 mt-1">{label}</p>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <div className="relative z-10 -mt-16 px-4">
      <Reveal className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <Stat key={s.label} {...s} />)}
      </Reveal>
    </div>
  )
}