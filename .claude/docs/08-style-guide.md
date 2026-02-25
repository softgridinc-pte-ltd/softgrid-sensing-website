# Implementation Style Guide

Practical reference derived from actual codebase. When in doubt, read the source code — this guide summarizes patterns already in use.

---

## Conventions

- Fonts: Outfit (headings) + DM Sans (body) — not Inter or Space Grotesk
- Custom color tokens override Tailwind defaults (cyan-400 is #90e0ef, NOT #22d3ee)
- Cards use `rounded-xl`, buttons use `rounded-lg`
- Section backgrounds alternate: navy-900 → navy-800 → navy-900

## Colors (Custom Tailwind Tokens)

These are **NOT** Tailwind defaults. All are overridden in `tailwind.config.ts`.

| Token       | Hex       | Role                                           |
| ----------- | --------- | ---------------------------------------------- |
| `navy-900`  | `#0d1b2a` | Primary page background                        |
| `navy-800`  | `#1b263b` | Cards, alternating section backgrounds         |
| `navy-700`  | `#415a77` | Borders, dividers, card borders                |
| `navy-600`  | `#778da9` | Subtle borders (integration pills, tags)       |
| `cyan-600`  | `#0077b6` | Primary button hover (`hover:bg-cyan-600`)     |
| `cyan-500`  | `#00b4d8` | Primary accent — buttons, icons, stat values   |
| `cyan-400`  | `#90e0ef` | Accent text — links, labels, section subtitles |
| `slate-400` | `#778da9` | Secondary/muted text (descriptions, captions)  |
| `slate-100` | `#e0e1dd` | Default body text (set on `<body>`)            |
| `white`     | `#ffffff` | Headlines, card titles, primary emphasis       |

### Common Opacity Patterns

- `bg-cyan-500/10` — icon container background, badge background
- `border-cyan-500/20` — icon container border, badge border
- `border-cyan-500/30` — featured card border, hover highlight
- `border-cyan-500/50` — card hover border
- `bg-cyan-500/8` — CTA section background glow
- `bg-navy-900/80` — header backdrop

---

## Typography

### Fonts

- **Headings**: `Outfit` via CSS variable `--font-heading` → Tailwind class `font-heading`
- **Body**: `DM Sans` via CSS variable `--font-body` → Tailwind class `font-body`
- Loaded via `next/font/google` in root layout. All `h1-h6` automatically get `font-heading` via globals.css.

### Text Hierarchy

| Element            | Classes                                                          | When to use                   |
| ------------------ | ---------------------------------------------------------------- | ----------------------------- |
| H1 (hero)          | `text-4xl md:text-5xl lg:text-6xl font-bold text-white`          | Page hero headline            |
| H1 (home hero)     | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`         | Home page only (larger)       |
| H2 (section)       | `text-3xl md:text-4xl font-bold text-white`                      | Section headings              |
| H3 (card title)    | `text-lg font-semibold text-white` or `text-xl font-semibold`    | Card/feature titles           |
| Subtitle (section) | `text-lg text-cyan-400`                                          | Below section H2              |
| Subtitle (hero)    | `text-lg md:text-xl text-slate-400`                              | Below page H1                 |
| Body (long form)   | `text-lg md:text-xl text-slate-300 leading-[1.8]`                | Paragraphs (About page story) |
| Body (card desc)   | `text-slate-400 leading-relaxed` or `text-sm text-slate-400`     | Card descriptions             |
| Label (uppercase)  | `text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400` | Section divider labels        |
| Label (pill/badge) | `text-cyan-400 text-sm font-medium tracking-wide`                | Hero eyebrow badges           |

### Key Rules

- `text-white` for titles only, never for body text
- `text-slate-300` for paragraph-length body text
- `text-slate-400` for shorter descriptions and secondary text
- `text-cyan-400` for accent text: links, labels, proof points, subtitles
- `text-cyan-500` for icons only (not text on dark backgrounds)
- `text-slate-500` for very muted text (e.g., product variant notes)

---

## Layout

### Container

```
max-w-7xl mx-auto px-4 md:px-8       — Standard content width
max-w-3xl mx-auto px-4 md:px-8       — Narrow (text-heavy, CTA sections)
```

### Section Spacing

```
py-16 md:py-24      — Standard section
py-20 md:py-28      — Hero-adjacent section (slightly more breathing room)
pt-36 pb-20 md:pt-44 md:pb-24  — Page hero (accounts for fixed header h-16)
```

### Section Background Alternation

Sections alternate between `bg-navy-900` and `bg-navy-800` for visual rhythm. The page background is `bg-navy-900`, so the first content section after hero is typically `bg-navy-800`.

### Gap & Spacing

```
gap-8               — Between grid/flex items (cards)
mb-12 md:mb-16      — After section header, before content
space-y-4 to space-y-5  — Between stacked elements inside cards
mb-5 to mb-6        — After icon container in cards
```

---

## Page Structure Pattern

All pages are **Server Components** (no `'use client'`). They export `metadata` and a default function returning `<>...</>`.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Softgrid Sensing",
  description: "...",
};

export default function PageName(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        {/* Grid + glow backgrounds */}
        {/* Content with relative z-10 */}
      </section>

      {/* Sections — alternate bg-navy-800 / bg-navy-900 */}
      <ClientSection />

      {/* CTA */}
      <section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
        {/* Glow + centered content */}
      </section>
    </>
  );
}
```

Header and Footer are rendered by the root layout — pages never include them.

---

## Hero Section Template

```tsx
<section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
  {/* Grid background */}
  <div className="absolute inset-0 grid-pattern opacity-30" />

  {/* Radial glow */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
    style={{
      background:
        "radial-gradient(ellipse at center, rgba(0,180,216,0.1) 0%, transparent 70%)",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
    {/* Eyebrow badge */}
    <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8">
      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse-slow" />
      <span className="text-cyan-400 text-sm font-medium tracking-wide">
        Label
      </span>
    </div>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
      Headline
    </h1>
    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
      Subheadline
    </p>
  </div>
</section>
```

---

## CTA Section Template

```tsx
<section className="bg-navy-800 py-16 md:py-24 relative overflow-hidden">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />

  <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      CTA Headline
    </h2>
    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
      Supporting text.
    </p>
    <Button href="/contact" variant="primary" className="min-w-[160px]">
      CTA Label
    </Button>
  </div>
</section>
```

---

## Components

### Button (`@/components/ui/Button`)

| Variant     | Visual                                                                   |
| ----------- | ------------------------------------------------------------------------ |
| `primary`   | `bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg hover:scale-[1.02]` |
| `secondary` | `border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white`       |
| `ghost`     | `text-cyan-400 hover:text-cyan-300` (no background or border)            |

With `href` → renders `<Link>`. Without → renders `<button>`.

### Card

```
bg-navy-800 border border-navy-700 rounded-xl p-6 (or p-8 for larger cards)
hover:border-cyan-500/50 transition-all duration-300
```

Note: Cards use `rounded-xl`, buttons use `rounded-lg`.

### Icon Container

```tsx
<div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
  <SomeIcon className="w-6 h-6 text-cyan-500" />
</div>
```

Smaller variant: `w-10 h-10` container, `w-5 h-5` icon.

### Badge / Pill

```tsx
{
  /* Eyebrow badge (hero) */
}
<div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5">
  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse-slow" />
  <span className="text-cyan-400 text-sm font-medium tracking-wide">Label</span>
</div>;

{
  /* Tag pill (cards) */
}
<span className="bg-cyan-500/10 text-cyan-400 text-xs rounded-full px-3 py-1">
  Tag
</span>;

{
  /* Outlined pill (integration/product tags) */
}
<span className="border border-navy-600 text-slate-400 text-xs rounded-full px-4 py-1.5">
  Tag
</span>;
```

### Section Label (with divider line)

```tsx
<div className="flex items-center gap-4 mb-10">
  <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">
    Label
  </span>
  <div className="flex-1 h-px bg-navy-700" />
</div>
```

### "Learn More →" Link Pattern

```tsx
<Link
  href={href}
  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
>
  Learn More
  <span className="transition-transform duration-200 group-hover:translate-x-1">
    &rarr;
  </span>
</Link>
```

Requires `group` class on the parent container.

---

## Scroll Animation Pattern

All scroll-triggered animations use the `useInView` hook (`@/hooks/useInView`).

### Rules

1. The section component must be `'use client'`
2. `ref` goes on the **container div**, not the `<section>`
3. Individual children use conditional classes + staggered `transitionDelay`
4. Default threshold: `0.1` (triggers when 10% visible)
5. Triggers once by default

### Template

```tsx
"use client";

import { useInView } from "@/hooks/useInView";

export function AnimatedSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* content */}
          </div>
        ))}
      </div>
    </section>
  );
}
```

### Timing Conventions

- `duration-500` for scroll reveal transitions
- `duration-300` for hover transitions
- `duration-200` for button/link color transitions
- Stagger: `i * 100ms` (cards), `i * 80ms` (small items like icons)

---

## CSS Utilities (from globals.css)

| Class                 | Effect                                         |
| --------------------- | ---------------------------------------------- |
| `grid-pattern`        | Subtle 4rem grid lines (use with `opacity-30`) |
| `grid-pattern-masked` | Grid with radial mask (hero backgrounds)       |
| `glow-cyan`           | `box-shadow: 0 0 50px rgba(0,180,216,0.15)`    |
| `glow-cyan-strong`    | `box-shadow: 0 0 80px rgba(0,180,216,0.25)`    |
| `text-gradient`       | Gradient text from cyan-400 to cyan-500        |
| `animate-pulse-slow`  | Slow 4s pulse (used on badge dots)             |
| `animate-fade-in`     | 0.6s ease-out fade in                          |
| `animate-fade-in-up`  | 0.6s ease-out fade in + slide up 24px          |

---

## Navigation (Header)

- Active detection: `pathname.startsWith(href)` (except `/` which uses exact match)
- Active class: `text-cyan-400`
- Default class: `text-slate-100 hover:text-cyan-400`
- New pages automatically highlight if their route matches an existing nav `href`

---

## File Organization

```
app/
  [page]/page.tsx              — Server Component, metadata + layout

components/
  layout/Header.tsx            — 'use client' (navigation)
  layout/Footer.tsx            — Server Component
  ui/Button.tsx                — Shared button
  ui/Card.tsx                  — Shared card
  ui/SectionHeader.tsx         — Centered section heading
  ui/StatBlock.tsx             — 'use client' (animated counter)
  sections/[page]/             — Page-specific section components

hooks/
  useInView.ts                 — 'use client' (Intersection Observer)
```

### `'use client'` Boundary

Push it as far down as possible. Only add when component uses:

- `useInView`, `useState`, `useEffect`, `useRef`
- Event handlers, browser APIs
- `usePathname` (Header)

Pages themselves are always Server Components.
