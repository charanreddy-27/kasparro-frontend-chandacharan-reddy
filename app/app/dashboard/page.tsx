"use client";

import { useAppStore } from "@/store";
import { brands } from "@/data/brands";
import { dashboardSnapshots, recentActivity } from "@/data/dashboard";
import { auditModules, calculateOverallScore } from "@/data/audit-modules";
import { Card, CardContent, CardHeader, CardTitle, Badge, Progress } from "@/components/ui";
import { formatRelativeTime, getScoreColor, getScoreBgColor } from "@/lib/utils";
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
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { selectedBrandId } = useAppStore();
  const brand = brands.find((b) => b.id === selectedBrandId) ?? brands[0];
  const snapshot = dashboardSnapshots[selectedBrandId] ?? dashboardSnapshots[brands[0].id];
  const activities = recentActivity[selectedBrandId] ?? recentActivity[brands[0].id];

  const overallScore = calculateOverallScore();

  const snapshotCards = [
    {
      title: "AI Visibility Score",
      value: snapshot.aiVisibilityScore,
      icon: Eye,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Trust & E-E-A-T Score",
      value: snapshot.trustEeatScore,
      icon: Shield,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      title: "Non-Branded Keywords",
      value: `${snapshot.nonBrandedKeywordCoverage}%`,
      icon: Target,
      color: "text-violet-600",
      bgColor: "bg-violet-100",
    },
    {
      title: "Last Audit",
      value: formatRelativeTime(snapshot.lastAuditTimestamp),
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "audit":
        return <BarChart3 className="h-4 w-4 text-blue-600" />;
      case "improvement":
        return <TrendingUp className="h-4 w-4 text-emerald-600" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-amber-600" />;
      case "milestone":
        return <Zap className="h-4 w-4 text-violet-600" />;
      default:
        return <Activity className="h-4 w-4 text-slate-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">
            Brand overview for <span className="font-medium">{brand.name}</span>
          </p>
        </div>
        <Link
          href="/app/audit"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          <BarChart3 className="h-4 w-4" />
          View Full Audit
        </Link>
      </div>

      {/* Overall Score Card */}
      <Card className="border-indigo-100 bg-gradient-to-r from-indigo-50 to-violet-50">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Overall AI-SEO Score
              </h2>
              <p className="text-sm text-slate-600">
                Aggregated score across all 7 audit modules
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">
                  {overallScore}
                </div>
                <div className="text-sm text-slate-500">out of 100</div>
              </div>
              <div className="h-16 w-16">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
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

      {/* Snapshot Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {snapshotCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {card.title}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      {card.value}
                    </p>
                  </div>
                  <div className={`rounded-lg p-2 ${card.bgColor}`}>
                    <Icon className={`h-5 w-5 ${card.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Issues Summary & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Issues Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Issues Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-red-50 p-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-red-900">Critical Issues</span>
                </div>
                <Badge variant="error">{snapshot.criticalIssues}</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-amber-50 p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <span className="font-medium text-amber-900">Warnings</span>
                </div>
                <Badge variant="warning">
                  {snapshot.totalIssues - snapshot.criticalIssues}
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium text-emerald-900">
                    Audit Progress
                  </span>
                </div>
                <Badge variant="success">{snapshot.auditProgress}%</Badge>
              </div>
            </div>
            <Link
              href="/app/audit"
              className="mt-4 block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              View all issues →
            </Link>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-indigo-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.slice(0, 5).map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                >
                  <div className="mt-0.5 rounded-lg bg-slate-100 p-2">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">
                      {activity.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400">
                    {formatRelativeTime(activity.timestamp)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Module Scores Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Module Scores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {auditModules.slice(0, 4).map((module) => (
              <div
                key={module.id}
                className="rounded-lg border border-slate-200 p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
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
              </div>
            ))}
          </div>
          <Link
            href="/app/audit"
            className="mt-4 block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all modules →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
