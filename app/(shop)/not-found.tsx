import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-text mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-text mb-4">Seite nicht gefunden</h2>
        <p className="text-text-light mb-8">
          Die von Ihnen gesuchte Seite existiert leider nicht.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Zur Startseite
        </Link>
      </div>
    </div>
  )
}
