import type { ArchitectureComponent, PipelineStage } from "@/types";

export const pipelineStages: PipelineStage[] = [
  {
    id: "input",
    name: "Input Assembler",
    description:
      "Collects and validates all input data including domain, brand assets, competitor information, and target keywords.",
    inputs: ["Domain URL", "Brand Guidelines", "Competitor List", "Target Keywords", "Industry Context"],
    outputs: ["Validated Input Package", "Initial Context"],
    status: "completed",
  },
  {
    id: "context",
    name: "Context Pack",
    description:
      "Builds a comprehensive context package by crawling the website, gathering AI platform data, and enriching with third-party sources.",
    inputs: ["Validated Input Package", "Website Crawl Data", "AI Platform Mentions", "Backlink Data"],
    outputs: ["Enriched Context Pack", "Brand Knowledge Graph"],
    status: "completed",
  },
  {
    id: "analysis",
    name: "Module Analysis",
    description:
      "Seven specialized AI modules analyze different aspects of your AI search presence and generate detailed reports.",
    inputs: ["Enriched Context Pack", "Historical Data", "Benchmark Data"],
    outputs: ["Module Reports", "Scores", "Issues", "Recommendations"],
    status: "active",
  },
  {
    id: "synthesis",
    name: "Report Synthesis",
    description:
      "Combines all module outputs into coherent, actionable reports with prioritized recommendations.",
    inputs: ["Module Reports", "Priority Matrix", "Business Goals"],
    outputs: ["Unified Audit Report", "Action Plan", "Benchmark Comparison"],
    status: "processing",
  },
  {
    id: "delivery",
    name: "Output Delivery",
    description:
      "Presents findings through interactive dashboards, exportable reports, and integration APIs.",
    inputs: ["Unified Audit Report", "User Preferences", "Export Format"],
    outputs: ["Dashboard Views", "PDF Reports", "API Responses", "Alerts"],
    status: "completed",
  },
];

export const architectureComponents: ArchitectureComponent[] = [
  // Input Layer
  {
    id: "domain-input",
    name: "Domain Validator",
    type: "input",
    description: "Validates and normalizes input domain URLs",
    connections: ["input-assembler"],
  },
  {
    id: "brand-input",
    name: "Brand Asset Collector",
    type: "input",
    description: "Collects brand guidelines, logos, and identity assets",
    connections: ["input-assembler"],
  },
  {
    id: "keyword-input",
    name: "Keyword Importer",
    type: "input",
    description: "Imports and validates target keyword lists",
    connections: ["input-assembler"],
  },
  {
    id: "competitor-input",
    name: "Competitor Identifier",
    type: "input",
    description: "Identifies and validates competitor domains",
    connections: ["input-assembler"],
  },

  // Processors
  {
    id: "input-assembler",
    name: "Input Assembler",
    type: "processor",
    description: "Aggregates and validates all input sources",
    connections: ["context-builder"],
  },
  {
    id: "context-builder",
    name: "Context Pack Builder",
    type: "processor",
    description: "Builds comprehensive context from multiple data sources",
    connections: [
      "ai-visibility-module",
      "trust-module",
      "content-module",
      "technical-module",
      "keyword-module",
      "competitor-module",
      "mentions-module",
    ],
  },
  {
    id: "crawler",
    name: "Web Crawler",
    type: "processor",
    description: "Crawls target and competitor websites for content analysis",
    connections: ["context-builder"],
  },
  {
    id: "ai-monitor",
    name: "AI Platform Monitor",
    type: "processor",
    description: "Monitors brand mentions across AI platforms",
    connections: ["context-builder"],
  },

  // Audit Modules
  {
    id: "ai-visibility-module",
    name: "AI Visibility Analyzer",
    type: "module",
    description: "Measures presence in AI-generated search results",
    connections: ["report-synthesizer"],
  },
  {
    id: "trust-module",
    name: "Trust & E-E-A-T Analyzer",
    type: "module",
    description: "Evaluates expertise, experience, authority, and trust signals",
    connections: ["report-synthesizer"],
  },
  {
    id: "content-module",
    name: "Content Quality Analyzer",
    type: "module",
    description: "Analyzes content depth, uniqueness, and user intent alignment",
    connections: ["report-synthesizer"],
  },
  {
    id: "technical-module",
    name: "Technical SEO Analyzer",
    type: "module",
    description: "Evaluates technical factors affecting AI indexing",
    connections: ["report-synthesizer"],
  },
  {
    id: "keyword-module",
    name: "Keyword Intelligence Analyzer",
    type: "module",
    description: "Analyzes keyword opportunities in AI search landscape",
    connections: ["report-synthesizer"],
  },
  {
    id: "competitor-module",
    name: "Competitor Analysis Engine",
    type: "module",
    description: "Benchmarks performance against competitors",
    connections: ["report-synthesizer"],
  },
  {
    id: "mentions-module",
    name: "Brand Mentions Tracker",
    type: "module",
    description: "Tracks and analyzes brand mentions across platforms",
    connections: ["report-synthesizer"],
  },

  // Outputs
  {
    id: "report-synthesizer",
    name: "Report Synthesizer",
    type: "processor",
    description: "Combines module outputs into unified reports",
    connections: ["dashboard-output", "report-output", "api-output"],
  },
  {
    id: "dashboard-output",
    name: "Interactive Dashboard",
    type: "output",
    description: "Real-time dashboard with scores and insights",
    connections: [],
  },
  {
    id: "report-output",
    name: "PDF Report Generator",
    type: "output",
    description: "Generates exportable PDF audit reports",
    connections: [],
  },
  {
    id: "api-output",
    name: "API Integration",
    type: "output",
    description: "RESTful API for third-party integrations",
    connections: [],
  },
];

export const dataFlowDescription = {
  inputPhase: {
    title: "Data Collection",
    description:
      "The platform begins by collecting essential data about your brand, including your domain, brand assets, target keywords, and competitor information. This data is validated and structured for processing.",
  },
  processingPhase: {
    title: "Context Enrichment",
    description:
      "The Context Pack Builder enriches your data by crawling your website, monitoring AI platforms for brand mentions, gathering backlink data, and building a comprehensive knowledge graph of your brand's digital presence.",
  },
  analysisPhase: {
    title: "Multi-Module Analysis",
    description:
      "Seven specialized AI modules analyze different aspects of your AI search presence. Each module generates scores, identifies issues, and provides actionable recommendations based on your enriched context data.",
  },
  outputPhase: {
    title: "Insight Delivery",
    description:
      "Analysis results are synthesized into unified reports and delivered through interactive dashboards, exportable PDF reports, and API integrations for seamless workflow integration.",
  },
};
