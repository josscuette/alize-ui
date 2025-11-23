---
description: Orchestrates React TypeScript component creation from Figma with validation, decision-making, and best practices
alwaysApply: false
---

# Create MUI Component from Figma

## Command Overview

This command orchestrates the complete workflow for creating React TypeScript components from Solstice Design System Figma designs, including:
- Prerequisites validation (jll-ds-mui version, theme provider, Figma MCP)
- Component import decisions (jll-ds-mui vs MUI)
- Styling approach selection (styled vs useTheme)
- Minimal token philosophy application
- Troubleshooting guidance

**Reference:** This command uses `.cursor/rules/component-libraries-react-typescript-figma-mcp-focused.mdc` for component templates and token mappings.

---

## Prerequisites Validation

Before component generation, this command validates:

### 1. jll-ds-mui Version Check (latest)
- Checks `package.json` for `@jllt/jll-ds-mui` version
- Checks latest version
- If < 0.4.2, stops and prompts user to upgrade to latest version
- Provides upgrade command: `npm install @jllt/jll-ds-mui@latest`

### 2. Package Installation
- Verifies `@jllt/jll-ds-mui` is installed
- Checks that types are available

### 3. Theme Provider Setup
- Verifies `SolsticeThemeProvider` exists in your app
- Checks that it wraps the component tree

### 4. Figma MCP Integration
- Tests Figma MCP connection
- Validates Figma link format
- Checks design accessibility

**If any prerequisite fails**, the command stops and provides specific instructions to resolve the issue.

---

## Usage Instructions

### Step 1: Component Name
When prompted, enter the desired component name. This should be in PascalCase (e.g., `ContactForm`, `UserProfile`, `DataTable`).

**Example:**
```
Component name: ContactForm
```

### Step 2: Figma Link
Provide the URL to your Figma design. The link should point to the specific component or frame you want to convert.

**Example:**
```
Figma link: https://www.figma.com/design/ABC123/SolsticeDS?node-id=123%3A456
```

### Step 3: Custom Directory (Optional)
If you want to create the component in a different directory than the default location, provide the path. Otherwise, press Enter to use the default location as defined in the `component-libraries-react-typescript-figma-mcp-focused.mdc` rule.

**Default location:** `src/components/[ComponentName]/`

**Example custom path:**
```
Custom directory (leave blank for default): src/features/dashboard/components/
```

---

## Component Creation Workflow

Once you provide the component name and Figma link, the command orchestrates these key decisions:

### Step 1: Analyze Figma Design
1. Extract component structure from Figma
2. Identify all sub-components and layers
3. Note design tokens used in the design

### Step 2: Determine Component Imports
**Decision: Use jll-ds-mui Solstice component or standard MUI?**

For each component in your design:
- Check if it exists in the jll-ds-mui Solstice components list
- If YES → Import from `@jllt/jll-ds-mui`
- If NO → Import from `@mui/material`

**Common Solstice Components:**
- Primary: Button, Icon, IconButton, Avatar, Stack
- Forms: FormControlLabel, ToggleButton, CircularProgress
- Data: MetricCard, MetricCardLabel, MetricCardContent
- Specialized: Pill, Tag, Bubble, BlockLabel, Dropzone, InfoBar

**When in doubt, check the Component Import Priority section in the rule for the complete list.**

### Step 3: Choose Styling Approach
**Decision: Use styled() components or useTheme() hook?**

**Use styled() if:**
- Component has 3+ styled sub-elements
- Component is reusable across the app
- Need theme slot customization capability

**Use useTheme() if:**
- Component is simple/one-off
- Few styling requirements
- Rapid prototyping needed

### Step 4: Apply Minimal Token Philosophy
**Decision: Add tokens or trust pre-themed components?**

**Default behavior: TRUST pre-themed components**

1. Start with component as-is (no custom tokens)
2. Compare rendered result with Figma design
3. Only add tokens if values DON'T match
4. Always add comment explaining WHY the override exists

**When to add tokens:**
- Figma shows explicit override (different from component default)
- Designer used specific token variable intentionally
- Unusual values (like 18px instead of standard 16px)
- Design notes indicate custom styling

**When NOT to add tokens:**
- Value matches component default theme value
- Semantic meaning matches (e.g., primary button uses primary color automatically)
- No explicit override noted in Figma

### Step 5: Generate Component
Apply the selected templates and patterns from the rule file to generate clean, maintainable code.

---

## Component Generation

Once you provide the information above, the command will:

1. **Retrieve Figma Design Data** using the Figma MCP integration to extract:
   - Layer structure and hierarchy
   - Design tokens and styling information
   - Typography and spacing values
   - Color and theme tokens

2. **Validate Requirements** from `component-libraries-react-typescript-figma-mcp-focused.mdc`:
   - @jllt/jll-ds-mui package is available
   - Figma MCP integration is accessible
   - MUI Theme Provider is configured
   - Token management system is in place

3. **Generate Component Files**:
   - `index.tsx` - Main component file with Figma-based implementation
   - `types.ts` - Component type definitions
   - `[ComponentName].test.tsx` - Test template

4. **Apply Design Tokens** mapping Figma design tokens to Solstice MUI tokens:
   - Spacing tokens: `spacing/micro/4` → `tokens.spacing.fixed.micro[4]`
   - Spacing tokens: `spacing/small/8` → `tokens.spacing.fixed.static[8]`
   - Border radius: `radius/stronger` → `tokens.radii.stronger`
   - Typography: `typography/body/emphasized` → `tokens.typography.body.emphasized`
   - Colors: `text/base/subdued` → `tokens.theme.text.base.subdued`

---

## Token Usage Examples

These examples show the minimal token philosophy in action:

### ✅ CORRECT: Trust Pre-Themed Components

```typescript
// Button with default styling - NO tokens needed!
<Button variant="primary">Submit</Button>

// Stack with default gap - NO tokens needed!
<Stack direction="row">
  <Button>Cancel</Button>
  <Button variant="primary">OK</Button>
</Stack>

// Avatar is pre-themed from jll-ds-mui
<Avatar>JD</Avatar>
```

### ✅ CORRECT: Add Tokens for Explicit Overrides

```typescript
// Button with CUSTOM padding (designer override)
<Button 
  variant="primary"
  sx={{
    // Override: Design specifies extra padding for emphasis
    padding: theme.fixedSpacing.micro[6],
  }}
>
  Important Action
</Button>

// Dialog with custom border radius
<Dialog
  sx={{
    '& .MuiDialog-paper': {
      // Override: Design uses stronger radius for this modal
      borderRadius: theme.radii.stronger,
    },
  }}
>
  {content}
</Dialog>
```

### ❌ WRONG: Unnecessary Tokens (Matching Defaults)

```typescript
// DON'T add tokens that already match defaults!
<Button 
  sx={{
    padding: theme.fixedSpacing.micro[4],  // Already the default!
  }}
>
  Submit
</Button>

// Stack gap already has default - don't override
<Stack 
  direction="row"
  sx={{
    gap: theme.fixedSpacing.micro[4],  // Already the default!
  }}
>
  <Item />
</Stack>
```

---

## Component Import Priority Reference

### Decision Tree: Which Component Library to Use?

For each component in your design, follow this decision tree:

1. **Is it in the Solstice Components list below?**
   - YES → Import from `@jllt/jll-ds-mui`
   - NO → Check if it's a standard MUI component

2. **Is it a standard MUI component?**
   - YES → Import from `@mui/material`
   - NO → Consider using a wrapper or alternative

### Solstice Components (Import from @jllt/jll-ds-mui)

| Category | Components |
|---|---|
| **Primary UI** | Button, IconButton, Icon, Avatar |
| **Containers & Layout** | CardContainer, Spacer |
| **Navigation** | HorizontalNavigation |
| **Forms** | FormControlLabel |
| **Progress** | CircularProgress |
| **Data Display** | MetricCard, MetricCardLabel, MetricCardContent |
| **Specialized** | BlockLabel, Bubble, Dropzone, InfoBar, LabelGroup, Pill, Tag |

### MUI Components (Import from @mui/material)

| Category | Components |
|---|---|
| **Layout** | Box, Grid, Container, Paper, Stack |
| **Display** | Typography, Divider |
| **Dialogs** | Dialog, DialogTitle, DialogContent, DialogActions |
| **Forms** | FormControl, InputLabel, OutlinedInput, Select, Checkbox, Radio, FormHelperText |
| **Lists** | List, ListItem, ListItemButton, ListItemText, ListItemIcon |
| **Navigation** | Tabs, Tab, AppBar, Toolbar |
| **Surfaces** | Card, CardContent, CardHeader, CardActions |
| **Other** | Backdrop, Modal, Popover, Tooltip |

### ⚠️ Important Component Notes

**Stack Component**: The `Stack` component in `@jllt/jll-ds-mui` has significant differences from MUI's `Stack`. Unless specifically using Solstice's version, import `Stack` from `@mui/material`.

**TextField Component**: TextField is **NOT supported** by jll-ds-mui. For form fields, use:
- `FormControl` (wrapper)
- `FormLabel` (label)
- `OutlinedInput` (input field)
- `FormHelperText` (helper/error text)

### Import Pattern

```typescript
// ✅ CORRECT - Solstice components first, then MUI components
import { Button, Icon, IconButton, Avatar } from '@jllt/jll-ds-mui'
import { Box, Stack, Typography, Dialog, FormControl, OutlinedInput } from '@mui/material'

// ❌ WRONG - Don't import from MUI if Solstice version exists
import { Button } from '@mui/material'  // NO! Use jll-ds-mui version!
```

---

## Complete Token Mapping Reference

### Token Categories and Paths

All Solstice tokens are accessed directly from the `theme` object in MUI styled components or sx props using inline theme functions.

#### Spacing Tokens - theme.fixedSpacing and theme.responsiveSpacing

| Figma Value | Token Path | Usage |
|-------------|------------|-------|
| `spacing/micro/4` | `theme.fixedSpacing.micro[4]` | Smallest fixed spacing |
| `spacing/micro/8` | `theme.fixedSpacing.micro[8]` | Small fixed spacing |
| `spacing/static/8` | `theme.fixedSpacing.static[8]` | Fixed spacing 8 |
| `spacing/static/16` | `theme.fixedSpacing.static[16]` | Fixed spacing 16 |
| `spacing/static/24` | `theme.fixedSpacing.static[24]` | Fixed spacing 24 |
| `spacing/static/32` | `theme.fixedSpacing.static[32]` | Fixed spacing 32 |
| Fallback | `theme.spacing(n)` | Use only if specific token not available |

#### Border Radius Tokens - theme.radii

| Figma Value | Token Path |
|-------------|------------|
| `radius/none` | `theme.radii.none` |
| `radius/weak` | `theme.radii.weak` |
| `radius/default` | `theme.radii.default` |
| `radius/strong` | `theme.radii.strong` |
| `radius/stronger` | `theme.radii.stronger` |
| `radius/full` | `theme.radii.full` |

#### Typography Tokens - theme.typography

| Figma Value | Token Path |
|-------------|------------|
| `typography/heroTitle` | `theme.typography.heroTitle` |
| `typography/title1` | `theme.typography.title1` |
| `typography/title2` | `theme.typography.title2` |
| `typography/title3` | `theme.typography.title3` |
| `typography/bodyEmphasized` | `theme.typography.bodyEmphasized` |
| `typography/body` | `theme.typography.body` |
| `typography/bodyStrong` | `theme.typography.bodyStrong` |
| `typography/bodySmall` | `theme.typography.bodySmall` |
| `typography/annotation` | `theme.typography.annotation` |
| `typography/eyebrow` | `theme.typography.eyebrow` |
| `typography/dataValue` | `theme.typography.dataValue` |
| `typography/dataLabel` | `theme.typography.dataLabel` |
| `typography/callout` | `theme.typography.callout` |
| `typography/message` | `theme.typography.message` |
| `typography/link` | `theme.typography.link` |

**Usage in styled components:**
```typescript
const Title = styled(Typography)(({ theme }: { theme: Theme }) => ({
  ...theme.typography.title2,  // Spreads all font properties
  color: theme.palette.text.base.default,
}))
```

#### Surface/Background Colors - theme.palette.surface

| Figma Value | Token Path |
|-------------|------------|
| `surface/base/default` | `theme.palette.surface.base.default` |
| `surface/base/secondary` | `theme.palette.surface.base.secondary` |
| `surface/base/secondarySubdued` | `theme.palette.surface.base.secondarySubdued` |
| `surface/base/secondarySubduedAlpha` | `theme.palette.surface.base.secondarySubduedAlpha` |
| `surface/base/secondaryAlpha` | `theme.palette.surface.base.secondaryAlpha` |
| `surface/base/persistent` | `theme.palette.surface.base.persistent` |
| `surface/accent/default` | `theme.palette.surface.accent.default` |
| `surface/interaction/default` | `theme.palette.surface.interaction.default` |
| `surface/rag/success` | `theme.palette.surface.rag.success` |
| `surface/rag/warning` | `theme.palette.surface.rag.warning` |
| `surface/rag/danger` | `theme.palette.surface.rag.danger` |

#### Text Colors - theme.palette.text

| Figma Value | Token Path |
|-------------|------------|
| `text/base/default` | `theme.palette.text.base.default` |
| `text/base/subdued` | `theme.palette.text.base.subdued` |
| `text/base/persistent` | `theme.palette.text.base.persistent` |
| `text/base/reversed` | `theme.palette.text.base.reversed` |
| `text/base/reversedSubdued` | `theme.palette.text.base.reversedSubdued` |
| `text/base/reversedPersistent` | `theme.palette.text.base.reversedPersistent` |
| `text/interaction/default` | `theme.palette.text.interaction.default` |
| `text/interaction/reversed` | `theme.palette.text.interaction.reversed` |
| `text/rag/success` | `theme.palette.text.rag.success` |
| `text/rag/warning` | `theme.palette.text.rag.warning` |
| `text/rag/danger` | `theme.palette.text.rag.danger` |
| `text/utilities/placeholder` | `theme.palette.text.utilities.placeholder` |
| `text/utilities/disabled` | `theme.palette.text.utilities.disabled` |

#### Stroke/Border Colors - theme.palette.stroke

| Figma Value | Token Path |
|-------------|------------|
| `stroke/subdued` | `theme.palette.stroke.subdued` |
| `stroke/default` | `theme.palette.stroke.default` |
| `stroke/interactionSubdued` | `theme.palette.stroke.interactionSubdued` |
| `stroke/interaction` | `theme.palette.stroke.interaction` |
| Border width | `theme.borderWidth` |

#### Tonal Colors - theme.palette.tonal

Access tonal colors using pattern: `theme.palette.tonal.[colorName].[strength]`

Available colors: ocean, sand, amber, forest, watercourse, atoll, science, royal, lilac, lavender, magenta

Strengths: `strong`, `subdued`, `shade1`, `shade2`

Example: `theme.palette.tonal.ocean.strong`

---

## Component Styling Reference

### Pre-styled Components (No Custom Styling Needed)

These components already have comprehensive theme overrides. Do not add custom styling unless specifically requested:

- Button
- Checkbox
- Alert
- Avatar
- Badge
- Bubble
- MenuItem
- Menu
- StatusIndicator
- ToggleButton
- BreadCrumbs
- HorizontalNavigation
- Tabs and Tab
- All MUI input components: Input, DateCalendar, DateTimePicker, TimePicker, Select, Pagination

### ⚠️ TextField is NOT Supported

TextField is not compatible with Solstice design patterns. Use `FormControl` with `InputLabel`, `OutlinedInput`, and `FormHelperText` instead.

### Components with Built-in Flex Properties

These components have flex styles already applied. Do not add `display: 'flex'` unless specifically requested:

- List
- ListItem
- Stack (from @mui/material)
- Grid
- Container

**When to add styling**: Add background color, text color, margins, and padding only if specified in the design and different from defaults.

### Components Requiring Custom Styling

#### Container Components
- Box
- Paper
- AppBar
- Toolbar
- FormControl

**Add styling for**: Width/height, padding/margins, background color, text colors

#### Typography Components
- Typography with non-default variants
- Custom sizes or weights

**When styling typography**: Only add styles if the Figma design specifies a non-standard variant. For example:
- `typography/bodyEmphasized/*` → `theme.typography.bodyEmphasized`
- `typography/title1/*` → `theme.typography.title1`

### Token Override Decision Matrix

| Scenario | Action |
|----------|--------|
| Value matches component default | Trust default, NO token needed |
| Figma shows explicit override | Add token with comment explaining override |
| Unusual/non-standard value | Add token, document why |
| Semantic meaning matches | Trust default (e.g., primary button uses primary color automatically) |
| No explicit override in Figma | Trust default |

---

## Directory Structure

The command will create the following structure:

```
[Directory]/[ComponentName]/
├── index.tsx                    # Main component with styled components or useTheme
├── types.ts                     # Type definitions
└── [ComponentName].test.tsx     # Test file
```

---

## Rules Applied

This command uses the following rules during component generation:

- **`.cursor/rules/component-libraries-react-typescript-figma-mcp-focused.mdc`** - Core component creation rules with Figma-to-React patterns

---

## Requirements

Before using this command, ensure:

1. ✅ **@jllt/jll-ds-mui** package is installed in your project (version >= 0.4.2)
2. ✅ **Figma MCP integration** is configured and working
3. ✅ **SolsticeThemeProvider** is set up in your App root
4. ✅ Figma design uses **Solstice Design System tokens**

---

## Best Practices

- Keep component names **descriptive and concise** (avoid abbreviations)
- Use **PascalCase** for component names
- Ensure the Figma link points to the **specific component/frame** you want to convert
- Use the **default directory** unless you have specific project structure requirements
- Review generated code and **adjust styling** based on your specific design needs
- Run **tests** after component generation to ensure functionality

---

## Examples

### Example 1: Basic Component
```
Component name: UserCard
Figma link: https://www.figma.com/design/ABC123/SolsticeDS?node-id=456%3A789
Custom directory: (press Enter for default)
```
**Result:** Component created at `src/components/UserCard/`

### Example 2: Feature-specific Component
```
Component name: DashboardHeader
Figma link: https://www.figma.com/design/ABC123/SolsticeDS?node-id=111%3A222
Custom directory: src/features/dashboard/components/
```
**Result:** Component created at `src/features/dashboard/components/DashboardHeader/`

---

## Troubleshooting

### Component Import Issues

**Problem:** Can't import component from @jllt/jll-ds-mui
- Check that the component is in the Solstice components list (see Component Import Priority in the rule)
- Verify correct import path: `@jllt/jll-ds-mui`
- Restart TypeScript server (Cmd+Shift+P → "Restart TS Server")

**Problem:** Should I use MUI Button or jll-ds-mui Button?
- If Button exists in jll-ds-mui → use that version
- If component doesn't have a Solstice equivalent → use MUI version
- Check the Component Import Priority section in the rule for complete list

### Token Usage Issues

**Problem:** I'm not sure if I should add a token override
- Start WITHOUT any tokens (trust the pre-themed component)
- Compare rendered component with Figma design
- Only add tokens if values DON'T match
- Always add a comment explaining WHY the override exists

**Problem:** Component styling doesn't match Figma
1. Verify you're using the correct jll-ds-mui component (not MUI equivalent)
2. Check component variant/size props match Figma
3. Look for explicit overrides in Figma design
4. Add tokens only if values differ from defaults

**Problem:** Theme tokens aren't working
1. Verify SolsticeThemeProvider wraps your component tree
2. Check token path syntax (use brackets for arrays: `theme.fixedSpacing.micro[4]`)
3. Ensure theme is imported: `useTheme()` or styled components access it automatically
4. Restart TypeScript server if types aren't recognized

### Figma MCP Integration Issues

**Problem:** Figma MCP integration not working
- Verify Figma API credentials are configured
- Ensure the Figma file is shared and accessible
- Check that the Figma link is valid and properly formatted

### File Creation Issues

**Problem:** Component not created in expected location
- Verify the custom directory path exists or can be created
- Check that the path is relative to your project root
- Ensure you have write permissions to the target directory

### Prerequisites Issues

**Problem:** jll-ds-mui version is too old
- Upgrade: `npm install @jllt/jll-ds-mui@latest`
- Run `npm install` again to ensure types are properly cached
- Restart TypeScript server

**Problem:** SolsticeThemeProvider not found
- Ensure it wraps your entire app in `src/App.tsx` or main entry point
- Check that it's imported from `@jllt/jll-ds-mui`
