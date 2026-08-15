import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

async function verify() {
  const outputDir = path.join(process.cwd(), "scripts", "results");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Launching Playwright...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 1000 },
    deviceScaleFactor: 1,
  });

  const page = await context.newPage();
  console.log("Navigating to http://localhost:3000 ...");

  try {
    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle",
      timeout: 15000,
    });

    // Wait an additional 2 seconds for any animations or fonts to stabilize
    await page.waitForTimeout(2000);

    console.log("Taking full page screenshot...");
    await page.screenshot({
      path: path.join(outputDir, "final_preview.png"),
      fullPage: true,
    });

    console.log("Screenshot saved to scripts/results/final_preview.png");
  } catch (error) {
    console.error("Error during verification:", error);
  } finally {
    await browser.close();
  }
}

verify();
