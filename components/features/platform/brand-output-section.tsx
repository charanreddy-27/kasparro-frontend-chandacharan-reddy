"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  AlertTriangle,
  Lightbulb,
  Download,
  Bell,
  Code,
  TrendingUp,
} from "lucide-react";

const outputs = [
  {
    icon: BarChart3,
    title: "Interactive Dashboards",
    description:
      "Real-time visibility into your AI search performance with drill-down capabilities.",
    features: [
      "Score tracking",
      "Trend visualization",
      "Module breakdowns",
      "Historical comparison",
    ],
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description:
      "Comprehensive audit reports you can share with stakeholders.",
    features: [
      "Executive summary",
      "Module-by-module analysis",
      "Competitive benchmarks",
      "PDF export",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Issue Detection",
    description:
      "Prioritized issues affecting your AI visibility with severity levels.",
    features: [
      "Critical/Warning/Info",
      "Affected elements",
      "Impact assessment",
      "Quick fixes",
    ],
  },
  {
    icon: Lightbulb,
    title: "Recommendations",
    description:
      "Actionable, prioritized recommendations to improve your scores.",
    features: [
      "Priority ranking",
      "Estimated impact",
      "Implementation guides",
      "Resource requirements",
    ],
  },
  {
    icon: Bell,
    title: "Alerts & Monitoring",
    description:
      "Stay informed about changes in your AI search presence.",
    features: [
      "Score changes",
      "New issues detected",
      "Competitor movements",
      "Milestone achievements",
    ],
  },
  {
    icon: Code,
    title: "API Access",
    description:
      "Integrate Kasparro data into your existing workflows and tools.",
    features: [
      "RESTful API",
      "Webhook support",
      "Custom integrations",
      "Real-time data",
    ],
  },
];

export function BrandOutputSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600"
          >
            Deliverables
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
          >
            What Brands Receive
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-lg text-slate-600"
          >
            Every audit delivers actionable insights across multiple output
            formats to suit your workflow.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outputs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-indigo-100">
                  <Icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-indigo-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-slate-600">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
