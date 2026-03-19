import sitemap from '@astrojs/sitemap'
import astroExpressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { SITE } from './src/consts'

export default defineConfig({
  site: SITE.url,
  build: { format: 'file' },
  experimental: { svgo: true },
  integrations: [astroExpressiveCode(), sitemap(), UnoCSS({ injectReset: true })],
})
