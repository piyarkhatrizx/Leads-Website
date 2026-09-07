# Image citations — 219 Tree Service

Every photo on this site is free for commercial use with **no attribution
required**. Nothing here is scraped, watermarked, stock-preview, or
"free with trial". Sources are recorded so the licence can be re-verified later.

Files live in `sites/tree-service/public/img/`.
Slot definitions live in `sites/tree-service/site.config.ts`.

## Licences used

| Licence | Terms | Text |
| --- | --- | --- |
| Pexels License | Free for commercial use, no attribution required, no model release implied | https://www.pexels.com/license/ |
| Unsplash License | Free for commercial use, no permission or attribution required | https://unsplash.com/license |

## Images

| Slot | File | Dimensions | Size | Source | Licence |
| --- | --- | --- | --- | --- | --- |
| hero | `hero.webp` | 2000x1200 | 238 KB | https://www.pexels.com/photo/arborist-climbing-tall-bare-tree-in-winter-35089307/ | Pexels License |
| quote | `quote.webp` | 1000x1333 | 239 KB | https://www.pexels.com/photo/tranquil-tree-lined-suburban-street-in-summer-32481181/ | Pexels License |
| proof | `proof.webp` | 1400x1050 | 231 KB | https://www.pexels.com/photo/worker-operating-wood-chipper-in-suburban-setting-34581908/ | Pexels License |
| services.removal | `removal.webp` | 1000x750 | 38 KB | https://www.pexels.com/photo/a-man-cutting-a-tree-6218318/ | Pexels License |
| services.trimming | `trimming.webp` | 1000x750 | 161 KB | https://www.pexels.com/photo/a-firefighter-cutting-a-tree-branch-7812842/ | Pexels License |
| services.brush-cleanup | `service-brush-cleanup.jpg` | 1000x750 | 216 KB | https://unsplash.com/photos/tree-chipper-processing-a-large-evergreen-tree-on-street-iPKoGMksfAE | Unsplash License |
| services.storm-cleanup | `storm-cleanup.webp` | 1000x750 | 156 KB | https://www.pexels.com/photo/uprooted-tree-after-natural-disaster-on-street-32394147/ | Pexels License |

## Processing

Originals were downloaded from each provider's own CDN, cropped to the slot
aspect ratio, and re-encoded for web. WebP for the Pexels set; JPG for
`service-brush-cleanup.jpg`. All files are under ~250 KB.

`hero` and `quote` sit under white text. `Hero.astro` paints an opaque `--deep`
band over the left 30% of the hero plus a .72 scrim across the rest, and a flat
.62 scrim over the quote backdrop, so both hold white text. Both were also
chosen to be quiet and low-contrast where the text lands.

## Known compromises

- **hero** — the brief asked for a house in frame. Every wide "climber roped in
  with a house visible" shot in the free pools was European (EU plates,
  fire-brigade livery) or tropical, so this is a wide, Midwest-plausible
  bare-tree climber with no house. Replace if a better frame turns up.
- **services.brush-cleanup** — genuine residential curbside chipping job
  (sidewalk, tree lawn, cut rounds, cones, live chipper), but shot top-down from
  a drone and no crew is visible. It reads differently from the other three
  eye-level service photos. A real eye-level crew photo would be better.
- **services.brush-cleanup** could not reuse the Pexels chipper photo, because
  the `proof` slot already uses it.
