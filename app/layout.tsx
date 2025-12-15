import type { Metadata } from "next";
import { Source_Sans_3, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { FidelityProvider } from "@/components/fidelity-provider";
import { GlobalNavigation } from "@/components/global-navigation";
import { NavigationProvider } from "@/contexts/navigation-context";
import { Toaster } from "@/components/ui/sonner";
import { AlizeDevToolsProvider } from "@/components/alize-dev-tools";
// import { ErrorBoundaryWrapper } from "@/components/error-boundary-wrapper"; // Temporairement désactivé pour debug
import "./globals.css";

/**
 * Material Symbols font URL with display=block to prevent FOIT
 * Using block instead of swap to keep icons invisible until loaded (cleaner UX)
 */
const MATERIAL_SYMBOLS_URL = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block";

const sourceSans3 = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alize - Component Library",
  description: "A comprehensive component library based on shadcn/ui with custom design tokens and Material Symbols icons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${sourceSans3.variable} ${geistMono.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload Material Symbols font CSS */}
        <link rel="preload" href={MATERIAL_SYMBOLS_URL} as="style" />
        {/* Load Material Symbols font */}
        <link rel="stylesheet" href={MATERIAL_SYMBOLS_URL} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          value={{
            dark: "theme-dark",
          }}
        >
          <FidelityProvider>
            <AlizeDevToolsProvider>
            <NavigationProvider>
              <GlobalNavigation />
              {children}
              <Toaster />
              {/* <ErrorBoundaryWrapper> temporairement désactivé pour debug */}
            </NavigationProvider>
            </AlizeDevToolsProvider>
          </FidelityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
