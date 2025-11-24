#!/bin/bash

# Security Audit Script
# Runs npm audit and checks for vulnerabilities
# Exit code 0 if no vulnerabilities found, 1 if vulnerabilities exist

set -e

echo "🔍 Running security audit..."

# Run npm audit
npm audit --audit-level=moderate

# Check exit code
AUDIT_EXIT_CODE=$?

if [ $AUDIT_EXIT_CODE -eq 0 ]; then
  echo "✅ No security vulnerabilities found"
  exit 0
else
  echo "⚠️  Security vulnerabilities found"
  echo "Run 'npm audit fix' to automatically fix vulnerabilities"
  echo "Or review vulnerabilities with 'npm audit'"
  exit 1
fi

