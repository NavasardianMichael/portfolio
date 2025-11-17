import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  base: process.env.VITE_BASE_PATH || './',
  build: {
    sourcemap: true,
  },
  server: {
    // port: 5371,
    open: true,
  },
})
