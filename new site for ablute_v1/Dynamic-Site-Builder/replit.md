# ablute_ Website — replit.md

## Overview

This is the website for **ablute_**, an intelligent sanitation platform that presents itself through two distinct visual and conceptual modes:

- **Bathroom Mode** — focuses on product design, architecture, water efficiency, and autonomous cleaning. Dark, premium aesthetic.
- **Health Mode** — focuses on preventive health monitoring, biomarker sensing, medical analytics, and scientific credibility. Light, clinical aesthetic with blues and teals.

The core experience is built as a single-page React application with mode switching handled via React context. The backend is an Express.js server with a PostgreSQL database (Drizzle ORM). Currently, the backend exposes a basic posts/comments API, but the primary focus of the project is the dual-mode marketing website.

---

## User Preferences

Preferred communication style: Simple, everyday language.

**Critical editing rules — always follow these:**
- **Preserve existing structure**: Never remove, rewrite, or reorganize existing sections unless explicitly asked.
- **Never delete features**: If a new instruction conflicts with an existing feature, extend or adapt it — do not remove the original.
- **Modify only targeted components**: Identify what's being edited and touch only that part. Leave all other components untouched.
- The global navigation, page hierarchy, mode switching (Bathroom Mode / Health Mode), section order, and design language must always remain intact.

---

## System Architecture

### Frontend

- **Framework**: React 18 with TypeScript, bundled via Vite.
- **Routing**: `wouter` (lightweight client-side router). Routes: `/` (home/main experience), `/posts/:id` (post detail).
- **State management**: React Context for mode switching (`ModeContext` in `client/src/context/mode-context.tsx`, provided at App root level via `ModeProvider`), TanStack Query (React Query v5) for server data.
- **UI components**: shadcn/ui (New York style) built on Radix UI primitives + Tailwind CSS.
- **Animations**: Framer Motion (used extensively in `home.tsx` and `health-mode.tsx`).
- **Typography**:
  - Logo: **Comfortaa** (loaded via Google Fonts in `index.html`)
  - Body/UI: **DM Sans** (variable font)
  - Display: **Outfit**
  - Additional: Fira Code, Geist Mono (monospace accents)
- **Fonts loaded via**: Google Fonts CDN in `client/index.html` and `client/src/index.css`.
- **Path aliases**: `@/` → `client/src/`, `@shared/` → `shared/`.

### Dual-Mode Design System

The mode state lives in `ModeContext` defined in `client/src/context/mode-context.tsx`. The `ModeProvider` wraps the entire app in `App.tsx`. Both `home.tsx` and `layout.tsx` import `useMode()` from this file. This ensures all components share the same mode state correctly.

- **Bathroom Mode**: Dark background `#050a14`, white text, premium/minimal tech aesthetic. CSS variables defined in `index.css` default to dark theme.
- **Health Mode**: Light background `#f0f7ff`, clinical blue/teal palette, white cards, soft shadows. Rendered by `client/src/pages/health-mode.tsx`.

The toggle button in the global header switches between modes. Both modes share the same sticky header/navigation structure.

### Health Mode Structure (`health-mode.tsx`)

Has a secondary tab navigation (sticky below the main header at `top-20`):
- **Produto** (Product) — biosensing and AI sub-tabs
- **Ciência** (Science)
- **Para Quem** (For Who)
- **Áreas** (Areas)
- **Área Cliente** (Client Area) — has a login form with error state

Modals used: App download notification form, Pilot program registration, Demo request.

### Backend

- **Framework**: Express.js v5 (ESM modules), running via `tsx` in dev.
- **Entry point**: `server/index.ts` → registers routes via `server/routes.ts` → uses `server/storage.ts` for DB access.
- **API structure**: Typed route definitions in `shared/routes.ts` using Zod schemas. All paths start with `/api/`.
- **Static serving**: In production, serves the Vite build output from `dist/public`.
- **Dev mode**: Vite runs as middleware within the Express server (`server/vite.ts`).

### Database

- **Database**: PostgreSQL via `pg` connection pool.
- **ORM**: Drizzle ORM (`drizzle-orm/node-postgres`).
- **Schema file**: `shared/schema.ts` (shared between client and server).
- **Current tables**:
  - `posts`: id, title, content, imageUrl, createdAt
  - `comments`: id, postId, author, content, createdAt
- **Migrations**: `drizzle-kit` with output to `./migrations/`. Run `npm run db:push` to sync schema.
- **Config**: `drizzle.config.ts` reads `DATABASE_URL` env var.

### Shared Layer

The `shared/` directory is accessible from both client and server:
- `shared/schema.ts` — Drizzle table definitions + Zod insert schemas + TypeScript types.
- `shared/routes.ts` — Typed API route definitions (method, path, input schema, response schemas). Includes a `buildUrl()` helper for parameterized paths.

### Build System

- **Client**: Vite builds to `dist/public/`.
- **Server**: esbuild bundles `server/index.ts` to `dist/index.cjs`. Key server dependencies are bundled (allowlist in `script/build.ts`); others are externalized.
- **Build script**: `script/build.ts` runs both builds sequentially.

---

## External Dependencies

| Dependency | Purpose |
|---|---|
| **PostgreSQL** | Primary database. Requires `DATABASE_URL` env var. |
| **Google Fonts** | Comfortaa, DM Sans, Outfit, Fira Code, Geist Mono — loaded via CDN. |
| **Framer Motion** | Page transitions and animations throughout the site. |
| **TanStack Query v5** | Server state management, data fetching hooks. |
| **Radix UI** | Accessible headless UI primitives (full suite installed). |
| **shadcn/ui** | Component library built on Radix + Tailwind (New York style). |
| **Zod** | Runtime validation for API inputs/outputs (shared between client and server). |
| **wouter** | Lightweight client-side router. |
| **drizzle-orm / drizzle-kit** | ORM and migration tooling for PostgreSQL. |
| **drizzle-zod** | Generates Zod schemas from Drizzle table definitions. |
| **@hookform/resolvers + react-hook-form** | Form validation integrated with Zod. |
| **connect-pg-simple** | PostgreSQL session store (installed, ready for session auth). |
| **Replit Vite plugins** | `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — active only in Replit dev environment. |
| **date-fns** | Date formatting in post cards. |
| **Tailwind CSS** | Utility-first CSS framework with custom design tokens. |
| **Lucide React** | Icon library used throughout the UI. |
| **Recharts** | Charting library (installed via shadcn chart component). |