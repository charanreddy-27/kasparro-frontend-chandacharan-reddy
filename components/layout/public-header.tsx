"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">Kasparro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/app/dashboard">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/app/dashboard">
            <Button variant="primary" size="sm">
              Run AI-SEO Audit
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-slate-600" />
          ) : (
            <Menu className="h-6 w-6 text-slate-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/app/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/app/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">
                  Run AI-SEO Audit
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
