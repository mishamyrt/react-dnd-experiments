import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import { defineConfig } from 'vite'

import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASEURL,
  resolve: {
    alias: {
      $components: resolve(__dirname, 'src/components'),
      $utils: resolve(__dirname, 'src/utils'),
      $mock: resolve(__dirname, 'src/mock'),
    },
  },
})
