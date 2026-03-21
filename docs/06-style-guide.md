# Implementation Style Guide

Practical reference derived from the design system. When in doubt, read `docs/04-design-system.md` for the full spec.

---

## Conventions

- Fonts: Plus Jakarta Sans (headings) + Inter (body)
- Custom color tokens override Tailwind defaults (see Color Tokens below)
- Cards use `rounded-2xl`, buttons use `rounded-lg`
- Components accept `colorScheme?: 'dark' | 'light'` for dual-themed rendering

---

## Color Tokens (Custom Tailwind)

These are **NOT** Tailwind defaults. All are overridden in `tailwind.config.ts`.

| Token | Hex | Role |
|-------|-----|------|
| `navy-900` | `#0A1628` | Primary dark background |
| `navy-800` | `#111D35` | Alternate dark sections, cards on dark bg |
| `navy-700` | `#162544` | Borders on dark backgrounds |
| `navy-600` | `#1E3A5F` | Subtle borders, tags |
| `cyan-500` | `#00b4d8` | Primary accent on **dark bg** — buttons, icons, CTA bg |
| `cyan-600` | `#0077b6` | Primary accent on **light bg** — icons, links, labels; button hover |
| `cyan-700` | `#005f8a` | Ghost button hover on light bg |
| `cyan-400` | `#90e0ef` | Accent text on dark bg |
| `cyan-300` | `#48cae4` | Lighter highlights |
| `cyan-200` | `#b8ecf4` | Card hover border on light bg |
| `cyan-100` | `#d5f3f9` | Icon container border on light bg |
| `cyan-50` | `#eafbfd` | Icon container bg on light bg |

### Slate/Gray (Tailwind Built-in)

The `slate` palette uses **Tailwind's built-in values** (no custom overrides). Key roles:

| Token | Hex | Role |
|-------|-----|------|
| `slate-50` | `#f8fafc` | Light section bg (alternate) |
| `slate-200` | `#e2e8f0` | Card borders & dividers on light bg |
| `slate-300` | `#cbd5e1` | Outline button border on light bg |
| `slate-400` | `#94a3b8` | Muted text (both contexts) |
| `slate-500` | `#64748b` | Subtitle/secondary text on light bg |
| `slate-600` | `#475569` | Body text on light bg |
| `slate-900` | `#0f172a` | Heading text on light bg |

---

## Text Color Rules

### On Dark Backgrounds (navy-900, navy-800)

| Purpose | Class |
|---------|-------|
| Headings | `text-white` |
| Body text | `text-slate-400` |
| Subtitle (section) | `text-cyan-400` |
| Subtitle (hero) | `text-slate-400` |
| Muted text | `text-slate-500` |
| Links / accent | `text-cyan-400 hover:text-cyan-300` |
| Icons | `text-cyan-500` |

### On Light Backgrounds (white, slate-50)

**RULE: No cyan-500 on light backgrounds.** Use cyan-600 minimum.

| Purpose | Class |
|---------|-------|
| Headings | `text-navy-900` |
| Body text | `text-slate-600` |
| Subtitle (section) | `text-navy-600` |
| Muted text | `text-slate-400` |
| Links / accent | `text-cyan-600 hover:text-cyan-700` |
| Labels (uppercase) | `text-cyan-600` |
| Icons | `text-cyan-600` |

### On Cyan CTA Background (cyan-500)

| Purpose | Class |
|---------|-------|
| Headings | `text-white` |
| Subtitle | `text-white/80` |

---

## Typography

### Fonts

- **Headings**: `Outfit` via CSS variable `--font-heading` → Tailwind class `font-heading`
- **Body**: `DM Sans` via CSS variable `--font-body` → Tailwind class `font-body`
- Loaded via `next/font/google` in root layout. All `h1-h6` get `font-heading` via globals.css.

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

## Layout

### Container

```
max-w-7xl mx-auto px-4 md:px-8       — Standard content width
max-w-5xl mx-auto px-4 md:px-8       — Medium (platform diagram)
max-w-3xl mx-auto px-4 md:px-8       — Narrow (CTA, text-heavy)
```

### Section Spacing

```
py-16 md:py-24              — Standard section
py-20 md:py-28              — CTA section (more breathing room)
pt-36 pb-20 md:pt-44 md:pb-24  — Page hero (accounts for fixed h-16 header)
```

### Section Background Alternation

Home page pattern:
```
Hero        → bg-navy-900 (dark)
Shift       → bg-white (light)
Platform    → bg-navy-900 (dark)
Stats       → bg-navy-800 (dark)
Solutions   → bg-slate-50 (light)
Ecosystem   → bg-white (light)
CTA         → bg-cyan-500 (cyan)
```

For other pages: dark sections alternate `navy-900` / `navy-800`. Light sections alternate `white` / `slate-50`.

---

## Components

### Button (`@/components/ui/Button`)

| Variant | On Dark | On Light |
|---------|---------|----------|
| `primary` | `bg-cyan-500 hover:bg-cyan-600` + glow | Same |
| `secondary` | `border-white/20 text-white` | `border-slate-300 text-navy-900` |
| `ghost` | `text-cyan-400 hover:text-cyan-300` | `text-cyan-600 hover:text-cyan-700` |
| `white` | `bg-white text-navy-900 hover:shadow-lg` | n/a |

Primary button hover glow: `hover:shadow-[0_0_32px_rgba(0,180,216,0.4)]`

With `href` → renders `<Link>`. Without → renders `<button>`.
Accepts `colorScheme?: 'dark' | 'light'` prop (default `'dark'`).

### Card (`@/components/ui/Card`)

| Context | Style |
|---------|-------|
| Dark | `bg-navy-800 border-navy-700 rounded-2xl` hover: `-translate-y-2 shadow-[0_8px_32px_rgba(0,180,216,0.12)]` |
| Light | `bg-white border-slate-200 rounded-2xl` hover: `-translate-y-1 shadow-lg` |

Accepts `colorScheme?: 'dark' | 'light'` prop (default `'dark'`).

### SectionHeader (`@/components/ui/SectionHeader`)

Accepts `colorScheme?: 'dark' | 'light'` prop:
- Dark: `text-white` title, `text-cyan-400` subtitle
- Light: `text-slate-900` title, `text-slate-500` subtitle

### Icon Container

```tsx
{/* Dark sections */}
<div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-cyan-500" />
</div>

{/* Light sections */}
<div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-cyan-600" />
</div>
```

### CTA Section

```tsx
<section className="bg-cyan-500 py-20 md:py-28 relative overflow-hidden">
  {/* Radial gradient overlay for depth */}
  <div className="absolute inset-0" style={{
    background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)'
  }} />
  <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">...</h2>
    <p className="text-lg text-white/80 mb-10">...</p>
    <Button variant="white">...</Button>
  </div>
</section>
```

---

## Scroll Animation

### Presets (via `animation` prop)

| Name | Effect | Use For |
|------|--------|---------|
| `fade-up` | Slide up 60px + fade | Default, card grids |
| `fade-left` | Slide from left 40px + fade | Left column in comparisons |
| `fade-right` | Slide from right 40px + fade | Right column in comparisons |
| `scale-up` | Scale from 95% + fade | Stat numbers, badges |
| `fade-in` | Opacity only | Logo rows, wide content |

### Timing

- Duration: `600ms`
- Easing: `ease-out`
- Stagger: `100ms` between items
- Reduced motion: all animations skipped when `prefers-reduced-motion: reduce`

---

## File Organization

```
app/
  [page]/page.tsx              — Server Component, metadata + layout

components/
  layout/Header.tsx            — 'use client' (navigation state)
  layout/Footer.tsx            — Server Component
  ui/Button.tsx                — colorScheme-aware button
  ui/Card.tsx                  — colorScheme-aware card
  ui/SectionHeader.tsx         — colorScheme-aware section heading
  ui/StatBlock.tsx             — 'use client' (animated counter)
  ui/ScrollRevealItem.tsx      — 'use client' (animation-aware)
  sections/[page]/             — Page-specific section components

hooks/
  useInView.ts                 — Intersection Observer
  useScrollRevealGroup.ts      — Grouped stagger reveal

lib/
  scrollAnimations.ts          — Animation preset definitions
```

### `'use client'` Boundary

Push it as far down as possible. Only add when component uses:
- `useInView`, `useState`, `useEffect`, `useRef`
- Event handlers, browser APIs
- `usePathname` (Header)

Pages themselves are always Server Components.

---

## CSS Utilities (from globals.css)

| Class | Effect |
|-------|--------|
| `grid-pattern` | 80px grid lines (use with `opacity-30`) |
| `grid-pattern-masked` | Grid with radial mask (hero backgrounds) |
| `glow-cyan` | `box-shadow: 0 0 50px rgba(0,180,216,0.15)` |
| `glow-cyan-strong` | `box-shadow: 0 0 80px rgba(0,180,216,0.25)` |
| `text-gradient` | Gradient text from cyan-400 to cyan-500 |
| `animate-pulse-slow` | Slow 4s pulse (badge dots) |
