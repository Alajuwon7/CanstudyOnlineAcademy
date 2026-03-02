# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run lint         # ESLint checks
npm run format       # Prettier format (auto-sorts Tailwind classes)
npm run type-check   # TypeScript type check (tsc --noEmit)
```

Pre-commit hooks run `lint-staged` via Husky — linting and formatting are enforced automatically on staged files.

## Architecture

**Stack:** Next.js 14 App Router, React 18, TypeScript (strict), Tailwind CSS, Framer Motion, React Hook Form.

**Rendering model:** Server Components by default. Add `'use client'` only when hooks, interactivity, or browser APIs are needed (e.g., scroll detection, category filtering, animations).

**Data layer:** All content (courses, instructors, testimonials, articles) lives in static JSON files at `src/data/`. The `src/lib/api.ts` module wraps these with async functions. API routes at `src/app/api/` re-expose the same data over HTTP. There is no database or auth system.

**Path aliases (tsconfig):**

- `@/*` → `src/*`
- `@/components/*`, `@/lib/*`, `@/types/*`, `@/data/*`

**Component organization:**

- `src/components/ui/` — base primitives (Button, Card, Input, Badge, Rating, Tab, FormModal)
- `src/components/layout/` — Header, Footer, Container, Section
- `src/components/course/` — CourseCard, CourseGrid, CourseDetails, CourseSidebar
- `src/components/home/` — homepage sections (Hero, Features, PopularCourses, etc.)

**Styling conventions:**

- Use the `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class names.
- Tailwind theme extensions live in `tailwind.config.ts`: custom colors (`primary`, `accent-orange`, `accent-yellow`, `secondary-blue-*`, `gray-*`), font families (`font-primary` = Space Grotesk, `font-secondary` = Inter), spacing scale, border radius, and shadows.
- Design tokens are also available as CSS custom properties in `src/styles/design-tokens.css`.

**Adding or modifying courses:** Edit `src/data/courses.json`. The `Course` type is defined in `src/types/course.ts`. Per-course conditional rendering (e.g., blocking enrollment for specific IDs) is handled inside `CourseDetails.tsx` and `CourseSidebar.tsx`.

**Enrollment / contact forms:** The `FormModal` component in `src/components/ui/FormModal/` handles enrollment form pop-ups. External form links (e.g., JotForm) are embedded directly in component JSX rather than via an API route.
