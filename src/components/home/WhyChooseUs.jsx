import { Users, ShieldCheck, MonitorSmartphone, Trophy, HeartHandshake, Bus } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { strengths } from '../../data/school'

const icons = { Users, ShieldCheck, MonitorSmartphone, Trophy, HeartHandshake, Bus }

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Why parents trust us" title="Why Choose" highlight="EAK" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal key={s.title} delay={(i % 3) * 120}>
                <div className="group h-full bg-white rounded-3xl p-8 shadow-md shadow-navy/10 border-b-4 border-transparent hover:border-gold hover:-translate-y-2 hover:shadow-xl transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-navy text-gold grid place-items-center group-hover:rotate-[-8deg] group-hover:scale-110 transition">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mt-5">{s.title}</h3>
                  <p className="text-sm leading-relaxed mt-2">{s.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}