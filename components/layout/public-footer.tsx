import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "/platform" },
    { label: "Pricing", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "API", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "AI SEO Guide", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Help Center", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 shadow-sm shadow-indigo-500/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Kasparro</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              AI-native SEO & Brand Intelligence platform for the AI-first search era.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label="View our GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Kasparro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
