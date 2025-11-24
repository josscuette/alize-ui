import type { Config } from "tailwindcss";
import alizePreset from "alize/preset";
import alizePlugin from "alize/plugin";

export default {
  presets: [alizePreset],
  plugins: [alizePlugin],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;

