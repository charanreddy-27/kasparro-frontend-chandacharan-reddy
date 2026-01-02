"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button, ThemeToggle } from "@/components/ui";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
];

export function PublicHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-lg backdrop-saturate-150 dark:border-slate-800 dark:bg-slate-900/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 shadow-sm shadow-indigo-500/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">Kasparro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-150",
                pathname === link.href
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons & Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/app/dashboard">
              Sign In
            </Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/app/dashboard">
              Run AI-SEO Audit
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-center" asChild>
                <Link href="/app/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button variant="primary" className="w-full justify-center" asChild>
                <Link href="/app/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  Run AI-SEO Audit
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
