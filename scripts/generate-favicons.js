import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const LOGO_PATH = path.join(process.cwd(), 'src/assets/logo-removebg-preview.png');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Brand color from CSS
const BG_COLOR = '#e1dbd0';

const sizes = {
  favicon: [16, 32, 48],
  appleTouchIcon: 180,
  androidChrome: [192, 512]
};

async function generateFavicons() {
  if (!fs.existsSync(LOGO_PATH)) {
    console.error('Logo file not found:', LOGO_PATH);
    process.exit(1);
  }

  // Helper to generate a solid background image with the logo scaled down inside it
  const generatePaddedIcon = async (size, outputPath) => {
    // Make the logo 80% of the full size
    const logoSize = Math.floor(size * 0.8);
    
    // Resize logo
    const resizedLogo = await sharp(LOGO_PATH)
      .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    // Composite over background
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: BG_COLOR
      }
    })
    .composite([{ input: resizedLogo }])
    .png()
    .toFile(outputPath);
  };

  console.log('Generating favicon-16x16.png & 32x32.png...');
  await generatePaddedIcon(16, path.join(PUBLIC_DIR, 'favicon-16x16.png'));
  await generatePaddedIcon(32, path.join(PUBLIC_DIR, 'favicon-32x32.png'));
  await generatePaddedIcon(48, path.join(PUBLIC_DIR, 'favicon-48x48.png'));

  console.log('Generating apple-touch-icon.png (180x180)...');
  await generatePaddedIcon(sizes.appleTouchIcon, path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

  console.log('Generating android-chrome-192x192.png & 512x512.png...');
  await generatePaddedIcon(192, path.join(PUBLIC_DIR, 'android-chrome-192x192.png'));
  await generatePaddedIcon(512, path.join(PUBLIC_DIR, 'android-chrome-512x512.png'));

  console.log('Generating favicon.ico (16, 32, 48)...');
  // Combine 16, 32, 48 PNGs into an ICO
  const buf = await pngToIco([
    path.join(PUBLIC_DIR, 'favicon-16x16.png'),
    path.join(PUBLIC_DIR, 'favicon-32x32.png'),
    path.join(PUBLIC_DIR, 'favicon-48x48.png')
  ]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), buf);
  
  // Clean up 48x48 as it was only for the ICO
  fs.unlinkSync(path.join(PUBLIC_DIR, 'favicon-48x48.png'));

  console.log('Generating site.webmanifest...');
  const manifest = {
    name: "Rounakmanna Films",
    short_name: "RM Films",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: BG_COLOR,
    background_color: BG_COLOR,
    display: "standalone"
  };

  fs.writeFileSync(
    path.join(PUBLIC_DIR, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('All favicons and manifest generated successfully!');
}

generateFavicons().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
