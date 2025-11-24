import type { Metadata } from "next";
import "alize/dist/alize.css";
import { MaterialSymbolsProvider } from "alize";

export const metadata: Metadata = {
  title: "Alize Next.js Boilerplate",
  description: "Example Next.js 15 app using Alize component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MaterialSymbolsProvider />
        {children}
      </body>
    </html>
  );
}

