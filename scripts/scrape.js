const { chromium } = require("playwright");
const fs = require("node:fs");
const _path = require("node:path");

async function run() {
  console.log("Launching headless browser...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const url = "https://preview--intellecto-craft.lovable.app/";
  console.log(`Navigating to ${url}...`);

  try {
    console.log("Navigating page...");
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    // Wait a couple of seconds for animations or React initial paint
    await page.waitForTimeout(5000);

    const title = await page.title();
    console.log(`Page Title: ${title}`);

    // Capture screenshot inside artifacts folder
    const screenshotPath =
      "C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\555e40dc-1e1d-44b9-97bf-3d7ede4cdddb\\scraped_page.png";
    console.log(`Saving screenshot to ${screenshotPath}...`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    // Extract text content and HTML content
    const textContent = await page.evaluate(() => document.body.innerText);
    const htmlContent = await page.evaluate(() => document.body.innerHTML);

    const txtPath =
      "C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\555e40dc-1e1d-44b9-97bf-3d7ede4cdddb\\scraped_page.txt";
    const htmlPath =
      "C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\555e40dc-1e1d-44b9-97bf-3d7ede4cdddb\\scraped_page.html";

    fs.writeFileSync(txtPath, textContent);
    fs.writeFileSync(htmlPath, htmlContent);
    console.log("Scraping completed successfully.");
  } catch (_error) {
    console.error(
      "Scraping failed inside main block, attempting immediate fallback screenshot...",
    );
    try {
      const screenshotPath =
        "C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\555e40dc-1e1d-44b9-97bf-3d7ede4cdddb\\scraped_page.png";
      await page.screenshot({ path: screenshotPath, fullPage: true });
      const textContent = await page.evaluate(() => document.body.innerText);
      const txtPath =
        "C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\555e40dc-1e1d-44b9-97bf-3d7ede4cdddb\\scraped_page.txt";
      fs.writeFileSync(txtPath, textContent);
      console.log("Fallback capture succeeded.");
    } catch (e) {
      console.error("Fallback capture failed too:", e);
    }
  } finally {
    await browser.close();
  }
}

run();
