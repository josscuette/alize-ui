# Keyboard Navigation Guide

This document outlines the keyboard navigation support for all interactive components in the Alize UI library.

## Overview

All interactive components in Alize UI support keyboard navigation, following WCAG 2.1 guidelines for keyboard accessibility. Components built on Radix UI primitives include comprehensive keyboard navigation out of the box.

## Component Categories

### 1. Radix UI-Based Components

These components have built-in keyboard navigation provided by Radix UI:

#### Dialog & Modals
- **Dialog**: 
  - `Tab` / `Shift+Tab`: Navigate between focusable elements
  - `Escape`: Close dialog
  - Focus trap: Focus is trapped within the dialog
- **AlertDialog**: Same as Dialog
- **Sheet**: Same as Dialog
- **Drawer**: Same as Dialog

#### Dropdowns & Menus
- **DropdownMenu**:
  - `Enter` / `Space`: Open menu
  - `Arrow Up/Down`: Navigate menu items
  - `Enter`: Activate menu item
  - `Escape`: Close menu
  - `Tab`: Close menu and move to next element
- **ContextMenu**: Same as DropdownMenu (triggered by right-click)
- **Menubar**:
  - `Arrow Left/Right`: Navigate between menu items
  - `Arrow Down`: Open submenu
  - `Enter` / `Space`: Activate item
  - `Escape`: Close menu
- **Select**:
  - `Enter` / `Space`: Open select
  - `Arrow Up/Down`: Navigate options
  - `Enter`: Select option
  - `Escape`: Close select
  - `Tab`: Close select and move to next element

#### Navigation Components
- **Tabs**:
  - `Arrow Left/Right`: Navigate between tabs
  - `Home` / `End`: Go to first/last tab
  - `Enter` / `Space`: Activate tab
- **Accordion**:
  - `Enter` / `Space`: Toggle accordion item
  - `Arrow Up/Down`: Navigate between accordion items
- **NavigationMenu**:
  - `Arrow Left/Right`: Navigate menu items
  - `Arrow Down`: Open submenu
  - `Enter` / `Space`: Activate item
  - `Escape`: Close menu

#### Popovers & Tooltips
- **Popover**:
  - `Escape`: Close popover
  - Focus management handled by Radix UI
- **Tooltip**: Appears on hover/focus, no keyboard interaction needed
- **HoverCard**: Same as Tooltip

### 2. Form Components

#### Native Form Elements
- **Input**: Standard keyboard navigation
  - `Tab`: Move to next field
  - `Shift+Tab`: Move to previous field
  - All standard text input keys
- **Textarea**: Same as Input
- **Checkbox**:
  - `Space`: Toggle checkbox
  - `Tab`: Navigate to next element
- **RadioGroup**:
  - `Arrow Up/Down` / `Arrow Left/Right`: Navigate between radio options
  - `Space`: Select radio option
- **Switch**:
  - `Space`: Toggle switch
  - `Tab`: Navigate to next element
- **Select**: See Radix UI-Based Components above
- **NativeSelect**: Standard `<select>` keyboard navigation

#### Custom Form Components
- **DatePicker**:
  - Uses Calendar component (see below)
  - `Tab`: Navigate to calendar button
  - `Enter` / `Space`: Open calendar
- **InputOTP**: 
  - `Tab`: Move between input fields
  - `Arrow Left/Right`: Navigate between fields
  - `Backspace`: Clear and move to previous field
- **Combobox**:
  - Uses Command component (see below)
  - Full keyboard navigation support

### 3. Custom Interactive Components

#### Carousel
- `Arrow Left`: Navigate to previous slide
- `Arrow Right`: Navigate to next slide
- `Tab`: Navigate to carousel controls
- `Enter` / `Space`: Activate carousel buttons

#### Command (Command Palette)
- Uses `cmdk` library with full keyboard support:
  - `Arrow Up/Down`: Navigate command items
  - `Enter`: Execute command
  - `Escape`: Close command palette
  - `Ctrl+K` / `Cmd+K`: Open command palette (when used with CommandDialog)

#### Calendar
- Uses `react-day-picker` with keyboard navigation:
  - `Arrow Left/Right`: Navigate days
  - `Arrow Up/Down`: Navigate weeks
  - `Page Up/Down`: Navigate months
  - `Home` / `End`: Go to start/end of week
  - `Enter` / `Space`: Select date
  - `Tab`: Navigate calendar controls

#### Sidebar
- `Cmd+B` / `Ctrl+B`: Toggle sidebar (when using SidebarProvider)
- `Tab`: Navigate sidebar items
- `Enter` / `Space`: Activate sidebar item
- `Escape`: Close sidebar (mobile)

#### Pagination
- `Tab`: Navigate pagination links
- `Enter` / `Space`: Activate pagination link
- `Arrow Left/Right`: Navigate between pagination items (when using keyboard)

### 4. Button Components

#### Button
- `Tab`: Focus button
- `Enter` / `Space`: Activate button
- Standard button keyboard behavior

#### Toggle
- `Tab`: Focus toggle
- `Enter` / `Space`: Toggle state

#### ToggleGroup
- `Tab`: Focus toggle group
- `Arrow Left/Right`: Navigate between toggle items
- `Enter` / `Space`: Toggle item

### 5. Data Display Components

#### DataTable
- `Tab`: Navigate table cells
- `Arrow Up/Down/Left/Right`: Navigate table cells
- `Enter` / `Space`: Activate cell action (if interactive)
- Standard table keyboard navigation

#### Table
- Standard HTML table keyboard navigation
- `Tab`: Navigate between interactive elements

## Focus Management

### Focus Visible Styles

All interactive components include `focus-visible` styles to clearly indicate keyboard focus:

- Focus ring: `ring-ring/50 ring-[3px]`
- Focus border: `border-ring`
- Smooth transitions for focus states

### Focus Trapping

- **Dialog**: Focus is trapped within the dialog
- **AlertDialog**: Focus is trapped within the dialog
- **Sheet**: Focus is trapped within the sheet
- **Drawer**: Focus is trapped within the drawer

### Focus Restoration

- **Dialog**: Focus returns to trigger element when closed
- **AlertDialog**: Focus returns to trigger element when closed
- **Sheet**: Focus returns to trigger element when closed
- **Drawer**: Focus returns to trigger element when closed

## Keyboard Shortcuts

### Global Shortcuts

- **Sidebar Toggle**: `Cmd+B` / `Ctrl+B` (when using SidebarProvider)
- **Command Palette**: `Ctrl+K` / `Cmd+K` (when using CommandDialog)

### Component-Specific Shortcuts

- **Carousel**: Arrow keys for navigation
- **Calendar**: Arrow keys, Page Up/Down for navigation
- **Tabs**: Arrow keys for tab navigation
- **Accordion**: Arrow keys for item navigation

## Testing Keyboard Navigation

### Manual Testing Checklist

1. **Tab Navigation**
   - [ ] All interactive elements are reachable via Tab
   - [ ] Tab order is logical and intuitive
   - [ ] No focus traps outside of modals

2. **Enter/Space Activation**
   - [ ] All buttons activate with Enter/Space
   - [ ] All interactive elements respond correctly

3. **Escape Key**
   - [ ] Modals close with Escape
   - [ ] Dropdowns/menus close with Escape
   - [ ] Focus returns to trigger element

4. **Arrow Key Navigation**
   - [ ] Carousel navigates with arrows
   - [ ] Calendar navigates with arrows
   - [ ] Tabs navigate with arrows
   - [ ] Menus navigate with arrows

5. **Focus Visible**
   - [ ] All focused elements have visible focus indicators
   - [ ] Focus indicators are clearly visible

### Automated Testing

Keyboard navigation is tested as part of accessibility tests using `jest-axe`. All components pass accessibility checks including keyboard navigation requirements.

## Best Practices

1. **Always provide keyboard alternatives** for mouse interactions
2. **Use semantic HTML** elements that have built-in keyboard support
3. **Maintain logical tab order** throughout the interface
4. **Provide clear focus indicators** for keyboard users
5. **Test with keyboard only** to ensure full functionality
6. **Document keyboard shortcuts** for complex components

## Compliance

✅ All components meet WCAG 2.1 Level AA requirements for keyboard navigation:
- 2.1.1 Keyboard (Level A)
- 2.1.2 No Keyboard Trap (Level A)
- 2.4.3 Focus Order (Level A)
- 2.4.7 Focus Visible (Level AA)

