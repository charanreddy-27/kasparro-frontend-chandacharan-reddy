# Kasparro Frontend

AI-native SEO & Brand Intelligence Platform for the AI-first search era.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

---

## TL;DR

| | |
|---|---|
| **What** | Production-ready Next.js 16 frontend: public marketing + authenticated dashboard |
| **Stack** | Next.js App Router · TypeScript · Tailwind 4 · Zustand · Zod · Framer Motion · Recharts |
| **Score** | 96/100 evaluation, zero P0 issues |

**Highlights:** 7-module AI audit with charts · Dark mode (system-aware) · WCAG 2.1 AA · Mobile-first · Skeleton loaders

```bash
npm install && npm run dev   # → localhost:3000
```

---

## Routes

| Public | Product |
|--------|---------|
| `/` Home | `/app/dashboard` Brand metrics |
| `/platform` Pipeline | `/app/audit` 7-module viewer |
| `/about` Mission | `/app/architecture` System viz |

---

## Project Structure

```
kasparro-frontend/
 app/                          # Next.js App Router pages
    page.tsx                  # Home page (/)
    platform/                 # Platform overview (/platform)
    about/                    # About page (/about)
    app/                      # Dashboard routes (/app/*)
        layout.tsx            # Dashboard layout with sidebar
        dashboard/            # Main dashboard (/app/dashboard)
        audit/                # Audit module view (/app/audit)
        architecture/         # System architecture (/app/architecture)
 components/
    ui/                       # Reusable UI primitives
       button.tsx            # Button component with variants
       card.tsx              # Card components
       badge.tsx             # Badge component
       progress.tsx          # Progress bar
       select.tsx            # Select dropdown
    layout/                   # Layout components
       public-header.tsx     # Public site header
       public-footer.tsx     # Public site footer
       dashboard-layout.tsx  # Dashboard sidebar & header
    features/                 # Feature-specific components
        home/                 # Home page sections
        platform/             # Platform page sections
        audit/                # Audit page components
 data/                         # Mock data (JSON-driven)
    brands.ts                 # Brand entities
    audit-modules.ts          # 7 audit module data
    dashboard.ts              # Dashboard snapshots & activity
    architecture.ts           # Architecture components
 store/                        # State management
    app-store.ts              # Zustand store
 types/                        # TypeScript interfaces
    index.ts                  # All type definitions
 lib/                          # Utility functions
     utils.ts                  # Helper functions
```

##  Architectural Decisions

| Layer | Location | Pattern |
|-------|----------|---------|
| UI Primitives | `components/ui/` | Stateless, CVA variants |
| Layout | `components/layout/` | Headers, footers, sidebars |
| Features | `components/features/` | Domain-specific, self-contained |

**Key choices:**
- **Zustand** over Context → simpler API, no provider wrapping, easy persistence
- **Data-driven UI** → all content from typed mock files, API-ready
- **Tailwind + CVA** → consistent tokens, variant management, dark mode

---

## Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 16.0.0 | App Router, Turbopack |
| TypeScript 5 | Strict mode, zero `any` |
| Tailwind CSS 4 | Utility-first + design tokens |
| Zustand | Lightweight state |
| Zod | Runtime validation |
| Framer Motion | Purposeful animations |
| Recharts | Theme-aware charts |

---

## Getting Started

```bash
git clone <repo-url> && cd kasparro-frontend
npm install
npm run dev      # Development
npm run build    # Production build
npm start        # Serve production
```

---

## Features

**Public Site:** Hero, value prop, modules overview, pipeline visualization, responsive nav, scroll animations

**Dashboard:** Brand selector, snapshot cards, 7-module audit sidebar, architecture viz, Zustand state sync

**Bonus:** Micro-interactions, skeleton loaders, empty states with AI-SEO context

---

## Post-Evaluation Enhancements

### Dark Mode
`next-themes` v0.4.6 · System preference detection · localStorage persistence · No FOUC · Full coverage

### UI Interactions
- **Accordion** (`/app/audit`): Custom Framer Motion, keyboard accessible
- **Tooltips** (Dashboard): AI-SEO terminology, 200ms delay, dark mode
- **Transitions**: `AnimatePresence` module switching, staggered animations

### Data Visualization
Four Recharts components (Bar, Radar, Area, Horizontal Bar) — all theme-aware, typed, skeleton-loaded

### Zod Validation
Schemas in `lib/schemas.ts` for `brand`, `auditModule`, `dashboardSnapshot` — ready for API responses

---

## Production Readiness

| Area | Implementation |
|------|---------------|
| **UX** | Skeleton loaders (no CLS), contextual empty states, rotating loading copy |
| **A11y** | Keyboard nav, ARIA labels, skip link, `prefers-reduced-motion`, screen reader chart descriptions |
| **Perf** | `React.memo` charts/cards, `useMemo` computations, CSS variables |

---

## Tradeoffs

| Decision | Why |
|----------|-----|
| Custom Accordion | Full animation + a11y control vs library |
| CSS Variables | Clean dark mode vs slight runtime cost |
| Mocked Data | Frontend focus, no persistence |
| Client Components | Charts require client rendering |
| Zod + TS | Runtime + compile-time safety |

---

## Scaling Path

- **API:** Mock data structured for easy swap; Zod validation ready
- **State:** Zustand extensible with SWR/React Query caching
- **Performance:** Tree-shakeable charts, dynamic import ready
