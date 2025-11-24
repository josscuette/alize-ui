# Audit de Structure du Projet Alize

## État Actuel

### ✅ Déjà bien organisé dans `/src/`
- `/src/components/` - Tous les composants React
- `/src/foundation/` - Foundation Layer (remplace `/styles/`)
- `/src/lib/` - Utilitaires (utils, validation, error-handling, etc.)
- `/src/hooks/` - Hooks React
- `/src/styles/` - CSS source (alize.css)
- `/src/tailwind/` - Preset et plugin Tailwind
- `/src/index.ts` - Point d'entrée principal

### ⚠️ Duplications à nettoyer

#### 1. `/lib/` (racine) vs `/src/lib/`
- **Statut** : Identiques
- **Action** : Supprimer `/lib/` (garder `/src/lib/`)
- **Impact** : Aucun, car `app/` utilise `@/lib` qui résout vers `src/lib/`

#### 2. `/hooks/` (racine) vs `/src/hooks/`
- **Statut** : Identiques
- **Action** : Supprimer `/hooks/` (garder `/src/hooks/`)
- **Impact** : Aucun, car `app/` utilise `@/hooks` qui résout vers `src/hooks/`

#### 3. `/styles/` (racine) vs `/src/foundation/`
- **Statut** : `/styles/` est l'ancien nom, `/src/foundation/` est le nouveau
- **Action** : Supprimer `/styles/` (garder `/src/foundation/`)
- **Impact** : Vérifier `src/components/theme-toggle.tsx` qui importe depuis `../styles`

### 🔴 Manquant dans `/src/`

#### 4. `/contexts/` (racine)
- **Statut** : Existe seulement à la racine
- **Action** : Déplacer `/contexts/` → `/src/contexts/`
- **Impact** : Aucun, car `app/` utilise `@/contexts` qui résout vers `src/contexts/` (mais le dossier n'existe pas encore dans src/)

### ⚠️ Fichiers à corriger

#### 5. `index.ts` (racine)
- **Problème** : Mélange d'exports depuis `./components/` (ancien) et `./src/index` (nouveau)
- **Action** : Nettoyer pour ne garder que `export * from './src/index'`
- **Impact** : Important pour la compatibilité

## Plan de Réorganisation

### Phase 1 : Créer `/src/contexts/`
1. Créer `/src/contexts/`
2. Déplacer `/contexts/navigation-context.tsx` → `/src/contexts/navigation-context.tsx`
3. Vérifier que `@/contexts` fonctionne toujours

### Phase 2 : Corriger `index.ts`
1. Nettoyer `index.ts` pour ne garder que `export * from './src/index'`
2. Supprimer tous les exports depuis `./components/`

### Phase 3 : Corriger les imports dans `/src/`
1. Vérifier `src/components/theme-toggle.tsx` qui importe depuis `../styles`
2. Corriger pour utiliser `../foundation` à la place

### Phase 4 : Supprimer les duplications
1. Supprimer `/lib/` (garder `/src/lib/`)
2. Supprimer `/hooks/` (garder `/src/hooks/`)
3. Supprimer `/styles/` (garder `/src/foundation/`)

### Phase 5 : Vérifications finales
1. Vérifier que tous les imports fonctionnent
2. Vérifier que le build fonctionne
3. Vérifier que l'app Next.js fonctionne

## Structure Cible

```
/
├── src/                    # ✅ Tout le code source
│   ├── components/         # Composants React
│   ├── contexts/          # 🔄 À créer/déplacer
│   ├── foundation/        # Foundation Layer
│   ├── hooks/             # Hooks React
│   ├── lib/               # Utilitaires
│   ├── styles/            # CSS source
│   ├── tailwind/          # Preset et plugin
│   └── index.ts           # Point d'entrée
│
├── app/                   # ✅ Next.js App Router (reste à la racine)
├── dist/                  # ✅ Build output (généré)
├── examples/              # ✅ Exemples (reste à la racine)
├── scripts/               # ✅ Scripts de build (reste à la racine)
├── docs/                  # ✅ Documentation (reste à la racine)
│
├── index.ts               # ⚠️ À nettoyer (réexport depuis src/index.ts)
│
├── lib/                   # ❌ À supprimer (duplication)
├── hooks/                 # ❌ À supprimer (duplication)
├── styles/                # ❌ À supprimer (remplacé par foundation/)
└── contexts/              # ❌ À déplacer vers src/contexts/
```

## Fichiers qui restent à la racine (correct)

- Configuration : `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `tsup.config.ts`, `vitest.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`
- Documentation : `README.md`, `ARCHITECTURE.md`, `CONVENTIONS.md`, `INSTALLATION.md`, etc.
- Build : `dist/`, `.next/`
- Exemples : `examples/`
- Scripts : `scripts/`
- App Next.js : `app/` (structure Next.js standard)

