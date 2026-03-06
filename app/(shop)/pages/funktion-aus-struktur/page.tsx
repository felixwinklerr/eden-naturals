import Link from 'next/link'
import Image from 'next/image'

export default function FunktionAusStrukturPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-white to-gray-50">
        <div className="container-custom py-12 md:py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-text-muted mb-2">
                Funktion aus Struktur. Nicht aus Zusatzstoffen.
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 md:mb-5 leading-tight text-balance">
                Clean-Label Protein ohne Lecithin, Emulgatoren oder Aromen.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-light mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Physikalisch optimiert – naturbelassen. Für Menschen, die verstehen wollen, was ihr Protein wirklich
                macht.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 md:mb-5">
                <Link
                  href="/products"
                  className="btn-primary w-full sm:w-auto text-base md:text-lg px-8 py-3.5 md:py-4"
                >
                  Protein entdecken
                </Link>
                <Link
                  href="/b2b"
                  className="btn-secondary w-full sm:w-auto text-base md:text-lg px-8 py-3.5 md:py-4"
                >
                  B2B Partner werden
                </Link>
              </div>

              <p className="text-xs md:text-sm text-text-muted">
                Clean Label • Premium Rohstoffe • Neue Protein-Kategorie
              </p>
            </div>

            <div className="relative order-first md:order-last">
              <div className="aspect-square rounded-2xl shadow-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/hero.webp"
                  alt="Eden Naturals WPC 80 – natürlich roh, natürlich löslich, natürlich ehrlich."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DAS PROBLEM */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-4 md:mb-6">
            Der Proteinmarkt ist austauschbar
          </h2>
          <p className="text-text-light mb-4 md:mb-6 text-sm md:text-base">
            Die meisten Proteinpulver unterscheiden sich nur durch Verpackung und Versprechen – technologisch sind sie
            nahezu identisch.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-50 rounded-xl p-4 md:p-5">
              <p className="text-sm font-semibold text-text mb-3">
                Die meisten Proteinpulver unterscheiden sich nur durch:
              </p>
              <ul className="space-y-1.5 text-sm text-text-light">
                <li>• Geschmack</li>
                <li>• Marketing</li>
                <li>• Verpackung</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 md:p-5">
              <p className="text-sm font-semibold text-text mb-3">Technologisch:</p>
              <p className="text-sm text-text-light">
                Fast alle funktionieren nur mit Zusatzstoffen – Emulgatoren, Lecithin, Aromen, Süßstoffen und
                technischen Hilfsstoffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNSERE LÖSUNG */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-4 md:mb-6">
            Eden Naturals geht einen anderen Weg
          </h2>
          <p className="text-sm md:text-base text-text-light mb-6 md:mb-8">
            Unsere Produkte funktionieren über die natürliche Struktur der Rohstoffe – nicht über Zusätze, die
            Probleme kaschieren.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-5 mb-4">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-red-600 mb-3">
                  Nicht über
                </p>
                <ul className="space-y-1.5 text-sm text-text">
                  <li>✗ Emulgatoren</li>
                  <li>✗ Lecithin</li>
                  <li>✗ künstliche Hilfsstoffe</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent mb-3">
                  Sondern über
                </p>
                <ul className="space-y-1.5 text-sm text-text">
                  <li>✓ physikalische Struktur</li>
                  <li>✓ naturbelassene Rohstoffe</li>
                  <li>✓ mechanische Aufbereitung</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src="/mechanisch_veredelt.webp"
                  alt="Mechanisch veredeltes Protein – physikalische Struktur statt Zusatzstoffe."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <p className="mt-6 md:mt-8 text-sm md:text-base text-text font-medium">
            Das Ergebnis: ein Protein, das sich sichtbar und funktionell vom Standardmarkt unterscheidet.
          </p>
        </div>
      </section>

      {/* 4. 4 KLARE VORTEILE */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6 md:mb-8">
            Warum Eden Naturals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-50 rounded-xl p-4 md:p-5">
              <h3 className="font-semibold text-text mb-2">Clean Label</h3>
              <p className="text-xs md:text-sm text-text-light">Keine unnötigen Zusatzstoffe.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 md:p-5">
              <h3 className="font-semibold text-text mb-2">Natürlich funktional</h3>
              <p className="text-xs md:text-sm text-text-light">
                Die Eigenschaften entstehen aus der Struktur des Proteins.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 md:p-5">
              <h3 className="font-semibold text-text mb-2">Klare Zutaten</h3>
              <p className="text-xs md:text-sm text-text-light">
                Transparente Deklaration ohne technische Hilfsmittel.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 md:p-5">
              <h3 className="font-semibold text-text mb-2">Neue Kategorie</h3>
              <p className="text-xs md:text-sm text-text-light">
                Mehr als ein Supplement – eine neue Form funktioneller Proteine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUKTE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6 md:mb-8">
            Unsere Proteinlinien
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="font-semibold text-text mb-1">Whey Protein (WPC)</h3>
              <p className="text-xs md:text-sm text-text-light mb-4 flex-1">
                Naturbelassenes Molkenprotein – ohne Lecithin, ohne Emulgatoren.
              </p>
              <Link href="/products/wpc-80" className="btn-secondary text-xs md:text-sm mt-auto">
                Produkt ansehen
              </Link>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="font-semibold text-text mb-1">Vegan Protein Blend</h3>
              <p className="text-xs md:text-sm text-text-light mb-4 flex-1">
                Erbse &amp; Reis für ausgewogene Aminosäuren – ohne Aromatisierung.
              </p>
              <Link href="/products/vegan-pea-rice-blend" className="btn-secondary text-xs md:text-sm mt-auto">
                Produkt ansehen
              </Link>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="font-semibold text-text mb-1">Single Proteins</h3>
              <p className="text-xs md:text-sm text-text-light mb-4 flex-1">
                Reisprotein und Erbsenprotein in reiner Form – für maximale Kontrolle über Rezepturen.
              </p>
              <div className="flex flex-col gap-2 mt-auto">
                <Link href="/products/reisprotein" className="btn-secondary text-xs md:text-sm">
                  Reisprotein ansehen
                </Link>
                <Link href="/products/erbsenprotein" className="btn-secondary text-xs md:text-sm">
                  Erbsenprotein ansehen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISUELLER VERGLEICH */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6 md:mb-8">
            Weniger Zutaten. Mehr Substanz.
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-xl border border-gray-200 p-4 md:p-5 bg-gray-50">
              <p className="text-xs md:text-sm font-semibold text-text-muted uppercase tracking-[0.14em] mb-3">
                Standard Protein
              </p>
              <ul className="space-y-1.5 text-sm text-text-light">
                <li>• Lecithin</li>
                <li>• Emulgatoren</li>
                <li>• Aromen</li>
                <li>• Süßstoffe</li>
                <li>• Zusatzstoffe</li>
              </ul>
            </div>
            <div className="rounded-xl border border-accent/30 p-4 md:p-5 bg-accent/5">
              <p className="text-xs md:text-sm font-semibold text-accent uppercase tracking-[0.14em] mb-3">
                Eden Naturals
              </p>
              <ul className="space-y-1.5 text-sm text-text">
                <li>• Protein</li>
                <li>• natürliche Struktur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FÜR WEN */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6 md:mb-8">
            Für Menschen, die Protein anders sehen
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-text mb-1">Sportler</h3>
              <p className="text-xs md:text-sm text-text-light">
                Hochwertige Proteinquelle ohne Zusatzstoffe – für Performance ohne Kompromisse.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-text mb-1">Gesundheitsbewusste</h3>
              <p className="text-xs md:text-sm text-text-light">
                Klare Zutaten und transparente Deklaration – ohne versteckte technische Hilfsmittel.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-text mb-1">Studios und Händler</h3>
              <p className="text-xs md:text-sm text-text-light">
                Premium-Produkt mit echter Differenzierung – eine neue Kategorie im Regal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VERTRAUEN / PHILOSOPHIE */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-4 md:mb-6">
            Entwickelt aus Überzeugung
          </h2>
          <p className="text-sm md:text-base text-text-light mb-4">
            Eden Naturals entstand aus einer einfachen, aber konsequent verfolgten Frage:
          </p>
          <p className="text-sm md:text-base text-text mb-4 font-medium">
            Wie kann ein Protein funktionieren, ohne auf Zusatzstoffe angewiesen zu sein?
          </p>
          <p className="text-sm md:text-base text-text-light">
            Die Antwort liegt in der Struktur der Rohstoffe selbst. Statt Grenzen mit immer mehr Zusätzen zu verschieben,
            nutzen wir die physikalischen Eigenschaften des Proteins – und lassen alles weg, was nicht zwingend nötig
            ist.
          </p>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="section-padding bg-accent text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Entdecken Sie die neue Protein-Kategorie
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 opacity-90">
            Weniger Zutaten. Mehr Substanz. Ein Shop, der technologisch, clean und premium wirkt – nicht wie ein
            typischer Supplementshop.
          </p>
          <Link
            href="/products"
            className="btn-primary inline-block text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
          >
            Protein entdecken
          </Link>
        </div>
      </section>
    </>
  )
}

