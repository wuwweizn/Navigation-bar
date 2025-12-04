import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(), // Inject CSS directly into the JS bundle
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'index.tsx', // The entry point
      name: 'HaSidebarCard',
      fileName: 'ha-sidebar-card', // Output file: dist/ha-sidebar-card.js
      formats: ['es'], // Use ES Module format for Home Assistant
    },
    rollupOptions: {
      // We bundle React inside because HA doesn't expose a global React instance guaranteed to match our version
      external: [], 
    },
  },
  define: {
    'process.env': { NODE_ENV: '"production"' }
  }
});