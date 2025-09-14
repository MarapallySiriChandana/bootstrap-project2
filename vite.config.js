import { defineConfig } from 'vite';

export default defineConfig({
  root: 'dist',
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false
  }
});
