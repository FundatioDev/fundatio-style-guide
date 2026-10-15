import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  css: {
    devSourcemap: false,
  },

  build:
    mode === 'app'
      ? {}
      : {
          lib: {
            entry: resolve(import.meta.dirname, 'src/components/index.ts'),
            formats: ['es'],
            fileName: 'fundatio-ui',
            cssFileName: 'fundatio-ui',
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
          },
        },

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
}))