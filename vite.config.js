import path from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.js'),
      name: 'Gensen',
      fileName: (format) => `gensen.${format}.js`
    }
  },
  // plugins: [svelte()],
  publicDir: false
})
