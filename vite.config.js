import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the built site works on GitHub Pages under /<repo>/
export default defineConfig({
  plugins: [react()],
  base: './',
  // build into /docs so GitHub Pages can serve it (Settings → Pages → main /docs)
  build: { outDir: 'docs' },
});
