import { useState } from 'react'
import { Lightbulb, FlaskConical, Laptop, Users, Award, Medal, GraduationCap, Trophy, Check } from 'lucide-react'
import PageBanner from '../components/ui/PageBanner'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { academicLevels, achievements } from '../data/school'
import { levelDetails, curriculum, methodology, coCurricular } from '../data/academics'

const icons = { Lightbulb, FlaskConical, Laptop, Users, Award, Medal, GraduationCap, Trophy }

export default function Academics() {
  const [active, setActive] = useState(academicLevels[0].id)
  const level = academicLevels.find((l) => l.id === active)
  const detail = levelDetails[active]

  return (
    <>
      <PageBanner
        title="Academic"
        highlight="Excellence"
        subtitle="A balanced CBSE education that builds strong foundations, curious minds and confident learners."
      />

      {/* Levels: tabs */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Nursery to Class 12" title="Our Learning" highlight="Stages" />
          <div className="flex flex-wrap justify-center gap-3 mb-8" role="tablist">
            {academicLevels.map((l) => (
              <button
                key={l.id}
                role="tab"
                aria-selected={active === l.id}
                onClick={() => setActive(l.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold border-2 transition ${
                  active === l.id ? 'bg-navy border-navy text-white' : 'border-navy text-navy hover:bg-navy/10'
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>

          <div key={level.id} className="animate-fade-up grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-lg shadow-navy/10">
              <h3 className="font-display text-2xl font-bold text-navy">
                {level.name} <span className="text-gold text-lg">· {level.classes}</span>
              </h3>
              <p className="text-gold font-semibold text-sm mt-1">{detail.focus}</p>
              <ul className="mt-5 space-y-3">
                {level.points.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <Check className="text-gold shrink-0 mt-0.5" size={20} /> <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 bg-navy rounded-3xl p-8 text-white">
              <h4 className="font-display text-lg font-bold">Subjects</h4>
              <div className="flex flex-wrap gap-2 mt-4">
                {detail.subjects.map((s) => (
                  <span key={s} className="text-xs font-semibold bg-white/10 border border-white/20 rounded-full px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-4 bg-soft">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="What we teach" title="Our" highlight="Curriculum" />
          <div className="grid md:grid-cols-3 gap-6">
            {curriculum.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <div className="h-full bg-white rounded-3xl p-8 shadow-md shadow-navy/10 border-t-4 border-gold hover:-translate-y-2 hover:shadow-xl transition duration-300">
                  <span className="font-display text-4xl font-bold text-gold/40">0{i + 1}</span>
                  <h3 className="font-display text-xl font-bold text-navy mt-2">{c.title}</h3>
                  <p className="text-sm mt-2 leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="How we teach" title="Teaching" highlight="Methodology" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m, i) => {
              const Icon = icons[m.icon]
              return (
                <Reveal key={m.title} delay={i * 100}>
                  <div className="group h-full text-center bg-white rounded-3xl p-7 shadow-md shadow-navy/10 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-gold grid place-items-center group-hover:rotate-[-8deg] transition">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy mt-4">{m.title}</h3>
                    <p className="text-sm mt-2 leading-relaxed">{m.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-24 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Beyond the classroom" title="Co-curricular" highlight="Activities" light />
          <div className="grid sm:grid-cols-2 gap-6">
            {coCurricular.map((g, i) => (
              <Reveal key={g.group} delay={(i % 2) * 120}>
                <div className="h-full rounded-3xl p-7 bg-white/5 border border-white/10 hover:border-gold/60 transition">
                  <h3 className="font-display text-xl font-bold text-gold">{g.group}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {g.items.map((it) => (
                      <span key={it} className="text-sm bg-white/10 text-white rounded-full px-4 py-1.5">{it}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academic achievements */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Results that speak" title="Academic" highlight="Achievements" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => {
              const Icon = icons[a.icon]
              return (
                <Reveal key={a.title} delay={i * 100}>
                  <div className="h-full bg-white rounded-3xl p-7 text-center shadow-md shadow-navy/10 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                    <div className="w-14 h-14 mx-auto rounded-full bg-gold/15 text-gold grid place-items-center"><Icon size={28} /></div>
                    <p className="font-display text-4xl font-bold text-navy mt-4">{a.value}</p>
                    <h3 className="font-bold text-navy mt-1">{a.title}</h3>
                    <p className="text-sm mt-2">{a.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="text-center mt-12"><Button to="/admissions">Apply for Admission</Button></div>
        </div>
      </section>
    </>
  )
}