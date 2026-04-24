import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f3f7f7",
          100: "#dde6e7",
          200: "#bccdce",
          300: "#90a9ab",
          400: "#617f82",
          500: "#486468",
          600: "#365055",
          700: "#2d4145",
          800: "#273639",
          900: "#1f2c2f"
        },
        sand: {
          50: "#faf7f1",
          100: "#f2e9d8",
          200: "#e5d2ad",
          300: "#d6b47a",
          400: "#c9984f",
          500: "#bc7f31",
          600: "#9c6526",
          700: "#7d4d22",
          800: "#683f21",
          900: "#593720"
        }
      },
      boxShadow: {
        panel: "0 24px 80px rgba(9, 18, 19, 0.16)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
