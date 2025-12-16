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
        {/* Preconnect to Google Fonts for faster font loading (for Inter font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols font is now loaded locally via @font-face in globals.css */}
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
