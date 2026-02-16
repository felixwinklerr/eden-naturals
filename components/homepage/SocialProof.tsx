'use client'

import { useTranslations } from '@/contexts/LocaleContext'

export function SocialProof() {
  const t = useTranslations()

  const testimonials = [
    { quoteKey: 'home.socialProof.quote1', author: 'Sarah M.', locationKey: 'home.socialProof.locationLux', tagKey: 'home.socialProof.tagVeganBlend' },
    { quoteKey: 'home.socialProof.quote2', author: 'Thomas K.', locationKey: 'home.socialProof.locationDe', tagKey: 'home.socialProof.tagWpc' },
    { quoteKey: 'home.socialProof.quote3', author: 'Julia R.', locationKey: 'home.socialProof.locationLux', tagKey: 'home.socialProof.tagPea' },
    { quoteKey: 'home.socialProof.quote4', author: 'Michael B.', locationKey: 'home.socialProof.locationDe', tagKey: 'home.socialProof.tagWpc' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-2">
            {t('home.socialProof.title')}
          </h2>
          <p className="text-text-muted text-xs md:text-sm">
            {t('home.socialProof.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100">
              <span className="inline-block text-[10px] md:text-xs font-medium text-accent bg-accent bg-opacity-10 px-2 py-0.5 rounded-full mb-3">
                {t(testimonial.tagKey)}
              </span>
              <p className="text-text text-sm md:text-base leading-relaxed mb-4 italic">
                &ldquo;{t(testimonial.quoteKey)}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">{testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="text-text text-xs md:text-sm font-medium">{testimonial.author}</p>
                  <p className="text-text-muted text-[10px] md:text-xs">{t(testimonial.locationKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-text-muted text-[10px] md:text-xs mt-4 md:mt-5">
          {t('home.socialProof.disclaimer')}
        </p>
      </div>
    </section>
  )
}
