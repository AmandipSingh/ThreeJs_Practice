import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Assuming index.html is in the root directory
  server: {
    host: '0.0.0.0',
    port: 8080, // Ensure a known port number
  },
  build: {
    outDir: 'dist', // Output directory for built files
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
