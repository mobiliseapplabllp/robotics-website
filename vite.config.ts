import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Warn only for chunks over 600 kB (our splitting keeps chunks well below)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunking: isolate heavy libraries so they cache independently
        // of app code and don't bloat the main bundle.
        manualChunks: {
          // React ecosystem — changes rarely, long-term cache hit
          'react-vendor': ['react', 'react-dom', 'react-router'],
          // Motion (Framer Motion) is the largest single dependency after
          // React — splitting it lets the main bundle load faster, and the
          // motion chunk caches across all pages since every page uses it.
          'motion': ['motion'],
          // Lucide icons — individually tree-shaken but still a decent chunk
          'icons': ['lucide-react'],
        },
      },
    },
  },
})
