# Portfolio Theme System

This theme system provides a consistent and professional color scheme for the entire portfolio, matching the navbar design.

## How to Use

### 1. Import Theme

Import the theme in any component where you need theme values:

```tsx
import theme from '../lib/theme';
```

### 2. Using Theme Colors

#### Direct Color Values
Use the color values directly:
```tsx
<div style={{ color: theme.colors.primary[500] }}>Text in primary color</div>
```

#### Tailwind Classes
Use the predefined Tailwind classes:
```tsx
<div className={theme.tailwind.bg.main}>Dark background</div>
<button className={theme.tailwind.bg.buttonPrimary}>Primary Button</button>
```

#### Global CSS Classes

The theme also provides global CSS classes for common components:

##### Buttons
```tsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<button className="btn-outline">Outline Button</button>
```

##### Cards
```tsx
<div className="project-card card-hover">
  Project content
</div>
```

##### Typography
```tsx
<h1 className="heading-xl">Main Heading</h1>
<h2 className="heading-lg">Section Heading</h2>
<h3 className="heading-md">Subsection Heading</h3>
<p className="text-gradient">Gradient Text</p>
```

### 3. Shadows and Effects

```tsx
<div style={{ boxShadow: theme.shadows.md }}>Card with medium shadow</div>
<div className={theme.tailwind.effect.glow}>Element with a glow effect</div>
```

### 4. Transitions

```tsx
<div className={theme.transitions.spring}>Element with spring transition</div>
```

## Color Palette Reference

- Primary: Sky blue (`#0EA5E9` / sky-500)
- Secondary: Blue (`#3B82F6` / blue-500)
- Background: Dark blue-black (`#0A101F`)
- Card backgrounds: Slate (`#1E293B` / slate-800) with transparency
- Borders: Sky blue with transparency
- Text: White, Sky variations

## Accessibility

The color scheme maintains sufficient contrast ratios for text readability and UI elements. 