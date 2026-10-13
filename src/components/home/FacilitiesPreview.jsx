import { MonitorSmartphone, FlaskConical, Laptop, BookOpen, Trophy, Bus } from 'lucide-react'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { facilities } from '../../data/school'

const icons = { MonitorSmartphone, FlaskConical, Laptop, BookOpen, Trophy, Bus }

export default function FacilitiesPreview() {
  return (
    <section className="py-24 px-4 bg-navy">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="World-class campus" title="Our" highlight="Facilities" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => {
            const Icon = icons[f.icon]
            return (
              <Reveal key={f.title} delay={(i % 3) * 120}>
                <div className="group h-full rounded-3xl p-7 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/60 hover:-translate-y-2 transition duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold text-navy grid place-items-center group-hover:scale-110 transition">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mt-5">{f.title}</h3>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Button to="/facilities">View All Facilities</Button>
        </div>
      </div>
    </section>
  )
}