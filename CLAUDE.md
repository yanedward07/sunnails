# CLAUDE.md

A one-page marketing + booking site for **Sun Nails**, a nail spa at 384 Yonge St, Unit 21 & 23, Toronto. It's a static Astro site deployed to Cloudflare Pages from GitHub (`main` → production). Booking is handled by an embedded Vagaro widget.

## Commands

- `npm run dev`: dev server on :4321
- `npm run build`: static build to `dist/`. Run this before every commit; it must pass.
- `npm run preview`: serve `dist/`

## Architecture

- `src/data/site.ts` is the **single source of truth** for content: business info, hours, services/prices, reviews, marquee words, `VAGARO_URL`/`VAGARO_EMBED`. Change content here, never hard-code it in components.
- `src/pages/index.astro` assembles the sections in order: Header, Hero, Marquee, Services, Gallery, Space, Reviews (only if `reviews` is non-empty), Booking, Visit, Footer, MobileBookBar.
- `src/pages/brand.astro` is the brand guide (noindex, unlinked).
- `src/components/*.astro` each own one section, with scoped `<style>` and a co-located `<script>`. Keep that pattern. There's no UI framework; use vanilla TS only.
- `src/lib/images.ts` picks photos up from folders with `import.meta.glob`: `assets/nails/*` (gallery), `assets/interior/*` (first 3 go in the Space collage), `assets/hero.*`, `assets/storefront.*`.
- `src/components/Photo.astro` renders raster images through `<Picture>` as AVIF/WebP srcsets and passes SVGs through. Use it for all photos.
- `src/scripts/reveal.ts` is the global scroll-reveal. Add `data-reveal` (fade/rise) or `data-reveal="polish"` (clip-path wipe) plus `style="--i:N"` for stagger. Polish elements are observed through their **parent** because Chrome's IntersectionObserver ignores fully clipped elements.
- `public/_headers` holds the Cloudflare Pages headers. Don't add a strict CSP without allowing every domain the Vagaro widget loads from.

## Brand: "Sea Glass"

- Fresh, calm and professional. **No yellow, gold or warm tones** (the owner rejected the earlier warm "Golden Hour" look).
- Tokens live in `src/styles/tokens.css`. Always use the variables, never raw hex: `--frost` (bg), `--foam`/`--foam-deep` (surfaces), `--ink`/`--ink-soft` (text), `--teal` (accent, large text only), `--teal-deep` (buttons, links, small accent text), `--aqua` (highlights on dark), `--mint` (soft fills), `--coral` (tiny accents only). For translucency use the channel tokens: `rgb(var(--ink-rgb) / 0.2)`.
- Type: **Instrument Serif** (display, regular + italic; italic `<em>` in teal for emphasis; no variable axes) + **Inter Tight Variable** (body/UI). Fonts are self-hosted via Fontsource.
- Motifs: arch image masks (`999px 999px 36px 36px`), a soft aqua "light through water" glow, thin-line eyebrows. The small sun on the logo's i is the only sun motif.
- Voice: calm, confident, short sentences. The shop's own line is "Relax. Refresh. Renew."

## Rules

- **Mobile-first.** Check at 375–390px wide. There must be no horizontal scroll (`documentElement.scrollWidth === innerWidth`), tap targets must be ≥44px, and the sticky bottom Book bar is for phones (<900px).
- Animate only `transform`/`opacity`/`clip-path`, and respect `prefers-reduced-motion` (handled globally in `global.css`).
- Don't invent business facts (reviews, certifications, prices). Real content comes from the owner. Leave a `// TODO` if something is unknown.
- Gallery photos in `src/assets/nails/` are real client sets supplied by the owner. They are small (≤680px wide), and `Photo.astro` never upscales. Filenames become alt text, so name new files descriptively (`12-red-chrome-almond.jpg`).
- The business name is always **Sun Nails** (two words, capitalised), never "sunnails". The logo is a text wordmark (`Logo.astro`): "Sun" + italic "Nails", with the dot of the i drawn as an SVG sun. There is no image logo file; keep it as live text.
- Original photos from the owner live in `source-photos/` (git-ignored, see its README); the site only uses the optimised copies in `src/assets/`. File new originals there instead of leaving them in the project root. `source-photos/menu/price-menu.jpeg` shows the WiFi password, so never commit or publish it.

## Open TODOs

- Paste the Vagaro embed code + URL into `site.ts`.
- Higher-resolution nail photos if available, the Instagram handle, an email (optional) and real reviews.
- Set the final domain in `astro.config.mjs` (`site`).
