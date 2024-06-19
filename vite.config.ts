// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

import presetAtributify from '@unocss/preset-attributify'
import presetTypography from '@unocss/preset-typography'
import presetWind from '@unocss/preset-wind'
import presetUno from '@unocss/preset-uno'

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
        // presetUno(),
        presetAtributify(),
        // presetTypography(),
        presetWind(),
      ]
    }),
  ],
})