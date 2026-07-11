import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const FRONT_PAGE_DIR = path.join(PUBLIC_DIR, 'gallery/front-page');
const OUR_WORK_DIR = path.join(PUBLIC_DIR, 'gallery/our-work');
const WHAT_WE_DO_DIR = path.join(process.cwd(), 'src/assets/what-we-do');

const OUT_DIR = path.join(process.cwd(), 'src/data');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

const SIZES = [400, 800, 1200, 1600];

const formatTitle = (filename) => {
  return filename.split('.')[0]
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
};

const formatCategory = (folderName) => {
  return folderName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
};

async function processImage(inputPath, relativePath) {
  const fileExt = path.extname(inputPath);
  const baseName = path.basename(inputPath, fileExt);
  
  // Create output dir
  const outputDir = path.join(OPTIMIZED_DIR, path.dirname(relativePath));
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  // Generate blur placeholder
  const blurBuffer = await image
    .resize(20)
    .webp({ quality: 20 })
    .toBuffer();
  const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

  const srcSetParts = [];
  let defaultSrc = '';

  for (const size of SIZES) {
    if (metadata.width && size > metadata.width * 1.5) continue; // Don't upscale too much
    const actualSize = Math.min(size, metadata.width || size);
    
    const outFilename = `${baseName}-${actualSize}w.webp`;
    const outPath = path.join(outputDir, outFilename);
    // Path for the browser to fetch
    const publicUrl = `/optimized/${path.dirname(relativePath)}/${outFilename}`.replace(/\\/g, '/');
    
    // Check if it already exists to save build time (simple cache)
    if (!fs.existsSync(outPath)) {
       await sharp(inputPath)
        .resize(actualSize)
        .webp({ quality: 80 })
        .toFile(outPath);
    }

    srcSetParts.push(`${publicUrl} ${actualSize}w`);
    if (actualSize === 1200 || defaultSrc === '') {
      defaultSrc = publicUrl; // Use 1200w as default if available
    }
  }

  return {
    src: defaultSrc,
    srcSet: srcSetParts.join(', '),
    blurDataURL,
    width: metadata.width,
    height: metadata.height,
    title: formatTitle(path.basename(inputPath))
  };
}

async function generateFrontPageManifest() {
  if (!fs.existsSync(FRONT_PAGE_DIR)) return;
  
  const files = fs.readdirSync(FRONT_PAGE_DIR).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
  
  const manifest = [];
  for (const file of files) {
    const inputPath = path.join(FRONT_PAGE_DIR, file);
    const relativePath = path.join('gallery/front-page', file);
    const data = await processImage(inputPath, relativePath);
    manifest.push(data);
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'front-page-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`Generated front-page-manifest.json with ${manifest.length} items.`);
}

async function generateOurWorkManifest() {
  if (!fs.existsSync(OUR_WORK_DIR)) return;

  const categories = fs.readdirSync(OUR_WORK_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let idCounter = 1;
  const manifest = [];
  const aspects = ["aspect-[4/5] md:col-span-1", "aspect-[16/10] md:col-span-2", "aspect-square md:col-span-1", "aspect-[3/4] md:col-span-1"];

  for (const categoryFolder of categories) {
    const categoryPath = path.join(OUR_WORK_DIR, categoryFolder);
    const files = fs.readdirSync(categoryPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    
    for (const file of files) {
      const inputPath = path.join(categoryPath, file);
      const relativePath = path.join(`gallery/our-work/${categoryFolder}`, file);
      const data = await processImage(inputPath, relativePath);
      
      manifest.push({
        id: idCounter,
        ...data,
        category: formatCategory(categoryFolder),
        year: new Date().getFullYear().toString(),
        aspect: aspects[(idCounter - 1) % aspects.length]
      });
      idCounter++;
    }
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'gallery-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`Generated gallery-manifest.json with ${manifest.length} items across ${categories.length} categories.`);
}

async function generateWhatWeDoManifest() {
  if (!fs.existsSync(WHAT_WE_DO_DIR)) return;

  const folders = fs.readdirSync(WHAT_WE_DO_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const manifest = {};

  for (const folder of folders) {
    const folderPath = path.join(WHAT_WE_DO_DIR, folder);
    const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    
    if (files.length > 0) {
      const file = files[0]; // just take the first one like the glob did
      const inputPath = path.join(folderPath, file);
      const relativePath = path.join(`what-we-do/${folder}`, file);
      const data = await processImage(inputPath, relativePath);
      manifest[folder] = data;
    }
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'what-we-do-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`Generated what-we-do-manifest.json with ${Object.keys(manifest).length} items.`);
}

async function generateHeroBackground() {
  const heroBgFile = path.join(PUBLIC_DIR, 'gallery/gallery-hero-bg.png');
  if (fs.existsSync(heroBgFile)) {
    const data = await processImage(heroBgFile, 'gallery/gallery-hero-bg.png');
    fs.writeFileSync(
      path.join(OUT_DIR, 'hero-bg-manifest.json'),
      JSON.stringify(data, null, 2)
    );
    console.log(`Generated hero-bg-manifest.json.`);
  }
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }
  
  console.log("Processing hero background...");
  await generateHeroBackground();

  console.log("Processing front page images...");
  await generateFrontPageManifest();
  
  console.log("Processing our work images...");
  await generateOurWorkManifest();

  console.log("Processing what we do images...");
  await generateWhatWeDoManifest();
  
  console.log("Image optimization complete.");
}

run().catch(err => {
  console.error("Error generating manifests:", err);
  process.exit(1);
});
