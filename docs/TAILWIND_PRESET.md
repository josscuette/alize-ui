# Alize Tailwind CSS Preset

Alize fournit un preset Tailwind CSS pour garantir une intégration sans conflit dans votre application.

## Pourquoi utiliser le preset ?

1. **Une seule instance de Tailwind** : Le preset garantit qu'une seule instance de Tailwind CSS s'exécute dans votre application, évitant les conflits et les problèmes de performance.

2. **Configuration automatique** : Le preset configure automatiquement le scanning des composants Alize, vous n'avez pas besoin d'ajouter manuellement les chemins vers `node_modules/alize`.

3. **Extensibilité** : Vous pouvez toujours étendre la configuration Tailwind dans votre application sans risquer de casser la configuration d'Alize.

## Installation

### Tailwind CSS v4

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import alizePreset from "alize/tailwind.preset";

export default {
  presets: [alizePreset],
  content: [
    // Vos fichiers d'application
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Le preset inclut déjà les composants Alize
  ],
} satisfies Config;
```

### Tailwind CSS v3

```js
// tailwind.config.js
import alizePreset from "alize/tailwind.preset";

export default {
  presets: [alizePreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
```

## Configuration manuelle (sans preset)

Si vous préférez ne pas utiliser le preset, vous devez ajouter manuellement les chemins Alize :

```ts
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/alize/**/*.{js,ts,jsx,tsx}", // Requis pour les composants Alize
  ],
} satisfies Config;
```

## Ce que fait le preset

Le preset configure uniquement le **content scanning** pour que Tailwind trouve les classes utilisées dans les composants Alize. Il ne modifie pas :

- Les variables CSS (gérées par `globals.css` et `theme.css`)
- Les plugins Tailwind
- Les thèmes personnalisés

## Extension de la configuration

Vous pouvez toujours étendre la configuration Tailwind dans votre application :

```ts
import type { Config } from "tailwindcss";
import alizePreset from "alize/tailwind.preset";

export default {
  presets: [alizePreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // Vos extensions personnalisées
  theme: {
    extend: {
      // Vos customisations
    },
  },
  plugins: [
    // Vos plugins
  ],
} satisfies Config;
```

## Dépannage

### Les classes Alize ne sont pas générées

Assurez-vous que :
1. Le preset est bien importé et ajouté à `presets`
2. Les fichiers CSS Alize sont importés (`alize/app/globals.css` et `alize/app/theme.css`)
3. Vous avez redémarré le serveur de développement après avoir ajouté le preset

### Conflits avec d'autres presets

Si vous utilisez d'autres presets Tailwind, ajoutez-les dans le tableau `presets` :

```ts
export default {
  presets: [
    alizePreset,
    otherPreset, // Vos autres presets
  ],
  // ...
};
```

L'ordre peut être important selon vos besoins.

