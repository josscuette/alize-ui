import type { Config } from "tailwindcss";
import alizePreset from "alize-ui/preset";
import alizePlugin from "alize-ui/plugin";

export default {
  presets: [alizePreset],
  plugins: [alizePlugin],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;

