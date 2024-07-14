import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Assuming index.html is in the root directory
  server: {
    host: '0.0.0.0',
    port: 8080, // Ensure a known port number
    middlewareMode: true,
    setupMiddlewares: (middlewares, server) => {
      middlewares.use(corsMiddleware);
      return middlewares;
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      }
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
