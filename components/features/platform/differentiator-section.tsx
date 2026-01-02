"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Primary Focus",
    traditional: "Google rankings & keywords",
    kasparro: "AI platform visibility & citations",
  },
  {
    feature: "Data Sources",
    traditional: "Google Search Console, keyword tools",
    kasparro: "AI platforms, knowledge graphs, entity data",
  },
  {
    feature: "Content Strategy",
    traditional: "Keyword density & backlinks",
    kasparro: "E-E-A-T, conversational intent, citations",
  },
  {
    feature: "Measurement",
    traditional: "SERP rankings, organic traffic",
    kasparro: "AI visibility score, mention quality",
  },
  {
    feature: "Competitor Analysis",
    traditional: "Keyword overlap, backlink gaps",
    kasparro: "AI share of voice, recommendation frequency",
  },
  {
    feature: "Technical Focus",
    traditional: "Core Web Vitals, crawlability",
    kasparro: "Schema markup, entity optimization, AI indexing",
  },
  {
    feature: "Future-Proofing",
    traditional: "Reactive to algorithm updates",
    kasparro: "Proactive AI model understanding",
  },
];

export function DifferentiatorSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600"
          >
            The Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            Kasparro vs Traditional SEO Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-lg text-slate-600 dark:text-slate-400"
          >
            Traditional SEO tools were built for a different era. Kasparro is
            designed from the ground up for AI-first search.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
            <div className="p-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:p-4 sm:text-sm sm:font-medium sm:normal-case sm:tracking-normal">Feature</div>
            <div className="border-l border-slate-200 p-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-400 dark:border-slate-700 dark:text-slate-500 sm:p-4 sm:text-sm sm:font-medium sm:normal-case sm:tracking-normal">
              Traditional SEO
            </div>
            <div className="border-l border-slate-200 bg-indigo-50 p-3 text-center text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:border-slate-700 dark:bg-indigo-950/50 dark:text-indigo-300 sm:p-4 sm:text-sm sm:font-medium sm:normal-case sm:tracking-normal">
              Kasparro
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-slate-100 transition-colors last:border-b-0 hover:bg-slate-50/50 dark:border-slate-700/70 dark:hover:bg-slate-800/50"
            >
              <div className="p-3 text-xs font-medium text-slate-900 dark:text-white sm:p-4 sm:text-sm">
                {row.feature}
              </div>
              <div className="border-l border-slate-100 p-3 text-center text-xs text-slate-500 dark:border-slate-700/70 dark:text-slate-400 sm:p-4 sm:text-sm">
                {row.traditional}
              </div>
              <div className="border-l border-slate-100 bg-indigo-50/50 p-3 text-center text-xs font-medium text-slate-900 dark:border-slate-700/70 dark:bg-indigo-950/30 dark:text-white sm:p-4 sm:text-sm">
                {row.kasparro}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3"
        >
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 sm:text-3xl">AI-First</div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Built specifically for the AI search era, not retrofitted
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 sm:text-3xl">Actionable</div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Every insight comes with clear, prioritized recommendations
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 sm:text-3xl">Future-Ready</div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Stay ahead as AI search continues to evolve
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
