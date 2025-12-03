'use client';

import { use } from 'react';
import { componentsWithApiDocs as components } from '../data/with-api-docs';
import { DocTemplate } from '../components/doc-template';
import { getPreviewRenderer, getInteractivePreviewRenderer } from '../components/previews';
import { DocsSidebar } from '../docs-sidebar';
import Link from 'next/link';

/**
 * Dynamic component documentation page
 * 
 * This page uses the DocTemplate for consistent layout and structure.
 * Preview rendering is handled by the preview registry.
 * 
 * To add a new component:
 * 1. Add component data to `data/components.ts`
 * 2. Create a preview in `components/previews/[component]-preview.tsx`
 * 3. Register the preview in `components/previews/index.ts`
 * 4. (Optional) Add interactiveProps to component data for playground
 * 5. (Optional) Create an interactive preview function
 */
export default function ComponentDocsPage({ 
  params 
}: { 
  params: Promise<{ component: string }> 
}): React.ReactNode {
  const resolvedParams = use(params);
  const componentSlug = resolvedParams.component.toLowerCase();
  
  // Find component by slug (case-insensitive)
  const componentDoc = components.find(
    (c) => c.component.toLowerCase() === componentSlug
  );

  // Handle not found
  if (!componentDoc) {
    return (
      <div className="flex min-w-0">
        <DocsSidebar />
        <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="text-2xl font-bold mb-4">Component Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The component &quot;{resolvedParams.component}&quot; was not found.
          </p>
          {components.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Available Components</h2>
              <ul className="list-disc list-inside space-y-1">
                {components.map((component) => (
                  <li key={component.component}>
                    <Link 
                      href={`/docs/${component.component.toLowerCase()}`} 
                      className="text-primary hover:underline"
                    >
                      {component.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Get the preview renderers for this component (may be undefined)
  const renderPreview = getPreviewRenderer(componentDoc.component);
  const renderInteractivePreview = getInteractivePreviewRenderer(componentDoc.component);

  return (
    <DocTemplate 
      componentDoc={componentDoc} 
      renderPreview={renderPreview}
      renderInteractivePreview={renderInteractivePreview}
    />
  );
}
