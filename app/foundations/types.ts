/**
 * Type definitions for foundation documentation
 * Flexible structure to support different visualization styles per topic
 */

export type FoundationCategory = 'visual' | 'layout' | 'interaction';

/**
 * Base token structure
 */
export interface FoundationToken {
  /** Display name */
  name: string;
  /** CSS variable reference (e.g., "var(--semantic-surface-primary)") */
  cssVariable: string;
  /** Resolved value or description */
  value?: string;
  /** Description of the token's purpose */
  description?: string;
}

/**
 * Color-specific token with additional metadata
 */
export interface ColorToken extends FoundationToken {
  /** Category within color (surface, text, stroke, icon, etc.) */
  colorCategory: 'surface' | 'text' | 'stroke' | 'icon' | 'tonal' | 'rag' | 'brand' | 'dataviz';
  /** Subcategory (e.g., "primary", "interaction", "overlays") */
  subcategory?: string;
  /** Whether this token changes between light/dark themes */
  themeAware?: boolean;
}

/**
 * Typography-specific token
 */
export interface TypographyToken extends FoundationToken {
  /** Category within typography */
  typographyCategory: 'family' | 'size' | 'weight' | 'leading' | 'tracking';
}

/**
 * Spacing-specific token
 */
export interface SpacingToken extends FoundationToken {
  /** Category within spacing */
  spacingCategory: 'scale' | 'component' | 'layout';
  /** Pixel value for visualization */
  pixelValue?: number;
}

/**
 * Radius-specific token
 */
export interface RadiusToken extends FoundationToken {
  /** Pixel value for visualization */
  pixelValue?: number;
}

/**
 * Shadow-specific token
 */
export interface ShadowToken extends FoundationToken {
  /** Shadow level (xs, sm, md, lg, xl, 2xl) */
  level: string;
}

/**
 * Animation-specific token
 */
export interface AnimationToken extends FoundationToken {
  /** Category within animation */
  animationCategory: 'transition' | 'animation' | 'easing' | 'duration';
  /** Tailwind classes */
  tailwindClasses: string;
}

/**
 * States-specific token
 */
export interface StateToken extends FoundationToken {
  /** State type */
  stateType: 'hover' | 'focus' | 'pressed' | 'disabled' | 'checked' | 'selected' | 'data-state';
  /** Tailwind classes */
  tailwindClasses: string;
}

/**
 * Example code snippet
 */
export interface FoundationExample {
  title: string;
  description?: string;
  code: string;
}

/**
 * Usage guideline
 */
export interface UsageGuideline {
  type: 'do' | 'dont';
  text: string;
}

/**
 * Token group for organizing related tokens
 */
export interface TokenGroup<T extends FoundationToken = FoundationToken> {
  /** Group name (e.g., "Surfaces", "Text Colors") */
  name: string;
  /** Group description */
  description?: string;
  /** Tokens in this group */
  tokens: T[];
}

/**
 * Main foundation topic definition
 */
export interface Foundation<T extends FoundationToken = FoundationToken> {
  /** URL slug (e.g., "color", "typography") */
  slug: string;
  /** Display title */
  title: string;
  /** Short description for cards */
  description: string;
  /** Longer description for the page header */
  longDescription?: string;
  /** Category for grouping in sidebar */
  category: FoundationCategory;
  /** Material Symbol icon name */
  icon: string;
  /** Foundation export name(s) from @/foundation */
  foundationExports?: string[];
  /** Organized token groups */
  tokenGroups: TokenGroup<T>[];
  /** Code examples */
  examples?: FoundationExample[];
  /** Usage guidelines */
  guidelines?: UsageGuideline[];
  /** Related topics */
  relatedTopics?: string[];
}

/**
 * Type aliases for specific foundation types
 */
export type ColorFoundation = Foundation<ColorToken>;
export type TypographyFoundation = Foundation<TypographyToken>;
export type SpacingFoundation = Foundation<SpacingToken>;
export type RadiusFoundation = Foundation<RadiusToken>;
export type ShadowFoundation = Foundation<ShadowToken>;
export type AnimationFoundation = Foundation<AnimationToken>;
export type StateFoundation = Foundation<StateToken>;

/**
 * Union type for all foundation types
 */
export type AnyFoundation = 
  | ColorFoundation 
  | TypographyFoundation 
  | SpacingFoundation 
  | RadiusFoundation 
  | ShadowFoundation 
  | AnimationFoundation 
  | StateFoundation;

