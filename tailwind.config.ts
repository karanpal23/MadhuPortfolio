import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "var(--ground)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        "text-soft": "var(--text-soft)",
        accent: "var(--accent)",
        "accent-hot": "var(--accent-hot)",
        "accent-warm": "var(--accent-warm)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
};

export default config;
