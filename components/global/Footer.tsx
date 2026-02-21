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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12 mb-8">
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
          <div>
            <h3 className="font-semibold text-text mb-4">{t('footer.newsletter')}</h3>
            <p className="text-text-light text-sm mb-4">{t('footer.newsletterDiscount')}</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent"
                style={{ minHeight: '44px' }}
              />
              <button type="submit" className="btn-primary w-full text-sm md:text-base py-3">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="text-text-light hover:text-accent" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" /></svg>
              </a>
              <a href="#" className="text-text-light hover:text-accent" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
