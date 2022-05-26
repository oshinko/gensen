import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: path.resolve(__dirname, 'lib'),

    coverage: {
      reportsDirectory: path.resolve(__dirname, 'test-coverage')
    }
  }
})
