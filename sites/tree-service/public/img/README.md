# Photo slots

Every image is free for commercial use with no attribution required (Pexels
License or Unsplash License). Source records kept here for auditability. Files
are cropped to the slot aspect and kept under ~250KB.

| Slot | File | Source | License |
| --- | --- | --- | --- |
| hero | `hero.webp` | https://www.pexels.com/photo/arborist-climbing-tall-bare-tree-in-winter-35089307/ | Pexels License — commercial use, no attribution required |
| quote | `quote.webp` | https://www.pexels.com/photo/tranquil-tree-lined-suburban-street-in-summer-32481181/ | Pexels License — commercial use, no attribution required |
| proof | `proof.webp` | https://www.pexels.com/photo/worker-operating-wood-chipper-in-suburban-setting-34581908/ | Pexels License — commercial use, no attribution required |
| removal | `removal.webp` | https://www.pexels.com/photo/a-man-cutting-a-tree-6218318/ | Pexels License — commercial use, no attribution required |
| trimming | `trimming.webp` | https://www.pexels.com/photo/a-firefighter-cutting-a-tree-branch-7812842/ | Pexels License — commercial use, no attribution required |
| brush-cleanup | `service-brush-cleanup.jpg` | https://unsplash.com/photos/tree-chipper-processing-a-large-evergreen-tree-on-street-iPKoGMksfAE | Unsplash License — commercial use, no attribution required |
| storm-cleanup | `storm-cleanup.webp` | https://www.pexels.com/photo/uprooted-tree-after-natural-disaster-on-street-32394147/ | Pexels License — commercial use, no attribution required |

## Text legibility

`hero` and `quote` sit under white text. Hero.astro paints an opaque `--deep`
band over the left 30% of the hero plus a .72 scrim across the rest, and a flat
.62 scrim over the quote backdrop, so both hold white text. Both source images
were also chosen to be low-contrast and quiet where the text lands.

`npm run build` prints every slot still on a placeholder. To find them in source
or built output: `grep -r "IMAGE SLOT"`.
