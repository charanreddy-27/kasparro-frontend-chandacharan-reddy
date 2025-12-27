import type { DashboardSnapshot, ActivityItem } from "@/types";

export const dashboardSnapshots: Record<string, DashboardSnapshot> = {
  "brand-1": {
    aiVisibilityScore: 72,
    trustEeatScore: 68,
    nonBrandedKeywordCoverage: 34,
    lastAuditTimestamp: "2024-12-26T15:30:00Z",
    totalIssues: 18,
    criticalIssues: 3,
    auditProgress: 100,
  },
  "brand-2": {
    aiVisibilityScore: 58,
    trustEeatScore: 74,
    nonBrandedKeywordCoverage: 28,
    lastAuditTimestamp: "2024-12-25T10:15:00Z",
    totalIssues: 24,
    criticalIssues: 5,
    auditProgress: 100,
  },
  "brand-3": {
    aiVisibilityScore: 85,
    trustEeatScore: 82,
    nonBrandedKeywordCoverage: 45,
    lastAuditTimestamp: "2024-12-26T08:00:00Z",
    totalIssues: 12,
    criticalIssues: 1,
    auditProgress: 100,
  },
};

export const recentActivity: Record<string, ActivityItem[]> = {
  "brand-1": [
    {
      id: "act-1",
      type: "audit",
      title: "Full audit completed",
      description: "All 7 modules analyzed successfully",
      timestamp: "2024-12-26T15:30:00Z",
    },
    {
      id: "act-2",
      type: "improvement",
      title: "AI Visibility improved",
      description: "Score increased from 64 to 72 (+8 points)",
      timestamp: "2024-12-26T14:00:00Z",
    },
    {
      id: "act-3",
      type: "alert",
      title: "Critical issue detected",
      description: "Brand confusion identified in AI responses",
      timestamp: "2024-12-26T12:30:00Z",
    },
    {
      id: "act-4",
      type: "milestone",
      title: "Technical SEO milestone",
      description: "Core Web Vitals now passing on all pages",
      timestamp: "2024-12-25T16:00:00Z",
    },
    {
      id: "act-5",
      type: "audit",
      title: "Competitor analysis updated",
      description: "8 competitors tracked and benchmarked",
      timestamp: "2024-12-24T10:00:00Z",
    },
  ],
  "brand-2": [
    {
      id: "act-6",
      type: "audit",
      title: "Full audit completed",
      description: "All 7 modules analyzed successfully",
      timestamp: "2024-12-25T10:15:00Z",
    },
    {
      id: "act-7",
      type: "alert",
      title: "Multiple critical issues",
      description: "5 high-priority issues require attention",
      timestamp: "2024-12-25T09:00:00Z",
    },
    {
      id: "act-8",
      type: "improvement",
      title: "Trust score improved",
      description: "E-E-A-T score increased by 6 points",
      timestamp: "2024-12-24T14:00:00Z",
    },
  ],
  "brand-3": [
    {
      id: "act-9",
      type: "milestone",
      title: "Top performer status",
      description: "Achieved highest AI visibility in category",
      timestamp: "2024-12-26T08:00:00Z",
    },
    {
      id: "act-10",
      type: "audit",
      title: "Audit completed",
      description: "All modules show strong performance",
      timestamp: "2024-12-26T08:00:00Z",
    },
    {
      id: "act-11",
      type: "improvement",
      title: "Keyword coverage expanded",
      description: "Now ranking for 45% of target keywords",
      timestamp: "2024-12-25T12:00:00Z",
    },
  ],
};
