export interface ProductNutrition {
  calories: number
  protein: number
  carbs: number
  fat: number
}

export interface ProductInfo {
  title: string
  handle: string
  tagline: string
  description: string
  keyPoints: string[]
  whatMakesItSpecial: {
    title: string
    description: string
  }
  result: string[]
  shortSummary: string
  info: string[]
  nutrition: ProductNutrition
  isVegan?: boolean
  isHypoallergenic?: boolean
}

export const productData: Record<string, ProductInfo> = {
  'erbsenprotein': {
    title: 'Erbsenprotein',
    handle: 'erbsenprotein',
    tagline: '🌱 Erbsenprotein neu gedacht.',
    description: `Nicht durch Zusatzstoffe verbessert, sondern durch Systemverständnis.

Unser Erbsenprotein bleibt roh, unverändert und frei von Lecithin oder Instantisierung.

Die physikalische Grenzflächen-Modulation ordnet das Zusammenspiel von Protein, Wasser und Sensorik neu –

für ein natürlich sauberes Mundgefühl, schnelle Löslichkeit und maximale Funktion.

🌿 Rein pflanzlich. Vollständig vegan.

Kein Gel, kein Schleim, kein Maskieren.

Nur ehrliche Funktionalität.

Das Ergebnis: Protein, das wirkt – ohne sich zu verstellen.`,
    keyPoints: [
      'Löst sich schnell und gleichmäßig auf',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack',
      '100% pflanzlich, 100% vegan'
    ],
    whatMakesItSpecial: {
      title: 'Was es besonders macht',
      description: `Wir verändern nicht das Protein selbst, sondern das Verhalten des Systems aus Protein, Wasser und Mundgefühl.

Das geschieht durch physikalische Grenzflächen-Modulation – ein Prozess, bei dem sich die Stoffe besser verteilen und aneinander anpassen.`
    },
    result: [
      'Löst sich schnell und gleichmäßig auf',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack',
      '100% pflanzlich, 100% vegan'
    ],
    shortSummary: `Wir verkaufen kein „besseres Erbsenprotein".

Wir verkaufen funktionierendes, pflanzliches Protein.`,
    info: [
      'frei von Lecithin, Aromen und Farbstoff',
      '100% Pflanzliches Protein',
      'ohne Zusätze',
      'hoher Proteingehalt',
      '100% für natürlichen Muskelaufbau'
    ],
    nutrition: {
      calories: 392,
      protein: 78.5,
      carbs: 9.7,
      fat: 5.5
    },
    isVegan: true
  },
  'reisprotein': {
    title: 'Reisprotein',
    handle: 'reisprotein',
    tagline: '🌾 Reisprotein neu gedacht.',
    description: `Nicht durch Zusatzstoffe verbessert, sondern durch Systemverständnis.

Unser Reisprotein bleibt roh, unverändert und frei von Lecithin oder Instantisierung.

Die physikalische Grenzflächen-Modulation ordnet das Zusammenspiel von Protein, Wasser und Sensorik neu –

für ein natürlich sauberes Mundgefühl, schnelle Löslichkeit und maximale Funktion

🌿 Rein pflanzlich. Vollständig vegan. Allergenarm.

Kein Gel, kein Schleim, kein Maskieren.

Nur ehrliche Funktionalität.

Das Ergebnis: Protein, das wirkt – ohne sich zu verstellen.`,
    keyPoints: [
      'Löst sich schnell und gleichmäßig auf',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack',
      '100% pflanzlich, 100% vegan, hypoallergen'
    ],
    whatMakesItSpecial: {
      title: 'Was es besonders macht',
      description: `Wir verändern nicht das Protein selbst, sondern das Verhalten des Systems aus Protein, Wasser und Mundgefühl.

Das geschieht durch physikalische Grenzflächen-Modulation – ein Prozess, bei dem sich die Stoffe besser verteilen und aneinander anpassen.`
    },
    result: [
      'Löst sich schnell und gleichmäßig auf',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack',
      '100% pflanzlich, 100% vegan, hypoallergen'
    ],
    shortSummary: `Wir verkaufen kein „besseres Reisprotein".

Wir verkaufen funktionierendes, veganes Protein.`,
    info: [
      'frei von Lecithin, Aromen und Farbstoff',
      '100% Pflanzliches Protein',
      'ohne Zusätze',
      'hoher Proteingehalt',
      '100% für natürlichen Muskelaufbau'
    ],
    nutrition: {
      calories: 392,
      protein: 78.5,
      carbs: 9.7,
      fat: 5.5
    },
    isVegan: true,
    isHypoallergenic: true
  },
  'vegan-pea-rice-blend': {
    title: '70% Erbsen- & 30% Reisprotein',
    handle: 'vegan-pea-rice-blend',
    tagline: '🌱 Pflanzliches Protein neu gedacht.',
    description: `Nicht durch Zusatzstoffe verbessert, sondern durch Systemverständnis.

Unsere 70/30 Mischung aus Erbsen- und Reisprotein bleibt roh, unverändert und frei von Lecithin oder Instantisierung.

Die physikalische Grenzflächen-Modulation ordnet das Zusammenspiel von Protein, Wasser und Sensorik neu –

für ein natürlich sauberes Mundgefühl, schnelle Löslichkeit und maximale Funktion.

🌿 Rein pflanzlich. Vollständig vegan.

Kein Gel, kein Schleim, kein Maskieren.

Nur ehrliche Funktionalität.

Das Ergebnis: Protein, das wirkt – ohne sich zu verstellen.`,
    keyPoints: [
      'Löst sich schnell und gleichmäßig auf',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack',
      '100% pflanzlich, 100% vegan'
    ],
    whatMakesItSpecial: {
      title: 'Was es besonders macht',
      description: `Wir verändern nicht das Protein selbst, sondern das Verhalten des Systems aus Protein, Wasser und Mundgefühl.

Das geschieht durch physikalische Grenzflächen-Modulation – ein Prozess, bei dem sich die Stoffe besser verteilen und aneinander anpassen.`
    },
    result: [
      'Löst sich schnell und gleichmäßig auf',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack',
      '100% pflanzlich, 100% vegan'
    ],
    shortSummary: `Wir verkaufen kein „besseres pflanzliches Protein".

Wir verkaufen funktionierendes Pflanzliches Protein.`,
    info: [
      'frei von Lecithin, Aromen und Farbstoff',
      '100% Pflanzliches Protein',
      'ohne Zusätze',
      'hoher Proteingehalt',
      '100% für natürlichen Muskelaufbau'
    ],
    nutrition: {
      calories: 386,
      protein: 72.7,
      carbs: 11.0,
      fat: 6.0
    },
    isVegan: true
  },
  'wpc-80': {
    title: 'WPC 80',
    handle: 'wpc-80',
    tagline: '💪 Whey Protein neu gedacht.',
    description: `Nicht durch Zusatzstoffe verbessert, sondern durch Systemverständnis.

Unser WPC 80 bleibt roh, unverändert und frei von Lecithin oder Instantisierung.

Die physikalische Grenzflächen-Modulation ordnet das Zusammenspiel von Protein, Wasser und Sensorik neu –

für ein natürlich sauberes Mundgefühl, schnelle Löslichkeit und maximale Wirkung.

Kein Gel, kein Schleim, kein Maskieren.

Nur ehrliche Funktionalität.

Das Ergebnis: Protein, das wirkt – ohne sich zu verstellen.`,
    keyPoints: [
      'Löst sich schnell und gleichmäßig auf',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack'
    ],
    whatMakesItSpecial: {
      title: 'Was es besonders macht',
      description: `Wir verändern nicht das Protein selbst, sondern das Verhalten des Systems aus Protein, Wasser und Mundgefühl.

Das geschieht durch physikalische Grenzflächen-Modulation – ein Prozess, bei dem sich die Stoffe besser verteilen und aneinander anpassen.`
    },
    result: [
      'Löst sich schnell und gleichmäßig auf',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack'
    ],
    shortSummary: `Wir verkaufen kein „besseres Whey".

Wir verkaufen funktionierendes Protein.`,
    info: [
      'frei von Lecithin, Aromen und Farbstoff',
      '100% Whey Protein',
      'ohne Zusätze',
      'hoher Proteingehalt',
      '100% für natürlichen Muskelaufbau'
    ],
    nutrition: {
      calories: 398,
      protein: 72.7,
      carbs: 14.3,
      fat: 5.5
    }
  }
}

// Handle mapping for different URL formats (Shopify handles may differ)
const handleMapping: Record<string, string> = {
  // Shopify handles -> product data keys
  'vegan-pea-rice-blend': 'vegan-pea-rice-blend',
  'whey-natural': 'wpc-80',
  'wpc-80': 'wpc-80',
  'whey-80': 'wpc-80', // Shopify handle
  'vegan-rice': 'reisprotein',
  'reisprotein': 'reisprotein',
  'vegan-pea': 'erbsenprotein',
  'erbsenprotein': 'erbsenprotein',
}

export function getProductData(handle: string): ProductInfo | null {
  const mappedHandle = handleMapping[handle] || handle
  return productData[mappedHandle] || null
}

/** Returns up to 3 product handles for cross-sell (other than current). */
export function getCrossSellHandles(currentHandle: string): string[] {
  const mapped = handleMapping[currentHandle] || currentHandle
  return Object.values(productData)
    .filter((p) => p.handle !== mapped)
    .slice(0, 3)
    .map((p) => p.handle)
}
