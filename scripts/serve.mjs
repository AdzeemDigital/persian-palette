import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function createServer() {
  return http.createServer(async (req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }
    let route;
    try {
      route = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
    } catch {
      res.writeHead(400).end();
      return;
    }
    if (route === '/' || route === '/code_artifact.html') route = '/code_artifact.html';
    else if (route === '/en' || route === '/code_artifact_en.html') route = '/code_artifact_en.html';
    else if (!/^\/(?:release\/[a-z0-9.-]+\.tgz|packages\/core\/tokens\/[a-zA-Z0-9.-]+|docs\/[a-zA-Z0-9.-]+)$/.test(route)) {
      res.writeHead(404).end('Not found');
      return;
    }
    const file = path.resolve(root, '.' + route);
    if (!file.startsWith(root + path.sep)) {
      res.writeHead(404).end();
      return;
    }
    try {
      const data = await fs.readFile(file), ext = path.extname(file);
      const types = {
        '.html': 'text/html; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.md': 'text/plain; charset=utf-8',
        '.tgz': 'application/gzip'
      };
      res.writeHead(200, {
        'Content-Type': types[ext] || 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'no-referrer',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch {
      res.writeHead(404).end('Not found');
    }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.MANSHOUR_PORT || 4173);
  if (!Number.isInteger(port) || port < 1024 || port > 65535) throw Error('MANSHOUR_PORT must be 1024–65535');
  createServer().listen(port, '127.0.0.1', () => console.log('Persian Palette Studio: http://127.0.0.1:' + port));
}
