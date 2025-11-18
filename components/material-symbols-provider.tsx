"use client"

import { useEffect } from "react"

const MATERIAL_SYMBOLS_URL =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"

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
export function MaterialSymbolsProvider() {
  useEffect(() => {
    // Check if link already exists
    const existingLink = document.querySelector(
      `link[href="${MATERIAL_SYMBOLS_URL}"]`
    )

    if (existingLink) {
      return
    }

    // Create and inject link tag
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = MATERIAL_SYMBOLS_URL
    link.crossOrigin = "anonymous"

    // Insert in head
    document.head.appendChild(link)

    // Cleanup function (though link will persist)
    return () => {
      // Optionally remove on unmount, but usually we want to keep it
      // link.remove()
    }
  }, [])

  return null
}

