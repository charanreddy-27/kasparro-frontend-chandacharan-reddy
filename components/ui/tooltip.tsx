"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface TooltipContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  delayDuration: number;
  tooltipId: string;
}

const TooltipContext = React.createContext<TooltipContextValue | undefined>(
  undefined
);

function useTooltip() {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a Tooltip");
  }
  return context;
}

interface TooltipProviderProps {
  children: React.ReactNode;
  delayDuration?: number;
}

export function TooltipProvider({
  children,
  delayDuration = 200,
}: TooltipProviderProps) {
  return <>{children}</>;
}

interface TooltipProps {
  children: React.ReactNode;
  delayDuration?: number;
}

let tooltipIdCounter = 0;

export function Tooltip({ children, delayDuration = 200 }: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  const tooltipId = React.useMemo(() => `tooltip-${++tooltipIdCounter}`, []);

  return (
    <TooltipContext.Provider value={{ open, setOpen, delayDuration, tooltipId }}>
      <div className="relative inline-flex">{children}</div>
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function TooltipTrigger({
  children,
  asChild,
  className,
}: TooltipTriggerProps) {
  const { setOpen, delayDuration, tooltipId } = useTooltip();
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(true);
    }, delayDuration);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: () => setOpen(true),
      onBlur: () => setOpen(false),
      onKeyDown: handleKeyDown,
      "aria-describedby": tooltipId,
    });
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onKeyDown={handleKeyDown}
      className={cn("inline-flex cursor-help", className)}
      tabIndex={0}
      aria-describedby={tooltipId}
    >
      {children}
    </div>
  );
}

interface TooltipContentProps {
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
  sideOffset?: number;
}

export function TooltipContent({
  children,
  side = "top",
  align = "center",
  className,
  sideOffset = 8,
}: TooltipContentProps) {
  const { open, tooltipId } = useTooltip();

  const positionClasses = {
    top: `bottom-full mb-2`,
    bottom: `top-full mt-2`,
    left: `right-full mr-2`,
    right: `left-full ml-2`,
  };

  const alignClasses = {
    start: side === "top" || side === "bottom" ? "left-0" : "top-0",
    center:
      side === "top" || side === "bottom"
        ? "left-1/2 -translate-x-1/2"
        : "top-1/2 -translate-y-1/2",
    end: side === "top" || side === "bottom" ? "right-0" : "bottom-0",
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={tooltipId}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.15 }}
          className={cn(
            "absolute z-50 max-w-xs rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",
            "motion-reduce:transition-none",
            positionClasses[side],
            alignClasses[align],
            className
          )}
          role="tooltip"
          aria-hidden={!open}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
