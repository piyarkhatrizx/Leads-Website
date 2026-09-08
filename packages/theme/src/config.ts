import { fill } from './fill.ts'

export type City = {
  slug: string
  name: string
  /** Per-city tracking number. Falls back to site phone. */
  phone?: string
  blurb?: string
}
/**
 * A photo that has not been sourced yet. Leave `src` empty and the page renders
 * a labelled placeholder naming the file to drop in and the shot to get.
 * Fill `src` (e.g. '/img/hero.jpg') and the same slot renders the real image.
 */
export type ImageSlot = {
  /** Public path once the file exists, e.g. '/img/hero.jpg'. Empty = placeholder. */
  src?: string
  /** Alt text. Write it now — it is the brief as much as the accessibility text. */
  alt: string
  /** What the photo has to show. This is the instruction to whoever sources it. */
  subject: string
  /** Target export size, e.g. '1600x1000'. */
  size: string
}

export type Service = { slug: string; title: string; text: string; image?: ImageSlot }
export type Faq = { q: string; a: string }
export type Stub = { title: string; body: string }

export type SiteConfig = {
  brand: string
  niche: string
  /** schema.org Service serviceType */
  serviceType: string
  domain: string
  phone: string
  formEndpoint: string
  /** Provider key identifying the destination inbox. Public by design — it ships in the HTML. */
  formAccessKey: string
  accent: string
  /** Text colour on top of accent — keep contrast >= 4.5:1. */
  accentInk: string
  /** Dark surface (header/hero/footer). Defaults to the tree-service green. */
  deep?: string
  /** Slightly lighter dark surface, used by the quote card. */
  deep2?: string
  hero: { eyebrow: string; headline: string; sub: string }
  trust: string[]
  services: Service[]
  /** Site-wide photo slots. Keys are stable ids used in the placeholder label. */
  images: Record<string, ImageSlot>
  cities: City[]
  faqs: Faq[]
  stubs: Stub[]
  disclaimer: string
}

const PLACEHOLDER = /\{\{[A-Z_]+\}\}/

/**
 * Validates a site config at build time. Placeholders are fine in dev but must
 * not reach a production build — a live page with {{PHONE}} takes no calls.
 */
export function defineSite(config: SiteConfig): SiteConfig {
  const unfilled = [
    ['phone', config.phone],
    ['formEndpoint', config.formEndpoint],
    ['formAccessKey', config.formAccessKey],
    ...config.cities.map((c) => [`cities.${c.slug}.phone`, c.phone ?? '']),
  ].filter(([, value]) => PLACEHOLDER.test(String(value)))

  const missingImages = [
    ...Object.entries(config.images).map(([id, slot]) => [`images.${id}`, slot] as const),
    ...config.services.filter((s) => s.image).map((s) => [`services.${s.slug}.image`, s.image!] as const),
  ].filter(([, slot]) => !slot.src)

  if (missingImages.length) {
    console.warn(`[theme] ${config.brand}: ${missingImages.length} photo slot(s) still placeholder — ${missingImages.map(([id]) => id).join(', ')}`)
  }

  if (unfilled.length) {
    const message = `${config.brand}: unfilled placeholders — ${unfilled.map(([k]) => k).join(', ')}`
    // Local builds warn so you can still preview; a deploy build fails loudly.
    // CF_PAGES is set by Cloudflare Pages; STRICT_PLACEHOLDERS forces it anywhere.
    const deploying = process.env.CF_PAGES || process.env.STRICT_PLACEHOLDERS
    if (deploying) throw new Error(message)
    console.warn(`[theme] ${message}`)
  }
  return config
}

/** Everything a page needs, with the right phone number already chosen. */
export function pageVars(config: SiteConfig, city?: City) {
  const phone = city?.phone || config.phone
  return { brand: config.brand, city: city?.name ?? 'Northwest Indiana', phone, niche: config.niche }
}

export const t = (text: string, config: SiteConfig, city?: City) => fill(text, pageVars(config, city))
