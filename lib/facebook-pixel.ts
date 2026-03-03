/**
 * Meta Facebook Pixel – event helpers.
 * Fires client-side Pixel and (when configured) server-side Conversions API with same event_id for deduplication.
 * @see https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking
 * @see https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events
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

function getEventId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

function getMetaCookies(): { fbc?: string; fbp?: string } {
  if (typeof document === 'undefined' || !document.cookie) return {}
  const fbp = document.cookie.split('; ').find((row) => row.startsWith('_fbp='))?.split('=')[1]
  const fbc = document.cookie.split('; ').find((row) => row.startsWith('_fbc='))?.split('=')[1]
  return { fbp, fbc }
}

function sendToCAPI(
  eventName: string,
  eventId: string,
  params: Record<string, unknown>
): void {
  const { fbp, fbc } = getMetaCookies()
  fetch('/api/meta-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName,
      eventId,
      eventSourceUrl: typeof window !== 'undefined' ? window.location.href : undefined,
      params,
      fbp: fbp ?? undefined,
      fbc: fbc ?? undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    }),
  }).catch(() => {})
}

/** Fire Pixel only (no CAPI). Use when you don't need server-side. */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', eventName, params)
}

/** Fire Pixel + CAPI with same event_id for deduplication. */
function trackEventWithCAPI(
  eventName: string,
  params?: Record<string, unknown>
): void {
  const eventId = getEventId()
  const payload = { ...params, eventID: eventId }
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, payload)
  }
  sendToCAPI(eventName, eventId, params ?? {})
}

export function trackViewContent(contentIds: string[], contentName?: string, value?: number, currency = 'EUR'): void {
  const params = {
    content_type: 'product',
    content_ids: contentIds,
    ...(contentName && { content_name: contentName }),
    ...(value != null && { value, currency }),
  }
  trackEventWithCAPI('ViewContent', params)
}

export function trackAddToCart(
  contentIds: string[],
  value?: number,
  currency = 'EUR',
  contentName?: string
): void {
  const params = {
    content_type: 'product',
    content_ids: contentIds,
    ...(value != null && { value, currency }),
    ...(contentName && { content_name: contentName }),
  }
  trackEventWithCAPI('AddToCart', params)
}

/** Fire on category/listing pages (e.g. /products). */
export function trackViewCategory(contentName: string, contentIds?: string[]): void {
  const params = {
    content_type: 'product_group',
    content_name: contentName,
    ...(contentIds?.length && { content_ids: contentIds }),
  }
  trackEventWithCAPI('ViewContent', params)
}

export function trackInitiateCheckout(value?: number, currency = 'EUR', numItems?: number): void {
  const params = {
    ...(value != null && { value, currency }),
    ...(numItems != null && { num_items: numItems }),
  }
  trackEventWithCAPI('InitiateCheckout', params)
}

/** Call after successful payment. For Shopify redirect checkout, Purchase is often tracked by Shopify’s Meta channel; use this if you have a custom thank-you page. */
export function trackPurchase(value: number, currency = 'EUR', contentIds?: string[], numItems?: number): void {
  const params = {
    value,
    currency,
    ...(contentIds?.length && { content_ids: contentIds, content_type: 'product' }),
    ...(numItems != null && { num_items: numItems }),
  }
  trackEventWithCAPI('Purchase', params)
}

export function trackLead(): void {
  trackEventWithCAPI('Lead', {})
}
