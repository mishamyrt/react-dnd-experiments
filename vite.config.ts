import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-dnd-experiments',
  resolve: {
    alias: {
      $components: resolve(__dirname, 'src/components'),
      $utils: resolve(__dirname, 'src/utils'),
      $mock: resolve(__dirname, 'src/mock'),
    },
  },
})
