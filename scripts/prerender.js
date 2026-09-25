import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5174;
const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

async function prerender() {
  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found! Run npm run build first.');
    process.exit(1);
  }

  // 1. Serve the dist folder
  const app = express();
  app.use(express.static(distPath));
  const server = app.listen(PORT, () => {
    console.log(`Serving dist on http://localhost:${PORT}`);
  });

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Disable external resources that might hang the render
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
      req.continue();
    } else {
      req.continue();
    }
  });

  console.log('Loading page in headless browser...');
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });

  // 3. Wait for the React app to fully mount
  await page.waitForSelector('.index-seven', { timeout: 10000 }).catch(() => {
    console.warn('Warning: .index-seven not found, proceeding anyway.');
  });
  
  // Wait a tiny bit extra for animations/odometer to settle
  await new Promise(r => setTimeout(r, 2000));

  // 4. Extract fully rendered HTML for just the root element
  const rootContent = await page.evaluate(() => {
    const root = document.getElementById('root');
    return root ? root.innerHTML : '';
  });

  // 5. Save the root content to a file that will be committed to git
  const rootHtmlPath = path.resolve(__dirname, '../prerendered-root.html');
  fs.writeFileSync(rootHtmlPath, rootContent);
  console.log('Successfully saved root HTML to prerendered-root.html!');

  // Cleanup
  await browser.close();
  server.close();
  process.exit(0);
}

prerender().catch(console.error);
