import type { Metadata } from "next";
import { Source_Sans_3, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { MaterialSymbolsProvider } from "@/components/material-symbols-provider";
import { GlobalNavigation } from "@/components/global-navigation";
import { NavigationProvider } from "@/contexts/navigation-context";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans3.variable} ${geistMono.variable} antialiased`}
      >
        <MaterialSymbolsProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          value={{
            dark: "theme-dark",
          }}
        >
          <NavigationProvider>
            <GlobalNavigation />
            {children}
            {/* <ErrorBoundaryWrapper> temporairement désactivé pour debug */}
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
