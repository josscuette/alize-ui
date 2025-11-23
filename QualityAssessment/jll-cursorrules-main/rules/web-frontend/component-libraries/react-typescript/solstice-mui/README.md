# React TypeScript SPA Rules

A comprehensive collection of Cursor AI coding rules for building scalable, secure, and performant React TypeScript single page applications at JLL.

## 🎯 Overview

These rules provide structured guidance for React TypeScript development, covering component architecture, TypeScript best practices, state management, performance optimization, security, and testing patterns. Designed specifically for enterprise-scale SPAs that need to be maintainable, secure, and performant.

## 📋 Available Rule Variants

### 🔄 **react-typescript.mdc** (Default)
Complete integrated rules for production React TypeScript applications. Includes component architecture, TypeScript best practices, state management, performance optimization, security considerations, and testing patterns.

**Best for:** Most production applications, team development, complex SPAs

### 🔒 **react-typescript-security-focused.mdc**
Enhanced security rules for applications handling sensitive data or requiring high security standards. Emphasizes authentication, input validation, XSS prevention, secure API communication, and compliance.

**Best for:** Financial applications, healthcare apps, applications with sensitive user data

### ⚡ **react-typescript-performance-focused.mdc**
Performance-optimized rules for high-traffic or resource-intensive applications. Focuses on rendering optimization, bundle size reduction, memory management, and runtime performance monitoring.

**Best for:** High-traffic applications, real-time apps, mobile web applications

### 🎨 **component-libraries-react-typescript-figma-mcp-focused.mdc**
Specialized rules for creating React TypeScript components from Figma designs using MCP tools. Focuses on design system integration, token mapping, and translating visual designs into code.

**Best for:** Design-to-code workflows, component libraries, projects using Figma for design collaboration.

**IMPORTANT**: This rule is orchestrated by the command:
```bash
/create-mui-component-figma-mcp-focused
```
This command should be used to initiate the component creation process.

### 🎓 **react-typescript-minimal.mdc**
Essential rules for learning React TypeScript or simple applications. Covers fundamental patterns without overwhelming complexity.

**Best for:** Learning projects, prototypes, simple applications, beginner developers

## 🚀 Quick Start

### 1. Copy Rules to Your Project

Choose the appropriate variant for your project:

```bash
# Default: Complete integrated rules (recommended for most projects)
cp react-typescript.mdc <YOUR_PROJECT>/.cursor/rules/

# Security-focused: For applications requiring enhanced security
cp react-typescript-security-focused.mdc <YOUR_PROJECT>/.cursor/rules/

# Performance-focused: For high-performance requirements
cp react-typescript-performance-focused.mdc <YOUR_PROJECT>/.cursor/rules/

# Figma MCP: For design-to-code workflows with Figma integration, copy rule and command.
cp component-libraries-react-typescript-figma-mcp-focused.mdc <YOUR_PROJECT>/.cursor/rules/
cp create-mui-component-figma-mcp-focused.md <YOUR_PROJECT>/.cursor/commands/

# Minimal: For learning or simple projects
cp react-typescript-minimal.mdc <YOUR_PROJECT>/.cursor/rules/
```

### 2. Verify Installation

Check that the rules are active in your Cursor IDE:
- Open a `.tsx` or `.ts` file
- The rules should be automatically applied based on file patterns

### 3. Customize (Optional)

Add project-specific overrides in your `.cursorrules` file if needed.

## 📁 Project Structure

Following these rules, organize your React TypeScript SPA as:

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Input, Modal)
│   ├── layout/       # Layout components (Header, Sidebar, Footer)
│   ├── forms/        # Form components and validation
│   └── pages/        # Page-level components
├── hooks/            # Custom hooks (useAuth, useApi, useLocalStorage)
├── utils/            # Utility functions and helpers
├── types/            # TypeScript interfaces and types
├── constants/        # Application constants and configuration
├── services/         # API services and external integrations
├── stores/           # State management (Zustand, Redux Toolkit)
├── styles/           # Global styles, themes, and design tokens
└── test/             # Test utilities and mocks
```

## 💡 Key Guidelines

### Component Architecture
- Use functional components with hooks over class components
- Implement strict TypeScript typing for all props and state
- Follow atomic design principles (atoms → molecules → organisms)
- Use compound components for related UI elements
- Implement proper error boundaries at component level

### TypeScript Best Practices
- Define comprehensive interfaces for component props
- Use discriminated unions for complex state management
- Implement generic constraints for reusable components
- Avoid `any` types; use proper type definitions
- Use `satisfies` operator for type validation

### State Management
- Use `useState` for local component state
- Implement `useReducer` for complex state transitions
- Choose Zustand or Redux Toolkit for global state
- Use custom hooks to encapsulate stateful logic
- Implement proper loading and error states

### Performance Optimization
- Use `React.memo` for expensive components
- Implement proper dependency arrays in hooks
- Use `React.lazy` and `Suspense` for code splitting
- Implement virtualization for large lists
- Use proper memoization techniques

### Figma Design Integration
- Use MCP tools to retrieve complete Figma layer information
- Map design tokens to your project's design system tokens
- Implement all visual states and interactions from designs
- Create semantic component structure matching design hierarchy
- Ensure accessibility compliance and responsive behavior

## 📚 Examples

### Before/After Component Example

**❌ Before (Common anti-patterns):**
```tsx
// Bad: No TypeScript, inline styles, mixed concerns
function UserCard(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${props.id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

**✅ After (Following rules):**
```tsx
// Good: Proper TypeScript, separation of concerns, error handling
import React, { ReactElement } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserCardProps {
  userId: string;
}

interface UserCardState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

function useUser(userId: string): UserCardState {
  const [state, setState] = useState<UserCardState>({
    user: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch user');

        const user: User = await response.json();
        setState({ user, loading: false, error: null });
      } catch (error) {
        setState({
          user: null,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    };

    fetchUser();
  }, [userId]);

  return state;
}

const UserCard = ({ userId }: UserCardProps): ReactElement => {
  const { user, loading, error } = useUser(userId);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <article className="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </article>
  );
};
```

See the `examples/` directory for more comprehensive before/after examples demonstrating rule applications.

## 🔧 Development Setup

### Prerequisites
- Node.js 18+
- TypeScript 4.9+
- React 18+

### Recommended Tooling
```json
{
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "prettier": "^3.0.0"
  }
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
```

## 🎯 Rule Categories

### Component Architecture
- Functional components with hooks
- Proper component composition
- Atomic design principles
- Error boundaries implementation

### TypeScript Excellence
- Strict type definitions
- Generic constraints
- Discriminated unions
- Type-safe patterns

### State Management
- Local vs global state decisions
- Custom hooks for logic extraction
- Immutable state updates
- State persistence patterns

### Performance Optimization
- Memoization strategies
- Code splitting techniques
- Bundle optimization
- Runtime performance monitoring

### Security First
- Input validation and sanitization
- XSS prevention
- Secure API communication
- Authentication patterns

### Testing Strategies
- Component testing patterns
- Integration testing
- Mock implementations
- Test organization

### Design System Integration
- Figma MCP tool integration
- Design token mapping
- Visual design translation
- Component accessibility compliance
- Responsive design implementation

## 🔗 Related Rules

- **Vue TypeScript SPA**: `../vue-typescript/` - Similar patterns for Vue.js applications
- **API Development**: `../../api-development/` - Backend API development rules
- **Component Libraries**: `../component-libraries/react-typescript/` - Reusable component development

## 🤝 Contributing

These rules are maintained by the JLL Apex team. For contributions or questions:

1. Review existing issues and pull requests
2. Follow the repository's contribution guidelines
3. Test rule changes in real React TypeScript projects
4. Include before/after examples for new patterns
5. Ensure rules align with JLL enterprise standards

## 📞 Support

For questions about these rules or React TypeScript development at JLL:

- Create an issue in the main repository
- Contact the JLL Apex team
- Review the examples in the `examples/` directory

---

**Version:** 1.0 | **Last Updated:** 2025-10-02 | **Maintained by:** JLL Apex Team
