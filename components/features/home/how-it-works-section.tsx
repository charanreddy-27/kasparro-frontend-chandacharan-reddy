"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Database,
  Cpu,
  FileOutput,
  ArrowRight,
} from "lucide-react";

const pipelineSteps = [
  {
    step: 1,
    title: "Input",
    description: "Provide your domain, brand assets, competitors, and target keywords",
    icon: Upload,
    color: "bg-blue-500",
  },
  {
    step: 2,
    title: "Context Building",
    description: "Our crawlers gather data from your site, AI platforms, and third-party sources",
    icon: Database,
    color: "bg-indigo-500",
  },
  {
    step: 3,
    title: "AI Analysis",
    description: "7 specialized modules analyze different aspects of your AI search presence",
    icon: Cpu,
    color: "bg-violet-500",
  },
  {
    step: 4,
    title: "Actionable Output",
    description: "Get scores, insights, issues, and prioritized recommendations",
    icon: FileOutput,
    color: "bg-emerald-500",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600"
          >
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            How Kasparro Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-lg text-slate-600 dark:text-slate-400"
          >
            Our intelligent pipeline transforms your brand data into actionable
            AI search optimization insights.
          </motion.p>
        </div>

        {/* Pipeline Visualization */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-4">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === pipelineSteps.length - 1;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Arrow (hidden on mobile and last item) */}
                  {!isLast && (
                    <div className="absolute -right-2 top-8 z-10 hidden md:block">
                      <ArrowRight className="h-5 w-5 text-slate-300" />
                    </div>
                  )}

                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon */}
                    <div className="relative mb-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900 shadow-md ring-2 ring-slate-100 dark:bg-slate-800 dark:text-white dark:ring-slate-700">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3"
        >
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">{"<"}5 min</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Average audit completion time</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">200+</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Data points analyzed per audit</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">6</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">AI platforms monitored</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
