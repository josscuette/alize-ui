# Best Practices for JLL Cursor Rules

This guide outlines best practices for using, creating, and maintaining Cursor Rules within JLL's development ecosystem.

## 🎯 Using Cursor Rules Effectively

### Rule Selection Strategy

#### Start with Base Rules
```bash
# Get the JLL rules locally (once per machine)
git clone https://github.com/jll/jll-cursorrules.git

# Begin with your primary use case
cp jll-cursorrules/rules/api-development/rest-apis/nestjs-typescript/nestjs-typescript.mdc <YOUR_PROJECT>/.cursor/rules/
```

#### Layered Approach
1. **Foundation**: Core technology rules (language + framework)
2. **Quality**: Security, performance, testing
3. **Standards**: Documentation, code style
4. **Team**: Team-specific customizations

### Rule Composition Patterns

## 🔧 Creating High-Quality Rules

### Rule Writing Principles

#### 1. Be Specific and Actionable
```cursorrules
❌ Bad: "Write good code"
✅ Good: "Use TypeScript interfaces for all API response types. Example: interface UserResponse { id: string; name: string; email: string; }"
```

#### 2. Provide Context and Rationale
```cursorrules
# Security: Always validate input parameters
# Rationale: Prevents injection attacks and data corruption
# Implementation: Use class-validator decorators in NestJS controllers
```

#### 3. Include Examples
```cursorrules
# Exception Handling Pattern
# Use structured error responses with proper HTTP status codes
# Example:
# throw new HttpException(
#   { message: 'User not found', code: 'USER_NOT_FOUND' },
#   HttpStatus.NOT_FOUND
# );
```

#### 4. Consider Maintainability
```cursorrules
# Code Organization
# Group related functionality in feature modules
# Follow the structure: feature/
#   ├── controllers/
#   ├── services/
#   ├── entities/
#   ├── dtos/
#   └── tests/
```

### Rule Categories and Priorities

#### High Priority Rules
1. **Security**: Input validation, authentication, authorization
2. **Error Handling**: Consistent error responses and logging
3. **Data Validation**: Type safety and validation patterns
4. **Performance**: Query optimization, caching strategies

#### Medium Priority Rules
1. **Code Style**: Formatting, naming conventions
2. **Documentation**: API documentation, code comments
3. **Testing**: Test structure and coverage
4. **Architecture**: Module organization, dependency patterns

#### Low Priority Rules
1. **Preferences**: Personal style choices
2. **Non-critical Optimizations**: Minor performance tweaks
3. **Experimental Features**: New technology adoption

### Technology-Specific Best Practices

#### TypeScript/JavaScript
```cursorrules
# Type Safety
- Always use strict TypeScript configuration
- Define interfaces for all complex objects
- Use union types instead of 'any'
- Implement proper null checking

# Async Patterns
- Use async/await instead of Promise chains
- Implement proper error handling in async functions
- Use Promise.all() for parallel operations
```

#### Python
```cursorrules
# Type Hints
- Use type hints for all function parameters and return values
- Import from typing module for complex types
- Use dataclasses for structured data

# Error Handling
- Use specific exception types
- Implement proper logging with structured messages
- Follow Python's EAFP (Easier to Ask for Forgiveness than Permission) principle
```

#### Java/Kotlin
```cursorrules
# Spring Boot Patterns
- Use @Service, @Repository, @Controller annotations appropriately
- Implement proper dependency injection
- Use @Transactional for database operations
- Follow RESTful API design principles

# Exception Handling
- Create custom exception classes for business logic
- Use @ControllerAdvice for global exception handling
- Return proper HTTP status codes
```

## 🏗️ Project Structure Best Practices

### Repository Organization

#### Use Case-Driven Structure
```
project/
  .cursor/rules/        # Project-wide rules
  backend/
    server/
      .cursor/rules/    # Backend-specific rules
  frontend/
    .cursor/rules/      # Frontend-specific rules
```

### Version Control Strategy

#### Rule Evolution
```cursorrules
# Version tracking in rule files
# JLL Cursor Rules - NestJS TypeScript API
# Version: 2.1
# Last Updated: 2024-01-15
# Changes: Added new authentication patterns, updated error handling
```

## 🔍 Testing and Validation

### Rule Effectiveness Testing

#### Create Test Scenarios
```typescript
// Test file: cursor-rules-test.ts
// Purpose: Verify rules are working correctly

// Test 1: Security - Should suggest input validation
function createUser(data: any) {
  // Cursor should suggest proper validation
}

// Test 2: Error Handling - Should suggest try-catch
async function fetchUserData(id: string) {
  // Cursor should suggest error handling
}

// Test 3: Type Safety - Should suggest proper typing
function processApiResponse(response) {
  // Cursor should suggest interface definition
}
```

#### Validation Checklist
- [ ] Rules provide relevant suggestions
- [ ] No conflicting or contradictory rules
- [ ] Performance impact is minimal
- [ ] Rules align with JLL standards
- [ ] Examples work as expected

### Continuous Improvement

#### Feedback Collection
```markdown
# Rule Feedback Template
## Rule Set: [e.g., nestjs-typescript]
## Issue: [Description of problem]
## Expected Behavior: [What should happen]
## Actual Behavior: [What actually happens]
## Suggested Improvement: [Proposed solution]
```

#### Regular Reviews
- **Monthly**: Review rule effectiveness with team
- **Quarterly**: Update rules for new technology versions
- **Annually**: Major rule refactoring and optimization

## 🤝 Team Collaboration

### Onboarding New Team Members

#### Rule Introduction Process
1. **Walkthrough**: Explain rule structure and purpose
2. **Hands-on**: Set up rules in sample project
3. **Practice**: Create test scenarios together
4. **Feedback**: Collect initial impressions and questions

#### Documentation Requirements
```markdown
# Team Rule Documentation
## Our Rule Setup
- Base Rules: [List of rule files used]
- Customizations: [Team-specific modifications]
- Update Process: [How we maintain rules]

## Common Patterns
- [Frequently used patterns and their implementations]

## Troubleshooting
- [Common issues and solutions]
```

---

**Remember**: The best rules are the ones that help your team write better code faster while maintaining JLL's high standards. Start simple, iterate based on feedback, and continuously improve! 🚀