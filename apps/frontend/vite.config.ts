/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/frontend',
  server:{
    port: 4200,
    host: 'localhost',
    fs: {
      strict: false,
    },
    proxy: {
      '/register': {
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
      '/save': {
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
      '/userData': {
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
      '/speech': {
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
    }
  },
  preview:{
    port: 4300,
    host: 'localhost',
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/frontend',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        main: join(__dirname, 'index.html'),
      },
    },
  },
  define: {
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
  },
}));
