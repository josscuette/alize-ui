import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
export { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { OTPInput } from 'input-otp';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Drawer as Drawer$1 } from 'vaul';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Slot } from '@radix-ui/react-slot';
import * as ReactHookForm from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import { DayPicker, DayButton } from 'react-day-picker';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import { ToasterProps as ToasterProps$1 } from 'sonner';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as ResizablePrimitive from 'react-resizable-panels';
import { ClassValue } from 'clsx';
import { z } from 'zod';

/**
 * Button component props interface
 *
 * @example
 * ```tsx
 * <Button variant="default" size="md">Click me</Button>
 * <Button variant="outline" size="icon" aria-label="Close">
 *   <MaterialSymbol name="close" />
 * </Button>
 * ```
 */
interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    /**
     * Render as a different element using Radix UI Slot
     * @default false
     */
    asChild?: boolean;
}
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "tertiary" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | "icon" | "icon-sm" | "icon-lg" | "icon-xs" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * Button component - A versatile button with multiple variants and sizes
 *
 * Supports all standard button variants (default, destructive, outline, secondary, ghost, link, tertiary)
 * and multiple sizes including icon-only variants.
 *
 * @param props - Button props including variant, size, and standard HTML button attributes
 * @returns A button element with appropriate styling
 *
 * @example
 * ```tsx
 * // Default button
 * <Button>Click me</Button>
 *
 * // Destructive button
 * <Button variant="destructive">Delete</Button>
 *
 * // Icon-only button (requires aria-label for accessibility)
 * <Button size="icon" aria-label="Close dialog">
 *   <MaterialSymbol name="close" />
 * </Button>
 * ```
 */
declare function Button({ className, variant, size, asChild, children, ...props }: ButtonProps): React.ReactElement;

/**
 * Input component props interface
 * Extends native HTML input element props
 *
 * @example
 * ```tsx
 * <Input type="text" placeholder="Enter your name" />
 * <Input type="email" aria-invalid={hasError} />
 * ```
 */
interface InputProps extends React.ComponentProps<"input"> {
}
/**
 * Input component - A styled input field with validation states
 *
 * Supports all standard HTML input types and includes built-in support for:
 * - Disabled states
 * - Invalid/error states (via aria-invalid)
 * - Focus states
 * - File input styling
 *
 * @param props - Input props including type and standard HTML input attributes
 * @returns An input element with appropriate styling
 *
 * @example
 * ```tsx
 * // Basic input
 * <Input type="text" placeholder="Enter text" />
 *
 * // Input with error state
 * <Input
 *   type="email"
 *   aria-invalid={hasError}
 *   aria-describedby={hasError ? "email-error" : undefined}
 * />
 * ```
 */
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;

/**
 * Label component props interface
 * Extends Radix UI Label primitive props
 */
interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
}
/**
 * Label component - A form label
 *
 * Provides an accessible label for form inputs.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Label props including htmlFor and standard Radix UI Label attributes
 * @returns A label element
 *
 * @example
 * ```tsx
 * <Label htmlFor="email">Email</Label>
 * <Input id="email" />
 * ```
 */
declare function Label({ className, ...props }: LabelProps): React.ReactElement;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "warning" | "success" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * Badge component props interface
 * Extends native span element props and adds variant and asChild props
 */
interface BadgeProps extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
    /**
     * Render as a different element using Radix UI Slot
     * @default false
     */
    asChild?: boolean;
}
/**
 * Badge component - A small status indicator or label
 *
 * Displays a badge with multiple variants for different states:
 * - `default` / `secondary`: Neutral badge for general use
 * - `destructive`: Red/danger badge for errors or critical states
 * - `warning`: Orange/amber badge for warnings or caution states
 * - `success`: Green badge for success or positive states
 * - `outline`: Outlined badge without background
 *
 * Can be used as a link or other element via the asChild prop.
 *
 * @param props - Badge props including variant, asChild, and standard HTML span attributes
 * @returns A badge element
 *
 * @example
 * ```tsx
 * // RAG status badges
 * <Badge variant="success">Complete</Badge>
 * <Badge variant="warning">Pending</Badge>
 * <Badge variant="destructive">Error</Badge>
 *
 * // Other variants
 * <Badge variant="default">New</Badge>
 * <Badge variant="outline">Draft</Badge>
 *
 * // As a link
 * <Badge asChild>
 *   <a href="/link">Link Badge</a>
 * </Badge>
 * ```
 */
declare function Badge({ className, variant, asChild, ...props }: BadgeProps): React.ReactElement;

declare const avatarVariants: (props?: ({
    size?: "sm" | "lg" | "xs" | "md" | null | undefined;
    shape?: "square" | "rounded" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * Avatar component props interface
 * Extends Radix UI Avatar primitive props and adds size/shape variants
 */
interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarVariants> {
}
/**
 * AvatarImage component props interface
 * Extends Radix UI AvatarImage primitive props
 */
interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {
}
/**
 * AvatarFallback component props interface
 * Extends Radix UI AvatarFallback primitive props and adds size prop
 */
interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {
    size?: "xs" | "sm" | "md" | "lg";
    delayMs?: number;
}
/**
 * Avatar component - A user avatar with image and fallback
 *
 * Displays a user's avatar image with a fallback when the image fails to load.
 * Supports multiple sizes and shapes (square/rounded).
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Avatar props including size, shape, and standard Radix UI Avatar attributes
 * @returns An avatar element
 *
 * @example
 * ```tsx
 * <Avatar size="md" shape="rounded">
 *   <AvatarImage src="/user.jpg" alt="User" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 * ```
 */
declare function Avatar({ className, size, shape, ...props }: AvatarProps): React.ReactElement;
/**
 * AvatarImage component - The image displayed in an Avatar
 *
 * @param props - AvatarImage props including src, alt, and standard Radix UI AvatarImage attributes
 * @returns An avatar image element
 */
declare function AvatarImage({ className, ...props }: AvatarImageProps): React.ReactElement;
/**
 * AvatarFallback component - The fallback content displayed when AvatarImage fails to load
 *
 * @param props - AvatarFallback props including size and standard Radix UI AvatarFallback attributes
 * @returns An avatar fallback element
 */
declare function AvatarFallback({ className, size, delayMs, ...props }: AvatarFallbackProps): React.ReactElement;

/**
 * Skeleton component props interface
 * Extends native div element props
 */
interface SkeletonProps extends React.ComponentProps<"div"> {
}
/**
 * Skeleton component - A loading placeholder
 *
 * Displays an animated placeholder while content is loading.
 *
 * @param props - Skeleton props including standard HTML div attributes
 * @returns A skeleton element
 *
 * @example
 * ```tsx
 * <Skeleton className="h-4 w-32" />
 * <Skeleton className="h-8 w-full" />
 * ```
 */
declare function Skeleton({ className, ...props }: SkeletonProps): React.ReactElement;

/**
 * Spinner component props interface
 * Extends native SVG element props
 */
interface SpinnerProps extends React.ComponentProps<"svg"> {
}
/**
 * Spinner component - A loading spinner
 *
 * Displays an animated spinner to indicate loading state.
 *
 * @param props - Spinner props including standard HTML SVG attributes
 * @returns A spinner element
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner className="size-8" />
 * ```
 */
declare function Spinner({ className, ...props }: SpinnerProps): React.ReactElement;

/**
 * Separator component props interface
 * Extends Radix UI Separator primitive props
 */
interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
}
/**
 * Separator component - A visual separator line
 *
 * Displays a horizontal or vertical line to separate content.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Separator props including orientation, decorative, and standard Radix UI Separator attributes
 * @returns A separator element
 *
 * @example
 * ```tsx
 * <Separator orientation="horizontal" />
 * <Separator orientation="vertical" decorative={false} />
 * ```
 */
declare function Separator({ className, orientation, decorative, ...props }: SeparatorProps): React.ReactElement;

/**
 * Kbd component props interface
 * Extends native kbd element props
 */
interface KbdProps extends React.ComponentProps<"kbd"> {
}
/**
 * KbdGroup component props interface
 * Extends native div element props
 */
interface KbdGroupProps extends React.ComponentProps<"div"> {
}
/**
 * Kbd component - A keyboard key indicator
 *
 * Displays a keyboard key or key combination for documentation or UI hints.
 *
 * @param props - Kbd props including standard HTML kbd attributes
 * @returns A kbd element
 *
 * @example
 * ```tsx
 * <Kbd>Ctrl</Kbd>
 * <KbdGroup>
 *   <Kbd>Ctrl</Kbd>
 *   <Kbd>K</Kbd>
 * </KbdGroup>
 * ```
 */
declare function Kbd({ className, ...props }: KbdProps): React.ReactElement;
/**
 * KbdGroup component - A group of keyboard keys
 * @param props - KbdGroup props
 * @returns A KbdGroup component
 */
declare function KbdGroup({ className, ...props }: KbdGroupProps): React.ReactElement;

/**
 * Toggle component props interface
 * Extends Radix UI Toggle primitive props and adds variant and size props
 */
interface ToggleProps extends React.ComponentProps<typeof TogglePrimitive.Root>, VariantProps<typeof toggleVariants> {
}
declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * Toggle component - A toggle button
 *
 * Provides a toggle button that can be pressed on or off.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Toggle props including variant, size, pressed, onPressedChange, and standard Radix UI Toggle attributes
 * @returns A toggle button element
 *
 * @example
 * ```tsx
 * <Toggle variant="default" size="default" />
 * <Toggle variant="outline" pressed={isPressed} onPressedChange={setIsPressed} />
 * ```
 */
declare function Toggle({ className, variant, size, ...props }: ToggleProps): React.ReactElement;

/**
 * ToggleGroup component props interface
 * Extends Radix UI ToggleGroup primitive props and adds variant, size, and spacing props
 */
type ToggleGroupProps = React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants> & {
    spacing?: number;
    children?: React.ReactNode;
};
/**
 * ToggleGroupItem component props interface
 * Extends Radix UI ToggleGroupItem primitive props and adds variant and size props
 */
interface ToggleGroupItemProps extends React.ComponentProps<typeof ToggleGroupPrimitive.Item>, VariantProps<typeof toggleVariants> {
}
/**
 * ToggleGroup component - A group of toggle buttons
 *
 * Provides a group of toggle buttons that can be used together.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - ToggleGroup props including variant, size, spacing, value, onValueChange, and standard Radix UI ToggleGroup attributes
 * @returns A ToggleGroup component
 *
 * @example
 * ```tsx
 * <ToggleGroup variant="default" size="default" spacing={2}>
 *   <ToggleGroupItem value="a">A</ToggleGroupItem>
 *   <ToggleGroupItem value="b">B</ToggleGroupItem>
 * </ToggleGroup>
 * ```
 */
declare function ToggleGroup({ className, variant, size, spacing, children, ...props }: ToggleGroupProps): React.ReactElement;
/**
 * ToggleGroupItem component - An individual toggle button in a ToggleGroup
 * @param props - ToggleGroupItem props including variant, size, and value
 * @returns A ToggleGroupItem component
 */
declare function ToggleGroupItem({ className, children, variant, size, ...props }: ToggleGroupItemProps): React.ReactElement;

/**
 * Tooltip component props interface
 * Extends Radix UI Tooltip primitive props
 */
interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {
}
/**
 * TooltipTrigger component props interface
 * Extends Radix UI TooltipTrigger primitive props
 */
interface TooltipTriggerProps extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {
}
/**
 * TooltipContent component props interface
 * Extends Radix UI TooltipContent primitive props
 */
interface TooltipContentProps extends React.ComponentProps<typeof TooltipPrimitive.Content> {
    sideOffset?: number;
}
/**
 * Tooltip component - A tooltip wrapper that includes TooltipProvider
 *
 * @param props - Tooltip props
 * @returns A Tooltip component
 */
declare function Tooltip({ ...props }: TooltipProps): React.ReactElement;
/**
 * TooltipTrigger component - The element that triggers the tooltip
 * @param props - TooltipTrigger props
 * @returns A TooltipTrigger component
 */
declare function TooltipTrigger({ ...props }: TooltipTriggerProps): React.ReactElement;
/**
 * TooltipContent component - The content displayed in the tooltip
 * @param props - TooltipContent props including sideOffset
 * @returns A TooltipContent component
 */
declare function TooltipContent({ className, sideOffset, children, ...props }: TooltipContentProps): React.ReactElement;

/**
 * TypographyH1 component props interface
 * Extends native h1 element props
 */
interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
}
/**
 * TypographyH2 component props interface
 * Extends native h2 element props
 */
interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadingElement> {
}
/**
 * TypographyH3 component props interface
 * Extends native h3 element props
 */
interface TypographyH3Props extends React.HTMLAttributes<HTMLHeadingElement> {
}
/**
 * TypographyH4 component props interface
 * Extends native h4 element props
 */
interface TypographyH4Props extends React.HTMLAttributes<HTMLHeadingElement> {
}
/**
 * TypographyP component props interface
 * Extends native p element props
 */
interface TypographyPProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
/**
 * TypographyBlockquote component props interface
 * Extends native blockquote element props
 */
interface TypographyBlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
}
/**
 * TypographyCode component props interface
 * Extends native code element props
 */
interface TypographyCodeProps extends React.HTMLAttributes<HTMLElement> {
}
/**
 * TypographyH1 component - A heading level 1
 *
 * Provides a styled h1 heading with consistent typography.
 *
 * @param props - TypographyH1 props including standard HTML h1 attributes
 * @returns A TypographyH1 component
 *
 * @example
 * ```tsx
 * <TypographyH1>Main Title</TypographyH1>
 * ```
 */
declare const TypographyH1: React.ForwardRefExoticComponent<TypographyH1Props & React.RefAttributes<HTMLHeadingElement>>;
/**
 * TypographyH2 component - A heading level 2
 * @param props - TypographyH2 props
 * @returns A TypographyH2 component
 */
declare const TypographyH2: React.ForwardRefExoticComponent<TypographyH2Props & React.RefAttributes<HTMLHeadingElement>>;
/**
 * TypographyH3 component - A heading level 3
 * @param props - TypographyH3 props
 * @returns A TypographyH3 component
 */
declare const TypographyH3: React.ForwardRefExoticComponent<TypographyH3Props & React.RefAttributes<HTMLHeadingElement>>;
/**
 * TypographyH4 component - A heading level 4
 * @param props - TypographyH4 props
 * @returns A TypographyH4 component
 */
declare const TypographyH4: React.ForwardRefExoticComponent<TypographyH4Props & React.RefAttributes<HTMLHeadingElement>>;
/**
 * TypographyP component - A paragraph
 * @param props - TypographyP props
 * @returns A TypographyP component
 */
declare const TypographyP: React.ForwardRefExoticComponent<TypographyPProps & React.RefAttributes<HTMLParagraphElement>>;
/**
 * TypographyBlockquote component - A blockquote
 * @param props - TypographyBlockquote props
 * @returns A TypographyBlockquote component
 */
declare const TypographyBlockquote: React.ForwardRefExoticComponent<TypographyBlockquoteProps & React.RefAttributes<HTMLQuoteElement>>;
/**
 * TypographyCode component - Inline code
 * @param props - TypographyCode props
 * @returns A TypographyCode component
 */
declare const TypographyCode: React.ForwardRefExoticComponent<TypographyCodeProps & React.RefAttributes<HTMLElement>>;

/**
 * AspectRatio component props interface
 * Extends Radix UI AspectRatio primitive props
 */
interface AspectRatioProps extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {
}
/**
 * AspectRatio component - Maintains a specific aspect ratio for its content
 *
 * Provides a container that maintains a specific aspect ratio for its content.
 * Built on Radix UI primitives.
 *
 * @param props - AspectRatio props including ratio and standard Radix UI AspectRatio attributes
 * @returns An AspectRatio component
 *
 * @example
 * ```tsx
 * <AspectRatio ratio={16 / 9}>
 *   <img src="/image.jpg" alt="Image" />
 * </AspectRatio>
 * ```
 */
declare function AspectRatio({ ...props }: AspectRatioProps): React.ReactElement;

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
}
declare function Empty({ className, title, description, icon, children, ...props }: EmptyProps): React.ReactElement;

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
}
declare function Item({ className, selected, ...props }: ItemProps): React.ReactElement;

/**
 * Checkbox component props interface
 * Extends Radix UI Checkbox primitive props
 */
interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
}
/**
 * Checkbox component - A styled checkbox with validation states
 *
 * Supports checked/unchecked states, disabled state, and invalid state (via aria-invalid).
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Checkbox props including standard Radix UI Checkbox attributes
 * @returns A checkbox element with appropriate styling
 *
 * @example
 * ```tsx
 * // Basic checkbox
 * <Checkbox />
 *
 * // Checkbox with error state
 * <Checkbox aria-invalid={hasError} />
 *
 * // Controlled checkbox
 * <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
 * ```
 */
declare function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>): React.ReactElement;
/**
 * CheckboxCard component props interface
 * Extends Radix UI Checkbox primitive props with label and description
 */
interface CheckboxCardProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
    /** Label text displayed next to the checkbox */
    label: string;
    /** Optional description text displayed below the label */
    description?: string;
}
/**
 * CheckboxCard component - A checkbox with integrated label and description
 *
 * Provides a card-style layout for checkboxes with labels and optional descriptions.
 * Automatically handles focus states and accessibility.
 *
 * @param props - CheckboxCard props including label, description, and standard Checkbox attributes
 * @returns A label element containing a checkbox with text content
 *
 * @example
 * ```tsx
 * <CheckboxCard
 *   label="Accept terms and conditions"
 *   description="By checking this box, you agree to our terms"
 * />
 * ```
 */
declare function CheckboxCard({ className, label, description, id, ...props }: CheckboxCardProps): React.ReactElement;

/**
 * Switch component props interface
 * Extends Radix UI Switch primitive props
 */
interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
}
/**
 * SwitchCard component props interface
 * Extends Radix UI Switch primitive props and adds label/description
 */
interface SwitchCardProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
    label: string;
    description?: string;
}
/**
 * Switch component - A toggle switch control
 *
 * Provides a binary on/off control with smooth animations.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Switch props including checked, onCheckedChange, and standard Radix UI Switch attributes
 * @returns A switch element
 *
 * @example
 * ```tsx
 * <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
 * <Switch disabled aria-label="Toggle feature" />
 * ```
 */
declare function Switch({ className, ...props }: SwitchProps): React.ReactElement;
/**
 * SwitchCard component - A switch styled as a card with a label and optional description
 *
 * Provides an enhanced visual and interactive experience for switches,
 * suitable for settings lists.
 *
 * @param props - SwitchCard props including label, description, and standard Radix UI Switch attributes
 * @returns A label element containing a switch and its associated text
 *
 * @example
 * ```tsx
 * <SwitchCard label="Enable notifications" description="Receive alerts for new messages." />
 * ```
 */
declare function SwitchCard({ className, label, description, id, ...props }: SwitchCardProps): React.ReactElement;

/**
 * RadioGroup component - A group of radio buttons
 *
 * Manages a group of radio buttons where only one can be selected at a time.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - RadioGroup props including value, onValueChange, and standard Radix UI RadioGroup attributes
 * @returns A radio group element
 *
 * @example
 * ```tsx
 * <RadioGroup value={selected} onValueChange={setSelected}>
 *   <RadioGroupItem value="option1" id="option1" />
 *   <RadioGroupItem value="option2" id="option2" />
 * </RadioGroup>
 * ```
 */
declare function RadioGroup({ className, ...props }: RadioGroupProps): React.ReactElement;
/**
 * RadioGroupItem component - An individual radio button within a RadioGroup
 *
 * @param props - RadioGroupItem props including value and standard Radix UI RadioGroupItem attributes
 * @returns A radio button element
 */
declare function RadioGroupItem({ className, ...props }: RadioGroupItemProps): React.ReactElement;
/**
 * RadioGroup component props interface
 * Extends Radix UI RadioGroup primitive props
 */
interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
}
/**
 * RadioGroupItem component props interface
 * Extends Radix UI RadioGroupItem primitive props
 */
interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
}
/**
 * RadioGroupCardItem component props interface
 * Extends Radix UI RadioGroupItem primitive props and adds label/description
 */
interface RadioGroupCardItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
    label: string;
    description?: string;
}
declare function RadioGroupCardItem({ className, label, description, id, ...props }: RadioGroupCardItemProps): React.ReactElement;

/**
 * Select component props interface
 * Extends Radix UI Select primitive props
 */
interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
}
/**
 * SelectContent component props interface
 * Extends Radix UI SelectContent primitive props
 */
interface SelectContentProps extends React.ComponentProps<typeof SelectPrimitive.Content> {
}
/**
 * SelectItem component props interface
 * Extends Radix UI SelectItem primitive props
 */
interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {
}
/**
 * SelectSeparator component props interface
 * Extends Radix UI SelectSeparator primitive props
 */
interface SelectSeparatorProps extends React.ComponentProps<typeof SelectPrimitive.Separator> {
}
/**
 * Select component - A custom select input built on Radix UI
 *
 * Provides an accessible and customizable dropdown for selecting options.
 *
 * @param props - Select props
 * @returns A Select component
 *
 * @example
 * ```tsx
 * <Select>
 *   <SelectTrigger>
 *     <SelectValue placeholder="Select a fruit" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectGroup>
 *       <SelectLabel>Fruits</SelectLabel>
 *       <SelectItem value="apple">Apple</SelectItem>
 *       <SelectItem value="banana">Banana</SelectItem>
 *     </SelectGroup>
 *   </SelectContent>
 * </Select>
 * ```
 */
declare const Select: React.NamedExoticComponent<SelectProps>;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): React.ReactElement;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): React.ReactElement;
declare function SelectTrigger({ className, size, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
}): React.ReactElement;
/**
 * SelectContent component - The popover content containing select items
 * @param props - SelectContent props
 * @returns A SelectContent component
 */
declare function SelectContent({ className, children, position, align, ...props }: SelectContentProps): React.ReactElement;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): React.ReactElement;
/**
 * SelectItem component - An individual selectable item within the select content
 * @param props - SelectItem props
 * @returns A SelectItem component
 */
declare function SelectItem({ className, children, ...props }: SelectItemProps): React.ReactElement;
/**
 * SelectSeparator component - A visual separator between select groups or items
 * @param props - SelectSeparator props
 * @returns A SelectSeparator component
 */
declare function SelectSeparator({ className, ...props }: SelectSeparatorProps): React.ReactElement;

/**
 * Textarea component props interface
 * Extends native HTML textarea element props
 */
interface TextareaProps extends React.ComponentProps<"textarea"> {
}
/**
 * Textarea component - A styled textarea field with validation states
 *
 * Supports all standard HTML textarea attributes and includes built-in support for:
 * - Disabled states
 * - Invalid/error states (via aria-invalid)
 * - Focus states
 * - Auto-sizing with field-sizing-content
 *
 * @param props - Textarea props including rows, cols, and standard HTML textarea attributes
 * @returns A textarea element with appropriate styling
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Enter your message" rows={5} />
 * <Textarea aria-invalid={hasError} aria-describedby={hasError ? "error-id" : undefined} />
 * ```
 */
declare function Textarea({ className, ...props }: TextareaProps): React.ReactElement;

/**
 * Slider component props interface
 * Extends Radix UI Slider primitive props
 */
interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
}
/**
 * Slider component - A range input slider
 *
 * Provides a draggable slider for selecting values within a range.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Slider props including value, defaultValue, min, max, and standard Radix UI Slider attributes
 * @returns A slider element
 *
 * @example
 * ```tsx
 * <Slider defaultValue={[50]} min={0} max={100} />
 * <Slider value={value} onValueChange={setValue} />
 * ```
 */
declare function Slider({ className, defaultValue, value, min, max, ...props }: SliderProps): React.ReactElement;

/**
 * Progress component - A progress bar indicator
 *
 * Displays a visual progress indicator with customizable value.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Progress props including value and standard Radix UI Progress attributes
 * @returns A progress bar element
 *
 * @example
 * ```tsx
 * <Progress value={50} />
 * <Progress value={75} className="h-4" />
 * ```
 */
declare function Progress({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>): React.ReactElement;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * Alert component props interface
 * Extends native div element props and adds variant prop
 */
interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {
}
/**
 * AlertTitle component props interface
 * Extends native div element props
 */
interface AlertTitleProps extends React.ComponentProps<"div"> {
}
/**
 * AlertDescription component props interface
 * Extends native div element props
 */
interface AlertDescriptionProps extends React.ComponentProps<"div"> {
}
/**
 * Alert component - A contextual alert message
 *
 * Displays an alert message with optional title and description.
 * Supports multiple variants (default, destructive).
 *
 * @param props - Alert props including variant and standard HTML div attributes
 * @returns An alert element
 *
 * @example
 * ```tsx
 * <Alert variant="default">
 *   <AlertTitle>Title</AlertTitle>
 *   <AlertDescription>Description</AlertDescription>
 * </Alert>
 * ```
 */
declare function Alert({ className, variant, ...props }: AlertProps): React.ReactElement;
/**
 * AlertTitle component - The title of the alert
 * @param props - AlertTitle props
 * @returns An AlertTitle component
 */
declare function AlertTitle({ className, ...props }: AlertTitleProps): React.ReactElement;
/**
 * AlertDescription component - The description text of the alert
 * @param props - AlertDescription props
 * @returns An AlertDescription component
 */
declare function AlertDescription({ className, ...props }: AlertDescriptionProps): React.ReactElement;

/**
 * Card component props interface
 * Extends native div element props
 */
interface CardProps extends React.ComponentProps<"div"> {
}
/**
 * CardHeader component props interface
 * Extends native div element props
 */
interface CardHeaderProps extends React.ComponentProps<"div"> {
}
/**
 * CardTitle component props interface
 * Extends native div element props
 */
interface CardTitleProps extends React.ComponentProps<"div"> {
}
/**
 * CardDescription component props interface
 * Extends native div element props
 */
interface CardDescriptionProps extends React.ComponentProps<"div"> {
}
/**
 * CardAction component props interface
 * Extends native div element props
 */
interface CardActionProps extends React.ComponentProps<"div"> {
}
/**
 * CardContent component props interface
 * Extends native div element props
 */
interface CardContentProps extends React.ComponentProps<"div"> {
}
/**
 * CardFooter component props interface
 * Extends native div element props
 */
interface CardFooterProps extends React.ComponentProps<"div"> {
}
/**
 * Card component - A container for content with header, body, and footer sections
 *
 * Provides a structured layout for displaying content in cards.
 * Use CardHeader, CardTitle, CardDescription, CardContent, and CardFooter as children.
 *
 * @param props - Card props including standard HTML div attributes
 * @returns A card container element
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content</CardContent>
 *   <CardFooter>Footer</CardFooter>
 * </Card>
 * ```
 */
declare function Card({ className, ...props }: CardProps): React.ReactElement;
/**
 * CardHeader component - The header section of a Card
 *
 * @param props - CardHeader props including standard HTML div attributes
 * @returns A card header element
 */
declare function CardHeader({ className, ...props }: CardHeaderProps): React.ReactElement;
/**
 * CardTitle component - The title within a CardHeader
 *
 * @param props - CardTitle props including standard HTML div attributes
 * @returns A card title element
 */
/**
 * CardTitle component - The title within a CardHeader
 *
 * @param props - CardTitle props including standard HTML div attributes
 * @returns A card title element
 */
declare function CardTitle({ className, ...props }: CardTitleProps): React.ReactElement;
/**
 * CardDescription component - The description within a CardHeader
 *
 * @param props - CardDescription props including standard HTML div attributes
 * @returns A card description element
 */
/**
 * CardDescription component - The description within a CardHeader
 *
 * @param props - CardDescription props including standard HTML div attributes
 * @returns A card description element
 */
declare function CardDescription({ className, ...props }: CardDescriptionProps): React.ReactElement;
/**
 * CardAction component - An action button area within a CardHeader
 *
 * @param props - CardAction props including standard HTML div attributes
 * @returns A card action element
 */
/**
 * CardAction component - An action button area within a CardHeader
 *
 * @param props - CardAction props including standard HTML div attributes
 * @returns A card action element
 */
declare function CardAction({ className, ...props }: CardActionProps): React.ReactElement;
/**
 * CardContent component - The main content section of a Card
 *
 * @param props - CardContent props including standard HTML div attributes
 * @returns A card content element
 */
/**
 * CardContent component - The main content section of a Card
 *
 * @param props - CardContent props including standard HTML div attributes
 * @returns A card content element
 */
declare function CardContent({ className, ...props }: CardContentProps): React.ReactElement;
/**
 * CardFooter component - The footer section of a Card
 *
 * @param props - CardFooter props including standard HTML div attributes
 * @returns A card footer element
 */
/**
 * CardFooter component - The footer section of a Card
 *
 * @param props - CardFooter props including standard HTML div attributes
 * @returns A card footer element
 */
declare function CardFooter({ className, ...props }: CardFooterProps): React.ReactElement;

/**
 * Tabs component props interface
 * Extends Radix UI Tabs primitive props
 */
interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
}
/**
 * TabsList component props interface
 * Extends Radix UI TabsList primitive props
 */
interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {
}
/**
 * TabsTrigger component props interface
 * Extends Radix UI TabsTrigger primitive props
 */
interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
}
/**
 * TabsContent component props interface
 * Extends Radix UI TabsContent primitive props
 */
interface TabsContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {
}
/**
 * Tabs component - A tabbed interface
 *
 * Provides a tabbed interface for organizing content into multiple panels.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Tabs props including value, onValueChange, and standard Radix UI Tabs attributes
 * @returns A tabs container element
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * ```
 */
declare function Tabs({ className, ...props }: TabsProps): React.ReactElement;
/**
 * TabsList component - The container for tab triggers
 * @param props - TabsList props
 * @returns A TabsList component
 */
declare function TabsList({ className, ...props }: TabsListProps): React.ReactElement;
/**
 * TabsTrigger component - An individual tab trigger button
 * @param props - TabsTrigger props
 * @returns A TabsTrigger component
 */
declare function TabsTrigger({ className, ...props }: TabsTriggerProps): React.ReactElement;
/**
 * TabsContent component - The content panel for a tab
 * @param props - TabsContent props
 * @returns A TabsContent component
 */
declare function TabsContent({ className, ...props }: TabsContentProps): React.ReactElement;

/**
 * Accordion component props interface
 * Extends Radix UI Accordion primitive props
 */
interface AccordionProps extends Omit<React.ComponentProps<typeof AccordionPrimitive.Root>, "type"> {
    type?: "single" | "multiple";
    collapsible?: boolean;
    children?: React.ReactNode;
}
/**
 * AccordionItem component props interface
 * Extends Radix UI AccordionItem primitive props
 */
interface AccordionItemProps extends React.ComponentProps<typeof AccordionPrimitive.Item> {
}
/**
 * AccordionTrigger component props interface
 * Extends Radix UI AccordionTrigger primitive props
 */
interface AccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
}
/**
 * AccordionContent component props interface
 * Extends Radix UI AccordionContent primitive props
 */
interface AccordionContentProps extends React.ComponentProps<typeof AccordionPrimitive.Content> {
}
/**
 * Accordion component - A collapsible content section
 *
 * Provides an accessible accordion for organizing content into collapsible sections.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Accordion props including type, defaultValue, and standard Radix UI Accordion attributes
 * @returns An Accordion component
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Section 1</AccordionTrigger>
 *     <AccordionContent>Content 1</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
declare function Accordion(props: AccordionProps): React.ReactElement;
/**
 * AccordionItem component - An individual accordion item
 * @param props - AccordionItem props including value
 * @returns An AccordionItem component
 */
declare function AccordionItem({ className, ...props }: AccordionItemProps): React.ReactElement;
/**
 * AccordionTrigger component - The clickable header that toggles the accordion item
 * @param props - AccordionTrigger props
 * @returns An AccordionTrigger component
 */
declare function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps): React.ReactElement;
/**
 * AccordionContent component - The collapsible content of the accordion item
 * @param props - AccordionContent props
 * @returns An AccordionContent component
 */
declare function AccordionContent({ className, children, ...props }: AccordionContentProps): React.ReactElement;

/**
 * Collapsible component props interface
 * Extends Radix UI Collapsible primitive props
 */
interface CollapsibleProps extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {
}
/**
 * CollapsibleTrigger component props interface
 * Extends Radix UI CollapsibleTrigger primitive props
 */
interface CollapsibleTriggerProps extends React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger> {
}
/**
 * CollapsibleContent component props interface
 * Extends Radix UI CollapsibleContent primitive props
 */
interface CollapsibleContentProps extends React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent> {
}
/**
 * Collapsible component - A collapsible content section
 *
 * Provides an accessible collapsible section that can be toggled open/closed.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Collapsible props including open, onOpenChange, and standard Radix UI Collapsible attributes
 * @returns A Collapsible component
 *
 * @example
 * ```tsx
 * <Collapsible>
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Content</CollapsibleContent>
 * </Collapsible>
 * ```
 */
declare function Collapsible({ ...props }: CollapsibleProps): React.ReactElement;
/**
 * CollapsibleTrigger component - The element that toggles the collapsible
 * @param props - CollapsibleTrigger props
 * @returns A CollapsibleTrigger component
 */
declare function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps): React.ReactElement;
/**
 * CollapsibleContent component - The collapsible content
 * @param props - CollapsibleContent props
 * @returns A CollapsibleContent component
 */
declare function CollapsibleContent({ ...props }: CollapsibleContentProps): React.ReactElement;

/**
 * Popover component props interface
 * Extends Radix UI Popover primitive props
 */
interface PopoverProps extends React.ComponentProps<typeof PopoverPrimitive.Root> {
}
/**
 * PopoverTrigger component props interface
 * Extends Radix UI PopoverTrigger primitive props
 */
interface PopoverTriggerProps extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {
}
/**
 * PopoverContent component props interface
 * Extends Radix UI PopoverContent primitive props
 */
interface PopoverContentProps extends React.ComponentProps<typeof PopoverPrimitive.Content> {
    align?: "start" | "center" | "end";
    sideOffset?: number;
}
/**
 * PopoverAnchor component props interface
 * Extends Radix UI PopoverAnchor primitive props
 */
interface PopoverAnchorProps extends React.ComponentProps<typeof PopoverPrimitive.Anchor> {
}
/**
 * Popover component - A popover for displaying content
 *
 * Provides an accessible popover for displaying additional content.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Popover props including open, onOpenChange, and standard Radix UI Popover attributes
 * @returns A Popover component
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger>Open</PopoverTrigger>
 *   <PopoverContent>Content</PopoverContent>
 * </Popover>
 * ```
 */
declare function Popover({ ...props }: PopoverProps): React.ReactElement;
/**
 * PopoverTrigger component - The element that opens the popover
 * @param props - PopoverTrigger props
 * @returns A PopoverTrigger component
 */
declare function PopoverTrigger({ ...props }: PopoverTriggerProps): React.ReactElement;
/**
 * PopoverContent component - The content container of the popover
 * @param props - PopoverContent props including align and sideOffset
 * @returns A PopoverContent component
 */
declare function PopoverContent({ className, align, sideOffset, ...props }: PopoverContentProps): React.ReactElement;
/**
 * PopoverAnchor component - The anchor element for the popover
 * @param props - PopoverAnchor props
 * @returns A PopoverAnchor component
 */
declare function PopoverAnchor({ ...props }: PopoverAnchorProps): React.ReactElement;

/**
 * HoverCard component props interface
 * Extends Radix UI HoverCard primitive props
 */
interface HoverCardProps extends React.ComponentProps<typeof HoverCardPrimitive.Root> {
}
/**
 * HoverCardTrigger component props interface
 * Extends Radix UI HoverCardTrigger primitive props
 */
interface HoverCardTriggerProps extends React.ComponentProps<typeof HoverCardPrimitive.Trigger> {
}
/**
 * HoverCardContent component props interface
 * Extends Radix UI HoverCardContent primitive props
 */
interface HoverCardContentProps extends React.ComponentProps<typeof HoverCardPrimitive.Content> {
    align?: "start" | "center" | "end";
    sideOffset?: number;
}
/**
 * HoverCard component - A hover card for displaying additional content
 *
 * Provides an accessible hover card that appears when hovering over a trigger element.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - HoverCard props including openDelay, closeDelay, and standard Radix UI HoverCard attributes
 * @returns A HoverCard component
 *
 * @example
 * ```tsx
 * <HoverCard>
 *   <HoverCardTrigger>Hover me</HoverCardTrigger>
 *   <HoverCardContent>Additional information</HoverCardContent>
 * </HoverCard>
 * ```
 */
declare function HoverCard({ ...props }: HoverCardProps): React.ReactElement;
/**
 * HoverCardTrigger component - The element that triggers the hover card
 * @param props - HoverCardTrigger props
 * @returns A HoverCardTrigger component
 */
declare function HoverCardTrigger({ ...props }: HoverCardTriggerProps): React.ReactElement;
/**
 * HoverCardContent component - The content container of the hover card
 * @param props - HoverCardContent props including align and sideOffset
 * @returns A HoverCardContent component
 */
declare function HoverCardContent({ className, align, sideOffset, ...props }: HoverCardContentProps): React.ReactElement;

/**
 * DropdownMenu component props interface
 * Extends Radix UI DropdownMenu primitive props
 */
interface DropdownMenuProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Root> {
}
/**
 * DropdownMenuTrigger component props interface
 * Extends Radix UI DropdownMenuTrigger primitive props
 */
interface DropdownMenuTriggerProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Trigger> {
}
/**
 * DropdownMenuContent component props interface
 * Extends Radix UI DropdownMenuContent primitive props
 */
interface DropdownMenuContentProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
    sideOffset?: number;
}
/**
 * DropdownMenuGroup component props interface
 * Extends Radix UI DropdownMenuGroup primitive props
 */
interface DropdownMenuGroupProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Group> {
}
/**
 * DropdownMenuItem component props interface
 * Extends Radix UI DropdownMenuItem primitive props and adds inset and variant props
 */
interface DropdownMenuItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
    inset?: boolean;
    variant?: "default" | "destructive";
}
/**
 * DropdownMenuCheckboxItem component props interface
 * Extends Radix UI DropdownMenuCheckboxItem primitive props
 */
interface DropdownMenuCheckboxItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {
}
/**
 * DropdownMenuRadioGroup component props interface
 * Extends Radix UI DropdownMenuRadioGroup primitive props
 */
interface DropdownMenuRadioGroupProps extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup> {
}
/**
 * DropdownMenuRadioItem component props interface
 * Extends Radix UI DropdownMenuRadioItem primitive props
 */
interface DropdownMenuRadioItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {
}
/**
 * DropdownMenuLabel component props interface
 * Extends Radix UI DropdownMenuLabel primitive props and adds inset prop
 */
interface DropdownMenuLabelProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Label> {
    inset?: boolean;
}
/**
 * DropdownMenuSeparator component props interface
 * Extends Radix UI DropdownMenuSeparator primitive props
 */
interface DropdownMenuSeparatorProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {
}
/**
 * DropdownMenuShortcut component props interface
 * Extends native span element props
 */
interface DropdownMenuShortcutProps extends React.ComponentProps<"span"> {
}
/**
 * DropdownMenuSub component props interface
 * Extends Radix UI DropdownMenuSub primitive props
 */
interface DropdownMenuSubProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Sub> {
}
/**
 * DropdownMenuSubTrigger component props interface
 * Extends Radix UI DropdownMenuSubTrigger primitive props and adds inset prop
 */
interface DropdownMenuSubTriggerProps extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
    inset?: boolean;
}
/**
 * DropdownMenuSubContent component props interface
 * Extends Radix UI DropdownMenuSubContent primitive props
 */
interface DropdownMenuSubContentProps extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {
}
/**
 * DropdownMenu component - A dropdown menu
 *
 * Provides an accessible dropdown menu for displaying actions and options.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - DropdownMenu props including open, onOpenChange, and standard Radix UI DropdownMenu attributes
 * @returns A DropdownMenu component
 *
 * @example
 * ```tsx
 * <DropdownMenu>
 *   <DropdownMenuTrigger>Open</DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>Item 1</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
declare const DropdownMenu: React.NamedExoticComponent<DropdownMenuProps>;
/**
 * DropdownMenuTrigger component - The element that opens the dropdown menu
 * @param props - DropdownMenuTrigger props
 * @returns A DropdownMenuTrigger component
 */
declare function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps): React.ReactElement;
/**
 * DropdownMenuContent component - The content container of the dropdown menu
 * @param props - DropdownMenuContent props including sideOffset
 * @returns A DropdownMenuContent component
 */
declare function DropdownMenuContent({ className, sideOffset, ...props }: DropdownMenuContentProps): React.ReactElement;
/**
 * DropdownMenuGroup component - A group of related dropdown menu items
 * @param props - DropdownMenuGroup props
 * @returns A DropdownMenuGroup component
 */
declare function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps): React.ReactElement;
/**
 * DropdownMenuItem component - An individual selectable item in the dropdown menu
 * @param props - DropdownMenuItem props including inset and variant
 * @returns A DropdownMenuItem component
 */
declare function DropdownMenuItem({ className, inset, variant, ...props }: DropdownMenuItemProps): React.ReactElement;
/**
 * DropdownMenuCheckboxItem component - A checkbox item in the dropdown menu
 * @param props - DropdownMenuCheckboxItem props
 * @returns A DropdownMenuCheckboxItem component
 */
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: DropdownMenuCheckboxItemProps): React.ReactElement;
/**
 * DropdownMenuRadioGroup component - A radio group within the dropdown menu
 * @param props - DropdownMenuRadioGroup props
 * @returns A DropdownMenuRadioGroup component
 */
declare function DropdownMenuRadioGroup({ ...props }: DropdownMenuRadioGroupProps): React.ReactElement;
/**
 * DropdownMenuRadioItem component - A radio item in the dropdown menu
 * @param props - DropdownMenuRadioItem props
 * @returns A DropdownMenuRadioItem component
 */
declare function DropdownMenuRadioItem({ className, children, ...props }: DropdownMenuRadioItemProps): React.ReactElement;
/**
 * DropdownMenuLabel component - A non-interactive label in the dropdown menu
 * @param props - DropdownMenuLabel props including inset
 * @returns A DropdownMenuLabel component
 */
declare function DropdownMenuLabel({ className, inset, ...props }: DropdownMenuLabelProps): React.ReactElement;
/**
 * DropdownMenuSeparator component - A visual separator in the dropdown menu
 * @param props - DropdownMenuSeparator props
 * @returns A DropdownMenuSeparator component
 */
declare function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps): React.ReactElement;
/**
 * DropdownMenuShortcut component - A keyboard shortcut indicator
 * @param props - DropdownMenuShortcut props
 * @returns A DropdownMenuShortcut component
 */
declare function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps): React.ReactElement;
/**
 * DropdownMenuSub component - A submenu container
 * @param props - DropdownMenuSub props
 * @returns A DropdownMenuSub component
 */
declare function DropdownMenuSub({ ...props }: DropdownMenuSubProps): React.ReactElement;
/**
 * DropdownMenuSubTrigger component - The trigger for a submenu
 * @param props - DropdownMenuSubTrigger props including inset
 * @returns A DropdownMenuSubTrigger component
 */
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: DropdownMenuSubTriggerProps): React.ReactElement;
/**
 * DropdownMenuSubContent component - The content container of a submenu
 * @param props - DropdownMenuSubContent props
 * @returns A DropdownMenuSubContent component
 */
declare function DropdownMenuSubContent({ className, ...props }: DropdownMenuSubContentProps): React.ReactElement;

/**
 * ContextMenu component props interface
 * Extends Radix UI ContextMenu primitive props
 */
interface ContextMenuProps extends React.ComponentProps<typeof ContextMenuPrimitive.Root> {
}
/**
 * ContextMenuTrigger component props interface
 * Extends Radix UI ContextMenuTrigger primitive props
 */
interface ContextMenuTriggerProps extends React.ComponentProps<typeof ContextMenuPrimitive.Trigger> {
}
/**
 * ContextMenuContent component props interface
 * Extends Radix UI ContextMenuContent primitive props
 */
interface ContextMenuContentProps extends React.ComponentProps<typeof ContextMenuPrimitive.Content> {
}
/**
 * ContextMenuItem component props interface
 * Extends Radix UI ContextMenuItem primitive props and adds inset and variant props
 */
interface ContextMenuItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.Item> {
    inset?: boolean;
    variant?: "default" | "destructive";
}
/**
 * ContextMenuCheckboxItem component props interface
 * Extends Radix UI ContextMenuCheckboxItem primitive props
 */
interface ContextMenuCheckboxItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem> {
}
/**
 * ContextMenuRadioItem component props interface
 * Extends Radix UI ContextMenuRadioItem primitive props
 */
interface ContextMenuRadioItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.RadioItem> {
}
/**
 * ContextMenuLabel component props interface
 * Extends Radix UI ContextMenuLabel primitive props and adds inset prop
 */
interface ContextMenuLabelProps extends React.ComponentProps<typeof ContextMenuPrimitive.Label> {
    inset?: boolean;
}
/**
 * ContextMenuSeparator component props interface
 * Extends Radix UI ContextMenuSeparator primitive props
 */
interface ContextMenuSeparatorProps extends React.ComponentProps<typeof ContextMenuPrimitive.Separator> {
}
/**
 * ContextMenuShortcut component props interface
 * Extends native span element props
 */
interface ContextMenuShortcutProps extends React.ComponentProps<"span"> {
}
/**
 * ContextMenuSub component props interface
 * Extends Radix UI ContextMenuSub primitive props
 */
interface ContextMenuSubProps extends React.ComponentProps<typeof ContextMenuPrimitive.Sub> {
}
/**
 * ContextMenuSubTrigger component props interface
 * Extends Radix UI ContextMenuSubTrigger primitive props and adds inset prop
 */
interface ContextMenuSubTriggerProps extends React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> {
    inset?: boolean;
}
/**
 * ContextMenuSubContent component props interface
 * Extends Radix UI ContextMenuSubContent primitive props
 */
interface ContextMenuSubContentProps extends React.ComponentProps<typeof ContextMenuPrimitive.SubContent> {
}
/**
 * ContextMenuRadioGroup component props interface
 * Extends Radix UI ContextMenuRadioGroup primitive props
 */
interface ContextMenuRadioGroupProps extends React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup> {
}
/**
 * ContextMenu component - A context menu (right-click menu)
 *
 * Provides an accessible context menu that appears on right-click.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - ContextMenu props including open, onOpenChange, and standard Radix UI ContextMenu attributes
 * @returns A ContextMenu component
 *
 * @example
 * ```tsx
 * <ContextMenu>
 *   <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Item 1</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * ```
 */
declare const ContextMenu: React.NamedExoticComponent<ContextMenuProps>;
/**
 * ContextMenuTrigger component - The element that triggers the context menu
 * @param props - ContextMenuTrigger props
 * @returns A ContextMenuTrigger component
 */
declare function ContextMenuTrigger({ ...props }: ContextMenuTriggerProps): React.ReactElement;
/**
 * ContextMenuSub component - A submenu container
 * @param props - ContextMenuSub props
 * @returns A ContextMenuSub component
 */
declare function ContextMenuSub({ ...props }: ContextMenuSubProps): React.ReactElement;
/**
 * ContextMenuRadioGroup component - A radio group within the context menu
 * @param props - ContextMenuRadioGroup props
 * @returns A ContextMenuRadioGroup component
 */
declare function ContextMenuRadioGroup({ ...props }: ContextMenuRadioGroupProps): React.ReactElement;
/**
 * ContextMenuSubTrigger component - The trigger for a submenu
 * @param props - ContextMenuSubTrigger props including inset
 * @returns A ContextMenuSubTrigger component
 */
declare function ContextMenuSubTrigger({ className, inset, children, ...props }: ContextMenuSubTriggerProps): React.ReactElement;
/**
 * ContextMenuSubContent component - The content container of a submenu
 * @param props - ContextMenuSubContent props
 * @returns A ContextMenuSubContent component
 */
declare function ContextMenuSubContent({ className, ...props }: ContextMenuSubContentProps): React.ReactElement;
/**
 * ContextMenuContent component - The content container of the context menu
 * @param props - ContextMenuContent props
 * @returns A ContextMenuContent component
 */
declare function ContextMenuContent({ className, ...props }: ContextMenuContentProps): React.ReactElement;
/**
 * ContextMenuItem component - An individual selectable item in the context menu
 * @param props - ContextMenuItem props including inset and variant
 * @returns A ContextMenuItem component
 */
declare function ContextMenuItem({ className, inset, variant, ...props }: ContextMenuItemProps): React.ReactElement;
/**
 * ContextMenuCheckboxItem component - A checkbox item in the context menu
 * @param props - ContextMenuCheckboxItem props
 * @returns A ContextMenuCheckboxItem component
 */
declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: ContextMenuCheckboxItemProps): React.ReactElement;
/**
 * ContextMenuRadioItem component - A radio item in the context menu
 * @param props - ContextMenuRadioItem props
 * @returns A ContextMenuRadioItem component
 */
declare function ContextMenuRadioItem({ className, children, ...props }: ContextMenuRadioItemProps): React.ReactElement;
/**
 * ContextMenuLabel component - A non-interactive label in the context menu
 * @param props - ContextMenuLabel props including inset
 * @returns A ContextMenuLabel component
 */
declare function ContextMenuLabel({ className, inset, ...props }: ContextMenuLabelProps): React.ReactElement;
/**
 * ContextMenuSeparator component - A visual separator in the context menu
 * @param props - ContextMenuSeparator props
 * @returns A ContextMenuSeparator component
 */
declare function ContextMenuSeparator({ className, ...props }: ContextMenuSeparatorProps): React.ReactElement;
/**
 * ContextMenuShortcut component - A keyboard shortcut indicator
 * @param props - ContextMenuShortcut props
 * @returns A ContextMenuShortcut component
 */
declare function ContextMenuShortcut({ className, ...props }: ContextMenuShortcutProps): React.ReactElement;

/**
 * Dialog component props interface
 * Extends Radix UI Dialog primitive props
 */
interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
}
/**
 * DialogTrigger component props interface
 * Extends Radix UI DialogTrigger primitive props
 */
interface DialogTriggerProps extends React.ComponentProps<typeof DialogPrimitive.Trigger> {
}
/**
 * DialogPortal component props interface
 * Extends Radix UI DialogPortal primitive props
 */
interface DialogPortalProps extends React.ComponentProps<typeof DialogPrimitive.Portal> {
}
/**
 * DialogClose component props interface
 * Extends Radix UI DialogClose primitive props
 */
interface DialogCloseProps extends React.ComponentProps<typeof DialogPrimitive.Close> {
}
/**
 * DialogOverlay component props interface
 * Extends Radix UI DialogOverlay primitive props
 */
interface DialogOverlayProps extends React.ComponentProps<typeof DialogPrimitive.Overlay> {
}
/**
 * DialogContent component props interface
 * Extends Radix UI DialogContent primitive props and adds showCloseButton prop
 */
interface DialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
    showCloseButton?: boolean;
}
/**
 * DialogFooter component props interface
 * Extends native div element props
 */
interface DialogFooterProps extends React.ComponentProps<"div"> {
}
/**
 * DialogTitle component props interface
 * Extends Radix UI DialogTitle primitive props
 */
interface DialogTitleProps extends React.ComponentProps<typeof DialogPrimitive.Title> {
}
/**
 * DialogDescription component props interface
 * Extends Radix UI DialogDescription primitive props
 */
interface DialogDescriptionProps extends React.ComponentProps<typeof DialogPrimitive.Description> {
}
/**
 * Dialog component - A modal dialog
 *
 * Provides an accessible modal dialog for displaying content.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Dialog props including open, onOpenChange, and standard Radix UI Dialog attributes
 * @returns A Dialog component
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger>Open Dialog</DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Title</DialogTitle>
 *       <DialogDescription>Description</DialogDescription>
 *     </DialogHeader>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
declare const Dialog: React.NamedExoticComponent<DialogProps>;
/**
 * DialogTrigger component - The element that opens the dialog
 * @param props - DialogTrigger props
 * @returns A DialogTrigger component
 */
declare function DialogTrigger({ ...props }: DialogTriggerProps): React.ReactElement;
/**
 * DialogPortal component - Portals the dialog content
 * @param props - DialogPortal props
 * @returns A DialogPortal component
 */
declare function DialogPortal({ ...props }: DialogPortalProps): React.ReactElement;
/**
 * DialogClose component - The element that closes the dialog
 * @param props - DialogClose props
 * @returns A DialogClose component
 */
declare function DialogClose({ ...props }: DialogCloseProps): React.ReactElement;
/**
 * DialogOverlay component - The backdrop overlay for the dialog
 * @param props - DialogOverlay props
 * @returns A DialogOverlay component
 */
declare function DialogOverlay({ className, ...props }: DialogOverlayProps): React.ReactElement;
/**
 * DialogContent component - The main content container of the dialog
 * @param props - DialogContent props including showCloseButton
 * @returns A DialogContent component
 */
declare const DialogContent: React.NamedExoticComponent<DialogContentProps>;
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): React.ReactElement;
/**
 * DialogFooter component - The footer section of the dialog
 * @param props - DialogFooter props
 * @returns A DialogFooter component
 */
declare function DialogFooter({ className, ...props }: DialogFooterProps): React.ReactElement;
/**
 * DialogTitle component - The title of the dialog
 * @param props - DialogTitle props
 * @returns A DialogTitle component
 */
declare function DialogTitle({ className, ...props }: DialogTitleProps): React.ReactElement;
/**
 * DialogDescription component - The description text of the dialog
 * @param props - DialogDescription props
 * @returns A DialogDescription component
 */
declare function DialogDescription({ className, ...props }: DialogDescriptionProps): React.ReactElement;

/**
 * Command component props interface
 * Extends cmdk Command primitive props
 */
interface CommandProps extends React.ComponentProps<typeof Command$1> {
}
/**
 * CommandDialog component props interface
 * Extends Dialog props and adds title, description, and showCloseButton props
 */
interface CommandDialogProps extends React.ComponentProps<typeof Dialog> {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}
/**
 * CommandInput component props interface
 * Extends cmdk CommandInput primitive props
 */
interface CommandInputProps extends React.ComponentProps<typeof Command$1.Input> {
}
/**
 * CommandList component props interface
 * Extends cmdk CommandList primitive props
 */
interface CommandListProps extends React.ComponentProps<typeof Command$1.List> {
}
/**
 * CommandEmpty component props interface
 * Extends cmdk CommandEmpty primitive props
 */
interface CommandEmptyProps extends React.ComponentProps<typeof Command$1.Empty> {
}
/**
 * CommandGroup component props interface
 * Extends cmdk CommandGroup primitive props
 */
interface CommandGroupProps extends React.ComponentProps<typeof Command$1.Group> {
}
/**
 * CommandSeparator component props interface
 * Extends cmdk CommandSeparator primitive props
 */
interface CommandSeparatorProps extends React.ComponentProps<typeof Command$1.Separator> {
}
/**
 * CommandItem component props interface
 * Extends cmdk CommandItem primitive props
 */
interface CommandItemProps extends React.ComponentProps<typeof Command$1.Item> {
}
/**
 * CommandShortcut component props interface
 * Extends native span element props
 */
interface CommandShortcutProps extends React.ComponentProps<"span"> {
}
/**
 * Command component - A command palette interface
 *
 * Provides a command palette for searching and executing commands.
 * Built on cmdk for command handling.
 *
 * @param props - Command props including standard cmdk Command attributes
 * @returns A Command component
 *
 * @example
 * ```tsx
 * <Command>
 *   <CommandInput placeholder="Search..." />
 *   <CommandList>
 *     <CommandGroup heading="Suggestions">
 *       <CommandItem>Item 1</CommandItem>
 *     </CommandGroup>
 *   </CommandList>
 * </Command>
 * ```
 */
declare function Command({ className, ...props }: CommandProps): React.ReactElement;
/**
 * CommandDialog component - A dialog wrapper for Command
 * @param props - CommandDialog props including title, description, and showCloseButton
 * @returns A CommandDialog component
 */
declare function CommandDialog({ title, description, children, className, showCloseButton, ...props }: CommandDialogProps): React.ReactElement;
/**
 * CommandInput component - The search input for the command palette
 * @param props - CommandInput props
 * @returns A CommandInput component
 */
declare function CommandInput({ className, ...props }: CommandInputProps): React.ReactElement;
/**
 * CommandList component - The scrollable list container for command items
 * @param props - CommandList props
 * @returns A CommandList component
 */
declare function CommandList({ className, ...props }: CommandListProps): React.ReactElement;
/**
 * CommandEmpty component - The empty state when no commands match
 * @param props - CommandEmpty props
 * @returns A CommandEmpty component
 */
declare function CommandEmpty({ ...props }: CommandEmptyProps): React.ReactElement;
/**
 * CommandGroup component - A group of related command items
 * @param props - CommandGroup props
 * @returns A CommandGroup component
 */
declare function CommandGroup({ className, ...props }: CommandGroupProps): React.ReactElement;
/**
 * CommandSeparator component - A visual separator between command groups
 * @param props - CommandSeparator props
 * @returns A CommandSeparator component
 */
declare function CommandSeparator({ className, ...props }: CommandSeparatorProps): React.ReactElement;
/**
 * CommandItem component - An individual selectable command item
 * @param props - CommandItem props
 * @returns A CommandItem component
 */
declare function CommandItem({ className, ...props }: CommandItemProps): React.ReactElement;
/**
 * CommandShortcut component - A keyboard shortcut indicator
 * @param props - CommandShortcut props
 * @returns A CommandShortcut component
 */
declare function CommandShortcut({ className, ...props }: CommandShortcutProps): React.ReactElement;

interface ComboboxOption {
    value: string;
    label: string;
}
interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    className?: string;
    disabled?: boolean;
}
declare function Combobox({ options, value, onValueChange, placeholder, searchPlaceholder, emptyText, className, disabled, }: ComboboxProps): React.ReactElement;

/**
 * InputOTP component props interface
 * Extends input-otp OTPInput props and adds containerClassName prop
 */
type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
    children?: React.ReactNode;
};
/**
 * InputOTPGroup component props interface
 * Extends native div element props
 */
interface InputOTPGroupProps extends React.ComponentProps<"div"> {
}
/**
 * InputOTPSlot component props interface
 * Extends native div element props and adds index prop
 */
interface InputOTPSlotProps extends React.ComponentProps<"div"> {
    index: number;
}
/**
 * InputOTPSeparator component props interface
 * Extends native div element props
 */
interface InputOTPSeparatorProps extends React.ComponentProps<"div"> {
}
/**
 * InputOTP component - A one-time password input
 *
 * Provides an input field for entering one-time passwords (OTP).
 * Built on input-otp library.
 *
 * @param props - InputOTP props including maxLength, value, onChange, and standard OTPInput attributes
 * @returns An InputOTP component
 *
 * @example
 * ```tsx
 * <InputOTP maxLength={6}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *   </InputOTPGroup>
 * </InputOTP>
 * ```
 */
declare function InputOTP({ className, containerClassName, ...props }: InputOTPProps): React.ReactElement;
/**
 * InputOTPGroup component - A group of OTP input slots
 * @param props - InputOTPGroup props
 * @returns An InputOTPGroup component
 */
declare function InputOTPGroup({ className, ...props }: InputOTPGroupProps): React.ReactElement;
/**
 * InputOTPSlot component - An individual slot in an OTP input
 * @param props - InputOTPSlot props including index
 * @returns An InputOTPSlot component
 */
declare function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps): React.ReactElement;
/**
 * InputOTPSeparator component - A separator between OTP groups
 * @param props - InputOTPSeparator props
 * @returns An InputOTPSeparator component
 */
declare function InputOTPSeparator({ ...props }: InputOTPSeparatorProps): React.ReactElement;

/**
 * InputGroup component props interface
 * Extends native div element props
 */
interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * InputGroup component - A container for grouping input elements
 *
 * Provides a container for grouping input elements together.
 *
 * @param props - InputGroup props including standard HTML div attributes
 * @returns An InputGroup component
 *
 * @example
 * ```tsx
 * <InputGroup>
 *   <Input placeholder="Search..." />
 *   <Button>Search</Button>
 * </InputGroup>
 * ```
 */
declare function InputGroup({ className, ...props }: InputGroupProps): React.ReactElement;

/**
 * Breadcrumb component props interface
 * Extends native nav element props
 */
interface BreadcrumbProps extends React.ComponentProps<"nav"> {
}
/**
 * BreadcrumbList component props interface
 * Extends native ol element props
 */
interface BreadcrumbListProps extends React.ComponentProps<"ol"> {
}
/**
 * BreadcrumbItem component props interface
 * Extends native li element props
 */
interface BreadcrumbItemProps extends React.ComponentProps<"li"> {
}
/**
 * BreadcrumbLink component props interface
 * Extends native a element props and adds asChild prop
 */
interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
    asChild?: boolean;
}
/**
 * BreadcrumbPage component props interface
 * Extends native span element props
 */
interface BreadcrumbPageProps extends React.ComponentProps<"span"> {
}
/**
 * BreadcrumbSeparator component props interface
 * Extends native li element props
 */
interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {
}
/**
 * BreadcrumbEllipsis component props interface
 * Extends native span element props
 */
interface BreadcrumbEllipsisProps extends React.ComponentProps<"span"> {
}
/**
 * Breadcrumb component - A navigation breadcrumb trail
 *
 * Displays a breadcrumb navigation showing the current page's location in the hierarchy.
 *
 * @param props - Breadcrumb props including standard HTML nav attributes
 * @returns A breadcrumb navigation element
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbList>
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbPage>Current Page</BreadcrumbPage>
 *     </BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 * ```
 */
declare function Breadcrumb({ ...props }: BreadcrumbProps): React.ReactElement;
/**
 * BreadcrumbList component - The ordered list container for breadcrumb items
 * @param props - BreadcrumbList props
 * @returns A BreadcrumbList component
 */
declare function BreadcrumbList({ className, ...props }: BreadcrumbListProps): React.ReactElement;
/**
 * BreadcrumbItem component - An individual breadcrumb item
 * @param props - BreadcrumbItem props
 * @returns A BreadcrumbItem component
 */
declare function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps): React.ReactElement;
/**
 * BreadcrumbLink component - A link within a breadcrumb item
 * @param props - BreadcrumbLink props including asChild
 * @returns A BreadcrumbLink component
 */
declare function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps): React.ReactElement;
/**
 * BreadcrumbPage component - The current page indicator in a breadcrumb
 * @param props - BreadcrumbPage props
 * @returns A BreadcrumbPage component
 */
declare function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps): React.ReactElement;
/**
 * BreadcrumbSeparator component - A separator between breadcrumb items
 * @param props - BreadcrumbSeparator props
 * @returns A BreadcrumbSeparator component
 */
declare function BreadcrumbSeparator({ children, className, ...props }: BreadcrumbSeparatorProps): React.ReactElement;
/**
 * BreadcrumbEllipsis component - An ellipsis indicator for truncated breadcrumbs
 * @param props - BreadcrumbEllipsis props
 * @returns A BreadcrumbEllipsis component
 */
declare function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps): React.ReactElement;

/**
 * Pagination component props interface
 * Extends native nav element props
 */
interface PaginationProps extends React.ComponentProps<"nav"> {
}
/**
 * PaginationContent component props interface
 * Extends native ul element props
 */
interface PaginationContentProps extends React.ComponentProps<"ul"> {
}
/**
 * PaginationItem component props interface
 * Extends native li element props
 */
interface PaginationItemProps extends React.ComponentProps<"li"> {
}
/**
 * PaginationLink component props interface
 * Extends native a element props and adds isActive and size props
 */
interface PaginationLinkProps extends React.ComponentProps<"a"> {
    isActive?: boolean;
    size?: React.ComponentProps<typeof Button>["size"];
}
/**
 * PaginationPrevious component props interface
 * Extends PaginationLink props
 */
interface PaginationPreviousProps extends PaginationLinkProps {
}
/**
 * PaginationNext component props interface
 * Extends PaginationLink props
 */
interface PaginationNextProps extends PaginationLinkProps {
}
/**
 * PaginationEllipsis component props interface
 * Extends native span element props
 */
interface PaginationEllipsisProps extends React.ComponentProps<"span"> {
}
/**
 * Pagination component - A pagination navigation
 *
 * Provides navigation controls for paginated content.
 *
 * @param props - Pagination props including standard HTML nav attributes
 * @returns A pagination navigation element
 *
 * @example
 * ```tsx
 * <Pagination>
 *   <PaginationContent>
 *     <PaginationItem>
 *       <PaginationPrevious href="/page/1" />
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationLink href="/page/2" isActive>2</PaginationLink>
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationNext href="/page/3" />
 *     </PaginationItem>
 *   </PaginationContent>
 * </Pagination>
 * ```
 */
declare function Pagination({ className, ...props }: PaginationProps): React.ReactElement;
/**
 * PaginationContent component - The container for pagination items
 * @param props - PaginationContent props
 * @returns A PaginationContent component
 */
declare function PaginationContent({ className, ...props }: PaginationContentProps): React.ReactElement;
/**
 * PaginationItem component - An individual pagination item
 * @param props - PaginationItem props
 * @returns A PaginationItem component
 */
declare function PaginationItem({ ...props }: PaginationItemProps): React.ReactElement;
/**
 * PaginationLink component - A link to a specific page
 * @param props - PaginationLink props including isActive and size
 * @returns A PaginationLink component
 */
declare function PaginationLink({ className, isActive, size, children, ...props }: PaginationLinkProps): React.ReactElement;
/**
 * PaginationPrevious component - A link to the previous page
 * @param props - PaginationPrevious props
 * @returns A PaginationPrevious component
 */
declare function PaginationPrevious({ className, ...props }: PaginationPreviousProps): React.ReactElement;
/**
 * PaginationNext component - A link to the next page
 * @param props - PaginationNext props
 * @returns A PaginationNext component
 */
declare function PaginationNext({ className, ...props }: PaginationNextProps): React.ReactElement;
/**
 * PaginationEllipsis component - An ellipsis indicator for truncated pages
 * @param props - PaginationEllipsis props
 * @returns A PaginationEllipsis component
 */
declare function PaginationEllipsis({ className, ...props }: PaginationEllipsisProps): React.ReactElement;

/**
 * ButtonGroup component props interface
 * Extends native div element props and adds orientation prop
 */
interface ButtonGroupProps extends React.ComponentProps<"div">, VariantProps<typeof buttonGroupVariants> {
}
/**
 * ButtonGroupText component props interface
 * Extends native div element props and adds asChild prop
 */
interface ButtonGroupTextProps extends React.ComponentProps<"div"> {
    asChild?: boolean;
}
/**
 * ButtonGroupSeparator component props interface
 * Extends Separator props
 */
interface ButtonGroupSeparatorProps extends React.ComponentProps<typeof Separator> {
    orientation?: "horizontal" | "vertical";
}
declare const buttonGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * ButtonGroup component - A group of buttons
 *
 * Provides a container for grouping buttons together with shared styling.
 *
 * @param props - ButtonGroup props including orientation and standard HTML div attributes
 * @returns A ButtonGroup component
 *
 * @example
 * ```tsx
 * <ButtonGroup orientation="horizontal">
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 * </ButtonGroup>
 * ```
 */
declare function ButtonGroup({ className, orientation, ...props }: ButtonGroupProps): React.ReactElement;
/**
 * ButtonGroupText component - A text element within a button group
 * @param props - ButtonGroupText props including asChild
 * @returns A ButtonGroupText component
 */
declare function ButtonGroupText({ className, asChild, ...props }: ButtonGroupTextProps): React.ReactElement;
/**
 * ButtonGroupSeparator component - A separator within a button group
 * @param props - ButtonGroupSeparator props including orientation
 * @returns A ButtonGroupSeparator component
 */
declare function ButtonGroupSeparator({ className, orientation, ...props }: ButtonGroupSeparatorProps): React.ReactElement;

/**
 * NativeSelect component props interface
 * Extends native select element props
 */
interface NativeSelectProps extends React.ComponentProps<"select"> {
}
/**
 * NativeSelect component - A native HTML select element
 *
 * Provides a styled native HTML select dropdown.
 *
 * @param props - NativeSelect props including standard HTML select attributes
 * @returns A NativeSelect component
 *
 * @example
 * ```tsx
 * <NativeSelect>
 *   <NativeSelectOption value="option1">Option 1</NativeSelectOption>
 *   <NativeSelectOption value="option2">Option 2</NativeSelectOption>
 * </NativeSelect>
 * ```
 */
declare function NativeSelect({ className, ...props }: NativeSelectProps): React.ReactElement;

/**
 * FieldSet component props interface
 * Extends native fieldset element props
 */
interface FieldSetProps extends React.ComponentProps<"fieldset"> {
}
/**
 * FieldLegend component props interface
 * Extends native legend element props and adds variant prop
 */
interface FieldLegendProps extends React.ComponentProps<"legend"> {
    variant?: "legend" | "label";
}
/**
 * FieldGroup component props interface
 * Extends native div element props
 */
interface FieldGroupProps extends React.ComponentProps<"div"> {
}
/**
 * Field component props interface
 * Extends native div element props and adds orientation prop
 */
interface FieldProps extends React.ComponentProps<"div">, VariantProps<typeof fieldVariants> {
}
/**
 * FieldContent component props interface
 * Extends native div element props
 */
interface FieldContentProps extends React.ComponentProps<"div"> {
}
/**
 * FieldLabel component props interface
 * Extends Label props
 */
interface FieldLabelProps extends React.ComponentProps<typeof Label> {
}
/**
 * FieldTitle component props interface
 * Extends native div element props
 */
interface FieldTitleProps extends React.ComponentProps<"div"> {
}
/**
 * FieldDescription component props interface
 * Extends native p element props
 */
interface FieldDescriptionProps extends React.ComponentProps<"p"> {
}
/**
 * FieldSeparator component props interface
 * Extends native div element props
 */
interface FieldSeparatorProps extends React.ComponentProps<"div"> {
    children?: React.ReactNode;
}
/**
 * FieldError component props interface
 * Extends native div element props and adds errors prop
 */
interface FieldErrorProps extends React.ComponentProps<"div"> {
    errors?: Array<{
        message?: string;
    } | undefined>;
}
/**
 * FieldSet component - A fieldset container for form fields
 *
 * Provides a fieldset container for grouping related form fields.
 *
 * @param props - FieldSet props including standard HTML fieldset attributes
 * @returns A FieldSet component
 *
 * @example
 * ```tsx
 * <FieldSet>
 *   <FieldLegend>Personal Information</FieldLegend>
 *   <Field>
 *     <FieldLabel>Name</FieldLabel>
 *     <FieldContent>
 *       <Input />
 *     </FieldContent>
 *   </Field>
 * </FieldSet>
 * ```
 */
declare function FieldSet({ className, ...props }: FieldSetProps): React.ReactElement;
/**
 * FieldLegend component - A legend for a FieldSet
 * @param props - FieldLegend props including variant
 * @returns A FieldLegend component
 */
declare function FieldLegend({ className, variant, ...props }: FieldLegendProps): React.ReactElement;
/**
 * FieldGroup component - A group of fields
 * @param props - FieldGroup props
 * @returns A FieldGroup component
 */
declare function FieldGroup({ className, ...props }: FieldGroupProps): React.ReactElement;
declare const fieldVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | "responsive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * Field component - A form field container
 *
 * Provides a container for form fields with label, content, description, and error.
 *
 * @param props - Field props including orientation and standard HTML div attributes
 * @returns A Field component
 *
 * @example
 * ```tsx
 * <Field orientation="vertical">
 *   <FieldLabel>Email</FieldLabel>
 *   <FieldContent>
 *     <Input type="email" />
 *   </FieldContent>
 *   <FieldDescription>Enter your email address</FieldDescription>
 *   <FieldError />
 * </Field>
 * ```
 */
declare const Field: React.NamedExoticComponent<FieldProps>;
/**
 * FieldContent component - The content area of a field
 * @param props - FieldContent props
 * @returns A FieldContent component
 */
declare function FieldContent({ className, ...props }: FieldContentProps): React.ReactElement;
/**
 * FieldLabel component - A label for a field
 * @param props - FieldLabel props
 * @returns A FieldLabel component
 */
declare function FieldLabel({ className, ...props }: FieldLabelProps): React.ReactElement;
/**
 * FieldTitle component - A title for a field
 * @param props - FieldTitle props
 * @returns A FieldTitle component
 */
declare function FieldTitle({ className, ...props }: FieldTitleProps): React.ReactElement;
/**
 * FieldDescription component - A description for a field
 * @param props - FieldDescription props
 * @returns A FieldDescription component
 */
declare function FieldDescription({ className, ...props }: FieldDescriptionProps): React.ReactElement;
/**
 * FieldSeparator component - A separator between fields
 * @param props - FieldSeparator props including children
 * @returns A FieldSeparator component
 */
declare function FieldSeparator({ children, className, ...props }: FieldSeparatorProps): React.ReactElement;
declare function FieldError({ className, children, errors, ...props }: FieldErrorProps): React.ReactElement | null;

/**
 * AlertDialog component props interface
 * Extends Radix UI AlertDialog primitive props
 */
interface AlertDialogProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {
}
/**
 * AlertDialogTrigger component props interface
 * Extends Radix UI AlertDialogTrigger primitive props
 */
interface AlertDialogTriggerProps extends React.ComponentProps<typeof AlertDialogPrimitive.Trigger> {
}
/**
 * AlertDialogContent component props interface
 * Extends Radix UI AlertDialogContent primitive props
 */
interface AlertDialogContentProps extends React.ComponentProps<typeof AlertDialogPrimitive.Content> {
}
/**
 * AlertDialogHeader component props interface
 * Extends native div element props
 */
interface AlertDialogHeaderProps extends React.ComponentProps<"div"> {
}
/**
 * AlertDialogFooter component props interface
 * Extends native div element props
 */
interface AlertDialogFooterProps extends React.ComponentProps<"div"> {
}
/**
 * AlertDialogTitle component props interface
 * Extends Radix UI AlertDialogTitle primitive props
 */
interface AlertDialogTitleProps extends React.ComponentProps<typeof AlertDialogPrimitive.Title> {
}
/**
 * AlertDialogDescription component props interface
 * Extends Radix UI AlertDialogDescription primitive props
 */
interface AlertDialogDescriptionProps extends React.ComponentProps<typeof AlertDialogPrimitive.Description> {
}
/**
 * AlertDialogAction component props interface
 * Extends Radix UI AlertDialogAction primitive props
 */
interface AlertDialogActionProps extends React.ComponentProps<typeof AlertDialogPrimitive.Action> {
}
/**
 * AlertDialogCancel component props interface
 * Extends Radix UI AlertDialogCancel primitive props
 */
interface AlertDialogCancelProps extends React.ComponentProps<typeof AlertDialogPrimitive.Cancel> {
}
/**
 * AlertDialog component - A modal dialog for important confirmations
 *
 * Provides an accessible alert dialog for critical confirmations and actions.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - AlertDialog props including open, onOpenChange, and standard Radix UI AlertDialog attributes
 * @returns An AlertDialog component
 *
 * @example
 * ```tsx
 * <AlertDialog>
 *   <AlertDialogTrigger>Open</AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Are you sure?</AlertDialogTitle>
 *       <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction>Continue</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */
declare function AlertDialog({ ...props }: AlertDialogProps): React.ReactElement;
/**
 * AlertDialogTrigger component - The element that opens the alert dialog
 * @param props - AlertDialogTrigger props
 * @returns An AlertDialogTrigger component
 */
declare function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps): React.ReactElement;
/**
 * AlertDialogContent component - The main content container of the alert dialog
 * @param props - AlertDialogContent props
 * @returns An AlertDialogContent component
 */
declare function AlertDialogContent({ className, ...props }: AlertDialogContentProps): React.ReactElement;
/**
 * AlertDialogHeader component - The header section of the alert dialog
 * @param props - AlertDialogHeader props
 * @returns An AlertDialogHeader component
 */
declare function AlertDialogHeader({ className, ...props }: AlertDialogHeaderProps): React.ReactElement;
/**
 * AlertDialogFooter component - The footer section of the alert dialog
 * @param props - AlertDialogFooter props
 * @returns An AlertDialogFooter component
 */
declare function AlertDialogFooter({ className, ...props }: AlertDialogFooterProps): React.ReactElement;
/**
 * AlertDialogTitle component - The title of the alert dialog
 * @param props - AlertDialogTitle props
 * @returns An AlertDialogTitle component
 */
declare function AlertDialogTitle({ className, ...props }: AlertDialogTitleProps): React.ReactElement;
/**
 * AlertDialogDescription component - The description text of the alert dialog
 * @param props - AlertDialogDescription props
 * @returns An AlertDialogDescription component
 */
declare function AlertDialogDescription({ className, ...props }: AlertDialogDescriptionProps): React.ReactElement;
/**
 * AlertDialogAction component - The action button in the alert dialog
 * @param props - AlertDialogAction props
 * @returns An AlertDialogAction component
 */
declare function AlertDialogAction({ className, ...props }: AlertDialogActionProps): React.ReactElement;
/**
 * AlertDialogCancel component - The cancel button in the alert dialog
 * @param props - AlertDialogCancel props
 * @returns An AlertDialogCancel component
 */
declare function AlertDialogCancel({ className, ...props }: AlertDialogCancelProps): React.ReactElement;

/**
 * Drawer component props interface
 * Extends vaul Drawer Root props
 */
type DrawerProps = React.ComponentProps<typeof Drawer$1.Root>;
/**
 * DrawerTrigger component props interface
 * Extends vaul Drawer Trigger props
 */
interface DrawerTriggerProps extends React.ComponentProps<typeof Drawer$1.Trigger> {
}
/**
 * DrawerPortal component props interface
 * Extends vaul Drawer Portal props
 */
interface DrawerPortalProps extends React.ComponentProps<typeof Drawer$1.Portal> {
}
/**
 * DrawerClose component props interface
 * Extends vaul Drawer Close props
 */
interface DrawerCloseProps extends React.ComponentProps<typeof Drawer$1.Close> {
}
/**
 * DrawerOverlay component props interface
 * Extends vaul Drawer Overlay props
 */
interface DrawerOverlayProps extends React.ComponentProps<typeof Drawer$1.Overlay> {
}
/**
 * DrawerContent component props interface
 * Extends vaul Drawer Content props
 */
interface DrawerContentProps extends React.ComponentProps<typeof Drawer$1.Content> {
}
/**
 * DrawerHeader component props interface
 * Extends native div element props
 */
interface DrawerHeaderProps extends React.ComponentProps<"div"> {
}
/**
 * DrawerFooter component props interface
 * Extends native div element props
 */
interface DrawerFooterProps extends React.ComponentProps<"div"> {
}
/**
 * DrawerTitle component props interface
 * Extends vaul Drawer Title props
 */
interface DrawerTitleProps extends React.ComponentProps<typeof Drawer$1.Title> {
}
/**
 * DrawerDescription component props interface
 * Extends vaul Drawer Description props
 */
interface DrawerDescriptionProps extends React.ComponentProps<typeof Drawer$1.Description> {
}
/**
 * Drawer component - A drawer/sheet component
 *
 * Provides a drawer component that slides in from the edges of the screen.
 * Built on vaul library for smooth animations.
 *
 * @param props - Drawer props including open, onOpenChange, and standard vaul Drawer attributes
 * @returns A Drawer component
 *
 * @example
 * ```tsx
 * <Drawer>
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Title</DrawerTitle>
 *       <DrawerDescription>Description</DrawerDescription>
 *     </DrawerHeader>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */
declare function Drawer({ ...props }: DrawerProps): React.ReactElement;
/**
 * DrawerTrigger component - A trigger button for the drawer
 * @param props - DrawerTrigger props
 * @returns A DrawerTrigger component
 */
declare function DrawerTrigger({ ...props }: DrawerTriggerProps): React.ReactElement;
/**
 * DrawerPortal component - A portal for drawer content
 * @param props - DrawerPortal props
 * @returns A DrawerPortal component
 */
declare function DrawerPortal({ ...props }: DrawerPortalProps): React.ReactElement;
/**
 * DrawerClose component - A close button for the drawer
 * @param props - DrawerClose props
 * @returns A DrawerClose component
 */
declare function DrawerClose({ ...props }: DrawerCloseProps): React.ReactElement;
/**
 * DrawerOverlay component - An overlay backdrop for the drawer
 * @param props - DrawerOverlay props
 * @returns A DrawerOverlay component
 */
declare function DrawerOverlay({ className, ...props }: DrawerOverlayProps): React.ReactElement;
/**
 * DrawerContent component - The main content area of the drawer
 * @param props - DrawerContent props
 * @returns A DrawerContent component
 */
declare function DrawerContent({ className, children, ...props }: DrawerContentProps): React.ReactElement;
/**
 * DrawerHeader component - A header section for the drawer
 * @param props - DrawerHeader props
 * @returns A DrawerHeader component
 */
declare function DrawerHeader({ className, ...props }: DrawerHeaderProps): React.ReactElement;
/**
 * DrawerFooter component - A footer section for the drawer
 * @param props - DrawerFooter props
 * @returns A DrawerFooter component
 */
declare function DrawerFooter({ className, ...props }: DrawerFooterProps): React.ReactElement;
/**
 * DrawerTitle component - A title for the drawer
 * @param props - DrawerTitle props
 * @returns A DrawerTitle component
 */
declare function DrawerTitle({ className, ...props }: DrawerTitleProps): React.ReactElement;
/**
 * DrawerDescription component - A description for the drawer
 * @param props - DrawerDescription props
 * @returns A DrawerDescription component
 */
declare function DrawerDescription({ className, ...props }: DrawerDescriptionProps): React.ReactElement;

/**
 * Sheet component props interface
 * Extends Radix UI Dialog (Sheet) primitive props
 */
interface SheetProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
}
/**
 * SheetTrigger component props interface
 * Extends Radix UI DialogTrigger primitive props
 */
interface SheetTriggerProps extends React.ComponentProps<typeof DialogPrimitive.Trigger> {
}
/**
 * SheetClose component props interface
 * Extends Radix UI DialogClose primitive props
 */
interface SheetCloseProps extends React.ComponentProps<typeof DialogPrimitive.Close> {
}
/**
 * SheetContent component props interface
 * Extends Radix UI DialogContent primitive props and adds side prop
 */
interface SheetContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
    side?: "top" | "right" | "bottom" | "left";
}
/**
 * SheetHeader component props interface
 * Extends native div element props
 */
interface SheetHeaderProps extends React.ComponentProps<"div"> {
}
/**
 * SheetFooter component props interface
 * Extends native div element props
 */
interface SheetFooterProps extends React.ComponentProps<"div"> {
}
/**
 * SheetTitle component props interface
 * Extends Radix UI DialogTitle primitive props
 */
interface SheetTitleProps extends React.ComponentProps<typeof DialogPrimitive.Title> {
}
/**
 * SheetDescription component props interface
 * Extends Radix UI DialogDescription primitive props
 */
interface SheetDescriptionProps extends React.ComponentProps<typeof DialogPrimitive.Description> {
}
/**
 * Sheet component - A slide-over panel
 *
 * Provides an accessible slide-over panel that appears from the side of the screen.
 * Built on Radix UI Dialog primitives for accessibility.
 *
 * @param props - Sheet props including open, onOpenChange, and standard Radix UI Dialog attributes
 * @returns A Sheet component
 *
 * @example
 * ```tsx
 * <Sheet>
 *   <SheetTrigger>Open</SheetTrigger>
 *   <SheetContent side="right">
 *     <SheetHeader>
 *       <SheetTitle>Title</SheetTitle>
 *       <SheetDescription>Description</SheetDescription>
 *     </SheetHeader>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
declare function Sheet({ ...props }: SheetProps): React.ReactElement;
/**
 * SheetTrigger component - The element that opens the sheet
 * @param props - SheetTrigger props
 * @returns A SheetTrigger component
 */
declare function SheetTrigger({ ...props }: SheetTriggerProps): React.ReactElement;
/**
 * SheetClose component - The element that closes the sheet
 * @param props - SheetClose props
 * @returns A SheetClose component
 */
declare function SheetClose({ ...props }: SheetCloseProps): React.ReactElement;
/**
 * SheetContent component - The main content container of the sheet
 * @param props - SheetContent props including side
 * @returns A SheetContent component
 */
declare function SheetContent({ className, children, side, ...props }: SheetContentProps): React.ReactElement;
/**
 * SheetHeader component - The header section of the sheet
 * @param props - SheetHeader props
 * @returns A SheetHeader component
 */
declare function SheetHeader({ className, ...props }: SheetHeaderProps): React.ReactElement;
/**
 * SheetFooter component - The footer section of the sheet
 * @param props - SheetFooter props
 * @returns A SheetFooter component
 */
declare function SheetFooter({ className, ...props }: SheetFooterProps): React.ReactElement;
/**
 * SheetTitle component - The title of the sheet
 * @param props - SheetTitle props
 * @returns A SheetTitle component
 */
declare function SheetTitle({ className, ...props }: SheetTitleProps): React.ReactElement;
/**
 * SheetDescription component - The description text of the sheet
 * @param props - SheetDescription props
 * @returns A SheetDescription component
 */
declare function SheetDescription({ className, ...props }: SheetDescriptionProps): React.ReactElement;

/**
 * SidebarContextProps type
 * Internal context type for sidebar state
 */
type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
/**
 * SidebarProvider component props interface
 * Extends native div element props and adds sidebar control props
 */
interface SidebarProviderProps extends React.ComponentProps<"div"> {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
/**
 * Sidebar component props interface
 * Extends native div element props and adds sidebar-specific props
 */
interface SidebarProps extends React.ComponentProps<"div"> {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}
/**
 * SidebarTrigger component props interface
 * Extends Button props
 */
interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {
}
/**
 * SidebarRail component props interface
 * Extends native button element props
 */
interface SidebarRailProps extends React.ComponentProps<"button"> {
}
/**
 * SidebarInset component props interface
 * Extends native main element props
 */
interface SidebarInsetProps extends React.ComponentProps<"main"> {
}
/**
 * SidebarInput component props interface
 * Extends Input props
 */
interface SidebarInputProps extends React.ComponentProps<typeof Input> {
}
/**
 * SidebarHeader component props interface
 * Extends native div element props
 */
interface SidebarHeaderProps extends React.ComponentProps<"div"> {
}
/**
 * SidebarFooter component props interface
 * Extends native div element props
 */
interface SidebarFooterProps extends React.ComponentProps<"div"> {
}
/**
 * SidebarSeparator component props interface
 * Extends Separator props
 */
interface SidebarSeparatorProps extends React.ComponentProps<typeof Separator> {
}
/**
 * SidebarContent component props interface
 * Extends native div element props
 */
interface SidebarContentProps extends React.ComponentProps<"div"> {
}
/**
 * SidebarGroup component props interface
 * Extends native div element props
 */
interface SidebarGroupProps extends React.ComponentProps<"div"> {
}
/**
 * SidebarGroupLabel component props interface
 * Extends native div element props and adds asChild prop
 */
interface SidebarGroupLabelProps extends React.ComponentProps<"div"> {
    asChild?: boolean;
}
/**
 * SidebarGroupAction component props interface
 * Extends native button element props and adds asChild prop
 */
interface SidebarGroupActionProps extends React.ComponentProps<"button"> {
    asChild?: boolean;
}
/**
 * SidebarGroupContent component props interface
 * Extends native div element props
 */
interface SidebarGroupContentProps extends React.ComponentProps<"div"> {
}
/**
 * SidebarMenu component props interface
 * Extends native ul element props
 */
interface SidebarMenuProps extends React.ComponentProps<"ul"> {
}
/**
 * SidebarMenuItem component props interface
 * Extends native li element props
 */
interface SidebarMenuItemProps extends React.ComponentProps<"li"> {
}
/**
 * SidebarMenuButton component props interface
 * Extends native button element props and adds sidebar-specific props
 */
interface SidebarMenuButtonProps extends React.ComponentProps<"button">, VariantProps<typeof sidebarMenuButtonVariants> {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}
/**
 * SidebarMenuAction component props interface
 * Extends native button element props and adds sidebar-specific props
 */
interface SidebarMenuActionProps extends React.ComponentProps<"button"> {
    asChild?: boolean;
    showOnHover?: boolean;
}
/**
 * SidebarMenuBadge component props interface
 * Extends native div element props
 */
interface SidebarMenuBadgeProps extends React.ComponentProps<"div"> {
}
/**
 * SidebarMenuSkeleton component props interface
 * Extends native div element props and adds showIcon prop
 */
interface SidebarMenuSkeletonProps extends React.ComponentProps<"div"> {
    showIcon?: boolean;
}
/**
 * SidebarMenuSub component props interface
 * Extends native ul element props
 */
interface SidebarMenuSubProps extends React.ComponentProps<"ul"> {
}
/**
 * SidebarMenuSubItem component props interface
 * Extends native li element props
 */
interface SidebarMenuSubItemProps extends React.ComponentProps<"li"> {
}
/**
 * SidebarMenuSubButton component props interface
 * Extends native a element props and adds sidebar-specific props
 */
interface SidebarMenuSubButtonProps extends React.ComponentProps<"a"> {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}
/**
 * SidebarProvider component - A provider for sidebar state
 *
 * Provides sidebar state management and context for all sidebar components.
 *
 * @param props - SidebarProvider props including defaultOpen, open, onOpenChange, and standard HTML div attributes
 * @returns A SidebarProvider component
 *
 * @example
 * ```tsx
 * <SidebarProvider defaultOpen={true}>
 *   <Sidebar>
 *     <SidebarHeader>Header</SidebarHeader>
 *     <SidebarContent>Content</SidebarContent>
 *   </Sidebar>
 * </SidebarProvider>
 * ```
 */
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: SidebarProviderProps): react_jsx_runtime.JSX.Element;
/**
 * Sidebar component - A sidebar navigation component
 *
 * Provides a collapsible sidebar with mobile support.
 *
 * @param props - Sidebar props including side, variant, collapsible, and standard HTML div attributes
 * @returns A Sidebar component
 *
 * @example
 * ```tsx
 * <Sidebar side="left" variant="sidebar" collapsible="icon">
 *   <SidebarHeader>Header</SidebarHeader>
 *   <SidebarContent>Content</SidebarContent>
 * </Sidebar>
 * ```
 */
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: SidebarProps): React.ReactElement;
/**
 * SidebarTrigger component - A button to toggle the sidebar
 * @param props - SidebarTrigger props
 * @returns A SidebarTrigger component
 */
declare function SidebarTrigger({ className, onClick, ...props }: SidebarTriggerProps): React.ReactElement;
/**
 * SidebarRail component - A rail for resizing the sidebar
 * @param props - SidebarRail props
 * @returns A SidebarRail component
 */
declare function SidebarRail({ className, ...props }: SidebarRailProps): React.ReactElement;
/**
 * SidebarInset component - The main content area next to the sidebar
 * @param props - SidebarInset props
 * @returns A SidebarInset component
 */
declare function SidebarInset({ className, ...props }: SidebarInsetProps): React.ReactElement;
/**
 * SidebarInput component - An input field for the sidebar
 * @param props - SidebarInput props
 * @returns A SidebarInput component
 */
declare function SidebarInput({ className, ...props }: SidebarInputProps): React.ReactElement;
/**
 * SidebarHeader component - A header section for the sidebar
 * @param props - SidebarHeader props
 * @returns A SidebarHeader component
 */
declare function SidebarHeader({ className, ...props }: SidebarHeaderProps): React.ReactElement;
/**
 * SidebarFooter component - A footer section for the sidebar
 * @param props - SidebarFooter props
 * @returns A SidebarFooter component
 */
declare function SidebarFooter({ className, ...props }: SidebarFooterProps): React.ReactElement;
/**
 * SidebarSeparator component - A separator in the sidebar
 * @param props - SidebarSeparator props
 * @returns A SidebarSeparator component
 */
declare function SidebarSeparator({ className, ...props }: SidebarSeparatorProps): React.ReactElement;
/**
 * SidebarContent component - The main content area of the sidebar
 * @param props - SidebarContent props
 * @returns A SidebarContent component
 */
declare function SidebarContent({ className, ...props }: SidebarContentProps): React.ReactElement;
/**
 * SidebarGroup component - A group of sidebar items
 * @param props - SidebarGroup props
 * @returns A SidebarGroup component
 */
declare function SidebarGroup({ className, ...props }: SidebarGroupProps): React.ReactElement;
/**
 * SidebarGroupLabel component - A label for a sidebar group
 * @param props - SidebarGroupLabel props including asChild
 * @returns A SidebarGroupLabel component
 */
declare function SidebarGroupLabel({ className, asChild, ...props }: SidebarGroupLabelProps): React.ReactElement;
/**
 * SidebarGroupAction component - An action button for a sidebar group
 * @param props - SidebarGroupAction props including asChild
 * @returns A SidebarGroupAction component
 */
declare function SidebarGroupAction({ className, asChild, ...props }: SidebarGroupActionProps): React.ReactElement;
/**
 * SidebarGroupContent component - Content for a sidebar group
 * @param props - SidebarGroupContent props
 * @returns A SidebarGroupContent component
 */
declare function SidebarGroupContent({ className, ...props }: SidebarGroupContentProps): React.ReactElement;
/**
 * SidebarMenu component - A menu container in the sidebar
 * @param props - SidebarMenu props
 * @returns A SidebarMenu component
 */
declare function SidebarMenu({ className, ...props }: SidebarMenuProps): React.ReactElement;
/**
 * SidebarMenuItem component - An individual menu item in the sidebar
 * @param props - SidebarMenuItem props
 * @returns A SidebarMenuItem component
 */
declare function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps): React.ReactElement;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * SidebarMenuButton component - A button for sidebar menu items
 * @param props - SidebarMenuButton props including asChild, isActive, tooltip, variant, size
 * @returns A SidebarMenuButton component
 */
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: SidebarMenuButtonProps): React.ReactElement;
/**
 * SidebarMenuAction component - An action button for sidebar menu items
 * @param props - SidebarMenuAction props including asChild and showOnHover
 * @returns A SidebarMenuAction component
 */
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: SidebarMenuActionProps): React.ReactElement;
/**
 * SidebarMenuBadge component - A badge for sidebar menu items
 * @param props - SidebarMenuBadge props
 * @returns A SidebarMenuBadge component
 */
declare function SidebarMenuBadge({ className, ...props }: SidebarMenuBadgeProps): React.ReactElement;
/**
 * SidebarMenuSkeleton component - A skeleton loader for sidebar menu items
 * @param props - SidebarMenuSkeleton props including showIcon
 * @returns A SidebarMenuSkeleton component
 */
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: SidebarMenuSkeletonProps): React.ReactElement;
/**
 * SidebarMenuSub component - A submenu container in the sidebar
 * @param props - SidebarMenuSub props
 * @returns A SidebarMenuSub component
 */
declare function SidebarMenuSub({ className, ...props }: SidebarMenuSubProps): React.ReactElement;
/**
 * SidebarMenuSubItem component - An individual submenu item
 * @param props - SidebarMenuSubItem props
 * @returns A SidebarMenuSubItem component
 */
declare function SidebarMenuSubItem({ className, ...props }: SidebarMenuSubItemProps): React.ReactElement;
/**
 * SidebarMenuSubButton component - A button for sidebar submenu items
 * @param props - SidebarMenuSubButton props including asChild, size, isActive
 * @returns A SidebarMenuSubButton component
 */
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: SidebarMenuSubButtonProps): React.ReactElement;

/**
 * NavigationMenu component props interface
 * Extends Radix UI NavigationMenu primitive props and adds viewport prop
 */
interface NavigationMenuProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {
    viewport?: boolean;
}
/**
 * NavigationMenuList component props interface
 * Extends Radix UI NavigationMenuList primitive props
 */
interface NavigationMenuListProps extends React.ComponentProps<typeof NavigationMenuPrimitive.List> {
}
/**
 * NavigationMenuItem component props interface
 * Extends Radix UI NavigationMenuItem primitive props
 */
interface NavigationMenuItemProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Item> {
}
/**
 * NavigationMenuTrigger component props interface
 * Extends Radix UI NavigationMenuTrigger primitive props
 */
interface NavigationMenuTriggerProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {
}
/**
 * NavigationMenuContent component props interface
 * Extends Radix UI NavigationMenuContent primitive props
 */
interface NavigationMenuContentProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Content> {
}
/**
 * NavigationMenuLink component props interface
 * Extends Radix UI NavigationMenuLink primitive props
 */
interface NavigationMenuLinkProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {
}
/**
 * NavigationMenu component - A navigation menu
 *
 * Provides an accessible navigation menu with dropdown support.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - NavigationMenu props including viewport and standard Radix UI NavigationMenu attributes
 * @returns A NavigationMenu component
 *
 * @example
 * ```tsx
 * <NavigationMenu>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Item</NavigationMenuTrigger>
 *       <NavigationMenuContent>Content</NavigationMenuContent>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenu>
 * ```
 */
declare function NavigationMenu({ className, children, viewport, ...props }: NavigationMenuProps): React.ReactElement;
/**
 * NavigationMenuList component - A list container for navigation menu items
 * @param props - NavigationMenuList props
 * @returns A NavigationMenuList component
 */
declare function NavigationMenuList({ className, ...props }: NavigationMenuListProps): React.ReactElement;
/**
 * NavigationMenuItem component - An individual navigation menu item
 * @param props - NavigationMenuItem props
 * @returns A NavigationMenuItem component
 */
declare function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps): React.ReactElement;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
/**
 * NavigationMenuTrigger component - A trigger button for navigation menu items
 * @param props - NavigationMenuTrigger props
 * @returns A NavigationMenuTrigger component
 */
declare function NavigationMenuTrigger({ className, children, ...props }: NavigationMenuTriggerProps): React.ReactElement;
/**
 * NavigationMenuContent component - Content displayed in navigation menu dropdowns
 * @param props - NavigationMenuContent props
 * @returns A NavigationMenuContent component
 */
declare function NavigationMenuContent({ className, ...props }: NavigationMenuContentProps): React.ReactElement;
/**
 * NavigationMenuLink component - A link within a navigation menu
 * @param props - NavigationMenuLink props
 * @returns A NavigationMenuLink component
 */
declare function NavigationMenuLink({ className, ...props }: NavigationMenuLinkProps): React.ReactElement;

/**
 * Menubar component props interface
 * Extends Radix UI Menubar Root props
 */
interface MenubarProps extends React.ComponentProps<typeof MenubarPrimitive.Root> {
}
/**
 * MenubarMenu component props interface
 * Extends Radix UI Menubar Menu props
 */
interface MenubarMenuProps extends React.ComponentProps<typeof MenubarPrimitive.Menu> {
}
/**
 * MenubarRadioGroup component props interface
 * Extends Radix UI Menubar RadioGroup props
 */
interface MenubarRadioGroupProps extends React.ComponentProps<typeof MenubarPrimitive.RadioGroup> {
}
/**
 * MenubarTrigger component props interface
 * Extends Radix UI Menubar Trigger props
 */
interface MenubarTriggerProps extends React.ComponentProps<typeof MenubarPrimitive.Trigger> {
}
/**
 * MenubarContent component props interface
 * Extends Radix UI Menubar Content props
 */
interface MenubarContentProps extends React.ComponentProps<typeof MenubarPrimitive.Content> {
}
/**
 * MenubarItem component props interface
 * Extends Radix UI Menubar Item props and adds inset and variant props
 */
interface MenubarItemProps extends React.ComponentProps<typeof MenubarPrimitive.Item> {
    inset?: boolean;
    variant?: "default" | "destructive";
}
/**
 * MenubarCheckboxItem component props interface
 * Extends Radix UI Menubar CheckboxItem props
 */
interface MenubarCheckboxItemProps extends React.ComponentProps<typeof MenubarPrimitive.CheckboxItem> {
}
/**
 * MenubarRadioItem component props interface
 * Extends Radix UI Menubar RadioItem props
 */
interface MenubarRadioItemProps extends React.ComponentProps<typeof MenubarPrimitive.RadioItem> {
}
/**
 * MenubarLabel component props interface
 * Extends Radix UI Menubar Label props and adds inset prop
 */
interface MenubarLabelProps extends React.ComponentProps<typeof MenubarPrimitive.Label> {
    inset?: boolean;
}
/**
 * MenubarSeparator component props interface
 * Extends Radix UI Menubar Separator props
 */
interface MenubarSeparatorProps extends React.ComponentProps<typeof MenubarPrimitive.Separator> {
}
/**
 * MenubarShortcut component props interface
 * Extends native span element props
 */
interface MenubarShortcutProps extends React.ComponentProps<"span"> {
}
/**
 * MenubarSub component props interface
 * Extends Radix UI Menubar Sub props
 */
interface MenubarSubProps extends React.ComponentProps<typeof MenubarPrimitive.Sub> {
}
/**
 * MenubarSubTrigger component props interface
 * Extends Radix UI Menubar SubTrigger props and adds inset prop
 */
interface MenubarSubTriggerProps extends React.ComponentProps<typeof MenubarPrimitive.SubTrigger> {
    inset?: boolean;
}
/**
 * MenubarSubContent component props interface
 * Extends Radix UI Menubar SubContent props
 */
interface MenubarSubContentProps extends React.ComponentProps<typeof MenubarPrimitive.SubContent> {
}
/**
 * Menubar component - A menubar component
 *
 * Provides an accessible menubar with menu items, submenus, and keyboard navigation.
 * Built on Radix UI primitives for accessibility.
 *
 * @param props - Menubar props including standard Radix UI Menubar attributes
 * @returns A Menubar component
 *
 * @example
 * ```tsx
 * <Menubar>
 *   <MenubarMenu>
 *     <MenubarTrigger>File</MenubarTrigger>
 *     <MenubarContent>
 *       <MenubarItem>New</MenubarItem>
 *     </MenubarContent>
 *   </MenubarMenu>
 * </Menubar>
 * ```
 */
declare const Menubar: React.NamedExoticComponent<MenubarProps>;
/**
 * MenubarMenu component - A menu within the menubar
 * @param props - MenubarMenu props
 * @returns A MenubarMenu component
 */
declare function MenubarMenu({ ...props }: MenubarMenuProps): React.ReactElement;
/**
 * MenubarRadioGroup component - A radio group within the menubar
 * @param props - MenubarRadioGroup props
 * @returns A MenubarRadioGroup component
 */
declare function MenubarRadioGroup({ ...props }: MenubarRadioGroupProps): React.ReactElement;
/**
 * MenubarTrigger component - A trigger button for menubar menus
 * @param props - MenubarTrigger props
 * @returns A MenubarTrigger component
 */
declare function MenubarTrigger({ className, ...props }: MenubarTriggerProps): React.ReactElement;
/**
 * MenubarContent component - Content displayed in menubar dropdowns
 * @param props - MenubarContent props including align, alignOffset, sideOffset
 * @returns A MenubarContent component
 */
declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: MenubarContentProps): React.ReactElement;
/**
 * MenubarItem component - An individual item in the menubar
 * @param props - MenubarItem props including inset and variant
 * @returns A MenubarItem component
 */
declare function MenubarItem({ className, inset, variant, ...props }: MenubarItemProps): React.ReactElement;
/**
 * MenubarCheckboxItem component - A checkbox item in the menubar
 * @param props - MenubarCheckboxItem props including checked
 * @returns A MenubarCheckboxItem component
 */
declare function MenubarCheckboxItem({ className, children, checked, ...props }: MenubarCheckboxItemProps): React.ReactElement;
/**
 * MenubarRadioItem component - A radio item in the menubar
 * @param props - MenubarRadioItem props
 * @returns A MenubarRadioItem component
 */
declare function MenubarRadioItem({ className, children, ...props }: MenubarRadioItemProps): React.ReactElement;
/**
 * MenubarLabel component - A label in the menubar
 * @param props - MenubarLabel props including inset
 * @returns A MenubarLabel component
 */
declare function MenubarLabel({ className, inset, ...props }: MenubarLabelProps): React.ReactElement;
/**
 * MenubarSeparator component - A separator in the menubar
 * @param props - MenubarSeparator props
 * @returns A MenubarSeparator component
 */
declare function MenubarSeparator({ className, ...props }: MenubarSeparatorProps): React.ReactElement;
/**
 * MenubarShortcut component - A keyboard shortcut indicator
 * @param props - MenubarShortcut props
 * @returns A MenubarShortcut component
 */
declare function MenubarShortcut({ className, ...props }: MenubarShortcutProps): React.ReactElement;
/**
 * MenubarSub component - A submenu container
 * @param props - MenubarSub props
 * @returns A MenubarSub component
 */
declare function MenubarSub({ ...props }: MenubarSubProps): React.ReactElement;
/**
 * MenubarSubTrigger component - A trigger for submenus
 * @param props - MenubarSubTrigger props including inset
 * @returns A MenubarSubTrigger component
 */
declare function MenubarSubTrigger({ className, inset, children, ...props }: MenubarSubTriggerProps): React.ReactElement;
/**
 * MenubarSubContent component - Content for submenus
 * @param props - MenubarSubContent props
 * @returns A MenubarSubContent component
 */
declare function MenubarSubContent({ className, ...props }: MenubarSubContentProps): React.ReactElement;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: ReactHookForm.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
/**
 * FormItem component props interface
 * Extends native div element props
 */
interface FormItemProps extends React.ComponentProps<"div"> {
}
/**
 * FormLabel component props interface
 * Extends Radix UI Label primitive props
 */
interface FormLabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
}
/**
 * FormControl component props interface
 * Extends Radix UI Slot primitive props
 */
interface FormControlProps extends React.ComponentProps<typeof Slot> {
}
/**
 * FormDescription component props interface
 * Extends native p element props
 */
interface FormDescriptionProps extends React.ComponentProps<"p"> {
}
/**
 * FormMessage component props interface
 * Extends native p element props
 */
interface FormMessageProps extends React.ComponentProps<"p"> {
}
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ name, control, defaultValue, rules, shouldUnregister, render, }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: ReactHookForm.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
/**
 * FormItem component - A container for form field elements
 *
 * Provides context for form field components (FormLabel, FormControl, FormDescription, FormMessage).
 *
 * @param props - FormItem props including standard HTML div attributes
 * @returns A FormItem component
 *
 * @example
 * ```tsx
 * <FormItem>
 *   <FormLabel>Email</FormLabel>
 *   <FormControl>
 *     <Input type="email" />
 *   </FormControl>
 *   <FormDescription>Enter your email address</FormDescription>
 *   <FormMessage />
 * </FormItem>
 * ```
 */
declare function FormItem({ className, ...props }: FormItemProps): React.ReactElement;
/**
 * FormLabel component - A label for a form field
 *
 * Automatically associates with the form field and displays error state.
 *
 * @param props - FormLabel props including standard Radix UI Label attributes
 * @returns A FormLabel component
 */
declare function FormLabel({ className, ...props }: FormLabelProps): React.ReactElement;
/**
 * FormControl component - A wrapper for form input components
 *
 * Automatically connects the input to form validation and error states.
 *
 * @param props - FormControl props including standard Radix UI Slot attributes
 * @returns A FormControl component
 */
declare function FormControl({ ...props }: FormControlProps): React.ReactElement;
/**
 * FormDescription component - A description text for a form field
 *
 * Displays helpful text below the form field.
 *
 * @param props - FormDescription props including standard HTML p attributes
 * @returns A FormDescription component
 */
declare function FormDescription({ className, ...props }: FormDescriptionProps): React.ReactElement;
/**
 * FormMessage component - An error message for a form field
 *
 * Automatically displays validation errors from react-hook-form.
 *
 * @param props - FormMessage props including standard HTML p attributes
 * @returns A FormMessage component or null if no error
 */
declare function FormMessage({ className, ...props }: FormMessageProps): React.ReactElement | null;

/**
 * Table component props interface
 * Extends native table element props
 */
interface TableProps extends React.ComponentProps<"table"> {
}
/**
 * TableHeader component props interface
 * Extends native thead element props
 */
interface TableHeaderProps extends React.ComponentProps<"thead"> {
}
/**
 * TableBody component props interface
 * Extends native tbody element props
 */
interface TableBodyProps extends React.ComponentProps<"tbody"> {
}
/**
 * TableFooter component props interface
 * Extends native tfoot element props
 */
interface TableFooterProps extends React.ComponentProps<"tfoot"> {
}
/**
 * TableRow component props interface
 * Extends native tr element props
 */
interface TableRowProps extends React.ComponentProps<"tr"> {
}
/**
 * TableHead component props interface
 * Extends native th element props
 */
interface TableHeadProps extends React.ComponentProps<"th"> {
}
/**
 * TableCell component props interface
 * Extends native td element props
 */
interface TableCellProps extends React.ComponentProps<"td"> {
}
/**
 * TableCaption component props interface
 * Extends native caption element props
 */
interface TableCaptionProps extends React.ComponentProps<"caption"> {
}
/**
 * Table component - A data table
 *
 * Provides a structured table for displaying tabular data.
 *
 * @param props - Table props including standard HTML table attributes
 * @returns A table element wrapped in a scrollable container
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Email</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
declare function Table({ className, ...props }: TableProps): React.ReactElement;
/**
 * TableHeader component - The header section of the table
 * @param props - TableHeader props
 * @returns A TableHeader component
 */
declare function TableHeader({ className, ...props }: TableHeaderProps): React.ReactElement;
/**
 * TableBody component - The body section of the table
 * @param props - TableBody props
 * @returns A TableBody component
 */
declare function TableBody({ className, ...props }: TableBodyProps): React.ReactElement;
/**
 * TableFooter component - The footer section of the table
 * @param props - TableFooter props
 * @returns A TableFooter component
 */
declare function TableFooter({ className, ...props }: TableFooterProps): React.ReactElement;
/**
 * TableRow component - A row in the table
 * @param props - TableRow props
 * @returns A TableRow component
 */
declare function TableRow({ className, ...props }: TableRowProps): React.ReactElement;
/**
 * TableHead component - A header cell in the table
 * @param props - TableHead props
 * @returns A TableHead component
 */
declare function TableHead({ className, ...props }: TableHeadProps): React.ReactElement;
/**
 * TableCell component - A data cell in the table
 * @param props - TableCell props
 * @returns A TableCell component
 */
declare function TableCell({ className, ...props }: TableCellProps): React.ReactElement;
/**
 * TableCaption component - A caption for the table
 * @param props - TableCaption props
 * @returns A TableCaption component
 */
declare function TableCaption({ className, ...props }: TableCaptionProps): React.ReactElement;

interface DataTableColumn<T> {
    key: string;
    header: React.ReactNode;
    cell: (row: T) => React.ReactNode;
    className?: string;
}
interface DataTableProps<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    className?: string;
    emptyMessage?: string;
}
declare const DataTable: <T extends Record<string, any>>(props: DataTableProps<T>) => React.ReactElement;

/**
 * Calendar component props interface
 * Extends react-day-picker DayPicker props and adds buttonVariant prop
 */
interface CalendarProps extends Omit<React.ComponentProps<typeof DayPicker>, "mode" | "selected" | "onSelect" | "defaultMonth" | "captionLayout" | "showOutsideDays" | "showWeekNumber" | "disabled"> {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"];
    mode?: "single" | "range" | "multiple";
    selected?: Date | {
        from?: Date;
        to?: Date;
    } | Date[] | undefined;
    onSelect?: (date: Date | {
        from?: Date;
        to?: Date;
    } | Date[] | undefined) => void;
    defaultMonth?: Date;
    captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "buttons" | "label";
    showOutsideDays?: boolean;
    showWeekNumber?: boolean;
    disabled?: (date: Date) => boolean;
    children?: React.ReactNode;
}
/**
 * CalendarDayButton component - A button for calendar day selection
 * @param props - CalendarDayButton props
 * @returns A CalendarDayButton component
 */
declare function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>): React.ReactElement;
/**
 * Calendar component - A date picker calendar
 *
 * Displays a calendar for selecting dates.
 * Built on react-day-picker for date handling.
 *
 * @param props - Calendar props including selected, onSelect, and standard DayPicker attributes
 * @returns A Calendar component
 *
 * @example
 * ```tsx
 * <Calendar selected={date} onSelect={setDate} />
 * <Calendar mode="range" selected={range} onSelect={setRange} />
 * ```
 */
declare const Calendar: React.NamedExoticComponent<CalendarProps>;

interface DatePickerProps {
    date?: Date;
    onDateChange?: (date: Date | undefined) => void;
    placeholder?: string;
    formatString?: string;
    variant?: "button" | "input";
    className?: string;
    disabled?: boolean;
}
declare function DatePicker({ date, onDateChange, placeholder, formatString, variant, className, disabled, }: DatePickerProps): React.ReactElement;

/**
 * CarouselApi type
 * Represents the Embla Carousel API instance
 */
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
/**
 * Carousel component props interface
 * Extends native div element props and adds carousel-specific props
 */
interface CarouselProps extends React.ComponentProps<"div"> {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
}
/**
 * CarouselContent component props interface
 * Extends native div element props
 */
interface CarouselContentProps extends React.ComponentProps<"div"> {
}
/**
 * CarouselItem component props interface
 * Extends native div element props
 */
interface CarouselItemProps extends React.ComponentProps<"div"> {
}
/**
 * CarouselPrevious component props interface
 * Extends Button props
 */
interface CarouselPreviousProps extends React.ComponentProps<typeof Button> {
}
/**
 * CarouselNext component props interface
 * Extends Button props
 */
interface CarouselNextProps extends React.ComponentProps<typeof Button> {
}
/**
 * Carousel component - A carousel/slider component
 *
 * Provides a carousel component with navigation controls.
 * Built on Embla Carousel for smooth scrolling.
 *
 * @param props - Carousel props including orientation, opts, plugins, setApi, and standard HTML div attributes
 * @returns A Carousel component
 *
 * @example
 * ```tsx
 * <Carousel>
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious />
 *   <CarouselNext />
 * </Carousel>
 * ```
 */
declare const Carousel: React.NamedExoticComponent<CarouselProps>;
/**
 * CarouselContent component - The content container for carousel items
 * @param props - CarouselContent props
 * @returns A CarouselContent component
 */
declare function CarouselContent({ className, ...props }: CarouselContentProps): React.ReactElement;
/**
 * CarouselItem component - An individual slide/item in the carousel
 * @param props - CarouselItem props
 * @returns A CarouselItem component
 */
declare function CarouselItem({ className, ...props }: CarouselItemProps): React.ReactElement;
/**
 * CarouselPrevious component - A button to navigate to the previous slide
 * @param props - CarouselPrevious props including variant and size
 * @returns A CarouselPrevious component
 */
declare function CarouselPrevious({ className, variant, size, ...props }: CarouselPreviousProps): React.ReactElement;
/**
 * CarouselNext component - A button to navigate to the next slide
 * @param props - CarouselNext props including variant and size
 * @returns A CarouselNext component
 */
declare function CarouselNext({ className, variant, size, ...props }: CarouselNextProps): React.ReactElement;

/**
 * Toaster component props interface
 * Extends sonner ToasterProps
 */
interface ToasterProps extends ToasterProps$1 {
}
/**
 * Toaster component - A toast notification system
 *
 * Provides toast notifications using sonner library.
 * Automatically adapts to the current theme.
 *
 * @param props - Toaster props including position, duration, and standard sonner ToasterProps
 * @returns A Toaster component
 *
 * @example
 * ```tsx
 * <Toaster position="top-right" />
 * ```
 */
declare const Toaster: ({ ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

/**
 * ScrollArea component props interface
 * Extends Radix UI ScrollArea primitive props
 */
interface ScrollAreaProps extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
}
/**
 * ScrollBar component props interface
 * Extends Radix UI ScrollAreaScrollbar primitive props
 */
interface ScrollBarProps extends React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
    orientation?: "vertical" | "horizontal";
}
/**
 * ScrollArea component - A scrollable container
 *
 * Provides a scrollable container with custom scrollbars.
 * Built on Radix UI primitives.
 *
 * @param props - ScrollArea props including standard Radix UI ScrollArea attributes
 * @returns A ScrollArea component
 *
 * @example
 * ```tsx
 * <ScrollArea className="h-72 w-48">
 *   <div>Long content...</div>
 * </ScrollArea>
 * ```
 */
declare function ScrollArea({ className, children, ...props }: ScrollAreaProps): React.ReactElement;
/**
 * ScrollBar component - A custom scrollbar for the ScrollArea
 * @param props - ScrollBar props including orientation
 * @returns A ScrollBar component
 */
declare function ScrollBar({ className, orientation, ...props }: ScrollBarProps): React.ReactElement;

/**
 * ResizablePanelGroup component props interface
 * Extends react-resizable-panels PanelGroup props
 */
interface ResizablePanelGroupProps extends React.ComponentProps<typeof ResizablePrimitive.PanelGroup> {
}
/**
 * ResizablePanel component props interface
 * Extends react-resizable-panels Panel props
 */
interface ResizablePanelProps extends React.ComponentProps<typeof ResizablePrimitive.Panel> {
}
/**
 * ResizableHandle component props interface
 * Extends react-resizable-panels PanelResizeHandle props and adds withHandle prop
 */
interface ResizableHandleProps extends React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> {
    withHandle?: boolean;
}
/**
 * ResizablePanelGroup component - A group of resizable panels
 *
 * Provides a container for resizable panels that can be resized by dragging.
 * Built on react-resizable-panels.
 *
 * @param props - ResizablePanelGroup props including direction and standard PanelGroup attributes
 * @returns A ResizablePanelGroup component
 *
 * @example
 * ```tsx
 * <ResizablePanelGroup direction="horizontal">
 *   <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
 *   <ResizableHandle />
 *   <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
 * </ResizablePanelGroup>
 * ```
 */
declare function ResizablePanelGroup({ className, ...props }: ResizablePanelGroupProps): React.ReactElement;
/**
 * ResizablePanel component - An individual resizable panel
 * @param props - ResizablePanel props including defaultSize, minSize, maxSize
 * @returns A ResizablePanel component
 */
declare function ResizablePanel({ ...props }: ResizablePanelProps): React.ReactElement;
/**
 * ResizableHandle component - A handle for resizing panels
 * @param props - ResizableHandle props including withHandle
 * @returns A ResizableHandle component
 */
declare function ResizableHandle({ withHandle, className, ...props }: ResizableHandleProps): React.ReactElement;

interface MaterialSymbolProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Name of the Material Symbol icon (e.g., "home", "arrow_forward", "settings")
     * Must match the icon name from Material Symbols library
     */
    name: string;
    /**
     * Size of the icon in pixels (default: 24)
     */
    size?: number;
    /**
     * Fill style: 0 = outlined, 1 = filled (default: 0)
     */
    fill?: 0 | 1;
    /**
     * Weight: 100-700 (default: 300)
     */
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    /**
     * Grade: -25 to 200 (default: 0)
     */
    grade?: number;
    /**
     * Optical size: 20-48 (default: 24)
     */
    opticalSize?: number;
}
/**
 * MaterialSymbol component for rendering Material Symbols icons
 *
 * @example
 * <MaterialSymbol name="home" size={24} />
 * <MaterialSymbol name="arrow_forward" size={20} fill={1} />
 */
declare function MaterialSymbol({ name, size, fill, weight, grade, opticalSize, className, style, ...props }: MaterialSymbolProps): react_jsx_runtime.JSX.Element;

/**
 * MaterialSymbolsProvider ensures Material Symbols font is loaded
 * Add this component to your root layout to ensure icons display correctly
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { MaterialSymbolsProvider } from "alize/components/material-symbols-provider"
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <MaterialSymbolsProvider />
 *         {children}
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
declare function MaterialSymbolsProvider(): null;

declare function cn(...inputs: ClassValue[]): string;

type Fidelity = "alize" | "lofi";
interface FidelityContextValue {
    fidelity: Fidelity;
    setFidelity: (fidelity: Fidelity) => void;
}
declare function FidelityProvider({ children, defaultFidelity, }: {
    children: React.ReactNode;
    defaultFidelity?: Fidelity;
}): React.ReactElement;
declare function useFidelity(): FidelityContextValue;

declare function FidelityToggle(): React.ReactElement;

declare function ThemeToggle(): React.ReactElement;

/**
 * Error context for additional error information
 */
interface ErrorContext {
    component?: string;
    action?: string;
    userId?: string;
    metadata?: Record<string, unknown>;
    [key: string]: unknown;
}
/**
 * Error handling utilities
 *
 * Provides utilities for handling errors in async operations and components.
 * Includes error logging, error transformation, and error boundary integration.
 *
 * @example
 * ```tsx
 * import { handleAsyncError, ErrorLogger } from 'alize/lib/error-handling'
 *
 * async function fetchData() {
 *   try {
 *     const response = await fetch('/api/data')
 *     return await handleAsyncError(async () => response.json())
 *   } catch (error) {
 *     ErrorLogger.log(error, { context: 'fetchData' })
 *     throw error
 *   }
 * }
 * ```
 */
/**
 * Error logger interface
 * Can be extended to integrate with error tracking services (Sentry, etc.)
 */
interface ErrorLogger {
    log(error: Error, context?: ErrorContext): void;
    logAsync(error: Error, context?: ErrorContext): Promise<void>;
}
/**
 * Global error logger instance
 * Can be replaced with a custom implementation
 */
declare const ErrorLogger: ErrorLogger;
/**
 * Custom error class for application-specific errors
 */
declare class AppError extends Error {
    code?: string | undefined;
    statusCode?: number | undefined;
    context?: ErrorContext | undefined;
    constructor(message: string, code?: string | undefined, statusCode?: number | undefined, context?: ErrorContext | undefined);
}
/**
 * Network error class
 */
declare class NetworkError extends AppError {
    constructor(message?: string, context?: ErrorContext);
}
/**
 * Validation error class
 */
declare class ValidationError extends AppError {
    fields?: Record<string, string> | undefined;
    constructor(message: string, fields?: Record<string, string> | undefined, context?: ErrorContext);
}
/**
 * Async error handler wrapper
 * Wraps async functions with error handling and logging
 *
 * @param fn - Async function to wrap
 * @param context - Error context for logging
 * @returns Promise that resolves with the function result or rejects with a handled error
 *
 * @example
 * ```tsx
 * const data = await handleAsyncError(
 *   async () => fetch('/api/data').then(r => r.json()),
 *   { component: 'DataFetcher', action: 'fetchData' }
 * )
 * ```
 */
declare function handleAsyncError<T>(fn: () => Promise<T>, context?: ErrorContext): Promise<T>;
/**
 * Safe async function wrapper
 * Returns a result object instead of throwing
 *
 * @param fn - Async function to wrap
 * @param context - Error context for logging
 * @returns Promise that resolves with { success: true, data } or { success: false, error }
 *
 * @example
 * ```tsx
 * const result = await safeAsync(
 *   async () => fetch('/api/data').then(r => r.json())
 * )
 *
 * if (result.success) {
 *   console.log(result.data)
 * } else {
 *   console.error(result.error)
 * }
 * ```
 */
declare function safeAsync<T>(fn: () => Promise<T>, context?: ErrorContext): Promise<{
    success: true;
    data: T;
} | {
    success: false;
    error: Error;
}>;
/**
 * Retry async operation with exponential backoff
 *
 * @param fn - Async function to retry
 * @param options - Retry options
 * @returns Promise that resolves with the function result
 *
 * @example
 * ```tsx
 * const data = await retryAsync(
 *   () => fetch('/api/data').then(r => r.json()),
 *   { maxRetries: 3, initialDelay: 1000 }
 * )
 * ```
 */
declare function retryAsync<T>(fn: () => Promise<T>, options?: {
    maxRetries?: number;
    initialDelay?: number;
    maxDelay?: number;
    retryable?: (error: Error) => boolean;
}): Promise<T>;
/**
 * Timeout wrapper for async operations
 *
 * @param fn - Async function to wrap
 * @param timeoutMs - Timeout in milliseconds
 * @returns Promise that resolves with the function result or rejects with timeout error
 *
 * @example
 * ```tsx
 * const data = await withTimeout(
 *   () => fetch('/api/data').then(r => r.json()),
 *   5000
 * )
 * ```
 */
declare function withTimeout<T>(fn: () => Promise<T>, timeoutMs: number): Promise<T>;
/**
 * Error message formatter
 * Formats error messages for user display
 *
 * @param error - Error to format
 * @returns User-friendly error message
 */
declare function formatErrorMessage(error: unknown): string;
/**
 * Check if error is retryable
 * Determines if an error should trigger a retry
 *
 * @param error - Error to check
 * @returns True if error is retryable
 */
declare function isRetryableError(error: unknown): boolean;

/**
 * Validation schemas using Zod
 *
 * This file provides reusable Zod schemas for form validation.
 * These schemas can be used with react-hook-form via @hookform/resolvers/zod.
 *
 * @example
 * ```tsx
 * import { z } from 'zod'
 * import { zodResolver } from '@hookform/resolvers/zod'
 * import { useForm } from 'react-hook-form'
 * import { emailSchema, passwordSchema } from 'alize/lib/validation'
 *
 * const formSchema = z.object({
 *   email: emailSchema,
 *   password: passwordSchema,
 * })
 *
 * const form = useForm({
 *   resolver: zodResolver(formSchema),
 *   defaultValues: {
 *     email: '',
 *     password: '',
 *   },
 * })
 * ```
 */

/**
 * Email validation schema
 * Validates email format
 */
declare const emailSchema: z.ZodString;
/**
 * Password validation schema
 * Validates password strength (minimum 8 characters)
 */
declare const passwordSchema: z.ZodString;
/**
 * Strong password validation schema
 * Validates strong password requirements
 */
declare const strongPasswordSchema: z.ZodString;
/**
 * Username validation schema
 * Validates username format (3-20 alphanumeric characters and underscores)
 */
declare const usernameSchema: z.ZodString;
/**
 * URL validation schema
 * Validates URL format
 */
declare const urlSchema: z.ZodString;
/**
 * Phone number validation schema
 * Validates phone number format (basic international format)
 */
declare const phoneSchema: z.ZodString;
/**
 * Date validation schema
 * Validates date format
 */
declare const dateSchema: z.ZodString;
/**
 * Number validation schema
 * Validates numeric input
 */
declare const numberSchema: z.ZodString;
/**
 * Positive number validation schema
 * Validates positive numeric input
 */
declare const positiveNumberSchema: z.ZodString;
/**
 * Integer validation schema
 * Validates integer input
 */
declare const integerSchema: z.ZodString;
/**
 * Required string validation schema
 * Validates non-empty string
 */
declare const requiredStringSchema: z.ZodString;
/**
 * Optional string validation schema
 * Allows empty string or validates string if provided
 */
declare const optionalStringSchema: z.ZodOptional<z.ZodString>;
/**
 * Textarea validation schema
 * Validates textarea content with optional min/max length
 */
declare const textareaSchema: (minLength?: number, maxLength?: number) => z.ZodString;
/**
 * Checkbox validation schema
 * Validates checkbox checked state
 */
declare const checkboxSchema: z.ZodBoolean;
/**
 * Select validation schema
 * Validates select option selection
 */
declare const selectSchema: <T extends string>(options: readonly T[]) => z.ZodEnum<{ [k_1 in T]: k_1; } extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never>;
/**
 * File validation schema
 * Validates file upload
 */
declare const fileSchema: z.ZodOptional<z.ZodCustom<File, File>>;
/**
 * File size validation schema
 * Validates file size (in bytes)
 */
declare const fileSizeSchema: (maxSizeInBytes: number) => z.ZodCustom<File, File>;
/**
 * File type validation schema
 * Validates file MIME type
 */
declare const fileTypeSchema: (allowedTypes: string[]) => z.ZodCustom<File, File>;
/**
 * Common form schemas
 * Pre-configured schemas for common form patterns
 */
declare const commonSchemas: {
    /**
     * Login form schema
     */
    readonly login: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>;
    /**
     * Registration form schema
     */
    readonly registration: z.ZodObject<{
        username: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        confirmPassword: z.ZodString;
    }, z.core.$strip>;
    /**
     * Contact form schema
     */
    readonly contact: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
    /**
     * Profile update schema
     */
    readonly profile: z.ZodObject<{
        username: z.ZodString;
        email: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        bio: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
/**
 * Type inference helpers
 * Extract TypeScript types from Zod schemas
 */
type EmailInput = z.infer<typeof emailSchema>;
type PasswordInput = z.infer<typeof passwordSchema>;
type UsernameInput = z.infer<typeof usernameSchema>;
type LoginFormInput = z.infer<typeof commonSchemas.login>;
type RegistrationFormInput = z.infer<typeof commonSchemas.registration>;
type ContactFormInput = z.infer<typeof commonSchemas.contact>;
type ProfileFormInput = z.infer<typeof commonSchemas.profile>;

/**
 * Content sanitization utilities
 *
 * Provides utilities for sanitizing user input and dynamic content.
 * Helps prevent XSS attacks and ensure safe content rendering.
 *
 * @example
 * ```tsx
 * import { sanitizeHtml, sanitizeUrl } from 'alize/lib/sanitization'
 *
 * const safeHtml = sanitizeHtml(userInput)
 * const safeUrl = sanitizeUrl(userUrl)
 * ```
 */
/**
 * Sanitize HTML content
 * Removes potentially dangerous HTML tags and attributes
 *
 * @param html - HTML string to sanitize
 * @param allowedTags - Array of allowed HTML tags (default: safe tags only)
 * @returns Sanitized HTML string
 *
 * @example
 * ```tsx
 * const safeHtml = sanitizeHtml('<script>alert("xss")</script><p>Safe content</p>')
 * // Returns: '<p>Safe content</p>'
 * ```
 */
declare function sanitizeHtml(html: string, allowedTags?: string[]): string;
/**
 * Sanitize URL
 * Validates and sanitizes URLs to prevent XSS and protocol-based attacks
 *
 * @param url - URL string to sanitize
 * @param allowedProtocols - Array of allowed URL protocols (default: ['http', 'https', 'mailto'])
 * @returns Sanitized URL or empty string if invalid
 *
 * @example
 * ```tsx
 * const safeUrl = sanitizeUrl('javascript:alert("xss")')
 * // Returns: ''
 *
 * const safeUrl = sanitizeUrl('https://example.com')
 * // Returns: 'https://example.com'
 * ```
 */
declare function sanitizeUrl(url: string, allowedProtocols?: string[]): string;
/**
 * Sanitize text content
 * Escapes HTML entities to prevent XSS
 *
 * @param text - Text string to sanitize
 * @returns Escaped HTML string
 *
 * @example
 * ```tsx
 * const safeText = sanitizeText('<script>alert("xss")</script>')
 * // Returns: '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
 * ```
 */
declare function sanitizeText(text: string): string;
/**
 * Sanitize object keys
 * Removes potentially dangerous keys from objects
 *
 * @param obj - Object to sanitize
 * @param dangerousKeys - Array of keys to remove (default: common dangerous keys)
 * @returns New object with dangerous keys removed
 *
 * @example
 * ```tsx
 * const safeObj = sanitizeObjectKeys({ __proto__: {}, normalKey: 'value' })
 * // Returns: { normalKey: 'value' }
 * ```
 */
declare function sanitizeObjectKeys<T extends Record<string, unknown>>(obj: T, dangerousKeys?: string[]): Partial<T>;
/**
 * Sanitize file name
 * Removes potentially dangerous characters from file names
 *
 * @param fileName - File name to sanitize
 * @returns Sanitized file name
 *
 * @example
 * ```tsx
 * const safeName = sanitizeFileName('../../../etc/passwd')
 * // Returns: 'etc_passwd'
 * ```
 */
declare function sanitizeFileName(fileName: string): string;
/**
 * Validate and sanitize email
 * Validates email format and sanitizes input
 *
 * @param email - Email string to validate and sanitize
 * @returns Sanitized email or null if invalid
 *
 * @example
 * ```tsx
 * const safeEmail = sanitizeEmail('  user@example.com  ')
 * // Returns: 'user@example.com'
 * ```
 */
declare function sanitizeEmail(email: string): string | null;

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ComponentType<ErrorFallbackProps>;
}
interface ErrorFallbackProps {
    error: Error;
    resetError: () => void;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}
/**
 * Error Boundary component for catching React errors
 *
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    resetError: () => void;
    render(): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | react_jsx_runtime.JSX.Element | null | undefined;
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AppError, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText, type ButtonProps, Calendar, CalendarDayButton, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Checkbox, CheckboxCard, type CheckboxCardProps, type CheckboxProps, Collapsible, CollapsibleContent, CollapsibleTrigger, Combobox, type ComboboxOption, type ComboboxProps, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, type ContactFormInput, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, DataTable, type DataTableColumn, type DataTableProps, DatePicker, type DatePickerProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, type EmailInput, Empty, ErrorBoundary, type ErrorContext, ErrorLogger, FidelityProvider, FidelityToggle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputGroup, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, type InputProps, Item, Kbd, KbdGroup, Label, type LoginFormInput, MaterialSymbol, MaterialSymbolsProvider, Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NativeSelect, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NetworkError, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, type PasswordInput, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, type ProfileFormInput, Progress, RadioGroup, RadioGroupCardItem, RadioGroupItem, type RegistrationFormInput, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, Slider, Spinner, Switch, SwitchCard, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ThemeToggle, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipTrigger, TypographyBlockquote, TypographyCode, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyP, type UsernameInput, ValidationError, avatarVariants, buttonVariants, checkboxSchema, cn, commonSchemas, dateSchema, emailSchema, fileSchema, fileSizeSchema, fileTypeSchema, formatErrorMessage, handleAsyncError, integerSchema, isRetryableError, navigationMenuTriggerStyle, numberSchema, optionalStringSchema, passwordSchema, phoneSchema, positiveNumberSchema, requiredStringSchema, retryAsync, safeAsync, sanitizeEmail, sanitizeFileName, sanitizeHtml, sanitizeObjectKeys, sanitizeText, sanitizeUrl, selectSchema, strongPasswordSchema, textareaSchema, urlSchema, useFidelity, useFormField, useSidebar, usernameSchema, withTimeout };
