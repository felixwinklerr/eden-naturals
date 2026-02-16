'use client'

import { useState } from 'react'
import { useTranslations } from '@/contexts/LocaleContext'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const t = useTranslations()

  const faqKeys = [
    { q: 'home.faq.q1', a: 'home.faq.a1' },
    { q: 'home.faq.q2', a: 'home.faq.a2' },
    { q: 'home.faq.q3', a: 'home.faq.a3' },
    { q: 'home.faq.q4', a: 'home.faq.a4' },
    { q: 'home.faq.q5', a: 'home.faq.a5' },
    { q: 'home.faq.q6', a: 'home.faq.a6' },
    { q: 'home.faq.q7', a: 'home.faq.a7' },
    { q: 'home.faq.q8', a: 'home.faq.a8' },
    { q: 'home.faq.q9', a: 'home.faq.a9' },
  ]

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-2">
            {t('home.faq.title')}
          </h2>
          <p className="text-text-light text-sm md:text-base">
            {t('home.faq.subtitle')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
          {faqKeys.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border overflow-hidden transition-colors ${
                  isOpen ? 'border-accent border-opacity-30 shadow-sm' : 'border-gray-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-4 md:px-6 py-3.5 md:py-4 text-left flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
                  style={{ minHeight: '48px' }}
                >
                  <span className="font-semibold text-text text-sm md:text-base pr-2">{t(faq.q)}</span>
                  <span className={`text-accent text-xl flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5">
                    <p className="text-text-light text-sm md:text-base leading-relaxed">{t(faq.a)}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
