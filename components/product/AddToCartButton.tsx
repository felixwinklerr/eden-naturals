'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { useCartDrawer } from '@/contexts/CartDrawerContext'
import { useTranslations } from '@/contexts/LocaleContext'
import { trackAddToCart } from '@/lib/facebook-pixel'

interface AddToCartButtonProps {
  variantId?: string
  available?: boolean
  quantity?: number
}

export function AddToCartButton({ variantId, available = true, quantity = 1 }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const { openDrawer } = useCartDrawer()
  const t = useTranslations()

  const handleAddToCart = async () => {
    if (!variantId) return
    setLoading(true)
    const success = await addItem(variantId, quantity)
    setLoading(false)
    if (success) {
      trackAddToCart([variantId])
      setAdded(true)
      openDrawer()
      setTimeout(() => setAdded(false), 2000)
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={!available || loading}
      className={`btn-primary w-full text-base md:text-lg py-3 md:py-4 transition-all ${
        added ? 'bg-green-600 hover:bg-green-700' : ''
      } ${!available || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? t('product.adding') : added ? t('product.added') : available ? t('product.addToCart') : t('product.unavailable')}
    </button>
  )
}
