/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'node:path';

import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
  build: {
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false,
        }),
        json(),
      ],
    },
  },
});
