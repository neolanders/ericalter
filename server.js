const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ 
  dev,
  dir: path.join(__dirname, 'app/pages')
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Remove any trailing slashes
    const cleanPath = pathname.replace(/\/$/, '');
    
    // Handle the root path
    if (cleanPath === '') {
      req.url = '/';
    }

    // Handle custom pages directory
    if (cleanPath.startsWith('/app/pages/')) {
      req.url = cleanPath.replace('/app/pages/', '/');
    }

    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}); 