import type { Brand } from "@/types";

export const brands: Brand[] = [
  {
    id: "brand-1",
    name: "TechFlow AI",
    domain: "techflow.ai",
    logo: "/brands/techflow.svg",
    industry: "Technology",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "brand-2",
    name: "GreenLife Organics",
    domain: "greenlife.com",
    logo: "/brands/greenlife.svg",
    industry: "Health & Wellness",
    createdAt: "2024-02-20T14:30:00Z",
  },
  {
    id: "brand-3",
    name: "FinanceHub Pro",
    domain: "financehub.io",
    logo: "/brands/financehub.svg",
    industry: "Financial Services",
    createdAt: "2024-03-10T09:15:00Z",
  },
];

export const defaultBrand = brands[0];
