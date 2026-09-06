import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'

const prod = process.env.NODE_ENV === 'production'
const vite = prod
  ? null
  : await (await import('vite')).createServer({ server: { middlewareMode: true }, appType: 'custom' })

const mime = { '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml' }

const handler = async (req, res) => {
  try {
    // ponytail: prod serves dist/client by extension only; put a real static server in front for caching/range
    const ext = extname(req.url)
    if (prod && mime[ext]) {
      res.writeHead(200, { 'Content-Type': mime[ext] })
      return res.end(await readFile(`dist/client${req.url.split('?')[0]}`))
    }
    const [template, { render }] = vite
      ? [
          await vite.transformIndexHtml(req.url, await readFile('index.html', 'utf8')),
          await vite.ssrLoadModule('/src/entry-server.jsx'),
        ]
      : [await readFile('dist/client/index.html', 'utf8'), await import('./dist/server/entry-server.js')]

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(template.replace('<!--ssr-outlet-->', render()))
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    res.writeHead(500).end(e.stack)
  }
}

createServer(vite ? (req, res) => vite.middlewares(req, res, () => handler(req, res)) : handler)
  .listen(5173, () => console.log('http://localhost:5173'))
