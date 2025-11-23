# Contributing to JLL Cursor Rules

Thank you for your interest in contributing to the JLL Cursor Rules repository! This guide will help you understand how to contribute effectively.

## 🎯 Overview

All contributions are reviewed by the JLL Apex team to ensure consistency, quality, and alignment with JLL's development standards.

## 🚀 Getting Started

### Prerequisites
- Familiarity with Cursor AI and `.mdc` files
- Experience with the technology stack you're contributing to
- Understanding of JLL's development practices

### Types of Contributions

1. **New Rule Sets**: Adding cursor rules for new technologies or use cases
2. **Rule Improvements**: Enhancing existing rules with better practices
3. **Examples**: Adding usage examples and demonstrations
4. **Documentation**: Improving guides and documentation

## 📋 Contribution Process

### 1. Planning Your Contribution

Before starting, please:
- Check if similar rules already exist
- Open an issue to discuss your planned contribution
- Get feedback from the Apex team on the approach

### 2. Following the Structure

#### For New Rule Sets:
```
rules/[use-case]/[sub-category]/[technology-stack]/
├── [sub-category]-[technology-stack].mdc                 # Main rule file
├── README.md                    # Usage documentation
└── examples/                    # Usage examples
    ├── before/                  # Code before applying rules
    └── after/                   # Code after applying rules
```

#### For Rule Variants:
```
rules/[use-case]/[sub-category]/[technology-stack]/
├── [sub-category]-[technology-stack].mdc                       # Complete integrated rules (DEFAULT)
├── [sub-category]-[technology-stack]-security-focused.mdc      # Security-enhanced variant
├── [sub-category]-[technology-stack]-performance-focused.mdc   # Performance-optimized variant
├── [sub-category]-[technology-stack]-minimal.mdc               # Basic rules only
├── README.md                        # Usage documentation
└── examples/                        # Usage examples
    ├── before/                      # Code before applying rules
    └── after/                       # Code after applying rules
```

### 3. Rule File Standards

#### File Naming
- Default integrated rules: `[sub-category]-[technology-stack].mdc`
- Security-focused variant: `[sub-category]-[technology-stack]-security-focused.mdc`
- Performance-focused variant: `[sub-category]-[technology-stack]-performance-focused.mdc`
- Minimal rules: `[sub-category]-[technology-stack]-minimal.mdc`
- Documentation: `README.md`
- Examples: Descriptive names in `examples/` directory

#### Rule Content Guidelines

**Structure your rule files:**

**Default `.mdc` (Complete Integrated):**
```
# [Technology] - [Use Case] Integrated Cursor Rules
# Version: 2.0
# Last Updated: YYYY-MM-DD
# Maintained by: JLL Apex Team
# Includes: Security, Performance, Testing, and Best Practices

## Project Structure and Organization
[structure guidelines...]

## TypeScript/Language Best Practices
[language-specific rules...]

## API Design Patterns
[design patterns...]

## Security Implementation (Integrated)
[security rules specific to this technology...]

## Performance Optimization (Integrated)
[performance rules specific to this technology...]

## Testing Requirements (Integrated)
[testing rules specific to this technology...]

## Configuration and Environment
[configuration rules...]

## Documentation Standards
[documentation rules...]
```

**Specialized Variants:**
- `security-focused.mdc`: Enhanced security rules with compliance focus
- `performance-focused.mdc`: Advanced performance optimization techniques
- `minimal.mdc`: Essential rules only for learning/simple projects

**Rule Quality Standards:**
- Be specific and actionable
- Include rationale for complex rules  
- Provide examples where helpful
- Focus on JLL-specific requirements
- Integrate security, performance, and testing concerns contextually
- Ensure rules don't conflict within or between variants
- Design variants for specific use cases (security, performance, minimal)

### 4. Documentation Requirements

#### Examples Directory
- **before/**: Code samples showing common issues
- **after/**: Code samples showing corrected versions
- Include README.md explaining the examples

### 5. Testing Your Contribution

Before submitting:
1. **Test the rules** in a real project
2. **Verify rule effectiveness** by checking Cursor's behavior
3. **Ensure no conflicts** with existing JLL practices
4. **Check documentation** for clarity and completeness

## 📝 Submission Guidelines

### Pull Request Process

1. **Create a feature branch** from main
2. **Follow naming convention**: `feature/[use-case]-[technology]-rules`
3. **Include comprehensive commit messages**
4. **Update relevant documentation**
5. **Submit pull request** with detailed description

## 🔍 Review Process

### Review Criteria
- **Alignment**: Rules align with JLL development standards
- **Quality**: Rules are well-written and effective
- **Documentation**: Clear and comprehensive documentation
- **Examples**: Helpful and realistic examples
- **Structure**: Follows repository organization

### Review Timeline
- Initial review: 2-3 business days
- Feedback incorporation: Depends on complexity
- Final approval: 1-2 business days after feedback addressed

### Reviewers
All contributions are reviewed by:
- JLL Apex team members
- Subject matter experts for specific technologies
- Security team (for security-related rules)

## 💡 Best Practices

### Rule Writing
- **Be specific**: Avoid vague or generic rules
- **Provide context**: Explain why rules exist
- **Include examples**: Show before/after code
- **Consider edge cases**: Handle unusual scenarios
- **Stay current**: Keep up with technology updates

### Documentation
- **Write for your audience**: Assume basic familiarity with technology
- **Use clear examples**: Real-world scenarios are best
- **Link related resources**: Connect to other relevant rules
- **Keep it updated**: Maintain accuracy over time

### Collaboration
- **Communicate early**: Discuss significant changes
- **Ask questions**: Don't hesitate to seek clarification
- **Share knowledge**: Help others understand your domain
- **Be responsive**: Address feedback promptly

## 🆘 Getting Help

### Resources
- **Repository Issues**: For questions and discussions
- **JLL Apex Team**: Direct contact for guidance
- **Documentation**: Existing docs and examples
- **Community**: Learn from other contributors

### Common Questions
See [FAQ](faq.md) for answers to frequently asked questions.

---

Thank you for contributing to JLL's development standards! Your contributions help ensure consistent, high-quality code across all JLL projects.