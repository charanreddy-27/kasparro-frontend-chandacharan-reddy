/**
 * Accessibility utilities for screen readers and keyboard navigation
 * These helpers ensure the AI-SEO platform is usable by everyone
 */

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

// ============================================
// Screen Reader Utilities
// ============================================

/**
 * Visually hidden component for screen reader only content
 * Use for labels, descriptions, and context that sighted users don't need
 */
export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {children}
    </span>
  );
}

/**
 * Live region announcer for dynamic content updates
 * Politely announces changes to screen reader users
 */
interface LiveRegionProps {
  message: string;
  assertive?: boolean;
}

export function LiveRegion({ message, assertive = false }: LiveRegionProps) {
  return (
    <div
      aria-live={assertive ? "assertive" : "polite"}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}

// ============================================
// Keyboard Navigation Hooks
// ============================================

/**
 * Hook for handling escape key to close dialogs/modals
 */
export function useEscapeKey(onEscape: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onEscape();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, enabled]);
}

/**
 * Hook for trapping focus within a container (for modals/dialogs)
 */
export function useFocusTrap(enabled = true) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Focus first element on mount
    firstElement?.focus();

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [enabled]);

  return containerRef;
}

/**
 * Hook for arrow key navigation in lists
 */
interface UseArrowNavigationOptions {
  itemSelector: string;
  onSelect?: (element: HTMLElement) => void;
  vertical?: boolean;
  wrap?: boolean;
}

export function useArrowNavigation({
  itemSelector,
  onSelect,
  vertical = true,
  wrap = true,
}: UseArrowNavigationOptions) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!containerRef.current) return;

      const items = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(itemSelector)
      );
      
      const currentIndex = items.findIndex(
        (item) => item === document.activeElement
      );

      if (currentIndex === -1) return;

      const prevKey = vertical ? "ArrowUp" : "ArrowLeft";
      const nextKey = vertical ? "ArrowDown" : "ArrowRight";

      let nextIndex = currentIndex;

      if (event.key === prevKey) {
        event.preventDefault();
        nextIndex = currentIndex - 1;
        if (nextIndex < 0) nextIndex = wrap ? items.length - 1 : 0;
      } else if (event.key === nextKey) {
        event.preventDefault();
        nextIndex = currentIndex + 1;
        if (nextIndex >= items.length) nextIndex = wrap ? 0 : items.length - 1;
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect?.(items[currentIndex]);
        return;
      } else if (event.key === "Home") {
        event.preventDefault();
        nextIndex = 0;
      } else if (event.key === "End") {
        event.preventDefault();
        nextIndex = items.length - 1;
      }

      items[nextIndex]?.focus();
    },
    [itemSelector, onSelect, vertical, wrap]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return containerRef;
}

// ============================================
// Reduced Motion Hook
// ============================================

/**
 * Hook to check if user prefers reduced motion
 * Use this to disable or simplify animations
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

// ============================================
// ARIA Label Helpers
// ============================================

/**
 * Generate descriptive ARIA labels for AI-SEO metrics
 */
export function getScoreAriaLabel(
  metricName: string,
  score: number,
  maxScore: number = 100
): string {
  const percentage = Math.round((score / maxScore) * 100);
  let quality: string;
  
  if (percentage >= 80) quality = "excellent";
  else if (percentage >= 60) quality = "good";
  else if (percentage >= 40) quality = "needs improvement";
  else quality = "critical";

  return `${metricName}: ${score} out of ${maxScore}, rated ${quality}`;
}

/**
 * Generate ARIA label for chart data
 */
export function getChartAriaLabel(
  chartTitle: string,
  dataPoints: { label: string; value: number }[]
): string {
  const summary = dataPoints
    .map((d) => `${d.label}: ${d.value}`)
    .join(", ");
  
  return `${chartTitle}. Data points: ${summary}`;
}

/**
 * Generate ARIA label for progress indicators
 */
export function getProgressAriaLabel(
  label: string,
  current: number,
  total: number
): string {
  const percentage = Math.round((current / total) * 100);
  return `${label}: ${percentage}% complete, ${current} of ${total}`;
}
