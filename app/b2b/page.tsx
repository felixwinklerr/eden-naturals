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
    businessType: '',
    region: '',
    quantity: '',
    message: '',
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
            Partner werden – Konditionen anfragen
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
          <div className="flex items-center gap-3">
            <a
              href="#konditionen"
              className="hidden sm:inline-flex items-center justify-center text-sm font-semibold text-text-light hover:text-accent transition-colors px-3 py-2"
            >
              Konditionen
            </a>
            <a
              href="#partner"
              className="btn-primary text-sm px-5 py-2.5 rounded-xl min-h-[40px]"
            >
              Partner werden
            </a>
          </div>
        </div>
      </header>

      {/* ─── 1. HERO ─── */}
      <section className="b2b-hero-bg text-white">
        <div className="container-custom max-w-6xl py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center">

            {/* Left: Text */}
            <div>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em] mb-5">
                Für Fitnessstudios · Händler · Apotheken · Personal Trainer
              </p>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-tight mb-6 text-balance">
                Unvergleichbar.<br />
                <span className="text-accent-light">Echte Differenzierung.<br />Echte Marge.</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-3 max-w-lg">
                Protein ohne Lecithin. Ohne Emulgatoren. Ohne Zusatzstoffe.
              </p>
              <p className="text-gray-400 text-base mb-3 max-w-lg">
                Physikalisch strukturiert statt chemisch verändert.
              </p>
              <p className="text-gray-400 text-base mb-3 max-w-lg">
                Keine Vergleichbarkeit. Kein Preiskampf. Keine Austauschbarkeit.
              </p>
              <p className="text-accent-light font-semibold text-base md:text-lg mb-8 max-w-lg">
                45 % Marge ab der ersten Einheit.
              </p>

              <a
                href="#partner"
                className="btn-primary text-lg px-10 py-5 rounded-2xl min-h-[58px] inline-flex items-center justify-center font-bold w-full sm:w-auto shadow-lg shadow-accent/30"
              >
                Partner werden
              </a>

              {/* Mobile: Marge pro 660 g Packung */}
              <div className="lg:hidden mt-10 rounded-2xl overflow-hidden border-2 border-accent/40 bg-accent/15 p-6">
                <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-2">Marge pro 660-g-Packung</p>
                <p className="text-accent-light font-bold text-3xl tabular-nums mb-1">18,81 €</p>
                <p className="text-gray-500 text-xs">Rohertrag z. B. Whey WPC 80 · 45 % auf UVP</p>
              </div>
            </div>

            {/* Right: Marge pro 660 g – Desktop */}
            <div className="hidden lg:block rounded-2xl overflow-hidden border-2 border-accent/50 bg-accent/20 shadow-2xl shadow-black/20 p-8 xl:p-10">
              <p className="text-[11px] font-semibold text-accent-light/90 uppercase tracking-[0.2em] mb-6">
                45 % Marge ab der ersten Einheit
              </p>
              <p className="text-accent-light font-black text-[7rem] xl:text-[8rem] leading-none tabular-nums mb-2">
                45%
              </p>
              <div className="border-t-2 border-accent/30 pt-6 mt-6">
                <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-2">Marge pro 660-g-Packung</p>
                <p className="text-white font-bold text-4xl xl:text-5xl tabular-nums">18,81 €</p>
                <p className="text-gray-500 text-sm mt-2">Rohertrag z. B. Whey WPC 80 · 45 % auf UVP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <div className="bg-[#141414] border-t border-white/5 py-3.5">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-2">
            {[
              '5–7 Tage Lieferzeit',
              'Einstieg ab 1 Karton',
              'Muster verfügbar',
              'Antwort innerhalb 24h',
              'Keine Vertragsbindung',
            ].map((t) => (
              <span key={t} className="flex items-center gap-2 text-[11px] text-gray-500 font-medium uppercase tracking-widest">
                <span className="w-1 h-1 rounded-full bg-accent-light/60 flex-shrink-0" aria-hidden />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 2. PROBLEM ─── */}
      <section className="section-padding-lg bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <p className="text-[11px] font-semibold text-red-500 uppercase tracking-[0.22em] mb-5">
                Das Problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-6">
                Der Proteinmarkt ist austauschbar.
              </h2>
              <p className="text-text-light text-base leading-relaxed">
                Vergleichbarkeit → Preisdruck → niedrige Margen.
              </p>
            </div>
            <div className="space-y-2">
              {['Gleiche Inhaltsstoffe', 'Gleiche Claims', 'Preiskampf'].map((label) => (
                <div key={label} className="flex items-center gap-4 px-5 py-3.5 bg-red-50 rounded-xl">
                  <span className="text-red-400 font-bold flex-shrink-0" aria-hidden>✕</span>
                  <span className="text-text text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. LÖSUNG ─── */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-5">
                Die Lösung
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-6">
                Eden: eigene Kategorie.
              </h2>
              <ul className="space-y-3">
                {[
                  'Funktion aus Struktur – nicht aus Zusatzstoffen',
                  'Kein Lecithin, keine Emulgatoren',
                  'Nicht vergleichbar mit Standardprodukten',
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

      {/* ─── 4. HÄNDLERGEWINN ─── */}
      <section id="konditionen" className="section-padding-lg bg-white">
        <div className="container-custom max-w-5xl">
          {/* Margen-Highlight: sofort sichtbar */}
          <div className="mb-12 rounded-2xl border-2 border-accent/40 bg-accent/10 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text tracking-tight mb-1">
                Beispiel für Partner
              </h2>
              <p className="text-text-light text-sm">Alle 4 Produkte · 660 g · 45% Marge</p>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-accent font-black text-4xl md:text-5xl tabular-nums">45%</p>
                <p className="text-text-light text-xs uppercase tracking-widest">Marge</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block" aria-hidden />
              <div className="text-center">
                <p className="text-accent font-bold text-2xl md:text-3xl tabular-nums">18,81 €</p>
                <p className="text-text-light text-xs uppercase tracking-widest">Rohertrag/Stk.</p>
              </div>
            </div>
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block b2b-card overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {['Produkt', 'UVP (B2C brutto)', 'Ihr EK netto', 'Rohertrag / Stk.', 'Marge'].map((h, i) => (
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
                    <td className="py-5 px-5 text-right text-text text-sm tabular-nums">
                      {p.b2cPrice.toFixed(2).replace('.', ',')} €
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: cards */}
          <div className="md:hidden space-y-3 mb-6">
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
                      <span className="text-text-light">UVP (B2C brutto)</span>
                      <span className="text-text tabular-nums">{p.b2cPrice.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-text-light">Ihr EK netto</span>
                      <span className="text-accent font-bold tabular-nums">{p.ekNetto.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between py-2.5 border-t border-gray-100 mt-1">
                      <span className="font-semibold text-text">Rohertrag / Stk.</span>
                      <span className="font-bold text-text tabular-nums">{p.grossProfit.toFixed(2).replace('.', ',')} €</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beispielrechnung + Großmengen */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="b2b-card p-6 md:p-7">
              <p className="text-[11px] font-semibold text-text-light uppercase tracking-widest mb-5">
                Beispiel: 1 Karton Whey WPC 80
              </p>
              <div className="space-y-2.5 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-text-light">6 Stk. · Ihr EK</span>
                  <span className="text-text tabular-nums font-medium">6 × 22,99 € = 137,94 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">6 Stk. · VK (UVP)</span>
                  <span className="text-text tabular-nums font-medium">6 × 48,90 € = 293,40 €</span>
                </div>
              </div>
              <div className="bg-accent/10 rounded-xl px-5 py-4 flex justify-between items-center">
                <span className="font-semibold text-accent text-sm">Rohertrag gesamt</span>
                <span className="font-extrabold text-accent text-2xl tabular-nums">112,86 €</span>
              </div>
            </div>
            <div className="b2b-card-dark p-6 md:p-7 flex flex-col justify-between gap-5">
              <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-3">
                  Ab 1.000 Einheiten
                </p>
                <p className="text-white text-sm leading-relaxed">
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

      {/* ─── 5. PARTNER-VORTEILE ─── */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="mb-12 md:mb-16">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-4">
              Für Partner
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              Ihr Vorteil
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {[
              { title: 'Differenzierung', desc: 'Eigene Kategorie – keine 1:1-Konkurrenz.' },
              { title: 'Unvergleichbarkeit', desc: 'Nicht vergleichbar mit Standard-Protein.' },
              { title: 'Stabile Margen', desc: '45% Rohertrag – ab dem ersten Karton.' },
              { title: 'Keine Vergleichbarkeit mit Standardprodukten', desc: 'Kein Preiskampf. Keine Rabattspirale.' },
            ].map((item) => (
              <div key={item.title} className="b2b-card p-6 md:p-7">
                <h3 className="font-bold text-text text-lg mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. PHYSISCHER BEWEIS – Differenzierung visuell ─── */}
      <section className="section-padding-lg b2b-hero-bg text-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em] mb-5">
                Nicht wie Standard-Protein
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-5">
                Struktur statt Zusatzstoffe.
              </h2>
              <p className="text-gray-400 text-base mb-6">
                Physikalisch optimiert. Im Glas sichtbar – dispergiert ohne Shaker.
              </p>
              <a href="#partner" className="text-accent-light text-sm font-semibold hover:underline">
                Partner werden →
              </a>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-2xl ring-2 ring-white/10">
                <video
                  src="/mixing-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  aria-label="Eden Protein: Dispergierung ohne Emulgatoren – anders als Standard-Protein"
                >
                  <source src="/mixing-demo.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="mt-4 text-center text-gray-500 text-xs">
                Glas · Wasser · Löffel. Kein Shaker. Kein Klumpen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. FORMULAR ─── */}
      <section id="partner" className="section-padding-lg bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-5">
              Jetzt starten
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-3 tracking-tight">
              Wollen Sie die Konditionen sehen?
            </h2>
            <p className="text-text-light text-sm md:text-base max-w-md mx-auto">
              Sagen Sie uns kurz, welche Zielgruppe Sie bedienen und welche Region.
              Sie erhalten Konditionen, Mindestmengen und Musteroptionen.
            </p>
          </div>

          {submitted ? (
            <div className="b2b-card p-10 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-xl font-bold text-text mb-2 tracking-tight">Anfrage erhalten</h3>
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
              </div>
              <div>
                <label htmlFor="region" className="b2b-label">Region / Standort</label>
                <input
                  type="text" id="region"
                  placeholder="z.B. München, Österreich, DACH ..."
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="b2b-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="b2b-label">Kurze Beschreibung (optional)</label>
                <textarea
                  id="message" rows={4}
                  placeholder="Welche Produkte interessieren Sie? Haben Sie White-Label-Interesse? Sonstiges..."
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
