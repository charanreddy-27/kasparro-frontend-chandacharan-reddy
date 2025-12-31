import type { Metadata } from "next";
import { DashboardSidebar, DashboardHeader } from "@/components/layout";

export const metadata: Metadata = {
  title: "Dashboard | Kasparro",
  description: "Your AI-SEO audit dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
