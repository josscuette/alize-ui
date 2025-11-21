# 🔍 AUDIT COMPLET : components/ui/radio-group.tsx

**Date :** 2025-11-21  
**Phase :** 1 - Audit avant migration vers Foundation Layer  
**Statut :** ⏳ En attente de migration

---

## 📊 Résumé Exécutif

### Fichier analysé
- **Fichier :** `components/ui/radio-group.tsx`
- **Lignes :** 1-135
- **Complexité :** Moyenne
- **Composants :** 3 (RadioGroup, RadioGroupItem, RadioGroupCardItem)
- **Classes identifiées :** ~35 classes Tailwind

### Vue d'ensemble
Le composant `RadioGroup` est similaire au `Checkbox` dans sa structure. Il utilise principalement des classes sémantiques avec quelques classes spécifiques. Il nécessite une migration partielle vers la Foundation Layer.

---

## 🔎 Classes Identifiées - Composant RadioGroup

### 1. **Layout & Structure**
```typescript
"grid gap-3"              // Layout - spécifique au composant (wrapper)
```

---

## 🔎 Classes Identifiées - Composant RadioGroupItem

### 1. **Layout & Structure**
```typescript
"aspect-square size-4 shrink-0" // Size - spécifique au composant (radio button carré)
```

### 2. **Border & Stroke**
```typescript
"border"                 // Border base - spécifique au composant
"border-semantic-stroke-default" // ✅ SÉMANTIQUE - peut utiliser stroke.default
"aria-invalid:border-semantic-surface-rag-danger-strong" // ✅ SÉMANTIQUE - peut utiliser states.invalidBorder
```

### 3. **Background & Surface**
```typescript
"data-[state=unchecked]:bg-transparent" // Background transparent - spécifique au composant
"data-[state=checked]:bg-semantic-surface-interaction-strong" // ✅ SÉMANTIQUE - peut utiliser surface.interactionStrong avec data-state
```

### 4. **Radius**
```typescript
"rounded-3xl"             // ✅ Peut utiliser radius["3xl"]
"data-[state=checked]:rounded-full" // ✅ Peut utiliser radius.full
```

### 5. **Focus & Ring States**
```typescript
"focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]" // ✅ SÉMANTIQUE - peut utiliser states.focusRing
"aria-invalid:ring-semantic-surface-rag-danger-strong/20" // ✅ SÉMANTIQUE - peut utiliser states.invalidRing
"dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40" // ✅ SÉMANTIQUE - inclus dans states.invalidRing
```

### 6. **Disabled States**
```typescript
"disabled:cursor-not-allowed" // ✅ Peut utiliser states.disabledCursor
"disabled:opacity-50"         // ✅ Inclus dans states.disabled
```

### 7. **Visual Effects**
```typescript
"outline-none"            // Outline - spécifique au composant
```

### 8. **Animation**
```typescript
"transition-[background-color,border-color,box-shadow]" // Transition spécifique - peut utiliser animation.transitionColors (mais transition-[background-color,border-color,box-shadow] est plus spécifique)
```

### 9. **Indicator (RadioGroupPrimitive.Indicator)**
```typescript
"relative flex items-center justify-center" // Layout - spécifique au composant
```

### 10. **White Circle Indicator**
```typescript
"absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" // Layout & Visual - spécifique au composant
```

---

## 🔎 Classes Identifiées - Composant RadioGroupCardItem

### 1. **Label Container**
```typescript
"group relative flex gap-2 items-start px-4 py-3 rounded-[8px] border transition-all cursor-pointer"
// Layout
"group relative flex gap-2 items-start" // Layout - spécifique au composant
"px-4 py-3"                            // Padding - spécifique au composant
"rounded-[8px]"                         // Radius - spécifique au composant (pas dans Foundation Layer)
"border"                               // Border base - spécifique au composant
"cursor-pointer"                       // Cursor - spécifique au composant
"transition-all"                        // ✅ Peut utiliser animation.transitionAll
```

### 2. **Border & Stroke (RadioGroupCardItem)**
```typescript
"border-semantic-stroke-subdued"  // ✅ SÉMANTIQUE - peut utiliser stroke.subdued
"has-[[data-state=checked]]:border-semantic-stroke-default" // ✅ SÉMANTIQUE - peut utiliser stroke.default avec has- modifier
```

### 3. **Background & Surface (RadioGroupCardItem)**
```typescript
"bg-transparent"                  // Background transparent - spécifique au composant
"has-[[data-state=checked]]:bg-semantic-surface-whisper" // ✅ SÉMANTIQUE - peut utiliser surface.whisper avec has- modifier
```

### 4. **RadioGroupItem dans RadioGroupCardItem**
```typescript
"mt-0.5 shrink-0 cursor-pointer" // Layout - spécifique au composant
// (Même classes que le composant RadioGroupItem principal)
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

### ✅ Classes Migrables - RadioGroupItem

| Classe Actuelle | Foundation Layer | Notes |
|----------------|------------------|-------|
| `border-semantic-stroke-default` | `stroke.default` | ✅ Parfait match |
| `data-[state=checked]:bg-semantic-surface-interaction-strong` | `surface.interactionStrong` avec `data-[state=checked]:` | ⚠️ Nécessite prefix data-state |
| `focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]` | `states.focusRing` | ✅ Parfait match |
| `aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40` | `states.invalidRing` | ✅ Parfait match |
| `aria-invalid:border-semantic-surface-rag-danger-strong` | `states.invalidBorder` | ✅ Parfait match |
| `disabled:cursor-not-allowed disabled:opacity-50` | `states.disabled` + `states.disabledCursor` | ✅ Parfait match |
| `rounded-3xl` | `radius["3xl"]` | ✅ Parfait match |
| `data-[state=checked]:rounded-full` | `radius.full` avec `data-[state=checked]:` | ⚠️ Nécessite prefix data-state |
| `transition-[background-color,border-color,box-shadow]` | Peut utiliser `animation.transitionColors` mais plus spécifique | ⚠️ Garder inline car plus spécifique |

### ✅ Classes Migrables - RadioGroupCardItem

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

**Solution :** Garder ces classes inline mais utiliser les valeurs de la Foundation Layer dans les commentaires :
- `data-[state=checked]:bg-semantic-surface-interaction-strong` → commenté comme utilisant `surface.interactionStrong`
- `data-[state=checked]:rounded-full` → commenté comme utilisant `radius.full`
- `has-[[data-state=checked]]:bg-semantic-surface-whisper` → commenté comme utilisant `surface.whisper`
- `has-[[data-state=checked]]:border-semantic-stroke-default` → commenté comme utilisant `stroke.default`

### 🔧 Classes Spécifiques au Composant (à garder inline)

| Classe | Raison |
|--------|--------|
| `grid gap-3` | Layout spécifique au wrapper RadioGroup |
| `aspect-square size-4 shrink-0` | Size spécifique au radio button |
| `border` | Border base |
| `bg-transparent` | Background transparent |
| `data-[state=checked]:border-0` | Border removal spécifique |
| `outline-none` | Outline spécifique |
| `relative flex items-center justify-center` | Layout pour l'indicator |
| `absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white` | Layout & Visual pour le cercle blanc |
| `transition-[background-color,border-color,box-shadow]` | Transition spécifique (plus spécifique que transitionColors) |
| `relative flex gap-2 items-start px-4 py-3` | Layout spécifique au RadioGroupCardItem |
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
7. ✅ `radius["3xl"]` → remplacer `rounded-3xl`
8. ✅ `text.default` → remplacer `text-semantic-text-default`
9. ✅ `text.subdued` → remplace `text-semantic-text-subdued`
10. ✅ `animation.transitionAll` → remplacer `transition-all` (pour RadioGroupCardItem)

**Classes avec prefixes data-state (à garder inline mais documenter) :**
- `data-[state=checked]:bg-semantic-surface-interaction-strong` → garder inline mais documenter comme utilisant `surface.interactionStrong`
- `data-[state=checked]:rounded-full` → garder inline mais documenter comme utilisant `radius.full`
- `data-[state=checked]:border-0` → garder inline (spécifique au composant)
- `has-[[data-state=checked]]:bg-semantic-surface-whisper` → garder inline mais documenter comme utilisant `surface.whisper`
- `has-[[data-state=checked]]:border-semantic-stroke-default` → garder inline mais documenter comme utilisant `stroke.default`

**Note :** Pour les classes avec prefixes, on ne peut pas utiliser directement la Foundation Layer car TypeScript/JavaScript ne permet pas la concaténation de strings dans les classes Tailwind. On garde ces classes inline mais on peut les documenter avec des commentaires référençant la Foundation Layer.

---

## 📋 Recommandation Finale

### ✅ Migration Partielle Recommandée

**Classes à migrer :**
1. ✅ `stroke.default` et `stroke.subdued`
2. ✅ `states.focusRing`
3. ✅ `states.invalidRing` et `states.invalidBorder`
4. ✅ `states.disabled` et `states.disabledCursor`
5. ✅ `radius["3xl"]`
6. ✅ `text.default` et `text.subdued`
7. ✅ `animation.transitionAll` (pour RadioGroupCardItem)

**Classes à garder inline :**
- Toutes les classes avec prefixes `data-[state=checked]:` et `has-[[data-state=checked]]:`
- Toutes les classes spécifiques au composant (size, layout, typography, transition spécifique, etc.)

---

## 🔍 Points d'Attention

### 1. **Data-State Prefixes**
Les classes avec `data-[state=checked]:` et `has-[[data-state=checked]]:` ne peuvent pas être directement remplacées par la Foundation Layer car elles nécessitent ces prefixes spécifiques.

**Solution :** Garder ces classes inline mais documenter qu'elles utilisent les valeurs de la Foundation Layer (par exemple, `surface.interactionStrong`, `surface.whisper`, `stroke.default`, `radius.full`).

### 2. **Radius 3xl**
Le composant utilise `rounded-3xl` qui correspond à `radius["3xl"]` dans la Foundation Layer.

### 3. **Radius Full**
Le composant utilise `data-[state=checked]:rounded-full` qui correspond à `radius.full` mais nécessite le prefix `data-[state=checked]:`.

### 4. **Transition Spécifique**
Le composant utilise `transition-[background-color,border-color,box-shadow]` qui est plus spécifique que `animation.transitionColors`. On garde cette classe inline.

### 5. **Radius RadioGroupCardItem**
Le composant `RadioGroupCardItem` utilise `rounded-[8px]` qui n'est pas dans la Foundation Layer. C'est un radius spécifique à ce composant.

---

## 📊 Statistiques

- **Classes totales identifiées :** ~35
- **Classes migrables vers Foundation Layer :** ~10-12
- **Classes avec prefixes data-state :** ~5
- **Classes spécifiques au composant :** ~20

**Taux de migration estimé :** ~30% (migration partielle)

---

## ✅ Conclusion

Le composant `RadioGroup` nécessite une **migration partielle** vers la Foundation Layer. La plupart des classes sémantiques peuvent être migrées directement, mais les classes avec prefixes `data-state` et `has-` doivent rester inline car elles nécessitent ces prefixes spécifiques.

**Prochaine étape :** Attendre confirmation avant de procéder à la migration.

