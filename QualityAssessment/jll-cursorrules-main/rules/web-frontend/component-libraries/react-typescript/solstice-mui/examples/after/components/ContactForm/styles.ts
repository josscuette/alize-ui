// ✅ Styling approach: Use styled components directly (see index.tsx)
//
// OLD APPROACH (no longer needed):
// - Created helper functions that accept tokens as parameters
// - Required passing tokens through component props
// - Needed AppContext to access tokens
//
// NEW APPROACH (recommended):
// - Use styled() components with theme parameter
// - Access theme directly in styled component callback
// - No props drilling needed
// - All Solstice tokens automatically typed
//
// EXAMPLE with correct Solstice token paths:
// const MyBox = styled(Box)(({ theme }: { theme: Theme }) => ({
//   padding: theme.fixedSpacing.micro[4],                         // ✅ Fully typed!
//   backgroundColor: theme.palette.surface.base.secondarySubdued, // Was: background.default
//   borderRadius: theme.radii.stronger,
//   color: theme.palette.text.base.default,                       // Was: text.primary
// }))

export {}
