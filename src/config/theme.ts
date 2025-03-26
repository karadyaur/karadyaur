export const theme = {
  colors: {
    primary: {
      main: '#2563eb',
      dark: '#1d4ed8',
      light: '#60a5fa',
    },
    secondary: {
      main: '#64748b',
      dark: '#475569',
      light: '#94a3b8',
    },
    accent: {
      main: '#f59e0b',
      dark: '#d97706',
      light: '#fbbf24',
    },
    success: {
      main: '#10b981',
      dark: '#059669',
      light: '#34d399',
    },
    danger: {
      main: '#ef4444',
      dark: '#dc2626',
      light: '#f87171',
    },
    warning: {
      main: '#f59e0b',
      dark: '#d97706',
      light: '#fbbf24',
    },
    info: {
      main: '#3b82f6',
      dark: '#2563eb',
      light: '#60a5fa',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      light: '#f8fafc',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f1f5f9',
      dark: '#0f172a',
      accent: '#f8fafc',
    },
    border: '#e2e8f0',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    duration: '0.3s',
    timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.8)',
    border: 'rgba(255, 255, 255, 0.2)',
    shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    blur: 'blur(8px)',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    lineHeight: {
      normal: 1.6,
      tight: 1.2,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
} as const;

export type Theme = typeof theme; 