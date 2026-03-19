# Design System

## Design Direction

**Theme**: Dual-mode — dark sections (hero, platform, stats, CTA) + light sections (shift, solutions, ecosystem)
**Feel**: Industrial tech premium — confident, sophisticated, trustworthy. Not generic corporate. Not startup playful.

---

## Color Palette

### Navy (Backgrounds + Headings on Light)

| Token | Hex | Role |
|-------|-----|------|
| `navy-900` | `#0A1628` | Primary dark background, hero, footer; **headings on light bg** |
| `navy-800` | `#111D35` | Alternate dark sections, cards on dark bg |
| `navy-700` | `#162544` | Borders on dark backgrounds |
| `navy-600` | `#1E3A5F` | Subtle borders on dark bg; **subtitles on light bg** |

### Cyan (Brand Accent)

| Token | Hex | Role |
|-------|-----|------|
| `cyan-700` | `#005f8a` | Ghost button hover on light bg |
| `cyan-600` | `#0077b6` | **Primary accent on light bg** — icons, links, labels, borders |
| `cyan-500` | `#00b4d8` | **Primary accent on dark bg** — buttons, CTA bg, icons on dark |
| `cyan-400` | `#90e0ef` | Accent text on dark bg, highlights |
| `cyan-300` | `#48cae4` | Lighter highlights |
| `cyan-200` | `#b8ecf4` | Card hover border on light bg |
| `cyan-100` | `#d5f3f9` | Icon container border on light bg |
| `cyan-50` | `#eafbfd` | Icon container bg on light bg |

### Gray (Light Section Backgrounds & Text)

Uses Tailwind's built-in `slate` palette (remove custom slate overrides):

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
| `slate-800` | `#1e293b` | — |
| `slate-900` | `#0f172a` | Heading text on light bg |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `teal-600` | `#0D9488` | Secondary accent (icons) |
| `teal-100` | `#CCFBF1` | Secondary icon bg on light |
| `amber-500` | `#F59E0B` | Warning, accent variety |
| `amber-100` | `#FEF3C7` | Warning bg |

### Common Opacity Patterns

- `bg-cyan-500/10` — icon container bg (both dark and light)
- `border-cyan-500/20` — icon container border (both)
- `border-cyan-500/50` — card hover border (dark sections only)
- `bg-cyan-500/8` — glow overlays
- `bg-navy-900/80` — header backdrop
- `border-white/20` — outline button border (on dark bg)

---

## Typography

### Font Stack

| Role | Font | CSS Variable | Weights |
|------|------|-------------|---------|
| Display / Headings | Outfit | `--font-heading` | 300–800 (variable) |
| Body | DM Sans | `--font-body` | 400–700 (variable) |

Loaded via `next/font/google` in root layout. All `h1-h6` get `font-heading` via globals.css base layer.

### Text Hierarchy — Dark Sections

| Element | Classes | When to use |
|---------|---------|-------------|
| H1 (hero) | `text-4xl md:text-5xl lg:text-6xl font-bold text-white` | Page hero headline |
| H2 (section) | `text-3xl md:text-4xl font-bold text-white` | Section headings |
| H3 (card title) | `text-lg font-semibold text-white` | Card/feature titles |
| Subtitle (section) | `text-lg text-cyan-400` | Below section H2 |
| Subtitle (hero) | `text-lg md:text-xl text-slate-400` | Below page H1 |
| Body (card) | `text-slate-400 leading-relaxed` | Card descriptions |
| Label (uppercase) | `text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400` | Section divider labels |

### Text Hierarchy — Light Sections

**RULE: No cyan-500 on light backgrounds.** Minimum is cyan-600 (#0077b6) for contrast/readability.

| Element | Classes | When to use |
|---------|---------|-------------|
| H2 (section) | `text-3xl md:text-4xl font-bold text-navy-900` | Section headings |
| H3 (card title) | `text-lg font-semibold text-navy-900` | Card/feature titles |
| Subtitle (section) | `text-lg text-navy-600` | Below section H2 |
| Body (card) | `text-slate-600 leading-relaxed` | Card descriptions |
| Body (paragraph) | `text-slate-600 leading-relaxed` | Long-form text |
| Label (uppercase) | `text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600` | Section divider labels |
| Accent link | `text-cyan-600 hover:text-cyan-700` | Links, ghost buttons |
| Icons | `text-cyan-600` | Icons in cards/features |

### Text Hierarchy — Cyan CTA Section

| Element | Classes |
|---------|---------|
| H2 | `text-3xl md:text-4xl font-bold text-white` |
| Subtitle | `text-lg text-white/80` |

---

## Section Backgrounds & Rhythm

### Home Page Section Order

| # | Section | Background | Theme |
|---|---------|-----------|-------|
| 1 | Hero | `navy-900` + overlays | Dark |
| 2 | The Shift | `white` | **Light** |
| 3 | Platform at a Glance | `navy-900` | Dark |
| 4 | Stats | `navy-800` | Dark |
| 5 | Solutions | `slate-50` (#f8fafc) | **Light** |
| 6 | Ecosystem / Logos | `white` | **Light** |
| 7 | Closing CTA | `cyan-500` (#00b4d8) | **Cyan** |

### Rules
- Dark sections: `bg-navy-900` or `bg-navy-800` (alternate)
- Light sections: `bg-white` or `bg-slate-50` (alternate)
- CTA sections: `bg-cyan-500` with white text
- Never place two identical backgrounds adjacent to each other
- Light sections provide breathing room between dark sections

---

## Components

### Buttons

#### Variants by Context

| Variant | On Dark Background | On Light Background |
|---------|-------------------|---------------------|
| **primary** | `bg-cyan-500 text-white` hover: `bg-cyan-600` + glow shadow `0 0 32px rgba(0,180,216,0.4)` | Same |
| **secondary** | `border-[1.5px] border-white/20 text-white` hover: `border-white/40` | `border-[1.5px] border-slate-300 text-navy-900` hover: `border-slate-400` |
| **ghost** | `text-cyan-400` hover: `text-cyan-300` | `text-cyan-600` hover: `text-cyan-700` |
| **white** | `bg-white text-navy-900` hover: `shadow-lg` | n/a |

#### Shared Properties
- All buttons: `font-semibold px-6 py-3 rounded-lg transition-all duration-200`
- Primary on hover: `hover:scale-[1.02]`
- Border radius: `rounded-lg` (8px) — NOT rounded-xl

### Cards

#### Dark Card (on navy backgrounds)

```
bg-navy-800 border border-navy-700 rounded-2xl
hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.12)]
transition-all duration-300
```

#### Light Card (on white/slate backgrounds)

```
bg-white border border-slate-200 rounded-2xl
hover:-translate-y-1 hover:shadow-lg
transition-all duration-300
```

#### Icon Container

| Context | Background | Border | Icon Color |
|---------|-----------|--------|------------|
| Dark sections | `bg-cyan-500/10` | `border-cyan-500/20` | `text-cyan-500` |
| Light sections | `bg-cyan-50` | `border-cyan-100` | `text-cyan-600` |

### Section Header

Accepts `colorScheme` prop (`'dark'` | `'light'`):
- Dark: `text-white` title, `text-cyan-400` subtitle
- Light: `text-slate-900` title, `text-slate-500` subtitle

---

## Spacing

| Use Case | Tailwind Class | Value |
|----------|---------------|-------|
| Section padding (vertical) | `py-16 md:py-24` | 64px / 96px |
| Section padding (horizontal) | `px-4 md:px-8` | 16px / 32px |
| Content max-width | `max-w-7xl mx-auto` | 1280px |
| Narrow content | `max-w-3xl mx-auto` | 768px |
| Section header → content gap | `mb-12 md:mb-16` | 48px / 64px |
| Card padding | `p-6 md:p-8` | 24px / 32px |
| Card gap | `gap-6` | 24px |
| Page hero top padding | `pt-36 md:pt-44` | 144px / 176px (accounts for fixed h-16 header) |
| CTA section padding | `py-20 md:py-28` | 80px / 112px |

---

## Visual Elements

### Grid Pattern (Dark sections only)

```css
background-image:
  linear-gradient(rgba(0, 180, 216, 0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 180, 216, 0.04) 1px, transparent 1px);
background-size: 80px 80px;
```

Use with `opacity-30` and radial mask for hero backgrounds.

### Glow Effects

| Class | Value | Use |
|-------|-------|-----|
| `glow-cyan` | `0 0 50px rgba(0,180,216,0.15)` | Subtle element glow |
| `glow-cyan-strong` | `0 0 80px rgba(0,180,216,0.25)` | Strong element glow |
| Button hover glow | `0 0 32px rgba(0,180,216,0.4)` | Primary button hover |

### CTA Section Background

```
bg-cyan-500 with overlay:
radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)
```

---

## Scroll Animations

### Presets

| Name | Hidden State | Visible State | Use For |
|------|-------------|--------------|---------|
| `fade-up` | `opacity-0 translate-y-[60px]` | `opacity-100 translate-y-0` | Default, card grids, stacks |
| `fade-left` | `opacity-0 -translate-x-[40px]` | `opacity-100 translate-x-0` | Left column in comparisons |
| `fade-right` | `opacity-0 translate-x-[40px]` | `opacity-100 translate-x-0` | Right column in comparisons |
| `scale-up` | `opacity-0 scale-95` | `opacity-100 scale-100` | Stat numbers, badges |
| `fade-in` | `opacity-0` | `opacity-100` | Logo rows, wide content |

### Timing
- Duration: `600ms` for scroll reveal
- Easing: `ease-out`
- Stagger: `100ms` between items (cards), `80ms` (small items)
- All animations respect `prefers-reduced-motion: reduce`

---

## Iconography

**Library**: Lucide React
- Outline style (not filled)
- Size: `w-5 h-5` inline, `w-6 h-6` standalone, `w-8 h-8` feature cards
- Color: `text-cyan-500` on dark bg, `text-cyan-500` on light bg (consistent)

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

### Don't
- Don't use dark-on-dark everywhere (monotone fatigue)
- Don't use `rounded-full` on cards
- Don't place two identical backgrounds adjacent
- Don't use generic stock photos
- Don't use purple gradients or floating particles
- Don't use Inter or Roboto for headings (use Plus Jakarta Sans)
