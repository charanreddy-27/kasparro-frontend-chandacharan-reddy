"use client";

import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-violet-700 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to dominate AI search?
          </h2>
          <p className="mb-8 text-lg text-indigo-100">
            Run your first AI-SEO audit and discover how AI sees your brand.
            Get actionable insights in minutes.
          </p>
          <Button
            size="xl"
            className="bg-white text-indigo-700 hover:bg-indigo-50"
            asChild
          >
            <Link href="/app/dashboard">
              Start Free Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
