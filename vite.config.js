import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: path.join(__dirname, 'src'),
  build: {
    emptyOutDir: true,
    outDir: path.join(__dirname, 'public')
  },
  server: {
    port: 9500
  }
})
