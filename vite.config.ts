// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

import presetAtributify from '@unocss/preset-attributify'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  preview: {
    proxy: {
      '/api': {
        target: 'https://sss-timer-dashboard.khaz.workers.dev/dash',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://sss-timer-dashboard.khaz.workers.dev/dash',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      presets: [
        presetAtributify(),
        presetWind(),
      ]
    }),
  ],
})