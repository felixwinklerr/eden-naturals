/**
 * Maps Shopify product handle to productTitles i18n key (no hyphens in key).
 */
const HANDLE_TO_KEY: Record<string, string> = {
  'wpc-80': 'wpc80',
  erbsenprotein: 'erbsenprotein',
  reisprotein: 'reisprotein',
  'vegan-pea-rice-blend': 'veganPeaRiceBlend',
}

export function getProductTitleKey(handle: string): string {
  return HANDLE_TO_KEY[handle] ?? handle.replace(/-/g, '')
}

export function getProductTitleKeyOrNull(handle: string): string | null {
  return HANDLE_TO_KEY[handle] ?? null
}
