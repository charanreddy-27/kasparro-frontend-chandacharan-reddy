"use client";

import * as React from "react";
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
import { ChartSkeleton } from "@/components/ui/skeleton";

// ============================================
// Types
// ============================================

interface ChartDataPoint {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
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

const CustomTooltip = React.memo(function CustomTooltip({ 
  active, 
  payload, 
  label 
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div 
        className="max-w-[200px] rounded-lg border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:max-w-[250px] sm:p-3"
        role="tooltip"
      >
        <p className="mb-1 text-xs font-medium text-slate-900 dark:text-white sm:mb-2 sm:text-sm">
          {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-xs sm:text-sm"
            style={{ color: entry.color }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
});

// ============================================
// Chart Loading Wrapper
// ============================================

function useChartMount() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#94a3b8" : "#64748b";

  return { mounted, isDark, gridColor, textColor };
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

export const SEOComparisonChart = React.memo(function SEOComparisonChart({
  data = defaultSEOComparisonData,
  height = 300,
}: SEOComparisonChartProps) {
  const { mounted, gridColor, textColor } = useChartMount();

  // Generate screen reader description
  const chartDescription = React.useMemo(() => {
    return data.map(d => `${d.name}: SEO ${d.seo}, AI ${d.ai}`).join("; ");
  }, [data]);

  if (!mounted) {
    return <ChartSkeleton height={height} type="bar" />;
  }

  return (
    <div role="img" aria-label={`SEO vs AI Visibility comparison chart. ${chartDescription}`}>
      <ResponsiveContainer width="100%" height={height}>
        {/* Adjusted margins for mobile - reduced left margin, allow axis to truncate */}
        <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="name"
            tick={{ fill: textColor, fontSize: 10 }}
            tickLine={{ stroke: gridColor }}
            axisLine={{ stroke: gridColor }}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            tick={{ fill: textColor, fontSize: 10 }}
            tickLine={{ stroke: gridColor }}
            axisLine={{ stroke: gridColor }}
            domain={[0, 100]}
            width={35}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: 10, fontSize: 12 }}
            formatter={(value) => (
              <span className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
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
    </div>
  );
});

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

export const AIReadinessRadar = React.memo(function AIReadinessRadar({
  data = defaultRadarData,
  height = 350,
}: AIReadinessRadarProps) {
  const { mounted, gridColor, textColor } = useChartMount();

  const chartDescription = React.useMemo(() => {
    return data.map(d => `${d.metric}: ${d.current} (benchmark: ${d.benchmark})`).join("; ");
  }, [data]);

  if (!mounted) {
    return <ChartSkeleton height={height} type="radar" />;
  }

  return (
    <div role="img" aria-label={`AI Readiness radar chart. ${chartDescription}`}>
      <ResponsiveContainer width="100%" height={height}>
        {/* Adjusted margins for mobile - reduced all margins */}
        <RadarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
          <PolarGrid stroke={gridColor} />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fill: textColor, fontSize: 9 }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: textColor, fontSize: 8 }}
            tickCount={4}
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
            wrapperStyle={{ paddingTop: 10, fontSize: 11 }}
            formatter={(value) => (
              <span className="text-xs text-slate-600 dark:text-slate-300">
                {value}
              </span>
            )}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
});

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

export const TrendChart = React.memo(function TrendChart({
  data = defaultTrendData,
  height = 300,
  showBenchmark = true,
}: TrendChartProps) {
  const { mounted, gridColor, textColor } = useChartMount();

  const chartDescription = React.useMemo(() => {
    const start = data[0];
    const end = data[data.length - 1];
    const change = end.score - start.score;
    return `Trend from ${start.date} (${start.score}) to ${end.date} (${end.score}). ${change >= 0 ? "Increased" : "Decreased"} by ${Math.abs(change)} points.`;
  }, [data]);

  if (!mounted) {
    return <ChartSkeleton height={height} type="line" />;
  }

  return (
    <div role="img" aria-label={`AI Visibility trend chart. ${chartDescription}`}>
      <ResponsiveContainer width="100%" height={height}>
        {/* Adjusted margins for mobile */}
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -15, bottom: 5 }}>
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="date"
            tick={{ fill: textColor, fontSize: 10 }}
            tickLine={{ stroke: gridColor }}
            axisLine={{ stroke: gridColor }}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fill: textColor, fontSize: 10 }}
            tickLine={{ stroke: gridColor }}
            axisLine={{ stroke: gridColor }}
            domain={[40, 100]}
            width={35}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: 10, fontSize: 11 }}
            formatter={(value) => (
              <span className="text-xs text-slate-600 dark:text-slate-300">
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
    </div>
  );
});

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

export const ScoreGauge = React.memo(function ScoreGauge({
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

  const getStatus = () => {
    if (percentage >= 80) return "excellent";
    if (percentage >= 60) return "good";
    if (percentage >= 40) return "needs improvement";
    return "critical";
  };

  return (
    <div 
      className="flex flex-col items-center gap-2"
      role="img"
      aria-label={`${label || "Score"}: ${score} out of ${maxScore}, rated ${getStatus()}`}
    >
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
            className="transition-all duration-1000 ease-out motion-reduce:transition-none"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold text-slate-900 dark:text-white ${config.fontSize}`} aria-hidden="true">
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
});

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

export const ModuleScoreChart = React.memo(function ModuleScoreChart({
  modules,
  height = 300,
}: ModuleScoreChartProps) {
  const { mounted, isDark, gridColor, textColor } = useChartMount();

  const chartDescription = React.useMemo(() => {
    return modules.map(m => `${m.name}: ${m.score} of ${m.maxScore}`).join("; ");
  }, [modules]);

  const chartData = React.useMemo(() => 
    modules.map((m) => ({
      name: m.name,
      score: m.score,
      remaining: m.maxScore - m.score,
    })),
    [modules]
  );

  if (!mounted) {
    return <ChartSkeleton height={height} type="bar" />;
  }

  return (
    <div role="img" aria-label={`Module score distribution chart. ${chartDescription}`}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: textColor, fontSize: 10 }}
            tickLine={{ stroke: gridColor }}
            axisLine={{ stroke: gridColor }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: textColor, fontSize: 9 }}
            tickLine={{ stroke: gridColor }}
            axisLine={{ stroke: gridColor }}
            width={70}
            tickFormatter={(value) => value.length > 10 ? `${value.slice(0, 10)}...` : value}
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
    </div>
  );
});
