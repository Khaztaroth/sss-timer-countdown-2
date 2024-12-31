// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { resolve } from 'path'

import presetAtributify from '@unocss/preset-attributify'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  build: {
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //     timer: resolve(__dirname, 'timer/index.html'),
    //   }
    // }
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