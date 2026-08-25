# Brand Manual — Latil.io

Guide for colors, logos, and typography to keep Latil.io’s visual identity consistent across all channels.

---

## 1. Primary colors

### 1.1 Primary palette (blue)

Use: technology, trust, secondary UI elements.

| Name   | Hex       | Suggested use                    |
|--------|-----------|----------------------------------|
| primary-50  | `#eff6ff` | Very soft backgrounds            |
| primary-100 | `#dbeafe` | Backgrounds, soft hover          |
| primary-200 | `#bfdbfe` | Borders, card backgrounds        |
| primary-300 | `#93c5fd` | Secondary icons                  |
| primary-400 | `#60a5fa` | Links, hover states              |
| **primary-500** | `#3b82f6` | **Main blue**                |
| **primary-600** | `#2563eb` | **Buttons, secondary CTAs**    |
| primary-700 | `#1d4ed8` | Button hover                     |
| primary-800 | `#1e40af` | Text on light backgrounds        |
| primary-900 | `#1e3a8a` | Maximum contrast text            |

### 1.2 Accent palette (violet)

Use: primary brand, CTAs, headings, brand icons, highlighted elements.

| Name   | Hex       | Suggested use                    |
|--------|-----------|----------------------------------|
| accent-50  | `#f5f3ff` | Very soft backgrounds            |
| accent-100 | `#ede9fe` | Photo rings, backgrounds         |
| accent-200 | `#ddd6fe` | Soft borders                     |
| accent-300 | `#c4b5fd` | Icons in default state           |
| accent-400 | `#a78bfa` | Link hover                       |
| **accent-500** | `#8b5cf6` | **Mid violet**              |
| **accent-600** | `#7c3aed` | **Primary brand color**     |
| accent-700 | `#6d28d9` | Primary button hover             |
| accent-800 | `#5b21b6` | Text on light backgrounds        |
| accent-900 | `#4c1d95` | Maximum violet contrast          |

### 1.3 Neutrals (Tailwind default)

- **Primary text:** `gray-900` (#111827)  
- **Secondary text:** `gray-600` (#4b5563)  
- **Borders:** `gray-100` / `gray-200`  
- **Backgrounds:** `white`, `gray-50`, `slate-50`  

---

## 2. Brand gradient

The logo and hero elements use a gradient that blends blue and violet.

### Specification

- **Type:** linear, diagonal (top-left → bottom-right).  
- **CSS direction:** `135deg` (equivalent to `to bottom right`).

**Exact values:**

```css
background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%);
```

**In Tailwind:**

```html
class="bg-gradient-to-br from-primary-500 to-accent-600"
```

**Darker variant (CTAs, strong backgrounds):**

```html
class="bg-gradient-to-br from-accent-600 to-purple-600"
```

### Recommended gradient usage

- Main logo (icon and wordmark).  
- CTA section backgrounds.  
- Primary buttons.  
- Favicon and app icons.  

---

## 3. Logos

### 3.1 Logo assets

| Asset | Path | Use |
|-------|------|-----|
| Gradient wordmark | `/logos/latil-wordmark-gradient.png` | Navbar, footer, communications on light or dark backgrounds (depending on contrast). |
| 96px icon | `/logos/latil-icon-96-gradient.png` | Favicon, Apple touch icon, social. |
| Favicon | `/favicon.svg` | Browser tab. |

### 3.2 Logo usage rules

**Do:**

- Use the gradient wordmark on backgrounds that ensure good contrast (white, very light grays, or dark backgrounds with a white logo if a white version exists).  
- Respect minimum clear space around the logo (for example, the height of the “L” or the wordmark).  
- Keep the symbol/wordmark proportions; scale without distortion.  

**Avoid:**

- Changing the gradient colors (do not replace with a single color without brand rationale).  
- Compressing or stretching the logo.  
- Placing the logo on backgrounds that make it illegible or clash with the gradient.  
- Adding effects (heavy shadows, outlines, distortions).  

### 3.3 Logo colors

- Gradient: from **primary-500** (#3b82f6) to **accent-600** (#7c3aed).  
- On dark backgrounds: use a white version if available; otherwise, ensure the gradient has enough contrast.  

---

## 4. Typography

### 4.1 Primary typeface

- **Inter** (variable: `--font-inter`).  
- Weights in use: 300, 400, 500, 600, 700, 800, 900.  

### 4.2 Recommended usage

| Use | Weight | Tailwind class (e.g.) |
|-----|--------|---------------------|
| Hero / H1 headings | 700–800 | `font-bold` / `font-extrabold` |
| Section / H2 headings | 700 | `font-bold` |
| Subheadings / H3 | 600 | `font-semibold` |
| Body | 400 | `font-normal` |
| Secondary body | 400 with `text-gray-600` | — |
| Buttons, labels | 500–600 | `font-medium` / `font-semibold` |
| Captions | 400 | `text-sm` |

### 4.3 Import (already used in the project)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

---

## 5. Color usage in product

- **Single accent color in UI:** for headings, brand icons, and links use **accent (violet) only**. Do not mix blue and green in those elements; it keeps the brand consistent.  
- **Primary button:** gradient `from-accent-600 to-purple-600` or solid `accent-600`.  
- **Links and icons (e.g. LinkedIn):** `text-accent-600` / `hover:text-accent-700`.  
- **Photo/avatar rings and borders:** `ring-accent-100` or `border-accent-200`.  

---

## 6. Quick reference

| Element | Specification |
|---------|----------------|
| **Primary brand color** | Violet `#7c3aed` (accent-600) |
| **Secondary color** | Blue `#2563eb` (primary-600) |
| **Logo / hero gradient** | `linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)` |
| **Typography** | Inter (300–900) |
| **Wordmark** | `/logos/latil-wordmark-gradient.png` |
| **Icon** | `/logos/latil-icon-96-gradient.png` |

---

*Document for internal use and vendors. Update when new official logo versions or colors are added.*
