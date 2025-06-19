/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Soft Pink
        primary: "#FF69B4", // Hot pink (bright base)
        "primary-50": "#FFF0F5", // Ultra light pink
        "primary-100": "#FFE4F0", // Light pink
        "primary-200": "#FFC8E0", // Medium pink
        "primary-300": "#FF9CC0", // Pink lighter
        "primary-400": "#FF70A0", // Pink bright
        "primary-500": "#FF69B4", // Base hot pink
        "primary-600": "#E55AA0", // Darker pink
        "primary-700": "#CC4B8C", // Deep pink
        "primary-800": "#B23C78", // Very deep pink
        "primary-900": "#992D64", // Darkest pink

        // Secondary Colors - Lavender
        secondary: "#E6E6FA", // Lavender (soft base)
        "secondary-50": "#F8F8FF", // Ultra light lavender
        "secondary-100": "#F0F0FF", // Light lavender
        "secondary-200": "#E0E0FF", // Medium lavender
        "secondary-300": "#C8C8FF", // Lavender lighter
        "secondary-400": "#B0B0FF", // Lavender bright
        "secondary-500": "#E6E6FA", // Base lavender
        "secondary-600": "#D4D4F0", // Darker lavender
        "secondary-700": "#C2C2E6", // Deep lavender
        "secondary-800": "#B0B0DC", // Very deep lavender
        "secondary-900": "#9E9ED2", // Darkest lavender

        // Accent Colors - Soft Mint
        accent: "#98D8C8", // Soft mint green (calming base)
        "accent-50": "#F0FAF8", // Ultra light mint
        "accent-100": "#E0F5F0", // Light mint
        "accent-200": "#C1EBE1", // Medium mint
        "accent-300": "#A2E1D2", // Mint lighter
        "accent-400": "#83D7C3", // Mint bright
        "accent-500": "#98D8C8", // Base soft mint
        "accent-600": "#7AC2B0", // Darker mint
        "accent-700": "#5CAC98", // Deep mint
        "accent-800": "#3E9680", // Very deep mint
        "accent-900": "#208068", // Darkest mint

        // Background Colors (lighter blue-gray theme)
        background: "#1A1A2E", // Dark blue-gray
        surface: "#16213E", // Medium blue-gray
        "surface-light": "#0F3460", // Lighter blue-gray
        "surface-dark": "#0F0F23", // Darker blue-gray

        // Text Colors (lighter for better contrast)
        "text-primary": "#F8F9FA", // Very light gray
        "text-secondary": "#E9ECEF", // Light gray
        "text-tertiary": "#2D3748", // Dark gray for contrast
        "text-muted": "#A0AEC0", // Medium gray

        // Status Colors (pastel theme)
        success: "#98D8C8", // Soft pastel mint
        "success-50": "#F0FAF8",
        "success-100": "#E0F5F0",
        "success-200": "#C1EBE1",
        "success-300": "#A2E1D2",
        "success-400": "#83D7C3",
        "success-500": "#98D8C8", // Base soft mint
        "success-600": "#7AC2B0",
        "success-700": "#5CAC98",
        "success-800": "#3E9680",
        "success-900": "#208068",
        
        warning: "#FFB6C1", // Light pastel pink
        "warning-50": "#FFF5F7",
        "warning-100": "#FFE4E9",
        "warning-200": "#FFC9D3",
        "warning-300": "#FFADBD",
        "warning-400": "#FF92A7",
        "warning-500": "#FFB6C1", // Base light pink
        "warning-600": "#E6A4B0",
        "warning-700": "#CC929F",
        "warning-800": "#B3808E",
        "warning-900": "#996E7D",
        
        error: "#FFB3BA", // Soft pastel coral
        "error-50": "#FFF5F6",
        "error-100": "#FFE4E7",
        "error-200": "#FFC9CF",
        "error-300": "#FFADB7",
        "error-400": "#FF929F",
        "error-500": "#FFB3BA", // Base soft coral
        "error-600": "#E6A1A7",
        "error-700": "#CC8F94",
        "error-800": "#B37D81",
        "error-900": "#996B6E",

        // Border Colors (lighter theme)
        border: "#2D3748", // Medium gray
        "border-light": "#4A5568", // Lighter gray
        "border-dark": "#1A202C", // Darker gray
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Sora", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.2" }],
        "7xl": ["4.5rem", { lineHeight: "1.2" }],
        "8xl": ["6rem", { lineHeight: "1.2" }],
        "9xl": ["8rem", { lineHeight: "1.2" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(255, 105, 180, 0.3)", // Hot pink glow
        glow: "0 0 20px rgba(255, 105, 180, 0.4)",
        "glow-lg": "0 0 30px rgba(255, 105, 180, 0.5)",
        "glow-secondary": "0 0 20px rgba(230, 230, 250, 0.4)", // Lavender glow
        "glow-accent": "0 0 20px rgba(152, 216, 200, 0.4)", // Soft mint glow

        "glow-success": "0 0 20px rgba(152, 216, 200, 0.4)", // Soft mint glow
        elevation: "0 4px 20px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255, 105, 180, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(255, 105, 180, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
