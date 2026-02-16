import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: string, currencyCode: string = 'EUR'): string {
  const price = parseFloat(amount)
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: currencyCode,
  }).format(price)
}

export function formatPricePerKg(amount: string, weightKg: number = 1): string {
  const price = parseFloat(amount)
  const pricePerKg = price / weightKg
  return formatPrice(pricePerKg.toString())
}

/**
 * Extracts weight in kg from variant title (e.g., "500g" -> 0.5, "1kg" -> 1, "1.5kg" -> 1.5)
 */
export function extractWeightFromVariantTitle(title: string): number {
  // Match patterns like "500g", "1kg", "1.5kg", "0.5kg", etc.
  const kgMatch = title.match(/(\d+\.?\d*)\s*kg/i)
  if (kgMatch) {
    return parseFloat(kgMatch[1])
  }
  
  const gMatch = title.match(/(\d+\.?\d*)\s*g(?!\w)/i)
  if (gMatch) {
    return parseFloat(gMatch[1]) / 1000
  }
  
  // Default to 1kg if no weight found
  return 1
}

/**
 * Calculates price per kg from variant price and title
 */
export function calculatePricePerKg(priceAmount: string, variantTitle: string): string {
  const price = parseFloat(priceAmount)
  const weightKg = extractWeightFromVariantTitle(variantTitle)
  const pricePerKg = price / weightKg
  return formatPrice(pricePerKg.toString())
}
