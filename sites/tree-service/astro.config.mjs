import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://219treeservice.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Workspace theme ships .astro/.ts source, so Vite must compile it rather than externalise it.
  vite: { ssr: { noExternal: ['@leads/theme'] } },
})
