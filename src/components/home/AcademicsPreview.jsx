import { useState } from 'react'
import { Check } from 'lucide-react'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { academicLevels } from '../../data/school'

export default function AcademicsPreview() {
  const [active, setActive] = useState(academicLevels[0].id)
  const level = academicLevels.find((l) => l.id === active)

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Learning journey" title="Academic" highlight="Excellence" />

        <div className="flex flex-wrap justify-center gap-3 mb-8" role="tablist">
          {academicLevels.map((l) => (
            <button
              key={l.id}
              role="tab"
              aria-selected={active === l.id}
              onClick={() => setActive(l.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold border-2 transition ${
                active === l.id
                  ? 'bg-navy border-navy text-white'
                  : 'border-navy text-navy hover:bg-navy/10'
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* key badalne se panel dobara animate hota hai */}
        <Reveal>
          <div key={level.id} className="animate-fade-up bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-navy/10">
            <h3 className="font-display text-2xl font-bold text-navy">
              {level.name} <span className="text-gold text-lg">· {level.classes}</span>
            </h3>
            <ul className="mt-5 space-y-3">
              {level.points.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <Check className="text-gold shrink-0 mt-0.5" size={20} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="text-center mt-10">
          <Button to="/academics">Explore Academics</Button>
        </div>
      </div>
    </section>
  )
}