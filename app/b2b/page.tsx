'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PRODUCTS = [
  {
    name: 'Vegan Blend',
    subtitle: '70% Erbse · 30% Reis',
    handle: 'vegan-pea-rice-blend',
    b2cPrice: 39.90,
    ekNetto: 18.76,
    margin: 45,
    grossProfit: 15.35,
    tags: ['Vegan', 'Clean Label'],
    badge: 'Bestseller',
  },
  {
    name: 'Whey WPC 80',
    subtitle: 'Unbehandelt · Mechanisch optimiert',
    handle: 'wpc-80',
    b2cPrice: 48.90,
    ekNetto: 22.99,
    margin: 45,
    grossProfit: 18.81,
    tags: ['Whey', 'Clean Label'],
    badge: 'Höchste Marge',
  },
  {
    name: 'Reisprotein',
    subtitle: 'Hypoallergen · Vegan',
    handle: 'reisprotein',
    b2cPrice: 34.90,
    ekNetto: 16.41,
    margin: 45,
    grossProfit: 13.42,
    tags: ['Vegan', 'Hypoallergen'],
    badge: null,
  },
  {
    name: 'Erbsenprotein',
    subtitle: 'Rein pflanzlich · Vegan',
    handle: 'erbsenprotein',
    b2cPrice: 34.90,
    ekNetto: 16.41,
    margin: 45,
    grossProfit: 13.42,
    tags: ['Vegan', 'Clean Label'],
    badge: null,
  },
]

const TARGET_GROUPS = [
  {
    icon: '🏋️',
    title: 'Studios',
    text: 'Zusatzumsatz am Tresen. Klare Differenzierung im lokalen Wettbewerb – ohne Preiskampf mit dem Onlinehandel.',
  },
  {
    icon: '🏪',
    title: 'Händler & Supplement-Shops',
    text: 'Premium-SKU mit guter Handelsspanne und geringer Vergleichbarkeit. Kein 1:1 Preisvergleich auf Amazon.',
  },
  {
    icon: '💊',
    title: 'Apotheken & Health Retail',
    text: 'Clean Label für anspruchsvolle Kunden. Ohne Supplement-Geschrei – passt ins Sortiment ohne Imageproblem.',
  },
  {
    icon: '🏷️',
    title: 'Marken & White Label',
    text: 'Strukturelles Upgrade bestehender Linien oder Aufbau neuer Clean-Label-Kategorien. Selektiv verfügbar.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Wie hoch ist die Handelsspanne?',
    a: '45% Rohertrag auf den UVP. Beim Whey WPC 80 (48,90 € UVP) ergibt das 18,81 € Rohertrag pro Einheit – ab dem ersten Karton. Bei Volumen ab 12er-Karton gibt es zusätzliche Staffelpreise.',
  },
  {
    q: 'Wie viel muss ich mindestens bestellen?',
    a: 'Einstieg ab 1 Karton (6 × 660 g). Ab 12 Einheiten gibt es einen Mengenrabatt. Ab 1.000 Einheiten erstellen wir ein individuelles Angebot – sprechen Sie uns an.',
  },
  {
    q: 'Wie schnell kann nachbestellt werden?',
    a: 'Nachbestellung i.d.R. innerhalb von 5–7 Werktagen. Wir arbeiten mit stabiler Produktionskapazität – keine Engpässe, keine langen Vorlaufzeiten.',
  },
  {
    q: 'Ist White Labeling möglich?',
    a: 'Ja, selektiv. White Label ist für Partner mit klarer Marke und Positionierung verfügbar. Anfragen bitte mit Kurzbeschreibung des Konzepts.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        type="button"
        className="w-full text-left py-5 flex items-center justify-between gap-4 group hover:opacity-80 transition-opacity"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-text text-sm md:text-base pr-4">{q}</span>
        <span
          className="text-accent flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-lg font-light transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-text-light text-sm md:text-base pb-5 leading-relaxed -mt-1">
          {a}
        </p>
      )}
    </div>
  )
}

export default function B2BPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: '',
    region: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div className="b2b bg-white min-h-screen">
      {/* ─── B2B Header ─── */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 sticky top-0 z-50 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
        <div className="container-custom flex items-center justify-between">
          <Link href="/b2b" className="flex items-center gap-3">
            <Image
              src="/Eden Naturals-logo-mit text.png"
              alt="Eden Naturals"
              width={130}
              height={44}
              className="h-8 w-auto"
            />
            <span className="hidden sm:block text-[11px] font-semibold text-text-light border-l border-gray-200 pl-3 uppercase tracking-[0.15em]">
              B2B Partner
            </span>
          </Link>
          <a
            href="#anfrage"
            className="btn-primary text-sm px-5 py-2.5 rounded-xl min-h-[40px]"
          >
            B2B Anfrage
          </a>
        </div>
      </header>

      {/* ─── 1. HERO ─── */}
      <section className="b2b-hero-bg text-white py-24 md:py-32 lg:py-40">
        <div className="container-custom max-w-4xl">
          <span className="b2b-badge text-accent-light bg-accent/20 mb-6">
            Händler · Studios · Apotheken · Marken
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight mb-6 text-balance">
            Clean-Label Protein,
            <br />
            <span className="text-accent-light">das sich nicht vergleichen lässt.</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-3 max-w-2xl">
            Ohne Lecithin. Ohne Emulgatoren. Ohne Aromen.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
            Funktion entsteht aus der Struktur des Proteins – nicht aus Zusatzstoffen.
            Das ist kein Marketing-Versprechen. Das ist der Unterschied im Glas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#anfrage" className="btn-primary text-base px-8 py-4 rounded-xl min-h-[52px] inline-flex items-center justify-center">
              B2B Konditionen anfragen
            </a>
            <a href="#muster" className="b2b-btn-secondary">
              Muster anfordern
            </a>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-2">
              <span className="b2b-trust-dot" />
              45% Handelsspanne
            </span>
            <span className="flex items-center gap-2">
              <span className="b2b-trust-dot" />
              Premium-Positionierung
            </span>
            <span className="flex items-center gap-2">
              <span className="b2b-trust-dot" />
              Schnelle Nachbestellung
            </span>
            <span className="flex items-center gap-2">
              <span className="b2b-trust-dot" />
              Keine Engpässe
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. PROBLEM → LÖSUNG ─── */}
      <section className="section-padding bg-gray-50/80">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="b2b-badge text-red-600 bg-red-50 mb-5">
                Das Problem
              </span>
              <h2 className="b2b-section-title mb-5">
                Der Proteinmarkt ist austauschbar.
                <br />
                <span className="text-text-light font-semibold">Genau das kostet Marge.</span>
              </h2>
              <p className="text-text-light text-sm md:text-base leading-relaxed mb-4">
                Viele Proteine unterscheiden sich nur über Geschmack, Verpackung und Marketing.
                Für Händler und Studios bedeutet das: Preisdruck, Vergleichbarkeit, Rabatte.
              </p>
              <p className="text-text-light text-sm md:text-base leading-relaxed">
                Wer das Gleiche verkauft wie alle anderen, konkurriert nur noch über den Preis.
                Das ist kein Vertriebsmodell – das ist Margenabtrag.
              </p>
            </div>
            <div className="b2b-card p-6 md:p-8">
              <span className="b2b-badge text-accent bg-accent/10 mb-5">
                Die Lösung
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-text mb-5 tracking-tight">
                Eden bringt eine eigene Kategorie.
              </h3>
              <div className="space-y-5">
                {[
                  { title: 'Technisch sauber', desc: 'Physikalisch optimierte Struktur – keine chemischen Hilfsstoffe' },
                  { title: 'Clean Label', desc: '2 Zutaten. Deklarierbar ohne E-Nummern.' },
                  { title: 'Sichtbar im Glas', desc: 'Kein Schaum, kein Klumpen, kein Schleim – Qualität, die jeder sofort merkt' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm">{item.title}</p>
                      <p className="text-text-light text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. BUSINESS-VORTEILE ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="b2b-badge text-accent bg-accent/10 mb-4">
              Ihr wirtschaftlicher Hebel
            </span>
            <h2 className="b2b-section-title mx-auto max-w-3xl">
              Warum Partner mit Eden besser verdienen
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { icon: '📈', title: 'Höhere Marge', desc: 'Premium-Preis durch echte Substanz, nicht durch Claims. 45% Rohertrag auf den Endkundenpreis – ab Karton 1.' },
              { icon: '🎯', title: 'Differenzierung', desc: 'Kein Standard-Whey, keine 1:1 Vergleichbarkeit. Wer Eden verkauft, führt keine Preisdiskussion.' },
              { icon: '🔓', title: 'Unabhängigkeit', desc: 'Weg von Lecithin/Emulgator-Konzepten. Sauber deklarierbar, anspruchsvolle Kunden, kein Rechtfertigungsdruck.' },
              { icon: '🔄', title: 'Wiederkäufe', desc: 'Kunden bleiben, weil die Qualität spürbar ist – nicht weil es gerade im Angebot ist.' },
            ].map((item) => (
              <div key={item.title} className="b2b-card p-6 md:p-7">
                <div className="text-3xl mb-4" aria-hidden>{item.icon}</div>
                <h3 className="font-bold text-text text-base md:text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. TECHNOLOGIE ─── */}
      <section className="section-padding b2b-hero-bg text-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="b2b-badge text-accent-light bg-accent/20 mb-6">
                Technologie
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight tracking-tight">
                Funktion aus Struktur –
                <br />
                <span className="text-accent-light">nicht aus Zusatzstoffen.</span>
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Wir optimieren nicht über Hilfsstoffe.
                Wir optimieren die physikalische Struktur des Proteins,
                damit es sich gleichmäßig verteilt, stabil bleibt und sauber wirkt.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Bessere Löslichkeit ohne Lecithin oder Emulgatoren',
                  'Höhere Stabilität durch mechanische Optimierung',
                  'Natürliches Mundgefühl – keine Aroma-Maskierung nötig',
                  'Saubere Deklaration: 2 Zutaten, keine E-Nummern',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 flex-shrink-0">→</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800/80 shadow-2xl">
                <video
                  src="/mixing-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  aria-label="Eden Protein Lösungsverhalten Demo"
                >
                  <source src="/mixing-demo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-5 bg-gray-800/60 rounded-xl p-4 text-center border border-gray-700/50">
                <p className="text-gray-400 text-xs leading-relaxed">
                  Glas. Wasser. Löffel. Fertig.
                  <br />
                  <span className="text-accent-light font-medium">Kein Shaker, kein Klumpen.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. ZIELGRUPPEN ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="b2b-badge text-accent bg-accent/10 mb-4">
              Für wen?
            </span>
            <h2 className="b2b-section-title mx-auto max-w-3xl">
              Für Unternehmen, die nicht im
              <br className="hidden md:block" />
              <span className="text-accent"> Rabattmarkt enden wollen.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {TARGET_GROUPS.map((group) => (
              <div
                key={group.title}
                className="b2b-card p-6 group cursor-default"
              >
                <div className="text-3xl mb-4" aria-hidden>{group.icon}</div>
                <h3 className="font-bold text-text text-base mb-2 group-hover:text-accent transition-colors duration-200">
                  {group.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">{group.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-light text-sm mt-10 max-w-lg mx-auto">
            Ergänzung, nicht Konkurrenz – Eden passt neben Ihr bestehendes Sortiment,
            nicht stattdessen.
          </p>
        </div>
      </section>

      {/* ─── 6. PRODUKTLINIEN + PREISE ─── */}
      <section className="section-padding bg-gray-50/80">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="b2b-badge text-accent bg-accent/10 mb-4">
              B2B Produktlinien
            </span>
            <h2 className="b2b-section-title mb-4">
              4 Produkte. Eine Kategorie.
            </h2>
            <p className="b2b-section-sub mx-auto">
              Keine Aromen, keine Süßstoffe. Clean deklarierbar.
              Alle 660 g · Alle mit 45% Händlermarge auf den UVP.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
            {PRODUCTS.map((p) => (
              <div key={p.handle} className="b2b-card overflow-hidden flex flex-col">
                {p.badge && (
                  <div className="bg-accent text-white text-[11px] font-bold text-center py-2.5 tracking-wider uppercase">
                    {p.badge}
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-5">
                    <h3 className="font-bold text-text text-lg mb-1 tracking-tight">{p.name}</h3>
                    <p className="text-text-light text-xs">{p.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[11px] bg-gray-100 text-text-light px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                      <span className="text-text-light text-xs">UVP (B2C)</span>
                      <span className="text-text font-semibold text-sm tabular-nums">{p.b2cPrice.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                      <span className="text-text-light text-xs">EK netto/Stk</span>
                      <span className="text-accent font-bold text-sm tabular-nums">{p.ekNetto.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                      <span className="text-text-light text-xs">Rohertrag/Stk</span>
                      <span className="text-text font-semibold text-sm tabular-nums">{p.grossProfit.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-3.5 flex items-center justify-between">
                      <span className="text-accent font-bold text-sm">Marge</span>
                      <span className="text-accent font-extrabold text-xl tabular-nums">{p.margin}%</span>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-gray-100 space-y-1.5">
                    <div className="flex justify-between text-xs text-text-light">
                      <span>6er Karton (netto)</span>
                      <span className="font-semibold text-text tabular-nums">{(p.ekNetto * 6).toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between text-xs text-text-light">
                      <span>12er Karton</span>
                      <span className="font-semibold text-accent">Staffelpreis auf Anfrage</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="b2b-card-dark p-8 md:p-10 text-center max-w-2xl mx-auto">
            <h3 className="font-bold text-lg md:text-xl mb-3 tracking-tight">Ab 1.000 Einheiten</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
              Individuelles Angebot mit Sonderkonditionen, Liefervereinbarungen und White-Label-Optionen.
            </p>
            <a href="#anfrage" className="btn-primary inline-flex items-center justify-center rounded-xl px-8 py-4">
              Großmengen-Anfrage senden
            </a>
          </div>
        </div>
      </section>

      {/* ─── 7. MUSTER ─── */}
      <section id="muster" className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <span className="b2b-badge text-accent bg-accent/10 mb-6">
            Nicht glauben. Prüfen.
          </span>
          <h2 className="b2b-section-title mb-6">
            Testen Sie den Unterschied selbst.
          </h2>
          <p className="text-text-light text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Wir schicken Muster, damit Sie das Verhalten objektiv testen können:
          </p>
          <div className="flex justify-center items-center gap-6 md:gap-10 mb-10 flex-wrap">
            {['Glas', 'Wasser', 'Löffel', 'Fertig.'].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg shadow-accent/25">
                  {i < 3 ? i + 1 : '✓'}
                </div>
                <span className="text-text font-semibold text-sm">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-text-light text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Kein Schaum. Kein Klumpen. Keine Verdünnung mit Aromastoffen.
            Sie sehen sofort, warum Kunden wiederkommen.
          </p>
          <a href="#anfrage" className="btn-primary inline-flex items-center justify-center text-base px-8 py-4 rounded-xl min-h-[52px]">
            Muster anfordern
          </a>
        </div>
      </section>

      {/* ─── 8. ZUSAMMENARBEIT ─── */}
      <section className="section-padding bg-gray-50/80">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <span className="b2b-badge text-accent bg-accent/10 mb-4">
              Zusammenarbeit
            </span>
            <h2 className="b2b-section-title mb-4">
              Wie die Partnerschaft aussieht
            </h2>
            <p className="b2b-section-sub mx-auto">
              Wir arbeiten bevorzugt mit wenigen, passenden Partnern –
              mit klarer Positionierung statt Masse.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: 'Resale', icon: '📦', points: ['Einkauf ab 1 Karton (6 Einheiten)', '45% Rohertrag auf UVP', 'Einfache Nachbestellung', 'Keine Exklusivität nötig'], highlight: false },
              { title: 'Partner', icon: '🤝', points: ['Starterpaket mit Muster-Set', 'Mengenrabatt ab 12er-Karton', 'Priorität bei Nachbestellung', 'Marketingmaterial auf Anfrage'], highlight: true },
              { title: 'White Label', icon: '🏷️', points: ['Eigene Marke auf Eden-Basis', 'Selektiv verfügbar', 'Auf Anfrage mit Konzept', 'Ab Mindestmenge'], highlight: false },
            ].map((tier) => (
              <div
                key={tier.title}
                className={
                  tier.highlight
                    ? 'rounded-2xl p-6 md:p-8 bg-accent text-white shadow-xl shadow-accent/20'
                    : 'b2b-card p-6 md:p-7'
                }
              >
                <div className="text-3xl mb-4" aria-hidden>{tier.icon}</div>
                <h3 className={`font-bold text-lg mb-5 tracking-tight ${tier.highlight ? 'text-white' : 'text-text'}`}>
                  {tier.title}
                </h3>
                <ul className="space-y-3">
                  {tier.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 flex-shrink-0 text-sm ${tier.highlight ? 'text-green-200' : 'text-accent'}`}>✓</span>
                      <span className={`text-sm leading-relaxed ${tier.highlight ? 'text-green-50' : 'text-text-light'}`}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. KONTAKTFORMULAR ─── */}
      <section id="anfrage" className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="b2b-badge text-accent bg-accent/10 mb-4">
              Jetzt starten
            </span>
            <h2 className="b2b-section-title mb-4">
              Wollen Sie die Konditionen sehen?
            </h2>
            <p className="b2b-section-sub mx-auto">
              Sagen Sie uns kurz, welche Zielgruppe Sie bedienen und welche Region.
              Sie erhalten Konditionen, Mindestmengen und Musteroptionen.
            </p>
          </div>

          {submitted ? (
            <div className="b2b-card p-10 md:p-12 text-center border-green-200 bg-green-50/50">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold mx-auto mb-5">✓</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Anfrage erhalten</h3>
              <p className="text-green-700 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                Wir melden uns innerhalb von 1–2 Werktagen mit den Konditionen und nächsten Schritten.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="b2b-card p-6 md:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="b2b-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Vor- und Nachname"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="b2b-input"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="b2b-label">Unternehmen *</label>
                  <input
                    type="text"
                    id="company"
                    required
                    placeholder="Name Ihres Unternehmens"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="b2b-input"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="b2b-label">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="b2b-input"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="b2b-label">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+49 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="b2b-input"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="businessType" className="b2b-label">Art des Unternehmens *</label>
                  <select
                    id="businessType"
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="b2b-input"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="studio">Fitnessstudio / Sport-Studio</option>
                    <option value="handel">Händler / Supplement-Shop</option>
                    <option value="apotheke">Apotheke / Health Retail</option>
                    <option value="marke">Marke / White Label</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="b2b-label">Gewünschte Menge</label>
                  <select
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="b2b-input"
                  >
                    <option value="">Noch nicht sicher</option>
                    <option value="6er">6er Karton (Einstieg)</option>
                    <option value="12er">12er Karton (Mengenrabatt)</option>
                    <option value="1000+">1.000+ Einheiten (Großmenge)</option>
                    <option value="muster">Erst Muster anfordern</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="region" className="b2b-label">Region / Standort</label>
                <input
                  type="text"
                  id="region"
                  placeholder="z.B. München, Österreich, DACH ..."
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="b2b-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="b2b-label">Kurze Beschreibung (optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Welche Produkte interessieren Sie? Haben Sie White-Label-Interesse? Sonstiges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="b2b-input min-h-[120px] resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full text-base py-4 rounded-xl min-h-[52px] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? 'Wird gesendet...' : 'B2B Anfrage senden'}
              </button>
              <p className="text-xs text-text-light text-center">
                * Pflichtfelder · Wir melden uns innerhalb von 1–2 Werktagen
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding bg-gray-50/80">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-text tracking-tight">
              Häufige Fragen
            </h2>
          </div>
          <div className="b2b-card overflow-hidden divide-y divide-gray-100 px-6 md:px-8">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <p className="text-center text-text-light text-sm mt-8">
            Weitere Fragen?{' '}
            <a href="mailto:b2b@eden-naturals.de" className="text-accent font-semibold hover:underline">
              b2b@eden-naturals.de
            </a>
          </p>
        </div>
      </section>

      {/* ─── B2B Footer ─── */}
      <footer className="b2b-hero-bg text-gray-400 py-12">
        <div className="container-custom text-center">
          <Image
            src="/Eden Naturals-logo-mit text.png"
            alt="Eden Naturals"
            width={120}
            height={40}
            className="h-7 w-auto mx-auto mb-5 opacity-70"
          />
          <p className="text-sm mb-2">
            Eden Naturals ·{' '}
            <a href="mailto:b2b@eden-naturals.de" className="text-accent-light hover:text-white transition-colors font-medium">
              b2b@eden-naturals.de
            </a>
          </p>
          <p className="text-xs text-gray-500 mb-6 max-w-sm mx-auto">
            Diese Seite richtet sich ausschließlich an gewerbliche Partner und Händler.
          </p>
          <div className="flex justify-center gap-8 text-xs text-gray-500">
            <Link href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-gray-300 transition-colors">AGB</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
