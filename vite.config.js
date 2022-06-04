import path from 'path'

import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

import dataloader from './data-loader'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'demo'),
  plugins: [dataloader(), svelte()],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'gensen',
      fileName: format => `gensen.${format}.js`
    },

    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
})
