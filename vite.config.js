import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Assuming index.html is in the root directory
  build: {
    outDir: 'dist', // Output directory for built files
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
