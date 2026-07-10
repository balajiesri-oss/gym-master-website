import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: "#ff0033",
          dim: "#cc0029",
          glow: "#ff3355",
        },
        surface: {
          DEFAULT: "#0a0a0a",
          card: "#111111",
          elevated: "#161616",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "system-ui", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 0, 51, 0.45), 0 0 60px rgba(255, 0, 51, 0.15)",
        "neon-sm": "0 0 12px rgba(255, 0, 51, 0.35)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,0,51,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.85", filter: "brightness(1.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
