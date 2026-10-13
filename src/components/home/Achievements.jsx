
import { Award, Medal, GraduationCap, Trophy } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { achievements } from '../../data/school'

const icons = { Award, Medal, GraduationCap, Trophy }

export default function Achievements() {
  return (
    <section className="py-24 px-4 bg-soft">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Our proud moments" title="Achievements &" highlight="Awards" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => {
            const Icon = icons[a.icon]
            return (
              <Reveal key={a.title} delay={i * 100}>
                <div className="h-full bg-white rounded-3xl p-7 text-center shadow-md shadow-navy/10 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gold/15 text-gold grid place-items-center">
                    <Icon size={28} />
                  </div>
                  <p className="font-display text-4xl font-bold text-navy mt-4">{a.value}</p>
                  <h3 className="font-bold text-navy mt-1">{a.title}</h3>
                  <p className="text-sm mt-2 leading-relaxed">{a.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}