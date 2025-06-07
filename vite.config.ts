import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://finaccosolutions.com/connect/updates',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/download-api': {
        target: 'https://finaccosolutions.com/connect/download',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/download-api/, ''),
      },
    },
  },
})