import type { Config } from "tailwindcss";

// OA7 Design System
// Derived from brand colors: Primary #0A192F, Secondary #E2E8F0, Accent #00F0FF
// Every step below is a deliberate stop on the brand palette, not an auto-generated ramp.

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF2F8",
          100: "#D9E1EC",
          200: "#B3C3D9",
          300: "#8CA5C6",
          400: "#5F7FA3",
          500: "#3A5578",
          600: "#24395A",
          700: "#182A47",
          800: "#101F38",
          900: "#0A192F", // brand base
          950: "#060F1D",
          DEFAULT: "#0A192F",
        },
        secondary: {
          // 0/50/100/...600 are theme-aware (flip between light/dark via
          // CSS variables defined in globals.css). 700-900 are rarely used
          // as fixed dark tones and stay static.
          0: "rgb(var(--secondary-0) / <alpha-value>)",
          50: "rgb(var(--secondary-50) / <alpha-value>)",
          100: "rgb(var(--secondary-100) / <alpha-value>)",
          200: "rgb(var(--secondary-200) / <alpha-value>)",
          300: "rgb(var(--secondary-300) / <alpha-value>)",
          400: "rgb(var(--secondary-400) / <alpha-value>)",
          500: "rgb(var(--secondary-500) / <alpha-value>)",
          600: "rgb(var(--secondary-600) / <alpha-value>)",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          DEFAULT: "#E2E8F0",
        },
        accent: {
          50: "#E5FEFF",
          100: "#B3FBFF",
          200: "#80F7FF",
          300: "#40F3FF",
          400: "#00F0FF", // brand base — fixed; used for backgrounds/decoration, contrast doesn't depend on page theme
          500: "#00C7D4",
          600: "#009DA8",
          700: "#00747C",
          800: "#004B50",
          900: "#002327",
          // Theme-aware variant used only where accent is a TEXT/icon
          // color against the page surface (eyebrows, icons, badge text).
          // Bright cyan reads fine on dark; on light it needs to darken
          // to hold AA contrast, so this one shade flips independently.
          ink: "rgb(var(--accent-ink) / <alpha-value>)",
          DEFAULT: "#00F0FF",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F7F9FB",
          100: "#EEF1F5",
          200: "#DDE3EA",
          300: "#C4CCD6",
          400: "#9AA5B1",
          500: "#707B8A",
          600: "#4E5867",
          700: "#363E4A",
          800: "#232833",
          900: "#14171F",
          950: "#0A0C11",
        },
        success: {
          light: "#E4FBF3",
          DEFAULT: "#16C784",
          dark: "#0E7D53",
          ink: "rgb(var(--success-ink) / <alpha-value>)",
        },
        warning: {
          light: "#FEF3DC",
          DEFAULT: "#F5A623",
          dark: "#A8690A",
          ink: "rgb(var(--warning-ink) / <alpha-value>)",
        },
        error: {
          light: "#FDE7E7",
          DEFAULT: "#F5484B",
          dark: "#A82426",
          ink: "rgb(var(--error-ink) / <alpha-value>)",
        },
        // A fixed dark tone used for text sitting ON TOP of accent-colored
        // backgrounds (e.g. button labels) — deliberately NOT theme-aware,
        // since accent-400 as a background stays bright in both themes and
        // always needs dark text over it regardless of page theme.
        ink: "#0A192F",
        surface: {
          base: "rgb(var(--surface-base) / <alpha-value>)",
          raised: "rgb(var(--surface-raised) / <alpha-value>)",
          overlay: "rgb(var(--surface-overlay) / <alpha-value>)",
          sunken: "rgb(var(--surface-sunken) / <alpha-value>)",
        },
        border: {
          subtle: "rgba(var(--border-rgb), 0.08)",
          DEFAULT: "rgba(var(--border-rgb), 0.14)",
          strong: "rgba(var(--border-rgb), 0.24)",
          accent: "rgba(0,240,255,0.35)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0" }],
        base: ["1rem", { lineHeight: "1.625rem", letterSpacing: "0" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.005em" }],
        xl: ["1.25rem", { lineHeight: "1.875rem", letterSpacing: "-0.005em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
        "3xl": ["1.875rem", { lineHeight: "2.375rem", letterSpacing: "-0.015em" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "4.25rem", letterSpacing: "-0.025em" }],
        "7xl": ["4.5rem", { lineHeight: "5rem", letterSpacing: "-0.03em" }],
        "8xl": ["6rem", { lineHeight: "6.25rem", letterSpacing: "-0.035em" }],
        caption: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
        label: ["0.8125rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
      },
      spacing: {
        // 8-point grid, extending Tailwind's default scale
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
      maxWidth: {
        container: "1280px",
        "container-wide": "1440px",
        "container-narrow": "960px",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "28px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(5,11,20,0.4), 0 1px 1px rgba(5,11,20,0.24)",
        raised: "0 8px 24px -8px rgba(5,11,20,0.55)",
        glow: "0 0 0 1px rgba(0,240,255,0.16), 0 0 32px rgba(0,240,255,0.12)",
        "glow-strong": "0 0 0 1px rgba(0,240,255,0.32), 0 0 48px rgba(0,240,255,0.24)",
      },
      backdropBlur: {
        nav: "12px",
      },
      screens: {
        xs: "480px",
        "3xl": "1600px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "trace-draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-node": "pulse-node 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
