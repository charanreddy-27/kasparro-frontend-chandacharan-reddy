import type { Metadata } from "next";
import { PublicHeader, PublicFooter } from "@/components/layout";
import { Button } from "@/components/ui";
import Link from "next/link";
import {
  Target,
  Lightbulb,
  Rocket,
  Code,
  Brain,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Kasparro - AI-Native SEO Platform",
  description:
    "Learn about Kasparro's mission to help brands win visibility in the AI-first search era.",
};

const values = [
  {
    icon: Brain,
    title: "AI-Native Thinking",
    description:
      "We don't adapt old tools for new problems. Everything we build is designed from the ground up for AI-first search.",
  },
  {
    icon: Code,
    title: "Engineering Excellence",
    description:
      "We're engineers building for engineers. Our platform is built with precision, scalability, and reliability in mind.",
  },
  {
    icon: Users,
    title: "Brand-Centric",
    description:
      "We obsess over brand outcomes. Every feature we ship is measured against real brand impact.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PublicHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600">
                About Kasparro
              </span>
              <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
                Building for the AI-First Search Era
              </h1>
              <p className="text-lg text-slate-600">
                Kasparro was founded on a simple observation: the way people search
                for information is fundamentally changing, and brands need new
                tools to stay visible.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                  <Target className="h-7 w-7 text-indigo-600" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">
                  Our Mission
                </h2>
                <p className="mb-4 text-lg text-slate-600">
                  To help every brand understand and optimize their presence in
                  AI-powered search engines—from ChatGPT and Gemini to Perplexity
                  and beyond.
                </p>
                <p className="text-slate-600">
                  Traditional SEO tools were built for a world of 10 blue links.
                  But AI search is different. It synthesizes information, makes
                  recommendations, and shapes perception in ways Google never did.
                  Brands need new intelligence to navigate this shift.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-8">
                <blockquote className="text-lg italic text-slate-700">
                  "In the AI search era, it's not about ranking #1 on Google.
                  It's about being the brand that AI recommends, cites, and
                  trusts."
                </blockquote>
                <div className="mt-4 text-sm font-medium text-slate-900">
                  — Kasparro Team
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Philosophy */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Data Over Opinions
                    </h3>
                    <p className="text-sm text-slate-600">
                      Every insight in Kasparro is backed by real data from AI
                      platforms, not assumptions about how AI "should" work.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Actionable First
                    </h3>
                    <p className="text-sm text-slate-600">
                      We don't just surface problems—we provide clear,
                      prioritized recommendations that teams can act on
                      immediately.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      System Thinking
                    </h3>
                    <p className="text-sm text-slate-600">
                      AI visibility isn't one metric—it's the result of many
                      interconnected factors. Our platform analyzes the whole
                      system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
                  <Lightbulb className="h-7 w-7 text-violet-600" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">
                  Product Philosophy
                </h2>
                <p className="text-lg text-slate-600">
                  Kasparro is built on three core principles that guide every
                  feature we ship and every decision we make.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                <Rocket className="h-7 w-7 text-emerald-600" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Our Vision for AI-First Search
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                We believe the next decade of search will be defined by AI. Users
                will increasingly rely on AI assistants to find information, make
                decisions, and discover brands. The companies that understand and
                adapt to this shift will thrive. Those that don't will fade from
                relevance.
              </p>
              <p className="text-lg text-slate-600">
                Kasparro exists to ensure that forward-thinking brands have the
                intelligence and tools they need to win in this new era. We're
                not just building analytics—we're building the foundation for how
                brands will compete in AI-first search.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                What We Stand For
              </h2>
              <p className="mb-12 text-lg text-slate-600">
                Our values shape how we build products, serve customers, and
                grow as a company.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-violet-700 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to explore the platform?
            </h2>
            <p className="mb-8 text-lg text-indigo-100">
              See how Kasparro can help your brand win in AI-first search.
            </p>
            <Button
              size="xl"
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              asChild
            >
              <Link href="/app/dashboard">
                Explore the Dashboard
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
