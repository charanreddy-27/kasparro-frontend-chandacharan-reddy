"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Search,
  FileQuestion,
  TrendingUp,
  BarChart3,
  AlertCircle,
  Sparkles,
  Plus,
  RefreshCw,
} from "lucide-react";
import { Button } from "./button";

// ============================================
// Base Empty State
// ============================================

interface EmptyStateProps {
  /** Icon to display */
  icon?: React.ComponentType<{ className?: string }>;
  /** Main title */
  title: string;
  /** Description text */
  description: string;
  /** Primary action button */
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ComponentType<{ className?: string }>;
  };
  /** Secondary action */
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  /** Visual style variant */
  variant?: "default" | "compact" | "centered";
  className?: string;
}

export function EmptyState({
  icon: Icon = FileQuestion,
  title,
  description,
  action,
  secondaryAction,
  variant = "default",
  className,
}: EmptyStateProps) {
  const ActionIcon = action?.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex flex-col items-center text-center",
        variant === "default" && "rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-8 dark:border-slate-600 dark:bg-slate-800/30",
        variant === "compact" && "py-6",
        variant === "centered" && "min-h-[300px] justify-center p-8",
        className
      )}
      role="status"
      aria-label={title}
    >
      <div className="mb-4 rounded-full bg-slate-100 p-4 dark:bg-slate-800">
        <Icon className="h-8 w-8 text-slate-400 dark:text-slate-500" aria-hidden="true" />
      </div>
      
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      
      <p className="mb-6 max-w-md text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
      
      {(action || secondaryAction) && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {action && (
            <Button variant="primary" onClick={action.onClick}>
              {ActionIcon && <ActionIcon className="h-4 w-4" />}
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="ghost" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}

// ============================================
// Specialized Empty States for AI-SEO Context
// ============================================

interface NoDataEmptyStateProps {
  context: "audit" | "dashboard" | "activity" | "search" | "brand";
  onAction?: () => void;
}

const emptyStateConfig = {
  audit: {
    icon: BarChart3,
    title: "No Audit Data Yet",
    description: "Your AI-SEO audit will analyze how AI assistants discover and reference your brand. Run your first audit to see how LLMs perceive your content.",
    actionLabel: "Start Audit",
    actionIcon: Sparkles,
  },
  dashboard: {
    icon: TrendingUp,
    title: "No Analytics Available",
    description: "Once you've connected your brand and run an audit, you'll see AI visibility metrics, LLM citation rates, and content readiness scores here.",
    actionLabel: "Connect Brand",
    actionIcon: Plus,
  },
  activity: {
    icon: RefreshCw,
    title: "No Recent Activity",
    description: "Activity will appear here as you audit your content, track improvements, and monitor AI visibility changes across ChatGPT, Gemini, and other AI assistants.",
    actionLabel: "View Audit",
    actionIcon: BarChart3,
  },
  search: {
    icon: Search,
    title: "No Results Found",
    description: "We couldn't find any matching content. Try adjusting your search terms or filters to discover relevant AI-SEO insights.",
    actionLabel: "Clear Filters",
    actionIcon: RefreshCw,
  },
  brand: {
    icon: Sparkles,
    title: "No Brands Connected",
    description: "Connect your first brand to begin tracking AI visibility. See how your content performs across ChatGPT, Gemini, Perplexity, and other AI platforms.",
    actionLabel: "Add Brand",
    actionIcon: Plus,
  },
};

export function NoDataEmptyState({ context, onAction }: NoDataEmptyStateProps) {
  const config = emptyStateConfig[context];
  
  return (
    <EmptyState
      icon={config.icon}
      title={config.title}
      description={config.description}
      action={onAction ? {
        label: config.actionLabel,
        onClick: onAction,
        icon: config.actionIcon,
      } : undefined}
    />
  );
}

// ============================================
// Error State
// ============================================

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = "Something went wrong",
  description = "We encountered an error loading this content. This might be a temporary issue — please try again.",
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex flex-col items-center rounded-xl border border-red-200 bg-red-50/50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/20",
        className
      )}
      role="alert"
    >
      <div className="mb-4 rounded-full bg-red-100 p-4 dark:bg-red-900/50">
        <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" aria-hidden="true" />
      </div>
      
      <h3 className="mb-2 text-lg font-semibold text-red-900 dark:text-red-200">
        {title}
      </h3>
      
      <p className="mb-6 max-w-md text-sm text-red-700 dark:text-red-300">
        {description}
      </p>
      
      {onRetry && (
        <Button
          variant="outline"
          onClick={onRetry}
          className="border-red-300 text-red-700 hover:bg-red-100 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-900/50"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      )}
    </motion.div>
  );
}

// ============================================
// Loading State with AI-themed message
// ============================================

interface LoadingStateProps {
  message?: string;
  className?: string;
}

const aiLoadingMessages = [
  "Analyzing AI visibility signals...",
  "Scanning LLM response patterns...",
  "Evaluating content architecture...",
  "Processing E-E-A-T signals...",
  "Checking knowledge graph presence...",
];

export function LoadingState({ message, className }: LoadingStateProps) {
  const [displayMessage, setDisplayMessage] = React.useState(
    message || aiLoadingMessages[0]
  );

  React.useEffect(() => {
    if (message) return;
    
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % aiLoadingMessages.length;
      setDisplayMessage(aiLoadingMessages[index]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [message]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12",
        className
      )}
      role="status"
      aria-live="polite"
    >
      {/* Animated spinner */}
      <div className="relative mb-6">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600 motion-reduce:animate-none dark:border-indigo-800 dark:border-t-indigo-400" />
        <Sparkles className="absolute inset-0 m-auto h-5 w-5 text-indigo-600 dark:text-indigo-400" />
      </div>
      
      <motion.p
        key={displayMessage}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-medium text-slate-600 dark:text-slate-400"
      >
        {displayMessage}
      </motion.p>
      
      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
}
