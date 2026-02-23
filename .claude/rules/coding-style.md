# Coding Style

## Immutability (CRITICAL)

ALWAYS create new objects, NEVER mutate:

```javascript
// WRONG: Mutation
function updateUser(user, name) {
  user.name = name; // MUTATION!
  return user;
}

// CORRECT: Immutability
function updateUser(user, name) {
  return {
    ...user,
    name,
  };
}
```

# Code Style Rules

## TypeScript

- Use strict TypeScript - no `any` types unless absolutely necessary
- Prefer `interface` over `type` for object shapes
- Use explicit return types on exported functions
- Name files with PascalCase for components, camelCase for utilities

## React Patterns

- Functional components only, no class components
- Use named exports, not default exports (except for Next.js page/layout components which require default export)
- Colocate component styles, tests, and types in the same directory
- Prefer composition over prop drilling - use context sparingly

## Next.js Patterns

### Server vs Client Components

- Default to Server Components (no directive needed)
- Add `"use client"` only when component needs:
  - Browser APIs (DOM, window, document)
  - React hooks (useState, useEffect, useContext)
  - Event handlers (onClick, onChange)
  - bpmn-js or diagram-js libraries
  - Zustand stores
- Push `"use client"` boundary as far down the component tree as possible

### "use client" Directive Rules

- MUST be the **first line** of the file (before imports)
- All files in `features/editor/`, `features/properties/`, `features/formBuilder/` need `"use client"`
- Store files (Zustand) need `"use client"`
- Components using React Hook Form need `"use client"`

### Dynamic Imports for Browser-Only Libraries

bpmn-js and related libraries MUST use dynamic import with `ssr: false`:

```typescript
import dynamic from 'next/dynamic';

const BpmnCanvas = dynamic(
  () => import('@/features/editor/components/BpmnCanvas').then(mod => ({ default: mod.BpmnCanvas })),
  { ssr: false }
);
```

### API Route Handler Pattern

```typescript
// Always validate session first, use Prisma for DB, return consistent format
export const GET = auth(async (req) => {
  if (!req.auth) return NextResponse.json({ ... }, { status: 401 });
  const data = await prisma.model.findMany({ where: { userId: req.auth.user.id } });
  return NextResponse.json({ success: true, data });
});
```

### Data Fetching Rules

- **Server Components**: Use Prisma directly or call API routes via `fetch`
- **Client Components**: Use React Query hooks that call `/api/*` endpoints
- **Never** import Prisma client in client components

## Prisma Patterns

- Use the singleton pattern for PrismaClient (`src/lib/prisma.ts`)
- Prefer `include` and `select` to control query shape
- Use `@@unique` constraints instead of application-level uniqueness checks
- Use `onDelete: Cascade` for parent-child relationships
- Never expose raw Prisma errors to clients — catch and return formatted errors

## Imports Order

1. React / Next.js imports (`next/navigation`, `next/dynamic`)
2. Third-party libraries
3. Internal absolute imports (`@/`)
4. Relative imports
5. Type imports (with `type` keyword)

## File Naming

- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Types: `types.ts` or `ComponentName.types.ts`
- Tests: `ComponentName.test.tsx`
- Next.js Routes: `route.ts` (API), `page.tsx` (pages), `layout.tsx` (layouts)
- Middleware: `middleware.ts` (root level)

## File Organization

MANY SMALL FILES > FEW LARGE FILES:

- High cohesion, low coupling
- 200-400 lines typical, 800 max
- Extract utilities from large components
- Organize by feature/domain, not by type

## Error Handling

ALWAYS handle errors comprehensively:

```typescript
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  console.error("Operation failed:", error);
  throw new Error("Detailed user-friendly message");
}
```

## Code Quality Checklist

Before marking work complete:

- [ ] Code is readable and well-named
- [ ] Functions are small (<50 lines)
- [ ] Files are focused (<800 lines)
- [ ] No deep nesting (>4 levels)
- [ ] Proper error handling
- [ ] No console.log statements
- [ ] No hardcoded values
- [ ] No mutation (immutable patterns used)
