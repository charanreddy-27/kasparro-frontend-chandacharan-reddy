"use client";

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
} from "@/components/ui";
import { formatRelativeTime, getScoreColor, getScoreBgColor } from "@/lib/utils";
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

export default function DashboardPage() {
  const { selectedBrandId } = useAppStore();
  const brand = brands.find((b) => b.id === selectedBrandId) ?? brands[0];
  const snapshot = dashboardSnapshots[selectedBrandId] ?? dashboardSnapshots[brands[0].id];
  const activities = recentActivity[selectedBrandId] ?? recentActivity[brands[0].id];

  const overallScore = calculateOverallScore();

  // Module scores for chart
  const moduleScores = auditModules.map((m) => ({
    name: m.name.split(" ")[0],
    score: m.score,
    maxScore: m.maxScore,
  }));

  const snapshotCards = [
    {
      title: "AI Visibility Score",
      value: snapshot.aiVisibilityScore,
      icon: Eye,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
      tooltip: "Measures how often your brand appears in AI-generated responses across ChatGPT, Gemini, Perplexity, and other AI assistants.",
    },
    {
      title: "Trust & E-E-A-T Score",
      value: snapshot.trustEeatScore,
      icon: Shield,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/50",
      tooltip: "Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI models use to evaluate content quality.",
    },
    {
      title: "Non-Branded Keywords",
      value: `${snapshot.nonBrandedKeywordCoverage}%`,
      icon: Target,
      color: "text-violet-600 dark:text-violet-400",
      bgColor: "bg-violet-100 dark:bg-violet-900/50",
      tooltip: "Coverage of industry-relevant queries where your brand can appear without direct brand name mentions.",
    },
    {
      title: "Last Audit",
      value: formatRelativeTime(snapshot.lastAuditTimestamp),
      icon: Clock,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-100 dark:bg-amber-900/50",
      tooltip: "Timestamp of the most recent comprehensive audit across all 7 modules.",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "audit":
        return <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
      case "improvement":
        return <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />;
      case "milestone":
        return <Zap className="h-4 w-4 text-violet-600 dark:text-violet-400" />;
      default:
        return <Activity className="h-4 w-4 text-slate-600 dark:text-slate-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Brand overview for <span className="font-medium">{brand.name}</span>
          </p>
        </div>
        <Link
          href="/app/audit"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          <BarChart3 className="h-4 w-4" />
          View Full Audit
        </Link>
      </div>

      {/* Overall Score Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-indigo-100 bg-gradient-to-r from-indigo-50 to-violet-50 dark:border-indigo-900 dark:from-indigo-950/50 dark:to-violet-950/50">
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Overall AI-SEO Score
                  </h2>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-slate-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      Weighted average of all 7 audit modules, indicating your overall readiness for AI-powered search visibility.
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Aggregated score across all 7 audit modules
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                    {overallScore}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">out of 100</div>
                </div>
                <div className="h-16 w-16">
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {snapshotCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
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
                            <HelpCircle className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                          </TooltipTrigger>
                          <TooltipContent>{card.tooltip}</TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                        {card.value}
                      </p>
                    </div>
                    <div className={`rounded-lg p-2 ${card.bgColor}`}>
                      <Icon className={`h-5 w-5 ${card.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Issues Summary & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Issues Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              Issues Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <span className="font-medium text-red-900 dark:text-red-300">Critical Issues</span>
                </div>
                <Badge variant="error">{snapshot.criticalIssues}</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <span className="font-medium text-amber-900 dark:text-amber-300">Warnings</span>
                </div>
                <Badge variant="warning">
                  {snapshot.totalIssues - snapshot.criticalIssues}
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-medium text-emerald-900 dark:text-emerald-300">
                    Audit Progress
                  </span>
                </div>
                <Badge variant="success">{snapshot.auditProgress}%</Badge>
              </div>
            </div>
            <Link
              href="/app/audit"
              className="mt-4 block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              View all issues →
            </Link>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.slice(0, 5).map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0 dark:border-slate-700"
                >
                  <div className="mt-0.5 rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {activity.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {formatRelativeTime(activity.timestamp)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Visualizations */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* SEO vs AI Visibility Comparison */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>SEO vs AI Visibility</CardTitle>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-slate-400" />
                </TooltipTrigger>
                <TooltipContent>
                  Comparison of traditional SEO performance versus visibility in AI-powered search across different platforms.
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent>
            <SEOComparisonChart height={280} />
          </CardContent>
        </Card>

        {/* AI Readiness Radar */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>AI Search Readiness</CardTitle>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-slate-400" />
                </TooltipTrigger>
                <TooltipContent>
                  Multi-dimensional analysis of your content's readiness for AI search engines compared to industry benchmarks.
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent>
            <AIReadinessRadar height={320} />
          </CardContent>
        </Card>
      </div>

      {/* Trend Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>AI Visibility Trend</CardTitle>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-slate-400" />
              </TooltipTrigger>
              <TooltipContent>
                12-month trend of your AI visibility score compared to the industry benchmark.
              </TooltipContent>
            </Tooltip>
          </div>
        </CardHeader>
        <CardContent>
          <TrendChart height={280} />
        </CardContent>
      </Card>

      {/* Module Scores Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>Module Performance</CardTitle>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-slate-400" />
              </TooltipTrigger>
              <TooltipContent>
                Breakdown of scores across all 7 audit modules. Higher scores indicate better optimization.
              </TooltipContent>
            </Tooltip>
          </div>
        </CardHeader>
        <CardContent>
          <ModuleScoreChart modules={moduleScores} height={300} />
        </CardContent>
      </Card>

      {/* Module Cards Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Module Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {auditModules.slice(0, 4).map((module) => (
              <motion.div
                key={module.id}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {module.name}
                  </span>
                  <span
                    className={`text-lg font-bold ${getScoreColor(
                      module.score
                    )}`}
                  >
                    {module.score}
                  </span>
                </div>
                <Progress
                  value={module.score}
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
            className="mt-4 block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View all modules →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
