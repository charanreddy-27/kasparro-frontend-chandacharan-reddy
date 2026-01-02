"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }
  return context;
}

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string[];
  className?: string;
  /** Accessible label for the accordion group */
  "aria-label"?: string;
}

export function Accordion({
  children,
  type = "single",
  defaultValue = [],
  className,
  "aria-label": ariaLabel,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultValue);

  const toggleItem = React.useCallback(
    (value: string) => {
      if (type === "single") {
        setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
      } else {
        setOpenItems((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
      }
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div
        className={cn("space-y-2", className)}
        role="region"
        aria-label={ariaLabel}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  triggerId: string;
  contentId: string;
}

const AccordionItemContext = React.createContext<
  AccordionItemContextValue | undefined
>(undefined);

function useAccordionItem() {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error("useAccordionItem must be used within an AccordionItem");
  }
  return context;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionItem({
  children,
  value,
  className,
}: AccordionItemProps) {
  const { openItems } = useAccordion();
  const isOpen = openItems.includes(value);
  
  // Generate stable IDs for ARIA relationships
  const triggerId = `accordion-trigger-${value}`;
  const contentId = `accordion-content-${value}`;

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, triggerId, contentId }}>
      <div
        className={cn(
          "rounded-lg border border-slate-200 bg-white transition-shadow duration-200 dark:border-slate-700 dark:bg-slate-800",
          isOpen && "shadow-sm",
          className
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({
  children,
  className,
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordion();
  const { value, isOpen, triggerId, contentId } = useAccordionItem();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(value);
    }
  };

  return (
    <button
      id={triggerId}
      type="button"
      onClick={() => toggleItem(value)}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-medium transition-colors duration-150",
        "text-slate-900 hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset",
        isOpen && "bg-slate-50/50 dark:bg-slate-800/30",
        className
      )}
      aria-expanded={isOpen}
      aria-controls={contentId}
    >
      {children}
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="shrink-0 motion-reduce:transition-none"
      >
        <ChevronDown className="h-4 w-4 text-slate-400 dark:text-slate-500" aria-hidden="true" />
      </motion.div>
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const { isOpen, triggerId, contentId } = useAccordionItem();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.15, ease: [0.33, 1, 0.68, 1] }}
          className="overflow-hidden motion-reduce:transition-none"
        >
          <div
            className={cn(
              "border-t border-slate-100 px-4 py-4 dark:border-slate-700/70",
              className
            )}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
