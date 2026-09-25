// 09 Three.js canvas after a viewport resize while the 3D drawer is open (no window resize handler in app.js).
import { launch, save, sleep, URLS, instrument, newLog } from './lib.mjs';
const b = await launch(); const c = await b.newContext({ viewport: { width: 1440, height: 900 } }); const p = await c.newPage(); await instrument(p, newLog());
await p.goto(URLS.fa); await sleep(400); await p.evaluate(() => togglePreviewDrawer()); await sleep(300);
const m = () => p.evaluate(() => ({ container: threeJsCanvasContainer.clientWidth + 'x' + threeJsCanvasContainer.clientHeight, drawingBuffer: threeCanvas.width + 'x' + threeCanvas.height, cssSize: threeCanvas.style.width + 'x' + threeCanvas.style.height, aspect: +threeCamera.aspect.toFixed(3) }));
const before = await m(); await p.setViewportSize({ width: 700, height: 900 }); await sleep(500); const after = await m();
save('09-resize.json', { before, after }); console.log(JSON.stringify({ before, after })); await b.close();
