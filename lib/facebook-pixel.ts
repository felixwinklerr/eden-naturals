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

export function trackAddToCart(contentIds: string[], value?: number, currency = 'EUR'): void {
  trackEvent('AddToCart', {
    content_type: 'product',
    content_ids: contentIds,
    ...(value != null && { value, currency }),
  })
}

export function trackInitiateCheckout(value?: number, currency = 'EUR', numItems?: number): void {
  trackEvent('InitiateCheckout', {
    ...(value != null && { value, currency }),
    ...(numItems != null && { num_items: numItems }),
  })
}

export function trackLead(): void {
  trackEvent('Lead')
}
