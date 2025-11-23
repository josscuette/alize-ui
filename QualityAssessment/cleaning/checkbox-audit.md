# 🔍 AUDIT COMPLET : components/ui/checkbox.tsx

**Date :** 2025-11-21  
**Phase :** 1 - Audit avant migration vers Foundation Layer  
**Statut :** ⏳ En attente de migration

---

## 📊 Résumé Exécutif

### Fichier analysé
- **Fichier :** `components/ui/checkbox.tsx`
- **Lignes :** 1-95
- **Complexité :** Moyenne
- **Composants :** 2 (Checkbox, CheckboxCard)
- **Classes identifiées :** ~40 classes Tailwind

### Vue d'ensemble
Le composant `Checkbox` utilise principalement des classes sémantiques avec quelques classes spécifiques. Il nécessite une migration partielle vers la Foundation Layer. Le composant `CheckboxCard` est une variante avec label et description qui utilise également des classes sémantiques.

---

## 🔎 Classes Identifiées - Composant Checkbox

### 1. **Layout & Structure**
```typescript
"size-4"                  // Size - spécifique au composant (checkbox carré)
"shrink-0"                // Shrink - spécifique au composant
"peer"                    // Peer modifier - spécifique au composant (Radix UI)
```

### 2. **Border & Stroke**
```typescript
"border"                  // Border base - spécifique au composant
"border-semantic-stroke-default" // ✅ SÉMANTIQUE - peut utiliser stroke.default
"data-[state=checked]:border-semantic-surface-interaction-strong" // ✅ SÉMANTIQUE - peut utiliser surface.interactionStrong avec data-state
"focus-visible:border-semantic-surface-interaction-strong" // ✅ SÉMANTIQUE - peut utiliser stroke.interaction ou surface.interactionStrong
"aria-invalid:border-semantic-surface-rag-danger-strong" // ✅ SÉMANTIQUE - peut utiliser states.invalidBorder
```

### 3. **Background & Surface**
```typescript
"data-[state=unchecked]:bg-transparent" // Background transparent - spécifique au composant
"data-[state=checked]:bg-semantic-surface-interaction-strong" // ✅ SÉMANTIQUE - peut utiliser surface.interactionStrong avec data-state
```

### 4. **Text Colors**
```typescript
"data-[state=checked]:text-white" // Text white - spécifique au composant (pour l'icône check)
```

### 5. **Radius**
```typescript
"rounded-[4px]"           // ✅ Peut utiliser radius.sm
```

### 6. **Focus & Ring States**
```typescript
"focus-visible:ring-semantic-surface-interaction-strong/50" // ✅ SÉMANTIQUE - peut utiliser states.focusRing (mais states.focusRing inclut déjà ring-[3px])
"focus-visible:ring-[3px]" // Ring width - inclus dans states.focusRing
"aria-invalid:ring-semantic-surface-rag-danger-strong/20" // ✅ SÉMANTIQUE - peut utiliser states.invalidRing
"dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40" // ✅ SÉMANTIQUE - inclus dans states.invalidRing
```

### 7. **Disabled States**
```typescript
"disabled:cursor-not-allowed" // ✅ Peut utiliser states.disabledCursor
"disabled:opacity-50"         // ✅ Inclus dans states.disabled
```

### 8. **Visual Effects**
```typescript
"outline-none"            // Outline - spécifique au composant
```

### 9. **Animation**
```typescript
"transition-all"          // ✅ Peut utiliser animation.transitionAll
```

### 10. **Indicator (CheckboxPrimitive.Indicator)**
```typescript
"grid place-content-center" // Layout - spécifique au composant
"text-current"            // Text color - spécifique au composant
"transition-none"         // Transition - spécifique au composant
```

---

## 🔎 Classes Identifiées - Composant CheckboxCard

### 1. **Label Container**
```typescript
"group relative flex gap-2 items-start px-4 py-3 rounded-[8px] border transition-all cursor-pointer"
// Layout
"relative flex gap-2 items-start" // Layout - spécifique au composant
"px-4 py-3"                       // Padding - spécifique au composant
"rounded-[8px]"                   // Radius - spécifique au composant (pas dans Foundation Layer)
"border"                          // Border base - spécifique au composant
"cursor-pointer"                  // Cursor - spécifique au composant
"transition-all"                  // ✅ Peut utiliser animation.transitionAll
```

### 2. **Border & Stroke (CheckboxCard)**
```typescript
"border-semantic-stroke-subdued"  // ✅ SÉMANTIQUE - peut utiliser stroke.subdued
"has-[[data-state=checked]]:border-semantic-stroke-default" // ✅ SÉMANTIQUE - peut utiliser stroke.default avec has- modifier
```

### 3. **Background & Surface (CheckboxCard)**
```typescript
"bg-transparent"                  // Background transparent - spécifique au composant
"has-[[data-state=checked]]:bg-semantic-surface-whisper" // ✅ SÉMANTIQUE - peut utiliser surface.whisper avec has- modifier
```

### 4. **Checkbox dans CheckboxCard**
```typescript
"mt-0.5 shrink-0 cursor-pointer" // Layout - spécifique au composant
// (Même classes que le composant Checkbox principal)
```

### 5. **Label Text**
```typescript
"text-sm leading-5"               // Typography - spécifique au composant
"text-semantic-text-default"      // ✅ SÉMANTIQUE - peut utiliser text.default
"group-has-[[data-state=checked]]:font-normal" // Font weight - spécifique au composant
```

### 6. **Description Text**
```typescript
"text-sm leading-5"               // Typography - spécifique au composant
"text-semantic-text-subdued"      // ✅ SÉMANTIQUE - peut utiliser text.subdued
```

---

## 🗺️ Mapping vers Foundation Layer

### ✅ Classes Migrables - Checkbox

| Classe Actuelle | Foundation Layer | Notes |
|----------------|------------------|-------|
| `border-semantic-stroke-default` | `stroke.default` | ✅ Parfait match |
| `data-[state=checked]:bg-semantic-surface-interaction-strong` | `surface.interactionStrong` avec `data-[state=checked]:` | ⚠️ Nécessite prefix data-state |
| `data-[state=checked]:border-semantic-surface-interaction-strong` | `surface.interactionStrong` avec `data-[state=checked]:` | ⚠️ Nécessite prefix data-state |
| `focus-visible:border-semantic-surface-interaction-strong` | `stroke.interaction` ou `surface.interactionStrong` avec `focus-visible:` | ⚠️ Nécessite prefix focus-visible |
| `focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]` | `states.focusRing` | ✅ Parfait match |
| `aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40` | `states.invalidRing` | ✅ Parfait match |
| `aria-invalid:border-semantic-surface-rag-danger-strong` | `states.invalidBorder` | ✅ Parfait match |
| `disabled:cursor-not-allowed disabled:opacity-50` | `states.disabled` + `states.disabledCursor` | ✅ Parfait match |
| `rounded-[4px]` | `radius.sm` | ✅ Parfait match |
| `transition-all` | `animation.transitionAll` | ✅ Parfait match |

### ✅ Classes Migrables - CheckboxCard

| Classe Actuelle | Foundation Layer | Notes |
|----------------|------------------|-------|
| `border-semantic-stroke-subdued` | `stroke.subdued` | ✅ Parfait match |
| `has-[[data-state=checked]]:border-semantic-stroke-default` | `stroke.default` avec `has-[[data-state=checked]]:` | ⚠️ Nécessite prefix has- |
| `has-[[data-state=checked]]:bg-semantic-surface-whisper` | `surface.whisper` avec `has-[[data-state=checked]]:` | ⚠️ Nécessite prefix has- |
| `text-semantic-text-default` | `text.default` | ✅ Parfait match |
| `text-semantic-text-subdued` | `text.subdued` | ✅ Parfait match |
| `transition-all` | `animation.transitionAll` | ✅ Parfait match |

### ⚠️ Classes avec Prefixes Data-State

Les classes suivantes utilisent des prefixes `data-[state=checked]:` ou `has-[[data-state=checked]]:` qui ne peuvent pas être directement remplacées par la Foundation Layer car elles nécessitent ces prefixes spécifiques.

**Solution :** Garder ces classes inline mais utiliser les valeurs de la Foundation Layer :
- `data-[state=checked]:bg-semantic-surface-interaction-strong` → `data-[state=checked]:${surface.interactionStrong}` (mais cela ne fonctionne pas en TypeScript)
- **Meilleure approche :** Créer des presets dans `states.ts` pour les états checked/unchecked

### 🔧 Classes Spécifiques au Composant (à garder inline)

| Classe | Raison |
|--------|--------|
| `size-4 shrink-0` | Size spécifique au checkbox |
| `peer` | Modifier Radix UI |
| `border` | Border base |
| `bg-transparent` | Background transparent |
| `text-white` | Text white pour l'icône check |
| `outline-none` | Outline spécifique |
| `grid place-content-center` | Layout pour l'indicator |
| `text-current` | Text color pour l'indicator |
| `transition-none` | Transition spécifique pour l'indicator |
| `relative flex gap-2 items-start px-4 py-3` | Layout spécifique au CheckboxCard |
| `rounded-[8px]` | Radius spécifique (pas dans Foundation Layer) |
| `cursor-pointer` | Cursor spécifique |
| `text-sm leading-5` | Typography spécifique |
| `font-normal` | Font weight spécifique |
| `mt-0.5` | Margin spécifique |

---

## 🎯 Plan de Migration

### Option Recommandée : Migration Partielle

**Classes à migrer directement :**
1. ✅ `stroke.default` → remplacer `border-semantic-stroke-default`
2. ✅ `stroke.subdued` → remplacer `border-semantic-stroke-subdued`
3. ✅ `states.focusRing` → remplacer `focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]`
4. ✅ `states.invalidRing` → remplacer `aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40`
5. ✅ `states.invalidBorder` → remplacer `aria-invalid:border-semantic-surface-rag-danger-strong`
6. ✅ `states.disabled` + `states.disabledCursor` → remplacer `disabled:cursor-not-allowed disabled:opacity-50`
7. ✅ `radius.sm` → remplacer `rounded-[4px]`
8. ✅ `text.default` → remplacer `text-semantic-text-default`
9. ✅ `text.subdued` → remplacer `text-semantic-text-subdued`
10. ✅ `animation.transitionAll` → remplacer `transition-all`

**Classes avec prefixes data-state (à garder inline mais utiliser valeurs Foundation Layer) :**
- `data-[state=checked]:bg-semantic-surface-interaction-strong` → garder inline mais utiliser `surface.interactionStrong` dans un commentaire
- `data-[state=checked]:border-semantic-surface-interaction-strong` → garder inline mais utiliser `surface.interactionStrong` dans un commentaire
- `focus-visible:border-semantic-surface-interaction-strong` → garder inline mais utiliser `surface.interactionStrong` dans un commentaire
- `has-[[data-state=checked]]:bg-semantic-surface-whisper` → garder inline mais utiliser `surface.whisper` dans un commentaire
- `has-[[data-state=checked]]:border-semantic-stroke-default` → garder inline mais utiliser `stroke.default` dans un commentaire

**Note :** Pour les classes avec prefixes, on ne peut pas utiliser directement la Foundation Layer car TypeScript/JavaScript ne permet pas la concaténation de strings dans les classes Tailwind. On garde ces classes inline mais on peut les documenter avec des commentaires référençant la Foundation Layer.

---

## 📋 Recommandation Finale

### ✅ Migration Partielle Recommandée

**Classes à migrer :**
1. ✅ `stroke.default` et `stroke.subdued`
2. ✅ `states.focusRing`
3. ✅ `states.invalidRing` et `states.invalidBorder`
4. ✅ `states.disabled` et `states.disabledCursor`
5. ✅ `radius.sm`
6. ✅ `text.default` et `text.subdued`
7. ✅ `animation.transitionAll`

**Classes à garder inline :**
- Toutes les classes avec prefixes `data-[state=checked]:` et `has-[[data-state=checked]]:`
- Toutes les classes spécifiques au composant (size, layout, typography, etc.)

---

## 🔍 Points d'Attention

### 1. **Data-State Prefixes**
Les classes avec `data-[state=checked]:` et `has-[[data-state=checked]]:` ne peuvent pas être directement remplacées par la Foundation Layer car elles nécessitent ces prefixes spécifiques.

**Solution :** Garder ces classes inline mais documenter qu'elles utilisent les valeurs de la Foundation Layer (par exemple, `surface.interactionStrong`, `surface.whisper`, `stroke.default`).

### 2. **Focus Border**
Le composant utilise `focus-visible:border-semantic-surface-interaction-strong` qui utilise `surface` au lieu de `stroke`. C'est cohérent avec le design (le border devient la même couleur que le background checked).

### 3. **Radius CheckboxCard**
Le composant `CheckboxCard` utilise `rounded-[8px]` qui n'est pas dans la Foundation Layer. C'est un radius spécifique à ce composant.

### 4. **Text White**
Le composant utilise `data-[state=checked]:text-white` pour l'icône check. C'est spécifique au composant et ne peut pas être remplacé par la Foundation Layer.

---

## 📊 Statistiques

- **Classes totales identifiées :** ~40
- **Classes migrables vers Foundation Layer :** ~10-12
- **Classes avec prefixes data-state :** ~5
- **Classes spécifiques au composant :** ~25

**Taux de migration estimé :** ~30% (migration partielle)

---

## ✅ Conclusion

Le composant `Checkbox` nécessite une **migration partielle** vers la Foundation Layer. La plupart des classes sémantiques peuvent être migrées directement, mais les classes avec prefixes `data-state` et `has-` doivent rester inline car elles nécessitent ces prefixes spécifiques.

**Prochaine étape :** Attendre confirmation avant de procéder à la migration.

