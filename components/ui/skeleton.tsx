"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// ============================================
// Base Skeleton Component
// ============================================

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Disable animation for reduced-motion users */
  animate?: boolean;
}

export function Skeleton({ className, animate = true, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-slate-200 dark:bg-slate-700",
        animate && "animate-pulse motion-reduce:animate-none",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

// ============================================
// Card Skeleton
// ============================================

interface CardSkeletonProps {
  /** Show icon placeholder */
  showIcon?: boolean;
  /** Number of text lines */
  lines?: number;
}

export function CardSkeleton({ showIcon = true, lines = 2 }: CardSkeletonProps) {
  return (
    <div
      className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
      role="status"
      aria-label="Loading content"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-16" />
          {Array.from({ length: lines - 1 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-32" />
          ))}
        </div>
        {showIcon && <Skeleton className="h-10 w-10 rounded-lg" />}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// ============================================
// Chart Skeleton
// ============================================

interface ChartSkeletonProps {
  /** Height of the chart area */
  height?: number;
  /** Type of chart visualization */
  type?: "bar" | "line" | "radar" | "gauge";
}

export function ChartSkeleton({ height = 300, type = "bar" }: ChartSkeletonProps) {
  return (
    <div
      className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50"
      style={{ height }}
      role="status"
      aria-label="Loading chart"
    >
      <div className="flex h-full flex-col">
        {/* Chart title skeleton */}
        <div className="mb-4 flex items-center justify-between">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
        
        {/* Chart content based on type */}
        {type === "bar" && (
          <div className="flex flex-1 items-end justify-around gap-2 px-4">
            {[65, 80, 45, 90, 55, 70].map((h, i) => (
              <Skeleton
                key={i}
                className="w-8 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        )}
        
        {type === "line" && (
          <div className="flex-1 px-4">
            <div className="relative h-full">
              {/* Horizontal grid lines */}
              {[0, 25, 50, 75, 100].map((y, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-slate-200 dark:border-slate-700"
                  style={{ top: `${y}%` }}
                />
              ))}
              {/* Simulated line */}
              <Skeleton className="absolute bottom-[30%] left-0 right-0 h-1 rounded-full" />
            </div>
          </div>
        )}
        
        {type === "radar" && (
          <div className="flex flex-1 items-center justify-center">
            <Skeleton className="h-40 w-40 rounded-full" />
          </div>
        )}
        
        {type === "gauge" && (
          <div className="flex flex-1 items-center justify-center">
            <div className="relative">
              <Skeleton className="h-32 w-32 rounded-full" />
              <div className="absolute inset-4 rounded-full bg-white dark:bg-slate-800" />
            </div>
          </div>
        )}
        
        {/* Legend skeleton */}
        <div className="mt-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-3 rounded" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-3 rounded" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </div>
      <span className="sr-only">Loading chart data...</span>
    </div>
  );
}

// ============================================
// Table Skeleton
// ============================================

interface TableSkeletonProps {
  /** Number of rows */
  rows?: number;
  /** Number of columns */
  columns?: number;
}

export function TableSkeleton({ rows = 5, columns = 4 }: TableSkeletonProps) {
  return (
    <div
      className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
      role="status"
      aria-label="Loading table"
    >
      {/* Header */}
      <div className="flex gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-4 border-b border-slate-100 px-4 py-4 last:border-0 dark:border-slate-800"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              className={cn("h-4 flex-1", colIndex === 0 && "w-1/4 flex-none")}
            />
          ))}
        </div>
      ))}
      <span className="sr-only">Loading table data...</span>
    </div>
  );
}

// ============================================
// Module Sidebar Skeleton
// ============================================

export function ModuleSidebarSkeleton() {
  return (
    <div
      className="space-y-2"
      role="status"
      aria-label="Loading modules"
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700"
        >
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-5 rounded" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>
      ))}
      <span className="sr-only">Loading audit modules...</span>
    </div>
  );
}

// ============================================
// Dashboard Grid Skeleton
// ============================================

export function DashboardSkeleton() {
  return (
    <div className="space-y-6" role="status" aria-label="Loading dashboard">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-10 w-32 rounded-lg" />
      </div>
      
      {/* Overall score card */}
      <Skeleton className="h-32 w-full rounded-xl" />
      
      {/* Metric cards grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
      
      {/* Two column section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="h-64 rounded-xl" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
      
      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartSkeleton type="bar" />
        <ChartSkeleton type="radar" />
      </div>
      
      <span className="sr-only">Loading dashboard content...</span>
    </div>
  );
}
