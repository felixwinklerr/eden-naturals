'use client'

import { useTranslations } from '@/contexts/LocaleContext'

export function ProductSocialProof() {
  const t = useTranslations()

  const testimonials = [
    { quoteKey: 'home.socialProof.quote1', name: 'Sarah M.', locationKey: 'home.socialProof.locationLux' },
    { quoteKey: 'home.socialProof.quote2', name: 'Thomas K.', locationKey: 'home.socialProof.locationDe' },
    { quoteKey: 'home.socialProof.quote3', name: 'Julia R.', locationKey: 'home.socialProof.locationLux' },
  ]

  return (
    <div className="mb-8 md:mb-12">
      <h3 className="text-xl md:text-2xl font-bold text-text mb-4 md:mb-6 text-center">
        {t('home.socialProof.title')}
      </h3>
      <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
        {testimonials.map((tst, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-5">
            <p className="text-text text-sm md:text-base leading-relaxed mb-3 italic">
              &ldquo;{t(tst.quoteKey)}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent font-semibold text-xs">
                {tst.name[0]}
              </div>
              <div>
                <p className="text-text text-xs md:text-sm font-medium">{tst.name}</p>
                <p className="text-text-muted text-xs">{t(tst.locationKey)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-text-muted text-xs mt-3">
        {t('home.socialProof.subtitle')}
      </p>
    </div>
  )
}
