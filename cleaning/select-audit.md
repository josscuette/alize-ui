# 🔍 AUDIT COMPLET : components/ui/select.tsx

**Date :** 2025-11-21  
**Phase :** 1 - Audit avant migration vers Foundation Layer  
**Statut :** ⏳ En attente de migration

---

## 📊 Résumé Exécutif

### Fichier analysé
- **Fichier :** `components/ui/select.tsx`
- **Lignes :** 1-213
- **Complexité :** Élevée
- **Composants :** 9 (Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton)
- **Classes identifiées :** ~50 classes Tailwind

### Vue d'ensemble
Le composant `Select` est un composant complexe avec plusieurs sous-composants. Le `SelectTrigger` est similaire à `Input` et utilise principalement des classes legacy shadcn avec quelques classes sémantiques. Il nécessite une migration partielle vers la Foundation Layer.

---

## 🔎 Classes Identifiées - Composant SelectTrigger

### 1. **Layout & Structure**
```typescript
"h-9 w-full min-w-0 px-3 py-1" // Layout - similaire à Input
"flex items-center justify-between gap-2 whitespace-nowrap" // Layout spécifique au select
"data-[size=default]:h-9 data-[size=sm]:h-8 data-[size=sm]:text-sm" // Size variants - spécifique au composant
```

### 2. **Background & Surface**
```typescript
"bg-transparent dark:bg-input/30" // Background - legacy shadcn
```

### 3. **Border & Stroke**
```typescript
"border border-input" // Border - legacy shadcn
"focus-visible:border-ring" // Focus border - legacy shadcn
"aria-invalid:border-semantic-stroke-rag-danger-default" // ✅ SÉMANTIQUE - peut utiliser stroke.destructive avec aria-invalid prefix
```

### 4. **Radius**
```typescript
"rounded-md" // ✅ Peut utiliser radius.md
```

### 5. **Typography**
```typescript
"text-base md:text-sm" // Typography responsive - spécifique au composant
"data-[placeholder]:text-muted-foreground" // Placeholder - legacy shadcn
"placeholder:text-muted-foreground" // Placeholder - legacy shadcn
```

### 6. **Focus & Ring States**
```typescript
"focus-visible:ring-ring/50 focus-visible:ring-[3px]" // Focus ring - legacy shadcn
"aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40" // ✅ SÉMANTIQUE - peut utiliser states.invalidRing
```

### 7. **Disabled States**
```typescript
"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50" // ✅ Peut utiliser states.disabled + states.disabledCursor
```

### 8. **Visual Effects**
```typescript
"shadow-xs outline-none" // Visual - spécifique au composant
```

### 9. **Animation**
```typescript
"transition-[color,box-shadow]" // Transition spécifique - similaire à Input
```

### 10. **Legacy Shadcn Classes**
```typescript
"border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30" // Legacy shadcn - À CONSERVER
```

### 11. **Icon (MaterialSymbol)**
```typescript
"text-semantic-icon-subdued" // ✅ SÉMANTIQUE - peut utiliser icon.subdued
```

---

## 🔎 Classes Identifiées - Composant SelectContent

### 1. **Background & Surface**
```typescript
"bg-popover text-popover-foreground" // Legacy shadcn - À CONSERVER
```

### 2. **Border & Stroke**
```typescript
"border" // Border base - spécifique au composant
```

### 3. **Radius**
```typescript
"rounded-md" // ✅ Peut utiliser radius.md
```

### 4. **Visual Effects**
```typescript
"shadow-md" // Shadow - spécifique au composant
"relative z-50" // Z-index - spécifique au composant
"overflow-x-hidden overflow-y-auto" // Overflow - spécifique au composant
```

### 5. **Animation (Radix UI)**
```typescript
"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" // Animations Radix UI - spécifique au composant
```

### 6. **Layout & Structure**
```typescript
"max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin)" // Layout avec variables CSS - spécifique au composant
```

---

## 🔎 Classes Identifiées - Composant SelectLabel

### 1. **Typography**
```typescript
"text-muted-foreground px-2 py-1.5 text-xs" // Legacy shadcn - À CONSERVER
```

---

## 🔎 Classes Identifiées - Composant SelectItem

### 1. **Layout & Structure**
```typescript
"relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm" // Layout - spécifique au composant
```

### 2. **Background & Surface**
```typescript
"focus:bg-accent focus:text-accent-foreground" // Legacy shadcn - À CONSERVER
```

### 3. **Radius**
```typescript
"rounded-sm" // Radius spécifique - pas dans Foundation Layer
```

### 4. **Disabled States**
```typescript
"data-[disabled]:pointer-events-none data-[disabled]:opacity-50" // ✅ Peut utiliser states.disabled (mais avec prefix data-[disabled]:)
```

### 5. **Visual Effects**
```typescript
"outline-hidden select-none" // Visual - spécifique au composant
```

### 6. **SVG Styles**
```typescript
"[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" // SVG styling - spécifique au composant
```

---

## 🔎 Classes Identifiées - Composant SelectSeparator

### 1. **Background & Surface**
```typescript
"bg-border" // Legacy shadcn - À CONSERVER
```

### 2. **Layout & Structure**
```typescript
"pointer-events-none -mx-1 my-1 h-px" // Layout - spécifique au composant
```

---

## 🔎 Classes Identifiées - Composant SelectScrollDownButton

### 1. **Icon (MaterialSymbol)**
```typescript
"text-semantic-icon-subdued" // ✅ SÉMANTIQUE - peut utiliser icon.subdued
```

---

## 🗺️ Mapping vers Foundation Layer

### ✅ Classes Migrables - SelectTrigger

| Classe Actuelle | Foundation Layer | Notes |
|----------------|------------------|-------|
| `rounded-md` | `radius.md` | ✅ Parfait match |
| `aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40` | `states.invalidRing` | ✅ Parfait match |
| `aria-invalid:border-semantic-stroke-rag-danger-default` | `stroke.destructive` avec `aria-invalid:` prefix | ⚠️ Nécessite prefix aria-invalid |
| `disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50` | `states.disabled` + `states.disabledCursor` | ✅ Parfait match |
| `text-semantic-icon-subdued` (MaterialSymbol) | `icon.subdued` | ✅ Parfait match |

### ✅ Classes Migrables - SelectContent

| Classe Actuelle | Foundation Layer | Notes |
|----------------|------------------|-------|
| `rounded-md` | `radius.md` | ✅ Parfait match |

### ⚠️ Classes Legacy à Conserver

| Classe | Raison |
|--------|--------|
| `border-input` | Legacy shadcn, pas de token sémantique équivalent |
| `dark:bg-input/30` | Legacy shadcn, pas de token sémantique équivalent |
| `focus-visible:border-ring` | Legacy shadcn, pas de token sémantique équivalent |
| `focus-visible:ring-ring/50` | Legacy shadcn, pas de token sémantique équivalent |
| `placeholder:text-muted-foreground` | Legacy shadcn, pas de token sémantique équivalent |
| `selection:bg-primary selection:text-primary-foreground` | Legacy shadcn, spécifique à la sélection de texte |
| `bg-popover text-popover-foreground` | Legacy shadcn, spécifique au popover |
| `text-muted-foreground` | Legacy shadcn, pas de token sémantique équivalent |
| `focus:bg-accent focus:text-accent-foreground` | Legacy shadcn, spécifique au focus |
| `bg-border` | Legacy shadcn, pas de token sémantique équivalent |

### 🔧 Classes Spécifiques au Composant (à garder inline)

| Classe | Raison |
|--------|--------|
| `h-9 w-full min-w-0 px-3 py-1` | Layout spécifique (similaire à Input) |
| `flex items-center justify-between gap-2 whitespace-nowrap` | Layout spécifique au select |
| `data-[size=default]:h-9 data-[size=sm]:h-8 data-[size=sm]:text-sm` | Size variants spécifiques |
| `text-base md:text-sm` | Typography responsive spécifique |
| `shadow-xs outline-none` | Visual effects spécifiques |
| `transition-[color,box-shadow]` | Transition spécifique |
| `data-[placeholder]:text-muted-foreground` | Placeholder spécifique |
| `*:data-[slot=select-value]:line-clamp-1 ...` | Content styles spécifiques |
| Toutes les classes d'animation Radix UI | Animations spécifiques à Radix UI |
| `rounded-sm` | Radius spécifique (pas dans Foundation Layer) |
| `data-[disabled]:pointer-events-none data-[disabled]:opacity-50` | Disabled avec prefix data-[disabled]: |

---

## 🎯 Plan de Migration

### Option Recommandée : Migration Partielle

**Classes à migrer directement :**
1. ✅ `radius.md` → remplacer `rounded-md` (SelectTrigger et SelectContent)
2. ✅ `states.invalidRing` → remplacer `aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40`
3. ✅ `states.disabled` + `states.disabledCursor` → remplacer `disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`
4. ✅ `icon.subdued` → remplacer `text-semantic-icon-subdued` (MaterialSymbol)

**Classes à garder inline :**
- Toutes les classes legacy shadcn (`border-input`, `dark:bg-input/30`, `focus-visible:border-ring`, etc.)
- Toutes les classes spécifiques au composant (layout, typography, animations Radix UI, etc.)
- Classes avec prefixes (`aria-invalid:border-semantic-stroke-rag-danger-default`, `data-[disabled]:...`)

---

## 📋 Recommandation Finale

### ✅ Migration Partielle Recommandée

**Classes à migrer :**
1. ✅ `radius.md` (pour SelectTrigger et SelectContent)
2. ✅ `states.invalidRing`
3. ✅ `states.disabled` + `states.disabledCursor`
4. ✅ `icon.subdued` (pour les MaterialSymbol)

**Classes à garder inline :**
- Toutes les classes legacy shadcn
- Toutes les classes spécifiques au composant
- Classes avec prefixes data-state et aria-invalid

---

## 🔍 Points d'Attention

### 1. **SelectTrigger similaire à Input**
Le `SelectTrigger` utilise des styles très similaires à `Input`. On peut suivre la même approche de migration que pour `Input`.

### 2. **Invalid Border**
Le composant utilise `aria-invalid:border-semantic-stroke-rag-danger-default` qui nécessite le prefix `aria-invalid:`. On garde cette classe inline mais on peut la documenter comme utilisant `stroke.destructive`.

### 3. **Animations Radix UI**
Le composant `SelectContent` utilise des animations Radix UI spécifiques (`data-[state=open]:animate-in`, etc.). Ces classes doivent rester inline car elles sont spécifiques à Radix UI.

### 4. **Legacy Shadcn Classes**
La plupart des classes sont legacy shadcn (`border-input`, `bg-popover`, `text-muted-foreground`, etc.). Ces classes doivent être conservées car elles n'ont pas d'équivalent sémantique.

---

## 📊 Statistiques

- **Classes totales identifiées :** ~50
- **Classes migrables vers Foundation Layer :** ~5-6
- **Classes legacy shadcn :** ~15
- **Classes spécifiques au composant :** ~30

**Taux de migration estimé :** ~10-15% (migration partielle)

---

## ✅ Conclusion

Le composant `Select` nécessite une **migration partielle** vers la Foundation Layer. La plupart des classes sont soit legacy shadcn (à conserver), soit spécifiques au composant (à garder inline). Seules quelques classes sémantiques peuvent être migrées directement.

**Prochaine étape :** Attendre confirmation avant de procéder à la migration.

