import { Phone, Mail } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-navy-dark text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <div className="flex gap-5">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-gold transition">
            <Phone size={13} /> +91 98765 43210
          </a>
          <a href="mailto:info@eakschool.edu.in" className="hidden sm:flex items-center gap-1.5 hover:text-gold transition">
            <Mail size={13} /> info@eakschool.edu.in
          </a>
        </div>
        <div className="hidden md:flex gap-5">
          {['Parent Portal', 'School Calendar', 'Careers'].map((t) => (
            <a key={t} href="#" className="hover:text-gold transition">{t}</a>
          ))}
        </div>
      </div>
    </div>
  )
}