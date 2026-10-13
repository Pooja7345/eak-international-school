import { Link } from 'react-router-dom'

const styles = {
  gold: 'bg-gold text-navy hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/40',
  outline: 'border-2 border-white/70 text-white hover:bg-white hover:text-navy',
  navy: 'bg-navy text-white hover:bg-navy-light hover:shadow-lg',
}

export default function Button({ to, variant = 'gold', className = '', children, ...props }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold
    transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  return <button className={cls} {...props}>{children}</button>
}