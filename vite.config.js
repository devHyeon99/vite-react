import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import pluginReact from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  plugins: [
    pluginReact({
      jsxRuntime: 'automatic',
    }),
  ],
});

export default viteConfig;
