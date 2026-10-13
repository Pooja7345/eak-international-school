import { useState } from 'react'
import { MessageCircle, FileText, Users, BadgeCheck, GraduationCap, CheckCircle2, ChevronDown } from 'lucide-react'
import PageBanner from '../components/ui/PageBanner'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { steps, eligibility, documents, dates, info, faqs } from '../data/admissions'

const icons = { MessageCircle, FileText, Users, BadgeCheck, GraduationCap }

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="bg-white rounded-2xl shadow-md shadow-navy/10 overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-bold text-navy"
      >
        {q}
        <ChevronDown className={`shrink-0 text-gold transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)

  const goToForm = () => document.getElementById('apply').scrollIntoView({ behavior: 'smooth' })

  const handleSubmit = (e) => {
    e.preventDefault() // page reload roko, kyunki real submission nahi hai
    setSent(true)
  }

  const field = 'w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-gold focus:outline-none'

  return (
    <>
      <PageBanner
        title="Admissions"
        highlight="2027–28"
        subtitle="A simple, transparent process. Here is everything you need to know, step by step."
      />

      {/* 1. Process */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="How it works" title="Our Admission" highlight="Process" />
          <div className="grid md:grid-cols-5 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 bg-slate-200 rounded" />
            {steps.map((s, i) => {
              const Icon = icons[s.icon]
              return (
                <Reveal key={s.title} delay={i * 120}>
                  <div className="relative text-center">
                    <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-navy text-gold grid place-items-center ring-4 ring-white shadow-lg">
                      <Icon size={26} />
                    </div>
                    <span className="inline-block mt-4 text-xs font-bold text-gold tracking-widest">STEP {i + 1}</span>
                    <h3 className="font-display text-lg font-bold text-navy">{s.title}</h3>
                    <p className="text-sm mt-2 leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="text-center mt-12"><Button onClick={goToForm}>Apply Now</Button></div>
        </div>
      </section>

      {/* 2. Eligibility + Documents */}
      <section className="py-24 px-4 bg-soft">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full bg-white rounded-3xl p-8 shadow-md shadow-navy/10">
              <h3 className="font-display text-2xl font-bold text-navy">Eligibility <em className="text-gold">Criteria</em></h3>
              <ul className="mt-5 divide-y divide-slate-100">
                {eligibility.map((e) => (
                  <li key={e.cls} className="flex justify-between gap-4 py-3 text-sm">
                    <span className="font-bold text-navy">{e.cls}</span>
                    <span className="text-right">{e.age}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 mt-3">Age is calculated as on 31 March of the admission year.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full bg-white rounded-3xl p-8 shadow-md shadow-navy/10">
              <h3 className="font-display text-2xl font-bold text-navy">Required <em className="text-gold">Documents</em></h3>
              <ul className="mt-5 space-y-3">
                {documents.map((d) => (
                  <li key={d} className="flex gap-3 items-start text-sm">
                    <CheckCircle2 size={20} className="text-gold shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Important dates */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionTitle eyebrow="Plan ahead" title="Important" highlight="Dates" />
          <div className="border-l-4 border-gold/40 ml-3 space-y-8">
            {dates.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="relative pl-8">
                  <span className="absolute -left-[13px] top-1 w-5 h-5 rounded-full bg-gold ring-4 ring-white" />
                  <p className="text-sm font-bold text-gold">{d.date}</p>
                  <h3 className="font-display text-lg font-bold text-navy">{d.title}</h3>
                  <p className="text-sm">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Admission information */}
      <section className="py-24 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="At a glance" title="Admission" highlight="Information" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {info.map((x, i) => (
              <Reveal key={x.label} delay={i * 100}>
                <div className="h-full text-center rounded-3xl p-7 bg-white/5 border border-white/10 hover:border-gold/60 transition">
                  <p className="font-display text-4xl font-bold text-gold">{x.value}</p>
                  <h3 className="font-bold text-white mt-2">{x.label}</h3>
                  <p className="text-sm text-white/70 mt-1">{x.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-24 px-4 bg-soft">
        <div className="max-w-3xl mx-auto">
          <SectionTitle eyebrow="Good to know" title="Frequently Asked" highlight="Questions" />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} {...f} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Enquiry form */}
      <section id="apply" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <SectionTitle eyebrow="Take the first step" title="Admission" highlight="Enquiry" />
          <Reveal>
            {sent ? (
              <div className="text-center bg-white rounded-3xl p-10 shadow-lg shadow-navy/10">
                <CheckCircle2 size={48} className="text-gold mx-auto" />
                <h3 className="font-display text-2xl font-bold text-navy mt-4">Thank you!</h3>
                <p className="mt-2">This is a demo form, so nothing was sent. In a real school site our team would call you within 24 hours.</p>
                <Button variant="navy" className="mt-6" onClick={() => setSent(false)}>Submit another enquiry</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg shadow-navy/10 grid sm:grid-cols-2 gap-5">
                <label className="text-sm font-semibold text-navy">Parent's name
                  <input required type="text" placeholder="Full name" className={`${field} mt-1.5 font-normal`} />
                </label>
                <label className="text-sm font-semibold text-navy">Phone number
                  <input required type="tel" pattern="[0-9]{10}" title="Enter a 10-digit mobile number" placeholder="10-digit mobile" className={`${field} mt-1.5 font-normal`} />
                </label>
                <label className="text-sm font-semibold text-navy">Email
                  <input required type="email" placeholder="you@example.com" className={`${field} mt-1.5 font-normal`} />
                </label>
                <label className="text-sm font-semibold text-navy">Class applying for
                  <select required defaultValue="" className={`${field} mt-1.5 font-normal`}>
                    <option value="" disabled>Select class</option>
                    {['Nursery', 'LKG', 'UKG', ...Array.from({ length: 11 }, (_, i) => `Class ${i + 1}`)].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="sm:col-span-2 text-sm font-semibold text-navy">Message (optional)
                  <textarea rows="3" placeholder="Any questions for the admissions team?" className={`${field} mt-1.5 font-normal`} />
                </label>
                <div className="sm:col-span-2 text-center"><Button type="submit">Submit Enquiry</Button></div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}