/**
 * Meta Facebook Pixel – event helpers.
 * Base code loads via FacebookPixel component in layout; call these after user actions.
 * @see https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking
 */

declare global {
  interface Window {
    fbq?: (
      action: 'track' | 'trackCustom' | 'init',
      eventName: string,
      params?: Record<string, unknown>
    ) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', eventName, params)
}

export function trackViewContent(contentIds: string[], contentName?: string, value?: number, currency = 'EUR'): void {
  trackEvent('ViewContent', {
    content_type: 'product',
    content_ids: contentIds,
    ...(contentName && { content_name: contentName }),
    ...(value != null && { value, currency }),
  })
}

export function trackAddToCart(
  contentIds: string[],
  value?: number,
  currency = 'EUR',
  contentName?: string
): void {
  trackEvent('AddToCart', {
    content_type: 'product',
    content_ids: contentIds,
    ...(value != null && { value, currency }),
    ...(contentName && { content_name: contentName }),
  })
}

/** Fire on category/listing pages (e.g. /products). */
export function trackViewCategory(contentName: string, contentIds?: string[]): void {
  trackEvent('ViewContent', {
    content_type: 'product_group',
    content_name: contentName,
    ...(contentIds?.length && { content_ids: contentIds }),
  })
}

export function trackInitiateCheckout(value?: number, currency = 'EUR', numItems?: number): void {
  trackEvent('InitiateCheckout', {
    ...(value != null && { value, currency }),
    ...(numItems != null && { num_items: numItems }),
  })
}

/** Call after successful payment. For Shopify redirect checkout, Purchase is often tracked by Shopify’s Meta channel; use this if you have a custom thank-you page. */
export function trackPurchase(value: number, currency = 'EUR', contentIds?: string[], numItems?: number): void {
  trackEvent('Purchase', {
    value,
    currency,
    ...(contentIds?.length && { content_ids: contentIds, content_type: 'product' }),
    ...(numItems != null && { num_items: numItems }),
  })
}

export function trackLead(): void {
  trackEvent('Lead')
}
