import { useState, useEffect } from 'react'
import {
  MonitorSmartphone, FlaskConical, Laptop, BookOpen, Theater, Trophy,
  Utensils, HeartPulse, Bus, BedDouble, CheckCircle2, X, Image as ImageIcon,
} from 'lucide-react'
import PageBanner from '../components/ui/PageBanner'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { facilityList, gallery } from '../data/campus'

const icons = { MonitorSmartphone, FlaskConical, Laptop, BookOpen, Theater, Trophy, Utensils, HeartPulse, Bus, BedDouble }

export default function Facilities() {
  const [open, setOpen] = useState(null) // khuli hui gallery photo ka object

  // Esc dabane par lightbox band ho
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <PageBanner
        title="Our"
        highlight="Facilities"
        subtitle="A safe, modern campus designed so that every child can learn, play and grow."
      />

      {/* Facility cards */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Everything in one campus" title="World-class" highlight="Infrastructure" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityList.map((f, i) => {
              const Icon = icons[f.icon]
              return (
                <Reveal key={f.title} delay={(i % 3) * 120}>
                  <article className="group h-full bg-white rounded-3xl overflow-hidden shadow-md shadow-navy/10 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                    <div className="h-32 bg-gradient-to-br from-navy to-navy-light grid place-items-center">
                      <Icon size={44} className="text-gold group-hover:scale-125 transition duration-300" />
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-xl font-bold text-navy">{f.title}</h3>
                      <p className="text-sm mt-1.5">{f.text}</p>
                      <ul className="mt-4 space-y-2">
                        {f.points.map((p) => (
                          <li key={p} className="flex gap-2 text-sm items-start">
                            <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery with lightbox */}
      <section className="py-24 px-4 bg-soft">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Life at EAK" title="Campus" highlight="Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 100}>
                <button
                  onClick={() => setOpen(g)}
                  aria-label={`Open ${g.title}`}
                  className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy-light to-navy grid place-items-center shadow-md"
                >
                  <ImageIcon size={36} className="text-white/30" />
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-semibold p-3 text-left">
                    {g.title}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 grid place-items-center p-4 animate-fade-up"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-navy shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={open.src}
              alt={open.alt}
              className="w-full max-h-[75vh] object-contain bg-navy"
            />
            <p className="p-4 text-white font-display text-lg font-bold">{open.title}</p>
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-gold hover:text-navy grid place-items-center transition"
            >
              <X size={20} />
            </button>
          </div>
                  </div>
      )}

      <section className="py-20 px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-navy">
          Want to see it in <em className="text-gold">person?</em>
        </h2>
        <p className="mt-3">Campus tours run Monday to Saturday, 10 AM – 1 PM.</p>
        <Button to="/contact" className="mt-6">Book a Campus Visit</Button>
      </section>
    </>
  )
}