# Custom website sections

Every website section must have its **own** `.tsx` file in this directory.

Examples when requested: `hero.tsx`, `about.tsx`, `sponsors.tsx`, `why-join.tsx`, `audience.tsx`, `agenda.tsx`, `venue.tsx`, `hosts.tsx`, `pricing.tsx`, `faq.tsx`, `footer.tsx`.

Do **not** put multiple sections into `index.tsx`. It only imports and composes the individual sections.

When a new section is supplied, add its file here, import it into `index.tsx`, and place the newest section at the top of the preview.

No section files or demo markup are generated until the user supplies the section designs.

The `components/` folder must remain at the project root, alongside `app/`, `public/`, and `src/`, never inside `src/`.
