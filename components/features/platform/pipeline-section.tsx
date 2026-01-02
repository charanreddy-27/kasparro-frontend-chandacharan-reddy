"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Database,
  Cpu,
  FileOutput,
  Globe,
  FileText,
  Link2,
  Bot,
  ArrowRight,
  CheckCircle,
  Zap,
} from "lucide-react";

const inputData = [
  { icon: Globe, label: "Domain URL", description: "Your website's primary domain" },
  { icon: FileText, label: "Brand Guidelines", description: "Logo, colors, messaging" },
  { icon: Link2, label: "Competitor List", description: "Up to 10 competitors to track" },
  { icon: Bot, label: "Target Keywords", description: "Focus keywords and topics" },
];

const outputs = [
  {
    title: "AI Visibility Score",
    description: "Overall brand presence across AI platforms",
    value: "0-100",
  },
  {
    title: "Module Reports",
    description: "Detailed analysis from 7 specialized modules",
    value: "7 reports",
  },
  {
    title: "Issue Detection",
    description: "Prioritized problems affecting AI visibility",
    value: "Critical/Warning/Info",
  },
  {
    title: "Recommendations",
    description: "Actionable steps to improve performance",
    value: "Prioritized list",
  },
  {
    title: "Competitor Benchmark",
    description: "How you compare to competitors",
    value: "Ranking & gaps",
  },
  {
    title: "Trend Analysis",
    description: "Historical performance and trajectory",
    value: "Charts & insights",
  },
];

export function PipelineSection() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600"
          >
            Audit Pipeline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            From Input to Insight
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-lg text-slate-600 dark:text-slate-400"
          >
            Understand exactly how Kasparro transforms your data into actionable
            AI search optimization insights.
          </motion.p>
        </div>

        {/* Pipeline Flow Visualization */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr,auto,1fr,auto,1fr]">
            {/* Input Stage */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <Upload className="h-5 w-5 text-white" />
                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Input</h3>
              </div>
              <div className="space-y-3">
                {inputData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg bg-white p-3 dark:bg-slate-900"
                    >
                      <Icon className="mt-0.5 h-4 w-4 text-slate-400 dark:text-slate-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden items-center lg:flex">
              <ArrowRight className="h-8 w-8 text-slate-300 dark:text-slate-600" />
            </div>

            {/* Processing Stage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-6 dark:border-indigo-800 dark:from-indigo-950/50 dark:to-violet-950/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                  <Cpu className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  AI Analysis
                </h3>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg bg-white/80 p-4 dark:bg-slate-900/80">
                  <div className="mb-2 flex items-center gap-2">
                    <Database className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                      Context Building
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Website crawling, AI platform monitoring, backlink analysis,
                    competitor data gathering
                  </p>
                </div>
                <div className="rounded-lg bg-white/80 p-4 dark:bg-slate-900/80">
                  <div className="mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                      7 Audit Modules
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    AI Visibility, Trust & E-E-A-T, Content Quality, Technical
                    SEO, Keywords, Competitors, Brand Mentions
                  </p>
                </div>
                <div className="rounded-lg bg-white/80 p-4 dark:bg-slate-900/80">
                  <div className="mb-2 flex items-center gap-2">
                    <FileOutput className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                      Report Synthesis
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Combining insights, prioritizing recommendations, generating
                    unified reports
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden items-center lg:flex">
              <ArrowRight className="h-8 w-8 text-slate-300 dark:text-slate-600" />
            </div>

            {/* Output Stage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500">
                  <FileOutput className="h-5 w-5 text-white" />
                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Output</h3>
              </div>
              <div className="space-y-2">
                {outputs.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 rounded-lg bg-white p-3 dark:bg-slate-900"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
