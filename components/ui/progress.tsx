"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "default" | "success" | "warning" | "error";
  /** Accessible label for screen readers */
  "aria-label"?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value,
      max = 100,
      showLabel = false,
      size = "md",
      color = "default",
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const sizeClasses = {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4",
    };

    const colorClasses = {
      default: "bg-indigo-600",
      success: "bg-emerald-500",
      warning: "bg-amber-500",
      error: "bg-red-500",
    };

    return (
      <div className={cn("w-full", className)} ref={ref} {...props}>
        <div
          role="progressbar"
          aria-valuenow={Math.round(percentage)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={ariaLabel || `Progress: ${Math.round(percentage)}%`}
          className={cn(
            "w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700/70",
            sizeClasses[size]
          )}
        >
          <div
            className={cn(
              "h-full rounded-full transition-[width] duration-500 ease-out motion-reduce:transition-none",
              colorClasses[color]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <span className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400" aria-hidden="true">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };
