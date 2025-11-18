# Documentation Guidelines

This document outlines the principles and best practices for documenting components in the component showcase.

## Structure

### Section Component

Always use the `Section` component to organize content:

```tsx
<Section title="Section Title" description="Brief description explaining the purpose of this section.">
  {/* Content */}
</Section>
```

**Key points:**
- The `Section` component automatically adds spacing (`mt-8`) between the description and content
- A separator is automatically added after each section
- Titles use `font-normal` (Regular weight), never bold or semibold
- Descriptions use `text-sm text-muted-foreground`

### Section Titles

- **Never use ALL CAPS** - Use normal case (e.g., "Usage Examples" not "USAGE EXAMPLES")
- Use `font-normal` for all titles
- Keep titles concise and descriptive

### Section Descriptions

- Provide a brief, clear description for each section
- Explain the purpose and context
- Keep descriptions under 2-3 sentences
- Use `text-sm text-muted-foreground` styling (handled by `Section` component)

## Common Sections

### 1. Overview
Show the complete component system in a grid or layout that demonstrates all variants and sizes at once.

**Example:**
```tsx
<Section title="Overview" description="Complete button system showing all variants and sizes in a grid layout.">
  {/* Grid showing all variants and sizes */}
</Section>
```

### 2. Variants
Document all available variants with clear examples and explanations.

**Example:**
```tsx
<Section title="Variants" description="Different button styles to communicate hierarchy and importance. Each variant uses semantic design tokens for consistent theming.">
  {/* Examples of each variant */}
</Section>
```

### 3. Sizes
Show all available sizes with their use cases.

**Example:**
```tsx
<Section title="Sizes" description="Button sizes adapt to different contexts and density requirements. Icon sizes scale proportionally.">
  {/* Examples of each size */}
</Section>
```

### 4. States
Document interactive states (default, hover, active, disabled, etc.).

**Example:**
```tsx
<Section title="States" description="Button states communicate interactivity and provide feedback to users.">
  {/* Examples of different states */}
</Section>
```

### 5. Usage Examples
Provide real-world examples showing the component in context. Use a masonry grid layout for visual variety.

**Example:**
```tsx
<Section title="Usage Examples" description="Real-world examples showing buttons in different contexts and interfaces.">
  <div className="space-y-8">
    {/* Full-width example if needed */}
    <div>
      <p className="text-xs text-muted-foreground mb-3">Data table toolbar</p>
      {/* Full-width component */}
    </div>
    
    {/* Masonry grid for other examples */}
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      <div className="break-inside-avoid mb-6">
        {/* Example content */}
      </div>
    </div>
  </div>
</Section>
```

## Layout Principles

### Masonry Grid for Usage Examples

- Use `columns-1 md:columns-2 lg:columns-3` for responsive masonry layout
- Add `break-inside-avoid mb-6` to each item to prevent breaking across columns
- For full-width components, place them outside the masonry grid

### Spacing

- Use consistent spacing: `space-y-8` for main containers, `mb-6` for items in masonry
- The `Section` component handles spacing between description and content (`mt-8`)

## Content Guidelines

### Avoid Unnecessary Cards

- Don't wrap content in `Card` components unless the card itself is part of the example
- Use simple `div` containers with borders when needed for visual separation

### Use Real Examples

- Create realistic, contextual examples (forms, notifications, lists, toolbars, etc.)
- Show how components work together with other UI elements
- Include icons using `MaterialSymbol` component with `weight={300}`

### Text Styling

- All labels and titles use `font-normal` (Regular weight)
- Never use `font-bold`, `font-semibold`, or `font-medium` for titles
- Use `text-xs text-muted-foreground` for helper text and labels above examples

### Icons

- Always use `MaterialSymbol` component, never SVG or other icon libraries
- **Always use Material Symbols icon names that exist** - Verify icon names before using them
- Use `weight={300}` consistently
- Icon sizes should scale with component sizes (12px for xs, 16px for sm, 20px for default/lg)
- Icon names use snake_case format (e.g., `calendar_today`, `content_copy`, `emoji_emotions`)

## Example Structure

```tsx
<Section title="Component Name" description="Brief description of the component and its purpose.">
  <div className="space-y-6">
    {/* Basic examples */}
    <div>
      <p className="text-xs text-muted-foreground mb-3">Basic usage</p>
      {/* Examples */}
    </div>
    
    {/* Variants */}
    <div>
      <p className="text-xs text-muted-foreground mb-3">Variants</p>
      {/* Variant examples */}
    </div>
    
    {/* Additional sections as needed */}
  </div>
</Section>
```

## Checklist

When documenting a new component, ensure:

- [ ] All sections use the `Section` component
- [ ] Titles are in normal case (not ALL CAPS)
- [ ] Titles use `font-normal`
- [ ] Each section has a clear, concise description
- [ ] Usage examples are realistic and contextual
- [ ] Masonry grid is used for multiple usage examples
- [ ] No unnecessary `Card` components
- [ ] Icons use `MaterialSymbol` with `weight={300}`
- [ ] All icon names are valid Material Symbols icons (verify they exist)
- [ ] Spacing is consistent throughout
- [ ] Helper text uses `text-xs text-muted-foreground`

## Reference

See `components/component-showcase.tsx` for the Button component documentation as a complete reference implementation.

