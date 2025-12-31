"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// ============================================
// Types
// ============================================

interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

interface RadarDataPoint {
  metric: string;
  current: number;
  benchmark: number;
  fullMark: number;
}

interface TrendDataPoint {
  date: string;
  score: number;
  benchmark?: number;
}

// ============================================
// Custom Tooltip Component
// ============================================

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
        <p className="mb-2 text-sm font-medium text-slate-900 dark:text-white">
          {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-sm"
            style={{ color: entry.color }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

// ============================================
// SEO vs AI Visibility Comparison Chart
// ============================================

interface SEOComparisonChartProps {
  data?: ChartDataPoint[];
  height?: number;
}

const defaultSEOComparisonData: ChartDataPoint[] = [
  { name: "Organic Search", seo: 85, ai: 72 },
  { name: "ChatGPT", seo: 45, ai: 78 },
  { name: "Gemini", seo: 52, ai: 65 },
  { name: "Perplexity", seo: 38, ai: 71 },
  { name: "Claude", seo: 42, ai: 58 },
  { name: "Bing Chat", seo: 68, ai: 74 },
];

export function SEOComparisonChart({
  data = defaultSEOComparisonData,
  height = 300,
}: SEOComparisonChartProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-lg"
        style={{ height }}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#94a3b8" : "#64748b";

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis
          dataKey="name"
          tick={{ fill: textColor, fontSize: 12 }}
          tickLine={{ stroke: gridColor }}
          axisLine={{ stroke: gridColor }}
        />
        <YAxis
          tick={{ fill: textColor, fontSize: 12 }}
          tickLine={{ stroke: gridColor }}
          axisLine={{ stroke: gridColor }}
          domain={[0, 100]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: 20 }}
          formatter={(value) => (
            <span className="text-sm text-slate-600 dark:text-slate-300">
              {value}
            </span>
          )}
        />
        <Bar
          dataKey="seo"
          name="Traditional SEO"
          fill="#6366f1"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="ai"
          name="AI Visibility"
          fill="#8b5cf6"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

// ============================================
// AI Readiness Radar Chart
// ============================================

interface AIReadinessRadarProps {
  data?: RadarDataPoint[];
  height?: number;
}

const defaultRadarData: RadarDataPoint[] = [
  { metric: "Content Quality", current: 72, benchmark: 80, fullMark: 100 },
  { metric: "E-E-A-T Signals", current: 68, benchmark: 75, fullMark: 100 },
  { metric: "Schema Markup", current: 85, benchmark: 70, fullMark: 100 },
  { metric: "AI Citations", current: 58, benchmark: 65, fullMark: 100 },
  { metric: "Knowledge Graph", current: 45, benchmark: 60, fullMark: 100 },
  { metric: "Brand Authority", current: 78, benchmark: 72, fullMark: 100 },
];

export function AIReadinessRadar({
  data = defaultRadarData,
  height = 350,
}: AIReadinessRadarProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-lg"
        style={{ height }}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#94a3b8" : "#64748b";

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
        <PolarGrid stroke={gridColor} />
        <PolarAngleAxis
          dataKey="metric"
          tick={{ fill: textColor, fontSize: 11 }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={{ fill: textColor, fontSize: 10 }}
        />
        <Radar
          name="Your Score"
          dataKey="current"
          stroke="#6366f1"
          fill="#6366f1"
          fillOpacity={0.3}
        />
        <Radar
          name="Industry Benchmark"
          dataKey="benchmark"
          stroke="#8b5cf6"
          fill="#8b5cf6"
          fillOpacity={0.1}
          strokeDasharray="4 4"
        />
        <Legend
          wrapperStyle={{ paddingTop: 20 }}
          formatter={(value) => (
            <span className="text-sm text-slate-600 dark:text-slate-300">
              {value}
            </span>
          )}
        />
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

// ============================================
// Trend Line Chart
// ============================================

interface TrendChartProps {
  data?: TrendDataPoint[];
  height?: number;
  showBenchmark?: boolean;
}

const defaultTrendData: TrendDataPoint[] = [
  { date: "Jan", score: 58, benchmark: 65 },
  { date: "Feb", score: 62, benchmark: 65 },
  { date: "Mar", score: 59, benchmark: 66 },
  { date: "Apr", score: 65, benchmark: 67 },
  { date: "May", score: 68, benchmark: 68 },
  { date: "Jun", score: 72, benchmark: 69 },
  { date: "Jul", score: 70, benchmark: 70 },
  { date: "Aug", score: 74, benchmark: 71 },
  { date: "Sep", score: 76, benchmark: 72 },
  { date: "Oct", score: 78, benchmark: 73 },
  { date: "Nov", score: 75, benchmark: 73 },
  { date: "Dec", score: 82, benchmark: 74 },
];

export function TrendChart({
  data = defaultTrendData,
  height = 300,
  showBenchmark = true,
}: TrendChartProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-lg"
        style={{ height }}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#94a3b8" : "#64748b";

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis
          dataKey="date"
          tick={{ fill: textColor, fontSize: 12 }}
          tickLine={{ stroke: gridColor }}
          axisLine={{ stroke: gridColor }}
        />
        <YAxis
          tick={{ fill: textColor, fontSize: 12 }}
          tickLine={{ stroke: gridColor }}
          axisLine={{ stroke: gridColor }}
          domain={[40, 100]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: 20 }}
          formatter={(value) => (
            <span className="text-sm text-slate-600 dark:text-slate-300">
              {value}
            </span>
          )}
        />
        <Area
          type="monotone"
          dataKey="score"
          name="AI Visibility Score"
          stroke="#6366f1"
          strokeWidth={2}
          fill="url(#colorScore)"
        />
        {showBenchmark && (
          <Line
            type="monotone"
            dataKey="benchmark"
            name="Industry Benchmark"
            stroke="#8b5cf6"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ============================================
// Score Gauge Component
// ============================================

interface ScoreGaugeProps {
  score: number;
  maxScore?: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  showPercentage?: boolean;
}

export function ScoreGauge({
  score,
  maxScore = 100,
  size = "md",
  label,
  showPercentage = true,
}: ScoreGaugeProps) {
  const percentage = Math.min(Math.max((score / maxScore) * 100, 0), 100);
  
  const sizeConfig = {
    sm: { outer: 80, stroke: 6, fontSize: "text-lg" },
    md: { outer: 120, stroke: 8, fontSize: "text-2xl" },
    lg: { outer: 160, stroke: 10, fontSize: "text-4xl" },
  };

  const config = sizeConfig[size];
  const radius = (config.outer - config.stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage >= 80) return "#10b981";
    if (percentage >= 60) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: config.outer, height: config.outer }}>
        <svg
          className="-rotate-90"
          width={config.outer}
          height={config.outer}
        >
          {/* Background circle */}
          <circle
            cx={config.outer / 2}
            cy={config.outer / 2}
            r={radius}
            fill="none"
            className="stroke-slate-200 dark:stroke-slate-700"
            strokeWidth={config.stroke}
          />
          {/* Progress circle */}
          <circle
            cx={config.outer / 2}
            cy={config.outer / 2}
            r={radius}
            fill="none"
            stroke={getColor()}
            strokeWidth={config.stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold text-slate-900 dark:text-white ${config.fontSize}`}>
            {showPercentage ? `${Math.round(percentage)}%` : score}
          </span>
        </div>
      </div>
      {label && (
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {label}
        </span>
      )}
    </div>
  );
}

// ============================================
// Module Score Distribution
// ============================================

interface ModuleScore {
  name: string;
  score: number;
  maxScore: number;
}

interface ModuleScoreChartProps {
  modules: ModuleScore[];
  height?: number;
}

export function ModuleScoreChart({
  modules,
  height = 300,
}: ModuleScoreChartProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-lg"
        style={{ height }}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#94a3b8" : "#64748b";

  const chartData = modules.map((m) => ({
    name: m.name,
    score: m.score,
    remaining: m.maxScore - m.score,
  }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={false} />
        <XAxis
          type="number"
          domain={[0, 100]}
          tick={{ fill: textColor, fontSize: 12 }}
          tickLine={{ stroke: gridColor }}
          axisLine={{ stroke: gridColor }}
        />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fill: textColor, fontSize: 12 }}
          tickLine={{ stroke: gridColor }}
          axisLine={{ stroke: gridColor }}
          width={90}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="score"
          name="Score"
          stackId="a"
          fill="#6366f1"
          radius={[0, 4, 4, 0]}
        />
        <Bar
          dataKey="remaining"
          name="Remaining"
          stackId="a"
          fill={isDark ? "#334155" : "#e2e8f0"}
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
