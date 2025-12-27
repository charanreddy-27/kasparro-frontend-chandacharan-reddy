import { create } from "zustand";
import type { AuditModuleId } from "@/types";
import { brands } from "@/data/brands";

interface AppStore {
  // Brand selection
  selectedBrandId: string;
  setSelectedBrandId: (id: string) => void;

  // Module selection
  selectedModuleId: AuditModuleId;
  setSelectedModuleId: (id: AuditModuleId) => void;

  // Sidebar state
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Theme
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  // Default to first brand
  selectedBrandId: brands[0]?.id ?? "",
  setSelectedBrandId: (id) => set({ selectedBrandId: id }),

  // Default to first module
  selectedModuleId: "ai-visibility",
  setSelectedModuleId: (id) => set({ selectedModuleId: id }),

  // Sidebar
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  // Theme
  theme: "light",
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
