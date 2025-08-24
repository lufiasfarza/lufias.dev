import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This ensures client-side routing works on production
  build: {
    outDir: 'dist',
  },
  // For SPA routing to work properly
  server: {
    historyApiFallback: true,
  }
})