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
import { motion } from "framer-motion";

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
    <div className="w-full rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 lg:w-72">
      <div className="border-b border-slate-200 p-4 dark:border-slate-700">
        <h2 className="font-semibold text-slate-900 dark:text-white">Audit Modules</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Select a module to view details</p>
      </div>
      <div className="p-2">
        {auditModules.map((module, index) => {
          const Icon = moduleIcons[module.id];
          const isSelected = selectedModuleId === module.id;

          return (
            <motion.button
              key={module.id}
              onClick={() => setSelectedModuleId(module.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors",
                isSelected
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                  : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg",
                  isSelected ? "bg-indigo-100 dark:bg-indigo-900/50" : "bg-slate-100 dark:bg-slate-700"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4",
                    isSelected ? "text-indigo-600 dark:text-indigo-400" : "text-slate-500 dark:text-slate-400"
                  )}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "truncate text-sm font-medium",
                    isSelected ? "text-indigo-700 dark:text-indigo-300" : "text-slate-900 dark:text-white"
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
                        ? "text-emerald-600 dark:text-emerald-400"
                        : module.score >= 60
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-red-600 dark:text-red-400"
                    )}
                  >
                    {module.score}
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
