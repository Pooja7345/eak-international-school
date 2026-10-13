import { Clock, MapPin } from 'lucide-react'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { events } from '../../data/school'

export default function UpcomingEvents() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Mark your calendar" title="Upcoming" highlight="Events" />
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 120}>
              <div className="h-full flex gap-5 bg-white rounded-3xl p-6 shadow-md shadow-navy/10 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                <div className="shrink-0 w-16 h-20 rounded-2xl bg-navy text-center text-white grid place-content-center leading-none">
                  <span className="font-display text-3xl font-bold text-gold">{e.day}</span>
                  <span className="text-xs tracking-widest mt-1">{e.month}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">{e.title}</h3>
                  <p className="text-sm mt-1.5 leading-relaxed">{e.text}</p>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-3"><Clock size={13} /> {e.time}</p>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-1"><MapPin size={13} /> {e.place}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button to="/events">See All Events</Button>
        </div>
      </div>
    </section>
  )
}