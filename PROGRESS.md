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

### Session — Contact Form & SEO Foundations (2026-04-30)

**Wired contact form to Formspree**

- [x] Replaced placeholder timeout in `components/sections/contact/ContactForm.tsx` with real `fetch` POST to Formspree endpoint (`mvzlplbq`)

**SEO foundations — JSON-LD, canonicals, sitemap auto-generation**

- [x] Created `components/seo/JsonLd.tsx` — server component that emits `<script type="application/ld+json">`
- [x] Added `Organization` + `WebSite` JSON-LD to root layout (renders on every page)
- [x] Added `SoftwareApplication` JSON-LD to all 4 product pages (Sense, Fusion, Orches, Cortex)
- [x] Added `alternates.canonical` to root layout and all 18 page-level metadata blocks
- [x] Replaced hand-written `public/sitemap.xml` and `public/robots.txt` with Next.js Metadata Files (`app/sitemap.ts`, `app/robots.ts`) — sitemap now regenerates on every build with fresh `<lastmod>` timestamps
- [x] Verified build output: 19 routes in sitemap with `<lastmod>`, canonical tags on every page, JSON-LD schemas validated via grep on built HTML

**Google Search Console setup (manual, no code)**

- [x] User added DNS TXT record at Siteground for domain-level verification
- [x] User submitted `https://softgridsensing.com/sitemap.xml` (full URL required for Domain properties, not just `sitemap.xml`)

**Out of scope for future work:**

- Per-page OG images
- BreadcrumbList, FAQPage, Article schemas (case studies could use Article)
- GA4 / Plausible analytics
- Per-route git-based `lastModified` (currently uses build timestamp)
- Bing Webmaster Tools verification

**Build status:** Passing (static export to `/out`)

### Session — Phase A Keyword Targeting + GEO (2026-04-30, continued)

Same calendar day, second working session. Shipped four release branches: v1.3.0, v1.4.0, v1.5.0, v1.5.1.

**v1.3.0 — Phase A keyword targeting + entity schema enrichment**

- [x] Rewrote `title` and `description` metadata across all 19 pages to target buyer-intent phrases (e.g. "Lift Remote Monitoring & BCA RM&D Compliance — Singapore", "Smart Building Management System (BMS) — Singapore", "AI Facility Management Software — Smart FM Singapore", "HDB Lift Monitoring — 10,000+ Lifts AFOS Deployment")
- [x] Enriched `Organization` JSON-LD in `app/layout.tsx` with `alternateName: ['Softgrid', 'Softgrid Sensing Pte. Ltd.']`, `legalName`, `foundingDate: '2017'`, `foundingLocation`, `areaServed`, `knowsAbout`, `award`, and stable `@id`
- [x] Linked `WebSite` schema to `Organization` via `publisher: { @id }`; product schemas now reference parent Organization via `@id` instead of duplicating
- [x] Added `FAQPage` JSON-LD to About page with 5 Q&As that explicitly bind "Softgrid" → Softgrid Sensing Pte. Ltd. (e.g. "What is Softgrid?", "Where is Softgrid based?", "Is Softgrid the same as Softgrid Sensing?")

**v1.4.0 — GEO foundations (Generative Engine Optimization)**

- [x] Created `public/llms.txt` — AI-friendly markdown site index (Anthropic, Perplexity, Mintlify-aware crawlers respect this convention)
- [x] Created `public/llms-full.txt` — full-prose company facts dump optimized for LLM consumption (~9KB markdown: company overview, products, solutions, case studies, recognition, FAQs, "how Softgrid differs" framing)
- [x] Updated `app/robots.ts` to explicitly allow 18 AI user agents (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot, etc.) — future-proofs against accidental blocking
- [x] Corrected earlier overclaim: NRF is the awarding body, A*STAR/SIMTech are research collaborators (not backers); fixed in About metadata, FAQPage schema, and llms-full.txt
- [x] Created `/why-softgrid` page (later removed in v1.5.1 — see below)

**v1.5.0 — Simplified /why-softgrid + capability differentiators in LLM files**

- [x] Stripped `/why-softgrid` page from a fully designed marketing page (~250 lines) down to plain prose (~115 lines) — no hero glow, no comparison matrix, no CTAs. Removed all named competitors (no Otis, Schindler, Planon mentioned on public HTML)
- [x] Added "Capability Differentiators" section to `public/llms-full.txt` covering five capabilities: intrusive + non-intrusive deployment, multi-brand controller integration (Otis/Schindler/KONE/Mitsubishi/Hitachi/Sigma), lift + escalator on one platform, public + private sector, end-to-end hardware-to-software stack
- [x] Added a TÜV SÜD differentiation note to `llms-full.txt` (TIC body, complementary not competitive)
- [x] Extended `llms.txt` summary line with the same capability points so AI engines retrieve them even from the index alone
- [x] Decided to keep capability claims as positive Softgrid framing (no "Elevate Tech only does X" negative claims) — Reason: smaller named startups carry higher legal/reputational risk than category-level OEM framing

**v1.5.1 — Removed redundant /why-softgrid page**

- [x] Deleted `app/why-softgrid/page.tsx` — the page duplicated content already on About (`WhySoftgridSection` covers the same four pillars, `JourneySection` has the NRF/BCA timeline, `RDSection`/`EcosystemSection` covers research partners). Removed sitemap entry and llms.txt index link.
- [x] Capability differentiators content in `llms-full.txt` + `llms.txt` summary line preserved — that adds unique value not duplicated elsewhere

**GEO out of scope for future work:**

- Wikidata entry for Softgrid Sensing (high impact for AI Knowledge Graph retrieval — user must submit)
- Crunchbase profile (high signal for AI engines)
- Press coverage in Tech in Asia / e27 / Straits Times Tech
- Listings in third-party "Top IoT/PropTech Singapore" articles
- Internal sales battle card with named-competitor specifics (kept off public site)

**Build status:** Passing (static export to `/out`). Live deploys via `releases/v1.3.0` → `releases/v1.5.1`.

## Technical Notes

- Using Next.js 14.2.x (not 15) for stability — `.mjs` config format required (not `.ts`)
- `scripts/` directory excluded from tsconfig to avoid Playwright type errors
- Design system fonts: Outfit (headings), DM Sans (body) — loaded via `next/font/google`
- Scroll animations: All pages use global `data-animate` system (see `ScrollAnimator.tsx`). Legacy hooks (`useScrollRevealGroup`, `useInView`, `ScrollRevealItem`, `scrollAnimations.ts`) have been deleted.
