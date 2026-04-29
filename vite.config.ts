import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg:  { quality: 72 },
      jpeg: { quality: 72 },
      png:  { quality: 75 },
      webp: { lossless: false, quality: 72 },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    // Separar vendors pesados en chunks propios para mejor caché
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':   ['react', 'react-dom'],
          'motion':         ['framer-motion'],
          'globe':          ['cobe'],
          'icons':          ['lucide-react'],
          'radix':          [
            '@radix-ui/react-accordion',
            '@radix-ui/react-slot',
          ],
        },
      },
    },
    // Aumentar límite de warning (el globo pesa más de 500KB)
    chunkSizeWarningLimit: 800,
  },
})
