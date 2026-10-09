
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: false,
  },
  build: {
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
})