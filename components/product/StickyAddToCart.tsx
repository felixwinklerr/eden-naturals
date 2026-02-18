'use client'

import { useEffect, useState } from 'react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/contexts/CartContext'
import { useCartDrawer } from '@/contexts/CartDrawerContext'
import { useTranslations } from '@/contexts/LocaleContext'

interface StickyAddToCartProps {
  price: string
  currencyCode: string
  variantId?: string
  available?: boolean
  quantity: number
  title: string
}

export function StickyAddToCart({
  price,
  currencyCode,
  variantId,
  available = true,
  quantity,
  title,
}: StickyAddToCartProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const { addItem } = useCart()
  const { openDrawer } = useCartDrawer()
  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAddToCart = async () => {
    if (!variantId || loading) return
    setLoading(true)
    const success = await addItem(variantId, quantity)
    setLoading(false)
    if (success) openDrawer()
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl transform transition-transform duration-300 md:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="px-4 pt-2.5 pb-1 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-text-muted truncate">{title}</p>
          <p className="text-lg font-bold text-accent leading-tight">{formatPrice(price, currencyCode)}</p>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!available || loading}
          className={`btn-primary text-sm px-6 flex-shrink-0 ${
            !available || loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{ minHeight: '48px' }}
        >
          {loading ? '...' : available ? t('product.addToCart') : t('product.soldOut')}
        </button>
      </div>
      <p className="text-[10px] text-text-muted text-center pb-1">🛡️ {t('product.guaranteeBadge')} · 🚚 {t('product.freeShippingBadge')}</p>
      <div style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }} />
    </div>
  )
}
