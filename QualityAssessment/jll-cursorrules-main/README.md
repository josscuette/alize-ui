# JLL Cursor Rules Repository

A comprehensive collection of Cursor AI coding rules and guidelines for JLL development teams.

## 🎯 Purpose

This repository provides standardized Cursor rules to ensure consistent code quality, security practices, and performance optimization across JLL's diverse technology stack.

## 📁 Repository Structure

```
jll-cursorrules/
├── rules/                          # Use case-based cursor rules
│   ├── api-development/            # API development patterns
│   │   ├── rest-apis/              # RESTful API implementations
│   │   │   ├── nestjs-typescript/
│   │   │   │   ├── nestjs-typescript.mdc     # General (DEFAULT)
│   │   │   │   ├── nestjs-typescript-security-focused.mdc      # Security-heavy variant
│   │   │   │   ├── nestjs-typescript-performance-focused.mdc   # Performance-heavy variant
│   │   │   │   ├── nestjs-typescript-minimal.mdc               # Basic rules only
│   │   │   │   ├── README.md                 # Usage documentation
│   │   │   │   └── examples/                 # Before/after code examples
│   │   │   │       ├── before/               # Problematic patterns
│   │   │   │       └── after/                # Improved implementations
│   │   │   ├── springboot-java/
│   │   │   ├── springboot-kotlin/
│   │   │   ├── fastapi-python/
│   │   │   ├── aspnet-core-csharp/
│   │   │   └── django-python/
│   │   └── graphql-apis/           # GraphQL API implementations
│   │       ├── apollo-typescript/
│   │       ├── graphene-python/
│   │       └── hotchocolate-csharp/
│   ├── web-frontend/               # Frontend development
│   │   ├── spa-applications/       # Single Page Applications
│   │   │   ├── react-typescript/
│   │   │   ├── vue-typescript/
│   │   │   └── angular-typescript/
│   │   ├── component-libraries/    # Reusable component systems
│   │   │   ├── react-typescript/
│   │   │   └── vue-typescript/
│   │   └── micro-frontends/        # Micro-frontend architectures
│   │       └── react-typescript/
│   ├── mobile-development/         # Mobile applications
│   │   ├── cross-platform/         # Cross-platform solutions
│   │   │   ├── react-native-typescript/
│   │   │   └── flutter-dart/
│   │   └── native-apps/            # Native mobile development
│   │       ├── android-kotlin/
│   │       └── ios-swift/
│   ├── data-processing/            # Data engineering and science
│   │   ├── etl-pipelines/          # ETL and data pipelines
│   │   │   ├── python-pandas/
│   │   │   └── python-spark/
│   │   ├── analytics/              # Data analytics
│   │   │   └── python-jupyter/
│   │   └── ml-workflows/           # Machine learning workflows
│   │       ├── python-tensorflow/
│   │       └── python-pytorch/
│   ├── infrastructure/             # Infrastructure and DevOps
│   │   ├── cloud-deployment/       # Cloud infrastructure
│   │   │   ├── terraform/
│   │   │   ├── pulumi-typescript/
│   │   │   └── cloudformation/
│   │   ├── containerization/       # Container technologies
│   │   │   ├── docker/
│   │   │   └── kubernetes/
│   │   └── iac-management/         # Infrastructure as Code
│   │       ├── terraform/
│   │       └── ansible/
├── docs/                          # Documentation and guides
└── tools/                         # Utility scripts and helpers
```

## 🚀 Quick Start

### Recommended: Copy Rules into Your Project

1. **Get the rules locally** (clone or download this repo):
   ```bash
   git clone https://github.com/jll/jll-cursorrules.git
   ```
2. **Choose your rule variant and copy it**:
   ```bash
   # Default: Complete integrated rules (recommended)
   cp jll-cursorrules/rules/api-development/rest-apis/nestjs-typescript/nestjs-typescript.mdc <YOUR_PROJECT>/.cursor/rules/.

   # Security-focused project
   cp jll-cursorrules/rules/api-development/rest-apis/nestjs-typescript/nestjs-typescript-security-focused.mdc <YOUR_PROJECT>/.cursor/rules/.

   # Performance-critical project
   cp jll-cursorrules/rules/api-development/rest-apis/nestjs-typescript/nestjs-typescript-performance-focused.mdc <YOUR_PROJECT>/.cursor/rules/.
   ```

3. **Customize**: Add project-specific overrides as needed
4. **See Examples**: Each rule directory contains before/after examples demonstrating improvements

## 🎯 Use Cases Covered

### 🔌 API Development
- **REST APIs**: 
  - 🔄 NestJS (TypeScript) - *TBD*
  - 🔄 Spring Boot (Java) - *TBD*
  - 🔄 Spring Boot (Kotlin) - *TBD*
  - 🔄 FastAPI (Python) - *TBD*
  - 🔄 ASP.NET Core (C#) - *TBD*
  - 🔄 Django (Python) - *TBD*
- **GraphQL APIs**: 
  - 🔄 Apollo (TypeScript) - *TBD*
  - 🔄 Graphene (Python) - *TBD*
  - 🔄 HotChocolate (C#) - *TBD*

### 🌐 Web Frontend
- **Single Page Applications**: 
  - 🔄 React (TypeScript) - *TBD*
  - ✅ Vue (TypeScript) - *Available*
  - 🔄 Angular (TypeScript) - *TBD*
- **Component Libraries**: 
  - 🔄 React (TypeScript) - *TBD*
  - 🔄 Vue (TypeScript) - *TBD*
- **Micro-frontends**: 
  - 🔄 React (TypeScript) - *TBD*

### 📱 Mobile Development  
- **Cross-platform**: 
  - 🔄 React Native (TypeScript) - *TBD*
  - 🔄 Flutter (Dart) - *TBD*
- **Native**: 
  - 🔄 Android (Kotlin) - *TBD*
  - 🔄 iOS (Swift) - *TBD*

### 📊 Data Processing
- **ETL Pipelines**: 
  - 🔄 Python (Pandas) - *TBD*
  - 🔄 Python (Spark) - *TBD*
- **Analytics**: 
  - 🔄 Python (Jupyter) - *TBD*
- **ML Workflows**: 
  - 🔄 TensorFlow - *TBD*
  - 🔄 PyTorch - *TBD*

### ☁️ Infrastructure
- **Cloud Deployment**: 
  - 🔄 Terraform - *TBD*
  - 🔄 Pulumi (TypeScript) - *TBD*
  - 🔄 CloudFormation - *TBD*
- **Containerization**: 
  - 🔄 Docker - *TBD*
  - 🔄 Kubernetes - *TBD*
- **IaC Management**: 
  - 🔄 Terraform - *TBD*
  - 🔄 Ansible - *TBD*

### 🎯 Rule Variants
Each technology stack includes multiple focused variants:
- **Default (.mdc)**: Complete integrated rules with security, performance, and best practices
- **Security-focused**: Enhanced security rules for high-security projects
- **Performance-focused**: Optimized for performance-critical applications  
- **Minimal**: Basic rules only for learning or simple projects

## 🤝 Contributing

Community contributions are welcome! All contributions are reviewed by the JLL Apex team.

1. See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for detailed guidelines
2. Include before/after examples and usage documentation
3. Submit pull requests for review

## 📚 Documentation

- [Best Practices](docs/best-practices.md)
- [FAQ](docs/faq.md)

## 📞 Support

For questions or support, reach out to the JLL Apex team or create an issue in this repository.