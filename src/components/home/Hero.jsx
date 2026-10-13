import Button from '../ui/Button'


export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* navy overlay, taaki text saaf padhe */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      {/* floating gold circles */}
      <div className="absolute -left-16 top-1/4 w-64 h-64 rounded-full bg-gold/15 animate-float" />
      <div className="absolute right-[10%] top-[18%] w-32 h-32 rounded-full bg-gold/15 animate-float [animation-delay:-3s]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 pb-36 w-full">
        <div className="max-w-2xl text-white">
          <p className="animate-fade-up text-xs font-bold tracking-[0.3em] uppercase text-gold">
            CBSE · Nursery to Class 12
          </p>
          <h1
            className="animate-fade-up font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4"
            style={{ animationDelay: '150ms' }}
          >
            Where Curious Minds Become <em className="text-gold">Confident</em> Leaders
          </h1>
          <p
            className="animate-fade-up mt-6 text-lg text-white/85 max-w-xl"
            style={{ animationDelay: '300ms' }}
          >
            EAK International School brings academics, character and creativity together in a modern,
            caring campus in Ghaziabad.
          </p>
          <div
            className="animate-fade-up mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: '450ms' }}
          >
            <Button to="/admissions">Apply Now</Button>
            <Button to="/about" variant="outline">Explore Our School</Button>
          </div>
        </div>
      </div>
    </section>
  )
}