import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Components that should NOT be centered (full width)
const fullWidthComponents = ['Input', 'Label', 'Skeleton', 'Separator', 'Checkbox', 'Typography', 'AspectRatio', 'Empty', 'Item'];

// Find all page.tsx files in app/docs
function findDocPages(dir) {
  const pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '[component]' && entry.name !== 'data') {
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        pages.push(pagePath);
      }
      // Recursively search subdirectories
      pages.push(...findDocPages(fullPath));
    }
  }
  
  return pages;
}

const docPages = findDocPages(path.join(rootDir, 'app/docs'));

docPages.forEach(pagePath => {
  let content = fs.readFileSync(pagePath, 'utf-8');
  const componentName = path.basename(path.dirname(pagePath));
  
  // Fix 1: Replace button with Button component
  if (content.includes('button') && content.includes('content_copy')) {
    // Check if Button is already imported
    if (!content.includes("import { Button } from '@/components/ui/button';")) {
      // Add Button import after other component imports
      const importMatch = content.match(/import { [^}]+ } from '@\/components\/ui\/[^']+';/);
      if (importMatch) {
        content = content.replace(
          importMatch[0],
          `${importMatch[0]}\nimport { Button } from '@/components/ui/button';`
        );
      }
    }
    
    // Replace button element with Button component
    content = content.replace(
      /<button\s+onClick=\{\(\) => \{\s+navigator\.clipboard\.writeText\(example\.code\);\s+\}\}\s+className="[^"]*">\s*<MaterialSymbol name="content_copy"[^>]*\/>\s*Copy\s*<\/button>/gs,
      `<Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(example.code);
              }}
              className="h-7 sm:h-8 gap-1.5 text-xs self-start sm:self-auto"
            >
              <MaterialSymbol name="content_copy" size={14} weight={300} />
              Copy
            </Button>`
    );
  }
  
  // Fix 2: Adjust preview centering based on component type
  const shouldCenter = !fullWidthComponents.includes(componentName.charAt(0).toUpperCase() + componentName.slice(1));
  
  if (content.includes('flex items-center justify-center w-full min-h-[80px]')) {
    if (shouldCenter) {
      // Keep centering for components like Button, Badge, Avatar, etc.
      content = content.replace(
        /<div className="flex items-center justify-center w-full min-h-\[80px\] sm:min-h-\[100px\]">/g,
        '<div className="flex items-center justify-center w-full min-h-[80px] sm:min-h-[100px] [&_button:disabled]:cursor-not-allowed">'
      );
    } else {
      // Remove centering for full-width components
      content = content.replace(
        /<div className="flex items-center justify-center w-full min-h-\[80px\] sm:min-h-\[100px\]">/g,
        '<div className="w-full min-h-[80px] sm:min-h-[100px]">'
      );
    }
  }
  
  fs.writeFileSync(pagePath, content, 'utf-8');
  console.log(`Fixed ${pagePath}`);
});

console.log(`\nFixed ${docPages.length} pages!`);

