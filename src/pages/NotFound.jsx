import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto text-center py-28 px-4">
      <p className="font-display text-7xl text-gold font-bold">404</p>
      <h1 className="font-display text-3xl text-navy font-bold mt-4">Page not found</h1>
      <p className="mt-3">The page you are looking for does not exist or has moved.</p>
      <Button to="/" variant="navy" className="mt-8">Back to Home</Button>
    </div>
  )
}