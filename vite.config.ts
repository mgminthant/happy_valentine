import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures Netlify picks up the correct folder
  },
  server: {
    host: true
  }
});
