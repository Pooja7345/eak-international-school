import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import Logo from './Logo'

const quickLinks = [
  ['About Us', '/about'], ['Academics', '/academics'], ['Admissions', '/admissions'],
  ['Facilities', '/facilities'], ['Events & Notices', '/events'], ['Contact', '/contact'],
]
const socials = [
  { icon: FaFacebookF, label: 'Facebook' }, { icon: FaInstagram, label: 'Instagram' },
  { icon: FaYoutube, label: 'YouTube' }, { icon: FaXTwitter, label: 'X' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            CBSE affiliated school from Nursery to Class 12, nurturing minds and building futures since 2001.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label}
                 className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-gold hover:text-navy transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5"><MapPin size={18} className="text-gold shrink-0 mt-0.5" /> Sector 12, Ghaziabad, Uttar Pradesh – 201002</li>
            <li className="flex gap-2.5"><Phone size={18} className="text-gold shrink-0" /> +91 98765 43210</li>
            <li className="flex gap-2.5"><Mail size={18} className="text-gold shrink-0" /> info@eakschool.edu.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Office Hours</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5"><Clock size={18} className="text-gold shrink-0" /> Mon – Fri: 8:00 AM – 4:00 PM</li>
            <li className="flex gap-2.5"><Clock size={18} className="text-gold shrink-0" /> Saturday: 9:00 AM – 1:00 PM</li>
          </ul>
          <Link to="/admissions" className="inline-block mt-5 text-gold font-bold text-sm hover:underline">
            Admissions Open 2027–28 →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs">
        © 2026 EAK International School. All rights reserved. · Privacy Policy · Terms
      </div>
    </footer>
  )
}
