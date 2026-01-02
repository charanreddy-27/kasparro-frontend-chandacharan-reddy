"use client";

import { motion } from "framer-motion";
import { Bot, Search, TrendingUp, Brain, AlertTriangle } from "lucide-react";

const differences = [
  {
    traditional: "Optimizing for 10 blue links",
    aiSeo: "Optimizing for AI-generated answers",
    icon: Search,
  },
  {
    traditional: "Keyword density focus",
    aiSeo: "Conversational intent & context",
    icon: Brain,
  },
  {
    traditional: "Link building as primary signal",
    aiSeo: "E-E-A-T and citation authority",
    icon: TrendingUp,
  },
  {
    traditional: "Page-level optimization",
    aiSeo: "Entity & knowledge graph optimization",
    icon: Bot,
  },
  {
    traditional: "Reactive to algorithm updates",
    aiSeo: "Proactive AI model understanding",
    icon: AlertTriangle,
  },
];

export function WhyAiSeoSection() {
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
            The Paradigm Shift
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            Why AI-SEO is Different
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-lg text-slate-600 dark:text-slate-400"
          >
            The search landscape has fundamentally changed. AI-powered search
            engines don't just rank pages—they understand, synthesize, and
            recommend. Your brand needs a new approach.
          </motion.p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:gap-6">
            {differences.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800 md:grid-cols-[1fr,auto,1fr] md:items-center md:p-6"
                >
                  {/* Traditional */}
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <span className="hidden rounded-full bg-slate-200 px-3 py-1 text-xs font-medium dark:bg-slate-700 dark:text-slate-400 md:inline-block">
                      Traditional
                    </span>
                    <span className="text-sm line-through">{item.traditional}</span>
                  </div>

                  {/* Icon */}
                  <div className="hidden md:flex md:items-center md:justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                      <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>

                  {/* AI SEO */}
                  <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 md:hidden">
                      AI-SEO
                    </span>
                    <span className="text-sm font-medium">{item.aiSeo}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
