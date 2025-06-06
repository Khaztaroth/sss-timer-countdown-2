// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    dropShadow: {
        'mid': '0 10px 3px rgba(0, 0, 0, 0.95)',
        'close': '0 5px 3px rgba(0, 0, 0, 0.95)',
    },
    colors: {
      'solidGray': 'rgb(53, 53, 53)',
      'accentRed': 'rgb(138, 54, 84)',
      'accentGold': 'rgb(233, 200, 98)',
      'juliaGreen': 'rgb(84, 110, 69)',
      'jacobBlue': 'rgb(112, 142, 154)',
    },
    verticalBreakpoints: {
      sm: '720',
      lg: '1280',
      xl: '1080',
    },
    gridTemplateRow: {
      'topHeavy': 'repeat(2, minmax(0, 1fr))',
      'testing': 'repeat(2, minmax(0,1fr))',
    },
  },
  rules: [
    ['dinBold', {'font-family': 'D-Din-Bold'}],
    ['dinRegular', {'font-family': 'D-Din-Condensed'}],
    ['hideLink', {'text-decoration': 'none'}],
    ['solidOutline', {'outline': '5px solid'}]
  ],
  shortcuts: [
    {
      center: "relative text-center",
      textBig: "lt-sm:text-6xl sm:text-8xl xl:text-9xl",
      textSmall: "lt-sm:text-5xl sm:text-5xl xl:text-8xl",
      textMinimal: "lt-sm:text-3xl sm:text-3xl xl:text-5xl ",
      textfooter: "lt-sm:text-lg sm:text-lg xl:text-xl",
      bgShadow: "before:content-[''] before:absolute before:w-full before:h-[99.95%] before:top-0 before:left-0 before:opacity-95",
      bgBlock: "absolute size-11/12 lt-sm:left-4 lt-lg:left-8 lg:left-12 xl:left-18 top-8",
      headerLine: "center font-bold center textBig ",
      trailingLine: "center font-bold textSmall ",
      streamLink: "center font-bold textMinimal hideLink link:text-inherit visited:text-inherit",
      link: "center font-bold textfooter",
    }
  ],
})