# Design System

## Design Direction

**Theme**: Dual-mode -- dark sections (hero, platform, stats, CTA) + light sections (shift, solutions, ecosystem)
**Feel**: Industrial tech premium -- confident, sophisticated, trustworthy. Not generic corporate. Not startup playful.

---

## Color Palette

### Navy (Backgrounds + Headings on Light)

| Token | Hex | Role |
|-------|-----|------|
| `navy-950` | `#060E1A` | Deepest background (footer edge, hero edge) |
| `navy-900` | `#0A1628` | Primary dark background, hero, footer; **headings on light bg** |
| `navy-800` | `#111D35` | Alternate dark sections, cards on dark bg |
| `navy-700` | `#162544` | Borders on dark backgrounds |
| `navy-600` | `#1E3A5F` | Subtle borders on dark bg; **subtitles on light bg** |

### Primary (Brand Accent -- corporate #1F99C5)

| Token | Hex | Role |
|-------|-----|------|
| `primary-50` | `#EBF5FA` | Icon container bg on light sections |
| `primary-100` | `#D2EAF4` | Icon container border on light sections |
| `primary-200` | `#A5D5E9` | Card hover border on light bg |
| `primary-300` | `#6CBBD9` | Lighter highlights, decorative, gradient text start |
| `primary-400` | `#3DA8CE` | Accent text on dark bg, highlights |
| `primary-500` | `#1F99C5` | **Corporate primary** -- buttons, CTA bg, icons on dark |
| `primary-600` | `#197EA3` | **Primary accent on light bg** -- icons, links, labels |
| `primary-700` | `#136580` | Ghost button hover on light bg |
| `primary-800` | `#0D4C60` | Deep accent (rarely used) |
| `primary-900` | `#083440` | Darkest accent tone |

### Secondary Accent (Amber -- for visual hierarchy)

| Token | Hex | Role |
|-------|-----|------|
| `accent-400` | `#FBBF24` | Highlight badges, notification dots |
| `accent-500` | `#F59E0B` | Secondary CTA hover, active indicators |
| `accent-600` | `#D97706` | Text accent (dark bg) |

**Usage rules:**
- Primary (teal-blue): all main CTAs, links, icons, interactive elements
- Secondary (amber): badges, certification markers, "new" tags, stat emphasis
- Never use amber for buttons or navigation

### Gray (Light Section Backgrounds & Text)

Uses Tailwind's built-in `slate` palette:

| Token | Hex | Role |
|-------|-----|------|
| `slate-50` | `#f8fafc` | Light section background (alternate) |
| `slate-100` | `#f1f5f9` | Light section background, light card bg |
| `slate-200` | `#e2e8f0` | Card borders on light bg, dividers |
| `slate-300` | `#cbd5e1` | Outline button border on light bg |
| `slate-400` | `#94a3b8` | Muted text (both dark and light contexts) |
| `slate-500` | `#64748b` | Secondary text on light bg, labels |
| `slate-600` | `#475569` | Body text on light bg |
| `slate-700` | `#334155` | Strong body text on light bg |
| `slate-900` | `#0f172a` | Heading text on light bg |

### Common Opacity Patterns

- `bg-primary-500/10` -- icon container bg (both dark and light)
- `border-primary-500/20` -- icon container border (both)
- `border-primary-500/30` -- card hover border (dark sections)
- `bg-primary-500/8` -- glow overlays
- `bg-navy-900/80` -- header backdrop
- `border-white/20` -- outline button border (on dark bg)

---

## Typography

### Font Stack

| Role | Font | CSS Variable | Weights |
|------|------|-------------|---------|
| Display / Headings | Outfit | `--font-heading` | 300-800 (variable) |
| Body | Inter | `--font-body` | 400-700 (variable) |

Loaded via `next/font/google` in root layout. All `h1-h6` get `font-heading` via globals.css base layer.

### Text Hierarchy -- Dark Sections

| Element | Classes | When to use |
|---------|---------|-------------|
| H1 (hero) | `text-4xl md:text-5xl lg:text-6xl font-bold text-white` | Page hero headline |
| H2 (section) | `text-3xl md:text-4xl font-bold text-white` | Section headings |
| H3 (card title) | `text-lg font-semibold text-white` | Card/feature titles |
| Subtitle (section) | `text-lg text-primary-400` | Below section H2 |
| Subtitle (hero) | `text-lg md:text-xl text-slate-400` | Below page H1 |
| Body (card) | `text-slate-400 leading-relaxed` | Card descriptions |
| Label (uppercase) | `text-xs font-semibold uppercase tracking-[0.2em] text-primary-400` | Section divider labels |

### Text Hierarchy -- Light Sections

**RULE: No primary-500 on light backgrounds.** Minimum is primary-600 (#197EA3) for contrast/readability.

| Element | Classes | When to use |
|---------|---------|-------------|
| H2 (section) | `text-3xl md:text-4xl font-bold text-navy-900` | Section headings |
| H3 (card title) | `text-lg font-semibold text-navy-900` | Card/feature titles |
| Subtitle (section) | `text-lg text-navy-600` | Below section H2 |
| Body (card) | `text-slate-600 leading-relaxed` | Card descriptions |
| Body (paragraph) | `text-slate-600 leading-relaxed` | Long-form text |
| Label (uppercase) | `text-xs font-semibold uppercase tracking-[0.2em] text-primary-600` | Section divider labels |
| Accent link | `text-primary-600 hover:text-primary-700` | Links, ghost buttons |
| Icons | `text-primary-600` | Icons in cards/features |

### Text Hierarchy -- Brand CTA Section

| Element | Classes |
|---------|---------|
| H2 | `text-3xl md:text-4xl font-bold text-white` |
| Subtitle | `text-lg text-white/80` |

### Type Scale

| Element | Class | Size | Weight |
|---------|-------|------|--------|
| H1 (hero) | `text-4xl md:text-5xl lg:text-6xl` | 36/48/60px | font-bold |
| H1 (home hero) | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` | 36/48/60/72px | font-bold |
| H2 (section) | `text-3xl md:text-4xl` | 30/36px | font-bold |
| H3 (card title) | `text-lg` or `text-xl` | 18/20px | font-semibold |
| Body | `text-base` | 16px | font-normal |
| Body Large | `text-lg` | 18px | font-normal |
| Small | `text-sm` | 14px | font-normal |
| Label | `text-xs uppercase tracking-[0.2em]` | 12px | font-semibold |

---

## Section Backgrounds & Rhythm

### Home Page Section Order

| # | Section | Background | Theme |
|---|---------|-----------|-------|
| 1 | Hero | `navy-900` + overlays | Dark |
| 2 | Stats | `navy-800` | Dark |
| 3 | The Shift | `white` + dot-pattern | **Light** |
| 4 | Platform at a Glance | `navy-900` | Dark |
| 5 | Solutions | `slate-50` + dot-pattern | **Light** |
| 6 | Ecosystem | `navy-900` | Dark |
| 7 | Closing CTA | `primary-500` | **Brand** |

### Rules
- Dark sections: `bg-navy-900` or `bg-navy-800` (alternate)
- Light sections: `bg-white` or `bg-slate-50` (alternate), with `dot-pattern` overlay
- CTA sections: Three variants -- `brand` (primary-500), `dark` (navy-800), `gradient` (navy-900 to primary-900)
- Never place two identical backgrounds adjacent to each other
- Light sections provide breathing room between dark sections

---

## Components

### Buttons

#### Variants by Context

| Variant | On Dark Background | On Light Background |
|---------|-------------------|---------------------|
| **primary** | `bg-primary-500 text-white` hover: `bg-primary-600` + glow shadow `0 0 32px rgba(31,153,197,0.4)` | Same |
| **secondary** | `border-[1.5px] border-white/20 text-white` hover: `border-white/40` | `border-[1.5px] border-slate-300 text-navy-900` hover: `border-slate-400` |
| **ghost** | `text-primary-400` hover: `text-primary-300` | `text-primary-600` hover: `text-primary-700` |
| **white** | `bg-white text-navy-900` hover: `shadow-lg` | n/a |

#### Shared Properties
- All buttons: `font-semibold px-6 py-3 rounded-lg transition-all duration-200`
- All buttons: `focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900`
- Primary on hover: `hover:scale-[1.02]`
- Border radius: `rounded-lg` (8px) -- NOT rounded-xl

### Cards

#### Dark Card (on navy backgrounds)

```
bg-navy-800 border border-navy-700 rounded-2xl
hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(31,153,197,0.12)] hover:border-primary-500/30
transition-all duration-300
```

#### Light Card (on white/slate backgrounds)

```
bg-white border border-slate-200 rounded-2xl
hover:-translate-y-1 hover:shadow-lg hover:border-primary-200
transition-all duration-300
```

#### Icon Container

| Context | Background | Border | Icon Color |
|---------|-----------|--------|------------|
| Dark sections | `bg-primary-500/10` | `border-primary-500/20` | `text-primary-500` |
| Light sections | `bg-primary-50` | `border-primary-100` | `text-primary-600` |

```tsx
{/* Dark sections */}
<div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-primary-500" />
</div>

{/* Light sections */}
<div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-primary-600" />
</div>
```

### Section Header

Accepts `colorScheme` prop (`'dark'` | `'light'`):
- Dark: `text-white` title, `text-primary-400` subtitle
- Light: `text-slate-900` title, `text-slate-500` subtitle

### Breadcrumb

For pages deeper than 1 level. Placed above the page hero.

```tsx
<Breadcrumb items={[
  { label: 'Solutions', href: '/solutions' },
  { label: 'Smart Vertical Transport' },
]} />
```

### CTA Section

Accepts `variant` prop:
- `"brand"` (default) -- primary-500 background, white text, white + secondary buttons
- `"dark"` -- navy-800 background with radial glow, primary + secondary buttons
- `"gradient"` -- navy-900 to primary-900 gradient, primary + secondary buttons

Also accepts custom `headline`, `description`, `primaryLabel`, `primaryHref`, `secondaryLabel`, `secondaryHref`.

---

## Spacing

| Use Case | Tailwind Class | Value |
|----------|---------------|-------|
| Section padding (vertical) | `py-16 md:py-24` | 64px / 96px |
| Section padding (horizontal) | `px-4 md:px-8` | 16px / 32px |
| Content max-width | `max-w-7xl mx-auto` | 1280px |
| Medium content | `max-w-5xl mx-auto` | 1024px (platform diagram) |
| Narrow content | `max-w-3xl mx-auto` | 768px (CTA, text-heavy) |
| Section header to content gap | `mb-12 md:mb-16` | 48px / 64px |
| Card padding | `p-6 md:p-8` | 24px / 32px |
| Card gap | `gap-6` | 24px |
| Page hero top padding | `pt-36 md:pt-44` | 144px / 176px (accounts for fixed h-16 header) |
| CTA section padding | `py-20 md:py-28` | 80px / 112px |

---

## Visual Elements

### Grid Pattern (Dark sections only)

```css
background-image:
  linear-gradient(rgba(31, 153, 197, 0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(31, 153, 197, 0.04) 1px, transparent 1px);
background-size: 80px 80px;
```

Use with `opacity-30` and radial mask for hero backgrounds.

### Dot Pattern (Light sections)

```css
background-image: radial-gradient(circle, #cbd5e1 0.8px, transparent 0.8px);
background-size: 32px 32px;
opacity: 0.25;
```

Use as absolute overlay in light sections for subtle visual interest.

### CSS Utilities (from globals.css)

| Class | Effect |
|-------|--------|
| `grid-pattern` | 80px grid lines (use with `opacity-30`) |
| `grid-pattern-masked` | Grid with radial mask (hero backgrounds) |
| `dot-pattern` | Subtle dot pattern for light sections |
| `glow-primary` | `box-shadow: 0 0 50px rgba(31,153,197,0.15)` |
| `glow-primary-strong` | `box-shadow: 0 0 80px rgba(31,153,197,0.25)` |
| `text-gradient` | Gradient text from primary-300 to primary-500 |
| `animate-pulse-slow` | Slow 4s pulse (badge dots) |

---

## Scroll Animations

### System: `data-animate` (Global)

Scroll animations use a global attribute-based system. Add `data-animate` to any element; `ScrollAnimator.tsx` (mounted in root layout) observes all such elements via `IntersectionObserver` and adds `.animated` class on intersect.

### Animation Variants

| Attribute | Effect | Use For |
|-----------|--------|---------|
| `data-animate` (default) | Fade + slide up (60px) | Text blocks, headings, general content |
| `data-animate="fade"` | Opacity only | Images, backgrounds, stat blocks (already have counter animation) |
| `data-animate="slide-left"` | Fade + slide from left (40px) | Before/after comparisons, left-aligned content |
| `data-animate="slide-right"` | Fade + slide from right (40px) | Right-aligned content, complementary panels |
| `data-animate="scale"` | Fade + scale from 0.95 | Cards, interactive elements |

### Staggering

Add `data-animate-stagger` to a parent container. Its direct children with `data-animate` receive auto-assigned `transitionDelay` (i x 100ms).

### Timing
- Duration: `500-600ms`
- Easing: `ease-out`
- Stagger: `100ms` between items (auto-assigned)
- All animations respect `prefers-reduced-motion: reduce`

---

## Iconography

**Library**: Lucide React
- Outline style (not filled)
- Size: `w-5 h-5` inline, `w-6 h-6` standalone, `w-8 h-8` feature cards
- Color: `text-primary-500` on dark bg, `text-primary-600` on light bg

---

## Accessibility

- Skip-to-content link: first element in `<body>`, visually hidden until focused
- Button focus states: `focus-visible:ring-2 focus-visible:ring-primary-400`
- All animations respect `prefers-reduced-motion: reduce`
- Breadcrumb navigation on sub-pages with `aria-label="Breadcrumb"`
- Footer includes Privacy Policy and Terms of Use links

---

## Responsive Breakpoints

Follow Tailwind defaults:

| Breakpoint | Min Width | Use Case |
|-----------|-----------|----------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |

Primary viewing context: desktop (office environment).

---

## Do's and Don'ts

### Do
- Alternate dark and light sections for visual rhythm
- Use generous whitespace (120-160px section padding on desktop)
- Use accent color sparingly for maximum impact
- Add glow effects on interactive elements (buttons, cards)
- Use `colorScheme` prop for dual-themed components
- Use `dot-pattern` overlay on light sections for visual interest
- Vary CTA section styles per page (`brand`, `dark`, `gradient`)
- Use animation variants appropriate to content type

### Don't
- Don't use dark-on-dark everywhere (monotone fatigue)
- Don't use `rounded-full` on cards
- Don't place two identical backgrounds adjacent
- Don't use generic stock photos
- Don't use purple gradients or floating particles
- Don't use Plus Jakarta Sans or Roboto for headings (use Outfit)
- Don't use primary-500 on light backgrounds (use primary-600 minimum)
- Don't use the same scroll animation for every element type

---

## File Organization

```
app/
  [page]/page.tsx              -- Server Component, metadata + layout

components/
  layout/Header.tsx            -- 'use client' (navigation state)
  layout/Footer.tsx            -- Server Component
  ui/Button.tsx                -- colorScheme-aware button with focus states
  ui/Card.tsx                  -- colorScheme-aware card with standardized hover
  ui/SectionHeader.tsx         -- colorScheme-aware section heading
  ui/StatBlock.tsx             -- 'use client' (animated counter)
  ui/ScrollAnimator.tsx        -- 'use client' (global data-animate observer, mounted in layout)
  ui/Breadcrumb.tsx            -- Sub-page breadcrumb navigation
  sections/[page]/             -- Page-specific section components
```

### `'use client'` Boundary

Push it as far down as possible. Only add when component uses:
- `useInView`, `useState`, `useEffect`, `useRef`
- Event handlers, browser APIs
- `usePathname` (Header)

Pages themselves are always Server Components.
