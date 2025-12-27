"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Shield,
  FileText,
  Settings,
  Search,
  Users,
  MessageCircle,
} from "lucide-react";
import type { AuditModuleId } from "@/types";

interface Module {
  id: AuditModuleId;
  name: string;
  description: string;
  icon: typeof Eye;
  color: string;
}

const modules: Module[] = [
  {
    id: "ai-visibility",
    name: "AI Visibility",
    description:
      "Track how your brand appears in AI-generated search results across ChatGPT, Gemini, Perplexity, and more.",
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "trust-eeat",
    name: "Trust & E-E-A-T",
    description:
      "Evaluate Experience, Expertise, Authoritativeness, and Trustworthiness signals for AI optimization.",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "content-quality",
    name: "Content Quality",
    description:
      "Analyze content depth, accuracy, uniqueness, and alignment with user intent for AI search.",
    icon: FileText,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "technical-seo",
    name: "Technical SEO",
    description:
      "Evaluate site architecture, Core Web Vitals, and technical factors affecting AI indexing.",
    icon: Settings,
    color: "from-slate-500 to-zinc-500",
  },
  {
    id: "keyword-intelligence",
    name: "Keyword Intelligence",
    description:
      "Discover keyword opportunities and content gaps in the AI search landscape.",
    icon: Search,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "competitor-analysis",
    name: "Competitor Analysis",
    description:
      "Benchmark your AI search performance against competitors and identify opportunities.",
    icon: Users,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "brand-mentions",
    name: "Brand Mentions",
    description:
      "Track and analyze how your brand is mentioned across AI platforms and the web.",
    icon: MessageCircle,
    color: "from-indigo-500 to-blue-500",
  },
];

export function ModulesSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600"
          >
            Comprehensive Analysis
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
          >
            7 AI-Powered Audit Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-lg text-slate-600"
          >
            Each module provides deep insights into different aspects of your
            AI search presence, powered by advanced analysis algorithms.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 transition-opacity group-hover:opacity-5`}
                />

                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${module.color}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {module.name}
                </h3>
                <p className="text-sm text-slate-600">{module.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
