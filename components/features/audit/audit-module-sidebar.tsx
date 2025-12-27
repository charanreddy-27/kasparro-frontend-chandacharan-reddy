"use client";

import { cn } from "@/lib/utils";
import { useAppStore } from "@/store";
import { auditModules } from "@/data/audit-modules";
import { Progress } from "@/components/ui";
import {
  Eye,
  Shield,
  FileText,
  Settings,
  Search,
  Users,
  MessageCircle,
} from "lucide-react";
import type { AuditModuleId } from "@/types";

const moduleIcons: Record<AuditModuleId, typeof Eye> = {
  "ai-visibility": Eye,
  "trust-eeat": Shield,
  "content-quality": FileText,
  "technical-seo": Settings,
  "keyword-intelligence": Search,
  "competitor-analysis": Users,
  "brand-mentions": MessageCircle,
};

export function AuditModuleSidebar() {
  const { selectedModuleId, setSelectedModuleId } = useAppStore();

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white lg:w-72">
      <div className="border-b border-slate-200 p-4">
        <h2 className="font-semibold text-slate-900">Audit Modules</h2>
        <p className="text-sm text-slate-500">Select a module to view details</p>
      </div>
      <div className="p-2">
        {auditModules.map((module) => {
          const Icon = moduleIcons[module.id];
          const isSelected = selectedModuleId === module.id;

          return (
            <button
              key={module.id}
              onClick={() => setSelectedModuleId(module.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors",
                isSelected
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg",
                  isSelected ? "bg-indigo-100" : "bg-slate-100"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4",
                    isSelected ? "text-indigo-600" : "text-slate-500"
                  )}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "truncate text-sm font-medium",
                    isSelected ? "text-indigo-700" : "text-slate-900"
                  )}
                >
                  {module.name}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <Progress
                    value={module.score}
                    max={module.maxScore}
                    size="sm"
                    color={
                      module.score >= 80
                        ? "success"
                        : module.score >= 60
                          ? "warning"
                          : "error"
                    }
                    className="flex-1"
                  />
                  <span
                    className={cn(
                      "text-xs font-medium",
                      module.score >= 80
                        ? "text-emerald-600"
                        : module.score >= 60
                          ? "text-amber-600"
                          : "text-red-600"
                    )}
                  >
                    {module.score}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
