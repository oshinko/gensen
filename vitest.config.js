import path from 'path'

import { defineConfig } from 'vitest/config'

import dataloader from './data-loader'

export default defineConfig({
  plugins: [dataloader()],

  test: {
    root: path.resolve(__dirname, 'lib'),

    coverage: {
      reportsDirectory: path.resolve(__dirname, 'test-coverage')
    }
  }
})
