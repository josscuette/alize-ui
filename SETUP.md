# Setup Guide

Ce guide explique comment mettre en place l'environnement de développement pour la librairie de composants Alize.

## Installation

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Installer Prettier et le plugin Tailwind** (déjà ajouté dans package.json) :
   ```bash
   npm install --save-dev prettier prettier-plugin-tailwindcss
   ```

## Configuration VS Code / Cursor

Ajoutez ces paramètres dans votre `.vscode/settings.json` :

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Scripts disponibles

- `npm run lint` - Vérifie le code avec ESLint
- `npm run lint:fix` - Corrige automatiquement les erreurs ESLint
- `npm run format` - Formate le code avec Prettier
- `npm run format:check` - Vérifie le formatage sans modifier les fichiers
- `npm run type-check` - Vérifie les types TypeScript
- `npm run check` - Exécute toutes les vérifications (lint + format + types)

## Utilisation avec Cursor / AI

Le fichier `.cursorrules` contient les règles que l'IA doit suivre lors de la génération de code. Ces règles sont automatiquement prises en compte par Cursor.

## Vérification avant commit (Optionnel - avec Husky)

Pour automatiser les vérifications avant chaque commit :

```bash
npm install --save-dev husky lint-staged
npx husky init
```

Puis créez `.husky/pre-commit` :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run check
```

Et ajoutez dans `package.json` :

```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}
```

## Conventions

Consultez `CONVENTIONS.md` pour les conventions détaillées du projet.

