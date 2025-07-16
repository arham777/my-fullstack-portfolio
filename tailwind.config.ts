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
        sans: ["Inter var", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter var", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
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
          50: '#EBF4FF',
          100: '#D6E9FF',
          200: '#ADD2FF',
          300: '#84BAFF',
          400: '#5A9EFF',
          500: '#2E83FF', // New primary blue
          600: '#0064E5', // New primary-600
          700: '#0053BD',
          800: '#003F8F',
          900: '#003166',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: '#F0F5FC',
          100: '#E5EDFA',
          200: '#CFDCF5',
          300: '#ABC6EC',
          400: '#8AADDF',
          500: '#6A93D2', 
          600: '#4C75BD', 
          700: '#3859A0', 
          800: '#26407B', 
          900: '#1A2F5E', 
        },
        // Yellow accent colors - use sparingly
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          300: '#FFDC73',
          400: '#FFD147',
          500: '#FFC300', // Main accent
          600: '#E6B000',
          700: '#CC9C00',
        },
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        // Dark background shades - deep blue palette
        dark: {
          DEFAULT: '#000814', // Base background - darkest blue-black
          surface: '#001123', // Card surface - slightly lighter
          light: '#001d3d', // Lighter surface - for hover states
          lighter: '#002855', // Lightest surface - for active states
          border: '#003566', // Border color - medium blue
          muted: '#00111f', // Muted backgrounds 
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        'accent': '0 4px 14px 0 rgba(0, 100, 229, 0.3)',
        'yellow': '0 4px 14px 0 rgba(255, 195, 0, 0.3)',
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
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(to right bottom, rgba(0, 100, 229, 0.05), rgba(0, 8, 20, 0))',
        'gradient-accent': 'linear-gradient(135deg, #003566, #001d3d)',
        'gradient-yellow': 'linear-gradient(135deg, #FFC300, #E6B000)',
        'gradient-text': 'linear-gradient(to right, #caf0f8, #90e0ef)',
        'gradient-dark': 'linear-gradient(to bottom, #000814, #001529, #000814)',
        'gradient-dark-radial': 'radial-gradient(circle at center, #001d3d, #000814, #000814)',
        'gradient-dark-diagonal': 'linear-gradient(135deg, #000814, #001d3d, #000814)',
        'gradient-dark-blue': 'linear-gradient(to bottom, #000814, #001d3d, #000814)',
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
