import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Pages essentielles
    "./app/layout.tsx",
    "./app/page.tsx",
    "./app/components/page.tsx",
    
    // Composants UI (depuis /src)
    "./src/components/ui/**/*.tsx",
    
    // Composants utilitaires essentiels (depuis /src)
    "./src/components/global-header.tsx",
    "./src/components/theme-toggle.tsx",
    "./src/components/material-symbol.tsx",
    "./src/components/material-symbols-provider.tsx",
    "./src/components/component-showcase.tsx",
    
    // Utilitaires (depuis /src)
    "./src/lib/utils.ts",
    "./src/hooks/use-mobile.ts",
    
    // Exclure le dossier cleaning pour éviter que Tailwind scanne les scripts de migration
    // qui contiennent des patterns dans les commentaires
    "!./cleaning/**/*",
  ],
};

export default config;

