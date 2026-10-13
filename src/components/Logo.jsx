export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-gold text-navy font-extrabold text-sm grid place-items-center ring-2 ring-white/30">
        EAK
      </div>
      <div className="leading-tight">
        <p className={`font-extrabold text-lg ${light ? 'text-white' : 'text-navy'}`}>EAK International</p>
        <p className={`text-xs tracking-widest ${light ? 'text-white/70' : 'text-slate-500'}`}>SCHOOL</p>
      </div>
    </div>
  )
}