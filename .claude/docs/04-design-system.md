# Design System

## Design Direction

**Theme**: Dark mode, industrial tech aesthetic
**Feel**: Professional, confident, technology-forward, grounded

## Color Palette

### Primary Colors

```css
/* Background Colors */
--bg-primary: #0d1b2a;      /* Deep navy - main background */
--bg-secondary: #1b263b;    /* Lighter navy - cards, sections */
--bg-tertiary: #415a77;     /* Even lighter - hover states */

/* Accent Color */
--accent-primary: #00b4d8;  /* Cyan/teal - buttons, links, highlights */
--accent-secondary: #0077b6; /* Darker cyan - hover states */
--accent-tertiary: #90e0ef; /* Light cyan - subtle highlights */

/* Text Colors */
--text-primary: #ffffff;    /* White - headings */
--text-secondary: #e0e1dd;  /* Off-white - body text */
--text-tertiary: #778da9;   /* Muted - secondary text, captions */

/* Semantic Colors */
--success: #10b981;         /* Green - success states */
--warning: #f59e0b;         /* Amber - warning states */
--error: #ef4444;           /* Red - error states */
```

### Tailwind Config

```javascript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'navy': {
          900: '#0d1b2a',
          800: '#1b263b',
          700: '#415a77',
          600: '#778da9',
        },
        // Accent
        'cyan': {
          400: '#90e0ef',
          500: '#00b4d8',
          600: '#0077b6',
        },
        // Text
        'slate': {
          100: '#e0e1dd',
          400: '#778da9',
        }
      }
    }
  }
}
```

## Typography

### Font Stack

```css
/* Primary Font - Headings and UI */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Alternative: If you want more geometric/tech feel */
font-family: 'DM Sans', sans-serif;
/* or */
font-family: 'Space Grotesk', sans-serif;
```

### Font Sizes (Tailwind)

| Element | Class | Size | Weight |
|---------|-------|------|--------|
| H1 (Hero) | `text-5xl md:text-6xl lg:text-7xl` | 48/60/72px | font-bold |
| H2 (Section) | `text-3xl md:text-4xl` | 30/36px | font-bold |
| H3 (Subsection) | `text-2xl` | 24px | font-semibold |
| H4 (Card title) | `text-xl` | 20px | font-semibold |
| Body | `text-base` | 16px | font-normal |
| Body Large | `text-lg` | 18px | font-normal |
| Small | `text-sm` | 14px | font-normal |
| Caption | `text-xs` | 12px | font-normal |

### Line Heights

```css
/* Headings */
line-height: 1.1;  /* tight */

/* Body */
line-height: 1.6;  /* relaxed */
```

## Spacing

Use Tailwind's default spacing scale. Key values:

| Use Case | Tailwind Class | Value |
|----------|----------------|-------|
| Section padding (vertical) | `py-16 md:py-24` | 64px / 96px |
| Section padding (horizontal) | `px-4 md:px-8 lg:px-16` | 16/32/64px |
| Component gap | `gap-8` | 32px |
| Card padding | `p-6 md:p-8` | 24/32px |
| Text spacing | `space-y-4` | 16px |

## Components

### Buttons

**Primary Button**
```jsx
<button className="
  bg-cyan-500 
  hover:bg-cyan-600 
  text-white 
  font-semibold 
  px-6 py-3 
  rounded-lg 
  transition-colors
">
  Contact Us
</button>
```

**Secondary Button (Outline)**
```jsx
<button className="
  border border-cyan-500 
  text-cyan-500 
  hover:bg-cyan-500 
  hover:text-white 
  font-semibold 
  px-6 py-3 
  rounded-lg 
  transition-colors
">
  Learn More
</button>
```

**Ghost Button**
```jsx
<button className="
  text-cyan-400 
  hover:text-cyan-300 
  font-semibold 
  transition-colors
">
  View Details →
</button>
```

### Cards

**Standard Card**
```jsx
<div className="
  bg-navy-800 
  border border-navy-700 
  rounded-xl 
  p-6 
  hover:border-cyan-500/50 
  transition-colors
">
  <h3 className="text-xl font-semibold text-white mb-2">
    Card Title
  </h3>
  <p className="text-slate-100">
    Card description text goes here.
  </p>
</div>
```

**Feature Card (with icon)**
```jsx
<div className="
  bg-navy-800 
  border border-navy-700 
  rounded-xl 
  p-8 
  text-center
">
  <div className="
    w-12 h-12 
    bg-cyan-500/20 
    rounded-lg 
    flex items-center justify-center 
    mx-auto mb-4
  ">
    <IconComponent className="w-6 h-6 text-cyan-500" />
  </div>
  <h3 className="text-xl font-semibold text-white mb-2">
    Feature Title
  </h3>
  <p className="text-slate-400">
    Feature description.
  </p>
</div>
```

### Section Container

```jsx
<section className="bg-navy-900 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    {/* Section content */}
  </div>
</section>
```

**Alternate Section (slightly lighter background)**
```jsx
<section className="bg-navy-800 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    {/* Section content */}
  </div>
</section>
```

### Section Header

```jsx
<div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Section Title
  </h2>
  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
    Section subtitle or description goes here.
  </p>
</div>
```

### Stat Block

```jsx
<div className="text-center">
  <div className="text-4xl md:text-5xl font-bold text-cyan-500 mb-2">
    10,000+
  </div>
  <div className="text-slate-400">
    Assets Monitored
  </div>
</div>
```

### Navigation

**Desktop**
```jsx
<header className="
  bg-navy-900/80 
  backdrop-blur-md 
  border-b border-navy-800 
  fixed w-full 
  z-50
">
  <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
    <Logo />
    <NavLinks />
    <CTAButton />
  </nav>
</header>
```

**Nav Link**
```jsx
<a className="
  text-slate-100
  hover:text-cyan-400
  font-medium
  transition-colors
">
  Solutions
</a>
```

**Active Nav Link**
```jsx
<a className="
  text-cyan-400
  font-medium
">
  Solutions
</a>
```

## Visual Elements

### Decorative Grid Pattern (Background)

For tech/industrial feel, use subtle grid or circuit-board-like patterns:

```jsx
<div className="
  absolute inset-0 
  bg-[linear-gradient(to_right,#1b263b_1px,transparent_1px),linear-gradient(to_bottom,#1b263b_1px,transparent_1px)] 
  bg-[size:4rem_4rem]
  opacity-20
"/>
```

### Gradient Accents

```jsx
/* Subtle gradient overlay for hero sections */
<div className="
  absolute inset-0 
  bg-gradient-to-b 
  from-cyan-500/10 
  to-transparent
"/>
```

### Glow Effect (for key elements)

```jsx
<div className="
  shadow-[0_0_50px_rgba(0,180,216,0.3)]
"/>
```

## Responsive Breakpoints

Follow Tailwind defaults:

| Breakpoint | Min Width | Use Case |
|------------|-----------|----------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## Iconography

Use **Lucide React** for icons:

```bash
npm install lucide-react
```

```jsx
import { Server, Cpu, Shield, BarChart3 } from 'lucide-react';
```

Preferred icon style:
- Outline style (not filled)
- Size: `w-5 h-5` for inline, `w-6 h-6` for standalone, `w-8 h-8` for feature cards
- Color: `text-cyan-500` for accent, `text-slate-400` for neutral

## Images

### Style Guidelines
- Industrial/tech imagery (machinery, control rooms, buildings)
- NOT generic stock photos of people smiling
- Prefer actual product screenshots
- Use overlays/filters to match dark theme if images are too bright

### Image Treatment

```jsx
/* Dark overlay for images */
<div className="relative">
  <img src="..." className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-navy-900/60" />
</div>
```

## Animation

Keep animations subtle and professional:

```jsx
/* Hover transitions */
transition-colors duration-200

/* Fade in on scroll (use Intersection Observer) */
transition-opacity duration-500

/* Button hover scale (very subtle) */
hover:scale-[1.02] transition-transform
```

## Do's and Don'ts

### Do's
- Use consistent spacing (stick to Tailwind scale)
- Maintain high contrast for readability
- Use accent color sparingly for impact
- Keep UI elements aligned to grid

### Don'ts
- Don't use too many colors
- Don't use bright backgrounds
- Don't overuse animations
- Don't use rounded-full on cards (use rounded-lg or rounded-xl)
- Don't use shadows on dark backgrounds (they don't work well)
