# Project Progress

## Current Phase: Phase 2 - Polish & Launch Readiness

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

### Session — All-Pages Animation Migration (2026-03-20)

**Migrated every page to the global `data-animate` scroll animation system**

- [x] Replaced `useScrollRevealGroup` / `ScrollRevealItem` with `data-animate` / `data-animate-stagger` across all pages (platform, products, solutions, case studies, about, contact)
- [x] Added scroll animations to previously unanimated sections (CTAs, story blocks, inline content)
- [x] Deleted legacy animation files: `useScrollRevealGroup.ts`, `useInView.ts`, `ScrollRevealItem.tsx`, `scrollAnimations.ts`
- [x] Merged `style-guide.md` into `design-system.md` and fixed outdated docs (font names, scroll animation references, config filenames)

### Session — Content & Sensitivity Cleanup (2026-03-21)

- [x] Removed monetary values from code and docs (grant amounts, revenue, pricing)
- [x] Added sensitive-data rule to `coding-style.md`

### Session — Platform Page Overhaul (2026-03-21)

- [x] Converted Philosophy section to light theme for dark/light visual rhythm
- [x] Consolidated Engines section: compact flow bar + 2x2 detail grid (removed redundant flow diagram cards)
- [x] Redesigned Credentials as stat strip + badge row
- [x] Replaced inline CTA with shared `CTASection` component

### Session — Solution Pages Rewrite (2026-03-22)

- [x] Rewrote solution pages to match design spec layout and visual hierarchy

### Session — Product Pages Rewrite (2026-03-22)

- [x] Rewrote product overview page: dark hero with gradient text, vertical card stack with per-series variants, SVG icons, product tag pills
- [x] Rewrote all 4 product detail pages (Fusion, Sense, Orches, Cortex) with 2-column layout, alternating backgrounds, per-series color themes, capabilities lists, metadata rows, badges
- [x] Deleted unused `ProductBlockSection` and `ProductCard` components
- [x] Updated heading font from Plus Jakarta Sans to Outfit

### Session — Case Study Pages Rewrite (2026-03-23)

- [x] Rewrote all 4 case study pages (HDB, Chevalier, CPG FM, NParks) to match design spec: dark hero, key numbers strip, alternating content sections, deployed items cards, decision lists, results table, quote placeholder, related cards grid
- [x] Replaced all emoji with SVG icons across case studies
- [x] Added no-emoji rule (P0) to `coding-style.md`

### Session — Visual Design Overhaul (2026-03-26)

**Comprehensive design system refresh across the entire site**

- [x] Rebuilt color palette around corporate primary `#1F99C5` (cyan to primary scale)
- [x] Added amber accent scale for secondary visual hierarchy
- [x] Switched heading font from Plus Jakarta Sans to Outfit
- [x] Added button `focus-visible` states (WCAG 2.1 AA compliance)
- [x] Added smooth dropdown animation to nav menu (150ms ease-out)
- [x] Standardized card hover to `-translate-y-1` with border color transitions
- [x] Added `dot-pattern` utility for light section visual interest
- [x] Added scroll animation variants: fade, slide-left, slide-right, scale
- [x] Made `CTASection` configurable (brand/dark/gradient variants + custom copy)
- [x] Added `Breadcrumb` component for sub-pages
- [x] Added skip-to-content link and main landmark id (accessibility)
- [x] Added Privacy Policy and Terms of Use links to footer
- [x] Configured OpenGraph image and `metadataBase`
- [x] Updated design system docs to match implementation

**Build status:** Passing (static export to `/out`)

### Session — Case Study Review & Overview Redesign (2026-03-27)

**Fixed detail page issues + redesigned overview page layout**

Bug fixes on detail pages:
- [x] Replaced emoji with SVG icons
- [x] Standardized alignment: removed `margin: 0 auto` from CPG FM and NParks content containers to match HDB/Chevalier left-aligned pattern

Overview page redesign — "magazine editorial" layout replacing uniform card grid:
- [x] `FeaturedCaseStudy.tsx` — HDB gets a dramatic 2-column hero section with decorative dot matrix (6x8 grid)
- [x] `CaseStudyRunway.tsx` — 3 secondary case studies in landscape cards with colored left border accents (primary/amber/slate), horizontally scrollable on mobile, 3-column grid on desktop
- [x] `ImpactStrip.tsx` — aggregate proof-of-scale stats (replaces generic IndustriesSection icon row)
- [x] `data/caseStudies.ts` — shared case study data extracted with accentColor, heroStat, featured fields
- [x] Added `scrollbar-thin` CSS utility to `globals.css` for mobile horizontal scroll
- [x] Refined CTA copy: "Ready to See Similar Results?"

**Build status:** Passing (static export to `/out`)

### Session — Nav Dropdowns & Hero Overhaul (2026-03-28)

**Redesigned navigation and home page hero**

- [x] Redesigned nav dropdowns with icons, descriptions, and polished hover states
- [x] Standardized hero overlines across product, solution, about, and case study pages with gradient glow
- [x] Replaced static home hero with image carousel slideshow
- [x] Added platform flow visualization to platform hero
- [x] Swapped hero slide images (bg1, bg15, etc.)

### Session — Platform Section Redesign (2026-03-29)

**Rebuilt platform architecture diagram and surrounding sections**

- [x] Replaced platform stack with `AfosArchitectureSvg` diagram
- [x] Redesigned platform diagram with dark glow frame, industry icons, and animated connectors
- [x] Polished shift section with decorative backdrop, brightened sky tones
- [x] Brightened stats labels and switched stat numbers to cyan glow
- [x] Polished platform diagram with animated borders and refined spacing

### Session — Visual Polish & Component Extraction (2026-03-30)

**Site-wide visual refinements and reusable component extraction**

- [x] Redesigned solutions cards with image-led layout
- [x] Added hero background images to solution detail pages
- [x] Extracted shared `ImageCard` component, applied to home/solutions/case-studies
- [x] Extracted case study sections into reusable components
- [x] Extracted solutions page into reusable section components
- [x] Unified product suite icons site-wide
- [x] Polished foundation diagram layout, lines, and icons
- [x] Brightened and enlarged section overlines
- [x] Restyled platform pillars with vertical axis and dots

### Session — Platform Content & Product Pages (2026-03-31)

**Enriched platform content and polished product pages**

- [x] Added platform outcomes section with dark engines theme
- [x] Extracted `FoundationDiagram` and restructured platform sections
- [x] Expanded `PlatformEnginesSection` with richer content
- [x] Expanded products page with richer content sections
- [x] Tightened product pages content and layout
- [x] Added image carousels to solution cards
- [x] Refined platform trajectory and outcomes spacing
- [x] Unified hero overlays and product icons

### Session — Product Photography & Carousels (2026-04-01)

**Added real product imagery and interactive carousels to product detail pages**

- [x] Added real product photos for LMD, LBB, and EMD on Sense page
- [x] Added web app screenshots to Fusion product page
- [x] Added product images and 3D carousel to Orches product page with `BrowserFrame` perspective tilt
- [x] Restructured Cortex product page layout and added large carousel mode
- [x] Generated predictive analytics dashboard screenshot for Cortex
- [x] Removed ESG & Compliance Reporting product from Cortex
- [x] Unified hero overline across all pages

### Session — Image Reorganization & Accuracy Fix (2026-04-02)

**Asset cleanup and data accuracy corrections**

- [x] Reorganized product and case study images into subdirectories
- [x] Renamed `images/case` directory to `images/cases`
- [x] Updated product icons, removed Escalator Monitoring TBD, refreshed images
- [x] Corrected AI prediction accuracy from 85% to 83% across all sources
- [x] Removed `ImpactStrip` section from case studies page
- [x] Removed unused report HTML files
- [x] Cleaned up background images

### Session — HDB Flagship Case Study (2026-04-05)

**Rebuilt HDB case study as a premium flagship page**

- [x] Rebuilt HDB case study as flagship page with 7 custom sections
- [x] Replaced hero and stakes with project overview section
- [x] Refined layout, section details, and featured case study summary/stats
- [x] Replaced dot matrix with background image in featured case study hero
- [x] Added decorative dot matrix pattern to solutions and products hero sections
- [x] Added HDB icon logo for case study overview section
- [x] Removed unused HDB section components
- [x] Fixed missing background image in NParks case study

### Session — Password Gate & Contact Page (2026-04-13)

**Added site access control and updated contact page**

- [x] Added password gate for site access
- [x] Updated contact page layout

**Build status:** Passing (static export to `/out`)

## Technical Notes

- Using Next.js 14.2.x (not 15) for stability — `.mjs` config format required (not `.ts`)
- `scripts/` directory excluded from tsconfig to avoid Playwright type errors
- Design system fonts: Outfit (headings), DM Sans (body) — loaded via `next/font/google`
- Scroll animations: All pages use global `data-animate` system (see `ScrollAnimator.tsx`). Legacy hooks (`useScrollRevealGroup`, `useInView`, `ScrollRevealItem`, `scrollAnimations.ts`) have been deleted.
