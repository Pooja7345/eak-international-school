import { useState } from 'react'
import { Quote } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

export default function PrincipalMessage() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        <Reveal className="md:col-span-2">
          <div className="relative max-w-xs mx-auto">
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-4 border-gold" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy shadow-xl grid place-items-center">
              {imgError ? (
                <span className="font-display text-7xl font-bold text-gold">PS</span>
              ) : (
                <img
                  src="/images/principal.jpg"
                  alt="Dr. Priya Sharma, Principal of EAK International School"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-3">
          <SectionTitle eyebrow="A warm welcome" title="From the" highlight="Principal's Desk" align="left" />
          <Reveal delay={100}>
            <Quote className="text-gold" size={36} />
            <p className="mt-3 text-lg leading-relaxed">
              At EAK, we believe every child carries a unique spark. Our job is to recognise it, nurture it and
              give it the confidence to shine. We work closely with parents so that school and home move in the
              same direction, towards curious, kind and capable young people.
            </p>
            <p className="mt-5 font-display text-xl font-bold text-navy">Dr. Priya Sharma</p>
            <p className="text-sm text-slate-500">Principal, EAK International School</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}