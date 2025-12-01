'use strict';

var React24 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var LabelPrimitive = require('@radix-ui/react-label');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var lucideReact = require('lucide-react');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var TogglePrimitive = require('@radix-ui/react-toggle');
var ToggleGroupPrimitive = require('@radix-ui/react-toggle-group');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var AspectRatioPrimitive = require('@radix-ui/react-aspect-ratio');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var SwitchPrimitive = require('@radix-ui/react-switch');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var SelectPrimitive = require('@radix-ui/react-select');
var SliderPrimitive = require('@radix-ui/react-slider');
var ProgressPrimitive = require('@radix-ui/react-progress');
var TabsPrimitive = require('@radix-ui/react-tabs');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var PopoverPrimitive = require('@radix-ui/react-popover');
var HoverCardPrimitive = require('@radix-ui/react-hover-card');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var ContextMenuPrimitive = require('@radix-ui/react-context-menu');
var cmdk = require('cmdk');
var SheetPrimitive = require('@radix-ui/react-dialog');
var inputOtp = require('input-otp');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var vaul = require('vaul');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var MenubarPrimitive = require('@radix-ui/react-menubar');
var ReactHookForm = require('react-hook-form');
var reactDayPicker = require('react-day-picker');
var dateFns = require('date-fns');
var useEmblaCarousel = require('embla-carousel-react');
var nextThemes = require('next-themes');
var sonner = require('sonner');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var ResizablePrimitive = require('react-resizable-panels');
var zod = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React24__namespace = /*#__PURE__*/_interopNamespace(React24);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);
var ToggleGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToggleGroupPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var AspectRatioPrimitive__namespace = /*#__PURE__*/_interopNamespace(AspectRatioPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var SwitchPrimitive__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var HoverCardPrimitive__namespace = /*#__PURE__*/_interopNamespace(HoverCardPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var ContextMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(ContextMenuPrimitive);
var SheetPrimitive__namespace = /*#__PURE__*/_interopNamespace(SheetPrimitive);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var MenubarPrimitive__namespace = /*#__PURE__*/_interopNamespace(MenubarPrimitive);
var ReactHookForm__namespace = /*#__PURE__*/_interopNamespace(ReactHookForm);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefault(useEmblaCarousel);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);
var ResizablePrimitive__namespace = /*#__PURE__*/_interopNamespace(ResizablePrimitive);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src/foundation/surfaces.ts
var surface = {
  // Primary surfaces
  primary: "bg-semantic-surface-primary",
  secondary: "bg-semantic-surface-secondary",
  subdued: "bg-semantic-surface-subdued",
  // Interaction surfaces
  interactionStrong: "bg-semantic-surface-interaction-strong",
  // Legacy shadcn destructive (TODO: migrate to semantic?)
  destructiveLegacy: "bg-destructive",
  destructiveLegacyDark: "dark:bg-destructive/60"
};

// src/foundation/text.ts
var text = {
  // Default text colors
  default: "text-semantic-text-default",
  subdued: "text-semantic-text-subdued",
  interactionDefault: "text-semantic-text-interaction-default",
  reversedPersistent: "text-semantic-text-reversedpersistent",
  destructiveLegacy: "text-[var(--destructive-foreground)]"
};

// src/foundation/icon.ts
var icon = {
  subdued: "[&_.material-symbols-outlined]:text-semantic-icon-subdued",
  // Interaction icon colors
  interactionBright: "[&_.material-symbols-outlined]:text-semantic-icon-interaction-bright",
  interactionDefault: "[&_.material-symbols-outlined]:text-semantic-icon-interaction-default",
  interactionBrightHover: "[&_.material-symbols-outlined]:hover:text-semantic-icon-interaction-bright",
  reversedPersistent: "[&_.material-symbols-outlined]:text-semantic-text-reversedpersistent",
  // Legacy shadcn colors (TODO: migrate to semantic?)
  destructiveLegacy: "[&_.material-symbols-outlined]:!text-[var(--destructive-foreground)]"};

// src/foundation/stroke.ts
var stroke = {
  // Default stroke colors
  default: "border-semantic-stroke-default",
  subdued: "border-semantic-stroke-subdued"};

// src/foundation/states.ts
var states = {
  // Hover states
  hoverOverlay1: "hover:bg-semantic-surface-overlays-level1",
  hoverDestructive: "hover:bg-destructive/90",
  hoverOpacity90: "hover:opacity-90",
  hoverOpacity80: "hover:opacity-80",
  hoverUnderline: "hover:underline",
  // Focus states
  focusRing: "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]",
  focusRingDestructive: "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
  // Visual utilities
  outlineNone: "outline-none",
  // Disabled states
  disabled: "disabled:pointer-events-none disabled:opacity-50",
  disabledCursor: "disabled:cursor-not-allowed",
  // Invalid/Error states
  invalidRing: "aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40",
  invalidBorder: "aria-invalid:border-semantic-surface-rag-danger-strong"};

// src/foundation/radius.ts
var radius = {
  // Small radius - utilise le token --radius-reduced
  sm: "rounded-[var(--radius-reduced)]",
  // Medium radius (default) - utilise le token --radius
  md: "rounded-[var(--radius)]",
  // Full circle/rounded
  full: "rounded-full",
  // 3xl (used in some components like radio-group)
  "3xl": "rounded-3xl"};

// src/foundation/size.ts
var size = {
  // Extra small
  xs: cn(
    "h-5 px-1 gap-1 pt-px",
    "text-xs leading-none",
    "[&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]",
    radius.sm
    // rounded-[4px]
  ),
  // Small
  sm: cn(
    "h-7 px-2 gap-2",
    "text-sm leading-5",
    "[&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]",
    radius.md
    // rounded-md
  ),
  // Medium (default)
  md: cn(
    "h-9 px-3 gap-2",
    "text-sm leading-5",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
    radius.md
    // rounded-md
  ),
  // Large
  lg: cn(
    "h-11 px-4 gap-2",
    "text-base leading-6",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
    radius.md
    // rounded-md
  ),
  // Icon-only sizes (square)
  iconXs: cn(
    "size-5",
    "[&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]",
    radius.sm
    // rounded-[4px]
  ),
  iconSm: cn(
    "size-7",
    "[&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]",
    radius.md
    // rounded-md
  ),
  iconMd: cn(
    "size-9",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
    radius.md
    // rounded-md
  ),
  iconLg: cn(
    "size-11",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
    radius.md
    // rounded-md
  )
};

// src/foundation/animation.ts
var animation = {
  // General transitions
  transitionAll: "transition-all duration-200 ease-in-out",
  transitionFormControl: "transition-[color,box-shadow]"};

// src/foundation/shadow.ts
var shadow = {
  // Extra small shadow (commonly used for form controls)
  xs: "shadow-xs",
  // Medium shadow (default)
  md: "shadow-md"};
var buttonVariants = classVarianceAuthority.cva(
  cn(
    // Layout
    "inline-flex items-center justify-center whitespace-nowrap font-normal",
    // Cursor
    "cursor-pointer",
    // SVG handling
    "[&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0",
    // Focus
    "outline-none",
    // States from Foundation Layer
    states.disabledCursor,
    states.disabled,
    states.focusRing,
    states.invalidRing,
    states.invalidBorder,
    // Animation
    animation.transitionAll
  ),
  {
    variants: {
      variant: {
        default: cn(
          surface.primary,
          text.reversedPersistent,
          states.hoverOpacity90,
          icon.interactionBright
        ),
        destructive: cn(
          surface.destructiveLegacy,
          text.destructiveLegacy,
          states.hoverDestructive,
          states.focusRingDestructive,
          surface.destructiveLegacyDark,
          icon.destructiveLegacy
        ),
        outline: cn(
          "border",
          stroke.default,
          text.subdued,
          states.hoverOverlay1,
          icon.subdued
        ),
        secondary: cn(
          surface.secondary,
          text.subdued,
          states.hoverOpacity80,
          icon.subdued
        ),
        ghost: cn(
          text.subdued,
          states.hoverOverlay1,
          icon.subdued
        ),
        link: cn(
          text.interactionDefault,
          "underline-offset-4",
          states.hoverUnderline,
          "hover:text-semantic-text-interaction-bright",
          icon.interactionDefault,
          icon.interactionBrightHover
        ),
        tertiary: cn(
          text.subdued,
          states.hoverOverlay1,
          icon.subdued
        )
      },
      size: {
        default: size.md,
        sm: size.sm,
        lg: size.lg,
        xs: size.xs,
        icon: size.iconMd,
        "icon-sm": size.iconSm,
        "icon-lg": size.iconLg,
        "icon-xs": size.iconXs
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant,
    size: size2,
    asChild = false,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild",
    "children"
  ]);
  const Comp = asChild ? reactSlot.Slot : "button";
  React24__namespace.Children.toArray(children).some((child) => {
    if (typeof child === "string") return child.trim().length > 0;
    if (typeof child === "number") return true;
    return false;
  });
  const isIconOnly = (size2 == null ? void 0 : size2.toString().includes("icon")) || false;
  const isPrimaryIconOnly = variant === "default" && isIconOnly;
  const iconOnlyProps = isIconOnly && !props["aria-label"] && !props["aria-labelledby"] ? { "aria-label": "Button" } : {};
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadProps(__spreadValues(__spreadValues({
      "data-slot": "button",
      className: cn(
        buttonVariants({ variant, size: size2 }),
        // Primary icon-only: icon should be reversedPersistent (white) - override default bright color
        isPrimaryIconOnly && icon.reversedPersistent,
        className
      )
    }, iconOnlyProps), props), {
      children
    })
  );
}
var Input = React24__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      __spreadValues({
        ref,
        type,
        "data-slot": "input",
        className: cn(
          // Layout & Structure
          "h-9 w-full min-w-0 px-3 py-1",
          // Background & Surface
          "bg-transparent dark:bg-input/30",
          // Border & Stroke
          "border border-input",
          // Radius
          radius.md,
          // Typography
          "text-base md:text-sm",
          // Legacy shadcn text colors
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
          // Visual Effects
          "shadow-xs outline-none",
          // Animation
          "transition-[color,box-shadow]",
          // File input specific
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
          // Disabled states from Foundation Layer
          states.disabled,
          states.disabledCursor,
          // Focus states (legacy shadcn - keep inline)
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          // Invalid states from Foundation Layer
          states.invalidRing,
          // Invalid border - using stroke.destructive with aria-invalid prefix
          "aria-invalid:border-semantic-stroke-rag-danger-default",
          className
        )
      }, props)
    );
  }
);
Input.displayName = "Input";
function Label(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    LabelPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-normal select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )
    }, props)
  );
}
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none [&_.material-symbols-outlined]:!text-[12px] [&_.material-symbols-outlined]:!size-3 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-[var(--semantic-stroke-rag-danger-default)] bg-[var(--semantic-surface-rag-danger-subdued)] text-[var(--semantic-text-rag-danger-default)] [a&]:hover:bg-[var(--semantic-surface-rag-danger-subdued)]/80 focus-visible:ring-[var(--semantic-surface-rag-danger-subdued)]",
        warning: "border-[var(--semantic-stroke-rag-warning-default)] bg-[var(--semantic-surface-rag-warning-subdued)] text-[var(--semantic-text-rag-warning-default)] [a&]:hover:bg-[var(--semantic-surface-rag-warning-subdued)]/80 focus-visible:ring-[var(--semantic-surface-rag-warning-subdued)]",
        success: "border-[var(--semantic-stroke-rag-success-default)] bg-[var(--semantic-surface-rag-success-subdued)] text-[var(--semantic-text-rag-success-default)] [a&]:hover:bg-[var(--semantic-surface-rag-success-subdued)]/80 focus-visible:ring-[var(--semantic-surface-rag-success-subdued)]",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, {
    className,
    variant,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "asChild"
  ]);
  const Comp = asChild ? reactSlot.Slot : "span";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className)
    }, props)
  );
}
var avatarVariants = classVarianceAuthority.cva(
  "relative flex shrink-0 overflow-hidden border border-semantic-surface-overlays-level2",
  {
    variants: {
      size: {
        xs: "size-5",
        sm: "h-7 w-7",
        md: "h-9 w-9",
        lg: "h-11 w-11"
      },
      shape: {
        square: "",
        rounded: radius.full
      }
    },
    defaultVariants: {
      size: "md",
      shape: "rounded"
    }
  }
);
var avatarShapeRadius = {
  square: {
    xs: "rounded-sm",
    // Keep inline - radius.sm is 4px, rounded-sm is 2px
    sm: radius.md,
    md: radius.md,
    lg: radius.md
  },
  rounded: {
    xs: radius.full,
    sm: radius.full,
    md: radius.full,
    lg: radius.full
  }
};
function Avatar(_a) {
  var _b = _a, {
    className,
    size: size2,
    shape
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "shape"
  ]);
  const finalSize = size2 || "md";
  const finalShape = shape || "rounded";
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "avatar",
      className: cn(
        avatarVariants({ size: finalSize, shape: finalShape }),
        avatarShapeRadius[finalShape][finalSize],
        className
      )
    }, props)
  );
}
function AvatarImage(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Image,
    __spreadValues({
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full object-cover", className)
    }, props)
  );
}
function AvatarFallback(_a) {
  var _b = _a, {
    className,
    size: size2 = "md",
    delayMs
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "delayMs"
  ]);
  const textSizeMap = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-base"
  };
  const fallbackProps = delayMs && delayMs > 0 ? { delayMs } : {};
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Fallback,
    __spreadValues(__spreadProps(__spreadValues({
      "data-slot": "avatar-fallback"
    }, fallbackProps), {
      className: cn(
        // Background & Surface (Foundation Layer)
        surface.subdued,
        // Layout & Structure
        "flex size-full items-center justify-center",
        // Text color (Foundation Layer)
        text.subdued,
        // Typography (specific to component - keep inline)
        textSizeMap[size2],
        className
      )
    }), props)
  );
}
function Skeleton(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className)
    }, props)
  );
}
function Spinner(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    lucideReact.Loader2Icon,
    __spreadValues({
      role: "status",
      "aria-label": "Loading",
      className: cn("size-4 animate-spin", className)
    }, props)
  );
}
function Separator(_a) {
  var _b = _a, {
    className,
    orientation = "horizontal",
    decorative = true
  } = _b, props = __objRest(_b, [
    "className",
    "orientation",
    "decorative"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SeparatorPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )
    }, props)
  );
}
function Kbd(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "kbd",
    __spreadValues({
      "data-slot": "kbd",
      className: cn(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )
    }, props)
  );
}
function KbdGroup(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "kbd",
    __spreadValues({
      "data-slot": "kbd-group",
      className: cn("inline-flex items-center gap-1", className)
    }, props)
  );
}
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle(_a) {
  var _b = _a, {
    className,
    variant,
    size: size2
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TogglePrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size: size2, className }))
    }, props)
  );
}
var ToggleGroupContext = React24__namespace.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function ToggleGroup(_a) {
  var _b = _a, {
    className,
    variant,
    size: size2,
    spacing = 0,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "spacing",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size2,
      "data-spacing": spacing,
      style: { "--gap": spacing },
      className: cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md border border-input",
        "data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext.Provider, { value: { variant, size: size2, spacing }, children })
    })
  );
}
function ToggleGroupItem(_a) {
  var _b = _a, {
    className,
    children,
    variant,
    size: size2
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "variant",
    "size"
  ]);
  const context = React24__namespace.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size2,
      "data-spacing": context.spacing,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size2
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        // Remove all borders and shadows from items when in a group (group handles the border)
        "border-0 shadow-none",
        // Handle spacing=0 case
        "data-[spacing=0]:rounded-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md",
        className
      )
    }, props), {
      children
    })
  );
}
function TooltipProvider(_a) {
  var _b = _a, {
    delayDuration = 0
  } = _b, props = __objRest(_b, [
    "delayDuration"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TooltipPrimitive__namespace.Provider,
    __spreadValues({
      "data-slot": "tooltip-provider",
      delayDuration
    }, props)
  );
}
function Tooltip(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Root, __spreadValues({ "data-slot": "tooltip" }, props)) });
}
function TooltipTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "tooltip-trigger" }, props));
}
function TooltipContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 0,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    TooltipPrimitive__namespace.Content,
    __spreadProps(__spreadValues({
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    })
  ) });
}
var TypographyH1 = React24__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h1",
    __spreadValues({
      ref,
      className: cn("scroll-m-20 text-4xl font-normal tracking-tight", className)
    }, props)
  );
});
TypographyH1.displayName = "TypographyH1";
var TypographyH2 = React24__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h2",
    __spreadValues({
      ref,
      className: cn("scroll-m-20 text-3xl font-normal tracking-tight", className)
    }, props)
  );
});
TypographyH2.displayName = "TypographyH2";
var TypographyH3 = React24__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h3",
    __spreadValues({
      ref,
      className: cn("scroll-m-20 text-2xl font-normal tracking-tight", className)
    }, props)
  );
});
TypographyH3.displayName = "TypographyH3";
var TypographyH4 = React24__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h4",
    __spreadValues({
      ref,
      className: cn("scroll-m-20 text-xl font-normal tracking-tight", className)
    }, props)
  );
});
TypographyH4.displayName = "TypographyH4";
var TypographyP = React24__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    __spreadValues({
      ref,
      className: cn("leading-7", className)
    }, props)
  );
});
TypographyP.displayName = "TypographyP";
var TypographyBlockquote = React24__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "blockquote",
    __spreadValues({
      ref,
      className: cn("mt-6 border-l-2 pl-6 italic", className)
    }, props)
  );
});
TypographyBlockquote.displayName = "TypographyBlockquote";
var TypographyCode = React24__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "code",
    __spreadValues({
      ref,
      className: cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)
    }, props)
  );
});
TypographyCode.displayName = "TypographyCode";
function AspectRatio(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(AspectRatioPrimitive__namespace.Root, __spreadValues({ "data-slot": "aspect-ratio" }, props));
}
function Empty(_a) {
  var _b = _a, {
    className,
    title = "No results found",
    description,
    icon: icon2,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "title",
    "description",
    "icon",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "empty",
      className: cn("flex flex-col items-center justify-center py-12 text-center", className)
    }, props), {
      children: [
        icon2 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mb-4", children: icon2 }),
        /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-normal", children: title }),
        description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: description }),
        children && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-4", children })
      ]
    })
  );
}
function Item2(_a) {
  var _b = _a, {
    className,
    selected = false
  } = _b, props = __objRest(_b, [
    "className",
    "selected"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "item",
      className: cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        selected && "bg-accent text-accent-foreground",
        "hover:bg-accent hover:text-accent-foreground",
        className
      )
    }, props)
  );
}
function Checkbox(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CheckboxPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "checkbox",
      className: cn(
        // Layout & Structure
        "peer size-4 shrink-0",
        // Border & Stroke (Foundation Layer)
        "border",
        stroke.default,
        // Background & Surface
        "data-[state=unchecked]:bg-transparent",
        // Checked state - using surface.interactionStrong (Foundation Layer value)
        "data-[state=checked]:bg-semantic-surface-interaction-strong",
        "data-[state=checked]:border-semantic-surface-interaction-strong",
        // Text color for check icon
        "data-[state=checked]:text-white",
        // Focus states (Foundation Layer)
        "focus-visible:border-semantic-surface-interaction-strong",
        states.focusRing,
        // Invalid states (Foundation Layer)
        states.invalidRing,
        states.invalidBorder,
        // Radius (Foundation Layer)
        radius.sm,
        // Disabled states (Foundation Layer)
        states.disabled,
        states.disabledCursor,
        // Animation (Foundation Layer)
        animation.transitionAll,
        // Visual Effects
        "outline-none",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        CheckboxPrimitive__namespace.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-3.5" })
        }
      )
    })
  );
}
function CheckboxCard(_a) {
  var _b = _a, {
    className,
    label,
    description,
    id
  } = _b, props = __objRest(_b, [
    "className",
    "label",
    "description",
    "id"
  ]);
  const generatedId = React24__namespace.useId();
  const itemId = id || `checkbox-card-${generatedId}`;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "label",
    {
      htmlFor: itemId,
      className: cn(
        // Layout & Structure
        "group relative flex gap-2 items-start px-4 py-3 cursor-pointer",
        // Border & Stroke (Foundation Layer)
        "border",
        stroke.subdued,
        // Background & Surface
        "bg-transparent",
        // Active state - using surface.whisper and stroke.default (Foundation Layer values)
        "has-[[data-state=checked]]:bg-semantic-surface-whisper",
        "has-[[data-state=checked]]:border-semantic-stroke-default",
        // Radius (specific to CheckboxCard - not in Foundation Layer)
        "rounded-[8px]",
        // Animation (Foundation Layer)
        animation.transitionAll,
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          CheckboxPrimitive__namespace.Root,
          __spreadProps(__spreadValues({
            "data-slot": "checkbox-card",
            id: itemId,
            className: cn(
              // Layout & Structure
              "mt-0.5 shrink-0 cursor-pointer",
              // Border & Stroke (Foundation Layer)
              "border",
              stroke.default,
              // Background & Surface
              "data-[state=unchecked]:bg-transparent",
              // Checked state - using surface.interactionStrong (Foundation Layer value)
              "data-[state=checked]:bg-semantic-surface-interaction-strong",
              "data-[state=checked]:border-semantic-surface-interaction-strong",
              // Text color for check icon
              "data-[state=checked]:text-white",
              // Focus states (Foundation Layer)
              "focus-visible:border-semantic-surface-interaction-strong",
              states.focusRing,
              // Invalid states (Foundation Layer)
              states.invalidRing,
              states.invalidBorder,
              // Size & Layout
              "size-4 shrink-0",
              // Radius (Foundation Layer)
              radius.sm,
              // Disabled states (Foundation Layer)
              states.disabled,
              states.disabledCursor,
              // Animation (Foundation Layer)
              animation.transitionAll,
              // Visual Effects
              "outline-none"
            )
          }, props), {
            children: /* @__PURE__ */ jsxRuntime.jsx(
              CheckboxPrimitive__namespace.Indicator,
              {
                "data-slot": "checkbox-indicator",
                className: "grid place-content-center text-current transition-none pointer-events-none",
                children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-3.5" })
              }
            )
          })
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: cn(
                // Typography
                "text-sm leading-5",
                // Text color (Foundation Layer)
                text.default,
                // Font weight (specific to component)
                "group-has-[[data-state=checked]]:font-normal"
              ),
              children: label
            }
          ),
          description && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
            // Typography
            "text-sm leading-5",
            // Text color (Foundation Layer)
            text.subdued
          ), children: description })
        ] })
      ]
    }
  );
}
function Switch(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SwitchPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "switch",
      className: cn(
        // Layout & Structure
        "peer relative inline-flex h-4 w-8 shrink-0 items-center",
        // Animation (Foundation Layer)
        animation.transitionAll,
        // Visual Effects (Foundation Layer)
        states.outlineNone,
        // Disabled states (Foundation Layer)
        states.disabledCursor,
        "disabled:opacity-50",
        // Keep inline - states.disabled includes pointer-events-none which we don't want
        // Active state: teal background, fully rounded (Foundation Layer values - keep inline with data-[state] prefix)
        "data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
        // Inactive state: secondary background with border, rounded-3xl (Foundation Layer values - keep inline with data-[state] prefix)
        "data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-semantic-stroke-default data-[state=unchecked]:rounded-3xl",
        // Focus states (Foundation Layer)
        states.focusRing,
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        SwitchPrimitive__namespace.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 size-3 rounded-full ring-0 transition-transform",
            // Active state: white thumb, positioned right (2px from right edge)
            "data-[state=checked]:bg-white data-[state=checked]:right-[2px]",
            // Inactive state: glacier-400 thumb, positioned left (1px from left edge)
            "data-[state=unchecked]:bg-[var(--color-solstice-glacier-400)] data-[state=unchecked]:left-[1px]"
          )
        }
      )
    })
  );
}
function SwitchCard(_a) {
  var _b = _a, {
    className,
    label,
    description,
    id
  } = _b, props = __objRest(_b, [
    "className",
    "label",
    "description",
    "id"
  ]);
  const generatedId = React24__namespace.useId();
  const itemId = id || `switch-card-${generatedId}`;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "label",
    {
      htmlFor: itemId,
      className: cn(
        // Layout & Structure
        "group relative flex gap-6 items-start px-4 py-3 cursor-pointer",
        // Border & Stroke (Foundation Layer values - keep inline with has-[[data-state]] prefix)
        "border border-semantic-stroke-subdued",
        // Background & Surface
        "bg-transparent",
        // Active state (when switch is checked) - Foundation Layer values (keep inline with has-[[data-state]] prefix)
        "has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-semantic-stroke-default",
        // Radius (specific to card - keep inline)
        "rounded-[8px]",
        // Animation (Foundation Layer)
        animation.transitionAll,
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: cn(
                // Typography
                "text-sm leading-5",
                // Text color (Foundation Layer)
                text.default,
                // Font weight (specific to component - keep inline)
                "group-has-[[data-state=checked]]:font-normal"
              ),
              children: label
            }
          ),
          description && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
            // Typography
            "text-sm leading-5",
            // Text color (Foundation Layer)
            text.subdued
          ), children: description })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center pt-0.5 shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(
          SwitchPrimitive__namespace.Root,
          __spreadProps(__spreadValues({
            "data-slot": "switch-card",
            id: itemId,
            className: cn(
              // Layout & Structure
              "peer relative inline-flex h-4 w-8 shrink-0 items-center",
              // Cursor (specific to component - keep inline)
              "cursor-pointer",
              // Animation (Foundation Layer)
              animation.transitionAll,
              // Visual Effects (Foundation Layer)
              states.outlineNone,
              // Disabled states (Foundation Layer)
              states.disabledCursor,
              "disabled:opacity-50",
              // Keep inline - states.disabled includes pointer-events-none which we don't want
              // Active state: teal background, fully rounded (Foundation Layer values - keep inline with data-[state] prefix)
              "data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
              // Inactive state: secondary background with border, rounded-3xl (Foundation Layer values - keep inline with data-[state] prefix)
              "data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-semantic-stroke-default data-[state=unchecked]:rounded-3xl",
              // Focus states (Foundation Layer)
              states.focusRing
            )
          }, props), {
            children: /* @__PURE__ */ jsxRuntime.jsx(
              SwitchPrimitive__namespace.Thumb,
              {
                "data-slot": "switch-thumb",
                className: cn(
                  "pointer-events-none absolute top-1/2 -translate-y-1/2 size-3 rounded-full ring-0 transition-transform",
                  // Active state: white thumb, positioned right (2px from right edge)
                  "data-[state=checked]:bg-white data-[state=checked]:right-[2px]",
                  // Inactive state: glacier-400 thumb, positioned left (1px from left edge)
                  "data-[state=unchecked]:bg-[var(--color-solstice-glacier-400)] data-[state=unchecked]:left-[1px]"
                )
              }
            )
          })
        ) })
      ]
    }
  );
}
function RadioGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "radio-group",
      className: cn("grid gap-3", className)
    }, props)
  );
}
function RadioGroupItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      "data-slot": "radio-group-item",
      className: cn(
        // Layout & Structure
        "aspect-square size-4 shrink-0",
        // Border & Stroke (Foundation Layer)
        "border",
        stroke.default,
        // Background & Surface
        "data-[state=unchecked]:bg-transparent",
        // Active state - using surface.interactionStrong and radius.full (Foundation Layer values)
        "data-[state=checked]:bg-semantic-surface-interaction-strong",
        "data-[state=checked]:rounded-full",
        "data-[state=checked]:border-0",
        // Radius (Foundation Layer)
        radius["3xl"],
        // Focus states (Foundation Layer)
        states.focusRing,
        // Invalid states (Foundation Layer)
        states.invalidRing,
        states.invalidBorder,
        // Disabled states (Foundation Layer)
        states.disabled,
        states.disabledCursor,
        // Animation (specific transition - keep inline)
        "transition-[background-color,border-color,box-shadow]",
        // Visual Effects
        "outline-none",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        RadioGroupPrimitive__namespace.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" })
        }
      )
    })
  );
}
function RadioGroupCardItem(_a) {
  var _b = _a, {
    className,
    label,
    description,
    id
  } = _b, props = __objRest(_b, [
    "className",
    "label",
    "description",
    "id"
  ]);
  const generatedId = React24__namespace.useId();
  const itemId = id || `radio-card-${generatedId}`;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "label",
    {
      htmlFor: itemId,
      className: cn(
        // Layout & Structure
        "group relative flex gap-2 items-start px-4 py-3 cursor-pointer",
        // Border & Stroke (Foundation Layer)
        "border",
        stroke.subdued,
        // Background & Surface
        "bg-transparent",
        // Active state - using surface.whisper and stroke.default (Foundation Layer values)
        "has-[[data-state=checked]]:bg-semantic-surface-whisper",
        "has-[[data-state=checked]]:border-semantic-stroke-default",
        // Radius (specific to RadioGroupCardItem - not in Foundation Layer)
        "rounded-[8px]",
        // Animation (Foundation Layer)
        animation.transitionAll,
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          RadioGroupPrimitive__namespace.Item,
          __spreadProps(__spreadValues({
            "data-slot": "radio-group-card-item",
            id: itemId,
            className: cn(
              // Layout & Structure
              "mt-0.5 shrink-0 cursor-pointer",
              // Size & Layout
              "aspect-square size-4 shrink-0",
              // Border & Stroke (Foundation Layer)
              "border",
              stroke.default,
              // Background & Surface
              "data-[state=unchecked]:bg-transparent",
              // Active state - using surface.interactionStrong and radius.full (Foundation Layer values)
              "data-[state=checked]:bg-semantic-surface-interaction-strong",
              "data-[state=checked]:rounded-full",
              "data-[state=checked]:border-0",
              // Radius (Foundation Layer)
              radius["3xl"],
              // Focus states (Foundation Layer)
              states.focusRing,
              // Invalid states (Foundation Layer)
              states.invalidRing,
              states.invalidBorder,
              // Disabled states (Foundation Layer)
              states.disabled,
              states.disabledCursor,
              // Animation (specific transition - keep inline)
              "transition-[background-color,border-color,box-shadow]",
              // Visual Effects
              "outline-none"
            )
          }, props), {
            children: /* @__PURE__ */ jsxRuntime.jsx(
              RadioGroupPrimitive__namespace.Indicator,
              {
                "data-slot": "radio-group-indicator",
                className: "relative flex items-center justify-center pointer-events-none",
                children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white pointer-events-none" })
              }
            )
          })
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: cn(
                // Typography
                "text-sm leading-5",
                // Text color (Foundation Layer)
                text.default,
                // Font weight (specific to component)
                "group-has-[[data-state=checked]]:font-normal"
              ),
              children: label
            }
          ),
          description && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
            // Typography
            "text-sm leading-5",
            // Text color (Foundation Layer)
            text.subdued
          ), children: description })
        ] })
      ]
    }
  );
}
function MaterialSymbol(_a) {
  var _b = _a, {
    name,
    size: size2,
    fill = 0,
    weight = 300,
    grade = 0,
    opticalSize,
    className,
    style
  } = _b, props = __objRest(_b, [
    "name",
    "size",
    "fill",
    "weight",
    "grade",
    "opticalSize",
    "className",
    "style"
  ]);
  const finalOpticalSize = opticalSize != null ? opticalSize : 24;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadProps(__spreadValues({
      className: cn("material-symbols-outlined", className),
      style: __spreadValues(__spreadProps(__spreadValues({}, size2 !== void 0 && { fontSize: `${size2}px` }), {
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${finalOpticalSize}`
      }), style)
    }, props), {
      children: name
    })
  );
}
var Select = React24__namespace.memo(function Select2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Root, __spreadValues({ "data-slot": "select" }, props));
});
function SelectGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Group, __spreadValues({ "data-slot": "select-group" }, props));
}
function SelectValue(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Value, __spreadValues({ "data-slot": "select-value" }, props));
}
function SelectTrigger(_a) {
  var _b = _a, {
    className,
    size: size2 = "default",
    children
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Trigger,
    __spreadProps(__spreadValues({
      "data-slot": "select-trigger",
      "data-size": size2,
      className: cn(
        // Layout & Structure
        "h-9 w-full min-w-0 px-3 py-1",
        // Background & Surface
        "bg-transparent dark:bg-input/30",
        // Border & Stroke
        "border border-input",
        // Radius (Foundation Layer)
        radius.md,
        // Typography
        "text-base md:text-sm",
        // Legacy shadcn text colors
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "data-[placeholder]:text-muted-foreground",
        // Visual Effects (Foundation Layer)
        shadow.xs,
        states.outlineNone,
        // Animation (Foundation Layer)
        animation.transitionFormControl,
        // Layout and spacing
        "flex items-center justify-between gap-2 whitespace-nowrap",
        // Sizes
        "data-[size=default]:h-9 data-[size=sm]:h-8 data-[size=sm]:text-sm",
        // Content styles
        "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        // Disabled states (Foundation Layer)
        states.disabled,
        states.disabledCursor,
        // Focus states (legacy shadcn - keep inline)
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        // Invalid states (Foundation Layer)
        states.invalidRing,
        // Invalid border - using stroke.destructive with aria-invalid prefix
        "aria-invalid:border-semantic-stroke-rag-danger-default",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
          MaterialSymbol,
          {
            name: "expand_more",
            size: 16,
            weight: 300,
            className: "text-semantic-icon-subdued shrink-0 pointer-events-none"
          }
        ) })
      ]
    })
  );
}
function SelectContent(_a) {
  var _b = _a, {
    className,
    children,
    position = "popper",
    align = "center"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "position",
    "align"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Content,
    __spreadProps(__spreadValues({
      "data-slot": "select-content",
      className: cn(
        // Background & Surface (legacy shadcn)
        "bg-popover text-popover-foreground",
        // Border & Stroke
        "border",
        // Radius (Foundation Layer)
        radius.md,
        // Visual Effects (Foundation Layer)
        shadow.md,
        "relative z-50",
        // Layout & Structure
        "max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto",
        // Animations (Radix UI specific - keep inline)
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(
          SelectPrimitive__namespace.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
}
function SelectLabel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Label,
    __spreadValues({
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className)
    }, props)
  );
}
function SelectItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
      ]
    })
  );
}
function SelectSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Separator,
    __spreadValues({
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)
    }, props)
  );
}
function SelectScrollUpButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollUpButton,
    __spreadProps(__spreadValues({
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUpIcon, { className: "size-4" })
    })
  );
}
function SelectScrollDownButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollDownButton,
    __spreadProps(__spreadValues({
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MaterialSymbol,
        {
          name: "expand_more",
          size: 16,
          weight: 300,
          className: "text-semantic-icon-subdued"
        }
      )
    })
  );
}
function Textarea(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    __spreadValues({
      "data-slot": "textarea",
      className: cn(
        // Layout & Structure
        "flex field-sizing-content min-h-16 w-full px-3 py-2",
        // Background & Surface
        "bg-transparent dark:bg-input/30",
        // Border & Stroke
        "border border-input",
        // Radius (Foundation Layer)
        radius.md,
        // Typography
        "text-base md:text-sm",
        // Legacy shadcn text colors
        "placeholder:text-muted-foreground",
        // Visual Effects (Foundation Layer)
        shadow.xs,
        states.outlineNone,
        // Animation (Foundation Layer)
        animation.transitionFormControl,
        // Disabled states (Foundation Layer)
        states.disabled,
        states.disabledCursor,
        // Focus states (legacy shadcn - keep inline)
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        // Invalid states (Foundation Layer)
        states.invalidRing,
        // Invalid border (legacy shadcn - keep inline)
        "aria-invalid:border-destructive",
        className
      )
    }, props)
  );
}
function Slider(_a) {
  var _b = _a, {
    className,
    defaultValue,
    value,
    min = 0,
    max = 100
  } = _b, props = __objRest(_b, [
    "className",
    "defaultValue",
    "value",
    "min",
    "max"
  ]);
  const _values = React24__namespace.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SliderPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          SliderPrimitive__namespace.Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              SliderPrimitive__namespace.Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "bg-semantic-surface-interaction-strong absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsxRuntime.jsx(
          SliderPrimitive__namespace.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-semantic-surface-interaction-strong ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed"
          },
          index
        ))
      ]
    })
  );
}
function Progress(_a) {
  var _b = _a, {
    className,
    value
  } = _b, props = __objRest(_b, [
    "className",
    "value"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ProgressPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "progress",
      className: cn(
        // Background & Surface (Foundation Layer value with opacity - keep inline)
        "bg-semantic-surface-interaction-strong/20",
        // Layout & Structure
        "relative h-2 w-full overflow-hidden",
        // Radius (Foundation Layer)
        radius.full,
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        ProgressPrimitive__namespace.Indicator,
        {
          "data-slot": "progress-indicator",
          className: cn(
            // Background & Surface (Foundation Layer)
            surface.interactionStrong,
            // Layout & Structure
            "h-full w-full flex-1",
            // Animation (Foundation Layer)
            animation.transitionAll
          ),
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    })
  );
}
var alertVariants = classVarianceAuthority.cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>.material-symbols-outlined]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 has-[>.material-symbols-outlined]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current [&>.material-symbols-outlined]:size-4 [&>.material-symbols-outlined]:translate-y-0.5 [&>.material-symbols-outlined]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "bg-destructive text-[var(--destructive-foreground)] [&>svg]:text-current [&>.material-symbols-outlined]:text-current *:data-[slot=alert-description]:text-[var(--destructive-foreground)]/90 border-0"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert(_a) {
  var _b = _a, {
    className,
    variant
  } = _b, props = __objRest(_b, [
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props)
  );
}
function AlertTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )
    }, props)
  );
}
function AlertDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )
    }, props)
  );
}
function Card(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )
    }, props)
  );
}
function CardHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )
    }, props)
  );
}
function CardTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className)
    }, props)
  );
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function CardAction(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "card-content",
      className: cn("px-6", className)
    }, props)
  );
}
function CardFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className)
    }, props)
  );
}
function Tabs(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className)
    }, props)
  );
}
function TabsList(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.List,
    __spreadValues({
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )
    }, props)
  );
}
function TabsTrigger(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Trigger,
    __spreadValues({
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function TabsContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className)
    }, props)
  );
}
function Accordion(props) {
  const _a = props, { type = "single", collapsible } = _a, restProps = __objRest(_a, ["type", "collapsible"]);
  if (type === "single") {
    const singleProps = __spreadValues(__spreadProps(__spreadValues({}, restProps), {
      type: "single"
    }), collapsible !== void 0 && { collapsible });
    return /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Root, __spreadValues({ "data-slot": "accordion" }, singleProps));
  }
  const multipleProps = __spreadProps(__spreadValues({}, restProps), {
    type: "multiple"
  });
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Root, __spreadValues({ "data-slot": "accordion" }, multipleProps));
}
function AccordionItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Item,
    __spreadValues({
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className)
    }, props)
  );
}
function AccordionTrigger(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
    AccordionPrimitive__namespace.Trigger,
    __spreadProps(__spreadValues({
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    })
  ) });
}
function AccordionContent(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Content,
    __spreadProps(__spreadValues({
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("pt-0 pb-4", className), children })
    })
  );
}
function Collapsible(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(CollapsiblePrimitive__namespace.Root, __spreadValues({ "data-slot": "collapsible" }, props));
}
function CollapsibleTrigger2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CollapsiblePrimitive__namespace.CollapsibleTrigger,
    __spreadValues({
      "data-slot": "collapsible-trigger"
    }, props)
  );
}
function CollapsibleContent2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CollapsiblePrimitive__namespace.CollapsibleContent,
    __spreadValues({
      "data-slot": "collapsible-content"
    }, props)
  );
}
function Popover(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Root, __spreadValues({ "data-slot": "popover" }, props));
}
function PopoverTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "popover-trigger" }, props));
}
function PopoverContent(_a) {
  var _b = _a, {
    className,
    align = "center",
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    PopoverPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )
    }, props)
  ) });
}
function PopoverAnchor(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Anchor, __spreadValues({ "data-slot": "popover-anchor" }, props));
}
function HoverCard(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(HoverCardPrimitive__namespace.Root, __spreadValues({ "data-slot": "hover-card" }, props));
}
function HoverCardTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(HoverCardPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "hover-card-trigger" }, props));
}
function HoverCardContent(_a) {
  var _b = _a, {
    className,
    align = "center",
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(HoverCardPrimitive__namespace.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ jsxRuntime.jsx(
    HoverCardPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )
    }, props)
  ) });
}
var DropdownMenu = React24__namespace.memo(function DropdownMenu2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
});
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Trigger,
    __spreadValues({
      "data-slot": "dropdown-menu-trigger"
    }, props)
  );
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ) });
}
function DropdownMenuGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Group, __spreadValues({ "data-slot": "dropdown-menu-group" }, props));
}
function DropdownMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Item,
    __spreadValues({
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-[var(--destructive-foreground)] data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-[var(--destructive-foreground)] data-[variant=destructive]:*:[svg]:!text-[var(--destructive-foreground)] [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function DropdownMenuCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.CheckboxItem,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    })
  );
}
function DropdownMenuRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.RadioGroup,
    __spreadValues({
      "data-slot": "dropdown-menu-radio-group"
    }, props)
  );
}
function DropdownMenuRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.RadioItem,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    })
  );
}
function DropdownMenuLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Label,
    __spreadValues({
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function DropdownMenuSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Separator,
    __spreadValues({
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}
function DropdownMenuShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadValues({
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}
function DropdownMenuSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Sub, __spreadValues({ "data-slot": "dropdown-menu-sub" }, props));
}
function DropdownMenuSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.SubTrigger,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    })
  );
}
function DropdownMenuSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.SubContent,
    __spreadValues({
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )
    }, props)
  );
}
var ContextMenu = React24__namespace.memo(function ContextMenu2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Root, __spreadValues({ "data-slot": "context-menu" }, props));
});
function ContextMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "context-menu-trigger" }, props));
}
function ContextMenuSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Sub, __spreadValues({ "data-slot": "context-menu-sub" }, props));
}
function ContextMenuRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.RadioGroup,
    __spreadValues({
      "data-slot": "context-menu-radio-group"
    }, props)
  );
}
function ContextMenuSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ContextMenuPrimitive__namespace.SubTrigger,
    __spreadProps(__spreadValues({
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto" })
      ]
    })
  );
}
function ContextMenuSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.SubContent,
    __spreadValues({
      "data-slot": "context-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )
    }, props)
  );
}
function ContextMenuContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "context-menu-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ) });
}
function ContextMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Item,
    __spreadValues({
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-[var(--destructive-foreground)] data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-[var(--destructive-foreground)] data-[variant=destructive]:*:[svg]:!text-[var(--destructive-foreground)] [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function ContextMenuCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ContextMenuPrimitive__namespace.CheckboxItem,
    __spreadProps(__spreadValues({
      "data-slot": "context-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    })
  );
}
function ContextMenuRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ContextMenuPrimitive__namespace.RadioItem,
    __spreadProps(__spreadValues({
      "data-slot": "context-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    })
  );
}
function ContextMenuLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Label,
    __spreadValues({
      "data-slot": "context-menu-label",
      "data-inset": inset,
      className: cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function ContextMenuSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Separator,
    __spreadValues({
      "data-slot": "context-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}
function ContextMenuShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadValues({
      "data-slot": "context-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}
var Dialog = React24__namespace.memo(function Dialog2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Root, __spreadValues({ "data-slot": "dialog" }, props));
});
function DialogTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "dialog-trigger" }, props));
}
function DialogPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Portal, __spreadValues({ "data-slot": "dialog-portal" }, props));
}
function DialogClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Close, __spreadValues({ "data-slot": "dialog-close" }, props));
}
function DialogOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Overlay,
    __spreadValues({
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
var DialogContent = React24__namespace.memo(function DialogContent2(_a) {
  var _b = _a, {
    className,
    children,
    showCloseButton = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "showCloseButton"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      SheetPrimitive__namespace.Content,
      __spreadProps(__spreadValues({
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )
      }, props), {
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntime.jsxs(
            SheetPrimitive__namespace.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, {}),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      })
    )
  ] });
});
function DialogHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className)
    }, props)
  );
}
function DialogFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )
    }, props)
  );
}
function DialogTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Title,
    __spreadValues({
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-normal", className)
    }, props)
  );
}
function DialogDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Description,
    __spreadValues({
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function Command(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command,
    __spreadValues({
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )
    }, props)
  );
}
function CommandDialog(_a) {
  var _b = _a, {
    title = "Command Palette",
    description = "Search for a command to run...",
    children,
    className,
    showCloseButton = true
  } = _b, props = __objRest(_b, [
    "title",
    "description",
    "children",
    "className",
    "showCloseButton"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(Dialog, __spreadProps(__spreadValues({}, props), { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { children: title }),
      /* @__PURE__ */ jsxRuntime.jsx(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      DialogContent,
      {
        className: cn("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ jsxRuntime.jsx(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
      }
    )
  ] }));
}
function CommandInput(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          cmdk.Command.Input,
          __spreadValues({
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            )
          }, props)
        )
      ]
    }
  );
}
function CommandList(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.List,
    __spreadValues({
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )
    }, props)
  );
}
function CommandEmpty(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Empty,
    __spreadValues({
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm"
    }, props)
  );
}
function CommandGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Group,
    __spreadValues({
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )
    }, props)
  );
}
function CommandSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Separator,
    __spreadValues({
      "data-slot": "command-separator",
      className: cn("bg-border -mx-1 h-px", className)
    }, props)
  );
}
function CommandItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Item,
    __spreadValues({
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function CommandShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadValues({
      "data-slot": "command-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}
function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyText = "No option found.",
  className,
  disabled
}) {
  const [open, setOpen] = React24__namespace.useState(false);
  const selectedOption = options.find((option) => option.value === value);
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        variant: "outline",
        role: "combobox",
        className: cn("w-full justify-between", className),
        disabled,
        children: [
          selectedOption ? selectedOption.label : placeholder,
          /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "expand_more", size: 16, weight: 300 })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-[300px] p-0", children: /* @__PURE__ */ jsxRuntime.jsxs(Command, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CommandInput, { placeholder: searchPlaceholder }),
      /* @__PURE__ */ jsxRuntime.jsxs(CommandList, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(CommandEmpty, { children: emptyText }),
        /* @__PURE__ */ jsxRuntime.jsx(CommandGroup, { children: options.map((option) => /* @__PURE__ */ jsxRuntime.jsx(
          CommandItem,
          {
            value: option.value,
            onSelect: (currentValue) => {
              onValueChange == null ? void 0 : onValueChange(currentValue === value ? "" : currentValue);
              setOpen(false);
            },
            children: option.label
          },
          option.value
        )) })
      ] })
    ] }) })
  ] });
}
function InputOTP(_a) {
  var _b = _a, {
    className,
    containerClassName
  } = _b, props = __objRest(_b, [
    "className",
    "containerClassName"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    inputOtp.OTPInput,
    __spreadValues({
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className)
    }, props)
  );
}
function InputOTPGroup(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className)
    }, props)
  );
}
function InputOTPSlot(_a) {
  var _b = _a, {
    index,
    className
  } = _b, props = __objRest(_b, [
    "index",
    "className"
  ]);
  var _a2;
  const inputOTPContext = React24__namespace.useContext(inputOtp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = (_a2 = inputOTPContext == null ? void 0 : inputOTPContext.slots[index]) != null ? _a2 : {};
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )
    }, props), {
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    })
  );
}
function InputOTPSeparator(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx("div", __spreadProps(__spreadValues({ "data-slot": "input-otp-separator", role: "separator" }, props), { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MinusIcon, {}) }));
}
function InputGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "input-group",
      className: cn("flex items-center", className)
    }, props)
  );
}
function Breadcrumb(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx("nav", __spreadValues({ "aria-label": "breadcrumb", "data-slot": "breadcrumb" }, props));
}
function BreadcrumbList(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ol",
    __spreadValues({
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )
    }, props)
  );
}
function BreadcrumbItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    __spreadValues({
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
}
function BreadcrumbLink(_a) {
  var _b = _a, {
    asChild,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "className"
  ]);
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className)
    }, props)
  );
}
function BreadcrumbPage(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadValues({
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className)
    }, props)
  );
}
function BreadcrumbSeparator(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    __spreadProps(__spreadValues({
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("inline-flex items-center [&>svg]:size-3.5", className)
    }, props), {
      children: children != null ? children : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, {})
    })
  );
}
function BreadcrumbEllipsis(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More" })
      ]
    })
  );
}
function Pagination(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
}
function PaginationContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    __spreadValues({
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className)
    }, props)
  );
}
function PaginationItem(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx("li", __spreadValues({ "data-slot": "pagination-item" }, props));
}
function PaginationLink(_a) {
  var _b = _a, {
    className,
    isActive,
    size: size2 = "icon",
    children
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "size",
    "children"
  ]);
  const isIconOnly = (size2 == null ? void 0 : size2.toString().includes("icon")) || false;
  const hasText = React24__namespace.Children.toArray(children).some((child) => {
    if (typeof child === "string") return child.trim().length > 0;
    if (typeof child === "number") return true;
    return false;
  });
  const iconOnlyProps = isIconOnly && !hasText && !props["aria-label"] && !props["aria-labelledby"] ? { "aria-label": "Go to page" } : {};
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    __spreadProps(__spreadValues(__spreadValues({
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size: size2
        }),
        className
      )
    }, iconOnlyProps), props), {
      children
    })
  );
}
function PaginationPrevious(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: "Previous" })
      ]
    })
  );
}
function PaginationNext(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, {})
      ]
    })
  );
}
function PaginationEllipsis(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
}
var buttonGroupVariants = classVarianceAuthority.cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function ButtonGroup(_a) {
  var _b = _a, {
    className,
    orientation
  } = _b, props = __objRest(_b, [
    "className",
    "orientation"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      role: "group",
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: cn(buttonGroupVariants({ orientation }), className)
    }, props)
  );
}
function ButtonGroupText(_a) {
  var _b = _a, {
    className,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild"
  ]);
  const Comp = asChild ? reactSlot.Slot : "div";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      className: cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function ButtonGroupSeparator(_a) {
  var _b = _a, {
    className,
    orientation = "vertical"
  } = _b, props = __objRest(_b, [
    "className",
    "orientation"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Separator,
    __spreadValues({
      "data-slot": "button-group-separator",
      orientation,
      className: cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )
    }, props)
  );
}
function NativeSelect(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
      "data-slot": "native-select-wrapper",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "select",
          __spreadValues({
            "data-slot": "native-select",
            className: cn(
              "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              className
            )
          }, props)
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ChevronDownIcon,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none",
            "aria-hidden": "true",
            "data-slot": "native-select-icon"
          }
        )
      ]
    }
  );
}
function FieldSet(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "fieldset",
    __spreadValues({
      "data-slot": "field-set",
      className: cn(
        "flex flex-col gap-3",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )
    }, props)
  );
}
function FieldLegend(_a) {
  var _b = _a, {
    className,
    variant = "legend"
  } = _b, props = __objRest(_b, [
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "legend",
    __spreadValues({
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn(
        "mb-3 font-normal",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )
    }, props)
  );
}
function FieldGroup(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "field-group",
      className: cn(
        "group/field-group @container/field-group flex w-full flex-col gap-3 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-3",
        className
      )
    }, props)
  );
}
var fieldVariants = classVarianceAuthority.cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-[var(--destructive-foreground)]",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
var Field = React24__namespace.memo(function Field2(_a) {
  var _b = _a, {
    className,
    orientation = "vertical"
  } = _b, props = __objRest(_b, [
    "className",
    "orientation"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className)
    }, props)
  );
});
function FieldContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "field-content",
      className: cn(
        "group/field-content flex flex-1 flex-col gap-3 leading-snug",
        className
      )
    }, props)
  );
}
function FieldLabel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Label,
    __spreadValues({
      "data-slot": "field-label",
      className: cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      )
    }, props)
  );
}
function FieldTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "field-label",
      className: cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-normal group-data-[disabled=true]/field:opacity-50",
        className
      )
    }, props)
  );
}
function FieldDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    __spreadValues({
      "data-slot": "field-description",
      className: cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )
    }, props)
  );
}
function FieldSeparator(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "field-separator",
      "data-content": !!children,
      className: cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Separator, { className: "absolute inset-0 top-1/2" }),
        children && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
            "data-slot": "field-separator-content",
            children
          }
        )
      ]
    })
  );
}
function FieldError(_a) {
  var _b = _a, {
    className,
    children,
    errors
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "errors"
  ]);
  const content = React24.useMemo(() => {
    var _a2;
    if (children) {
      return children;
    }
    if (!(errors == null ? void 0 : errors.length)) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error == null ? void 0 : error.message, error])).values()
    ];
    if ((uniqueErrors == null ? void 0 : uniqueErrors.length) == 1) {
      return (_a2 = uniqueErrors[0]) == null ? void 0 : _a2.message;
    }
    return /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: uniqueErrors.map(
      (error, index) => (error == null ? void 0 : error.message) && /* @__PURE__ */ jsxRuntime.jsx("li", { children: error.message }, index)
    ) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      role: "alert",
      "data-slot": "field-error",
      className: cn("text-[var(--destructive-foreground)] text-sm font-normal", className)
    }, props), {
      children: content
    })
  );
}
function AlertDialog(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Root, __spreadValues({ "data-slot": "alert-dialog" }, props));
}
function AlertDialogTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "alert-dialog-trigger" }, props));
}
function AlertDialogPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Portal, __spreadValues({ "data-slot": "alert-dialog-portal" }, props));
}
function AlertDialogOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Overlay,
    __spreadValues({
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function AlertDialogContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsx(
      AlertDialogPrimitive__namespace.Content,
      __spreadValues({
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )
      }, props)
    )
  ] });
}
function AlertDialogHeader(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className)
    }, props)
  );
}
function AlertDialogFooter(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )
    }, props)
  );
}
function AlertDialogTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Title,
    __spreadValues({
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-normal", className)
    }, props)
  );
}
function AlertDialogDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Description,
    __spreadValues({
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function AlertDialogAction(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Action,
    __spreadValues({
      className: cn(buttonVariants(), className)
    }, props)
  );
}
function AlertDialogCancel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Cancel,
    __spreadValues({
      className: cn(buttonVariants({ variant: "outline" }), className)
    }, props)
  );
}
function Drawer(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Root, __spreadValues({ "data-slot": "drawer" }, props));
}
function DrawerTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Trigger, __spreadValues({ "data-slot": "drawer-trigger" }, props));
}
function DrawerPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Portal, __spreadValues({ "data-slot": "drawer-portal" }, props));
}
function DrawerClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Close, __spreadValues({ "data-slot": "drawer-close" }, props));
}
function DrawerOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Overlay,
    __spreadValues({
      "data-slot": "drawer-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function DrawerContent(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsxRuntime.jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      vaul.Drawer.Content,
      __spreadProps(__spreadValues({
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      })
    )
  ] });
}
function DrawerHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "drawer-header",
      className: cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )
    }, props)
  );
}
function DrawerFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
}
function DrawerTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Title,
    __spreadValues({
      "data-slot": "drawer-title",
      className: cn("text-foreground font-normal", className)
    }, props)
  );
}
function DrawerDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Description,
    __spreadValues({
      "data-slot": "drawer-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function Sheet(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Root, __spreadValues({ "data-slot": "sheet" }, props));
}
function SheetTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "sheet-trigger" }, props));
}
function SheetClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Close, __spreadValues({ "data-slot": "sheet-close" }, props));
}
function SheetPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Portal, __spreadValues({ "data-slot": "sheet-portal" }, props));
}
function SheetOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Overlay,
    __spreadValues({
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[55] bg-black/50",
        className
      )
    }, props)
  );
}
function SheetContent(_a) {
  var _b = _a, {
    className,
    children,
    side = "right"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "side"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      SheetPrimitive__namespace.Content,
      __spreadProps(__spreadValues({
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-[60] flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Title, { className: "sr-only", children: "Sheet" }),
          children,
          /* @__PURE__ */ jsxRuntime.jsxs(SheetPrimitive__namespace.Close, { className: "absolute top-4 right-4 z-50 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none disabled:cursor-not-allowed flex items-center justify-center size-8", children: [
            /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "close", size: 20, weight: 300, className: "text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
}
function SheetHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className)
    }, props)
  );
}
function SheetFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
}
function SheetTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Title,
    __spreadValues({
      "data-slot": "sheet-title",
      className: cn("text-foreground font-normal", className)
    }, props)
  );
}
function SheetDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Description,
    __spreadValues({
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
var MOBILE_BREAKPOINT = 1024;
function useIsMobile() {
  const [isMobile, setIsMobile] = React24__namespace.useState(void 0);
  React24__namespace.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React24__namespace.createContext(null);
function useSidebar() {
  const context = React24__namespace.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider(_a) {
  var _b = _a, {
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children
  } = _b, props = __objRest(_b, [
    "defaultOpen",
    "open",
    "onOpenChange",
    "className",
    "style",
    "children"
  ]);
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React24__namespace.useState(false);
  const [_open, _setOpen] = React24__namespace.useState(defaultOpen);
  const open = openProp != null ? openProp : _open;
  const setOpen = React24__namespace.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React24__namespace.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React24__namespace.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React24__namespace.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "sidebar-wrapper",
      style: __spreadValues({
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
      }, style),
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      )
    }, props), {
      children
    })
  ) }) });
}
function Sidebar(_a) {
  var _b = _a, {
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children
  } = _b, props = __objRest(_b, [
    "side",
    "variant",
    "collapsible",
    "className",
    "children"
  ]);
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadProps(__spreadValues({
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )
      }, props), {
        children
      })
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsxRuntime.jsx(Sheet, __spreadProps(__spreadValues({ open: openMobile, onOpenChange: setOpenMobile }, props), { children: /* @__PURE__ */ jsxRuntime.jsxs(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsxRuntime.jsx(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsxRuntime.jsx(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) }));
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          __spreadProps(__spreadValues({
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            )
          }, props), {
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children
              }
            )
          })
        )
      ]
    }
  );
}
function SidebarTrigger(_a) {
  var _b = _a, {
    className,
    onClick
  } = _b, props = __objRest(_b, [
    "className",
    "onClick"
  ]);
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    __spreadProps(__spreadValues({
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      }
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PanelLeftIcon, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    })
  );
}
function SidebarRail(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadValues({
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )
    }, props)
  );
}
function SidebarInset(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "main",
    __spreadValues({
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )
    }, props)
  );
}
function SidebarInput(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Input,
    __spreadValues({
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("bg-background h-8 w-full shadow-none", className)
    }, props)
  );
}
function SidebarHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className)
    }, props)
  );
}
function SidebarFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className)
    }, props)
  );
}
function SidebarSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Separator,
    __spreadValues({
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-sidebar-border mx-2 w-auto", className)
    }, props)
  );
}
function SidebarContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )
    }, props)
  );
}
function SidebarGroup(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className)
    }, props)
  );
}
function SidebarGroupLabel(_a) {
  var _b = _a, {
    className,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild"
  ]);
  const Comp = asChild ? reactSlot.Slot : "div";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )
    }, props)
  );
}
function SidebarGroupAction(_a) {
  var _b = _a, {
    className,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild"
  ]);
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarGroupContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className)
    }, props)
  );
}
function SidebarMenu(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    __spreadValues({
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className)
    }, props)
  );
}
function SidebarMenuItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    __spreadValues({
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className)
    }, props)
  );
}
var sidebarMenuButtonVariants = classVarianceAuthority.cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:cursor-not-allowed data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton(_a) {
  var _b = _a, {
    asChild = false,
    isActive = false,
    variant = "default",
    size: size2 = "default",
    tooltip,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "isActive",
    "variant",
    "size",
    "tooltip",
    "className"
  ]);
  const Comp = asChild ? reactSlot.Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size2,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size: size2 }), className)
    }, props)
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsxRuntime.jsx(
      TooltipContent,
      __spreadValues({
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile
      }, tooltip)
    )
  ] });
}
function SidebarMenuAction(_a) {
  var _b = _a, {
    className,
    asChild = false,
    showOnHover = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild",
    "showOnHover"
  ]);
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )
    }, props)
  );
}
function SidebarMenuBadge(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarMenuSkeleton(_a) {
  var _b = _a, {
    className,
    showIcon = false
  } = _b, props = __objRest(_b, [
    "className",
    "showIcon"
  ]);
  const width = React24__namespace.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className)
    }, props), {
      children: [
        showIcon && /* @__PURE__ */ jsxRuntime.jsx(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    })
  );
}
function SidebarMenuSub(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    __spreadValues({
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarMenuSubItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    __spreadValues({
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className)
    }, props)
  );
}
function SidebarMenuSubButton(_a) {
  var _b = _a, {
    asChild = false,
    size: size2 = "md",
    isActive = false,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "size",
    "isActive",
    "className"
  ]);
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size2,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:cursor-not-allowed [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size2 === "sm" && "text-xs",
        size2 === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function NavigationMenu(_a) {
  var _b = _a, {
    className,
    children,
    viewport = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "viewport"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    NavigationMenuPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )
    }, props), {
      children: [
        children,
        viewport && /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuViewport, {})
      ]
    })
  );
}
function NavigationMenuList(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.List,
    __spreadValues({
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )
    }, props)
  );
}
function NavigationMenuItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Item,
    __spreadValues({
      "data-slot": "navigation-menu-item",
      className: cn("relative", className)
    }, props)
  );
}
var navigationMenuTriggerStyle = classVarianceAuthority.cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuTrigger(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    NavigationMenuPrimitive__namespace.Trigger,
    __spreadProps(__spreadValues({
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className)
    }, props), {
      children: [
        children,
        " ",
        /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    })
  );
}
function NavigationMenuContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )
    }, props)
  );
}
function NavigationMenuViewport(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        NavigationMenuPrimitive__namespace.Viewport,
        __spreadValues({
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          )
        }, props)
      )
    }
  );
}
function NavigationMenuLink(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Link,
    __spreadValues({
      "data-slot": "navigation-menu-link",
      className: cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
var Menubar = React24__namespace.memo(function Menubar2(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "menubar",
      className: cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )
    }, props)
  );
});
function MenubarMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Menu, __spreadValues({ "data-slot": "menubar-menu" }, props));
}
function MenubarPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Portal, __spreadValues({ "data-slot": "menubar-portal" }, props));
}
function MenubarRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.RadioGroup, __spreadValues({ "data-slot": "menubar-radio-group" }, props));
}
function MenubarTrigger(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Trigger,
    __spreadValues({
      "data-slot": "menubar-trigger",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )
    }, props)
  );
}
function MenubarContent(_a) {
  var _b = _a, {
    className,
    align = "start",
    alignOffset = -4,
    sideOffset = 8
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "alignOffset",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPortal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ) });
}
function MenubarItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Item,
    __spreadValues({
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function MenubarCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    MenubarPrimitive__namespace.CheckboxItem,
    __spreadProps(__spreadValues({
      "data-slot": "menubar-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    })
  );
}
function MenubarRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    MenubarPrimitive__namespace.RadioItem,
    __spreadProps(__spreadValues({
      "data-slot": "menubar-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    })
  );
}
function MenubarLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Label,
    __spreadValues({
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function MenubarSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Separator,
    __spreadValues({
      "data-slot": "menubar-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}
function MenubarShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadValues({
      "data-slot": "menubar-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}
function MenubarSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Sub, __spreadValues({ "data-slot": "menubar-sub" }, props));
}
function MenubarSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    MenubarPrimitive__namespace.SubTrigger,
    __spreadProps(__spreadValues({
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
}
function MenubarSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.SubContent,
    __spreadValues({
      "data-slot": "menubar-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )
    }, props)
  );
}
var { FormProvider, useFormContext, useFormState, useController } = ReactHookForm__namespace;
var Form = FormProvider;
var FormFieldContext = React24__namespace.createContext(
  {}
);
var FormField = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  render
}) => {
  const { field, fieldState, formState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister
  });
  return /* @__PURE__ */ jsxRuntime.jsx(FormFieldContext.Provider, { value: { name }, children: render({ field, fieldState, formState }) });
};
var useFormField = () => {
  const fieldContext = React24__namespace.useContext(FormFieldContext);
  const itemContext = React24__namespace.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return __spreadValues({
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`
  }, fieldState);
};
var FormItemContext = React24__namespace.createContext(
  {}
);
function FormItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const id = React24__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "form-item",
      className: cn("grid gap-2", className)
    }, props)
  ) });
}
function FormLabel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    Label,
    __spreadValues({
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-[var(--destructive-foreground)]", className),
      htmlFor: formItemId
    }, props)
  );
}
function FormControl(_a) {
  var props = __objRest(_a, []);
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactSlot.Slot,
    __spreadValues({
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error
    }, props)
  );
}
function FormDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    __spreadValues({
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function FormMessage(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  var _a2;
  const { error, formMessageId } = useFormField();
  const body = error ? String((_a2 = error == null ? void 0 : error.message) != null ? _a2 : "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    __spreadProps(__spreadValues({
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-[var(--destructive-foreground)] text-sm", className)
    }, props), {
      children: body
    })
  );
}
function Table(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "table",
        __spreadValues({
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className)
        }, props)
      )
    }
  );
}
function TableHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "thead",
    __spreadValues({
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className)
    }, props)
  );
}
function TableBody(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tbody",
    __spreadValues({
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
}
function TableFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tfoot",
    __spreadValues({
      "data-slot": "table-footer",
      className: cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )
    }, props)
  );
}
function TableRow(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    __spreadValues({
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )
    }, props)
  );
}
function TableHead(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "th",
    __spreadValues({
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-normal whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCell(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "td",
    __spreadValues({
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCaption(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "caption",
    __spreadValues({
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className)
    }, props)
  );
}
var DataTable = React24__namespace.memo(function DataTable2({
  data,
  columns,
  className,
  emptyMessage = "No data available."
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("rounded-md border", className), children: /* @__PURE__ */ jsxRuntime.jsxs(Table, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx(TableHead, { className: column.className, children: column.header }, column.key)) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(TableBody, { children: data.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: emptyMessage }) }) : data.map((row, rowIndex) => /* @__PURE__ */ jsxRuntime.jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx(TableCell, { className: column.className, children: column.cell(row) }, column.key)) }, rowIndex)) })
  ] }) });
});
function CalendarDayButton(_a) {
  var _b = _a, {
    className,
    day,
    modifiers
  } = _b, props = __objRest(_b, [
    "className",
    "day",
    "modifiers"
  ]);
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const ref = React24__namespace.useRef(null);
  React24__namespace.useEffect(() => {
    var _a2;
    if (modifiers.focused) (_a2 = ref.current) == null ? void 0 : _a2.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    __spreadValues({
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex flex-col items-center justify-center aspect-square size-auto w-full min-w-(--cell-size) gap-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )
    }, props)
  );
}
var Calendar = React24__namespace.memo(function Calendar2({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  mode,
  selected,
  onSelect,
  defaultMonth,
  showWeekNumber: showWeekNumberProp,
  disabled
}) {
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const dayPickerProps = __spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, mode && { mode }), selected !== void 0 && { selected }), onSelect && { onSelect }), defaultMonth && { defaultMonth }), {
    showOutsideDays
  }), showWeekNumberProp !== void 0 && { showWeekNumber: showWeekNumberProp }), disabled && { disabled }), captionLayout && captionLayout !== "label" && { captionLayout });
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
    __spreadProps(__spreadValues({}, dayPickerProps), {
      className: cn(
        "bg-background group/calendar p-4 [--cell-size:--spacing(9)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      formatters: __spreadValues({
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" })
      }, formatters),
      classNames: __spreadValues({
        root: cn("w-fit min-w-[280px]", defaultClassNames.root),
        months: cn(
          "flex gap-6 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-5", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-2 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size) mb-1",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-2",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "dropdown" || captionLayout === "dropdown-months" || captionLayout === "dropdown-years" || captionLayout === "buttons" ? "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5" : "text-sm",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex mb-1", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none py-1",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-1", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          showWeekNumberProp ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden)
      }, classNames),
      components: __spreadValues({
        Root: (_a) => {
          var _b = _a, { className: className2, rootRef } = _b, props = __objRest(_b, ["className", "rootRef"]);
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            __spreadValues({
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2)
            }, props)
          );
        },
        Chevron: (_c) => {
          var _d = _c, { className: className2, orientation } = _d, props = __objRest(_d, ["className", "orientation"]);
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, __spreadValues({ className: cn("size-4", className2) }, props));
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntime.jsx(
              lucideReact.ChevronRightIcon,
              __spreadValues({
                className: cn("size-4", className2)
              }, props)
            );
          }
          return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, __spreadValues({ className: cn("size-4", className2) }, props));
        },
        DayButton: CalendarDayButton,
        WeekNumber: (_e) => {
          var _f = _e, { children } = _f, props = __objRest(_f, ["children"]);
          return /* @__PURE__ */ jsxRuntime.jsx("td", __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) }));
        }
      }, components)
    })
  );
});
function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  formatString,
  variant = "button",
  className,
  disabled
}) {
  const [open, setOpen] = React24__namespace.useState(false);
  const defaultFormat = variant === "input" ? "MM/dd/yyyy" : "EEE, MMM d, yyyy";
  const displayFormat = formatString || defaultFormat;
  const formatDate = (date2) => {
    if (!date2) return variant === "input" ? "" : placeholder;
    if (date2 instanceof Date) {
      return dateFns.format(date2, displayFormat);
    }
    if (Array.isArray(date2)) {
      return date2.length > 0 ? dateFns.format(date2[0], displayFormat) : variant === "input" ? "" : placeholder;
    }
    if (typeof date2 === "object" && "from" in date2 && date2.from) {
      return dateFns.format(date2.from, displayFormat);
    }
    return variant === "input" ? "" : placeholder;
  };
  if (variant === "input") {
    return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative", className), children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Input,
          {
            placeholder,
            value: formatDate(date),
            readOnly: true,
            disabled,
            className: "pr-10"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "absolute right-0 top-0 h-full",
            onClick: () => setOpen(!open),
            disabled,
            "aria-label": "Open calendar",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "calendar_today", size: 14, weight: 300 }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Open calendar" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsxRuntime.jsx(
        Calendar,
        __spreadValues({
          mode: "single",
          selected: date,
          onSelect: (selectedDate) => {
            if (selectedDate instanceof Date || selectedDate === void 0) {
              onDateChange == null ? void 0 : onDateChange(selectedDate);
              setOpen(false);
            }
          }
        }, disabled && { disabled: () => disabled })
      ) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        variant: "outline",
        className: cn("w-full justify-start", className),
        disabled,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "calendar_today", size: 14, weight: 300, className: "mr-2" }),
          formatDate(date)
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsxRuntime.jsx(
      Calendar,
      __spreadValues({
        mode: "single",
        selected: date,
        onSelect: (selectedDate) => {
          if (selectedDate instanceof Date || selectedDate === void 0) {
            onDateChange == null ? void 0 : onDateChange(selectedDate);
            setOpen(false);
          }
        }
      }, disabled && { disabled: () => disabled })
    ) })
  ] });
}
var CarouselContext = React24__namespace.createContext(null);
function useCarousel() {
  const context = React24__namespace.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React24__namespace.memo(function Carousel2(_a) {
  var _b = _a, {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children
  } = _b, props = __objRest(_b, [
    "orientation",
    "opts",
    "setApi",
    "plugins",
    "className",
    "children"
  ]);
  const [carouselRef, api] = useEmblaCarousel__default.default(
    __spreadProps(__spreadValues({}, opts), {
      axis: orientation === "horizontal" ? "x" : "y"
    }),
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React24__namespace.useState(false);
  const [canScrollNext, setCanScrollNext] = React24__namespace.useState(false);
  const onSelect = React24__namespace.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React24__namespace.useCallback(() => {
    api == null ? void 0 : api.scrollPrev();
  }, [api]);
  const scrollNext = React24__namespace.useCallback(() => {
    api == null ? void 0 : api.scrollNext();
  }, [api]);
  const handleKeyDown = React24__namespace.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React24__namespace.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React24__namespace.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api == null ? void 0 : api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        __spreadProps(__spreadValues({
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel"
        }, props), {
          children
        })
      )
    }
  );
});
function CarouselContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        __spreadValues({
          className: cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          )
        }, props)
      )
    }
  );
}
function CarouselItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )
    }, props)
  );
}
function CarouselPrevious(_a) {
  var _b = _a, {
    className,
    variant = "outline",
    size: size2 = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size"
  ]);
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    __spreadProps(__spreadValues({
      "data-slot": "carousel-previous",
      variant,
      size: size2,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    })
  );
}
function CarouselNext(_a) {
  var _b = _a, {
    className,
    variant = "outline",
    size: size2 = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size"
  ]);
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    __spreadProps(__spreadValues({
      "data-slot": "carousel-next",
      variant,
      size: size2,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    })
  );
}
var Toaster = (_a) => {
  var props = __objRest(_a, []);
  const { theme = "system" } = nextThemes.useTheme();
  return /* @__PURE__ */ jsxRuntime.jsx(
    sonner.Toaster,
    __spreadValues({
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      }
    }, props)
  );
};
function ScrollArea(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ScrollAreaPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "scroll-area",
      className: cn("relative", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          ScrollAreaPrimitive__namespace.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(ScrollBar, {}),
        /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})
      ]
    })
  );
}
function ScrollBar(_a) {
  var _b = _a, {
    className,
    orientation = "vertical"
  } = _b, props = __objRest(_b, [
    "className",
    "orientation"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
    __spreadProps(__spreadValues({
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        ScrollAreaPrimitive__namespace.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    })
  );
}
function ResizablePanelGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResizablePrimitive__namespace.PanelGroup,
    __spreadValues({
      "data-slot": "resizable-panel-group",
      className: cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )
    }, props)
  );
}
function ResizablePanel(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(ResizablePrimitive__namespace.Panel, __spreadValues({ "data-slot": "resizable-panel" }, props));
}
function ResizableHandle(_a) {
  var _b = _a, {
    withHandle,
    className
  } = _b, props = __objRest(_b, [
    "withHandle",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResizablePrimitive__namespace.PanelResizeHandle,
    __spreadProps(__spreadValues({
      "data-slot": "resizable-handle",
      className: cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )
    }, props), {
      children: withHandle && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.GripVerticalIcon, { className: "size-2.5" }) })
    })
  );
}
var MATERIAL_SYMBOLS_URL = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
function MaterialSymbolsProvider() {
  React24.useEffect(() => {
    const existingLink = document.querySelector(
      `link[href="${MATERIAL_SYMBOLS_URL}"]`
    );
    if (existingLink) {
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = MATERIAL_SYMBOLS_URL;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    return () => {
    };
  }, []);
  return null;
}
var FidelityContext = React24__namespace.createContext(
  void 0
);
var STORAGE_KEY = "alize-fidelity";
function FidelityProvider({
  children,
  defaultFidelity = "alize"
}) {
  const [fidelity, setFidelityState] = React24__namespace.useState(defaultFidelity);
  const [mounted, setMounted] = React24__namespace.useState(false);
  React24__namespace.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "alize" || stored === "lofi") {
      setFidelityState(stored);
    }
    setMounted(true);
  }, []);
  React24__namespace.useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (fidelity === "lofi") {
      root.classList.add("theme-lofi");
    } else {
      root.classList.remove("theme-lofi");
    }
  }, [fidelity, mounted]);
  const setFidelity = React24__namespace.useCallback((newFidelity) => {
    setFidelityState(newFidelity);
    localStorage.setItem(STORAGE_KEY, newFidelity);
  }, []);
  const value = React24__namespace.useMemo(
    () => ({ fidelity, setFidelity }),
    [fidelity, setFidelity]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(FidelityContext.Provider, { value, children });
}
function useFidelity() {
  const context = React24__namespace.useContext(FidelityContext);
  if (context === void 0) {
    throw new Error("useFidelity must be used within a FidelityProvider");
  }
  return context;
}
function FidelityToggle() {
  const { fidelity, setFidelity } = useFidelity();
  const [mounted, setMounted] = React24__namespace.useState(false);
  React24__namespace.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "deployed_code", size: 16 }),
      /* @__PURE__ */ jsxRuntime.jsx(Switch, { disabled: true }),
      /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "frame_inspect", size: 16 })
    ] });
  }
  const isLofi = fidelity === "lofi";
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "deployed_code", size: 16, className: text.subdued }),
    /* @__PURE__ */ jsxRuntime.jsx(
      Switch,
      {
        checked: isLofi,
        onCheckedChange: (checked) => {
          setFidelity(checked ? "lofi" : "alize");
        },
        "aria-label": "Toggle fidelity mode"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "frame_inspect", size: 16, className: text.subdued })
  ] });
}
function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = nextThemes.useTheme();
  const [mounted, setMounted] = React24__namespace.useState(false);
  React24__namespace.useEffect(() => {
    setMounted(true);
  }, []);
  React24__namespace.useEffect(() => {
    if (mounted) {
      console.log("Theme:", theme, "Resolved:", resolvedTheme);
      console.log("HTML class:", document.documentElement.className);
    }
  }, [theme, resolvedTheme, mounted]);
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "light_mode", size: 16 }),
      /* @__PURE__ */ jsxRuntime.jsx(Switch, { disabled: true }),
      /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "dark_mode", size: 16 })
    ] });
  }
  const isDark = resolvedTheme === "dark";
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "light_mode", size: 16, className: text.subdued }),
    /* @__PURE__ */ jsxRuntime.jsx(
      Switch,
      {
        checked: isDark,
        onCheckedChange: (checked) => {
          setTheme(checked ? "dark" : "light");
        },
        "aria-label": "Toggle theme"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "dark_mode", size: 16, className: text.subdued })
  ] });
}

// src/lib/error-handling.ts
var DefaultErrorLogger = class {
  log(error, context) {
    const errorInfo = __spreadProps(__spreadValues({
      message: error.message,
      stack: error.stack,
      name: error.name
    }, context), {
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (process.env.NODE_ENV === "development") {
      console.error("Error logged:", errorInfo);
    }
  }
  async logAsync(error, context) {
    this.log(error, context);
  }
};
var ErrorLogger = new DefaultErrorLogger();
var AppError = class _AppError extends Error {
  constructor(message, code, statusCode, context) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.context = context;
    this.name = "AppError";
    Object.setPrototypeOf(this, _AppError.prototype);
  }
};
var NetworkError = class _NetworkError extends AppError {
  constructor(message = "Network request failed", context) {
    super(message, "NETWORK_ERROR", 0, context);
    this.name = "NetworkError";
    Object.setPrototypeOf(this, _NetworkError.prototype);
  }
};
var ValidationError = class _ValidationError extends AppError {
  constructor(message, fields, context) {
    super(message, "VALIDATION_ERROR", 400, context);
    this.fields = fields;
    this.name = "ValidationError";
    Object.setPrototypeOf(this, _ValidationError.prototype);
  }
};
async function handleAsyncError(fn, context) {
  try {
    return await fn();
  } catch (error) {
    const appError = error instanceof Error ? error : new Error(String(error));
    ErrorLogger.log(appError, context);
    throw appError;
  }
}
async function safeAsync(fn, context) {
  try {
    const data = await fn();
    return { success: true, data };
  } catch (error) {
    const appError = error instanceof Error ? error : new Error(String(error));
    ErrorLogger.log(appError, context);
    return { success: false, error: appError };
  }
}
async function retryAsync(fn, options = {}) {
  const {
    maxRetries = 3,
    initialDelay = 1e3,
    maxDelay = 1e4,
    retryable = () => true
  } = options;
  let lastError;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (attempt === maxRetries || !retryable(lastError)) {
        throw lastError;
      }
      const delay = Math.min(initialDelay * Math.pow(2, attempt), maxDelay);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw lastError;
}
async function withTimeout(fn, timeoutMs) {
  return Promise.race([
    fn(),
    new Promise(
      (_, reject) => setTimeout(() => reject(new Error(`Operation timed out after ${timeoutMs}ms`)), timeoutMs)
    )
  ]);
}
function formatErrorMessage(error) {
  if (error instanceof AppError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
}
function isRetryableError(error) {
  if (error instanceof NetworkError) {
    return true;
  }
  if (error instanceof Error) {
    return error.message.includes("network") || error.message.includes("timeout") || error.message.includes("ECONNREFUSED") || error.message.includes("ETIMEDOUT");
  }
  return false;
}
var emailSchema = zod.z.string().min(1, "Email is required").email("Please enter a valid email address");
var passwordSchema = zod.z.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/[0-9]/, "Password must contain at least one number");
var strongPasswordSchema = passwordSchema.regex(
  /[^A-Za-z0-9]/,
  "Password must contain at least one special character"
);
var usernameSchema = zod.z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters").regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores");
var urlSchema = zod.z.string().min(1, "URL is required").url("Please enter a valid URL");
var phoneSchema = zod.z.string().min(1, "Phone number is required").regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number");
var dateSchema = zod.z.string().min(1, "Date is required").refine((val) => !isNaN(Date.parse(val)), "Please enter a valid date");
var numberSchema = zod.z.string().min(1, "Number is required").refine((val) => !isNaN(Number(val)), "Please enter a valid number");
var positiveNumberSchema = numberSchema.refine(
  (val) => Number(val) > 0,
  "Number must be positive"
);
var integerSchema = zod.z.string().min(1, "Integer is required").refine((val) => Number.isInteger(Number(val)), "Please enter a valid integer");
var requiredStringSchema = zod.z.string().min(1, "This field is required");
var optionalStringSchema = zod.z.string().optional();
var textareaSchema = (minLength = 0, maxLength) => {
  let schema = zod.z.string().min(minLength, `Text must be at least ${minLength} characters`);
  if (maxLength !== void 0) {
    schema = schema.max(maxLength, `Text must be at most ${maxLength} characters`);
  }
  return schema;
};
var checkboxSchema = zod.z.boolean().refine((val) => val === true, "This field must be checked");
var selectSchema = (options) => zod.z.enum(options, {
  message: "Please select a valid option"
});
var fileSchema = zod.z.instanceof(File).refine((file) => file.size > 0, "File is required").optional();
var fileSizeSchema = (maxSizeInBytes) => zod.z.instanceof(File).refine((file) => file.size <= maxSizeInBytes, `File size must be less than ${maxSizeInBytes} bytes`);
var fileTypeSchema = (allowedTypes) => zod.z.instanceof(File).refine((file) => allowedTypes.includes(file.type), `File type must be one of: ${allowedTypes.join(", ")}`);
var commonSchemas = {
  /**
   * Login form schema
   */
  login: zod.z.object({
    email: emailSchema,
    password: requiredStringSchema
  }),
  /**
   * Registration form schema
   */
  registration: zod.z.object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: requiredStringSchema
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  }),
  /**
   * Contact form schema
   */
  contact: zod.z.object({
    name: requiredStringSchema,
    email: emailSchema,
    message: textareaSchema(10, 1e3)
  }),
  /**
   * Profile update schema
   */
  profile: zod.z.object({
    username: usernameSchema,
    email: emailSchema,
    phone: phoneSchema.optional(),
    bio: optionalStringSchema
  })
};

// src/lib/sanitization.ts
function sanitizeHtml(html, allowedTags = [
  "p",
  "br",
  "strong",
  "em",
  "u",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ul",
  "ol",
  "li",
  "a",
  "blockquote",
  "code",
  "pre"
]) {
  if (!html) return "";
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/on\w+="[^"]*"/gi, "").replace(/on\w+='[^']*'/gi, "").replace(/javascript:/gi, "");
  const tagPattern = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  sanitized = sanitized.replace(tagPattern, (match, tagName) => {
    const lowerTag = tagName.toLowerCase();
    if (allowedTags.includes(lowerTag)) {
      return match;
    }
    return "";
  });
  return sanitized;
}
function sanitizeUrl(url, allowedProtocols = ["http", "https", "mailto"]) {
  if (!url) return "";
  try {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol.replace(":", "").toLowerCase();
    if (!allowedProtocols.includes(protocol)) {
      return "";
    }
    return urlObj.toString();
  } catch (e) {
    const lowerUrl = url.toLowerCase().trim();
    const hasAllowedProtocol = allowedProtocols.some(
      (protocol) => lowerUrl.startsWith(`${protocol}:`)
    );
    if (!hasAllowedProtocol) {
      return "";
    }
    if (lowerUrl.startsWith("javascript:") || lowerUrl.startsWith("data:")) {
      return "";
    }
    return url;
  }
}
function sanitizeText(text2) {
  if (!text2) return "";
  const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;"
  };
  return text2.replace(/[&<>"'/]/g, (char) => htmlEscapes[char] || char);
}
function sanitizeObjectKeys(obj, dangerousKeys = ["__proto__", "constructor", "prototype"]) {
  const sanitized = __spreadValues({}, obj);
  dangerousKeys.forEach((key) => {
    delete sanitized[key];
  });
  return sanitized;
}
function sanitizeFileName(fileName) {
  if (!fileName) return "";
  return fileName.replace(/\.\./g, "").replace(/[\/\\]/g, "_").replace(/[<>:"|?*]/g, "").trim();
}
function sanitizeEmail(email) {
  if (!email) return null;
  const trimmed = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return null;
  }
  return trimmed;
}
function DefaultErrorFallback({ error, resetError }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex min-h-screen flex-col items-center justify-center gap-4 p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      MaterialSymbol,
      {
        name: "error_outline",
        size: 48,
        weight: 300,
        className: "text-semantic-text-rag-danger-default"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-2xl font-semibold", children: "Something went wrong" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-semantic-text-subdued max-w-md", children: "An unexpected error occurred. Please try refreshing the page or contact support if the problem persists." })
    ] }),
    process.env.NODE_ENV === "development" && error && /* @__PURE__ */ jsxRuntime.jsxs("details", { className: "mt-4 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntime.jsx("summary", { className: "cursor-pointer text-sm text-semantic-text-subdued", children: "Error details (development only)" }),
      /* @__PURE__ */ jsxRuntime.jsxs("pre", { className: "mt-2 overflow-auto rounded-md bg-semantic-surface-subdued p-4 text-xs", children: [
        error.message,
        "\n\n",
        error.stack
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(Button, { onClick: resetError, variant: "default", className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(MaterialSymbol, { name: "refresh", size: 20, weight: 300 }),
      "Try again"
    ] })
  ] }) });
}
var ErrorBoundary = class extends React24__namespace.Component {
  constructor(props) {
    super(props);
    this.resetError = () => {
      this.setState({
        hasError: false,
        error: null
      });
    };
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    ErrorLogger.log(error, {
      component: "ErrorBoundary",
      action: "componentDidCatch",
      metadata: {
        componentStack: errorInfo.componentStack,
        errorBoundary: true
      }
    });
  }
  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return /* @__PURE__ */ jsxRuntime.jsx(
        FallbackComponent,
        {
          error: this.state.error,
          resetError: this.resetError
        }
      );
    }
    return this.props.children;
  }
};

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogFooter = AlertDialogFooter;
exports.AlertDialogHeader = AlertDialogHeader;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTrigger = AlertDialogTrigger;
exports.AlertTitle = AlertTitle;
exports.AppError = AppError;
exports.AspectRatio = AspectRatio;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.ButtonGroupSeparator = ButtonGroupSeparator;
exports.ButtonGroupText = ButtonGroupText;
exports.Calendar = Calendar;
exports.CalendarDayButton = CalendarDayButton;
exports.Card = Card;
exports.CardAction = CardAction;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Carousel = Carousel;
exports.CarouselContent = CarouselContent;
exports.CarouselItem = CarouselItem;
exports.CarouselNext = CarouselNext;
exports.CarouselPrevious = CarouselPrevious;
exports.Checkbox = Checkbox;
exports.CheckboxCard = CheckboxCard;
exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent2;
exports.CollapsibleTrigger = CollapsibleTrigger2;
exports.Combobox = Combobox;
exports.Command = Command;
exports.CommandDialog = CommandDialog;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.CommandList = CommandList;
exports.CommandSeparator = CommandSeparator;
exports.CommandShortcut = CommandShortcut;
exports.ContextMenu = ContextMenu;
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
exports.ContextMenuContent = ContextMenuContent;
exports.ContextMenuItem = ContextMenuItem;
exports.ContextMenuLabel = ContextMenuLabel;
exports.ContextMenuRadioGroup = ContextMenuRadioGroup;
exports.ContextMenuRadioItem = ContextMenuRadioItem;
exports.ContextMenuSeparator = ContextMenuSeparator;
exports.ContextMenuShortcut = ContextMenuShortcut;
exports.ContextMenuSub = ContextMenuSub;
exports.ContextMenuSubContent = ContextMenuSubContent;
exports.ContextMenuSubTrigger = ContextMenuSubTrigger;
exports.ContextMenuTrigger = ContextMenuTrigger;
exports.DataTable = DataTable;
exports.DatePicker = DatePicker;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.Drawer = Drawer;
exports.DrawerClose = DrawerClose;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerOverlay = DrawerOverlay;
exports.DrawerPortal = DrawerPortal;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Empty = Empty;
exports.ErrorBoundary = ErrorBoundary;
exports.ErrorLogger = ErrorLogger;
exports.FidelityProvider = FidelityProvider;
exports.FidelityToggle = FidelityToggle;
exports.Field = Field;
exports.FieldContent = FieldContent;
exports.FieldDescription = FieldDescription;
exports.FieldError = FieldError;
exports.FieldGroup = FieldGroup;
exports.FieldLabel = FieldLabel;
exports.FieldLegend = FieldLegend;
exports.FieldSeparator = FieldSeparator;
exports.FieldSet = FieldSet;
exports.FieldTitle = FieldTitle;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.HoverCard = HoverCard;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardTrigger = HoverCardTrigger;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.InputOTP = InputOTP;
exports.InputOTPGroup = InputOTPGroup;
exports.InputOTPSeparator = InputOTPSeparator;
exports.InputOTPSlot = InputOTPSlot;
exports.Item = Item2;
exports.Kbd = Kbd;
exports.KbdGroup = KbdGroup;
exports.Label = Label;
exports.MaterialSymbol = MaterialSymbol;
exports.MaterialSymbolsProvider = MaterialSymbolsProvider;
exports.Menubar = Menubar;
exports.MenubarCheckboxItem = MenubarCheckboxItem;
exports.MenubarContent = MenubarContent;
exports.MenubarItem = MenubarItem;
exports.MenubarLabel = MenubarLabel;
exports.MenubarMenu = MenubarMenu;
exports.MenubarRadioGroup = MenubarRadioGroup;
exports.MenubarRadioItem = MenubarRadioItem;
exports.MenubarSeparator = MenubarSeparator;
exports.MenubarShortcut = MenubarShortcut;
exports.MenubarSub = MenubarSub;
exports.MenubarSubContent = MenubarSubContent;
exports.MenubarSubTrigger = MenubarSubTrigger;
exports.MenubarTrigger = MenubarTrigger;
exports.NativeSelect = NativeSelect;
exports.NavigationMenu = NavigationMenu;
exports.NavigationMenuContent = NavigationMenuContent;
exports.NavigationMenuItem = NavigationMenuItem;
exports.NavigationMenuLink = NavigationMenuLink;
exports.NavigationMenuList = NavigationMenuList;
exports.NavigationMenuTrigger = NavigationMenuTrigger;
exports.NetworkError = NetworkError;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup;
exports.RadioGroupCardItem = RadioGroupCardItem;
exports.RadioGroupItem = RadioGroupItem;
exports.ResizableHandle = ResizableHandle;
exports.ResizablePanel = ResizablePanel;
exports.ResizablePanelGroup = ResizablePanelGroup;
exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Sidebar = Sidebar;
exports.SidebarContent = SidebarContent;
exports.SidebarFooter = SidebarFooter;
exports.SidebarGroup = SidebarGroup;
exports.SidebarGroupAction = SidebarGroupAction;
exports.SidebarGroupContent = SidebarGroupContent;
exports.SidebarGroupLabel = SidebarGroupLabel;
exports.SidebarHeader = SidebarHeader;
exports.SidebarInput = SidebarInput;
exports.SidebarInset = SidebarInset;
exports.SidebarMenu = SidebarMenu;
exports.SidebarMenuAction = SidebarMenuAction;
exports.SidebarMenuBadge = SidebarMenuBadge;
exports.SidebarMenuButton = SidebarMenuButton;
exports.SidebarMenuItem = SidebarMenuItem;
exports.SidebarMenuSkeleton = SidebarMenuSkeleton;
exports.SidebarMenuSub = SidebarMenuSub;
exports.SidebarMenuSubButton = SidebarMenuSubButton;
exports.SidebarMenuSubItem = SidebarMenuSubItem;
exports.SidebarProvider = SidebarProvider;
exports.SidebarRail = SidebarRail;
exports.SidebarSeparator = SidebarSeparator;
exports.SidebarTrigger = SidebarTrigger;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.SwitchCard = SwitchCard;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Textarea = Textarea;
exports.ThemeToggle = ThemeToggle;
exports.Toaster = Toaster;
exports.Toggle = Toggle;
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipTrigger = TooltipTrigger;
exports.TypographyBlockquote = TypographyBlockquote;
exports.TypographyCode = TypographyCode;
exports.TypographyH1 = TypographyH1;
exports.TypographyH2 = TypographyH2;
exports.TypographyH3 = TypographyH3;
exports.TypographyH4 = TypographyH4;
exports.TypographyP = TypographyP;
exports.ValidationError = ValidationError;
exports.avatarVariants = avatarVariants;
exports.buttonVariants = buttonVariants;
exports.checkboxSchema = checkboxSchema;
exports.cn = cn;
exports.commonSchemas = commonSchemas;
exports.dateSchema = dateSchema;
exports.emailSchema = emailSchema;
exports.fileSchema = fileSchema;
exports.fileSizeSchema = fileSizeSchema;
exports.fileTypeSchema = fileTypeSchema;
exports.formatErrorMessage = formatErrorMessage;
exports.handleAsyncError = handleAsyncError;
exports.integerSchema = integerSchema;
exports.isRetryableError = isRetryableError;
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
exports.numberSchema = numberSchema;
exports.optionalStringSchema = optionalStringSchema;
exports.passwordSchema = passwordSchema;
exports.phoneSchema = phoneSchema;
exports.positiveNumberSchema = positiveNumberSchema;
exports.requiredStringSchema = requiredStringSchema;
exports.retryAsync = retryAsync;
exports.safeAsync = safeAsync;
exports.sanitizeEmail = sanitizeEmail;
exports.sanitizeFileName = sanitizeFileName;
exports.sanitizeHtml = sanitizeHtml;
exports.sanitizeObjectKeys = sanitizeObjectKeys;
exports.sanitizeText = sanitizeText;
exports.sanitizeUrl = sanitizeUrl;
exports.selectSchema = selectSchema;
exports.strongPasswordSchema = strongPasswordSchema;
exports.textareaSchema = textareaSchema;
exports.urlSchema = urlSchema;
exports.useFidelity = useFidelity;
exports.useFormField = useFormField;
exports.useSidebar = useSidebar;
exports.usernameSchema = usernameSchema;
exports.withTimeout = withTimeout;
