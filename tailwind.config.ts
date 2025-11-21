import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Pages essentielles
    "./app/layout.tsx",
    "./app/page.tsx",
    "./app/components/page.tsx",
    
    // Composants UI
    "./components/ui/**/*.tsx",
    
    // Composants utilitaires essentiels
    "./components/global-header.tsx",
    "./components/theme-toggle.tsx",
    "./components/material-symbol.tsx",
    "./components/material-symbols-provider.tsx",
    "./components/component-showcase.tsx",
    
    // Utilitaires
    "./lib/utils.ts",
    "./hooks/use-mobile.ts",
    
    // Exclure le dossier cleaning pour éviter que Tailwind scanne les scripts de migration
    // qui contiennent des patterns dans les commentaires
    "!./cleaning/**/*",
  ],
};

export default config;

