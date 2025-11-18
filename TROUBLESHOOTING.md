# Troubleshooting Guide

## Problem: Changes from GitHub dependency not updating

When using Alize as a GitHub dependency, npm and bundlers can cache the old version even after reinstalling.

### Complete Reset Steps (for project using Alize)

1. **Remove all traces of Alize:**
```bash
rm -rf node_modules/alize
rm -rf node_modules/.cache
rm package-lock.json
# or yarn.lock / pnpm-lock.yaml
```

2. **Clear npm cache:**
```bash
npm cache clean --force
```

3. **Clear bundler cache:**
```bash
# For Next.js
rm -rf .next

# For Vite
rm -rf node_modules/.vite

# For Turbopack (Next.js 15+)
rm -rf .turbo
```

4. **Reinstall with specific commit:**
```bash
# Get the latest commit hash from GitHub
npm install git+https://github.com/josscuette/alize-ui.git#<latest-commit-hash>
```

5. **Restart dev server:**
```bash
# Kill any running dev server
# Then restart
npm run dev
```

### Verify Installation

Check that you have the latest version:

```bash
# Check installed version
cat node_modules/alize/package.json | grep version

# Check Select component has MaterialSymbol
grep -A 5 "MaterialSymbol" node_modules/alize/components/ui/select.tsx
```

### Alternative: Use Specific Commit Hash

Instead of relying on version numbers, pin to a specific commit:

```json
{
  "dependencies": {
    "alize": "git+https://github.com/josscuette/alize-ui.git#f7ddc51"
  }
}
```

Then update the commit hash when you want to pull new changes.

### For Development: Use Local Path

During active development, you can use a local path:

```json
{
  "dependencies": {
    "alize": "file:../alize"
  }
}
```

This will always use the local version without caching issues.

