'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    a: '45% Rohertrag auf den UVP – ab dem ersten Karton, für alle 4 Produkte. Bei Volumen ab 12er-Karton gibt es zusätzliche Staffelpreise auf Anfrage.',
  },
  {
    q: 'Wie viel muss ich mindestens bestellen?',
    a: 'Einstieg ab 1 Karton (6 × 660 g). Ab 12 Einheiten gibt es einen Mengenrabatt. Ab 1.000 Einheiten erstellen wir ein individuelles Angebot.',
  },
  {
    q: 'Wie schnell kann nachbestellt werden?',
    a: 'Nachbestellung i.d.R. innerhalb von 5–7 Werktagen. Stabile Produktionskapazität – keine Engpässe, keine langen Vorlaufzeiten.',
  },
  {
    q: 'Ist White Labeling möglich?',
    a: 'Selektiv verfügbar – für Partner mit klarer Marke und Positionierung. Anfragen bitte mit Kurzbeschreibung des Konzepts senden.',
  },
]

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
        <span className="font-semibold text-text text-sm md:text-base pr-2">{q}</span>
        <span
          className="text-accent flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-lg font-light transition-transform duration-200"
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

      {/* ─── HEADER ─── */}
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
        <div className="container-custom max-w-6xl py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em] mb-8">
                Für Fitnessstudios · Händler · Apotheken · Personal Trainer
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.06] tracking-tight mb-8">
                Protein, das nicht<br />
                vergleichbar ist.<br />
                <span className="text-accent-light">Und genau deshalb<br />Marge bringt.</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-2 max-w-xl">
                Clean-Label Protein ohne Lecithin, ohne Emulgatoren, ohne Aromen.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
                Differenzierung statt Preiskampf.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#partner"
                  className="btn-primary text-base px-8 py-4 rounded-xl min-h-[52px] inline-flex items-center justify-center"
                >
                  Partner werden
                </a>
                <a href="#konditionen" className="b2b-btn-secondary">
                  B2B-Konditionen ansehen
                </a>
              </div>
            </div>

            {/* Stat block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.18em] mb-3">
                Rohertrag auf jeden Verkauf
              </p>
              <p className="text-accent-light font-bold text-8xl leading-none mb-1 tabular-nums">
                45%
              </p>
              <p className="text-gray-500 text-sm mb-7">Ab dem ersten Karton.</p>
              <div className="border-t border-white/10 pt-5 space-y-2.5">
                <p className="text-[11px] text-gray-600 uppercase tracking-widest mb-3">
                  Beispiel Whey WPC 80
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">UVP (Endkundenpreis)</span>
                  <span className="text-gray-300 font-medium tabular-nums">48,90 €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Ihr Einkaufspreis</span>
                  <span className="text-gray-300 font-medium tabular-nums">22,99 €</span>
                </div>
                <div className="flex justify-between text-sm pt-3 border-t border-white/10">
                  <span className="text-gray-400 font-semibold">Rohertrag / Stk.</span>
                  <span className="text-accent-light font-bold tabular-nums">18,81 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. PROBLEM ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p className="text-[11px] font-semibold text-red-500 uppercase tracking-[0.22em] mb-7">
                Das Problem
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-[1.1] tracking-tight mb-8">
                Der Proteinmarkt<br />ist austauschbar.
              </h2>
              <p className="text-text-light text-base leading-relaxed mb-5">
                Die meisten Proteine unterscheiden sich nur im Geschmack und Marketing.
                Das führt zu Vergleichbarkeit, Preisdruck und niedrigen Margen.
              </p>
              <p className="text-text-light text-base leading-relaxed">
                Händler konkurrieren über den Preis statt über echten Unterschied.
              </p>
            </div>
            <div className="space-y-3 pt-2 md:pt-16">
              {[
                'Gleiche Inhaltsstoffe',
                'Gleiche Verpackungen',
                'Gleiche Claims',
                'Preiskampf bei jedem Kunden',
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-4 px-5 py-3.5 bg-red-50 rounded-xl"
                >
                  <span className="text-red-400 font-bold text-sm flex-shrink-0">✕</span>
                  <span className="text-text text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. LÖSUNG ─── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-7">
                Die Lösung
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-[1.1] tracking-tight mb-10">
                Eden schafft eine<br />eigene Kategorie.
              </h2>
              <ul className="space-y-4">
                {[
                  'Funktion aus physikalischer Struktur – nicht aus Zusatzstoffen',
                  'Keine Emulgatoren, kein Lecithin',
                  'Sofort dispergierbar – im Glas sichtbar',
                  'Clean-Label ohne Kompromisse',
                  'Nicht vergleichbar mit Standardprodukten',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-text text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 pt-2 md:pt-16">
              <div className="b2b-card p-6">
                <p className="text-text-light text-xs uppercase tracking-widest mb-4">
                  Andere Proteine
                </p>
                <div className="space-y-2.5">
                  {['Werden verglichen', 'Konkurrieren über den Preis', 'Austauschbar im Sortiment'].map((t) => (
                    <div key={t} className="flex items-center gap-3 py-2.5 px-3 bg-gray-50 rounded-lg">
                      <span className="text-text-muted text-xs">—</span>
                      <span className="text-text-light text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="b2b-card p-6 border-accent/25 bg-accent/5">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                  Eden Protein
                </p>
                <div className="space-y-2.5">
                  {['Schafft eigene Kategorie', 'Keine Preisdiskussion mit Kunden', 'SKU, die andere nicht haben'].map((t) => (
                    <div key={t} className="flex items-center gap-3 py-2.5 px-3 bg-white rounded-lg border border-accent/20">
                      <span className="text-accent text-xs font-bold">→</span>
                      <span className="text-text text-sm font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. HÄNDLERGEWINN ─── */}
      <section id="konditionen" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-12 md:mb-14">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-7">
              Händlergewinn
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-[1.1] tracking-tight mb-5">
              Beispiel für Partner
            </h2>
            <p className="text-text-light text-base max-w-lg">
              Alle 4 Produkte · 660 g · netto · 45% Rohertrag auf den Endkundenpreis
            </p>
          </div>

          {/* Desktop: Tabelle */}
          <div className="hidden md:block b2b-card overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-xs font-semibold text-text-light uppercase tracking-wider">
                    Produkt
                  </th>
                  <th className="text-right py-4 px-6 text-xs font-semibold text-text-light uppercase tracking-wider">
                    UVP (B2C brutto)
                  </th>
                  <th className="text-right py-4 px-6 text-xs font-semibold text-text-light uppercase tracking-wider">
                    Ihr EK netto
                  </th>
                  <th className="text-right py-4 px-6 text-xs font-semibold text-text-light uppercase tracking-wider">
                    Rohertrag / Stk.
                  </th>
                  <th className="text-right py-4 px-6 text-xs font-bold text-text uppercase tracking-wider">
                    Marge
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p, i) => (
                  <tr
                    key={p.name}
                    className={`border-b border-gray-100 last:border-0 transition-colors ${
                      p.highlight ? 'bg-accent/5' : i % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                    }`}
                  >
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
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
                    <td className="py-5 px-6 text-right">
                      <span className="text-text text-sm tabular-nums">
                        {p.b2cPrice.toFixed(2).replace('.', ',')} €
                      </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <span className="text-accent font-bold text-sm tabular-nums">
                        {p.ekNetto.toFixed(2).replace('.', ',')} €
                      </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <span className="text-text font-semibold text-sm tabular-nums">
                        {p.grossProfit.toFixed(2).replace('.', ',')} €
                      </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <span className="text-accent font-extrabold text-lg tabular-nums">
                        {p.margin}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: Karten */}
          <div className="md:hidden space-y-3 mb-8">
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
                      <h3 className="font-bold text-text">{p.name}</h3>
                      <p className="text-text-muted text-xs mt-0.5">{p.desc}</p>
                    </div>
                    <span className="text-accent font-extrabold text-3xl tabular-nums leading-none">
                      {p.margin}%
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-1.5">
                      <span className="text-text-light">UVP (B2C brutto)</span>
                      <span className="text-text tabular-nums">
                        {p.b2cPrice.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-text-light">Ihr EK netto</span>
                      <span className="text-accent font-bold tabular-nums">
                        {p.ekNetto.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-100 mt-1">
                      <span className="font-semibold text-text">Rohertrag / Stk.</span>
                      <span className="font-bold text-text tabular-nums">
                        {p.grossProfit.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beispielrechnung + Großmengen */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="b2b-card p-6 md:p-7">
              <p className="text-[11px] font-semibold text-text-light uppercase tracking-widest mb-5">
                Beispielrechnung: 1 Karton Whey WPC 80
              </p>
              <div className="space-y-2.5 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-text-light">6 Stk. · Ihr EK</span>
                  <span className="text-text tabular-nums font-medium">
                    6 × 22,99 € = 137,94 €
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">6 Stk. · VK (UVP)</span>
                  <span className="text-text tabular-nums font-medium">
                    6 × 48,90 € = 293,40 €
                  </span>
                </div>
              </div>
              <div className="bg-accent/10 rounded-xl px-5 py-4 flex justify-between items-center">
                <span className="font-semibold text-accent text-sm">Rohertrag gesamt</span>
                <span className="font-extrabold text-accent text-2xl tabular-nums">112,86 €</span>
              </div>
            </div>
            <div className="b2b-card-dark p-6 md:p-7 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
                  Ab 1.000 Einheiten
                </p>
                <p className="text-white text-sm leading-relaxed mb-6">
                  Individuelles Angebot mit Sonderkonditionen,
                  Liefervereinbarungen und White-Label-Optionen.
                </p>
              </div>
              <a
                href="#partner"
                className="btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm"
              >
                Großmengen anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WARUM PARTNER ─── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="mb-12 md:mb-14">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-7">
              Warum Eden
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              Warum Partner mit Eden<br />besser verdienen
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                num: '01',
                title: 'Höhere Marge',
                desc: 'Premium-Preis durch echte Substanz, nicht durch Claims. 45% Rohertrag auf den Endkundenpreis – ab dem ersten Karton, ohne Rabattdruck.',
              },
              {
                num: '02',
                title: 'Keine Vergleichbarkeit',
                desc: 'Kein Standard-Whey, keine 1:1 Vergleichbarkeit. Wer Eden im Sortiment hat, führt keine Preisdiskussion mit Kunden.',
              },
              {
                num: '03',
                title: 'Wiederkäufe durch echte Qualität',
                desc: 'Kunden kommen zurück, weil sie den Unterschied spüren – nicht weil das Produkt gerade im Angebot ist.',
              },
              {
                num: '04',
                title: 'Differenzierung vom Wettbewerb',
                desc: 'Ergänzung zum bestehenden Sortiment, nicht Konkurrenz. Eine SKU, die andere nicht haben – und die sich nicht selbst erklären muss.',
              },
            ].map((item) => (
              <div key={item.num} className="b2b-card p-7 md:p-8">
                <p className="text-[11px] font-bold text-accent/60 uppercase tracking-[0.2em] mb-5">
                  {item.num}
                </p>
                <h3 className="font-bold text-text text-xl mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. PHYSISCHER BEWEIS ─── */}
      <section className="section-padding b2b-hero-bg text-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em] mb-7">
                Physischer Beweis
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
                Funktion entsteht aus Struktur,{' '}
                <span className="text-accent-light">nicht aus Zusatzstoffen.</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Kein Lecithin. Keine Emulgatoren. Keine Aromen.
                Stattdessen physikalisch optimierte Proteinstruktur –
                im Glas sichtbar, für Kunden spürbar.
              </p>
              <ul className="space-y-4">
                {[
                  'Dispergiert sofort im Glas – ohne Shaker, ohne Klumpen',
                  'Kein Schaum, kein Film, kein schweres Mundgefühl',
                  'Genau das ist der Unterschied, den Kunden behalten',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 flex-shrink-0">→</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800/80 shadow-2xl">
                <video
                  src="/mixing-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  aria-label="Eden Protein: Lösungsverhalten ohne Emulgatoren"
                >
                  <source src="/mixing-demo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-4 flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-light text-xs font-bold">↑</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Glas. Wasser. Löffel. Fertig. –{' '}
                  <span className="text-accent-light font-medium">Kein Shaker nötig.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. CTA-SECTION ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-7">
            Jetzt starten
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text leading-[1.1] tracking-tight mb-6">
            Partner werden
          </h2>
          <p className="text-text-light text-base leading-relaxed mb-10 max-w-md mx-auto">
            Erhalten Sie Zugang zu Händlerkonditionen und Partnerstatus.
            Sagen Sie uns kurz, wer Sie sind –
            wir antworten innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#partner"
              className="btn-primary text-base px-8 py-4 rounded-xl min-h-[52px] inline-flex items-center justify-center"
            >
              Partner werden
            </a>
            <a
              href="#partner"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 border-gray-200 text-text hover:border-accent hover:text-accent transition-all duration-200 min-h-[52px]"
            >
              Zugang anfragen
            </a>
          </div>
        </div>
      </section>

      {/* ─── 8. FORMULAR ─── */}
      <section id="partner" className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-6">
              Partnerzugang beantragen
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">
              Konditionen und Zugang anfragen
            </h2>
            <p className="text-text-light text-sm md:text-base max-w-md mx-auto">
              Kurze Beschreibung genügt. Keine Verpflichtung.
            </p>
          </div>

          {submitted ? (
            <div className="b2b-card p-10 md:p-12 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-xl font-bold text-text mb-2 tracking-tight">
                Anfrage erhalten
              </h3>
              <p className="text-text-light text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                Wir melden uns innerhalb von 1–2 Werktagen mit den Konditionen und nächsten Schritten.
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
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="businessType" className="b2b-label">Art des Unternehmens *</label>
                  <select
                    id="businessType" required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="b2b-input"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="studio">Fitnessstudio / Sport-Studio</option>
                    <option value="handel">Händler / Supplement-Shop</option>
                    <option value="trainer">Personal Trainer</option>
                    <option value="apotheke">Apotheke / Health Retail</option>
                    <option value="marke">Marke / White Label</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="region" className="b2b-label">Region / Standort</label>
                  <input
                    type="text" id="region"
                    placeholder="z.B. München, DACH, AT ..."
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="b2b-input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quantity" className="b2b-label">Geplante Menge</label>
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
              <div>
                <label htmlFor="message" className="b2b-label">
                  Kurze Beschreibung (optional)
                </label>
                <textarea
                  id="message" rows={4}
                  placeholder="Was bieten Sie an? Welche Kunden bedienen Sie? White-Label-Interesse?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="b2b-input min-h-[110px] resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full text-base py-4 rounded-xl min-h-[52px] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? 'Wird gesendet...' : 'Partnerzugang anfragen'}
              </button>
              <p className="text-xs text-text-light text-center">
                * Pflichtfelder · Keine Verpflichtung · Antwort innerhalb von 1–2 Werktagen
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding bg-white">
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
            <a
              href="mailto:b2b@eden-naturals.de"
              className="text-accent-light hover:text-white transition-colors font-medium"
            >
              b2b@eden-naturals.de
            </a>
          </p>
          <p className="text-xs text-gray-600 mb-6 max-w-sm mx-auto">
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
