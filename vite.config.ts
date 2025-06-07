import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      // Only proxy version checking, not downloads
      '/api/version': {
        target: 'https://finaccosolutions.com/connect/updates',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/version/, '/version.txt'),
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'text/plain,*/*',
          'Referer': 'https://finaccosolutions.com'
        }
      }
      // Removed download proxy - downloads will go directly to the server
    },
  },
})