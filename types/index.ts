// ============================================
// Brand Types
// ============================================
export interface Brand {
  id: string;
  name: string;
  domain: string;
  logo?: string;
  industry: string;
  createdAt: string;
}

// ============================================
// Audit Module Types
// ============================================
export type AuditModuleId =
  | "ai-visibility"
  | "trust-eeat"
  | "content-quality"
  | "technical-seo"
  | "keyword-intelligence"
  | "competitor-analysis"
  | "brand-mentions";

export type SeverityLevel = "critical" | "warning" | "info" | "success";

export interface AuditIssue {
  id: string;
  title: string;
  description: string;
  severity: SeverityLevel;
  affectedElements?: string[];
}

export interface AuditRecommendation {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  estimatedImpact: string;
}

export interface AuditInsight {
  id: string;
  title: string;
  description: string;
  value?: string | number;
  trend?: "up" | "down" | "stable";
  changePercent?: number;
}

export interface AuditModule {
  id: AuditModuleId;
  name: string;
  description: string;
  icon: string;
  score: number;
  maxScore: number;
  status: "completed" | "in-progress" | "pending";
  insights: AuditInsight[];
  issues: AuditIssue[];
  recommendations: AuditRecommendation[];
  lastUpdated: string;
}

// ============================================
// Dashboard Types
// ============================================
export interface DashboardSnapshot {
  aiVisibilityScore: number;
  trustEeatScore: number;
  nonBrandedKeywordCoverage: number;
  lastAuditTimestamp: string;
  totalIssues: number;
  criticalIssues: number;
  auditProgress: number;
}

export interface BrandDashboard {
  brand: Brand;
  snapshot: DashboardSnapshot;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: "audit" | "alert" | "improvement" | "milestone";
  title: string;
  description: string;
  timestamp: string;
}

// ============================================
// Architecture Types
// ============================================
export interface PipelineStage {
  id: string;
  name: string;
  description: string;
  inputs?: string[];
  outputs?: string[];
  status?: "active" | "processing" | "completed";
}

export interface ArchitectureComponent {
  id: string;
  name: string;
  type: "input" | "processor" | "module" | "output";
  description: string;
  connections: string[];
}

// ============================================
// Navigation Types
// ============================================
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// ============================================
// UI State Types
// ============================================
export interface AppState {
  selectedBrandId: string | null;
  selectedModuleId: AuditModuleId | null;
  sidebarOpen: boolean;
  theme: "light" | "dark";
}
