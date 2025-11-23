// ✅ No custom prop types needed for tokens!
//
// OLD APPROACH: Props included tokens parameter
// - StyledFormProps passed tokens as prop
// - Required AppContext and token extraction
//
// NEW APPROACH:
// - Use useTheme() hook directly in components
// - No token props needed
// - Cleaner component interfaces
// - Better TypeScript support
//
// The theme is automatically available everywhere within
// SolsticeThemeProvider context - no manual passing required!

export type {}
