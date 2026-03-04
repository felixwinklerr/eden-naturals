'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { LOCALES, LOCALE_LABELS } from '@/lib/i18n/types'

/* ─── Product data (numbers only; names/descs from i18n) ─── */
const PRODUCT_DATA = [
  { nameKey: 'productVeganBlend', descKey: 'productVeganBlendDesc', b2cPrice: 39.90, ekNetto: 18.76, margin: 45, grossProfit: 15.35, highlight: false },
  { nameKey: 'productWhey', descKey: 'productWheyDesc', b2cPrice: 48.90, ekNetto: 22.99, margin: 45, grossProfit: 18.81, highlight: true },
  { nameKey: 'productRice', descKey: 'productRiceDesc', b2cPrice: 35.90, ekNetto: 16.41, margin: 45, grossProfit: 13.42, highlight: false },
  { nameKey: 'productPea', descKey: 'productPeaDesc', b2cPrice: 35.90, ekNetto: 16.41, margin: 45, grossProfit: 13.42, highlight: false },
]
const FAQ_KEYS = ['faq1', 'faq2', 'faq3', 'faq4'] as const

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
  const { locale, setLocale, t } = useLocale()
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

  const products = PRODUCT_DATA.map((p) => ({
    ...p,
    name: t(`b2b.${p.nameKey}`),
    desc: t(`b2b.${p.descKey}`),
  }))
  const faqItems = FAQ_KEYS.map((key) => ({ q: t(`b2b.${key}q`), a: t(`b2b.${key}a`) }))

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
            {t('b2b.ctaPartner')}
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
              {t('b2b.partnerArea')}
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-medium text-text-light" aria-label={t('common.language')}>
              {LOCALES.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocale(loc)}
                  className={`px-2 py-1.5 rounded hover:text-accent transition-colors ${locale === loc ? 'font-semibold text-accent' : ''}`}
                >
                  {LOCALE_LABELS[loc]}
                </button>
              ))}
            </div>
            <a
              href="#partner"
              className="btn-primary text-sm px-5 py-2.5 rounded-xl min-h-[40px]"
            >
              {t('b2b.ctaPartner')}
            </a>
          </div>
        </div>
      </header>

      {/* ─── 1. HERO ─── */}
      <section className="b2b-hero-bg text-white">
        <div className="container-custom max-w-6xl py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            <div className="flex flex-col">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em] mb-6">
                {t('b2b.heroFor')}
              </p>
              <h1 className="text-[2.6rem] sm:text-5xl md:text-[3.6rem] lg:text-[3.8rem] font-bold leading-[1.05] tracking-tight mb-5 text-balance">
                {t('b2b.heroTitle')}<br />
                <span className="text-accent-light">{t('b2b.heroTitleNew')}</span>
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed mb-1 max-w-md">
                {t('b2b.heroSub1')}
              </p>
              <p className="text-gray-400 text-sm mb-6 max-w-md">
                {t('b2b.heroSub2')}
              </p>

              <div className="hidden md:flex items-end gap-4 mb-10">
                <span className="text-accent-light font-black text-6xl lg:text-7xl leading-none tabular-nums">
                  45%
                </span>
                <div className="flex flex-col gap-1 text-[11px] tracking-[0.18em] uppercase text-gray-400">
                  <span>{t('b2b.key45Caption1')}</span>
                  <span>{t('b2b.key45Caption2')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#partner"
                  className="btn-primary text-base px-8 py-3.5 rounded-xl min-h-[50px] inline-flex items-center justify-center font-semibold w-full sm:w-auto"
                >
                  {t('b2b.ctaPartner')}
                </a>
                <a
                  href="#partner"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl min-h-[50px] w-full sm:w-auto border border-white/20 text-sm font-medium text-gray-300 hover:border-white/40 hover:text-white transition-colors"
                >
                  {t('b2b.ctaSample')}
                </a>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[11px] text-gray-400">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#111] font-semibold tracking-[0.16em] uppercase">
                  {t('b2b.deliveryBadge')}
                </span>
                <span className="hidden sm:inline">{t('b2b.deliveryNote')}</span>
              </div>

              <div className="lg:hidden mt-10 flex justify-center pb-4 px-2">
                <Image
                  src="/Your Logo Here.png"
                  alt={t('b2b.altLogoBag')}
                  width={700}
                  height={900}
                  quality={95}
                  className="w-[min(400px,94vw)] max-w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  style={{ filter: 'brightness(0.96) contrast(1.06) saturate(0.85)' }}
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center py-10 px-4">
              <Image
                src="/Your Logo Here.png"
                alt={t('b2b.altLogoBag')}
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
            {[t('b2b.trust1'), t('b2b.trust2'), t('b2b.trust3'), t('b2b.trust4'), t('b2b.trust5'), t('b2b.trust6')].map((label) => (
              <span key={label} className="flex items-center gap-2 text-[11px] text-gray-300 font-medium uppercase tracking-widest">
                <span className="w-1 h-1 rounded-full bg-accent-light/80 flex-shrink-0" aria-hidden />
                {label}
              </span>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-2">
            {t('b2b.trustFootnote')}
          </p>
        </div>
      </div>

      {/* ─── 2. PROBLEM IM MARKT ─── */}
      <section className="section-padding-lg bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold text-red-500 uppercase tracking-[0.22em] mb-4">
                {t('b2b.problemLabel')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-4">
                {t('b2b.problemTitle')}
              </h2>
              <p className="text-text-light text-base">
                {t('b2b.problemDesc')}
              </p>
            </div>
            <div className="space-y-1.5">
              {[t('b2b.problem1'), t('b2b.problem2'), t('b2b.problem3'), t('b2b.problem4')].map((label) => (
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
                {t('b2b.solutionLabel')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-6">
                {t('b2b.solutionTitle')}
              </h2>
              <ul className="space-y-3">
                {[t('b2b.solution1'), t('b2b.solution2'), t('b2b.solution3'), t('b2b.solution4'), t('b2b.solution5'), t('b2b.solution6'), t('b2b.solution7')].map((item) => (
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
                <p className="text-text-light text-xs uppercase tracking-widest mb-3">{t('b2b.otherLabel')}</p>
                <p className="text-text-light text-sm">{t('b2b.otherDesc')}</p>
              </div>
              <div className="b2b-card p-5 border-accent/30 bg-accent/5">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">{t('b2b.edenLabel')}</p>
                <p className="text-text text-sm font-medium">{t('b2b.edenDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. IHRE MARGE ─── */}
      <section id="konditionen" className="section-padding-lg bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-12 rounded-2xl border-2 border-accent/40 bg-accent/10 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text tracking-tight mb-1">
                {t('b2b.marginTitle')}
              </h2>
              <p className="text-text-light text-sm">
                {t('b2b.marginDesc')}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-text-light">
                <li>• {t('b2b.marginBullet')}</li>
              </ul>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-accent font-black text-5xl md:text-6xl tabular-nums">45%</p>
                <p className="text-text-light text-xs uppercase tracking-widest">{t('b2b.marginLabel')}</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block" aria-hidden />
              <div className="text-center">
                <p className="text-accent font-bold text-2xl md:text-3xl tabular-nums">18,81 €</p>
                <p className="text-text-light text-xs uppercase tracking-widest">{t('b2b.rohertragLabel')}</p>
                <p className="text-text-muted text-[10px] mt-0.5">{t('b2b.rohertragNote')}</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-text-light mb-8">
            {t('b2b.volumeLine')}
          </p>

          <div className="hidden md:block b2b-card overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {[t('b2b.tableProduct'), t('b2b.tableEk'), t('b2b.tableRohertrag'), t('b2b.tableMarge'), t('b2b.tableUvp')].map((h, i) => (
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
                {products.map((p, i) => (
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
                            {t('b2b.topBadge')}
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

          <div className="md:hidden space-y-3">
            {products.map((p) => (
              <div key={p.name} className="b2b-card overflow-hidden">
                {p.highlight && (
                  <div className="bg-accent text-white text-[10px] font-bold text-center py-2.5 tracking-widest uppercase">
                    {t('b2b.highestMargin')}
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
                      <span className="text-text-light">{t('b2b.tableEk')}</span>
                      <span className="text-accent font-bold tabular-nums">{p.ekNetto.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-100 pt-2">
                      <span className="font-semibold text-text">{t('b2b.tableRohertrag')}</span>
                      <span className="font-bold text-text tabular-nums">{p.grossProfit.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-text-muted text-xs">{t('b2b.uvpExample')}</span>
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
              {t('b2b.whiteLabelSection')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              {t('b2b.whiteLabelTitle')}
            </h2>
          </div>
          <div className="grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 md:gap-16 items-center">
            <div className="b2b-card p-6 md:p-8">
              <ul className="space-y-3">
                {[t('b2b.wl1'), t('b2b.wl2'), t('b2b.wl3'), t('b2b.wl4'), t('b2b.wl5'), t('b2b.wl6')].map((item) => (
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
                alt={t('b2b.altLogoBagEn')}
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
              {t('b2b.productionSection')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              {t('b2b.productionTitle')}
            </h2>
          </div>
          <div className="b2b-card p-6 md:p-8">
            <ul className="space-y-3">
              {[t('b2b.prod1'), t('b2b.prod2'), t('b2b.prod3'), t('b2b.prod4'), t('b2b.prod5')].map((item) => (
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
              {t('b2b.forWhoSection')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              {t('b2b.forWhoTitle')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {[t('b2b.who1'), t('b2b.who2'), t('b2b.who3'), t('b2b.who4'), t('b2b.who5'), t('b2b.who6'), t('b2b.who7')].map((item) => (
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
              {t('b2b.upgradeSection')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight">
              {t('b2b.upgradeTitle')}
            </h2>
          </div>
          <div className="b2b-card p-6 md:p-8">
            <ul className="space-y-3">
              {[t('b2b.up1'), t('b2b.up2'), t('b2b.up3'), t('b2b.up4')].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-text-light">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PHYSISCHER BEWEIS ─── */}
      <section className="section-padding-lg b2b-hero-bg text-white">
        <div className="container-custom max-w-4xl">
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em] mb-4">
            {t('b2b.proofSection')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-8">
            {t('b2b.proofTitle')}
          </h2>
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
              {t('b2b.ctaPartner')}
            </a>
          </div>
        </div>
      </section>

      {/* ─── 9. CTA + FORMULAR ─── */}
      <section id="partner" className="section-padding-lg bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.22em] mb-5">
              {t('b2b.ctaSection')}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-3 tracking-tight">
              {t('b2b.ctaTitle')}
            </h2>
            <p className="text-text-light text-sm md:text-base max-w-md mx-auto">
              {t('b2b.ctaSub')}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#partner"
                className="btn-primary px-7 py-3.5 rounded-xl min-h-[52px] text-base font-semibold"
              >
                {t('b2b.ctaPartner')}
              </a>
              <a
                href="mailto:b2b@eden-partner.com"
                className="px-7 py-3.5 rounded-xl min-h-[52px] text-sm font-semibold border border-accent/40 text-accent hover:bg-accent/5 transition-colors"
              >
                {t('b2b.ctaSample')}
              </a>
            </div>
            <p className="mt-4 text-xs text-text-light">
              {t('b2b.contactLine')} <a href="mailto:b2b@eden-partner.com" className="text-accent font-semibold hover:underline">b2b@eden-partner.com</a>
            </p>
          </div>

          {submitted ? (
            <div className="b2b-card p-10 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-xl font-bold text-text mb-2 tracking-tight">{t('b2b.formSuccessTitle')}</h3>
              <p className="text-text-light text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                {t('b2b.formSuccessText')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="b2b-card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="b2b-label">{t('b2b.labelName')}</label>
                  <input
                    type="text" id="name" required
                    placeholder={t('b2b.placeholderName')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="b2b-input"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="b2b-label">{t('b2b.labelCompany')}</label>
                  <input
                    type="text" id="company" required
                    placeholder={t('b2b.placeholderCompany')}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="b2b-input"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="b2b-label">{t('b2b.labelEmail')}</label>
                  <input
                    type="email" id="email" required
                    placeholder={t('b2b.placeholderEmail')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="b2b-input"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="b2b-label">{t('b2b.labelPhone')}</label>
                  <input
                    type="tel" id="phone"
                    placeholder={t('b2b.placeholderPhone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="b2b-input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quantity" className="b2b-label">{t('b2b.labelQuantity')}</label>
                <select
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="b2b-input"
                >
                  <option value="">{t('b2b.quantityNotSure')}</option>
                  <option value="muster">{t('b2b.quantitySample')}</option>
                  <option value="6er">{t('b2b.quantity6')}</option>
                  <option value="12er">{t('b2b.quantity12')}</option>
                  <option value="1000+">{t('b2b.quantity1000')}</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full text-base py-4 rounded-xl min-h-[52px] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? t('b2b.submitSending') : t('b2b.ctaPartner')}
              </button>
              <p className="text-xs text-text-light text-center">
                {t('b2b.requiredNote')}
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
              {t('b2b.faqTitle')}
            </h2>
          </div>
          <div className="b2b-card overflow-hidden divide-y divide-gray-100 px-5 md:px-8">
            {faqItems.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <p className="text-center text-text-light text-sm mt-8">
            {t('b2b.faqContact')}{' '}
            <a
              href="mailto:b2b@eden-partner.com"
              className="text-accent font-semibold hover:underline"
            >
              b2b@eden-partner.com
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
              href="mailto:b2b@eden-partner.com"
              className="text-accent-light hover:text-white transition-colors font-medium"
            >
              b2b@eden-partner.com
            </a>
          </p>
          <p className="text-xs text-gray-600 mb-8 max-w-xs mx-auto">
            {t('b2b.footerTagline')}
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
