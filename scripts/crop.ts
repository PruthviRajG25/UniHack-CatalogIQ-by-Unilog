import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

async function cropImage() {
  const imagePath = path.join(process.cwd(), "source.jpeg");
  const outputDir = path.join(process.cwd(), "scripts", "crops");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      throw new Error("Image dimensions not found");
    }

    const width = metadata.width;
    console.log(
      `Cropping reference image of size ${width}x${metadata.height}...`,
    );

    // Bounding boxes for the 5 sections based on height of 5229px
    const sections = [
      { name: "hero", top: 0, height: 1100 },
      { name: "features", top: 1100, height: 1050 },
      { name: "templates", top: 2150, height: 1100 },
      { name: "cards", top: 3250, height: 800 },
      { name: "tools-footer", top: 4050, height: 1179 },
    ];

    for (const section of sections) {
      const outputPath = path.join(outputDir, `${section.name}.png`);
      await image
        .clone()
        .extract({
          left: 0,
          top: section.top,
          width: width,
          height: section.height,
        })
        .png()
        .toFile(outputPath);
      console.log(`Cropped section '${section.name}' saved to ${outputPath}`);
    }
    console.log("All crops created successfully!");
  } catch (error) {
    console.error("Error cropping image:", error);
  }
}

cropImage();
