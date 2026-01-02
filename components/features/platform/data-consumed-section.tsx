"use client";

import { motion } from "framer-motion";
import {
  Globe,
  FileText,
  Link2,
  Bot,
  TrendingUp,
  Users,
  Search,
  Database,
} from "lucide-react";

const dataInputs = [
  {
    icon: Globe,
    title: "Website Data",
    description:
      "Full crawl of your website including content, structure, metadata, and technical configuration.",
    items: [
      "Page content & structure",
      "Meta tags & schema",
      "Internal linking",
      "Core Web Vitals",
    ],
  },
  {
    icon: Bot,
    title: "AI Platform Data",
    description:
      "Real-time monitoring of how your brand appears across major AI platforms.",
    items: [
      "ChatGPT mentions",
      "Gemini citations",
      "Perplexity references",
      "Claude mentions",
    ],
  },
  {
    icon: Link2,
    title: "Backlink Profile",
    description:
      "Analysis of your domain authority and the quality of sites linking to you.",
    items: [
      "Domain authority",
      "Referring domains",
      "Link quality signals",
      "Anchor text analysis",
    ],
  },
  {
    icon: Users,
    title: "Competitor Intelligence",
    description:
      "Comprehensive data on competitor strategies and performance.",
    items: [
      "Competitor rankings",
      "Content gaps",
      "Share of voice",
      "Strategic moves",
    ],
  },
  {
    icon: Search,
    title: "Search Data",
    description:
      "Traditional and AI-specific search query data for your industry.",
    items: [
      "Keyword rankings",
      "Search volumes",
      "Question queries",
      "Intent patterns",
    ],
  },
  {
    icon: TrendingUp,
    title: "Third-Party Signals",
    description:
      "External data sources that influence AI model training and responses.",
    items: [
      "Social mentions",
      "Review aggregators",
      "Wikipedia presence",
      "News citations",
    ],
  },
];

export function DataConsumedSection() {
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
            Data Sources
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            What Data Kasparro Consumes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-lg text-slate-600 dark:text-slate-400"
          >
            We aggregate data from multiple sources to build a comprehensive
            picture of your AI search presence.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dataInputs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                  <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <Database className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
