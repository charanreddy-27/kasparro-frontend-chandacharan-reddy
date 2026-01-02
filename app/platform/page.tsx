import type { Metadata } from "next";
import { PublicHeader, PublicFooter } from "@/components/layout";
import {
  PipelineSection,
  DataConsumedSection,
  BrandOutputSection,
  DifferentiatorSection,
} from "@/components/features/platform";
import { CtaSection } from "@/components/features/home";

export const metadata: Metadata = {
  title: "Platform | Kasparro - AI-Native SEO Platform",
  description:
    "Learn how Kasparro's AI-powered audit pipeline transforms your brand data into actionable insights for the AI search era.",
};

export default function PlatformPage() {
  return (
    <>
      <PublicHeader />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-900 dark:to-slate-950 md:py-28">
          <div className="container mx-auto px-4 text-center md:px-6">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Product Overview
            </span>
            <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
              The Kasparro Platform
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              A comprehensive AI-SEO platform that helps brands understand and
              optimize their presence in AI-powered search engines.
            </p>
          </div>
        </section>

        <PipelineSection />
        <DataConsumedSection />
        <BrandOutputSection />
        <DifferentiatorSection />
        <CtaSection />
      </main>
      <PublicFooter />
    </>
  );
}
