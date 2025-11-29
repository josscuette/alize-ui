// Configuration des composants shadcn/ui avec classification Atomic Design
// Composants modifiés sont marqués avec modified: true

export interface ComponentConfig {
  id: string;
  name: string;
  category: "atoms" | "molecules" | "organisms" | "dataviz";
  modified?: boolean;
}

export const componentsConfig: ComponentConfig[] = [
  // Atoms
  { id: "button", name: "Button", category: "atoms", modified: true },
  { id: "input", name: "Input", category: "atoms", modified: true },
  { id: "label", name: "Label", category: "atoms", modified: true },
  { id: "badge", name: "Badge", category: "atoms", modified: true },
  { id: "avatar", name: "Avatar", category: "atoms", modified: true },
  { id: "skeleton", name: "Skeleton", category: "atoms" },
  { id: "spinner", name: "Spinner", category: "atoms" },
  { id: "separator", name: "Separator", category: "atoms" },
  { id: "kbd", name: "Kbd", category: "atoms" },
  { id: "toggle", name: "Toggle", category: "atoms" },
  { id: "toggle-group", name: "Toggle Group", category: "atoms" },
  { id: "tooltip", name: "Tooltip", category: "atoms" },
  { id: "typography", name: "Typography", category: "atoms" },
  { id: "aspect-ratio", name: "Aspect Ratio", category: "atoms" },
  { id: "empty", name: "Empty", category: "atoms" },
  { id: "item", name: "Item", category: "atoms" },
  { id: "checkbox", name: "Checkbox", category: "atoms", modified: true },
  
  // Molecules
  { id: "switch", name: "Switch", category: "molecules", modified: true },
  { id: "radio-group", name: "Radio Group", category: "molecules", modified: true },
  { id: "select", name: "Select", category: "molecules", modified: true },
  { id: "textarea", name: "Textarea", category: "molecules" },
  { id: "slider", name: "Slider", category: "molecules", modified: true },
  { id: "progress", name: "Progress", category: "molecules", modified: true },
  { id: "alert", name: "Alert", category: "molecules", modified: true },
  { id: "card", name: "Card", category: "molecules" },
  { id: "tabs", name: "Tabs", category: "molecules", modified: true },
  { id: "accordion", name: "Accordion", category: "molecules" },
  { id: "collapsible", name: "Collapsible", category: "molecules" },
  { id: "popover", name: "Popover", category: "molecules" },
  { id: "hover-card", name: "Hover Card", category: "molecules" },
  { id: "dropdown-menu", name: "Dropdown Menu", category: "molecules" },
  { id: "context-menu", name: "Context Menu", category: "molecules" },
  { id: "command", name: "Command", category: "molecules" },
  { id: "combobox", name: "Combobox", category: "molecules" },
  { id: "input-otp", name: "Input OTP", category: "molecules" },
  { id: "input-group", name: "Input Group", category: "molecules" },
  { id: "breadcrumb", name: "Breadcrumb", category: "molecules" },
  { id: "pagination", name: "Pagination", category: "molecules" },
  { id: "button-group", name: "Button Group", category: "molecules", modified: true },
  { id: "native-select", name: "Native Select", category: "molecules" },
  { id: "field", name: "Field", category: "molecules", modified: true },
  
  // Organisms
  { id: "dialog", name: "Dialog", category: "organisms" },
  { id: "alert-dialog", name: "Alert Dialog", category: "organisms" },
  { id: "drawer", name: "Drawer", category: "organisms" },
  { id: "sheet", name: "Sheet", category: "organisms" },
  { id: "sidebar", name: "Sidebar", category: "organisms" },
  { id: "navigation-menu", name: "Navigation Menu", category: "organisms" },
  { id: "menubar", name: "Menubar", category: "organisms" },
  { id: "form", name: "Form", category: "organisms" },
  { id: "table", name: "Table", category: "organisms" },
  { id: "data-table", name: "Data Table", category: "organisms" },
  { id: "calendar", name: "Calendar", category: "organisms" },
  { id: "date-picker", name: "Date Picker", category: "organisms" },
  { id: "carousel", name: "Carousel", category: "organisms" },
  { id: "toast", name: "Toast", category: "organisms" },
  { id: "sonner", name: "Sonner", category: "organisms" },
  { id: "scroll-area", name: "Scroll Area", category: "organisms" },
  { id: "resizable", name: "Resizable", category: "organisms" },

  // Data Visualization
  { id: "dataviz-colors", name: "Colors", category: "dataviz", modified: true },
  { id: "dataviz-line-charts", name: "Line Charts", category: "dataviz", modified: true },
  { id: "dataviz-bar-charts", name: "Bar Charts", category: "dataviz", modified: true },
  { id: "dataviz-pie-charts", name: "Pie Charts", category: "dataviz", modified: true },
  { id: "dataviz-advanced", name: "Advanced Patterns", category: "dataviz", modified: true },
];

export const categories = {
  atoms: "Atoms",
  molecules: "Molecules",
  organisms: "Organisms",
  dataviz: "Data Visualization",
} as const;
