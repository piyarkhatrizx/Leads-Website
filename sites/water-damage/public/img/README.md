# Photo slots

Every image on this site is defined in `site.config.ts` — under `images`
(hero, proof) and on each entry in `services`.

An empty `src` renders a labelled placeholder on the page naming the expected
filename, the shot required and the target size. To go live:

1. Drop the file here, e.g. `hero.jpg`.
2. Set `src: '/img/hero.jpg'` on that slot in `site.config.ts`.

`npm run build` prints every slot still on a placeholder. To find them in
source or built output: `grep -r "IMAGE SLOT"`.
