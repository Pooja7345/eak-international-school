import { Calendar } from 'lucide-react'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { news } from '../../data/school'

const badge = {
  Notice: 'bg-blue-100 text-blue-700',
  Exam: 'bg-red-100 text-red-700',
  Achievement: 'bg-green-100 text-green-700',
  Holiday: 'bg-amber-100 text-amber-700',
}

export default function NewsNotices() {
  return (
    <section className="py-24 px-4 bg-soft">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Stay updated" title="Latest News &" highlight="Notices" />
        <div className="grid sm:grid-cols-2 gap-6">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={(i % 2) * 120}>
              <article className="h-full bg-white rounded-3xl p-7 shadow-md shadow-navy/10 hover:-translate-y-1.5 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${badge[n.category]}`}>{n.category}</span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar size={14} /> {n.date}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy mt-4">{n.title}</h3>
                <p className="text-sm mt-2 leading-relaxed">{n.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button to="/events" variant="navy">View All Notices</Button>
        </div>
      </div>
    </section>
  )
}