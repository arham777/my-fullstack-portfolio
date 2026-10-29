const theme = {
  // Colors
  colors: {
    primary: {
      20: '#00344d80',
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
    background: {
      main: '#0A101F', // Dark blue-black from navbar
      light: '#111827', // slate-900
      card: '#1E293B', // slate-800
      modal: 'rgba(10, 16, 31, 0.95)', // #0A101F with opacity
    },
    text: {
      primary: '#FFFFFF', // white
      secondary: '#E0F2FE', // sky-100
      muted: '#BAE6FD', // sky-200/70
      subtle: '#7DD3FC', // sky-300
    },
    border: {
      light: 'rgba(56, 189, 248, 0.2)', // sky-400/20
      main: 'rgba(14, 165, 233, 0.3)', // sky-500/30
      accent: 'rgba(2, 132, 199, 0.4)', // sky-600/40
    },
    gradient: {
      primary: 'linear-gradient(to right, rgba(14, 165, 233, 0.9), rgba(37, 99, 235, 0.9))', // sky-500/90 to blue-600/90
      logo: 'linear-gradient(to bottom right, #FFFFFF, #7DD3FC)', // white to sky-300
      border: 'linear-gradient(to right, rgba(34, 211, 238, 0.2), rgba(14, 165, 233, 0.2), rgba(37, 99, 235, 0.2))' // cyan-400/20 via sky-500/20 to blue-600/20
    },
    state: {
      success: '#10B981', // emerald-500
      error: '#EF4444', // red-500
      warning: '#F59E0B', // amber-500
      info: '#3B82F6', // blue-500
    }
  },
  
  // Tailwind Classes
  tailwind: {
    // Backgrounds
    bg: {
      main: 'bg-[#0A101F]',
      mainTransparent: 'bg-[#0A101F]/85',
      light: 'bg-slate-900',
      card: 'bg-slate-800/50',
      modal: 'bg-[#0A101F]/95',
      gradient: 'bg-gradient-to-r from-sky-500/90 to-blue-600/90',
      buttonPrimary: 'bg-sky-500 hover:bg-sky-600 active:bg-sky-700',
      buttonSecondary: 'bg-slate-700/60 hover:bg-slate-600/70 active:bg-slate-500/70',
      hoverHighlight: 'hover:bg-sky-500/10',
    },
    
    // Text
    text: {
      primary: 'text-white',
      secondary: 'text-sky-100',
      muted: 'text-sky-200/70',
      hover: 'hover:text-sky-100',
      gradient: 'text-transparent bg-clip-text bg-gradient-to-br from-white to-sky-300',
    },
    
    // Borders
    border: {
      light: 'border-sky-400/20',
      main: 'border-sky-700/30',
      accent: 'border-sky-600/40',
      focus: 'focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
      focusSlate: 'focus-visible:ring-offset-slate-800',
      focusDark: 'focus-visible:ring-offset-[#0A101F]',
    },
    
    // Effects
    effect: {
      shadow: 'shadow-lg shadow-sky-900/10',
      glow: 'shadow-md shadow-sky-400/20',
      backdrop: 'backdrop-blur-lg',
    }
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(10, 16, 31, 0.1)',
    md: '0 4px 6px rgba(10, 16, 31, 0.1)',
    lg: '0 10px 15px rgba(10, 16, 31, 0.1)',
    xl: '0 20px 25px rgba(10, 16, 31, 0.1)',
    highlight: '0 0 15px rgba(56, 189, 248, 0.3)',
  },
  
  // Transitions
  transitions: {
    fast: 'transition-all duration-150 ease-in-out',
    medium: 'transition-all duration-200 ease-in-out',
    slow: 'transition-all duration-300 ease-in-out',
    spring: 'transition-all duration-300 cubic-bezier(0.23, 1, 0.32, 1)',
  },
  
  // Spacing
  spacing: {
    section: 'py-16 md:py-24',
    container: 'px-4 sm:px-6 md:px-8',
    header: 'mb-8 md:mb-12',
  },
};

export default theme; 