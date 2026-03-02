'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ─── Data ─── */
const PRODUCTS = [
  {
    name: 'Vegan Blend',
    desc: 'Erbse & Reis 70/30 · 660 g',
    b2cPrice: 39.90,
    ekNetto: 18.76,
    margin: 45,
    grossProfit: 15.35,
    highlight: false,
  },
  {
    name: 'Whey WPC 80',
    desc: 'Unbehandelt · 660 g',
    b2cPrice: 48.90,
    ekNetto: 22.99,
    margin: 45,
    grossProfit: 18.81,
    highlight: true,
  },
  {
    name: 'Reisprotein',
    desc: 'Vegan · Hypoallergen · 660 g',
    b2cPrice: 35.90,
    ekNetto: 16.41,
    margin: 45,
    grossProfit: 13.42,
    highlight: false,
  },
  {
    name: 'Erbsenprotein',
    desc: 'Rein pflanzlich · 660 g',
    b2cPrice: 35.90,
    ekNetto: 16.41,
    margin: 45,
    grossProfit: 13.42,
    highlight: false,
  },
]

const FAQ_ITEMS = [
  {
    q: 'Wie hoch ist die Handelsspanne?',
    a: '45 % Standard ab 1 Karton bis 10 Karton. Bis 55 % bei Staffel, Volumen oder White-Label. Beim Whey WPC 80 (48,90 € UVP) z. B. 18,81 € Rohertrag pro 660 g bei 45 % – ab dem ersten Karton.',
  },
  {
    q: 'Wie viel muss ich mindestens bestellen?',
    a: 'Einstieg ab 1 Karton (6 × 660 g). Ab 12 Einheiten gibt es einen Mengenrabatt. Ab 1.000 Einheiten erstellen wir ein individuelles Angebot – sprechen Sie uns an.',
  },
  {
    q: 'Wie schnell kann nachbestellt werden?',
    a: 'Nachbestellung i.d.R. innerhalb von 5–7 Werktagen (bei Lagerware, je nach Region, ab Bestätigung). Wir arbeiten mit stabiler Produktionskapazität – keine Engpässe, keine langen Vorlaufzeiten.',
  },
  {
    q: 'Ist White Labeling möglich?',
    a: 'Ja, selektiv. White Label ist für Partner mit klarer Marke und Positionierung verfügbar. Anfragen bitte mit Kurzbeschreibung des Konzepts.',
  },
]

/* ─── FAQ accordion ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        type="button"
        className="w-full text-left py-5 flex items-center justify-between gap-4 hover:opacity-80 transition-opacity"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-text text-sm md:text-base pr-2 leading-snug">{q}</span>
        <span
          className="text-accent flex-shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-xl font-light transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-text-light text-sm md:text-base pb-5 leading-relaxed">{a}</p>
      )}
    </div>
  )
}

/* ─── Page ─── */
export default function B2BPage() {
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  /* Show sticky mobile CTA after scrolling past the hero */
  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

      {/* ─── STICKY MOBILE CTA BAR ─── */}
      {/* Shows on mobile only after scrolling past hero */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe-area transition-all duration-300 ${
          showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-[#1a1a1a] border-t border-white/10 px-4 py-3.5 shadow-2xl">
          <a
            href="#partner"
            className="btn-primary w-full text-base py-4 rounded-xl min-h-[52px] text-center block"
          >
            Partner werden
          </a>
        </div>
      </div>

      {/* ─── HEADER ─── */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3.5 sticky top-0 z-40 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
        <div className="container-custom flex items-center justify-between">
          <Link href="/b2b" className="flex items-center gap-3">
            <Image
              src="/Eden Naturals-logo-mit text.png"
              alt="Eden Naturals"
              width={130}
              height={44}
              className="h-8 w-auto"
            />
            <span className="hidden sm:block text-[11px] font-semibold text-text-light border-l border-gray-200 pl-3 uppercase tracking-[0.18em]">
              Partnerbereich
            </span>
          </Link>
          <a
            href="#partner"
            className="btn-primary text-sm px-5 py-2.5 rounded-xl min-h-[40px]"
          >
            Partner werden
          </a>
        </div>
      </header>

      {/* ─── 1. HERO ─── */}
      <section className="b2b-hero-bg text-white">
        <div className="container-custom max-w-6xl py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* Left */}
            <div className="flex flex-col">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em] mb-6">
                Für Studios · Händler · Apotheken · Marken
              </p>
              <h1 className="text-[2.6rem] sm:text-5xl md:text-[3.6rem] lg:text-[3.8rem] font-bold leading-[1.05] tracking-tight mb-5 text-balance">
                Ihre Proteinmarke.<br />
                <span className="text-accent-light">Neu gedacht.</span>
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed mb-1 max-w-md">
                Premium-Positionierung statt Preiskampf.
              </p>
              <p className="text-gray-400 text-sm mb-6 max-w-md">
                45 % Standard ab 1 Karton · bis 55 % bei Staffel/Volumen/White-Label. Clean Label · White Label möglich.
              </p>

              {/* Key figure: 45 % Marge */}
              <div className="hidden md:flex items-end gap-4 mb-10">
                <span className="text-accent-light font-black text-6xl lg:text-7xl leading-none tabular-nums">
                  45%
                </span>
                <div className="flex flex-col gap-1 text-[11px] tracking-[0.18em] uppercase text-gray-400">
                  <span>Standard ab 1 Karton (bis 10 Karton)</span>
                  <span>bis 55 % bei Staffel / White-Label</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#partner"
                  className="btn-primary text-base px-8 py-3.5 rounded-xl min-h-[50px] inline-flex items-center justify-center font-semibold w-full sm:w-auto"
                >
                  Partner werden
                </a>
                <a
                  href="#partner"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl min-h-[50px] w-full sm:w-auto border border-white/20 text-sm font-medium text-gray-300 hover:border-white/40 hover:text-white transition-colors"
                >
                  Muster anfordern
                </a>
              </div>

              {/* Mobile product image */}
              <div className="lg:hidden mt-10 flex justify-center pb-4 px-2">
                <Image
                  src="/Your Logo Here.png"
                  alt="Ihr Logo hier – Standbodenbeutel"
                  width={700}
                  height={900}
                  quality={95}
                  className="w-[min(400px,94vw)] max-w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  style={{ filter: 'brightness(0.96) contrast(1.06) saturate(0.85)' }}
                />
              </div>
            </div>

            {/* Right: product bag, no frame, no background */}
            <div className="hidden lg:flex items-center justify-center py-10 px-4">
              <Image
                src="/Your Logo Here.png"
                alt="Ihr Logo hier – Standbodenbeutel"
                width={700}
                height={900}
                quality={95}
                priority
                className="w-full max-w-[540px] h-auto drop-shadow-[0_60px_120px_rgba(0,0,0,0.7)]"
                style={{ filter: 'brightness(0.96) contrast(1.06) saturate(0.85)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <div className="bg-[#141414] border-t border-white/5 py-3.5">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-2">
            {[
              '5–7 Tage Lieferzeit*',
              'Einstieg ab 1 Karton',
              'Muster verfügbar',
              'Antwort innerhalb 24 h (werktags)',
              'Keine Vertragsbindung',
            ].map((t) => (
              <span key={t} className="flex items-center gap-2 text-[11px] text-gray-500 font-medium uppercase tracking-widest">
                <span className="w-1 h-1 rounded-full bg-accent-light/60 flex-shrink-0" aria-hidden />
                {t}
              </span>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-2">
            * Lieferzeit bei Lagerware, je nach Region, ab Bestätigung.
          </p>
        </div>
      </div>

      {/* ─── 2. PROBLEM IM MARKT ─── */}
      <section className="section-padding-lg bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold text-red-500 uppercase tracking-[0.22em] mb-4">
                Problem im Markt
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-4">
                Preiskampf statt Positionierung.
              </h2>
              <p className="text-text-light text-base">
                Vergleichbare Produkte führen zu Preiskampf, Rabattaktionen und geringer Differenzierung.
              </p>
            </div>
            <div className="space-y-1.5">
              {[
                'Preiskampf im Proteinmarkt',
                'Austauschbare Produkte',
                'Abhängigkeit von Geschmacksmarketing',
                'Geringe Differenzierung',
              ].map((label) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3 bg-red-50 rounded-xl">
                  <span className="text-red-400 font-bold flex-shrink-0" aria-hidden>✕</span>
                  <span className="text-text text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. UNSERE LÖSUNG ─── */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-5">
                Die Lösung
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-6">
                Neue Kategorie im Proteinmarkt.
              </h2>
              <ul className="space-y-3">
                {[
                  'Ohne Lecithin',
                  'Ohne Emulgatoren',
                  'Ohne E-Nummern',
                  'Physikalisch optimierte Struktur',
                  'Sehr gute Löslichkeit',
                  'Schnell im Glas dispergiert (Löffel reicht)',
                  'Premium-Positionierung',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden>
                      <span className="text-white text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-text text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="b2b-card p-5">
                <p className="text-text-light text-xs uppercase tracking-widest mb-3">Andere</p>
                <p className="text-text-light text-sm">Vergleichbar. Preiskampf.</p>
              </div>
              <div className="b2b-card p-5 border-accent/30 bg-accent/5">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Eden</p>
                <p className="text-text text-sm font-medium">Unvergleichbar. Differenzierung.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. IHRE MARGE ─── */}
      <section id="konditionen" className="section-padding-lg bg-white">
        <div className="container-custom max-w-5xl">
          {/* Margen-Highlight: sofort sichtbar */}
          <div className="mb-12 rounded-2xl border-2 border-accent/40 bg-accent/10 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text tracking-tight mb-1">
                Attraktive Handelsspanne
              </h2>
              <p className="text-text-light text-sm">
                45&nbsp;% Standard ab 1 Karton bis 10 Karton. Bis 55&nbsp;% bei Staffel, Volumen oder White-Label. Premium-Preisniveau durchsetzbar · kein Discount-Produkt.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-text-light">
                <li>• Hohe Wiederkaufrate durch echte Produktzufriedenheit</li>
              </ul>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-accent font-black text-5xl md:text-6xl tabular-nums">45%</p>
                <p className="text-text-light text-xs uppercase tracking-widest">Marge</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block" aria-hidden />
              <div className="text-center">
                <p className="text-accent font-bold text-2xl md:text-3xl tabular-nums">18,81 €</p>
                <p className="text-text-light text-xs uppercase tracking-widest">Rohertrag pro 660 g</p>
                <p className="text-text-muted text-[10px] mt-0.5">(bei Verkauf zu UVP incl. MwSt)</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-text-light mb-8">
            55% ab Staffel/Volumen · 45% Marge ab 1 Karton. Mengenstaffel: 2 Krt. −2%, 3 Krt. −3%, … 10 Krt. −10% (1 Karton = 12 Beutel).
          </p>

          {/* Desktop: Beispielrechnung (klar & einfach) */}
          <div className="hidden md:block b2b-card overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {['Produkt', 'Ihr EK netto', 'Rohertrag / Stk.', 'Marge', 'UVP (B2C, incl. MwSt)'].map((h, i) => (
                    <th
                      key={h}
                      className={`py-4 px-5 text-xs font-semibold text-text-light uppercase tracking-wider ${i === 0 ? 'text-left' : 'text-right'}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p, i) => (
                  <tr
                    key={p.name}
                    className={`border-b border-gray-100 last:border-0 ${
                      p.highlight ? 'bg-accent/5' : i % 2 === 1 ? 'bg-gray-50/40' : 'bg-white'
                    }`}
                  >
                    <td className="py-5 px-5">
                      <div className="flex items-center gap-2.5">
                        <div>
                          <p className="font-semibold text-text text-sm">{p.name}</p>
                          <p className="text-text-muted text-xs mt-0.5">{p.desc}</p>
                        </div>
                        {p.highlight && (
                          <span className="text-[10px] font-bold bg-accent text-white px-2 py-0.5 rounded-full uppercase tracking-wide flex-shrink-0">
                            Top
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-5 px-5 text-right text-accent font-bold text-sm tabular-nums">
                      {p.ekNetto.toFixed(2).replace('.', ',')} €
                    </td>
                    <td className="py-5 px-5 text-right text-text font-semibold text-sm tabular-nums">
                      {p.grossProfit.toFixed(2).replace('.', ',')} €
                    </td>
                    <td className="py-5 px-5 text-right text-accent font-extrabold text-xl tabular-nums">
                      {p.margin}%
                    </td>
                    <td className="py-5 px-5 text-right text-text-muted text-sm tabular-nums">
                      {p.b2cPrice.toFixed(2).replace('.', ',')} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: cards */}
          <div className="md:hidden space-y-3">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="b2b-card overflow-hidden">
                {p.highlight && (
                  <div className="bg-accent text-white text-[10px] font-bold text-center py-2.5 tracking-widest uppercase">
                    Höchste Marge
                  </div>
                )}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-bold text-text">{p.name}</p>
                      <p className="text-text-muted text-xs mt-0.5">{p.desc}</p>
                    </div>
                    <span className="text-accent font-extrabold text-3xl tabular-nums leading-none ml-3 flex-shrink-0">
                      {p.margin}%
                    </span>
                  </div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between py-1.5">
                      <span className="text-text-light">Ihr EK netto</span>
                      <span className="text-accent font-bold tabular-nums">{p.ekNetto.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-100 pt-2">
                      <span className="font-semibold text-text">Rohertrag / Stk.</span>
                      <span className="font-bold text-text tabular-nums">{p.grossProfit.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-text-muted text-xs">UVP (B2C, incl. MwSt) – Beispiel</span>
                      <span className="text-text-muted text-sm tabular-nums">{p.b2cPrice.toFixed(2).replace('.', ',')} €</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WHITE LABEL / PRIVATE LABEL ─── */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="mb-12 md:mb-16">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-4">
              White Label & Private Label
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              Ihre Marke. Unsere Technologie.
            </h2>
          </div>
          <div className="grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 md:gap-16 items-center">
            <div className="b2b-card p-6 md:p-8">
              <ul className="space-y-3">
                {[
                  'White Label möglich',
                  'Private Label möglich',
                  'Ihr Logo · Ihr Design',
                  'Individuelles Verpackungskonzept',
                  'Flexible Abnahmemengen',
                  'Schnelle Markteinführung',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-text-light">
                    <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center py-6 px-4">
              <Image
                src="/Your Logo Here.png"
                alt="Your Brand Here – Standbodenbeutel"
                width={600}
                height={800}
                quality={95}
                className="w-full max-w-[420px] h-auto drop-shadow-[0_50px_110px_rgba(0,0,0,0.22)]"
                style={{ filter: 'brightness(0.96) contrast(1.06) saturate(0.85)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. PRODUKTION & LOGISTIK ─── */}
      <section className="section-padding-lg bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-8 md:mb-10">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-4">
              Produktion & Logistik
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              Zuverlässig & skalierbar.
            </h2>
          </div>
          <div className="b2b-card p-6 md:p-8">
            <ul className="space-y-3">
              {[
                'Produktion in Europa',
                'Schnelle Lieferfähigkeit',
                'Direkte Belieferung oder Zentrallager',
                'Flexible Mengen je nach Bedarf',
                'Muster verfügbar',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-text-light">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 7. FÜR WEN GEEIGNET ─── */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="mb-8 md:mb-10">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-4">
              Zielgruppen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              Für wen geeignet?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {[
              'Fitnessstudios',
              'Online-Shops',
              'Apotheken',
              'Reformhäuser',
              'Coaches',
              'Eigene Marken',
              'Vereine',
            ].map((item) => (
              <div key={item} className="b2b-card py-3.5 px-4 text-sm font-medium text-text">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. UPGRADE BESTEHENDER MARKEN ─── */}
      <section className="section-padding-lg bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-8 md:mb-10">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-4">
              Upgrade bestehender Marken
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              Bestehende Produkte veredeln.
            </h2>
          </div>
          <div className="b2b-card p-6 md:p-8">
            <ul className="space-y-3">
              {[
                'Clean / Green Label Struktur',
                'Upgrade auf High-Class-Niveau',
                'Entkopplung vom Massenmarkt',
                'Keine Abhängigkeit von Geschmacksmarketing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-text-light">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 6. PHYSISCHER BEWEIS – Dispergierungsbild direkt unter Headline ─── */}
      <section className="section-padding-lg b2b-hero-bg text-white">
        <div className="container-custom max-w-4xl">
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em] mb-4">
            Nicht wie Standard-Protein
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-8">
            Struktur statt Zusatzstoffe.
          </h2>
          {/* Dispergierungsbild (Glas mit Wasser) direkt darunter */}
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-2xl ring-2 ring-white/10 mb-8">
            <video
              src="/mixing-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              aria-label="Dispergierung: Eden Protein im Glas – ohne Emulgatoren"
            >
              <source src="/mixing-demo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="text-center">
            <a href="#partner" className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-2xl min-h-[52px]">
              Partner werden
            </a>
          </div>
        </div>
      </section>

      {/* ─── 9. STARKER CALL TO ACTION + FORMULAR ─── */}
      <section id="partner" className="section-padding-lg bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-5">
              Jetzt B2B-Partner werden
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-3 tracking-tight">
              Muster anfordern & B2B-Gespräch vereinbaren.
            </h2>
            <p className="text-text-light text-sm md:text-base max-w-md mx-auto">
              Sagen Sie uns kurz, welche Zielgruppe Sie bedienen und welche Region.
              Sie erhalten Konditionen, Mindestmengen, Musteroptionen und einen Terminvorschlag für ein B2B-Gespräch.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#partner"
                className="btn-primary px-7 py-3.5 rounded-xl min-h-[52px] text-base font-semibold"
              >
                Jetzt B2B-Partner werden
              </a>
              <a
                href="mailto:b2b@eden-naturals.de"
                className="px-7 py-3.5 rounded-xl min-h-[52px] text-sm font-semibold border border-accent/40 text-accent hover:bg-accent/5 transition-colors"
              >
                Muster anfordern
              </a>
            </div>
            <p className="mt-4 text-xs text-text-light">
              Direkte Ansprechpartner Murat Yakut – Telefon 00352 621 178877 &amp; E-Mail: <a href="mailto:b2b@eden-naturals.de" className="text-accent font-semibold hover:underline">b2b@eden-naturals.de</a>
            </p>
          </div>

          {submitted ? (
            <div className="b2b-card p-10 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-xl font-bold text-text mb-2 tracking-tight">Anfrage erhalten</h3>
              <p className="text-text-light text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                Wir melden uns innerhalb von 24 h (werktags) mit den Konditionen und nächsten Schritten.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="b2b-card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="b2b-label">Name *</label>
                  <input
                    type="text" id="name" required
                    placeholder="Vor- und Nachname"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="b2b-input"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="b2b-label">Unternehmen *</label>
                  <input
                    type="text" id="company" required
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
                    type="email" id="email" required
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="b2b-input"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="b2b-label">Telefon</label>
                  <input
                    type="tel" id="phone"
                    placeholder="+49 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="b2b-input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quantity" className="b2b-label">Menge</label>
                <select
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="b2b-input"
                >
                  <option value="">Noch nicht sicher</option>
                  <option value="muster">Erst Muster anfordern</option>
                  <option value="6er">6er Karton (Einstieg)</option>
                  <option value="12er">12er Karton (Mengenrabatt)</option>
                  <option value="1000+">1.000+ Einheiten (Großmenge)</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full text-base py-4 rounded-xl min-h-[52px] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? 'Wird gesendet...' : 'Partner werden'}
              </button>
              <p className="text-xs text-text-light text-center">
                * Pflichtfelder · Wir melden uns innerhalb von 24 h (werktags)
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-text tracking-tight">
              Häufige Fragen
            </h2>
          </div>
          <div className="b2b-card overflow-hidden divide-y divide-gray-100 px-5 md:px-8">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <p className="text-center text-text-light text-sm mt-8">
            Weitere Fragen?{' '}
            <a
              href="mailto:b2b@eden-naturals.de"
              className="text-accent font-semibold hover:underline"
            >
              b2b@eden-naturals.de
            </a>
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="b2b-hero-bg text-gray-400 pt-14 pb-20 md:pb-14">
        <div className="container-custom text-center">
          <Image
            src="/Eden Naturals-logo-mit text.png"
            alt="Eden Naturals"
            width={120}
            height={40}
            className="h-7 w-auto mx-auto mb-5 opacity-70"
          />
          <p className="text-sm mb-1.5">
            Eden Naturals ·{' '}
            <a
              href="mailto:b2b@eden-naturals.de"
              className="text-accent-light hover:text-white transition-colors font-medium"
            >
              b2b@eden-naturals.de
            </a>
          </p>
          <p className="text-xs text-gray-600 mb-8 max-w-xs mx-auto">
            Diese Seite richtet sich ausschließlich an gewerbliche Partner und Händler.
          </p>
          <div className="flex justify-center gap-8 text-xs text-gray-600">
            <Link href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-gray-300 transition-colors">AGB</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
