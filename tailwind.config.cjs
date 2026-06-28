/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    { pattern: /^(from|to)-(primary|secondary|accent)(-(light|dark))?$/ },
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          light: "oklch(0.93 0 244)",
          dark: "oklch(0.1 0 244)",
          DEFAULT: "oklch(0.93 0 244)",
        },
        bg2: {
          light: "oklch(0.86 0 244)",
          dark: "oklch(0.15 0 244)",
          DEFAULT: "oklch(0.86 0 244)",
        },
        bg3: {
          light: "oklch(0.97 0 244)",
          dark: "oklch(0.2 0 244)",
          DEFAULT: "oklch(0.97 0 244)",
        },
        text: {
          light: "oklch(0.12 0 244)",
          dark: "oklch(0.96 0 244)",
          DEFAULT: "oklch(0.12 0 244)",
        },
        muted: {
          light: "oklch(0.4 0 244)",
          dark: "oklch(0.76 0 244)",
          DEFAULT: "oklch(0.4 0 244)",
        },
        primary: {
          light: "oklch(0.35 0.12 244)",
          dark: "oklch(0.76 0.1 244)",
          DEFAULT: "oklch(0.35 0.12 244)",
        },
        secondary: {
          light: "oklch(0.35 0.12 64)",
          dark: "oklch(0.76 0.1 64)",
          DEFAULT: "oklch(0.35 0.12 64)",
        },
        danger: {
          light: "oklch(0.5 0.05 30)",
          dark: "oklch(0.7 0.05 30)",
          DEFAULT: "oklch(0.5 0.05 30)",
        },
        warning: {
          light: "oklch(0.5 0.05 100)",
          dark: "oklch(0.7 0.05 100)",
          DEFAULT: "oklch(0.5 0.05 100)",
        },
        success: {
          light: "oklch(0.7 0.05 160)",
          dark: "oklch(0.7 0.05 160)",
          DEFAULT: "oklch(0.7 0.05 160)",
        },
        info: {
          light: "oklch(0.5 0.05 260)",
          dark: "oklch(0.7 0.05 260)",
          DEFAULT: "oklch(0.5 0.05 260)",
        },
        accent: {
          light: "oklch(0.4 0.1 160)",
          dark: "oklch(0.76 0.1 160)",
          DEFAULT: "oklch(0.4 0.1 160)",
        },
        border: {
          light: "oklch(0.5 0 244)",
          dark: "oklch(0.4 0 244)",
          DEFAULT: "oklch(0.5 0 244)",
        },
        borderMuted: {
          light: "oklch(0.65 0 244)",
          dark: "oklch(0.3 0 244)",
          DEFAULT: "oklch(0.65 0 244)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "SF Mono",
          "Consolas",
          "Monaco",
          "monospace",
        ],
        display: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(135deg, oklch(0.4 0.1 244), oklch(0.76 0.1 64))",
        "gradient-primary-dark":
          "linear-gradient(135deg, oklch(0.76 0.1 244), oklch(0.76 0.1 64))",
        "gradient-accent":
          "linear-gradient(135deg, oklch(0.4 0.1 64), oklch(0.4 0.1 244))",
        "gradient-accent-dark":
          "linear-gradient(135deg, oklch(0.76 0.1 64), oklch(0.76 0.1 244))",
        "gradient-bg":
          "linear-gradient(180deg, oklch(0.93 0 244), oklch(0.86 0 244))",
        "gradient-bg-dark":
          "linear-gradient(180deg, oklch(0.1 0 244), oklch(0.15 0 244))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
