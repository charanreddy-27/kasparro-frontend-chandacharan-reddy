"use client";

import {
  AuditModuleSidebar,
  AuditModuleDetail,
} from "@/components/features/audit";

export default function AuditPage() {
  return (
    // Fixed: Removed h-full which caused scrolling issues
    // Added w-full and max-w-full to prevent horizontal overflow
    // Mobile-first: flex-col on mobile, flex-row on lg screens
    <div className="flex w-full max-w-full flex-col gap-6 lg:flex-row">
      {/* Sidebar - stacks on top on mobile, side on desktop */}
      <AuditModuleSidebar />

      {/* Main Content - takes remaining space */}
      <AuditModuleDetail />
    </div>
  );
}
