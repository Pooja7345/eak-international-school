import { useEffect, useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/school'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [index])

  return (
    <section className="py-24 px-4 bg-soft">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow="Voices of EAK" title="What Parents" highlight="Say" />
        <Reveal>
          <div className="relative min-h-[260px] sm:min-h-[220px]">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`absolute inset-0 text-center transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={i !== index}
              >
                <blockquote className="font-display italic text-xl sm:text-2xl text-navy leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <span className="font-bold text-navy">{t.name}</span>
                  <span className="block text-sm text-slate-500">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}