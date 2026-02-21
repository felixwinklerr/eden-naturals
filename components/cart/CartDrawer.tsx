'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { useCartDrawer } from '@/contexts/CartDrawerContext'
import { useTranslations } from '@/contexts/LocaleContext'
import { getProductTitleKey } from '@/lib/i18n/product-titles'
import { formatPrice } from '@/lib/utils'
import { trackInitiateCheckout } from '@/lib/facebook-pixel'

export function CartDrawer() {
  const { isOpen, closeDrawer } = useCartDrawer()
  const { cart, loading, refreshCart, updateLineQuantity } = useCart()
  const [updatingLineId, setUpdatingLineId] = useState<string | null>(null)
  const t = useTranslations()

  useEffect(() => {
    if (cart && cart.totalQuantity > 0) refreshCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- refresh when quantity changes
  }, [cart?.totalQuantity])

  const cartItems = cart?.lines?.edges || []
  const subtotal = cart ? parseFloat(cart.cost.totalAmount.amount) : 0
  const freeShippingThreshold = 75
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeDrawer} />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-3 md:p-4 border-b">
            <h2 className="text-base md:text-lg font-semibold">{t('cart.title')}</h2>
            <button
              onClick={closeDrawer}
              className="p-2 hover:bg-gray-100 rounded"
              aria-label={t('common.close')}
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 md:p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8 md:py-12">
                <p className="text-text-light mb-3 md:mb-4 text-sm md:text-base">{t('cart.empty')}</p>
                <Link href="/products" className="btn-primary inline-block text-sm md:text-base" onClick={closeDrawer}>
                  {t('cart.continueShopping')}
                </Link>
              </div>
            ) : loading ? (
              <div className="text-center py-8 md:py-12">
                <p className="text-text-light text-sm md:text-base">{t('cart.loading')}</p>
              </div>
            ) : (
              <div className="space-y-3 md:space-y-4">
                {cartItems.map(({ node: line }) => {
                  const variant = line.merchandise
                  const product = variant.product
                  const image = product.images?.edges?.[0]?.node
                  const lineTotal = parseFloat(variant.price.amount) * line.quantity
                  const titleKey = getProductTitleKey(product.handle ?? '')
                  const productTitle = t(`productTitles.${titleKey}`) !== `productTitles.${titleKey}` ? t(`productTitles.${titleKey}`) : product.title
                  return (
                    <div key={line.id} className="flex gap-3 md:gap-4 border-b pb-3 md:pb-4">
                      {image && (
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden relative">
                          {/* eslint-disable-next-line @next/next/no-img-element -- cart thumbnail from API, dynamic size */}
                          <img src={image.url} alt={image.altText || productTitle} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xs md:text-sm mb-1 truncate">{productTitle}</h3>
                        <p className="text-xs text-text-light mb-2">
                          {variant.title} • {formatPrice(variant.price.amount, variant.price.currencyCode)}
                        </p>
                        <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            aria-label={t('cart.quantity')}
                            disabled={!!updatingLineId}
                            onClick={async () => {
                              const newQty = Math.max(0, line.quantity - 1)
                              setUpdatingLineId(line.id)
                              await updateLineQuantity(line.id, newQty)
                              setUpdatingLineId(null)
                            }}
                            className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-text"
                          >
                            −
                          </button>
                          <span className="text-xs md:text-sm min-w-[2rem] text-center py-1" aria-live="polite">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label={t('cart.quantity')}
                            disabled={!!updatingLineId}
                            onClick={async () => {
                              setUpdatingLineId(line.id)
                              await updateLineQuantity(line.id, line.quantity + 1)
                              setUpdatingLineId(null)
                            }}
                            className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-text"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-xs md:text-sm font-semibold">
                          {formatPrice(lineTotal.toString(), variant.price.currencyCode)}
                        </span>
                      </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="border-t p-3 md:p-4 space-y-3 md:space-y-4">
              {remainingForFreeShipping > 0 ? (
                <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                  <p className="text-xs md:text-sm text-text-light mb-1 md:mb-2">
                    {t('cart.remainingFreeShipping', { amount: remainingForFreeShipping.toFixed(2) })}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                    <div
                      className="bg-accent h-1.5 md:h-2 rounded-full transition-all"
                      style={{ width: `${((subtotal / freeShippingThreshold) * 100).toFixed(0)}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 p-2 md:p-3 rounded-lg">
                  <p className="text-xs md:text-sm text-green-800 font-medium text-center">
                    ✓ {t('cart.freeShippingAchieved')}
                  </p>
                </div>
              )}
              <div className="flex justify-between text-base md:text-lg font-semibold">
                <span>{t('cart.subtotal')}</span>
                <span>{cart ? formatPrice(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode) : '€0.00'}</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-xs text-text-light flex-wrap">
                <span>{t('cart.guaranteeBadge')}</span>
                <span>{t('cart.securePayment')}</span>
              </div>
              {cart?.checkoutUrl ? (
                <a
                  href={cart.checkoutUrl}
                  className="btn-primary w-full block text-center text-base"
                  onClick={() => {
                    trackInitiateCheckout(subtotal, 'EUR', cartItems.length)
                    closeDrawer()
                  }}
                >
                  {t('cart.checkout')}
                </a>
              ) : (
                <Link
                  href="/checkout"
                  className="btn-primary w-full block text-center text-base"
                  onClick={() => {
                    trackInitiateCheckout(subtotal, 'EUR', cartItems.length)
                    closeDrawer()
                  }}
                >
                  {t('cart.checkout')}
                </Link>
              )}
              <div className="space-y-2">
                <p className="text-xs text-text-light text-center">{t('cart.orPayFaster')}</p>
                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-gray-300 rounded-lg py-3 text-sm hover:bg-gray-50 font-medium" style={{ minHeight: '44px' }}>
                    {t('cart.applePay')}
                  </button>
                  <button className="border border-gray-300 rounded-lg py-3 text-sm hover:bg-gray-50 font-medium" style={{ minHeight: '44px' }}>
                    {t('cart.paypal')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
