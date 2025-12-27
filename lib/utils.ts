import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) {
    return "Just now";
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else if (diffDays < 7) {
    return `${diffDays}d ago`;
  } else {
    return formatDate(dateString);
  }
}

export function getScoreColor(score: number, maxScore: number = 100): string {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "text-emerald-600";
  if (percentage >= 60) return "text-amber-600";
  return "text-red-600";
}

export function getScoreBgColor(score: number, maxScore: number = 100): string {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "bg-emerald-500";
  if (percentage >= 60) return "bg-amber-500";
  return "bg-red-500";
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case "critical":
      return "text-red-600 bg-red-50 border-red-200";
    case "warning":
      return "text-amber-600 bg-amber-50 border-amber-200";
    case "info":
      return "text-blue-600 bg-blue-50 border-blue-200";
    case "success":
      return "text-emerald-600 bg-emerald-50 border-emerald-200";
    default:
      return "text-gray-600 bg-gray-50 border-gray-200";
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case "high":
      return "text-red-700 bg-red-100";
    case "medium":
      return "text-amber-700 bg-amber-100";
    case "low":
      return "text-blue-700 bg-blue-100";
    default:
      return "text-gray-700 bg-gray-100";
  }
}
