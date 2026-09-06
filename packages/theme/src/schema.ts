import type { City, Faq, SiteConfig } from './config.ts'
import { pageVars } from './config.ts'
import { fill } from './fill.ts'

/**
 * Service + areaServed. Deliberately no LocalBusiness / PostalAddress / geo:
 * this is a referral site with no physical location, and inventing one is
 * both a schema violation and a legal problem.
 */
export function serviceSchema(config: SiteConfig, city?: City) {
  const areas = city ? [city] : config.cities
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: city ? `${config.niche} in ${city.name}, IN` : `${config.niche} in Northwest Indiana`,
    serviceType: config.serviceType,
    provider: { '@type': 'Organization', name: config.brand, url: `https://${config.domain}` },
    areaServed: areas.map((c) => ({
      '@type': 'City',
      name: c.name,
      containedInPlace: { '@type': 'State', name: 'Indiana' },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${config.niche} services`,
      itemListElement: config.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.text },
      })),
    },
  }
}

export function faqSchema(faqs: Faq[], config: SiteConfig, city?: City) {
  const vars = pageVars(config, city)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: fill(f.q, vars),
      acceptedAnswer: { '@type': 'Answer', text: fill(f.a, vars) },
    })),
  }
}
