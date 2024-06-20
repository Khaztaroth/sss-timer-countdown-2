// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    dropShadow: {
        'mid': '0 10px 3px rgba(0, 0, 0, 0.95)',
        'close': '0 5px 3px rgba(0, 0, 0, 0.95)',
    },
    colors: {
      'mainGray': 'rgba(36, 36, 36, 1)'

    }
  },
  rules: [
    ['dinBold', {'font-family': 'D-Din-Bold'}],
    ['dinRegular', {'font-family': 'D-Din-Condensed'}],
  ],
  shortcuts: [
    {
      bgBlock: "absolute size-11/12 lt-sm:left-4 lt-lg:left-8 lg:left-12 xl:left-18 top-8 border-solid before:bg-mainGray before:content-[''] before:absolute before:size-full before:top-0 before:left-0 before:opacity-95",
      headerLine: "relative text-center text-bolder py-12 mb-2 center lt-sm:text-6xl sm:text-8xl xl:text-9xl drop-shadow-mid",
      trailingLine: "relative text-center text-bold lt-sm:text-5xl sm:text-5xl xl:text-8xl drop-shadow-close",
      link: "relative text-center text-bold lt-sm:text-3xl sm:text-3xl xl:text-5xl drop-shadow-close",
    }
  ],
})