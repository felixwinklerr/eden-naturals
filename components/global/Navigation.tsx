'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { CartIcon } from './CartIcon'
import { useCartDrawer } from '@/contexts/CartDrawerContext'
import { useLocale } from '@/contexts/LocaleContext'
import { LOCALES, LOCALE_LABELS } from '@/lib/i18n/types'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openDrawer } = useCartDrawer()
  const { locale, setLocale, t } = useLocale()

  const navItems = [
    { label: t('nav.shop'), href: '/products' },
    { label: t('nav.whyEden'), href: '/warum-eden' },
    { label: t('nav.faq'), href: '/#faq' },
    { label: t('nav.contact'), href: '/kontakt' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/Eden Naturals-logo-mit text.png"
              alt="Eden Naturals"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-text-light">
              {LOCALES.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc)}
                  className={`px-2 py-1 hover:text-accent transition-colors ${locale === loc ? 'font-semibold' : ''}`}
                  style={{ minHeight: '32px' }}
                >
                  {LOCALE_LABELS[loc]}
                </button>
              ))}
            </div>

            <CartIcon onClick={openDrawer} />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label={t('nav.menuOpen')}
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-text hover:text-accent hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 pb-3 px-4 border-t border-gray-200 mt-2">
              <span className="text-text-light text-sm">{t('common.language')}:</span>
              {LOCALES.map((loc) => (
                <button
                  key={loc}
                  onClick={() => { setLocale(loc); setMobileMenuOpen(false) }}
                  className={`text-base ${locale === loc ? 'font-semibold' : ''}`}
                  style={{ minHeight: '44px', padding: '0 8px' }}
                >
                  {LOCALE_LABELS[loc]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
