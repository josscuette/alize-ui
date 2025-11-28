/**
 * Alize Component Library
 * 
 * A comprehensive React component library based on shadcn/ui with custom design tokens
 * and Material Symbols icons.
 * 
 * @example
 * ```tsx
 * import { Button, Input, Card } from 'alize'
 * ```
 */

// Atoms
export { Button, buttonVariants } from './components/ui/button'
export type { ButtonProps } from './components/ui/button'
export { Input } from './components/ui/input'
export type { InputProps } from './components/ui/input'
export { Label } from './components/ui/label'
export { Badge } from './components/ui/badge'
export { Avatar, AvatarImage, AvatarFallback, avatarVariants } from './components/ui/avatar'
export { Skeleton } from './components/ui/skeleton'
export { Spinner } from './components/ui/spinner'
export { Separator } from './components/ui/separator'
export { Kbd, KbdGroup } from './components/ui/kbd'
export { Toggle } from './components/ui/toggle'
export { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group'
export { Tooltip, TooltipContent, TooltipTrigger } from './components/ui/tooltip'
export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyCode,
} from './components/ui/typography'
export { AspectRatio } from './components/ui/aspect-ratio'
export { Empty } from './components/ui/empty'
export { Item } from './components/ui/item'

// Molecules
export { Checkbox, CheckboxCard } from './components/ui/checkbox'
export type { CheckboxProps, CheckboxCardProps } from './components/ui/checkbox'
export { Switch, SwitchCard } from './components/ui/switch'
export { RadioGroup, RadioGroupItem, RadioGroupCardItem } from './components/ui/radio-group'
export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './components/ui/select'
export { Textarea } from './components/ui/textarea'
export { Slider } from './components/ui/slider'
export { Progress } from './components/ui/progress'
export { Alert, AlertTitle, AlertDescription } from './components/ui/alert'
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from './components/ui/card'
export { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/ui/collapsible'
export { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from './components/ui/popover'
export { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card'
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from './components/ui/dropdown-menu'
export {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from './components/ui/context-menu'
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './components/ui/command'
export { Combobox } from './components/ui/combobox'
export type { ComboboxOption, ComboboxProps } from './components/ui/combobox'
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from './components/ui/input-otp'
export { InputGroup } from './components/ui/input-group'
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './components/ui/breadcrumb'
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './components/ui/pagination'
export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './components/ui/button-group'
export { NativeSelect } from './components/ui/native-select'
export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './components/ui/field'

// Organisms
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './components/ui/alert-dialog'
export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from './components/ui/drawer'
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './components/ui/sheet'
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from './components/ui/sidebar'
export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './components/ui/navigation-menu'
export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './components/ui/menubar'
export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from './components/ui/form'
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table'
export { DataTable } from './components/ui/data-table'
export type { DataTableColumn, DataTableProps } from './components/ui/data-table'
export { Calendar, CalendarDayButton } from './components/ui/calendar'
export { DatePicker } from './components/ui/date-picker'
export type { DatePickerProps } from './components/ui/date-picker'
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from './components/ui/carousel'
export { Chart } from './components/ui/chart'
export type { ChartProps } from './components/ui/chart'
export { Highchart, useHighchartsTheme, useAlizeChartColors, useSequentialPalette, generateSequentialPalette, useDivergentPalette, useDivergentColors, generateDivergentPalette, getContrastTextColor } from './components/ui/highchart'
export type { HighchartProps, AlizeChartColors, DivergentColors } from './components/ui/highchart'
export { Toaster } from './components/ui/sonner'
export { ScrollArea, ScrollBar } from './components/ui/scroll-area'
export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './components/ui/resizable'

// Utilities
export { MaterialSymbol } from './components/material-symbol'
export { MaterialSymbolsProvider } from './components/material-symbols-provider'
export { cn } from './lib/utils'

// Theme
export { FidelityProvider, useFidelity } from './components/fidelity-provider'
export { FidelityToggle } from './components/fidelity-toggle'
export { ThemeToggle } from './components/theme-toggle'

// Error Handling
export {
  ErrorLogger,
  AppError,
  NetworkError,
  ValidationError,
  handleAsyncError,
  safeAsync,
  retryAsync,
  withTimeout,
  formatErrorMessage,
  isRetryableError,
} from './lib/error-handling'
export type { ErrorContext } from './lib/error-handling'

// Validation
export {
  emailSchema,
  passwordSchema,
  strongPasswordSchema,
  usernameSchema,
  urlSchema,
  phoneSchema,
  dateSchema,
  numberSchema,
  positiveNumberSchema,
  integerSchema,
  requiredStringSchema,
  optionalStringSchema,
  textareaSchema,
  checkboxSchema,
  selectSchema,
  fileSchema,
  fileSizeSchema,
  fileTypeSchema,
  commonSchemas,
} from './lib/validation'
export type {
  EmailInput,
  PasswordInput,
  UsernameInput,
  LoginFormInput,
  RegistrationFormInput,
  ContactFormInput,
  ProfileFormInput,
} from './lib/validation'

// Sanitization
export {
  sanitizeHtml,
  sanitizeUrl,
  sanitizeText,
  sanitizeObjectKeys,
  sanitizeFileName,
  sanitizeEmail,
} from './lib/sanitization'

// Error Boundary
export { ErrorBoundary } from './components/error-boundary'

// Re-export types
export type { VariantProps } from 'class-variance-authority'

