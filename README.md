# Kasparro Frontend

AI-native SEO & Brand Intelligence Platform for the AI-first search era (ChatGPT, Gemini, Perplexity, etc.).

![Kasparro](https://img.shields.io/badge/Kasparro-AI%20SEO%20Platform-6366f1)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

##  Live Demo

[View Live Demo](https://kasparro-frontend.vercel.app) *(Deploy URL placeholder)*

##  Overview

This project implements the Kasparro Frontend Engineering Assignment, featuring:

- **Public Website**: Marketing pages explaining the AI-SEO platform
- **Product Dashboard**: Authenticated shell with mocked audit data

##  Project Structure

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

### 1. Component Architecture

**Three-layer component structure:**

- **UI Primitives** (`components/ui/`): Low-level, reusable components with no business logic. Built with `class-variance-authority` for variant management.
- **Layout Components** (`components/layout/`): Structural components like headers, footers, and sidebars.
- **Feature Components** (`components/features/`): Domain-specific components grouped by feature area.

This separation ensures:
- Clear responsibility boundaries
- Maximum reusability
- Easy testing and maintenance

### 2. Data Modeling

**Strongly typed interfaces** for all data structures:

```typescript
// Example: Audit Module structure
interface AuditModule {
  id: AuditModuleId;
  name: string;
  description: string;
  score: number;
  maxScore: number;
  status: "completed" | "in-progress" | "pending";
  insights: AuditInsight[];
  issues: AuditIssue[];
  recommendations: AuditRecommendation[];
  lastUpdated: string;
}
```

**Benefits:**
- Compile-time type checking
- IDE autocompletion
- Self-documenting code
- Consistent data shapes

### 3. State Management

**Zustand** for global state with minimal API:

```typescript
interface AppStore {
  selectedBrandId: string;
  selectedModuleId: AuditModuleId;
  sidebarOpen: boolean;
  // ... actions
}
```

**Why Zustand over Context:**
- Simpler API with less boilerplate
- Better performance (no unnecessary re-renders)
- Easy persistence and middleware support
- No provider wrapping required

### 4. Data-Driven UI

All audit content is driven from structured mock data files, **not hardcoded JSX**:

```typescript
// data/audit-modules.ts
export const auditModules: AuditModule[] = [
  {
    id: "ai-visibility",
    name: "AI Visibility",
    score: 72,
    insights: [...],
    issues: [...],
    recommendations: [...]
  },
  // ...
];
```

This approach:
- Enables easy content updates
- Supports future API integration
- Maintains consistent data shapes
- Simplifies testing

### 5. Styling Strategy

**Tailwind CSS** with utility-first approach:

- `class-variance-authority` for component variants
- `tailwind-merge` for class merging
- Custom utility functions in `lib/utils.ts`
- Consistent design tokens (colors, spacing, typography)

##  Routes

### Public Website

| Route | Description |
|-------|-------------|
| `/` | Home - Value proposition, modules overview, how it works |
| `/platform` | Platform - Audit pipeline, data sources, outputs |
| `/about` | About - Mission, philosophy, vision |

### Product Dashboard

| Route | Description |
|-------|-------------|
| `/app/dashboard` | Brand snapshot with key metrics |
| `/app/audit` | 7-module audit viewer with sidebar |
| `/app/architecture` | System architecture visualization |

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| TypeScript 5 | Type safety |
| Tailwind CSS 4 | Utility-first styling |
| Zustand | State management |
| Framer Motion | Subtle animations |
| Lucide React | Icon library |
| class-variance-authority | Component variants |

##  Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd kasparro-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

##  Features Implemented

### Part A: Public Website

- [x] Home page with hero, value proposition, modules overview
- [x] Platform page with pipeline visualization
- [x] About page with mission, philosophy, vision
- [x] Responsive navigation with mobile menu
- [x] Smooth animations with Framer Motion

### Part B: Product Dashboard

- [x] Dashboard with brand selector and snapshot cards
- [x] Audit page with module sidebar and detail panel
- [x] Architecture visualization
- [x] Real-time state updates with Zustand
- [x] Responsive sidebar with mobile support

### Bonus Features

- [x] Micro-interactions for module switching
- [x] Clean empty states
- [x] Responsive dashboard behavior
- [x] Loading-ready architecture (skeleton-compatible)

##  Tradeoffs & Decisions

### 1. No Backend Integration
- Used structured TypeScript mock data
- Designed types to match realistic API responses
- Easy to swap mocks for real API calls

### 2. Animation Scope
- Used Framer Motion sparingly for purposeful animations
- Focused on scroll-triggered reveals and transitions
- Avoided animation-heavy patterns per requirements

### 3. Component Granularity
- Balanced between too many small components and monoliths
- Feature components are self-contained but composable
- UI primitives are maximally reusable

### 4. Styling Approach
- Tailwind utility classes over CSS modules
- CVA for variant management
- Consistent design tokens throughout

##  Assumptions

1. User is already authenticated when accessing `/app/*` routes
2. Brand data is pre-populated (no onboarding flow)
3. Audit modules complete near-instantly (real-time display)
4. Single-user context (no team/organization features)

##  Future Improvements

1. **Dark mode**: Theme toggle with CSS variables
2. **Real-time updates**: WebSocket integration for live scores
3. **Export functionality**: PDF report generation
4. **Onboarding flow**: Brand setup wizard
5. **Search**: Global search for audit findings


