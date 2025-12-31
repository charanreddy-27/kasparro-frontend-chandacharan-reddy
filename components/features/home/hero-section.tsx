"use client";

import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-900 dark:to-slate-950 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-indigo-200 opacity-30 blur-3xl dark:bg-indigo-900 dark:opacity-20" />
      <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-violet-200 opacity-30 blur-3xl dark:bg-violet-900 dark:opacity-20" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
          >
            <Sparkles className="h-4 w-4" />
            AI-Native SEO Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl"
          >
            Win visibility in the{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
              AI search era
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-lg text-slate-600 dark:text-slate-300 md:text-xl"
          >
            Kasparro is the AI-native SEO & Brand Intelligence platform built for
            ChatGPT, Gemini, Perplexity, and the next generation of search.
            Understand how AI sees your brand and optimize for the future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="primary" size="xl" asChild>
              <Link href="/app/dashboard">
                Run AI-SEO Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/platform">
                <Play className="h-5 w-5" />
                See How It Works
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 dark:text-slate-500"
          >
            <span>Trusted by leading brands</span>
            <div className="hidden h-4 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
            <span>7 AI-Powered Modules</span>
            <div className="hidden h-4 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
            <span>Real-time Monitoring</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
