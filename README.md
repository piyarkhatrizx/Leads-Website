# Northwest Indiana lead-gen sites

Astro, static output, deployed to Cloudflare Pages. One authority domain per
niche: a hub page plus per-city pages.

```
packages/theme      shared components, layouts, tokens, JSON-LD helpers
sites/tree-service  219 Tree Service  (reference implementation)
sites/water-damage  Region Restoration
```

## Everything lives in the config

`sites/<site>/site.config.ts` holds every brand, phone, city, service, FAQ and
content value. The page files under `src/pages/` are three thin wrappers and
should stay that way — if you find yourself writing markup in a site, the
component belongs in `packages/theme` instead.

Adding a city is one entry in `cities`; `[city].astro` generates the page.

## Adding a third niche

```sh
cp -r sites/tree-service sites/new-niche
rm -rf sites/new-niche/dist
# edit site.config.ts (brand, accent, cities, services, stubs, faqs)
# edit package.json name + astro.config.mjs site url
npm install
```

## Photos

Every image is a slot in `site.config.ts` — `images.hero`, `images.proof` and
`image` on each service. An empty `src` renders a labelled placeholder on the
page naming the file to add, the shot required and the target size; setting
`src` swaps in the real `<img>`.

```sh
npm run build                      # prints every slot still on a placeholder
grep -ro "IMAGE SLOT [^ ]*" sites  # every slot in source or built output
```

Files go in `sites/<site>/public/img/`.

## Placeholders

`{{PHONE}}` and `{{FORM_ENDPOINT}}` are filled in before launch. Local builds
warn about unfilled ones; a build with `CF_PAGES` or `STRICT_PLACEHOLDERS` set
fails instead, so a live site can't ship without a working number or form.

## Commands

```sh
npm run dev                       # tree-service dev server
npm run build                     # build every site
npm run build -w @leads/tree-service
npm test                          # theme unit tests
```

## Cloudflare Pages

One project per site, same repo:

| setting | value |
|---|---|
| root directory | `sites/tree-service` |
| build command | `npm run build` |
| output directory | `dist` |

## Schema

`Service` + `areaServed` + `FAQPage` only. No `LocalBusiness`, no address, no
geo — these are referral sites with no physical location.
