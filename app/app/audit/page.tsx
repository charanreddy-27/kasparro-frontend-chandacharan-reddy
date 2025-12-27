"use client";

import {
  AuditModuleSidebar,
  AuditModuleDetail,
} from "@/components/features/audit";

export default function AuditPage() {
  return (
    <div className="flex h-full flex-col gap-6 lg:flex-row">
      {/* Sidebar */}
      <AuditModuleSidebar />

      {/* Main Content */}
      <AuditModuleDetail />
    </div>
  );
}
