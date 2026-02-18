'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { formatPrice, calculatePricePerKg } from '@/lib/utils'
import { AddToCartButton } from './AddToCartButton'
import { StickyAddToCart } from './StickyAddToCart'
import { ProductComparison } from './ProductComparison'
import { ProductSocialProof } from './ProductSocialProof'
import { ProductCrossSell } from './ProductCrossSell'
import { getProductData, type ProductInfo } from '@/lib/products/product-data'
import { useTranslations } from '@/contexts/LocaleContext'
import { trackViewContent } from '@/lib/facebook-pixel'

interface ProductDetailProps {
  product: any
  crossSellProducts?: Array<{
    handle: string
    title: string
    images?: { edges: Array<{ node: { url: string; altText?: string | null } }> }
  }>
}

export function ProductDetail({ product, crossSellProducts }: ProductDetailProps) {
  const t = useTranslations()
  const allImages = product.images?.edges || []
  const firstImage = allImages[0]?.node
  const firstVariant = product.variants?.edges?.[0]?.node
  const [selectedVariant, setSelectedVariant] = useState(firstVariant)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const price = selectedVariant?.price?.amount || product.priceRange?.minVariantPrice?.amount
  const currencyCode = selectedVariant?.price?.currencyCode || 'EUR'
  const variantTitle = selectedVariant?.title || product.variants?.edges?.[0]?.node?.title || '1kg'

  const pricePerKgFormatted = calculatePricePerKg(price, variantTitle)

  const productData: ProductInfo | null = getProductData(product.handle)
  const enrichedData = productData || {
    title: product.title,
    handle: product.handle,
    tagline: '',
    description: product.description || '',
    keyPoints: [],
    whatMakesItSpecial: { title: 'Was es besonders macht', description: '' },
    result: [],
    shortSummary: '',
    info: [],
    nutrition: null,
    isVegan: false,
    isHypoallergenic: false
  }

  const handleVariantChange = (variantId: string) => {
    const variant = product.variants.edges.find((v: any) => v.node.id === variantId)
    if (variant) setSelectedVariant(variant.node)
  }

  useEffect(() => {
    trackViewContent(
      [product.id || product.handle],
      product.title,
      price ? parseFloat(String(price)) : undefined,
      currencyCode
    )
  }, [product.id, product.handle, product.title, price, currencyCode])

  const MixingVideo = () => (
    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
      <video
        src="/mixing-demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        aria-label={t('product.mixingDemo')}
      >
        <source src="/mixing-demo.mp4" type="video/mp4" />
      </video>
    </div>
  )

  return (
    <>
      {/* ===== ABOVE THE FOLD ===== */}
      <div className="py-4 md:py-12 lg:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">

            {/* LEFT: Image Gallery (desktop only shows video here) */}
            <div>
              {/* Main Image – kompakter auf Mobile (4:3 statt square) */}
              {allImages.length > 0 ? (
                <div className="aspect-[4/3] md:aspect-square relative rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={allImages[activeImage]?.node?.url || firstImage?.url}
                    alt={allImages[activeImage]?.node?.altText || product.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] md:aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-text-muted text-sm">{t('product.productImage')}</span>
                </div>
              )}

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-2 mt-2 md:mt-3 overflow-x-auto pb-1">
                  {allImages.map((img: any, index: number) => (
                    <button
                      key={img.node.id || index}
                      onClick={() => setActiveImage(index)}
                      className={`flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        activeImage === index ? 'border-accent' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={img.node.url}
                        alt={img.node.altText || `${product.title} ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Video nur auf Desktop in der Bildspalte */}
              <div className="hidden md:block mt-4">
                <MixingVideo />
              </div>
            </div>

            {/* RIGHT: Purchase Block */}
            <div>
              {/* Title */}
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-text mb-1 md:mb-2 leading-tight">
                {enrichedData.title}
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {enrichedData.isVegan && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                    {t('product.veganBadge')}
                  </span>
                )}
                {enrichedData.isHypoallergenic && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                    {t('product.hypoBadge')}
                  </span>
                )}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-text text-xs font-medium">
                  {t('product.mechanicallyRefined')}
                </span>
              </div>

              {/* Preis + Social Proof Micro-Signal */}
              <div className="mb-3 md:mb-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl md:text-3xl font-bold text-accent">
                    {formatPrice(price, currencyCode)}
                  </span>
                  <span className="text-sm md:text-base text-text-light">
                    {t('product.priceFor', { variant: variantTitle })}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-xs text-text-muted">{pricePerKgFormatted} {t('product.perKg')}</p>
                  {/* Social Proof Micro-Signal */}
                  <span className="text-xs text-text-muted">•</span>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400 text-xs leading-none">★★★★★</span>
                    <span className="text-xs text-text-muted">(4.9)</span>
                  </div>
                </div>
              </div>

              {/* 3 Benefit Bullets – kompakt auf Mobile */}
              <div className="space-y-1.5 md:space-y-2.5 mb-4 md:mb-5 p-3 md:p-0 bg-gray-50 md:bg-transparent rounded-lg md:rounded-none">
                <div className="flex items-start gap-2">
                  <span className="text-accent flex-shrink-0 text-sm md:text-lg mt-0.5">✓</span>
                  <span className="text-text text-xs md:text-base font-medium leading-snug">
                    {t('product.twoIngredientsBullet')}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent flex-shrink-0 text-sm md:text-lg mt-0.5">✓</span>
                  <span className="text-text text-xs md:text-base font-medium leading-snug">
                    {enrichedData.isVegan ? t('product.noShakerBulletVegan') : t('product.noShakerBulletWhey')}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent flex-shrink-0 text-sm md:text-lg mt-0.5">✓</span>
                  <span className="text-text text-xs md:text-base font-medium leading-snug">
                    {t('product.proteinBullet', { protein: enrichedData.nutrition ? String(enrichedData.nutrition.protein) : '80' })}
                  </span>
                </div>
              </div>

              {/* Variant Selector */}
              {product.variants?.edges?.length > 1 && (
                <div className="mb-3 md:mb-4">
                  <label className="block text-sm font-semibold text-text mb-1.5">{t('product.size')}</label>
                  <select
                    onChange={(e) => handleVariantChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent"
                    style={{ minHeight: '44px' }}
                  >
                    {product.variants.edges.map((variant: any) => (
                      <option key={variant.node.id} value={variant.node.id}>
                        {variant.node.title} – {formatPrice(variant.node.price.amount, variant.node.price.currencyCode)}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Menge – nur auf Desktop sichtbar (auf Mobile via Warenkorb-Drawer) */}
              <div className="hidden md:block mb-4">
                <label className="block text-sm font-semibold text-text mb-2">{t('product.quantity')}</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 border border-gray-300 rounded-lg flex items-center justify-center text-lg hover:bg-gray-50 transition-colors"
                    style={{ minWidth: '44px', minHeight: '44px' }}
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 border border-gray-300 rounded-lg flex items-center justify-center text-lg hover:bg-gray-50 transition-colors"
                    style={{ minWidth: '44px', minHeight: '44px' }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart – volle Breite, prominent */}
              <div className="mb-3 md:mb-4">
                <AddToCartButton
                  variantId={selectedVariant?.id}
                  available={selectedVariant?.availableForSale}
                  quantity={quantity}
                />
              </div>

              {/* Micro Trust Badges */}
              <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                <div className="text-center p-2 rounded-lg bg-gray-50">
                  <span className="block text-sm md:text-base mb-0.5">🚚</span>
                  <span className="text-[10px] md:text-xs text-text-light leading-tight block">{t('product.freeShippingBadge')}</span>
                </div>
                <div className="text-center p-2 rounded-lg bg-gray-50">
                  <span className="block text-sm md:text-base mb-0.5">🛡️</span>
                  <span className="text-[10px] md:text-xs text-text-light leading-tight block">{t('product.guaranteeBadge')}</span>
                </div>
                <div className="text-center p-2 rounded-lg bg-gray-50">
                  <span className="block text-sm md:text-base mb-0.5">🔬</span>
                  <span className="text-[10px] md:text-xs text-text-light leading-tight block">{t('product.cleanLabelBadge')}</span>
                </div>
              </div>

              {/* Shipping Note */}
              <p className="text-xs text-text-muted mt-2 md:mt-3 text-center">
                {t('product.shippingNote')}
              </p>

              {/* Video auf Mobile – direkt nach CTA, vor Scroll-Sektionen */}
              <div className="md:hidden mt-4">
                <MixingVideo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCROLL SECTIONS ===== */}
      <div className="container-custom mt-6 md:mt-14">

        {/* Section 1: Was Macht es Besonders */}
        <div className="mb-6 md:mb-12">
          <details className="bg-gray-50 rounded-xl overflow-hidden group" open>
            <summary className="font-bold text-text cursor-pointer text-base md:text-xl p-4 md:p-6 flex items-center justify-between" style={{ minHeight: '52px' }}>
              <span>{t('product.whatMakesSpecial')}</span>
              <span className="text-text-light text-sm transition-transform group-open:rotate-180 ml-4 flex-shrink-0">▼</span>
            </summary>
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-100">
                  <span className="text-xl md:text-2xl mb-1.5 md:mb-2 block">⚙️</span>
                  <h4 className="font-semibold text-text text-xs md:text-base mb-1">{t('product.mechanicallyRefinedCard')}</h4>
                  <p className="text-text-light text-xs">{t('product.notChemical')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-100">
                  <span className="text-xl md:text-2xl mb-1.5 md:mb-2 block">💧</span>
                  <h4 className="font-semibold text-text text-xs md:text-base mb-1">{t('product.dissolvesFast')}</h4>
                  <p className="text-text-light text-xs">
                    {enrichedData.isVegan ? t('product.dissolvesDescVegan') : t('product.dissolvesDescWhey')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-100">
                  <span className="text-xl md:text-2xl mb-1.5 md:mb-2 block">🧾</span>
                  <h4 className="font-semibold text-text text-xs md:text-base mb-1">{t('product.twoIngredientsCard')}</h4>
                  <p className="text-text-light text-xs">{t('product.twoIngredientsDesc')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-100">
                  <span className="text-xl md:text-2xl mb-1.5 md:mb-2 block">😌</span>
                  <h4 className="font-semibold text-text text-xs md:text-base mb-1">{t('product.stomachCard')}</h4>
                  <p className="text-text-light text-xs">{t('product.stomachDesc')}</p>
                </div>
              </div>

              {enrichedData.whatMakesItSpecial?.description && (
                <div className="bg-white rounded-lg p-3 md:p-5 border border-gray-100">
                  <p className="text-text-light text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {enrichedData.whatMakesItSpecial.description}
                  </p>
                  {enrichedData.shortSummary && (
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                      <p className="text-text font-semibold text-sm">{t('product.shortSummary')}</p>
                      <p className="text-text-light text-sm mt-1 whitespace-pre-line">
                        {enrichedData.shortSummary}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </details>
        </div>

        {/* Section 2: Zutaten & Nährwerte */}
        <div className="mb-6 md:mb-12">
          <details className="bg-gray-50 rounded-xl overflow-hidden group">
            <summary className="font-bold text-text cursor-pointer text-base md:text-xl p-4 md:p-6 flex items-center justify-between" style={{ minHeight: '52px' }}>
              <span>{t('product.ingredientsTitle')}</span>
              <span className="text-text-light text-sm transition-transform group-open:rotate-180 ml-4 flex-shrink-0">▼</span>
            </summary>
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-semibold text-text mb-2 md:mb-3 text-sm md:text-base">{t('product.ingredientsLabel')}</h4>
                  {enrichedData.info && enrichedData.info.length > 0 ? (
                    <ul className="space-y-1.5 md:space-y-2">
                      {enrichedData.info.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-text-light text-sm">
                          <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-text-light text-sm">{t('product.ingredientsLoading')}</p>
                  )}
                </div>

                {enrichedData.nutrition && (
                  <div>
                    <h4 className="font-semibold text-text mb-2 md:mb-3 text-sm md:text-base">{t('product.nutritionPer100')}</h4>
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="px-4 py-2.5 text-text-light">{t('product.calories')}</td>
                            <td className="px-4 py-2.5 text-right font-semibold text-text">{enrichedData.nutrition.calories} kcal</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-accent bg-opacity-5">
                            <td className="px-4 py-2.5 text-text font-medium">{t('product.protein')}</td>
                            <td className="px-4 py-2.5 text-right font-bold text-accent">{enrichedData.nutrition.protein}g</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="px-4 py-2.5 text-text-light">{t('product.carbs')}</td>
                            <td className="px-4 py-2.5 text-right font-semibold text-text">{enrichedData.nutrition.carbs}g</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2.5 text-text-light">{t('product.fat')}</td>
                            <td className="px-4 py-2.5 text-right font-semibold text-text">{enrichedData.nutrition.fat}g</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </details>
        </div>

        {/* Section 3: Wie Verwenden */}
        <div className="mb-6 md:mb-12">
          <details className="bg-gray-50 rounded-xl overflow-hidden group">
            <summary className="font-bold text-text cursor-pointer text-base md:text-xl p-4 md:p-6 flex items-center justify-between" style={{ minHeight: '52px' }}>
              <span>{t('product.howToUse')}</span>
              <span className="text-text-light text-sm transition-transform group-open:rotate-180 ml-4 flex-shrink-0">▼</span>
            </summary>
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-5">
                <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-100">
                  <span className="text-2xl md:text-3xl block mb-1.5 md:mb-2">1️⃣</span>
                  <h4 className="font-semibold text-text text-xs md:text-sm mb-1">{t('product.step1')}</h4>
                  <p className="text-text-light text-[10px] md:text-xs">{t('product.step1Desc')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-100">
                  <span className="text-2xl md:text-3xl block mb-1.5 md:mb-2">2️⃣</span>
                  <h4 className="font-semibold text-text text-xs md:text-sm mb-1">{t('product.step2')}</h4>
                  <p className="text-text-light text-[10px] md:text-xs">{t('product.step2Desc')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-100">
                  <span className="text-2xl md:text-3xl block mb-1.5 md:mb-2">3️⃣</span>
                  <h4 className="font-semibold text-text text-xs md:text-sm mb-1">
                    {enrichedData.isVegan ? t('product.step3Vegan') : t('product.step3Whey')}
                  </h4>
                  <p className="text-text-light text-[10px] md:text-xs">
                    {enrichedData.isVegan ? t('product.step3DescVegan') : t('product.step3DescWhey')}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-100">
                <p className="text-text-light text-sm leading-relaxed">
                  <strong className="text-text">{t('product.timing')}</strong> {t('product.timingText')}
                </p>
                <p className="text-text-light text-sm leading-relaxed mt-2">
                  <strong className="text-text">{t('product.tip')}</strong> {t('product.tipText')}
                </p>
              </div>
            </div>
          </details>
        </div>

        {/* Section 4: Mini Comparison Table */}
        <ProductComparison />

        {/* Section 5: Social Proof */}
        <ProductSocialProof />

        {/* Section 6: Risk Reversal / Garantie */}
        <div className="mb-6 md:mb-12">
          <div className="bg-accent rounded-xl p-5 md:p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <span className="text-2xl md:text-4xl block mb-2 md:mb-3">🛡️</span>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                {t('product.guaranteeSection')}
              </h3>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base opacity-95 mb-4 md:mb-6">
                <div>
                  <p className="font-semibold text-white mb-0.5 md:mb-1">{t('product.guaranteeTesterLabel')}</p>
                  <p className="opacity-90 leading-relaxed">{t('product.guaranteeTester')}</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-0.5 md:mb-1">{t('product.guaranteeBulkLabel')}</p>
                  <p className="opacity-90 leading-relaxed">{t('product.guaranteeBulk')}</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-0.5 md:mb-1">{t('product.guaranteeRepeatLabel')}</p>
                  <p className="opacity-90 leading-relaxed">{t('product.guaranteeRepeat')}</p>
                </div>
              </div>
              <AddToCartButton
                variantId={selectedVariant?.id}
                available={selectedVariant?.availableForSale}
                quantity={quantity}
              />
            </div>
          </div>
        </div>

        {/* Section 7: Cross-sells */}
        <ProductCrossSell currentHandle={product.handle} crossSellProducts={crossSellProducts} />
      </div>

      {/* Sticky Mobile Add to Cart */}
      <StickyAddToCart
        price={price}
        currencyCode={currencyCode}
        variantId={selectedVariant?.id}
        available={selectedVariant?.availableForSale}
        quantity={quantity}
        title={enrichedData.title}
      />
    </>
  )
}
