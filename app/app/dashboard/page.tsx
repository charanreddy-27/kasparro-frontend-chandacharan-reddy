"use client";

import * as React from "react";
import { useAppStore } from "@/store";
import { brands } from "@/data/brands";
import { dashboardSnapshots, recentActivity } from "@/data/dashboard";
import { auditModules, calculateOverallScore } from "@/data/audit-modules";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Progress,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  DashboardSkeleton,
  NoDataEmptyState,
} from "@/components/ui";
import { formatRelativeTime, getScoreColor, getScoreBgColor } from "@/lib/utils";
import { AI_SEO_METRICS, CHART_DESCRIPTIONS } from "@/lib/content";
import {
  SEOComparisonChart,
  AIReadinessRadar,
  TrendChart,
  ModuleScoreChart,
} from "@/components/features/dashboard";
import {
  Eye,
  Shield,
  Target,
  Clock,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Info,
  Zap,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Memoized activity icon getter to prevent recreation
const getActivityIcon = (type: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    audit: <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
    improvement: <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />,
    alert: <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />,
    milestone: <Zap className="h-4 w-4 text-violet-600 dark:text-violet-400" aria-hidden="true" />,
  };
  return iconMap[type] || <Activity className="h-4 w-4 text-slate-600 dark:text-slate-400" aria-hidden="true" />;
};

// Memoized snapshot card component
const SnapshotCard = React.memo(function SnapshotCard({
  card,
  index,
}: {
  card: {
    title: string;
    value: string | number;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
    tooltip: string;
    ariaLabel: string;
  };
  index: number;
}) {
  const Icon = card.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="motion-reduce:transition-none"
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                    <span className="sr-only">Learn more about {card.title}</span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm">
                    <p>{card.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <p 
                className="mt-2 text-2xl font-bold text-slate-900 dark:text-white"
                aria-label={card.ariaLabel}
              >
                {card.value}
              </p>
            </div>
            <div className={`rounded-lg p-2 ${card.bgColor}`}>
              <Icon className={`h-5 w-5 ${card.color}`} aria-hidden="true" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

export default function DashboardPage() {
  const { selectedBrandId } = useAppStore();
  const [isLoading, setIsLoading] = React.useState(true);
  
  // Simulate initial data loading
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedBrandId]);

  const brand = brands.find((b) => b.id === selectedBrandId) ?? brands[0];
  const snapshot = dashboardSnapshots[selectedBrandId] ?? dashboardSnapshots[brands[0].id];
  const activities = recentActivity[selectedBrandId] ?? recentActivity[brands[0].id];

  const overallScore = calculateOverallScore();

  // Module scores for chart - memoized
  const moduleScores = React.useMemo(
    () => auditModules.map((m) => ({
      name: m.name.split(" ")[0],
      score: m.score,
      maxScore: m.maxScore,
    })),
    []
  );

  // Enhanced snapshot cards with AI-SEO context
  const snapshotCards = React.useMemo(() => [
    {
      title: AI_SEO_METRICS.aiVisibilityScore.label,
      value: snapshot.aiVisibilityScore,
      icon: Eye,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
      tooltip: AI_SEO_METRICS.aiVisibilityScore.fullDescription,
      ariaLabel: `AI Visibility Score: ${snapshot.aiVisibilityScore} out of 100`,
    },
    {
      title: AI_SEO_METRICS.trustEeatScore.label,
      value: snapshot.trustEeatScore,
      icon: Shield,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/50",
      tooltip: AI_SEO_METRICS.trustEeatScore.fullDescription,
      ariaLabel: `Trust and E-E-A-T Score: ${snapshot.trustEeatScore} out of 100`,
    },
    {
      title: AI_SEO_METRICS.nonBrandedCoverage.label,
      value: `${snapshot.nonBrandedKeywordCoverage}%`,
      icon: Target,
      color: "text-violet-600 dark:text-violet-400",
      bgColor: "bg-violet-100 dark:bg-violet-900/50",
      tooltip: AI_SEO_METRICS.nonBrandedCoverage.fullDescription,
      ariaLabel: `Non-Branded Keyword Coverage: ${snapshot.nonBrandedKeywordCoverage} percent`,
    },
    {
      title: "Last Audit",
      value: formatRelativeTime(snapshot.lastAuditTimestamp),
      icon: Clock,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-100 dark:bg-amber-900/50",
      tooltip: "Timestamp of the most recent comprehensive audit across all 7 modules. Regular audits ensure your AI visibility tracking stays current.",
      ariaLabel: `Last audit completed ${formatRelativeTime(snapshot.lastAuditTimestamp)}`,
    },
  ], [snapshot]);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-4 sm:space-y-6" role="main" aria-label="AI-SEO Dashboard">
      {/* Page Header - improved mobile layout */}
      <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Dashboard</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            AI visibility overview for <span className="font-medium">{brand.name}</span>
          </p>
        </div>
        <Link
          href="/app/audit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 sm:w-auto"
        >
          <BarChart3 className="h-4 w-4" aria-hidden="true" />
          View Full Audit
        </Link>
      </div>

      {/* Overall Score Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="motion-reduce:transition-none"
      >
        <Card className="border-indigo-100 bg-gradient-to-r from-indigo-50 to-violet-50 dark:border-indigo-900 dark:from-indigo-950/50 dark:to-violet-950/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:gap-6">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                    Overall AI-SEO Score
                  </h2>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      <span className="sr-only">What does this score mean?</span>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs sm:max-w-sm">
                      <p className="mb-1 font-medium">Your AI Discoverability Index</p>
                      <p>Weighted average across all 7 audit modules. This score predicts how likely AI assistants are to reference your content when users ask relevant questions.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
                  Aggregated readiness for AI-powered search discovery
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 sm:text-4xl"
                    aria-label={`Overall score: ${overallScore} out of 100`}
                  >
                    {overallScore}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">out of 100</div>
                </div>
                <div className="h-14 w-14 sm:h-16 sm:w-16" role="img" aria-label={`Score gauge showing ${overallScore}%`}>
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
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
                      stroke="#6366f1"
                      strokeWidth="3"
                      strokeDasharray={`${overallScore} ${100 - overallScore}`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Snapshot Cards */}
      <section aria-label="Key metrics">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {snapshotCards.map((card, index) => (
            <SnapshotCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </section>

      {/* Issues Summary & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Issues Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              Issues Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4" role="list" aria-label="Issue categories">
              <div className="flex items-center justify-between rounded-lg bg-red-50 p-4 dark:bg-red-900/20" role="listitem">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-red-900 dark:text-red-300">Critical Issues</span>
                    <p className="text-xs text-red-700 dark:text-red-400">Blocking AI visibility</p>
                  </div>
                </div>
                <Badge variant="error" aria-label={`${snapshot.criticalIssues} critical issues`}>
                  {snapshot.criticalIssues}
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20" role="listitem">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-amber-900 dark:text-amber-300">Warnings</span>
                    <p className="text-xs text-amber-700 dark:text-amber-400">Limiting potential reach</p>
                  </div>
                </div>
                <Badge variant="warning" aria-label={`${snapshot.totalIssues - snapshot.criticalIssues} warnings`}>
                  {snapshot.totalIssues - snapshot.criticalIssues}
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20" role="listitem">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-emerald-900 dark:text-emerald-300">Audit Progress</span>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400">Modules analyzed</p>
                  </div>
                </div>
                <Badge variant="success" aria-label={`${snapshot.auditProgress} percent complete`}>
                  {snapshot.auditProgress}%
                </Badge>
              </div>
            </div>
            <Link
              href="/app/audit"
              className="mt-4 block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 focus-visible:underline dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              View all issues →
            </Link>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {activities.length === 0 ? (
              <NoDataEmptyState context="activity" />
            ) : (
              <div className="space-y-4" role="feed" aria-label="Recent activity feed">
                {activities.slice(0, 5).map((activity) => (
                  <article
                    key={activity.id}
                    className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0 dark:border-slate-700"
                  >
                    <div className="mt-0.5 rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {activity.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {activity.description}
                      </p>
                    </div>
                    <time className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">
                      {formatRelativeTime(activity.timestamp)}
                    </time>
                  </article>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Data Visualizations */}
      <section aria-label="Performance analytics" className="grid gap-6 lg:grid-cols-2">
        {/* SEO vs AI Visibility Comparison */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>{CHART_DESCRIPTIONS.seoVsAiComparison.title}</CardTitle>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <span className="sr-only">About this chart</span>
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p className="font-medium mb-1">{CHART_DESCRIPTIONS.seoVsAiComparison.description}</p>
                  <p className="text-slate-500 dark:text-slate-400">{CHART_DESCRIPTIONS.seoVsAiComparison.insight}</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Traditional rankings vs AI assistant citations
            </p>
          </CardHeader>
          <CardContent>
            <SEOComparisonChart height={280} />
          </CardContent>
        </Card>

        {/* AI Readiness Radar */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>{CHART_DESCRIPTIONS.aiReadinessRadar.title}</CardTitle>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <span className="sr-only">About this chart</span>
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p className="font-medium mb-1">{CHART_DESCRIPTIONS.aiReadinessRadar.description}</p>
                  <p className="text-slate-500 dark:text-slate-400">{CHART_DESCRIPTIONS.aiReadinessRadar.insight}</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Your performance vs industry benchmark
            </p>
          </CardHeader>
          <CardContent>
            <AIReadinessRadar height={320} />
          </CardContent>
        </Card>
      </section>

      {/* Trend Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>{CHART_DESCRIPTIONS.trendAnalysis.title}</CardTitle>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span className="sr-only">About this chart</span>
              </TooltipTrigger>
              <TooltipContent className="max-w-sm">
                <p className="font-medium mb-1">{CHART_DESCRIPTIONS.trendAnalysis.description}</p>
                <p className="text-slate-500 dark:text-slate-400">{CHART_DESCRIPTIONS.trendAnalysis.insight}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            12-month trajectory of your AI discoverability
          </p>
        </CardHeader>
        <CardContent>
          <TrendChart height={280} />
        </CardContent>
      </Card>

      {/* Module Scores Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>{CHART_DESCRIPTIONS.modulePerformance.title}</CardTitle>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span className="sr-only">About this chart</span>
              </TooltipTrigger>
              <TooltipContent className="max-w-sm">
                <p className="font-medium mb-1">{CHART_DESCRIPTIONS.modulePerformance.description}</p>
                <p className="text-slate-500 dark:text-slate-400">{CHART_DESCRIPTIONS.modulePerformance.insight}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Detailed breakdown across all audit dimensions
          </p>
        </CardHeader>
        <CardContent>
          <ModuleScoreChart modules={moduleScores} height={300} />
        </CardContent>
      </Card>

      {/* Module Cards Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Module Overview</CardTitle>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Top-level view of your audit modules
          </p>
        </CardHeader>
        <CardContent>
          <div 
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
            aria-label="Audit module scores"
          >
            {auditModules.slice(0, 4).map((module) => (
              <motion.div
                key={module.id}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                role="listitem"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {module.name}
                  </span>
                  <span
                    className={`text-lg font-bold ${getScoreColor(module.score)}`}
                    aria-label={`${module.name}: ${module.score} out of ${module.maxScore}`}
                  >
                    {module.score}
                  </span>
                </div>
                <Progress
                  value={module.score}
                  aria-label={`${module.name} progress: ${module.score}%`}
                  color={
                    module.score >= 80
                      ? "success"
                      : module.score >= 60
                        ? "warning"
                        : "error"
                  }
                />
              </motion.div>
            ))}
          </div>
          <Link
            href="/app/audit"
            className="mt-4 block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 focus-visible:underline dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View all modules →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
