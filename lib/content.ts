/**
 * AI-SEO Content & Copy Constants
 * 
 * Centralized content for consistent, educational messaging
 * that helps users understand AI-native SEO concepts.
 */

// ============================================
// Metric Definitions with Business Context
// ============================================

export const AI_SEO_METRICS = {
  aiVisibilityScore: {
    label: "AI Visibility Score",
    shortDescription: "How often your brand appears in AI responses",
    fullDescription: "Measures your brand's presence across AI-powered search experiences including ChatGPT, Gemini, Perplexity, Claude, and Copilot. Unlike traditional rankings, this tracks citation frequency and contextual mentions in AI-generated answers.",
    businessImpact: "Higher AI visibility means your brand captures traffic from the growing segment of users who ask AI instead of searching Google.",
    benchmark: "Industry leaders average 65-80. Scores below 50 indicate significant opportunity loss in AI-driven discovery.",
  },
  trustEeatScore: {
    label: "Trust & E-E-A-T Score",
    shortDescription: "Experience, Expertise, Authority, Trust signals",
    fullDescription: "Evaluates the quality signals that AI models use to determine content credibility. Based on Google's E-E-A-T framework, extended for how LLMs assess trustworthiness when generating responses.",
    businessImpact: "AI assistants preferentially cite sources they deem authoritative. Strong E-E-A-T signals increase the likelihood of being recommended.",
    benchmark: "Content with E-E-A-T scores above 75 is 3x more likely to be cited by major AI assistants.",
  },
  nonBrandedCoverage: {
    label: "Non-Branded Keyword Coverage",
    shortDescription: "Visibility without brand name mentions",
    fullDescription: "Percentage of industry-relevant queries where your content can surface without direct brand name mentions. Measures your reach for users who don't yet know your brand.",
    businessImpact: "Critical for new customer acquisition. AI assistants often recommend solutions to problems without requiring brand awareness.",
    benchmark: "Top performers achieve 60-80% coverage for their core topic areas.",
  },
  llmCrawlReadiness: {
    label: "LLM Crawl Readiness",
    shortDescription: "How well AI can understand your content",
    fullDescription: "Assesses whether your content structure, semantic markup, and information architecture make it easy for AI training and inference pipelines to extract accurate information.",
    businessImpact: "Well-structured content is more likely to be correctly understood and cited without hallucination or misattribution.",
    benchmark: "Scores above 70 indicate content is well-optimized for AI comprehension.",
  },
  contentArchitecture: {
    label: "Content Architecture Intelligence",
    shortDescription: "How AI understands your content relationships",
    fullDescription: "Analyzes your site's semantic structure, topic clustering, internal linking, and entity relationships. AI models use these signals to understand expertise depth and topic authority.",
    businessImpact: "Strong content architecture helps AI assistants understand your brand's knowledge domain and cite you for the right queries.",
    benchmark: "Industry leaders maintain clear topic hierarchies with 85%+ internal link coherence.",
  },
  knowledgeGraphPresence: {
    label: "Knowledge Graph Presence",
    shortDescription: "Your entity footprint in structured databases",
    fullDescription: "Measures representation in Google Knowledge Graph, Wikidata, and other structured data sources that AI models reference for factual information.",
    businessImpact: "Knowledge graph presence validates your entity as a real, authoritative source that AI can confidently cite.",
    benchmark: "Established brands should have verified entities with 90%+ attribute accuracy.",
  },
  aiCitationRate: {
    label: "AI Citation Rate",
    shortDescription: "How often AI links back to your content",
    fullDescription: "Tracks the frequency with which AI assistants provide direct links or explicit source attributions to your content in their responses.",
    businessImpact: "Citations drive qualified traffic from AI interfaces and build brand recognition in the AI-first search paradigm.",
    benchmark: "Top-performing content achieves 15-25% citation rates for relevant queries.",
  },
} as const;

// ============================================
// Chart & Visualization Descriptions
// ============================================

export const CHART_DESCRIPTIONS = {
  seoVsAiComparison: {
    title: "SEO vs AI Visibility",
    description: "See how your traditional search rankings compare to AI-powered discovery across platforms.",
    insight: "AI visibility often diverges from SEO rankings—content that ranks well in Google may not be cited by ChatGPT, and vice versa.",
  },
  aiReadinessRadar: {
    title: "AI Search Readiness",
    description: "Multi-dimensional view of your content's preparedness for AI-native search.",
    insight: "Balance across all dimensions is key. A weakness in any area can limit AI visibility even if other metrics are strong.",
  },
  trendAnalysis: {
    title: "AI Visibility Trend",
    description: "Track your AI visibility score over time against industry benchmarks.",
    insight: "AI search is evolving rapidly. Consistent improvement matters more than absolute scores.",
  },
  modulePerformance: {
    title: "Module Performance",
    description: "Score breakdown across all 7 audit modules.",
    insight: "Focus improvement efforts on modules below 70 for maximum impact on overall AI visibility.",
  },
} as const;

// ============================================
// Module Descriptions
// ============================================

export const AUDIT_MODULE_CONTEXT = {
  contentQuality: {
    name: "Content Quality",
    aiContext: "How AI evaluates your content for accuracy, depth, and usefulness",
    keyFactors: ["Factual accuracy", "Comprehensive coverage", "Clear structure", "Original insights"],
  },
  technicalSeo: {
    name: "Technical SEO",
    aiContext: "Infrastructure signals that help AI crawlers access and understand your content",
    keyFactors: ["Page speed", "Mobile experience", "Crawlability", "Structured data"],
  },
  schemaMarkup: {
    name: "Schema Markup",
    aiContext: "Structured data that provides explicit context about your content to AI systems",
    keyFactors: ["Schema types", "Completeness", "Accuracy", "Nested relationships"],
  },
  entityCoverage: {
    name: "Entity Coverage",
    aiContext: "How well your content establishes and connects entities that AI models recognize",
    keyFactors: ["Entity mentions", "Relationship clarity", "Disambiguation", "Authority signals"],
  },
  topicalAuthority: {
    name: "Topical Authority",
    aiContext: "Depth and breadth of your expertise in specific topic areas",
    keyFactors: ["Topic clustering", "Content depth", "Internal linking", "Expertise signals"],
  },
  brandAuthority: {
    name: "Brand Authority",
    aiContext: "External signals that establish your brand as a trusted source",
    keyFactors: ["Backlink quality", "Mentions", "Social proof", "Industry recognition"],
  },
  userExperience: {
    name: "User Experience",
    aiContext: "Engagement signals that indicate content satisfaction to AI training systems",
    keyFactors: ["Engagement metrics", "Accessibility", "Navigation clarity", "Content freshness"],
  },
} as const;

// ============================================
// Empty State Messages
// ============================================

export const EMPTY_STATE_MESSAGES = {
  noAuditData: {
    headline: "Your AI-SEO journey starts here",
    subtext: "Run your first audit to discover how AI assistants perceive your brand and content.",
    cta: "Start AI Audit",
  },
  noActivityYet: {
    headline: "Activity will appear as you optimize",
    subtext: "Track improvements, monitor AI visibility changes, and see how optimizations impact your scores.",
    cta: "View Recommendations",
  },
  noBrandsConnected: {
    headline: "Connect your first brand",
    subtext: "Add your website to begin tracking AI visibility across ChatGPT, Gemini, Perplexity, and other platforms.",
    cta: "Add Brand",
  },
} as const;

// ============================================
// Status Labels
// ============================================

export const STATUS_LABELS = {
  score: {
    excellent: { label: "Excellent", description: "Top-tier AI visibility", threshold: 80 },
    good: { label: "Good", description: "Above average performance", threshold: 60 },
    needsWork: { label: "Needs Improvement", description: "Optimization opportunities available", threshold: 40 },
    critical: { label: "Critical", description: "Significant gaps in AI discoverability", threshold: 0 },
  },
  severity: {
    critical: { label: "Critical", description: "Blocking AI visibility", color: "red" },
    warning: { label: "Warning", description: "Limiting potential reach", color: "amber" },
    info: { label: "Info", description: "Opportunity for improvement", color: "blue" },
  },
  priority: {
    high: { label: "High Priority", description: "Address within 1-2 weeks", color: "red" },
    medium: { label: "Medium Priority", description: "Address within 1 month", color: "amber" },
    low: { label: "Low Priority", description: "Address when convenient", color: "blue" },
  },
} as const;

// ============================================
// Helper Functions
// ============================================

export function getScoreStatus(score: number, maxScore: number = 100) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return STATUS_LABELS.score.excellent;
  if (percentage >= 60) return STATUS_LABELS.score.good;
  if (percentage >= 40) return STATUS_LABELS.score.needsWork;
  return STATUS_LABELS.score.critical;
}

export function getMetricDescription(metricKey: keyof typeof AI_SEO_METRICS) {
  return AI_SEO_METRICS[metricKey];
}
