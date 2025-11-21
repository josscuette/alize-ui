const fs = require('fs');
const path = require('path');

// Créer le dossier et le fichier pages-manifest.json si nécessaire
const manifestPath = path.join(__dirname, '../.next/server/pages-manifest.json');
const dir = path.dirname(manifestPath);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

if (!fs.existsSync(manifestPath)) {
  fs.writeFileSync(manifestPath, JSON.stringify({ pages: {} }, null, 2));
  console.log('✅ pages-manifest.json créé');
} else {
  console.log('ℹ️  pages-manifest.json existe déjà');
}

