"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store";
import { brands } from "@/data/brands";
import { Select, ThemeToggle } from "@/components/ui";
import {
  Sparkles,
  LayoutDashboard,
  FileSearch,
  GitBranch,
  Menu,
  ChevronLeft,
  LogOut,
  Settings,
  Bell,
} from "lucide-react";

const dashboardNavLinks = [
  {
    href: "/app/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/app/audit",
    label: "Audit",
    icon: FileSearch,
  },
  {
    href: "/app/architecture",
    label: "Architecture",
    icon: GitBranch,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar, selectedBrandId, setSelectedBrandId } =
    useAppStore();

  const brandOptions = brands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  return (
    <>
      {/* Mobile overlay - improved touch handling */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-200 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - improved mobile styles with safe area support */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-64 max-w-[80vw] flex-col border-r border-slate-200 bg-white shadow-xl transition-transform duration-300 ease-out dark:border-slate-800 dark:bg-slate-900 lg:static lg:max-w-none lg:translate-x-0 lg:shadow-none",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Main navigation"
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-800">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 shadow-sm shadow-indigo-500/20">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">Kasparro</span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 lg:hidden"
            aria-label="Close navigation"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        {/* Brand Selector */}
        <div className="border-b border-slate-200 p-4 dark:border-slate-800">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Brand
          </label>
          <Select
            options={brandOptions}
            value={selectedBrandId}
            onChange={(e) => setSelectedBrandId(e.target.value)}
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {dashboardNavLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                      isActive
                        ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5 transition-colors",
                        isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500"
                      )}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-200 text-sm font-semibold text-slate-600 dark:from-slate-700 dark:to-slate-800 dark:text-slate-300">
              TF
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-900 dark:text-white">Test User</p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">test@example.com</p>
            </div>
            <button 
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              aria-label="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export function DashboardHeader() {
  const { toggleSidebar } = useAppStore();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-3 backdrop-blur-lg backdrop-saturate-150 dark:border-slate-800 dark:bg-slate-900/95 sm:h-16 sm:px-4 md:px-6">
      {/* Mobile menu button - increased tap target to 44px minimum */}
      <button
        onClick={toggleSidebar}
        className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 lg:hidden"
        aria-label="Toggle navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Spacer for desktop */}
      <div className="hidden lg:block" />

      <div className="flex items-center gap-1 sm:gap-2">
        <ThemeToggle variant="dropdown" />
        {/* Notification button - 44px minimum tap target */}
        <button 
          className="relative flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="View notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" aria-label="New notifications" />
        </button>
        {/* Settings button - 44px minimum tap target */}
        <button 
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
