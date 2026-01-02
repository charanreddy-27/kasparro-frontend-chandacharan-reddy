"use client";

import { useAppStore } from "@/store";
import { auditModules } from "@/data/audit-modules";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
  Progress,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui";
import {
  formatRelativeTime,
  getScoreColor,
  getSeverityColor,
  getPriorityColor,
} from "@/lib/utils";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertCircle,
  AlertTriangle,
  Info,
  CheckCircle,
  Lightbulb,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  HelpCircle,
} from "lucide-react";
import type { AuditInsight, AuditIssue, AuditRecommendation } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

function InsightCard({ insight }: { insight: AuditInsight }) {
  const TrendIcon =
    insight.trend === "up"
      ? TrendingUp
      : insight.trend === "down"
        ? TrendingDown
        : Minus;

  const trendColor =
    insight.trend === "up"
      ? "text-emerald-600 dark:text-emerald-400"
      : insight.trend === "down"
        ? "text-red-600 dark:text-red-400"
        : "text-slate-400 dark:text-slate-500";

  return (
    <motion.div
      // Fixed: Added max-w-full to prevent card from overflowing container
      className="max-w-full rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Fixed: Added min-w-0 for proper flex truncation and text wrapping */}
        <div className="min-w-0 flex-1">
          <p className="break-words text-sm font-medium text-slate-900 dark:text-white">{insight.title}</p>
          <p className="mt-1 break-words text-xs text-slate-500 dark:text-slate-400">{insight.description}</p>
        </div>
        {insight.value && (
          <div className="shrink-0 text-right">
            <p className="text-lg font-bold text-slate-900 dark:text-white">{insight.value}</p>
            {insight.changePercent !== undefined && (
              <div className={`flex items-center justify-end gap-1 ${trendColor}`}>
                <TrendIcon className="h-3 w-3" />
                <span className="text-xs">
                  {insight.changePercent > 0 ? "+" : ""}
                  {insight.changePercent}%
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function IssueCard({ issue }: { issue: AuditIssue }) {
  const severityConfig = {
    critical: {
      icon: AlertCircle,
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-900/50",
      badge: "error" as const,
    },
    warning: {
      icon: AlertTriangle,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-900/50",
      badge: "warning" as const,
    },
    info: {
      icon: Info,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-900/50",
      badge: "info" as const,
    },
    success: {
      icon: CheckCircle,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-900/50",
      badge: "success" as const,
    },
  };

  const config = severityConfig[issue.severity];
  const Icon = config.icon;

  return (
    // Fixed: Added max-w-full to prevent card overflow on mobile
    <div
      className={`max-w-full rounded-lg border p-4 ${config.bg} ${config.border}`}
    >
      <div className="flex items-start gap-3">
        {/* Fixed: Added shrink-0 to prevent icon from shrinking */}
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${config.color}`} />
        {/* Fixed: Added min-w-0 for proper flex truncation and text wrapping */}
        <div className="min-w-0 flex-1">
          {/* Fixed: Changed to flex-wrap for mobile, allow title to wrap */}
          <div className="flex flex-wrap items-center gap-2">
            <p className="break-words font-medium text-slate-900 dark:text-white">{issue.title}</p>
            <Badge variant={config.badge} className="shrink-0 capitalize">
              {issue.severity}
            </Badge>
          </div>
          <p className="mt-1 break-words text-sm text-slate-600 dark:text-slate-300">{issue.description}</p>
          {issue.affectedElements && issue.affectedElements.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {issue.affectedElements.map((element, i) => (
                <span
                  key={i}
                  className="break-all rounded bg-white/50 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800/50 dark:text-slate-300"
                >
                  {element}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({
  recommendation,
}: {
  recommendation: AuditRecommendation;
}) {
  const priorityConfig = {
    high: { color: "text-red-700 dark:text-red-300", bg: "bg-red-100 dark:bg-red-900/50" },
    medium: { color: "text-amber-700 dark:text-amber-300", bg: "bg-amber-100 dark:bg-amber-900/50" },
    low: { color: "text-blue-700 dark:text-blue-300", bg: "bg-blue-100 dark:bg-blue-900/50" },
  };

  const config = priorityConfig[recommendation.priority];

  return (
    // Fixed: Added max-w-full to prevent card overflow on mobile
    <div className="max-w-full rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start gap-3">
        {/* Fixed: Added shrink-0 to prevent icon container from shrinking */}
        <div className="shrink-0 rounded-lg bg-indigo-100 p-2 dark:bg-indigo-900/50">
          <Lightbulb className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        </div>
        {/* Fixed: Added min-w-0 for proper flex truncation and text wrapping */}
        <div className="min-w-0 flex-1">
          {/* Fixed: Changed to flex-wrap for mobile */}
          <div className="flex flex-wrap items-center gap-2">
            <p className="break-words font-medium text-slate-900 dark:text-white">{recommendation.title}</p>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium capitalize ${config.bg} ${config.color}`}
            >
              {recommendation.priority}
            </span>
          </div>
          <p className="mt-1 break-words text-sm text-slate-600 dark:text-slate-300">
            {recommendation.description}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
            <ArrowUpRight className="h-3 w-3 shrink-0" />
            <span className="break-words">Expected: {recommendation.estimatedImpact}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuditModuleDetail() {
  const { selectedModuleId } = useAppStore();
  const module = auditModules.find((m) => m.id === selectedModuleId);

  if (!module) {
    return (
      // Fixed: Added min-w-0 and w-full for proper flex behavior on mobile
      // Added min-h-[200px] for visual consistency
      <div className="flex min-h-[200px] w-full min-w-0 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400">Select a module to view details</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {/* Fixed: Removed overflow-y-auto to prevent nested scroll containers
          Added min-w-0 and w-full for proper flex behavior and text wrapping
          Content now scrolls naturally with the page */}
      <motion.div
        key={module.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="w-full min-w-0 flex-1 space-y-6"
      >
        {/* Module Header */}
        <Card>
          <CardContent className="p-4 sm:p-6">
            {/* Fixed: Added gap and proper wrapping for mobile */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Fixed: Added min-w-0 for proper text truncation in flex */}
              <div className="min-w-0 flex-1">
                <h1 className="break-words text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{module.name}</h1>
                <p className="mt-1 break-words text-sm text-slate-600 dark:text-slate-400 sm:text-base">{module.description}</p>
              </div>
              {/* Fixed: Added shrink-0 and responsive sizing */}
              <div className="flex shrink-0 items-center gap-4 sm:gap-6">
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold sm:text-4xl ${getScoreColor(module.score)}`}
                  >
                    {module.score}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    / {module.maxScore}
                  </div>
                </div>
                {/* Fixed: Responsive sizing for score circle */}
                <div className="h-16 w-16 sm:h-20 sm:w-20">
                  <svg
                    className="h-full w-full -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-slate-200 dark:stroke-slate-700"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke={
                        module.score >= 80
                          ? "#10b981"
                          : module.score >= 60
                            ? "#f59e0b"
                            : "#ef4444"
                      }
                      strokeWidth="3"
                      strokeDasharray={`${module.score} ${100 - module.score}`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Fixed: Added flex-wrap for mobile */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400 sm:gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 shrink-0" />
                <span className="break-words">
                  Last updated: {formatRelativeTime(module.lastUpdated)}
                </span>
              </div>
              <Badge variant="success" className="capitalize">
                {module.status}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Key Insights - Collapsible */}
        <Accordion type="multiple" defaultValue={["insights", "issues", "recommendations"]}>
          <AccordionItem value="insights">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Key Insights</span>
                <Badge variant="primary">{module.insights.length}</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {module.insights.map((insight) => (
                  <InsightCard key={insight.id} insight={insight} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Issues - Collapsible */}
          <AccordionItem value="issues">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Issues</span>
                <Badge variant="error">{module.issues.length}</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {module.issues.map((issue) => (
                  <IssueCard key={issue.id} issue={issue} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Recommendations - Collapsible */}
          <AccordionItem value="recommendations">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Recommendations</span>
                <Badge variant="primary">{module.recommendations.length}</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {module.recommendations.map((rec) => (
                  <RecommendationCard key={rec.id} recommendation={rec} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </AnimatePresence>
  );
}
