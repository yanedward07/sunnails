# Sun Nails website

The one-page site for **Sun Nails**, a nail spa at 384 Yonge St, Toronto. It's built with [Astro](https://astro.build) and hosted on Cloudflare Pages. Bookings go through Vagaro.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

## Editing content

Almost everything lives in **`src/data/site.ts`**:

| What | Where in `site.ts` |
| --- | --- |
| Address, phone, email, Instagram | `site` |
| Opening hours | `hours` |
| Services & prices | `services` (each category becomes a tab) |
| Reviews | `reviews` (the section is hidden while it's empty) |
| Scrolling words under the hero | `marquee` |
| Vagaro booking | `VAGARO_URL`, `VAGARO_EMBED` |

## Photos

Drop images into these folders. They are resized and converted to AVIF/WebP automatically:

- `src/assets/hero.jpg`: the big arched photo at the top.
- `src/assets/storefront.jpg`: the storefront photo in "Visit us".
- `src/assets/interior/`: the first 3 files (sorted by name) fill the "Our space" collage.
- `src/assets/nails/`: the gallery. **The current files are illustrated placeholders.** Delete them and add real nail photos. Filenames become the alt text, so `05-chrome-cat-eye.jpg` becomes "chrome cat eye".

## Vagaro booking

1. In Vagaro, go to **Settings → Online Booking → Booking Widget** and copy the embed code.
2. Paste it between the backticks of `VAGARO_EMBED` in `src/data/site.ts`.
3. Paste your public Vagaro page URL into `VAGARO_URL`. It's used as the "Trouble loading?" fallback link.

Until then, the Book section shows a "call us" card. The widget only loads once a visitor scrolls near it, so it never slows down the first page load. After pasting the code, test it on a phone.

## Deploying (Cloudflare Pages + GitHub)

1. Push this repo to GitHub.
2. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git** and choose the repo.
3. Use these build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Every push to `main` now deploys automatically, and other branches get preview URLs.
5. Add your custom domain under the project's **Custom domains** tab, then update `site` in `astro.config.mjs`.

## Brand

Open `/brand` on the running site to see the logo, colour palette, type and voice. The page is not linked from the site and is hidden from search engines.
