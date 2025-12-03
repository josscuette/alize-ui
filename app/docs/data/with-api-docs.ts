/**
 * Utility to merge API documentation with component data
 */

import type { Component } from '../types';
import { components } from './components';
import apiDocsData from './api-docs.json';

// Type for the API docs JSON structure
interface ApiDocEntry {
  component: string;
  slug: string;
  content: string;
  generatedAt: string;
}

type ApiDocsMap = Record<string, ApiDocEntry>;

/**
 * Convert component name to slug (kebab-case)
 * e.g., "Button" -> "button", "DatePicker" -> "date-picker"
 */
function componentNameToSlug(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Get components with API docs merged in
 */
export function getComponentsWithApiDocs(): Component[] {
  const apiDocs = apiDocsData as ApiDocsMap;
  
  return components.map(component => {
    const slug = componentNameToSlug(component.component);
    const apiDoc = apiDocs[slug];
    
    if (apiDoc) {
      return {
        ...component,
        apiDocs: apiDoc.content,
      };
    }
    
    return component;
  });
}

/**
 * Get a single component with API docs
 */
export function getComponentWithApiDocs(componentName: string): Component | undefined {
  const allComponents = getComponentsWithApiDocs();
  return allComponents.find(c => 
    c.component.toLowerCase() === componentName.toLowerCase() ||
    c.title.toLowerCase() === componentName.toLowerCase()
  );
}

/**
 * Pre-merged components with API docs
 */
export const componentsWithApiDocs = getComponentsWithApiDocs();

