# Founderspace — Organized Next.js 14 project

Converted from the uploaded React/Vite website. The **existing sections, visual CSS and interactions** are retained, but the original monolithic files are split into individual `.tsx` section files.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build with `npm run build`.

## Sections

`components/all-components/` contains **one file per section**, including `navbar.tsx`, `hero.tsx`, `about.tsx`, `sponsors.tsx`, `value.tsx`, `audience.tsx`, `agenda.tsx`, `venue.tsx`, `hosts.tsx`, `pricing.tsx`, `faq.tsx`, `footer.tsx`. `scroll-reveals.tsx` retains the existing scroll-reveal observer. `index.tsx` imports and assembles sections, and does not contain section markup.

`components/` is at project root, **outside** `src/`. Reusable Button, Badge and Card live in `components/ui/`. The `src/assets/` folders are reserved for media. A bundled venue fallback image is imported from `src/assets/images/`.

## External images and video

The original website uses **remote Pexels and Unsplash image URLs** and a Pexels-hosted hero video. They are preserved to avoid changing the design, because these external media could not be downloaded in this environment. They require network access at runtime, and the video URL may require verification. If you need *every* media asset imported locally under `src/assets/`, provide the media files (including video) so they can be bundled; the current ZIP does **not** claim to have downloaded them.

The uploaded site has placeholder hosts, pricing, sponsors, email and venue details. They are still placeholders, not verified event details. The registration modal is a local preview and does not submit data.

## Notes

The original loading intro was not rendered in the uploaded site's active `App` and remains omitted. The uploaded CSS includes the same section reveal transitions and responsive styles.
