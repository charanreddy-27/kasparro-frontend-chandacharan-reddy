"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store";
import { brands } from "@/data/brands";
import { Select } from "@/components/ui";
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
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900">Kasparro</span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 lg:hidden"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        {/* Brand Selector */}
        <div className="border-b border-slate-200 p-4">
          <label className="mb-2 block text-xs font-medium text-slate-500">
            Select Brand
          </label>
          <Select
            options={brandOptions}
            value={selectedBrandId}
            onChange={(e) => setSelectedBrandId(e.target.value)}
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {dashboardNavLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        isActive ? "text-indigo-600" : "text-slate-400"
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
        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-600">
              TF
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">Test User</p>
              <p className="text-xs text-slate-500">test@example.com</p>
            </div>
            <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
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
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-lg md:px-6">
      <button
        onClick={toggleSidebar}
        className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-4">
        <button className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>
        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
