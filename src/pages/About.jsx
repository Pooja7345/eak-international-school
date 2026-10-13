import { Eye, Target, ShieldCheck, Lightbulb, HeartHandshake, Sparkles } from 'lucide-react'
import PageBanner from '../components/ui/PageBanner'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import PrincipalMessage from '../components/home/PrincipalMessage'
import useCounter from '../hooks/useCounter'
import { stats } from '../data/school'
import { history, values, campusFacts } from '../data/campus'

const icons = { ShieldCheck, Lightbulb, HeartHandshake, Sparkles }

function Stat({ value, suffix, label }) {
  const [ref, count] = useCounter(value)
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl sm:text-5xl font-bold text-gold">
        {count.toLocaleString('en-IN')}{suffix}
      </p>
      <p className="text-white/80 text-sm mt-1">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <>
      <PageBanner
        title="About"
        highlight="EAK"
        subtitle="Twenty-five years of nurturing curious, confident and caring young people."
      />

      {/* Introduction */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xl leading-relaxed text-navy font-display">
              EAK International School began in 2001 with a simple belief: every child deserves a school
              where they are known, challenged and cared for. Today we are a CBSE school from Nursery to
              Class 12 with a strong record in academics, sports and the arts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-24 px-4 bg-soft">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Our story" title="A Journey of" highlight="25 Years" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gold/40 md:-translate-x-1/2" />
            {history.map((h, i) => (
              <Reveal key={h.year}>
                <div className={`relative mb-10 pl-12 md:pl-0 md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <span className={`absolute left-[9px] md:left-auto top-2 w-4 h-4 rounded-full bg-gold ring-4 ring-soft ${i % 2 ? 'md:-left-2' : 'md:-right-2'}`} />
                  <p className="font-display text-3xl font-bold text-gold">{h.year}</p>
                  <h3 className="font-bold text-navy text-lg">{h.title}</h3>
                  <p className="text-sm mt-1">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: 'Our Vision', text: 'To be a school that shapes thoughtful, confident and compassionate leaders for a changing world.' },
            { icon: Target, title: 'Our Mission', text: 'To give every child strong academics, rich experiences and values, in a safe and joyful environment.' },
          ].map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="h-full rounded-3xl bg-navy text-white p-10 relative overflow-hidden hover:-translate-y-2 transition duration-300">
                <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-gold/15" />
                <Icon size={36} className="text-gold relative" />
                <h3 className="font-display text-2xl font-bold mt-4 relative">{title}</h3>
                <p className="mt-3 text-white/80 leading-relaxed relative">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="py-24 px-4 bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="What we stand for" title="Core" highlight="Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = icons[v.icon]
              return (
                <Reveal key={v.title} delay={i * 100}>
                  <div className="h-full text-center bg-white rounded-3xl p-8 shadow-md shadow-navy/10 hover:-translate-y-2 hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-gold">
                    <div className="w-14 h-14 mx-auto rounded-full bg-gold/15 text-gold grid place-items-center"><Icon size={26} /></div>
                    <h3 className="font-display text-xl font-bold text-navy mt-4">{v.title}</h3>
                    <p className="text-sm mt-2 leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key statistics */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </section>

      {/* Principal message (reused) */}
      <PrincipalMessage />

      {/* Campus overview */}
      <section className="py-24 px-4 bg-soft">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Where learning happens" title="Campus" highlight="Overview" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusFacts.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <div className="rounded-3xl p-8 text-center bg-gradient-to-br from-navy to-navy-light text-white shadow-lg">
                  <p className="font-display text-5xl font-bold text-gold">{c.value}</p>
                  <p className="text-sm mt-2 text-white/80">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/facilities">Explore Our Facilities</Button>
          </div>
        </div>
      </section>
    </>
  )
}