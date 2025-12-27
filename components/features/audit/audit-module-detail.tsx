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
} from "lucide-react";
import type { AuditInsight, AuditIssue, AuditRecommendation } from "@/types";

function InsightCard({ insight }: { insight: AuditInsight }) {
  const TrendIcon =
    insight.trend === "up"
      ? TrendingUp
      : insight.trend === "down"
        ? TrendingDown
        : Minus;

  const trendColor =
    insight.trend === "up"
      ? "text-emerald-600"
      : insight.trend === "down"
        ? "text-red-600"
        : "text-slate-400";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-900">{insight.title}</p>
          <p className="mt-1 text-xs text-slate-500">{insight.description}</p>
        </div>
        {insight.value && (
          <div className="text-right">
            <p className="text-lg font-bold text-slate-900">{insight.value}</p>
            {insight.changePercent !== undefined && (
              <div className={`flex items-center gap-1 ${trendColor}`}>
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
    </div>
  );
}

function IssueCard({ issue }: { issue: AuditIssue }) {
  const severityConfig = {
    critical: {
      icon: AlertCircle,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      badge: "error" as const,
    },
    warning: {
      icon: AlertTriangle,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      badge: "warning" as const,
    },
    info: {
      icon: Info,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "info" as const,
    },
    success: {
      icon: CheckCircle,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      badge: "success" as const,
    },
  };

  const config = severityConfig[issue.severity];
  const Icon = config.icon;

  return (
    <div
      className={`rounded-lg border p-4 ${config.bg} ${config.border}`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 ${config.color}`} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-medium text-slate-900">{issue.title}</p>
            <Badge variant={config.badge} className="capitalize">
              {issue.severity}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-slate-600">{issue.description}</p>
          {issue.affectedElements && issue.affectedElements.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {issue.affectedElements.map((element, i) => (
                <span
                  key={i}
                  className="rounded bg-white/50 px-2 py-0.5 text-xs text-slate-600"
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
    high: { color: "text-red-700", bg: "bg-red-100" },
    medium: { color: "text-amber-700", bg: "bg-amber-100" },
    low: { color: "text-blue-700", bg: "bg-blue-100" },
  };

  const config = priorityConfig[recommendation.priority];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-indigo-100 p-2">
          <Lightbulb className="h-4 w-4 text-indigo-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-medium text-slate-900">{recommendation.title}</p>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${config.bg} ${config.color}`}
            >
              {recommendation.priority}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-600">
            {recommendation.description}
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs text-emerald-600">
            <ArrowUpRight className="h-3 w-3" />
            <span>Expected: {recommendation.estimatedImpact}</span>
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
      <div className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white p-8">
        <div className="text-center">
          <p className="text-slate-500">Select a module to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6 overflow-y-auto">
      {/* Module Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{module.name}</h1>
              <p className="mt-1 text-slate-600">{module.description}</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div
                  className={`text-4xl font-bold ${getScoreColor(module.score)}`}
                >
                  {module.score}
                </div>
                <div className="text-sm text-slate-500">
                  / {module.maxScore}
                </div>
              </div>
              <div className="h-20 w-20">
                <svg
                  className="h-full w-full -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#e2e8f0"
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
          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                Last updated: {formatRelativeTime(module.lastUpdated)}
              </span>
            </div>
            <Badge variant="success" className="capitalize">
              {module.status}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
          <CardDescription>
            Important metrics and trends from this module
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {module.insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Issues
            <Badge variant="error">{module.issues.length}</Badge>
          </CardTitle>
          <CardDescription>
            Problems detected that may affect your score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {module.issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Recommendations
            <Badge variant="primary">{module.recommendations.length}</Badge>
          </CardTitle>
          <CardDescription>
            Actionable steps to improve your score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {module.recommendations.map((rec) => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
