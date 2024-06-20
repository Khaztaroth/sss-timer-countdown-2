// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['dinBold', {'font-family': 'D-Din-Bold'}],
    ['dinRegular', {'font-family': 'D-Din-Condensed'}],
  ],
  shortcuts: [
    {
      headerLine: 'text-center text-bolder py-12 mb-2 center lt-sm:text-6xl sm:text-8xl xl:text-9xl',
      trailingLine: 'text-center text-bold lt-sm:text-5xl sm:text-5xl xl:text-8xl',

    }
  ]
})