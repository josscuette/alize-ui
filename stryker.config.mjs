/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "vitest",
  vitest: {
    configFile: "vitest.config.ts",
  },
  checkers: ["typescript"],
  tsconfigFile: "tsconfig.json",
  mutate: [
    "src/components/ui/**/*.tsx",
    "!src/components/ui/**/*.test.tsx",
    "!src/components/ui/**/*.spec.tsx",
  ],
  ignorePatterns: [
    "node_modules",
    "dist",
    ".next",
    "**/*.test.tsx",
    "**/*.spec.tsx",
  ],
  thresholds: {
    high: 80,
    low: 60,
    break: 60,
  },
  concurrency: 4,
  timeoutMS: 60000,
  incremental: true,
  incrementalFile: ".stryker-tmp/incremental.json",
}

export default config

