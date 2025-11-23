# Frequently Asked Questions (FAQ)

## 🤔 General Questions

### What are Cursor Rules?
Cursor Rules are configuration files (`.cursor/rules/<rule>.mdc`) that guide Cursor AI's code suggestions and behavior. They help ensure consistent coding standards, security practices, and performance optimization across development projects.

### Why does JLL need its own Cursor Rules repository?
- **Consistency**: Ensure all teams follow the same coding standards
- **Security**: Enforce JLL-specific security requirements
- **Efficiency**: Reduce time spent on code reviews and onboarding
- **Quality**: Maintain high code quality across diverse technology stacks
- **Knowledge Sharing**: Capture and distribute best practices across teams

### How do Cursor Rules differ from linting tools?
| Aspect | Cursor Rules | Linting Tools |
|--------|-------------|---------------|
| **Timing** | Real-time during coding | Post-code analysis |
| **Scope** | Code suggestions & patterns | Syntax & style checking |
| **Intelligence** | AI-powered contextual help | Rule-based validation |
| **Integration** | Built into Cursor IDE | Separate tools/plugins |
| **Flexibility** | Natural language rules | Structured rule definitions |

## 🛠️ Technical Questions

### How do I know which rules to use for my project?

**First, get the JLL rules locally** (clone or download):
```bash
git clone https://github.com/jll/jll-cursorrules.git
```

1. **Identify your primary use case**:
   - API Development → `rules/api-development/`
   - Frontend Development → `rules/web-frontend/`
   - Mobile Development → `rules/mobile-development/`
   - Data Processing → `rules/data-processing/`
   - Infrastructure → `rules/infrastructure/`

2. **Select your technology stack**:
   - Navigate to the specific technology folder
   - Example: `jll-cursorrules/rules/api-development/rest-apis/nestjs-typescript/`

3. **Choose specialized variants as needed**:
   - Use `security-focused.mdc` for high-security projects
   - Use `performance-focused.mdc` for high-performance requirements
   - Use `minimal.mdc` for simple projects or learning

### What if my technology stack isn't covered?
1. **Check similar technologies**: Look for related tech stacks that might work
2. **Use base language rules**: Start with language-specific rules (TypeScript, Python, etc.)
3. **Request new rules**: Open an issue to request support for your technology
4. **Contribute**: Help create rules for your technology stack

### How often should I update my project's rules?
- **For new projects**: Use the latest rules from the repository
- **For existing projects**: Update quarterly or when significant changes are released
- **For critical security updates**: Update immediately when notified
- **For team changes**: Update when team practices or requirements change

## 🔧 Usage Questions

### Where should I place the `.mdc` file?
Organize rules by placing them in `.cursor/rules` directories throughout your project. Nested ruels automatically attach when files in their directory are referenced.

```
project/
  .cursor/rules/        # Project-wide rules
  backend/
    server/
      .cursor/rules/    # Backend-specific rules
  frontend/
    .cursor/rules/      # Frontend-specific rules
```

### The rules aren't working. What should I check?

**Common issues and solutions:**

1. **File location**: Ensure `.cursor/rules` is in the project root
2. **File syntax**: Check for syntax errors in the rules file
3. **Cursor restart**: Restart Cursor to reload the rules
4. **File encoding**: Ensure the file is saved in UTF-8 encoding
5. **Rule conflicts**: Check for contradictory rules

**Debugging steps:**
```bash
# Check file exists
ls -la .cursor/rules/<rule>.mdc

# Check file content
cat .cursor/rules/<rule>.mdc
```

## 📚 Contribution Questions

### How can I contribute new rules?
1. **Review** the [Contributing Guide](CONTRIBUTING.md)
2. **Open an issue** to discuss your proposed rules
3. **Include examples** and documentation
4. **Submit a pull request** for Apex team review

### What makes a good rule contribution?
- **Specific and actionable**: Clear guidance on what to do
- **Well-documented**: Includes rationale and examples
- **JLL-relevant**: Addresses actual JLL development needs
- **Non-conflicting**: Doesn't contradict existing rules
- **Tested**: Verified to work effectively in real projects

### Who reviews contributions?
All contributions are reviewed by:
- **JLL Apex Team**: Primary reviewers for all submissions
- **Technology experts**: Subject matter experts for specific technologies
- **Security team**: For security-related rules
- **Community**: Other developers can provide feedback

### How long does the review process take?
- **Initial review**: 2-3 business days
- **Feedback incorporation**: Varies based on complexity
- **Final approval**: 1-2 business days after addressing feedback

## 🏢 JLL-Specific Questions

### Are these rules mandatory for all JLL projects?
- **New projects**: Strongly recommended to use appropriate rules
- **Existing projects**: Use during major refactoring or when updating standards
- **Team flexibility**: Teams can customize rules for specific needs
- **Apex oversight**: Apex team provides guidance on standards

### How do these rules integrate with existing JLL development processes?
- **Code reviews**: Rules help ensure consistency before review
- **Onboarding**: New developers get consistent guidance
- **Standards**: Rules enforce existing JLL coding standards

### What if my team has different preferences?
1. **Discuss with Apex team**: Understand the rationale for existing rules
2. **Create team overrides**: Add team-specific customizations
3. **Contribute improvements**: Suggest changes that benefit all teams
4. **Document differences**: Clearly document team-specific practices

### How do I stay updated on rule changes?
- **Repository watching**: Watch the repository for updates
- **Team communications**: Apex team will announce major changes
- **Release notes**: Check repository releases for change summaries
- **Issue subscriptions**: Subscribe to relevant technology discussions

## 🚨 Troubleshooting

### Cursor suggestions seem incorrect or conflicting
1. **Check rule precedence**: Later rules override earlier ones
2. **Review rule combinations**: Multiple rule sets might conflict
3. **Simplify rule set**: Start with basic rules and add incrementally
4. **Report issues**: Create repository issues for persistent problems

### Performance issues with rules
1. **Reduce rule complexity**: Simplify complex pattern matching
2. **Split large rule files**: Use multiple smaller, focused files
3. **Remove unnecessary rules**: Keep only the most important rules
4. **Check file size**: Very large rule files can impact performance

### Rules not specific enough
1. **Add more context**: Include specific examples and patterns
2. **Use technology-specific rules**: Don't rely only on generic rules
3. **Provide implementation details**: Show exact code patterns to use
4. **Include anti-patterns**: Show what NOT to do

---

**Still have questions?** 

- 📝 **Create an issue** in the repository
- 💬 **Contact the Apex team** directly
- 📖 **Check the documentation** for more detailed information
- 🤝 **Ask the community** in repository discussions