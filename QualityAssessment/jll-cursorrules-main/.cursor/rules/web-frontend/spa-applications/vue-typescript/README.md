# Vue TypeScript Cursor Rules - Examples

This directory contains practical examples demonstrating the correct and incorrect application of Vue TypeScript best practices. Each example is designed to illustrate critical rules that significantly impact code quality, maintainability, and performance.

## Rules Structure

- **Core Rules** (spa-applications-vue-typescript.mdc): Comprehensive Vue + TypeScript development guidelines covering component architecture, composition API patterns, type safety, and code organization
  - **Performance Rules** (spa-applications-vue-typescript-performance-focused.mdc): Lazy loading, bundle optimization, reactivity patterns
  - **Security Rules** (spa-applications-vue-typescript-security-focused.mdc): Template security, XSS prevention, CSP configuration
  - **Testing Rules** (spa-applications-vue-typescript-testing-focused.mdc): Unit testing, component testing, E2E strategies
  - **Accessibility Rules** (spa-applications-vue-typescript-accessibility-focused.mdc): ARIA implementation, keyboard navigation, screen reader support
- **Minimal** (spa-applications-vue-typescript-minimal.mdc): Essential + Strongly Recommended rules only

## Example Structure

- **`/before`** - Contains examples showing **incorrect** application of the rules
- **`/after`** - Contains examples showing **correct** application of the rules

## Examples Overview

### 01. Prop Definitions and Type Safety

**Files:** `./examples/before/01-prop-definitions-and-type-safety.mdc` and `./examples/after/01-prop-definitions-and-type-safety.mdc`

**Rules Demonstrated:**
- ✅ **MUST use detailed prop definitions with TypeScript interfaces**
- ✅ **MUST specify types, required status, and validators where applicable**
- ✅ **MUST use scoped styling or CSS modules for component-specific styles**

**Before (❌ Bad):**
- Uses array syntax for props without type safety
- No validation or type checking
- Global CSS styles that can cause conflicts
- Runtime errors possible due to missing type validation

**After (✅ Good):**
- Proper TypeScript interfaces for props and emits
- Compile-time type checking and runtime validation
- Scoped styles with BEM naming convention
- Type-safe event handling and data flow

**Key Benefits:**
- **Type Safety:** Prevents runtime errors through compile-time checking
- **Developer Experience:** Better IDE support with autocomplete and error detection
- **Documentation:** Props serve as self-documenting API contracts
- **Maintainability:** Easier refactoring and debugging

---

### 02. Template Directives and Performance

**Files:** `./examples/before/02-template-directives-and-performance.mdc` and `./examples/after/02-template-directives-and-performance.mdc`

**Rules Demonstrated:**
- ✅ **MUST always use `:key` with `v-for` directives**
- ✅ **MUST NOT use `v-if` and `v-for` on the same element**
- ✅ **MUST ensure prop stability to prevent unnecessary child component updates**
- ✅ **MUST split multi-attribute elements across multiple lines**

**Before (❌ Bad):**
- Missing `:key` attributes causing DOM update issues
- Combined `v-if` and `v-for` directives causing performance problems
- Complex template expressions reducing readability
- Unstable prop references causing unnecessary re-renders
- Poor attribute organization and formatting

**After (✅ Good):**
- Proper `:key` usage for predictable DOM updates
- Separated directives using computed properties
- Simple template expressions with complex logic moved to computed properties
- Stable prop references preventing unnecessary re-renders
- Well-organized, multi-line attribute formatting

**Key Benefits:**
- **Performance:** Optimized DOM updates and reduced re-renders
- **Predictability:** Consistent component behavior during data changes
- **Readability:** Clean, organized template structure
- **Maintainability:** Easier to debug and modify template logic

---

### 03. Component Organization and Structure

**Files:** `./examples/before/03-component-organization-and-structure.mdc` and `./examples/after/03-component-organization-and-structure.mdc`

**Rules Demonstrated:**
- ✅ **MUST order component options consistently according to logical groupings**
- ✅ **MUST use consistent import ordering: external libraries, internal modules, types**
- ✅ **MUST implement ARIA landmarks for page sections**
- ✅ **MUST use proper semantic HTML structure**

**Before (❌ Bad):**
- Disorganized imports and component structure
- Mixed concerns and scattered logic
- No semantic HTML or accessibility considerations
- Global styles without proper organization
- Poor error handling and type safety

**After (✅ Good):**
- Organized imports following the recommended order
- Clear separation of concerns with logical grouping
- Semantic HTML with proper ARIA attributes
- Comprehensive error handling and type safety
- Scoped styles with BEM methodology and responsive design

**Key Benefits:**
- **Maintainability:** Consistent structure makes code easier to navigate and modify
- **Accessibility:** Proper semantic HTML and ARIA support for all users
- **Developer Experience:** Predictable organization reduces cognitive load
- **Scalability:** Well-structured components are easier to extend and reuse

## Usage Guidelines

### For Developers
1. **Study the Before Examples:** Understand common anti-patterns and why they're problematic
2. **Implement the After Patterns:** Use these as templates for your own components
3. **Focus on the Key Benefits:** Each example highlights specific advantages of following the rules

### For Code Reviews
1. **Reference Examples:** Use these examples to explain rule violations during reviews
2. **Educational Tool:** Share specific examples to help team members understand best practices
3. **Consistency Check:** Ensure your codebase follows the patterns shown in the "After" examples

### For Onboarding
1. **Training Material:** Use examples to teach new team members Vue TypeScript best practices
2. **Quick Reference:** Developers can quickly see correct patterns for common scenarios
3. **Standards Enforcement:** Establish team-wide coding standards based on these examples

## Related Documentation

- [Vue.js Style Guide](https://vuejs.org/style-guide/)
- [TypeScript Vue Documentation](https://vuejs.org/guide/typescript/overview.html)
- [Vue.js Accessibility Guide](https://vuejs.org/guide/best-practices/accessibility.html)
- [Vue.js Performance Guide](https://vuejs.org/guide/best-practices/performance.html)


