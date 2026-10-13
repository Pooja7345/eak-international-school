import { CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

const points = ['CBSE affiliated, Nursery to Class 12', 'Student–teacher ratio of 20:1', 'Safe, green 8-acre campus']

export default function AboutPreview() {
  return (
    <section className="py-24 px-4 bg-soft">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* visual block */}
        <Reveal>
          <div className="relative h-80 sm:h-96 rounded-3xl bg-gradient-to-br from-navy to-navy-light overflow-hidden shadow-xl">
            <img
              src="/images/school.jpg"
              alt="EAK International School main building and campus"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-gold text-navy rounded-2xl px-6 py-4 shadow-lg">
              <p className="font-display text-4xl font-bold leading-none">25+</p>
              <p className="text-xs font-bold tracking-wider uppercase mt-1">Years of Trust</p>
            </div>
          </div>
        </Reveal>

        {/* text */}
        <div>
          <SectionTitle eyebrow="About the school" title="A Place Where Every Child" highlight="Belongs" align="left" />
          <Reveal delay={100}>
            <p className="leading-relaxed">
              Founded in 2001, EAK International School has grown into one of the region's most trusted schools.
              We combine a strong CBSE curriculum with sports, arts and values education, so every child grows
              into a confident and caring individual.
            </p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                  <span className="font-medium text-navy">{p}</span>
                </li>
              ))}
            </ul>
            <Button to="/about" variant="navy" className="mt-8">Read More</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}