
# MEBÁZO — Launching Soon Site

A single, polished landing page on the existing TanStack Start + Tailwind v4 setup. All 7 sections live on `/` as one scrollable page.

## Design system (src/styles.css)

Replace the default tokens with the MEBÁZO palette (oklch equivalents) and load fonts from Google Fonts via `<link>` in `__root.tsx` head.

- `--background`: #0A0A0A
- `--foreground`: #F5F0E8 (ivory)
- `--card`: #1A1A1A
- `--primary`: #C9A96E (champagne gold)
- `--primary-foreground`: #0A0A0A
- `--muted-foreground`: ivory at ~60%
- `--border`: gold at ~15%
- Fonts: `--font-serif: "Cormorant Garamond"`, `--font-sans: "Inter"`
- Custom utilities: `.gold-glow` (radial gradient), `.particle-field` (animated subtle gold dots via CSS keyframes), smooth scroll on `html`.

## Page structure (src/routes/index.tsx)

Single route, composed of section components in `src/components/mebazo/`:

1. `Hero.tsx` — full-screen. Animated radial gold glow + CSS particle layer behind. "MEBÁZO" in Cormorant ~clamp(64px, 12vw, 180px), wide letter-spacing. Tagline, sub-line, outlined gold CTA (fills on hover), launch locations line.
2. `Recognition.tsx` — slim strip, label "Recognition & Partnerships", 5 placeholder logo slots as thin gold-bordered pills, desaturated.
3. `Difference.tsx` — 3-column grid (stacks on mobile). Lucide icons (`Leaf`, `Eye`, `Gem`) in gold inside thin gold-ring circles. Card bg `--card`.
4. `ProductTeaser.tsx` — heading + 3 dark silhouette cards using CSS gradients (no external images), heavy blur, gold hairline border.
5. `Founder.tsx` — large dark card, oversized serif pull-quote with gold opening quote mark, founder circle placeholder + name/title.
6. `Waitlist.tsx` — centered email form. Client-side zod validation; on submit show success state (no backend — purely UI for now, per spec). Email stored only in component state; toast via existing `sonner`.
7. `Footer.tsx` — centered logo wordmark, tagline, Lucide social icons (`Instagram`, `Linkedin`, `MessageCircle` for WhatsApp), copyright.

## Interactions

- Smooth scroll via `html { scroll-behavior: smooth }`.
- Scroll fade-in: small `useInView` hook using `IntersectionObserver`, applied via a `<Reveal>` wrapper that adds `opacity-0 translate-y-4` → `opacity-100 translate-y-0` with `transition-all duration-700 ease-out`. Restrained, single transition per element.
- Gold hover: buttons, links, social icons transition border/bg/text to gold over 300ms.
- CTA button: outlined gold → fills gold with black text on hover.
- Hero particles: pure CSS (multiple absolutely positioned gold dots with staggered `@keyframes` drift + opacity pulse). No JS, no canvas — keeps it Worker-safe and lightweight.

## SEO / head

Update `head()` in `src/routes/index.tsx`:
- title: "MEBÁZO — Luxury. Inclusive. Intelligent."
- description: "AI-powered inclusive luxury clean beauty. Launching globally in India & UAE. Join the waitlist."
- og:title, og:description, og:type=website, og:url=/

Keep `__root.tsx` defaults minimal; add Google Fonts `<link>` entries via `links` array.

## Technical notes

- Tailwind v4: tokens defined in `@theme` block of `src/styles.css`; no `tailwind.config.js`.
- Use semantic tokens only in components (`bg-background`, `text-foreground`, `border-primary`, `text-primary`) — no raw hex in JSX.
- Mobile-first: hero type scales with `clamp()`; 3-card grids become single column under `md`.
- Responsive viewport already configured for 390×844 preview.
- No backend, no Lovable Cloud — waitlist is UI-only with a success state. If the user wants real email capture later, we'll wire a server function then.

## Files to create/modify

- modify `src/styles.css` (palette, fonts, utilities)
- modify `src/routes/__root.tsx` (Google Fonts link, dark `<html>` class, default title)
- modify `src/routes/index.tsx` (compose sections, set head)
- create `src/components/mebazo/{Hero,Recognition,Difference,ProductTeaser,Founder,Waitlist,Footer,Reveal}.tsx`
- create `src/hooks/use-in-view.ts`
