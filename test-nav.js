import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:8080');
  await page.waitForSelector('a[href^="/packages?service="]');
  
  console.log('Clicking a package link...');
  const link = await page.$('a[href^="/packages?service="]');
  await link.click();
  
  await page.waitForTimeout(2000);
  console.log('Done waiting.');
  await browser.close();
})();
