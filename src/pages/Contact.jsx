import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import PageBanner from '../components/ui/PageBanner'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'

const details = [
  { icon: MapPin, title: 'Address', lines: ['Sector 12, Ghaziabad', 'Uttar Pradesh – 201002'] },
  { icon: Phone, title: 'Phone', lines: ['+91 98765 43210', '+91 98765 43211'] },
  { icon: Mail, title: 'Email', lines: ['info@eakschool.edu.in', 'admissions@eakschool.edu.in'] },
  { icon: Clock, title: 'Office Hours', lines: ['Mon – Fri: 8:00 AM – 4:00 PM', 'Saturday: 9:00 AM – 1:00 PM'] },
]

const socials = [
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaYoutube, label: 'YouTube' },
  { icon: FaXTwitter, label: 'X' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const field = 'w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-gold focus:outline-none'

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageBanner
        title="Contact"
        highlight="Us"
        subtitle="Questions about admissions, fees or a campus visit? We would love to hear from you."
      />

      {/* contact cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map(({ icon: Icon, title, lines }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="h-full text-center bg-white rounded-3xl p-7 shadow-md shadow-navy/10 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-gold grid place-items-center">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mt-4">{title}</h3>
                {lines.map((l) => <p key={l} className="text-sm mt-1">{l}</p>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* form + map */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-navy/10 h-full">
              <h2 className="font-display text-2xl font-bold text-navy">Send us a <em className="text-gold">message</em></h2>
              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={48} className="text-gold mx-auto" />
                  <h3 className="font-display text-xl font-bold text-navy mt-4">Message received!</h3>
                  <p className="mt-2 text-sm">This is a demo form, so nothing was sent.</p>
                  <Button variant="navy" className="mt-6" onClick={() => setSent(false)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  <label className="text-sm font-semibold text-navy">Your name
                    <input required type="text" placeholder="Full name" className={`${field} mt-1.5 font-normal`} />
                  </label>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <label className="text-sm font-semibold text-navy">Email
                      <input required type="email" placeholder="you@example.com" className={`${field} mt-1.5 font-normal`} />
                    </label>
                    <label className="text-sm font-semibold text-navy">Phone
                      <input required type="tel" pattern="[0-9]{10}" title="Enter a 10-digit mobile number" placeholder="10-digit mobile" className={`${field} mt-1.5 font-normal`} />
                    </label>
                  </div>
                  <label className="text-sm font-semibold text-navy">Subject
                    <select defaultValue="Admissions" className={`${field} mt-1.5 font-normal`}>
                      {['Admissions', 'Fees', 'Transport', 'Campus visit', 'Other'].map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                  <label className="text-sm font-semibold text-navy">Message
                    <textarea required rows="4" placeholder="How can we help?" className={`${field} mt-1.5 font-normal`} />
                  </label>
                  <Button type="submit" className="justify-self-start">Send Message</Button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full flex flex-col gap-6">
              {/* map placeholder */}
              <div
                role="img"
                aria-label="Map placeholder showing school location"
                className="relative flex-1 min-h-[280px] rounded-3xl overflow-hidden bg-navy-light grid place-items-center text-white"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 12px, transparent 12px 24px)' }}
              >
                <div className="text-center">
                  <MapPin size={44} className="text-gold mx-auto animate-float" />
                  <p className="font-display text-xl font-bold mt-2">EAK International School</p>
                  <p className="text-sm text-white/70">Sector 12, Ghaziabad</p>
                  <p className="text-xs text-white/50 mt-3">Map embed placeholder</p>
                </div>
              </div>
              {/* socials */}
              <div className="bg-white rounded-3xl p-6 shadow-md shadow-navy/10">
                <h3 className="font-display text-lg font-bold text-navy">Follow us</h3>
                <div className="flex gap-3 mt-3">
                  {socials.map(({ icon: Icon, label }) => (
                    <a key={label} href="#" aria-label={label}
                       className="w-11 h-11 rounded-full bg-navy text-white grid place-items-center hover:bg-gold hover:text-navy transition">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}