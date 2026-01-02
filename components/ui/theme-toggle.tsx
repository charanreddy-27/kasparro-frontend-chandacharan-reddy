"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "dropdown";
}

export function ThemeToggle({ className, variant = "icon" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn("h-9 w-9", className)}
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  if (variant === "dropdown") {
    return (
      <div className={cn("relative", className)}>
        {/* Increased touch target size to minimum 44px for accessibility */}
        <div className="flex items-center gap-0.5 rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-700 dark:bg-slate-800 sm:gap-1 sm:p-1">
          <button
            onClick={() => setTheme("light")}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md transition-colors sm:h-7 sm:w-7",
              theme === "light"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            )}
            aria-label="Light theme"
            aria-pressed={theme === "light"}
          >
            <Sun className="h-4 w-4" />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md transition-colors sm:h-7 sm:w-7",
              theme === "dark"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            )}
            aria-label="Dark theme"
            aria-pressed={theme === "dark"}
          >
            <Moon className="h-4 w-4" />
          </button>
          <button
            onClick={() => setTheme("system")}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md transition-colors sm:h-7 sm:w-7",
              theme === "system"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            )}
            aria-label="System theme"
            aria-pressed={theme === "system"}
          >
            <Monitor className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  // Icon variant - cycles through themes
  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className={cn(
        "h-9 w-9 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
        className
      )}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
