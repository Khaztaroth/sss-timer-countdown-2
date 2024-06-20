// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

import presetAtributify from '@unocss/preset-attributify'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/time-viwer.ts',
      formats: ['es']
    }
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