import path from "node:path";
import sharp from "sharp";

async function extractColors() {
  const imagePath = path.join(process.cwd(), "source.jpeg");
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      throw new Error("Could not get image dimensions");
    }

    const width = metadata.width;
    const height = metadata.height;
    console.log(`Image size: ${width}x${height}`);

    // Define 15 relative sampling points (x, y) as fractions
    // Sampling down the center/left/right of the sections
    const points = [
      { name: "Navbar/Header Bg", x: 0.1, y: 0.005 },
      { name: "Webinar Banner Bg", x: 0.5, y: 0.015 },
      { name: "Hero Bg (Teal)", x: 0.8, y: 0.08 },
      { name: "Value Props Bg (White)", x: 0.5, y: 0.16 },
      { name: "Social Proof Bg (Light Blue)", x: 0.2, y: 0.25 },
      { name: "Templates Bg (Dark)", x: 0.5, y: 0.35 },
      { name: "Templates Tab Active (Beige)", x: 0.1, y: 0.39 },
      { name: "Three Cards Bg (Beige)", x: 0.5, y: 0.5 },
      { name: "Card 1 (Purple)", x: 0.2, y: 0.56 },
      { name: "Card 2 (Blue)", x: 0.5, y: 0.56 },
      { name: "Card 3 (Green)", x: 0.8, y: 0.56 },
      { name: "Tools Bg (Orange)", x: 0.1, y: 0.68 },
      { name: "CTA Bg (White)", x: 0.5, y: 0.82 },
      { name: "Footer Bg (White)", x: 0.5, y: 0.92 },
      { name: "Mural Pink Accent", x: 0.05, y: 0.005 },
    ];

    console.log("\n--- Color Palette Samples ---");
    for (const point of points) {
      const px = Math.floor(point.x * width);
      const py = Math.floor(point.y * height);

      // Extract a 1x1 pixel buffer at coordinate
      const buffer = await image
        .clone()
        .extract({ left: px, top: py, width: 1, height: 1 })
        .raw()
        .toBuffer();

      const r = buffer[0];
      const g = buffer[1];
      const b = buffer[2];

      const toHex = (c: number) => c.toString(16).padStart(2, "0");
      const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();

      console.log(
        `${point.name.padEnd(30)} | RGB: (${String(r).padStart(3)}, ${String(g).padStart(3)}, ${String(b).padStart(3)}) | Hex: ${hex}`,
      );
    }
  } catch (error) {
    console.error("Error extracting colors:", error);
  }
}

extractColors();
