# 🔍 AUDIT COMPLET : components/ui/input.tsx

**Date :** 2025-11-21  
**Phase :** 1 - Audit avant migration vers Foundation Layer  
**Statut :** ⏳ En attente de migration

---

## 📊 Résumé Exécutif

### Fichier analysé
- **Fichier :** `components/ui/input.tsx`
- **Lignes :** 1-22
- **Complexité :** Moyenne
- **Classes identifiées :** ~30 classes Tailwind

### Vue d'ensemble
Le composant `Input` est un composant de formulaire simple qui utilise principalement des classes legacy shadcn avec quelques classes sémantiques pour les états d'erreur. Il nécessite une migration partielle vers la Foundation Layer.

---

## 🔎 Classes Identifiées

### 1. **Layout & Structure**
```typescript
"h-9"                    // Height - peut utiliser size.md
"w-full"                  // Width - spécifique au composant
"min-w-0"                // Min width - spécifique au composant
"px-3"                    // Padding horizontal - inclus dans size.md
"py-1"                    // Padding vertical - spécifique au composant
```

### 2. **Background & Surface**
```typescript
"bg-transparent"          // Background transparent - spécifique au composant
"dark:bg-input/30"        // Legacy shadcn - À CONSERVER (pas de token sémantique équivalent)
```

### 3. **Border & Stroke**
```typescript
"border"                  // Border base - spécifique au composant
"border-input"            // Legacy shadcn - À CONSERVER
"focus-visible:border-ring" // Legacy shadcn - À CONSERVER
"aria-invalid:border-semantic-stroke-rag-danger-default" // ✅ SÉMANTIQUE - peut utiliser stroke.destructive
```

### 4. **Text Colors**
```typescript
"text-base"               // Font size - spécifique au composant
"md:text-sm"              // Responsive font size - spécifique au composant
"file:text-foreground"    // Legacy shadcn - À CONSERVER
"placeholder:text-muted-foreground" // Legacy shadcn - À CONSERVER
"selection:bg-primary"    // Legacy shadcn - À CONSERVER
"selection:text-primary-foreground" // Legacy shadcn - À CONSERVER
```

### 5. **Radius**
```typescript
"rounded-md"              // ✅ Peut utiliser radius.md (mais déjà inclus dans size.md si on utilise size.md)
```

### 6. **Focus & Ring States**
```typescript
"focus-visible:ring-ring/50"        // Legacy shadcn - À CONSERVER
"focus-visible:ring-[3px]"          // Ring width - peut utiliser states.focusRing (mais contient déjà ring-[3px])
"aria-invalid:ring-semantic-surface-rag-danger-strong/20" // ✅ SÉMANTIQUE - peut utiliser states.invalidRing
"dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40" // ✅ SÉMANTIQUE - inclus dans states.invalidRing
```

### 7. **Disabled States**
```typescript
"disabled:pointer-events-none"     // ✅ Peut utiliser states.disabled
"disabled:cursor-not-allowed"       // ✅ Peut utiliser states.disabledCursor
"disabled:opacity-50"               // ✅ Inclus dans states.disabled
```

### 8. **File Input Specific**
```typescript
"file:inline-flex"        // File input styling - spécifique au composant
"file:h-7"                // File input height - spécifique au composant
"file:border-0"           // File input border - spécifique au composant
"file:bg-transparent"     // File input background - spécifique au composant
"file:text-sm"            // File input text size - spécifique au composant
"file:font-medium"        // File input font weight - spécifique au composant
```

### 9. **Visual Effects**
```typescript
"shadow-xs"               // Shadow - spécifique au composant (pas de token sémantique)
"outline-none"            // Outline - spécifique au composant
```

### 10. **Animation**
```typescript
"transition-[color,box-shadow]" // Transition spécifique - peut utiliser animation.transitionColors (mais transition-[color,box-shadow] est plus spécifique)
```

---

## 🗺️ Mapping vers Foundation Layer

### ✅ Classes Migrables

| Classe Actuelle | Foundation Layer | Notes |
|----------------|------------------|-------|
| `h-9 px-3` | `size.md` | **ATTENTION** : `size.md` inclut déjà `h-9 px-3 gap-2 rounded-md`. Mais `input` n'a pas besoin de `gap-2` et utilise `py-1` au lieu de `gap-2`. |
| `rounded-md` | `radius.md` | Déjà inclus dans `size.md` si on utilise `size.md` |
| `aria-invalid:border-semantic-stroke-rag-danger-default` | `stroke.destructive` | Mais `stroke.destructive` = `border-semantic-stroke-rag-danger-default` (sans aria-invalid) |
| `aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40` | `states.invalidRing` | ✅ Parfait match |
| `disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50` | `states.disabled` + `states.disabledCursor` | ✅ Parfait match |
| `focus-visible:ring-[3px]` | Inclus dans `states.focusRing` | Mais `states.focusRing` inclut aussi `ring-semantic-surface-interaction-strong/50` |

### ⚠️ Classes Legacy à Conserver

| Classe | Raison |
|--------|--------|
| `border-input` | Legacy shadcn, pas de token sémantique équivalent |
| `dark:bg-input/30` | Legacy shadcn, pas de token sémantique équivalent |
| `focus-visible:border-ring` | Legacy shadcn, pas de token sémantique équivalent |
| `focus-visible:ring-ring/50` | Legacy shadcn, pas de token sémantique équivalent |
| `file:text-foreground` | Legacy shadcn, spécifique aux file inputs |
| `placeholder:text-muted-foreground` | Legacy shadcn, pas de token sémantique équivalent |
| `selection:bg-primary` | Legacy shadcn, spécifique à la sélection de texte |
| `selection:text-primary-foreground` | Legacy shadcn, spécifique à la sélection de texte |

### 🔧 Classes Spécifiques au Composant (à garder inline)

| Classe | Raison |
|--------|--------|
| `w-full min-w-0` | Layout spécifique au composant |
| `py-1` | Padding vertical spécifique (différent de `gap-2` dans size.md) |
| `bg-transparent` | Background spécifique |
| `border` | Border base |
| `text-base md:text-sm` | Typography responsive spécifique |
| `shadow-xs` | Shadow spécifique |
| `outline-none` | Outline spécifique |
| `transition-[color,box-shadow]` | Transition spécifique |
| Toutes les classes `file:*` | Styling spécifique aux file inputs |

---

## 🎯 Plan de Migration

### Option 1 : Utiliser `size.md` partiellement
**Problème :** `size.md` inclut `gap-2` qui n'est pas nécessaire pour `input`, et `input` utilise `py-1` au lieu de `gap-2`.

**Solution :** Ne pas utiliser `size.md` complètement, mais extraire seulement les parties nécessaires :
- `h-9` → peut venir de `size.md` mais on doit l'extraire
- `px-3` → peut venir de `size.md` mais on doit l'extraire
- `rounded-md` → peut utiliser `radius.md`

### Option 2 : Créer un preset spécifique pour les inputs
**Recommandation :** Créer un preset `size.input` dans la Foundation Layer qui correspond exactement aux besoins des inputs.

### Option 3 : Utiliser les classes Foundation Layer disponibles et garder le reste inline
**Approche pragmatique :** 
- Utiliser `states.disabled` + `states.disabledCursor`
- Utiliser `states.invalidRing`
- Utiliser `stroke.destructive` pour `aria-invalid:border-semantic-stroke-rag-danger-default`
- Utiliser `radius.md` pour `rounded-md`
- Garder le reste inline (legacy + spécifique)

---

## 📋 Recommandation Finale

### ✅ Migration Partielle Recommandée

**Classes à migrer :**
1. ✅ `states.disabled` + `states.disabledCursor` → remplacer `disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`
2. ✅ `states.invalidRing` → remplacer `aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40`
3. ✅ `stroke.destructive` → remplacer `aria-invalid:border-semantic-stroke-rag-danger-default` (mais nécessite `aria-invalid:` prefix)
4. ✅ `radius.md` → remplacer `rounded-md` (mais seulement si on ne peut pas utiliser `size.md`)

**Classes à garder inline :**
- Toutes les classes legacy shadcn (`border-input`, `dark:bg-input/30`, `focus-visible:border-ring`, etc.)
- Toutes les classes spécifiques au composant (`w-full`, `min-w-0`, `py-1`, `text-base`, `shadow-xs`, `file:*`, etc.)

**Problème identifié :**
- `stroke.destructive` = `border-semantic-stroke-rag-danger-default` mais on a besoin de `aria-invalid:border-semantic-stroke-rag-danger-default`
- **Solution :** Créer `states.invalidBorder` dans la Foundation Layer (déjà existant !)

---

## 🔍 Points d'Attention

### 1. **Size Preset**
Le composant utilise `h-9 px-3` qui correspond partiellement à `size.md`, mais :
- `size.md` inclut `gap-2` (non nécessaire pour input)
- `input` utilise `py-1` au lieu de `gap-2`
- **Décision :** Ne pas utiliser `size.md` complètement, garder `h-9 px-3` inline

### 2. **Focus Ring**
Le composant utilise `focus-visible:ring-ring/50 focus-visible:ring-[3px]` (legacy shadcn), mais `states.focusRing` utilise `ring-semantic-surface-interaction-strong/50 ring-[3px]`.
- **Décision :** Garder les classes legacy inline car elles utilisent `ring-ring` (shadcn) et non `ring-semantic-*`

### 3. **Invalid Border**
Le composant utilise `aria-invalid:border-semantic-stroke-rag-danger-default` qui correspond à `stroke.destructive` mais avec le prefix `aria-invalid:`.
- **Solution :** Utiliser `states.invalidBorder` qui contient déjà `aria-invalid:border-semantic-surface-rag-danger-strong`
- **ATTENTION :** `states.invalidBorder` utilise `border-semantic-surface-rag-danger-strong` et non `border-semantic-stroke-rag-danger-default`
- **Vérification nécessaire :** Vérifier si `border-semantic-surface-rag-danger-strong` est correct ou si on doit utiliser `border-semantic-stroke-rag-danger-default`

### 4. **Transition**
Le composant utilise `transition-[color,box-shadow]` qui est plus spécifique que `animation.transitionColors` (qui utilise `transition-colors`).
- **Décision :** Garder `transition-[color,box-shadow]` inline car c'est plus spécifique

---

## 📊 Statistiques

- **Classes totales identifiées :** ~30
- **Classes migrables vers Foundation Layer :** ~5-6
- **Classes legacy à conserver :** ~8
- **Classes spécifiques au composant :** ~16

**Taux de migration estimé :** ~20% (migration partielle)

---

## ✅ Conclusion

Le composant `Input` nécessite une **migration partielle** vers la Foundation Layer. La plupart des classes sont soit legacy shadcn (à conserver), soit spécifiques au composant (à garder inline). Seules les classes d'états (disabled, invalid) peuvent être migrées vers la Foundation Layer.

**Prochaine étape :** Attendre confirmation avant de procéder à la migration.

