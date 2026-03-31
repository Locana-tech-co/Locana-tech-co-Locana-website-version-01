import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const contactApiPlugin = () => ({
  name: 'contact-api',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
          const filePath = path.resolve(__dirname, 'contacts.json');
          let contacts = [];
          if (fs.existsSync(filePath)) {
            try {
              contacts = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            } catch (e) {
              console.error('Error parsing contacts.json:', e);
            }
          }
          try {
            const newEntry = { ...JSON.parse(body), timestamp: new Date().toISOString() };
            contacts.push(newEntry);
            fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to save data' }));
          }
        });
      } else if (req.url === '/api/apply' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
          const filePath = path.resolve(__dirname, 'applications.json');
          let applications = [];
          if (fs.existsSync(filePath)) {
            try {
              applications = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            } catch (e) {
              console.error('Error parsing applications.json:', e);
            }
          }
          try {
            const newEntry = { ...JSON.parse(body), timestamp: new Date().toISOString() };
            applications.push(newEntry);
            fs.writeFileSync(filePath, JSON.stringify(applications, null, 2));
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to save data' }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
})
