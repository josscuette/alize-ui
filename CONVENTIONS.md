# Conventions de Code - Alize

Ce document décrit les conventions et meilleures pratiques pour ce projet.

## React Components

### Structure des composants

1. **Ordre des imports** :
   ```typescript
   // 1. React et React hooks
   import * as React from "react";
   import { useState, useEffect } from "react";
   
   // 2. Bibliothèques tierces
   import { Slot } from "@radix-ui/react-slot";
   import { cva } from "class-variance-authority";
   
   // 3. Utilitaires et hooks locaux
   import { cn } from "@/lib/utils";
   import { useTheme } from "next-themes";
   
   // 4. Composants locaux
   import { Button } from "@/components/ui/button";
   import { MaterialSymbol } from "@/components/material-symbol";
   
   // 5. Types
   import type { VariantProps } from "class-variance-authority";
   ```

2. **Définition des composants** :
   - Utiliser `function` pour les composants nommés
   - Utiliser `export` direct pour les composants principaux
   - Utiliser `export { Component }` pour les composants secondaires

3. **Props** :
   - Toujours typer les props avec TypeScript
   - Utiliser `React.ComponentProps` pour étendre les props HTML natives
   - Utiliser `VariantProps` pour les variants de composants

### Exemple de composant

```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ComponentProps extends React.ComponentProps<"div"> {
  variant?: "default" | "primary";
}

export function Component({
  className,
  variant = "default",
  children,
  ...props
}: ComponentProps) {
  return (
    <div
      className={cn(
        "base-classes",
        variant === "primary" && "primary-classes",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

## Styling avec Tailwind CSS

### Classes Tailwind

1. **Ordre des classes** :
   - Layout (display, position, flex, grid)
   - Spacing (margin, padding)
   - Sizing (width, height)
   - Typography (font, text)
   - Visual (background, border, shadow)
   - Effects (opacity, transition)
   - States (hover, focus, disabled)

2. **Utilisation de `cn()`** :
   - Toujours utiliser `cn()` pour combiner les classes
   - Grouper les classes par catégorie avec des commentaires si nécessaire

3. **Variables CSS** :
   - Utiliser `var(--semantic-text-default)`, `var(--semantic-surface-default)`, etc. pour les tokens de design
   - Utiliser `var(--foreground)`, `var(--background)` pour les couleurs de base
   - Ne pas utiliser de valeurs hardcodées pour les couleurs

### Exemple de styling

```typescript
className={cn(
  // Layout
  "flex items-center justify-center",
  // Spacing
  "px-4 py-2 gap-2",
  // Typography
  "text-sm font-medium",
  // Visual
  "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)]",
  // Effects
  "transition-all",
  // States
  "hover:opacity-90 disabled:opacity-50",
  className
)}
```

## Material Symbols

1. **Weight par défaut** : Toujours utiliser `weight={300}`
2. **Size** : Utiliser des tailles cohérentes (16, 20, 24)
3. **Couleur** : Laisser les composants parents gérer la couleur via CSS

## Composants shadcn/ui

1. **Ne pas modifier directement** les composants de base dans `components/ui/`
2. **Créer des variantes** si nécessaire plutôt que de modifier les composants existants
3. **Respecter la structure** avec `data-slot` pour les éléments principaux
4. **Utiliser CVA** pour les variants complexes

## Fichiers CSS globaux

1. **Ne pas ajouter de règles CSS globales** sauf pour :
   - Styles de base (reset, typography)
   - Styles pour Material Symbols
   - Variables CSS de thème

2. **Éviter les sélecteurs CSS complexes** dans `globals.css`
3. **Préférer les classes Tailwind** ou les sélecteurs dans les composants

## Performance

1. **Utiliser `React.memo`** pour les composants coûteux si nécessaire
2. **Éviter les re-renders inutiles** avec `useMemo` et `useCallback`
3. **Lazy loading** pour les composants lourds avec `React.lazy`

## Accessibilité

1. **Toujours inclure** `aria-label` pour les boutons icon-only
2. **Utiliser les éléments sémantiques** appropriés (button, nav, main, etc.)
3. **Gérer le focus** avec `focus-visible:ring-*`
4. **Support clavier** pour tous les composants interactifs

## Règles Critiques du Projet

### Gestion des Serveurs de Développement

⚠️ **RÈGLE CRITIQUE** : Toujours arrêter le serveur avant de modifier le code

1. **Avant toute modification de code** :
   - Vérifier les processus en cours : `ps aux | grep -i "next dev" | grep -v grep`
   - Arrêter tous les serveurs en cours d'exécution avant d'éditer des fichiers
   - Cela évite la corruption du cache `.next`

2. **Avant de démarrer un serveur** :
   - Vérifier s'il existe déjà des processus Next.js en cours
   - Si plusieurs serveurs sont détectés, tous les arrêter d'abord
   - Ne jamais lancer plusieurs instances de serveur en même temps

3. **Procédure de démarrage du serveur** :
   ```bash
   # 1. Vérifier les processus existants
   ps aux | grep -i "next dev" | grep -v grep
   
   # 2. Arrêter tous les processus trouvés
   # 3. Libérer le port si nécessaire
   lsof -ti:3000 | xargs kill -9 2>/dev/null
   
   # 4. Démarrer le serveur
   npm run dev
   ```

**Raison** : Les modifications de code pendant l'exécution du serveur peuvent corrompre le cache Next.js et causer des erreurs. Plusieurs instances de serveur peuvent entrer en conflit et bloquer le port.

### Dossiers à Ne Jamais Modifier

⚠️ **RÈGLE CRITIQUE** : Ne jamais modifier ou supprimer les dossiers suivants :

1. **`.next/`** - Cache de build Next.js
   - Géré automatiquement par Next.js
   - Se régénère lors de `npm run dev` ou `npm run build`
   - Ne jamais exécuter `rm -rf .next` ou commandes similaires
   - Si des problèmes de build surviennent, relancer `npm run dev` pour régénérer

2. **`node_modules/`** - Dépendances npm
   - Géré par le gestionnaire de paquets (npm/yarn)
   - Se régénère lors de `npm install`
   - Ne jamais modifier ou supprimer manuellement
   - Si des problèmes surviennent, utiliser `npm install` pour réinstaller

**Raison** : Ces dossiers sont générés automatiquement et leur modification peut corrompre l'installation du projet.

