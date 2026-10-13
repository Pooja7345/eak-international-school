import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, title, highlight, light = false, align = 'center' }) {
  const center = align === 'center'
  return (
    <Reveal className={`mb-12 ${center ? 'text-center' : ''}`}>
      <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">{eyebrow}</span>
      <h2 className={`font-display text-3xl sm:text-4xl font-bold mt-2 ${light ? 'text-white' : 'text-navy'}`}>
        {title} <em className="text-gold">{highlight}</em>
      </h2>
      <div className={`h-1 w-16 bg-gold rounded-full mt-4 ${center ? 'mx-auto' : ''}`} />
    </Reveal>
  )
}