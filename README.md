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

1. **Real-time updates**: WebSocket integration for live scores
2. **Export functionality**: PDF report generation
3. **Onboarding flow**: Brand setup wizard
4. **Search**: Global search for audit findings

---

##  Post-Evaluation Enhancements

This section documents the enhancements implemented following initial evaluation feedback, focusing on dark mode, advanced UI interactions, data visualization, and type safety.

### 1. Dark Mode Implementation

**Technology Stack:**
- `next-themes` v0.4.6 for theme management
- CSS custom properties for consistent theming
- Tailwind `dark:` variants throughout

**Key Implementation Details:**

```typescript
// Theme Provider (components/providers/theme-provider.tsx)
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange={false}
/>
```

**Features:**
- **System preference detection**: Automatically matches OS theme
- **Persistent preference**: Stores user choice in localStorage
- **Smooth transitions**: CSS transitions for color changes
- **No layout shift**: Uses CSS class-based theming to prevent FOUC
- **Theme toggle**: Available in both public header and dashboard header
  - Public header: Icon button that cycles through themes
  - Dashboard header: Segmented control with light/dark/system options

**Coverage:**
- All public pages (/, /platform, /about)
- All dashboard pages (/app/*)
- All UI primitives (Button, Card, Badge, Progress, Select)
- Layout components (Header, Footer, Sidebar)
- Feature components (Charts, Audit modules)

**CSS Variables:**
```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --card: #ffffff;
  --primary: #6366f1;
  --muted: #f1f5f9;
  --border: #e2e8f0;
}

.dark {
  --background: #0f172a;
  --foreground: #f8fafc;
  --card: #1e293b;
  --primary: #818cf8;
  --muted: #334155;
  --border: #334155;
}
```

### 2. Advanced UI Interactions

Three professional, enterprise-grade interactions were implemented:

#### A. Collapsible Accordion Sections

**Location:** Audit Module Detail Page (`/app/audit`)

```typescript
// components/ui/accordion.tsx
<Accordion type="multiple" defaultValue={["insights", "issues", "recommendations"]}>
  <AccordionItem value="insights">
    <AccordionTrigger>Key Insights</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
</Accordion>
```

**Features:**
- Custom-built accordion with Framer Motion animations
- Single or multiple expansion modes
- Smooth height transitions
- Accessible keyboard navigation
- Visual state indicators (chevron rotation)

#### B. Hover Tooltips for AI-SEO Metrics

**Location:** Dashboard snapshot cards, chart headers

```typescript
// Tooltip usage example
<Tooltip>
  <TooltipTrigger>
    <HelpCircle className="h-4 w-4" />
  </TooltipTrigger>
  <TooltipContent>
    AI Visibility Score measures how often your brand appears
    in AI-generated responses across major platforms.
  </TooltipContent>
</Tooltip>
```

**Features:**
- Explains AI-SEO terminology for user education
- Delay-based trigger (200ms) to prevent accidental activation
- Positioned tooltips with automatic alignment
- Dark mode compatible styling
- Touch-friendly with focus support

#### C. Animated Transitions with Framer Motion

**Dashboard Module Switching:**
```typescript
<motion.div
  key={module.id}
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -20 }}
  transition={{ duration: 0.2 }}
>
```

**Staggered List Animations:**
```typescript
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  />
))}
```

**Hover Scale Effects:**
```typescript
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 400 }}
/>
```

### 3. Data Visualization

Four responsive, strongly-typed chart components were implemented using Recharts:

#### A. SEO vs AI Visibility Comparison (Bar Chart)

**Purpose:** Compare traditional SEO performance against AI visibility across different platforms (Organic Search, ChatGPT, Gemini, Perplexity, Claude, Bing Chat).

```typescript
interface ChartDataPoint {
  name: string;
  seo: number;
  ai: number;
}
```

#### B. AI Search Readiness Radar Chart

**Purpose:** Multi-dimensional analysis of content readiness including Content Quality, E-E-A-T Signals, Schema Markup, AI Citations, Knowledge Graph, and Brand Authority.

```typescript
interface RadarDataPoint {
  metric: string;
  current: number;
  benchmark: number;
  fullMark: number;
}
```

#### C. AI Visibility Trend (Area Chart)

**Purpose:** 12-month trend visualization showing AI visibility score evolution compared to industry benchmark.

```typescript
interface TrendDataPoint {
  date: string;
  score: number;
  benchmark?: number;
}
```

#### D. Module Score Distribution (Horizontal Bar Chart)

**Purpose:** Visual breakdown of scores across all 7 audit modules.

**All Charts Feature:**
- Dark mode compatibility with dynamic theme detection
- Responsive sizing with ResponsiveContainer
- Custom tooltips matching design system
- Type-safe data interfaces
- Loading states with skeleton placeholders
- Consistent color palette (indigo/violet primary)

### 4. Type Safety with Zod

**Location:** `lib/schemas.ts`

```typescript
// Example: Audit Module Schema
export const auditModuleSchema = z.object({
  id: auditModuleIdSchema,
  name: z.string().min(1),
  description: z.string().min(1),
  score: z.number().min(0).max(100),
  maxScore: z.number().min(0).max(100),
  status: z.enum(["completed", "in-progress", "pending"]),
  insights: z.array(auditInsightSchema),
  issues: z.array(auditIssueSchema),
  recommendations: z.array(auditRecommendationSchema),
  lastUpdated: z.string(),
});
```

**Validation Helpers:**
```typescript
// Throwing validation
export function validateAuditModules(data: unknown): AuditModule[] {
  return z.array(auditModuleSchema).parse(data);
}

// Safe validation with error handling
export function safeValidateAuditModules(data: unknown): {
  success: boolean;
  data?: AuditModule[];
  error?: z.ZodError;
}
```

**Schemas Implemented:**
- `brandSchema` - Brand entity validation
- `auditModuleSchema` - Complete audit module with nested structures
- `auditInsightSchema` - Insight metrics
- `auditIssueSchema` - Issue with severity levels
- `auditRecommendationSchema` - Recommendations with priority
- `dashboardSnapshotSchema` - Dashboard metrics
- `activityItemSchema` - Activity feed items

### 5. Architectural Decisions

#### Theme Provider Placement
The `ThemeProvider` wraps the entire application at the root layout level to ensure consistent theme access across all routes without prop drilling.

#### Chart Component Architecture
Charts are isolated in `components/features/dashboard/charts.tsx` with:
- Individual exports for tree-shaking
- Shared custom tooltip component
- Consistent loading states
- Theme-aware color selection

#### Accordion Design
Built a custom accordion instead of using a library to:
- Maintain design consistency
- Enable Framer Motion animations
- Keep bundle size minimal
- Have full control over accessibility

#### Validation Strategy
Zod schemas are defined separately from TypeScript interfaces to:
- Enable runtime validation where needed
- Keep existing type definitions intact
- Provide both strict and safe validation options
- Support future API integration

### 6. Files Added/Modified

**New Files:**
- `components/providers/theme-provider.tsx` - Theme context provider
- `components/providers/index.ts` - Provider exports
- `components/ui/theme-toggle.tsx` - Theme toggle button
- `components/ui/accordion.tsx` - Collapsible accordion
- `components/ui/tooltip.tsx` - Tooltip component
- `components/ui/skeleton.tsx` - Skeleton loaders
- `components/ui/empty-state.tsx` - Empty & loading states
- `components/features/dashboard/charts.tsx` - Data visualizations
- `components/features/dashboard/index.ts` - Dashboard exports
- `lib/schemas.ts` - Zod validation schemas
- `lib/content.ts` - AI-SEO copy and terminology
- `lib/accessibility.ts` - Accessibility utilities
- `lib/design-tokens.ts` - Design system tokens

**Modified Files:**
- `app/layout.tsx` - Added ThemeProvider, skip link
- `app/globals.css` - Dark mode CSS variables, reduced motion
- `app/app/layout.tsx` - Dark mode background
- `app/app/dashboard/page.tsx` - Charts, tooltips, dark mode, loading states
- `components/layout/public-header.tsx` - Theme toggle, dark mode
- `components/layout/public-footer.tsx` - Dark mode
- `components/layout/dashboard-layout.tsx` - Theme toggle, dark mode
- `components/features/audit/audit-module-detail.tsx` - Accordion, animations
- `components/features/audit/audit-module-sidebar.tsx` - Dark mode, animations
- `components/features/home/hero-section.tsx` - Dark mode
- `components/ui/*.tsx` - Dark mode variants for all primitives

---

## 🏭 Production Readiness

This section documents the enterprise-grade improvements that elevate the application from a prototype to a production-ready platform.

### UX Polish & Perceived Performance

**Skeleton Loaders:**
```typescript
// Professional loading states that match actual content layout
<DashboardSkeleton />      // Full dashboard placeholder
<ChartSkeleton type="bar" /> // Chart-specific shapes
<CardSkeleton />            // Individual card loading
```

**Empty States with AI-SEO Context:**
```typescript
// Meaningful messaging when no data exists
<NoDataEmptyState context="audit" onAction={() => startAudit()} />
// "Your AI-SEO journey starts here. Run your first audit to discover
//  how AI assistants perceive your brand and content."
```

**Loading State Messaging:**
- Rotating AI-themed messages during loads
- "Analyzing AI visibility signals..."
- "Scanning LLM response patterns..."
- "Evaluating content architecture..."

### Accessibility First

**WCAG 2.1 AA Compliance:**
- All interactive elements keyboard navigable
- Proper ARIA roles and labels throughout
- Focus indicators with visible outlines
- Skip link for main content (`<a href="#main-content">`)

**Reduced Motion Support:**
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

**Screen Reader Support:**
- Chart descriptions: "AI Visibility trend chart. Trend from Jan (58) to Dec (82). Increased by 24 points."
- Score announcements: "AI Visibility Score: 72 out of 100"
- Progress bars with `role="progressbar"` and proper `aria-valuenow`

**Keyboard Navigation:**
- Accordion: Enter/Space to toggle
- Tooltips: Focus triggers display, Escape dismisses
- All buttons and links focusable

### AI-Native Product Clarity

**Centralized Content System (`lib/content.ts`):**
```typescript
export const AI_SEO_METRICS = {
  aiVisibilityScore: {
    label: "AI Visibility Score",
    shortDescription: "How often your brand appears in AI responses",
    fullDescription: "Measures your brand's presence across AI-powered search...",
    businessImpact: "Higher AI visibility means your brand captures traffic...",
    benchmark: "Industry leaders average 65-80. Scores below 50 indicate...",
  },
  // ... comprehensive definitions for all metrics
};
```

**Chart Context:**
Every visualization includes:
- What it measures
- Why it matters for AI-first search
- How to interpret the data

### Performance Optimizations

**Memoization:**
```typescript
// All charts wrapped in React.memo
export const SEOComparisonChart = React.memo(function SEOComparisonChart({...}) {
  const chartDescription = React.useMemo(() => {...}, [data]);
  // ...
});

// Dashboard cards memoized
const SnapshotCard = React.memo(function SnapshotCard({...}) {...});
```

**Computed Values:**
```typescript
// Expensive calculations cached
const moduleScores = React.useMemo(
  () => auditModules.map(m => ({...})),
  []
);
```

**Chart Loading:**
- Custom `useChartMount` hook for hydration
- Skeleton placeholders during mount
- No layout shift on theme changes

### Design System Consistency

**Tokens (`lib/design-tokens.ts`):**
```typescript
export const semanticColors = {
  score: {
    excellent: { text: "text-emerald-600 dark:text-emerald-400", ... },
    good: { text: "text-amber-600 dark:text-amber-400", ... },
    critical: { text: "text-red-600 dark:text-red-400", ... },
  },
  // ... consistent color application
};
```

**Component Patterns:**
- Consistent border radius (rounded-lg, rounded-xl)
- Uniform spacing scale (4px base grid)
- Predictable color semantics
- Dark mode support on every component

---

## 🔮 Scaling Considerations

### With Real Data

**API Integration Points:**
```typescript
// Current: Static mock data
const modules = auditModules;

// Production: Would become
const { data: modules, isLoading } = useQuery(['audit-modules', brandId], 
  () => api.fetchAuditModules(brandId)
);
```

**Validation Layer:**
```typescript
// Zod schemas ready for API responses
const response = await fetch('/api/audit-modules');
const validated = validateAuditModules(await response.json());
```

### State Management Evolution

**Current Zustand Store:**
- Brand selection
- Module selection  
- UI state (sidebar)

**Production Extensions:**
- Cache layer with SWR/React Query
- Optimistic updates for settings
- Real-time subscriptions for live data

### Performance at Scale

**Bundle Optimization:**
- Charts are tree-shakeable (named exports)
- Dynamic imports ready for heavy components
- CSS variables minimize runtime style calculations

**Data Virtualization (if needed):**
- Module lists: react-window for 100+ items
- Activity feeds: Infinite scroll with cursor pagination

---

## 🎯 Intentional Tradeoffs

| Decision | Tradeoff | Rationale |
|----------|----------|-----------|
| Custom Accordion | More code vs library | Full control over animations + accessibility |
| CSS Variables | Slight runtime cost | Clean dark mode without class explosion |
| Mocked Data | No real persistence | Focus on frontend excellence |
| Client Components | No SSR for dashboard | Interactive charts require client rendering |
| Zod + TypeScript | Some duplication | Runtime safety + compile-time safety |

---

## 🧪 Quality Checklist

- [x] TypeScript strict mode, zero `any` types
- [x] All components accessible via keyboard
- [x] Dark mode on every page and component
- [x] Reduced motion respected
- [x] Screen reader labels for all visualizations
- [x] Loading states for async boundaries
- [x] Empty states with actionable messaging
- [x] Memoization for expensive renders
- [x] Consistent design tokens
- [x] Focus indicators visible
- [x] Skip link for main content

---
