// Futuristic Cyber Dashboard Color Palette
export const THEME = {
  colors: {
    // Primary Colors
    primary: '#0F172A', // Deep Navy
    secondary: '#1E293B', // Dark Slate
    tertiary: '#334155', // Slate

    // Accent Colors
    cyber: '#00D9FF', // Cyan
    neon: '#38BDF8', // Sky Blue
    glow: '#60A5FA', // Bright Blue
    accent: '#3B82F6', // Electric Blue
    warning: '#FFA500', // Orange (for alerts)
    danger: '#FF4757', // Red (for critical alerts)
    success: '#00FF88', // Neon Green
    info: '#00D9FF', // Cyan

    // Text Colors
    text: '#E2E8F0', // Light Gray
    textMuted: '#94A3B8', // Muted Gray
    textDim: '#64748B', // Dim Gray

    // Backgrounds
    bg: '#020617', // Darkest
    bgLight: '#0F172A',
    bgCard: 'rgba(15, 23, 42, 0.8)',
    glassBg: 'rgba(15, 23, 42, 0.6)',

    // Borders
    border: 'rgba(148, 163, 184, 0.1)',
    borderLight: 'rgba(148, 163, 184, 0.2)',
    borderGlow: 'rgba(56, 189, 248, 0.3)',
  },

  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
    md: '0 4px 12px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.5)',
    xl: '0 12px 36px rgba(0, 0, 0, 0.6)',
    glow: '0 0 20px rgba(56, 189, 248, 0.3)',
    glowStrong: '0 0 30px rgba(56, 189, 248, 0.5)',
  },

  transitions: {
    smooth: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    smoothSlow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    snappy: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },

  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '9999px',
  },
};

export default THEME;
