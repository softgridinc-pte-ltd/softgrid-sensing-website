# Project Progress

## Current Phase: Phase 1 - Foundation & Home Page

## Completed

### Session 1 (2026-02-23)

**Project initialization and Home page build**

- [x] Initialized Next.js 14 project with TypeScript + Tailwind CSS 3
- [x] Configured static export for GitHub Pages (`output: 'export'`)
- [x] Set up Tailwind with design system colors (navy, cyan, slate)
- [x] Set up fonts: Outfit (headings) + DM Sans (body) via next/font
- [x] Created GitHub Actions deploy workflow (`.github/workflows/deploy.yml`)
- [x] Added CNAME file for custom domain
- [x] Added 404.html fallback

**Shared UI Components:**

- [x] `components/ui/Button.tsx` - Primary, secondary, ghost variants with Link support
- [x] `components/ui/Card.tsx` - Standard card + FeatureCard with icon
- [x] `components/ui/SectionHeader.tsx` - Reusable section title + subtitle
- [x] `components/ui/StatBlock.tsx` - Animated stat counter with IntersectionObserver

**Layout Components:**

- [x] `components/layout/Header.tsx` - Sticky header with glass-morphism, desktop nav with dropdowns, mobile hamburger menu
- [x] `components/layout/Footer.tsx` - 4-column layout with brand, links, and contact info

**Home Page Sections:**

- [x] `HeroSection` - Full-height hero with grid pattern, gradient glow, tagline pill, headline, CTAs
- [x] `ShiftSection` - Before/after comparison grid with staggered scroll animations
- [x] `PlatformSection` - Architecture diagram (4 layers) + 4 capability cards
- [x] `StatsSection` - 4-stat grid with count-up animation
- [x] `SolutionsSection` - 4 solution cards with icons and scroll-reveal
- [x] `TrustedBySection` - Partner/client placeholder grid
- [x] `CTASection` - Full-width CTA banner with gradient glow

**Utilities:**

- [x] `components/ui/ScrollAnimator.tsx` - Global `data-animate` scroll animation observer (mounted in layout)

**Build status:** Passing (static export to `/out`)
**Lint status:** No warnings or errors

### Session — Scroll Animation Overhaul (2026-03-20)

**Per-element scroll animations — matching design reference**

Replaced the React hook-based animation system (`useScrollRevealGroup`) with a global `data-animate` system on the home page. Every element now animates independently as it scrolls into the viewport, with staggered delays for sibling groups.

**What was built:**

- [x] `components/ui/ScrollAnimator.tsx` — Global client component mounted in `app/layout.tsx`. Uses `IntersectionObserver` (threshold 0.15, rootMargin -40px) to watch every `[data-animate]` element individually. Adds `.animated` class on intersect. Processes `[data-animate-stagger]` containers to auto-assign `transitionDelay` (i × 100ms) to direct children. Re-runs on route changes via `usePathname`.
- [x] `app/globals.css` — Added `[data-animate]` CSS rules: starts `opacity:0; translateY(60px)`, transitions to visible on `.animated` class. Respects `prefers-reduced-motion`.
- [x] Updated home page sections (Stats, Shift, Platform, Solutions, Ecosystem, CTA) to use `data-animate` / `data-animate-stagger` attributes instead of `useScrollRevealGroup`.

**How to apply to other pages:**

1. Add `data-animate` attribute to any element that should fade-in on scroll
2. Add `data-animate-stagger` attribute to a parent container — its direct children with `data-animate` will get auto-staggered delays (100ms apart)
3. Remove `useScrollRevealGroup` hook usage and `ScrollRevealItem` wrappers from the section
4. No other changes needed — `ScrollAnimator` in the layout handles everything globally

**What NOT to change:**

- Hero section — keeps its own CSS `hero-entrance` keyframe animations (not scroll-triggered). User prefers current centered layout with abstract SVG visualizations.

## Technical Notes

- Using Next.js 14.2.x (not 15) for stability — `.mjs` config format required (not `.ts`)
- `scripts/` directory excluded from tsconfig to avoid Playwright type errors
- Design system fonts: Outfit (headings), DM Sans (body) — loaded via `next/font/google`
- Scroll animations: All pages use global `data-animate` system (see `ScrollAnimator.tsx`). Legacy hooks (`useScrollRevealGroup`, `useInView`, `ScrollRevealItem`, `scrollAnimations.ts`) have been deleted.
