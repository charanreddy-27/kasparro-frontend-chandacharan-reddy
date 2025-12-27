import type { AuditModule } from "@/types";

export const auditModules: AuditModule[] = [
  {
    id: "ai-visibility",
    name: "AI Visibility",
    description:
      "Measures how well your brand appears in AI-powered search results across ChatGPT, Gemini, Perplexity, and other AI assistants.",
    icon: "Eye",
    score: 72,
    maxScore: 100,
    status: "completed",
    insights: [
      {
        id: "av-1",
        title: "AI Search Presence",
        description:
          "Your brand appears in 72% of relevant AI-generated responses",
        value: "72%",
        trend: "up",
        changePercent: 8,
      },
      {
        id: "av-2",
        title: "Citation Frequency",
        description:
          "AI models cite your content 340 times per month on average",
        value: "340",
        trend: "up",
        changePercent: 15,
      },
      {
        id: "av-3",
        title: "Response Position",
        description:
          "When mentioned, your brand appears in the top 3 suggestions 58% of the time",
        value: "58%",
        trend: "stable",
      },
      {
        id: "av-4",
        title: "Platform Coverage",
        description:
          "Your brand is recognized across 4 of 6 major AI platforms",
        value: "4/6",
        trend: "up",
        changePercent: 33,
      },
    ],
    issues: [
      {
        id: "av-issue-1",
        title: "Low visibility on Perplexity",
        description:
          "Your brand appears in only 23% of relevant Perplexity searches compared to 85% on ChatGPT",
        severity: "warning",
        affectedElements: ["Perplexity AI", "Product pages"],
      },
      {
        id: "av-issue-2",
        title: "Inconsistent brand mentions",
        description:
          "AI models sometimes confuse your brand with a competitor due to similar naming",
        severity: "critical",
        affectedElements: ["Brand identity", "All AI platforms"],
      },
      {
        id: "av-issue-3",
        title: "Missing from Claude responses",
        description:
          "Claude AI rarely mentions your brand in relevant queries",
        severity: "warning",
        affectedElements: ["Claude AI", "Industry queries"],
      },
    ],
    recommendations: [
      {
        id: "av-rec-1",
        title: "Optimize for AI knowledge graphs",
        description:
          "Structure your content with clear entity relationships to improve AI model understanding of your brand",
        priority: "high",
        estimatedImpact: "+15% AI visibility within 2 months",
      },
      {
        id: "av-rec-2",
        title: "Create AI-friendly FAQ content",
        description:
          "Develop comprehensive FAQ pages that directly answer common user queries in conversational format",
        priority: "high",
        estimatedImpact: "+20% citation frequency",
      },
      {
        id: "av-rec-3",
        title: "Build authoritative backlinks",
        description:
          "Increase citations from authoritative sources that AI models frequently reference",
        priority: "medium",
        estimatedImpact: "+10% trust signal improvement",
      },
    ],
    lastUpdated: "2024-12-26T15:30:00Z",
  },
  {
    id: "trust-eeat",
    name: "Trust & E-E-A-T",
    description:
      "Evaluates Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI models use to rank and recommend content.",
    icon: "Shield",
    score: 68,
    maxScore: 100,
    status: "completed",
    insights: [
      {
        id: "te-1",
        title: "Overall E-E-A-T Score",
        description:
          "Combined score based on expertise, experience, authority, and trust signals",
        value: "68/100",
        trend: "up",
        changePercent: 5,
      },
      {
        id: "te-2",
        title: "Author Expertise",
        description:
          "65% of your content has verified expert authorship attribution",
        value: "65%",
        trend: "up",
        changePercent: 12,
      },
      {
        id: "te-3",
        title: "Trust Signals",
        description:
          "Your domain has strong SSL, privacy policy, and contact information",
        value: "Strong",
        trend: "stable",
      },
      {
        id: "te-4",
        title: "Citation Authority",
        description:
          "Your content is cited by 47 authoritative sources in your industry",
        value: "47",
        trend: "up",
        changePercent: 8,
      },
    ],
    issues: [
      {
        id: "te-issue-1",
        title: "Missing author credentials",
        description:
          "35% of your blog posts lack author bios or credential information",
        severity: "critical",
        affectedElements: ["Blog section", "12 articles"],
      },
      {
        id: "te-issue-2",
        title: "Outdated content detected",
        description:
          "8 high-traffic pages contain information that may be outdated or inaccurate",
        severity: "warning",
        affectedElements: ["Product guides", "Industry reports"],
      },
      {
        id: "te-issue-3",
        title: "Limited first-party experience signals",
        description:
          "Content lacks demonstrations of hands-on experience with products/services",
        severity: "info",
        affectedElements: ["Product reviews", "Case studies"],
      },
    ],
    recommendations: [
      {
        id: "te-rec-1",
        title: "Add comprehensive author bios",
        description:
          "Include detailed author profiles with credentials, expertise areas, and links to professional profiles",
        priority: "high",
        estimatedImpact: "+12% E-E-A-T score improvement",
      },
      {
        id: "te-rec-2",
        title: "Implement content freshness protocol",
        description:
          "Create a systematic review process to update content quarterly and add visible update dates",
        priority: "high",
        estimatedImpact: "Maintain trust signals and reduce content decay",
      },
      {
        id: "te-rec-3",
        title: "Add experience-based content",
        description:
          "Include case studies, testimonials, and hands-on demonstrations to show first-party experience",
        priority: "medium",
        estimatedImpact: "+8% experience signal improvement",
      },
    ],
    lastUpdated: "2024-12-26T15:30:00Z",
  },
  {
    id: "content-quality",
    name: "Content Quality",
    description:
      "Analyzes content depth, accuracy, uniqueness, and alignment with user intent for AI search optimization.",
    icon: "FileText",
    score: 81,
    maxScore: 100,
    status: "completed",
    insights: [
      {
        id: "cq-1",
        title: "Content Depth Score",
        description:
          "Average comprehensive coverage of topics compared to top-ranking content",
        value: "81%",
        trend: "up",
        changePercent: 6,
      },
      {
        id: "cq-2",
        title: "Unique Value Index",
        description:
          "Percentage of content offering unique insights not found in competitor content",
        value: "73%",
        trend: "up",
        changePercent: 4,
      },
      {
        id: "cq-3",
        title: "User Intent Match",
        description:
          "How well your content answers the actual questions users are asking",
        value: "88%",
        trend: "stable",
      },
      {
        id: "cq-4",
        title: "Readability Score",
        description:
          "Content accessibility measured by reading ease and clarity",
        value: "Grade 9",
        trend: "stable",
      },
    ],
    issues: [
      {
        id: "cq-issue-1",
        title: "Thin content pages detected",
        description:
          "5 pages have less than 500 words and lack comprehensive coverage",
        severity: "warning",
        affectedElements: ["/features", "/pricing-faq", "/terms"],
      },
      {
        id: "cq-issue-2",
        title: "Duplicate content risk",
        description:
          "3 pages have >40% content similarity with each other",
        severity: "warning",
        affectedElements: ["Product comparison pages"],
      },
      {
        id: "cq-issue-3",
        title: "Missing multimedia content",
        description:
          "Top-performing competitor pages use 3x more images and videos",
        severity: "info",
        affectedElements: ["Blog posts", "Product pages"],
      },
    ],
    recommendations: [
      {
        id: "cq-rec-1",
        title: "Expand thin content pages",
        description:
          "Add comprehensive information, examples, and supporting details to pages with low word counts",
        priority: "high",
        estimatedImpact: "+15% organic traffic to affected pages",
      },
      {
        id: "cq-rec-2",
        title: "Consolidate similar content",
        description:
          "Merge duplicate pages and implement canonical tags to avoid content cannibalization",
        priority: "medium",
        estimatedImpact: "Improved crawl efficiency and ranking consolidation",
      },
      {
        id: "cq-rec-3",
        title: "Add visual content strategy",
        description:
          "Incorporate relevant images, infographics, and videos to match competitor content richness",
        priority: "medium",
        estimatedImpact: "+20% engagement metrics",
      },
    ],
    lastUpdated: "2024-12-26T15:30:00Z",
  },
  {
    id: "technical-seo",
    name: "Technical SEO",
    description:
      "Evaluates site architecture, crawlability, Core Web Vitals, and technical factors affecting AI search indexing.",
    icon: "Settings",
    score: 89,
    maxScore: 100,
    status: "completed",
    insights: [
      {
        id: "ts-1",
        title: "Core Web Vitals",
        description:
          "All three Core Web Vitals metrics pass Google's thresholds",
        value: "Pass",
        trend: "stable",
      },
      {
        id: "ts-2",
        title: "Mobile Usability",
        description:
          "98% of pages pass mobile-friendly testing",
        value: "98%",
        trend: "up",
        changePercent: 2,
      },
      {
        id: "ts-3",
        title: "Crawl Efficiency",
        description:
          "Search engines successfully crawl 99.2% of your indexed pages",
        value: "99.2%",
        trend: "stable",
      },
      {
        id: "ts-4",
        title: "Schema Markup Coverage",
        description:
          "42% of pages have structured data markup implemented",
        value: "42%",
        trend: "up",
        changePercent: 15,
      },
    ],
    issues: [
      {
        id: "ts-issue-1",
        title: "Missing schema markup",
        description:
          "58% of pages lack structured data that helps AI models understand content",
        severity: "warning",
        affectedElements: ["Product pages", "Blog posts", "FAQ pages"],
      },
      {
        id: "ts-issue-2",
        title: "Large Contentful Paint (LCP) warnings",
        description:
          "3 pages have LCP times exceeding 2.5 seconds on mobile",
        severity: "warning",
        affectedElements: ["/products", "/gallery", "/team"],
      },
      {
        id: "ts-issue-3",
        title: "Broken internal links",
        description:
          "12 internal links point to 404 pages",
        severity: "info",
        affectedElements: ["Navigation", "Footer links", "Blog posts"],
      },
    ],
    recommendations: [
      {
        id: "ts-rec-1",
        title: "Implement comprehensive schema markup",
        description:
          "Add Organization, Product, Article, and FAQ schema to all relevant pages",
        priority: "high",
        estimatedImpact: "+25% rich result eligibility",
      },
      {
        id: "ts-rec-2",
        title: "Optimize LCP on slow pages",
        description:
          "Compress images, implement lazy loading, and optimize server response times",
        priority: "medium",
        estimatedImpact: "Improved Core Web Vitals and user experience",
      },
      {
        id: "ts-rec-3",
        title: "Fix broken internal links",
        description:
          "Update or remove broken links to improve crawl efficiency and user navigation",
        priority: "low",
        estimatedImpact: "Better internal link equity distribution",
      },
    ],
    lastUpdated: "2024-12-26T15:30:00Z",
  },
  {
    id: "keyword-intelligence",
    name: "Keyword Intelligence",
    description:
      "Analyzes keyword opportunities, search intent patterns, and content gaps in the AI search landscape.",
    icon: "Search",
    score: 64,
    maxScore: 100,
    status: "completed",
    insights: [
      {
        id: "ki-1",
        title: "Non-Branded Keyword Coverage",
        description:
          "Percentage of relevant non-branded keywords where you rank in top 10",
        value: "34%",
        trend: "up",
        changePercent: 7,
      },
      {
        id: "ki-2",
        title: "AI Query Opportunities",
        description:
          "New conversational queries where you could gain visibility",
        value: "156",
        trend: "up",
        changePercent: 23,
      },
      {
        id: "ki-3",
        title: "Intent Coverage",
        description:
          "Coverage across informational, navigational, and transactional intents",
        value: "Medium",
        trend: "stable",
      },
      {
        id: "ki-4",
        title: "Question-Based Queries",
        description:
          "Rankings for question-format searches (how, what, why, etc.)",
        value: "28%",
        trend: "down",
        changePercent: -3,
      },
    ],
    issues: [
      {
        id: "ki-issue-1",
        title: "Low question-query coverage",
        description:
          "Declining visibility for question-based searches that AI models prioritize",
        severity: "critical",
        affectedElements: ["Blog content", "FAQ section"],
      },
      {
        id: "ki-issue-2",
        title: "Competitor keyword gaps",
        description:
          "Competitors rank for 89 high-value keywords where you have no presence",
        severity: "warning",
        affectedElements: ["Product category pages", "Comparison content"],
      },
      {
        id: "ki-issue-3",
        title: "Long-tail opportunity missed",
        description:
          "Only 12% of your content targets long-tail conversational queries",
        severity: "info",
        affectedElements: ["Content strategy", "Blog planning"],
      },
    ],
    recommendations: [
      {
        id: "ki-rec-1",
        title: "Create question-focused content hub",
        description:
          "Develop comprehensive FAQ and how-to content targeting question-based queries",
        priority: "high",
        estimatedImpact: "+40% question-query visibility",
      },
      {
        id: "ki-rec-2",
        title: "Target competitor keyword gaps",
        description:
          "Create content for the 89 identified high-value keywords where competitors rank",
        priority: "high",
        estimatedImpact: "+25% non-branded traffic potential",
      },
      {
        id: "ki-rec-3",
        title: "Long-tail content expansion",
        description:
          "Develop content targeting conversational, AI-friendly long-tail queries",
        priority: "medium",
        estimatedImpact: "+50% AI search query coverage",
      },
    ],
    lastUpdated: "2024-12-26T15:30:00Z",
  },
  {
    id: "competitor-analysis",
    name: "Competitor Analysis",
    description:
      "Benchmarks your AI search performance against competitors and identifies strategic opportunities.",
    icon: "Users",
    score: 71,
    maxScore: 100,
    status: "completed",
    insights: [
      {
        id: "ca-1",
        title: "Market Position",
        description:
          "Your AI visibility ranking among tracked competitors",
        value: "#3 of 8",
        trend: "up",
        changePercent: 1,
      },
      {
        id: "ca-2",
        title: "Share of AI Voice",
        description:
          "Your percentage of AI-generated mentions in your category",
        value: "18%",
        trend: "up",
        changePercent: 4,
      },
      {
        id: "ca-3",
        title: "Content Gap Score",
        description:
          "Topics covered by competitors but missing from your content",
        value: "34 topics",
        trend: "down",
        changePercent: -8,
      },
      {
        id: "ca-4",
        title: "Authority Gap",
        description:
          "Difference in domain authority compared to category leader",
        value: "-12 pts",
        trend: "up",
        changePercent: 3,
      },
    ],
    issues: [
      {
        id: "ca-issue-1",
        title: "Competitor content expansion",
        description:
          "Top competitor published 45 new pages last month vs your 12",
        severity: "warning",
        affectedElements: ["Content velocity", "Topic coverage"],
      },
      {
        id: "ca-issue-2",
        title: "Authority gap widening with #1",
        description:
          "Category leader gained 15 new high-authority backlinks this month",
        severity: "warning",
        affectedElements: ["Backlink profile", "Domain authority"],
      },
      {
        id: "ca-issue-3",
        title: "Competitor AI optimization",
        description:
          "2 competitors have implemented AI-specific content strategies",
        severity: "info",
        affectedElements: ["Content format", "Schema markup"],
      },
    ],
    recommendations: [
      {
        id: "ca-rec-1",
        title: "Increase content velocity",
        description:
          "Scale content production to match or exceed competitor output while maintaining quality",
        priority: "high",
        estimatedImpact: "Close content gap within 3 months",
      },
      {
        id: "ca-rec-2",
        title: "Strategic link building campaign",
        description:
          "Focus on acquiring backlinks from sources linking to competitors but not to you",
        priority: "medium",
        estimatedImpact: "+8 domain authority points",
      },
      {
        id: "ca-rec-3",
        title: "Adopt AI-first content format",
        description:
          "Restructure content using formats that AI models prefer for citation",
        priority: "high",
        estimatedImpact: "+15% share of AI voice",
      },
    ],
    lastUpdated: "2024-12-26T15:30:00Z",
  },
  {
    id: "brand-mentions",
    name: "Brand Mentions",
    description:
      "Tracks and analyzes how your brand is mentioned across AI platforms, social media, and the web.",
    icon: "MessageCircle",
    score: 76,
    maxScore: 100,
    status: "completed",
    insights: [
      {
        id: "bm-1",
        title: "Total AI Mentions",
        description:
          "Brand mentions detected across AI platforms this month",
        value: "1,247",
        trend: "up",
        changePercent: 18,
      },
      {
        id: "bm-2",
        title: "Sentiment Score",
        description:
          "Overall sentiment of brand mentions (positive/neutral/negative)",
        value: "82% positive",
        trend: "up",
        changePercent: 5,
      },
      {
        id: "bm-3",
        title: "Context Accuracy",
        description:
          "How accurately AI models describe your brand and offerings",
        value: "89%",
        trend: "stable",
      },
      {
        id: "bm-4",
        title: "Mention Sources",
        description:
          "Number of unique sources where your brand is mentioned",
        value: "234",
        trend: "up",
        changePercent: 12,
      },
    ],
    issues: [
      {
        id: "bm-issue-1",
        title: "Inaccurate product descriptions",
        description:
          "AI models provide outdated or incorrect product information in 11% of mentions",
        severity: "warning",
        affectedElements: ["Product mentions", "Pricing information"],
      },
      {
        id: "bm-issue-2",
        title: "Missing in comparison queries",
        description:
          "Brand not mentioned in 40% of 'best [category]' type queries",
        severity: "warning",
        affectedElements: ["Comparison content", "Review mentions"],
      },
      {
        id: "bm-issue-3",
        title: "Competitor confusion",
        description:
          "Occasional brand confusion with similarly-named competitor",
        severity: "info",
        affectedElements: ["Brand identity", "Name disambiguation"],
      },
    ],
    recommendations: [
      {
        id: "bm-rec-1",
        title: "Update knowledge base content",
        description:
          "Create and maintain accurate, comprehensive brand information across authoritative sources",
        priority: "high",
        estimatedImpact: "Reduce inaccurate mentions by 80%",
      },
      {
        id: "bm-rec-2",
        title: "Build comparison content",
        description:
          "Create honest comparison pages and encourage third-party reviews",
        priority: "high",
        estimatedImpact: "+30% presence in comparison queries",
      },
      {
        id: "bm-rec-3",
        title: "Strengthen brand differentiation",
        description:
          "Emphasize unique brand identifiers and USPs in all content",
        priority: "medium",
        estimatedImpact: "Eliminate competitor confusion",
      },
    ],
    lastUpdated: "2024-12-26T15:30:00Z",
  },
];

export const getModuleById = (id: string): AuditModule | undefined => {
  return auditModules.find((module) => module.id === id);
};

export const getModulesByStatus = (
  status: AuditModule["status"]
): AuditModule[] => {
  return auditModules.filter((module) => module.status === status);
};

export const calculateOverallScore = (): number => {
  const totalScore = auditModules.reduce((sum, module) => sum + module.score, 0);
  const maxPossible = auditModules.reduce(
    (sum, module) => sum + module.maxScore,
    0
  );
  return Math.round((totalScore / maxPossible) * 100);
};
