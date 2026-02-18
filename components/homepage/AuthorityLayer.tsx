'use client'

import Image from 'next/image'
import { useTranslations } from '@/contexts/LocaleContext'

export function AuthorityLayer() {
  const t = useTranslations()

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <span className="inline-block text-xs md:text-sm font-semibold text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full mb-4">
              {t('home.authority.badge')}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-4 md:mb-5 leading-tight">
              {t('home.authority.title')}
              <br />
              <span className="text-accent">{t('home.authority.titleAccent')}</span>
            </h2>
            <p className="text-text-light text-sm md:text-base leading-relaxed mb-5 md:mb-6">
              {t('home.authority.intro')}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-500 text-sm font-bold">✕</span>
                </div>
                <div>
                  <p className="text-text font-semibold text-sm md:text-base">{t('home.authority.standardTitle')}</p>
                  <p className="text-text-light text-xs md:text-sm">{t('home.authority.standardDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-text font-semibold text-sm md:text-base">{t('home.authority.edenTitle')}</p>
                  <p className="text-text-light text-xs md:text-sm">{t('home.authority.edenDesc')}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 md:p-5">
              <h3 className="font-bold text-text text-sm md:text-base mb-3">{t('home.authority.whyRelevant')}</h3>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5 flex-shrink-0 text-sm">→</span>
                  <p className="text-text-light text-xs md:text-sm leading-relaxed">{t('home.authority.chemical')}</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5 flex-shrink-0 text-sm">→</span>
                  <p className="text-text-light text-xs md:text-sm leading-relaxed">{t('home.authority.mechanical')}</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5 flex-shrink-0 text-sm">→</span>
                  <p className="text-text-light text-xs md:text-sm leading-relaxed">{t('home.authority.result')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/mechanisch_veredelt.webp"
                alt={t('home.authority.processVisual')}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <video
                src="/mixing-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                aria-label={t('home.authority.mixingDemo')}
              >
                <source src="/mixing-demo.mp4" type="video/mp4" />
                {t('home.authority.mixingDemo')}
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
