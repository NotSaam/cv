import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// Despliegue en GitHub Pages
//
// • Repo de proyecto  (github.com/NotSaam/portfolio):
//     site: 'https://notsaam.github.io'   base: '/portfolio'
//
// • Repo de usuario   (github.com/NotSaam/notsaam.github.io):
//     site: 'https://notsaam.github.io'   base: '/'   (o elimina base)
//
// Cambia SITE y BASE según tu caso. Por defecto: repo de proyecto "portfolio".
// ─────────────────────────────────────────────────────────────
const SITE = 'https://notsaam.github.io';
const BASE = '/portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: { format: 'directory' },
});
