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
    // Changed h-screen to min-h-screen for proper mobile scrolling
    // Removed overflow-hidden to allow content to scroll naturally
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 lg:flex-row">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        {/* Added overflow-x-hidden to prevent horizontal scroll on mobile */}
        <main className="flex-1 overflow-x-hidden p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
