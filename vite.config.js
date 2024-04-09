// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Configure server rewrites to handle client-side routing
    // This ensures that all paths are redirected to the root `index.html`
    // So that your React router can handle the routing on the client side
    fs: {
      strict: false,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    // Add rewrite rules for client-side routing
    // All paths will be redirected to the root `index.html`
    hmr: {
      // Enable HTML page rewrites
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
    },
    // Configure the fallback to handle SPA routing
    // This will serve the `index.html` for all non-file requests
    // So that client-side routing can be handled by your React router
    fallback: 'index.html',
  },
});


