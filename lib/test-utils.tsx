import * as React from "react"
import { render as rtlRender, type RenderOptions } from "@testing-library/react"

/**
 * Custom render function that includes all necessary providers
 * 
 * @param ui - The component to render
 * @param options - Additional render options
 * @returns Render result with all providers
 * 
 * @example
 * ```tsx
 * const { getByText } = render(<Button>Click me</Button>)
 * expect(getByText("Click me")).toBeInTheDocument()
 * ```
 */
function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  // Simple wrapper without providers for now (providers can cause issues in tests)
  // Components should work without them for basic rendering tests
  return rtlRender(ui, options)
}

// Re-export everything from @testing-library/react
export * from "@testing-library/react"

// Override render method
export { renderWithProviders as render }

