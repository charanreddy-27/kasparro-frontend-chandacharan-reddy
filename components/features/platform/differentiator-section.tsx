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
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
            <div className="p-4 font-medium text-slate-600 dark:text-slate-400">Feature</div>
            <div className="border-l border-slate-200 p-4 text-center font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
              Traditional SEO
            </div>
            <div className="border-l border-slate-200 bg-indigo-50 p-4 text-center font-medium text-indigo-700 dark:border-slate-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              Kasparro
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-slate-100 last:border-b-0 dark:border-slate-700"
            >
              <div className="p-4 text-sm font-medium text-slate-900 dark:text-white">
                {row.feature}
              </div>
              <div className="border-l border-slate-100 p-4 text-center text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
                {row.traditional}
              </div>
              <div className="border-l border-slate-100 bg-indigo-50/30 p-4 text-center text-sm font-medium text-slate-900 dark:border-slate-700 dark:bg-indigo-900/20 dark:text-white">
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
          className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3"
        >
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">AI-First</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Built specifically for the AI search era, not retrofitted
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">Actionable</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Every insight comes with clear, prioritized recommendations
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">Future-Ready</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Stay ahead as AI search continues to evolve
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
