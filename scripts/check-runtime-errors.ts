// scripts/check-runtime-errors.ts
// Run with: npx tsx scripts/check-runtime-errors.ts

import { chromium } from "@playwright/test";

async function checkRuntimeErrors() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const errors: string[] = [];
  const warnings: string[] = [];

  // Capture console messages
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    } else if (msg.type() === "warning") {
      warnings.push(msg.text());
    }
  });

  // Capture page errors
  page.on("pageerror", (err) => {
    errors.push(err.message);
  });

  try {
    // Navigate to dev server
    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle",
      timeout: 30000,
    });

    // Wait a bit for React to render and any async errors
    await page.waitForTimeout(3000);

    // Output results
    console.log("\n========== RUNTIME CHECK RESULTS ==========\n");

    if (errors.length === 0) {
      console.log("[PASS] No runtime errors detected!\n");
    } else {
      console.log(`[FAIL] Found ${errors.length} error(s):\n`);
      errors.forEach((err, i) => {
        console.log(`Error ${i + 1}:`);
        console.log(err);
        console.log("---");
      });
    }

    if (warnings.length > 0) {
      console.log(`\n[WARN] Found ${warnings.length} warning(s):\n`);
      warnings.forEach((warn, i) => {
        console.log(`Warning ${i + 1}: ${warn}`);
      });
    }

    console.log("\n============================================\n");
  } catch (err) {
    console.error("Failed to load page:", err);
  } finally {
    await browser.close();
  }

  // Exit with error code if errors found
  process.exit(errors.length > 0 ? 1 : 0);
}

checkRuntimeErrors();
