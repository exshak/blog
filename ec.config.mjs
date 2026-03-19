import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
  styleOverrides: {
    codeBackground: (context) => (context.theme.name === 'vitesse-dark' ? '#0e0e0e' : '#fafafa'),
    frames: {
      frameBoxShadowCssValue: 'none',
      terminalBackground: ({ theme }) => (theme.name === 'vitesse-dark' ? '#0e0e0e' : '#fafafa'),
    },
  },
  themes: ['vitesse-dark', 'vitesse-light'],
  themeCssSelector: (theme) => (theme.name === 'vitesse-dark' ? ':root.dark' : ':root:not(.dark)'),
})
