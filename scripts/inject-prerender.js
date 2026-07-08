import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distIndex = path.resolve(__dirname, '../dist/index.html');
const prerenderedRoot = path.resolve(__dirname, '../prerendered-root.html');

if (fs.existsSync(distIndex) && fs.existsSync(prerenderedRoot)) {
  let html = fs.readFileSync(distIndex, 'utf8');
  let rootContent = fs.readFileSync(prerenderedRoot, 'utf8');
  html = html.replace('<div id="root"></div>', `<div id="root">\n${rootContent}\n</div>`);
  fs.writeFileSync(distIndex, html);
  console.log('Successfully injected prerendered content!');
} else {
  console.log('Missing dist/index.html or prerendered-root.html');
}
