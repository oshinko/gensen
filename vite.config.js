import path from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'demo'),
  plugins: [svelte()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'Gensen',
      fileName: (format) => `gensen.${format}.js`
    },
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
})
