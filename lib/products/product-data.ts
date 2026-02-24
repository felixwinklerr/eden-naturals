export interface ProductNutrition {
  calories: number
  protein: number
  carbs: number
  fat: number
}

export interface NarrativeSection {
  titleKey?: string
  bodyKey?: string
  /** Pipe-separated bullet points, split in component via '|' */
  bulletsKey?: string
  closingKey?: string
  pullquoteKey?: string
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
  /** i18n key for the accordion summary title */
  narrativeSectionTitleKey?: string
  narrativeSections?: NarrativeSection[]
}

export const productData: Record<string, ProductInfo> = {
  'erbsenprotein': {
    title: 'Erbsenprotein',
    handle: 'erbsenprotein',
    tagline: 'Erbsenprotein neu gedacht.',
    description: `Löst sich sofort und vollständig auf – einfach einrühren, kein Shaker nötig.

Wir wandeln sandige, erdige Noten in ein sauberes Mundgefühl – ohne jegliche Aromastoffe oder Süßungs-Chemie.

Durch den Erhalt der nativen Proteinstruktur: maximale Darmruhe und Sättigungseffekt.

🌿 Rein pflanzlich. Vollständig vegan. Kein Gel, kein Schleim, kein Maskieren.`,
    keyPoints: [
      'Löst sich sofort und vollständig auf – ohne Shaker',
      'Sauberes Mundgefühl – ohne Aromastoffe oder Süßungs-Chemie',
      'Maximale Darmruhe & Sättigungseffekt durch native Proteinstruktur',
      '100% pflanzlich, 100% vegan'
    ],
    whatMakesItSpecial: {
      title: 'Was es besonders macht',
      description: `Wir wandeln sandige, erdige Noten in ein sauberes Mundgefühl ohne jegliche Aromastoffe oder Süßungs-Chemie.

Durch den Erhalt der nativen Proteinstruktur: maximale Darmruhe und Sättigungseffekt.`
    },
    result: [
      'Löst sich sofort und vollständig auf – ohne Shaker',
      'Sauberes Mundgefühl – ohne Aromastoffe oder Süßungs-Chemie',
      'Maximale Darmruhe & Sättigungseffekt durch native Proteinstruktur',
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
    tagline: 'Reisprotein neu gedacht.',
    description: `Löst sich sofort und vollständig auf – einfach einrühren, kein Shaker nötig.

Wir wandeln sandige, erdige Noten in ein sauberes Mundgefühl – ohne jegliche Aromastoffe oder Süßungs-Chemie.

Durch den Erhalt der nativen Proteinstruktur: maximale Darmruhe und Sättigungseffekt.

🌿 Rein pflanzlich. Vollständig vegan. Allergenarm. Kein Gel, kein Schleim, kein Maskieren.`,
    keyPoints: [
      'Löst sich sofort und vollständig auf – ohne Shaker',
      'Sauberes Mundgefühl – ohne Aromastoffe oder Süßungs-Chemie',
      'Maximale Darmruhe & Sättigungseffekt durch native Proteinstruktur',
      '100% pflanzlich, 100% vegan, hypoallergen'
    ],
    whatMakesItSpecial: {
      title: 'Was es besonders macht',
      description: `Wir wandeln sandige, erdige Noten in ein sauberes Mundgefühl ohne jegliche Aromastoffe oder Süßungs-Chemie.

Durch den Erhalt der nativen Proteinstruktur: maximale Darmruhe und Sättigungseffekt.`
    },
    result: [
      'Löst sich sofort und vollständig auf – ohne Shaker',
      'Sauberes Mundgefühl – ohne Aromastoffe oder Süßungs-Chemie',
      'Maximale Darmruhe & Sättigungseffekt durch native Proteinstruktur',
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
    tagline: 'Pflanzliches Protein neu gedacht.',
    description: `Löst sich sofort und vollständig auf – einfach einrühren, kein Shaker nötig.

Wir wandeln sandige, erdige Noten in ein sauberes Mundgefühl – ohne jegliche Aromastoffe oder Süßungs-Chemie.

Durch den Erhalt der nativen Proteinstruktur: maximale Darmruhe und Sättigungseffekt.

🌿 Rein pflanzlich. Vollständig vegan. Kein Gel, kein Schleim, kein Maskieren.`,
    keyPoints: [
      'Löst sich sofort und vollständig auf – ohne Shaker',
      'Sauberes Mundgefühl – ohne Aromastoffe oder Süßungs-Chemie',
      'Maximale Darmruhe & Sättigungseffekt durch native Proteinstruktur',
      '100% pflanzlich, 100% vegan'
    ],
    whatMakesItSpecial: {
      title: 'Was es besonders macht',
      description: `Wir wandeln sandige, erdige Noten in ein sauberes Mundgefühl ohne jegliche Aromastoffe oder Süßungs-Chemie.

Durch den Erhalt der nativen Proteinstruktur: maximale Darmruhe und Sättigungseffekt.`
    },
    result: [
      'Löst sich sofort und vollständig auf – ohne Shaker',
      'Sauberes Mundgefühl – ohne Aromastoffe oder Süßungs-Chemie',
      'Maximale Darmruhe & Sättigungseffekt durch native Proteinstruktur',
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
    tagline: 'Whey Protein neu gedacht.',
    description: `Optimale Löslichkeit: klumpenfrei durch leichte Scherkraft (kurzes Schütteln im Shaker).

Unser WPC 80 bleibt roh, unverändert und frei von Lecithin oder Instantisierung – für ein sauberes Mundgefühl und maximale Wirkung.

Kein Gel, kein Schleim, kein Maskieren. Nur ehrliche Funktionalität.`,
    keyPoints: [
      'Optimale Löslichkeit: klumpenfrei durch leichte Scherkraft (kurzes Schütteln im Shaker)',
      'Kein Klumpen, kein Film, kein schweres Mundgefühl',
      'Angenehm neutral im Geschmack'
    ],
    whatMakesItSpecial: {
      title: 'Was es besonders macht',
      description: `Optimale Löslichkeit: Unser WPC 80 löst sich klumpenfrei durch leichte Scherkraft – kurzes Schütteln im Shaker genügt. Ohne Lecithin, ohne chemische Instantisierung.`
    },
    result: [
      'Optimale Löslichkeit: klumpenfrei durch leichte Scherkraft (kurzes Schütteln im Shaker)',
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
    },
    narrativeSectionTitleKey: 'product.wpcNarrative.sectionTitle',
    narrativeSections: [
      {
        bodyKey: 'product.wpcNarrative.introBody',
        bulletsKey: 'product.wpcNarrative.introBullets',
        closingKey: 'product.wpcNarrative.introClosing',
      },
      {
        titleKey: 'product.wpcNarrative.whyTitle',
        bodyKey: 'product.wpcNarrative.whyBody',
        bulletsKey: 'product.wpcNarrative.whyBullets',
        closingKey: 'product.wpcNarrative.whyClosing',
      },
      {
        titleKey: 'product.wpcNarrative.physicalTitle',
        bodyKey: 'product.wpcNarrative.physicalBody',
        bulletsKey: 'product.wpcNarrative.physicalBullets',
        closingKey: 'product.wpcNarrative.physicalClosing',
      },
      {
        titleKey: 'product.wpcNarrative.feelTitle',
        bulletsKey: 'product.wpcNarrative.feelBullets',
        pullquoteKey: 'product.wpcNarrative.feelPullquote',
      },
      {
        titleKey: 'product.wpcNarrative.categoryTitle',
        bodyKey: 'product.wpcNarrative.categoryBody',
        closingKey: 'product.wpcNarrative.categoryClosing',
      },
    ],
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
