import { Phone } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function AdmissionsCTA() {
  return (
    <section className="py-24 px-4">
      <Reveal>
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy to-navy-light text-center text-white px-6 py-16 shadow-2xl shadow-navy/30">
          <div className="absolute -left-10 -top-10 w-48 h-48 rounded-full bg-gold/20 animate-float" />
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/5" />
          <div className="relative">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold">Admissions open 2027–28</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Begin Your Child's Journey with <em className="text-gold">EAK</em>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-white/80">
              Limited seats from Nursery to Class 11. Start your enquiry today and our admissions team will guide you at every step.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/admissions">Apply Now</Button>
              <Button to="/contact" variant="outline"><Phone size={16} /> Talk to Us</Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}