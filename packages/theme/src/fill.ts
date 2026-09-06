/** Replace {city}, {phone}, {brand}... in copy. Unknown tokens are left alone. */
export function fill(text: string, vars: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (whole, key) => vars[key] ?? whole)
}

/** tel: href — strips everything a dialer does not want. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`
