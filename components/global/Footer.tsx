'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from '@/contexts/LocaleContext'

export function Footer() {
  const t = useTranslations()

  const shopLinks = [
    { id: 'allProducts', label: t('footer.allProducts'), href: '/products' },
    { id: 'wheyNatural', label: t('footer.wheyNatural'), href: '/products/wpc-80' },
    { id: 'veganBlend', label: t('footer.veganBlend'), href: '/products/vegan-pea-rice-blend' },
    { id: 'starterPack', label: t('footer.starterPack'), href: '/products' },
  ]

  const infoLinks = [
    { id: 'whyEden', label: t('footer.whyEden'), href: '/warum-eden' },
    { id: 'faq', label: t('footer.faq'), href: '/#faq' },
    { id: 'contact', label: t('footer.contact'), href: '/kontakt' },
    { id: 'shipping', label: t('footer.shippingDelivery'), href: '/versand' },
  ]

  const legalLinks = [
    { id: 'impressum', label: t('footer.impressum'), href: '/impressum' },
    { id: 'privacy', label: t('footer.privacy'), href: '/datenschutz' },
    { id: 'terms', label: t('footer.terms'), href: '/agb' },
    { id: 'cancellation', label: t('footer.cancellation'), href: '/widerrufsrecht' },
    { id: 'cookiePolicy', label: t('footer.cookiePolicy'), href: '/cookie-richtlinie' },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Eden Naturals-logo-mit text.png"
                alt="Eden Naturals"
                width={140}
                height={50}
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <p className="text-text-light text-sm">{t('footer.copyright')}</p>
          </div>
          <div>
            <h3 className="font-semibold text-text mb-4">{t('footer.shop')}</h3>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-text-light hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text mb-4">{t('footer.info')}</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-text-light hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-text-light hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom strip intentionally minimal – keine Social Icons */}
      </div>
    </footer>
  )
}
