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
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Kasparro</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-600">
              AI-native SEO & Brand Intelligence platform for the AI-first search era.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-slate-600"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-slate-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-slate-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Kasparro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
