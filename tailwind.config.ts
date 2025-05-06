import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: '#EEF6FF',
          100: '#D9EDFF',
          200: '#C0E0FF',
          300: '#8CCBFF',
          400: '#38BDF8', // sky-400
          500: '#0EA5E9', // sky-500
          600: '#0284C7', // sky-600
          700: '#0369A1', // sky-700
          800: '#075985', // sky-800
          900: '#0C4A6E', // sky-900
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // blue-500
          600: '#2563EB', // blue-600
          700: '#1D4ED8', // blue-700
          800: '#1E40AF', // blue-800
          900: '#1E3A8A', // blue-900
        },
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        slate: {
          750: '#1E293B', // Custom shade between slate-700 and slate-800
        },
        // Dark background shades
        dark: {
          DEFAULT: '#0A101F', // Main dark background
          lighter: '#131A30', // Slightly lighter shade for cards
          lightest: '#1E293B', // Lightest dark shade (like slate-800)
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(56, 189, 248, 0.2)',
        'glow-md': '0 0 15px rgba(56, 189, 248, 0.3)',
        'glow-lg': '0 0 20px rgba(56, 189, 248, 0.4)',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial-sky': 'radial-gradient(at 10% 90%, rgba(2, 132, 199, 0.1), transparent 40%)',
        'gradient-radial-blue': 'radial-gradient(at 90% 10%, rgba(37, 99, 235, 0.1), transparent 40%)',
        'gradient-primary': 'linear-gradient(to right, rgba(14, 165, 233, 0.9), rgba(37, 99, 235, 0.9))',
        'gradient-logo': 'linear-gradient(to bottom right, #FFFFFF, #7DD3FC)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
