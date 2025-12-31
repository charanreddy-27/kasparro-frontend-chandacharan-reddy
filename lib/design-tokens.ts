/**
 * Design System Tokens
 * 
 * Centralized design constants for consistent spacing, typography,
 * and color usage across the application.
 */

// ============================================
// Spacing Scale (based on 4px grid)
// ============================================

export const spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",  // 2px
  1: "0.25rem",     // 4px
  1.5: "0.375rem",  // 6px
  2: "0.5rem",      // 8px
  2.5: "0.625rem",  // 10px
  3: "0.75rem",     // 12px
  3.5: "0.875rem",  // 14px
  4: "1rem",        // 16px
  5: "1.25rem",     // 20px
  6: "1.5rem",      // 24px
  7: "1.75rem",     // 28px
  8: "2rem",        // 32px
  9: "2.25rem",     // 36px
  10: "2.5rem",     // 40px
  12: "3rem",       // 48px
  14: "3.5rem",     // 56px
  16: "4rem",       // 64px
} as const;

// ============================================
// Typography Scale
// ============================================

export const typography = {
  // Font sizes
  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
  },
  // Line heights
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  // Font weights
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  // Letter spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
  },
} as const;

// ============================================
// Color Semantic Tokens
// ============================================

export const semanticColors = {
  // Score status colors
  score: {
    excellent: {
      text: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-100 dark:bg-emerald-900/50",
      border: "border-emerald-200 dark:border-emerald-800",
    },
    good: {
      text: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/50",
      border: "border-amber-200 dark:border-amber-800",
    },
    warning: {
      text: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-100 dark:bg-orange-900/50",
      border: "border-orange-200 dark:border-orange-800",
    },
    critical: {
      text: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900/50",
      border: "border-red-200 dark:border-red-800",
    },
  },
  // Interactive states
  interactive: {
    primary: {
      default: "bg-indigo-600 dark:bg-indigo-500",
      hover: "hover:bg-indigo-700 dark:hover:bg-indigo-600",
      focus: "focus-visible:ring-indigo-500",
      text: "text-white",
    },
    secondary: {
      default: "bg-slate-100 dark:bg-slate-800",
      hover: "hover:bg-slate-200 dark:hover:bg-slate-700",
      focus: "focus-visible:ring-slate-400",
      text: "text-slate-900 dark:text-slate-100",
    },
    ghost: {
      default: "bg-transparent",
      hover: "hover:bg-slate-100 dark:hover:bg-slate-800",
      focus: "focus-visible:ring-slate-400",
      text: "text-slate-600 dark:text-slate-300",
    },
  },
  // Surface colors
  surface: {
    background: "bg-white dark:bg-slate-900",
    card: "bg-white dark:bg-slate-800",
    muted: "bg-slate-50 dark:bg-slate-800/50",
    elevated: "bg-white dark:bg-slate-800 shadow-lg",
  },
  // Border colors
  border: {
    default: "border-slate-200 dark:border-slate-700",
    muted: "border-slate-100 dark:border-slate-800",
    strong: "border-slate-300 dark:border-slate-600",
  },
  // Text colors
  text: {
    primary: "text-slate-900 dark:text-white",
    secondary: "text-slate-600 dark:text-slate-400",
    muted: "text-slate-500 dark:text-slate-500",
    inverse: "text-white dark:text-slate-900",
  },
} as const;

// ============================================
// Component-specific Tokens
// ============================================

export const components = {
  // Card styling
  card: {
    padding: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    radius: "rounded-xl",
    border: "border border-slate-200 dark:border-slate-700",
    shadow: "shadow-sm",
  },
  // Button sizing
  button: {
    height: {
      sm: "h-9",
      md: "h-10",
      lg: "h-11",
      xl: "h-12",
    },
    padding: {
      sm: "px-3",
      md: "px-4",
      lg: "px-6",
      xl: "px-8",
    },
    radius: "rounded-lg",
  },
  // Input styling
  input: {
    height: "h-10",
    padding: "px-3",
    radius: "rounded-lg",
    border: "border border-slate-300 dark:border-slate-600",
    focus: "focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
  },
  // Badge styling
  badge: {
    padding: "px-2.5 py-0.5",
    radius: "rounded-full",
    fontSize: "text-xs",
    fontWeight: "font-medium",
  },
} as const;

// ============================================
// Animation Tokens
// ============================================

export const animation = {
  // Duration
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    verySlow: "500ms",
  },
  // Easing
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  // Common transitions
  transition: {
    colors: "transition-colors duration-200",
    opacity: "transition-opacity duration-200",
    transform: "transition-transform duration-200",
    all: "transition-all duration-200",
  },
} as const;

// ============================================
// Breakpoints
// ============================================

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================
// Z-Index Scale
// ============================================

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  toast: 80,
} as const;

// ============================================
// Helper Functions
// ============================================

export function getScoreStatusColor(score: number, maxScore: number = 100) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return semanticColors.score.excellent;
  if (percentage >= 60) return semanticColors.score.good;
  if (percentage >= 40) return semanticColors.score.warning;
  return semanticColors.score.critical;
}
