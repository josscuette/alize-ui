# Verify Installation Script

Use this script in your project (Reds) to verify that Alize is correctly installed and up-to-date.

## Quick Verification

Run these commands in your project directory:

```bash
# 1. Check installed version
echo "Installed version:"
cat node_modules/alize/package.json | grep '"version"'

# 2. Check Select component has MaterialSymbol
echo -e "\nSelect uses MaterialSymbol:"
grep -q "MaterialSymbol" node_modules/alize/components/ui/select.tsx && echo "✓ Yes" || echo "✗ No"

# 3. Check SelectTrigger uses border-input (like Input)
echo -e "\nSelectTrigger uses border-input:"
grep -q "border-input" node_modules/alize/components/ui/select.tsx && echo "✓ Yes" || echo "✗ No"

# 4. Check SelectContent uses border (not border-input)
echo -e "\nSelectContent uses border (not border-input):"
grep "SelectContent" node_modules/alize/components/ui/select.tsx -A 5 | grep -q "border " && echo "✓ Yes" || echo "✗ No"

# 5. Check latest commit hash
echo -e "\nLatest commit in node_modules:"
cd node_modules/alize && git log -1 --oneline 2>/dev/null || echo "Not a git repo (normal for npm install)"
```

## Expected Results

- Version should be `0.1.1` or higher
- Select should use `MaterialSymbol` (not `ChevronDownIcon` from lucide)
- SelectTrigger should use `border-input`
- SelectContent should use `border` (not `border-input`)

## If Verification Fails

1. **Complete reset** (recommended):
```bash
rm -rf node_modules/alize node_modules/.cache .next package-lock.json
npm cache clean --force
npm install git+https://github.com/josscuette/alize-ui.git#bed4d42
```

2. **Check commit hash matches**:
The latest commit should be `bed4d42` or later. Check with:
```bash
cd node_modules/alize && git log -1 --format="%H" 2>/dev/null || echo "Check package.json version instead"
```

