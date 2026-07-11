import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const FRONT_PAGE_DIR = path.join(PUBLIC_DIR, 'gallery/front-page');
const OUR_WORK_DIR = path.join(PUBLIC_DIR, 'gallery/our-work');
const OUT_DIR = path.join(process.cwd(), 'src/data');

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

function generateFrontPageManifest() {
  if (!fs.existsSync(FRONT_PAGE_DIR)) return;
  
  const files = fs.readdirSync(FRONT_PAGE_DIR).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
  
  const manifest = files.map(file => {
    return {
      src: `/gallery/front-page/${file}`,
      title: formatTitle(file)
    };
  });

  fs.writeFileSync(
    path.join(OUT_DIR, 'front-page-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`Generated front-page-manifest.json with ${manifest.length} items.`);
}

function generateOurWorkManifest() {
  if (!fs.existsSync(OUR_WORK_DIR)) return;

  const categories = fs.readdirSync(OUR_WORK_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let idCounter = 1;
  const manifest = [];
  const aspects = ["aspect-[4/5] md:col-span-1", "aspect-[16/10] md:col-span-2", "aspect-square md:col-span-1", "aspect-[3/4] md:col-span-1"];

  categories.forEach(categoryFolder => {
    const categoryPath = path.join(OUR_WORK_DIR, categoryFolder);
    const files = fs.readdirSync(categoryPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    
    files.forEach(file => {
      manifest.push({
        id: idCounter,
        src: `/gallery/our-work/${categoryFolder}/${file}`,
        title: formatTitle(file),
        category: formatCategory(categoryFolder),
        year: new Date().getFullYear().toString(),
        aspect: aspects[(idCounter - 1) % aspects.length]
      });
      idCounter++;
    });
  });

  fs.writeFileSync(
    path.join(OUT_DIR, 'gallery-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`Generated gallery-manifest.json with ${manifest.length} items across ${categories.length} categories.`);
}

function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }
  generateFrontPageManifest();
  generateOurWorkManifest();
}

run();
