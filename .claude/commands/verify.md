# Verify Command

Automatically verify the application works without runtime errors.

## Instructions

### Step 1: Static Checks

```bash
npm run lint
npx tsc --noEmit
```

Fix any errors before proceeding.

### Step 2: Build Check

```bash
npm run build
```

Fix any build errors before proceeding.

### Step 3: Runtime Check (requires dev server running)

First, check if dev server is running. If not, start it in background:

```bash
# Start dev server in background (if not already running)
npm run dev &
sleep 5
```

Then run the runtime error checker:

```bash
npx tsx scripts/check-runtime-errors.ts
```

This will:

- Open the app in a headless browser
- Capture all console errors and warnings
- Output them to terminal

### Step 4: Fix Any Errors

If runtime errors are found:

1. Read the error messages from the output
2. Identify the source file and issue
3. Fix the code
4. Re-run this verification

## Quick One-Liner

```bash
npm run lint && npx tsc --noEmit && npm run build && npx tsx scripts/check-runtime-errors.ts
```

## First-Time Setup

If playwright is not installed:

```bash
npm install -D playwright tsx
npx playwright install chromium
```
