import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss' // prettier-ignore
import { PROJECTS, WORK } from '~/consts'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'text-bottom',
      },
    }),
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        cond: 'Roboto Condensed',
      },
    }),
  ],
  safelist: [
    ...Object.keys(PROJECTS).map((key) => PROJECTS[key as keyof typeof PROJECTS].map((project) => project.icon)).flat(), // prettier-ignore
    ...Object.keys(WORK).map((key) => WORK[key as keyof typeof WORK].map((project) => project.icon)).flat(), // prettier-ignore
  ],
  shortcuts: [
    [/^btn-(.*)$/, ([, color]) => `op-50 no-underline! border-#8884! rounded border border-solid px-2.5 py-1 transition-all duration-200 ease-out hover:(op-100 text-${color} bg-${color}/10)`], // prettier-ignore
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
