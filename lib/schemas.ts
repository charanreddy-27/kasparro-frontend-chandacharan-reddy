import { z } from "zod/v4";

// ============================================
// Brand Schemas
// ============================================
export const brandSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  domain: z.string().url().or(z.string().min(1)),
  logo: z.string().optional(),
  industry: z.string().min(1),
  createdAt: z.string().datetime({ offset: true }).or(z.string().min(1)),
});

export type Brand = z.infer<typeof brandSchema>;

// ============================================
// Audit Module Schemas
// ============================================
export const auditModuleIdSchema = z.enum([
  "ai-visibility",
  "trust-eeat",
  "content-quality",
  "technical-seo",
  "keyword-intelligence",
  "competitor-analysis",
  "brand-mentions",
]);

export const severityLevelSchema = z.enum(["critical", "warning", "info", "success"]);

export const auditInsightSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  value: z.union([z.string(), z.number()]).optional(),
  trend: z.enum(["up", "down", "stable"]).optional(),
  changePercent: z.number().optional(),
});

export const auditIssueSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  severity: severityLevelSchema,
  affectedElements: z.array(z.string()).optional(),
});

export const auditRecommendationSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  priority: z.enum(["high", "medium", "low"]),
  estimatedImpact: z.string().min(1),
});

export const auditModuleSchema = z.object({
  id: auditModuleIdSchema,
  name: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  score: z.number().min(0).max(100),
  maxScore: z.number().min(0).max(100),
  status: z.enum(["completed", "in-progress", "pending"]),
  insights: z.array(auditInsightSchema),
  issues: z.array(auditIssueSchema),
  recommendations: z.array(auditRecommendationSchema),
  lastUpdated: z.string(),
});

export type AuditModule = z.infer<typeof auditModuleSchema>;
export type AuditInsight = z.infer<typeof auditInsightSchema>;
export type AuditIssue = z.infer<typeof auditIssueSchema>;
export type AuditRecommendation = z.infer<typeof auditRecommendationSchema>;

// ============================================
// Dashboard Schemas
// ============================================
export const dashboardSnapshotSchema = z.object({
  aiVisibilityScore: z.number().min(0).max(100),
  trustEeatScore: z.number().min(0).max(100),
  nonBrandedKeywordCoverage: z.number().min(0).max(100),
  lastAuditTimestamp: z.string(),
  totalIssues: z.number().min(0),
  criticalIssues: z.number().min(0),
  auditProgress: z.number().min(0).max(100),
});

export const activityItemSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["audit", "alert", "improvement", "milestone"]),
  title: z.string().min(1),
  description: z.string().min(1),
  timestamp: z.string(),
});

export type DashboardSnapshot = z.infer<typeof dashboardSnapshotSchema>;
export type ActivityItem = z.infer<typeof activityItemSchema>;

// ============================================
// Validation Helpers
// ============================================

/**
 * Validate an array of audit modules and return validated data or throw
 */
export function validateAuditModules(data: unknown): AuditModule[] {
  const schema = z.array(auditModuleSchema);
  return schema.parse(data);
}

/**
 * Validate a dashboard snapshot and return validated data or throw
 */
export function validateDashboardSnapshot(data: unknown): DashboardSnapshot {
  return dashboardSnapshotSchema.parse(data);
}

/**
 * Validate activity items and return validated data or throw
 */
export function validateActivityItems(data: unknown): ActivityItem[] {
  const schema = z.array(activityItemSchema);
  return schema.parse(data);
}

/**
 * Safe validation that returns a result object instead of throwing
 */
export function safeValidateAuditModules(data: unknown): {
  success: boolean;
  data?: AuditModule[];
  error?: z.ZodError;
} {
  const schema = z.array(auditModuleSchema);
  const result = schema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, error: result.error };
}

/**
 * Safe validation for dashboard snapshot
 */
export function safeValidateDashboardSnapshot(data: unknown): {
  success: boolean;
  data?: DashboardSnapshot;
  error?: z.ZodError;
} {
  const result = dashboardSnapshotSchema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, error: result.error };
}
