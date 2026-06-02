# Portfolio — Samuel Fuentes (NotSaam)

Portfolio profesional construido con **Astro + TailwindCSS**. Diseño premium (estilo
Vercel / Linear / Stripe), modo oscuro, animaciones suaves, responsive, SEO optimizado
y carga rápida (HTML estático, JS mínimo).

Capa de presentación independiente: **no toca el código de FLAKAI ni de FLK0S**.

## Stack

- **Astro 4** — generación estática, cero JS por defecto
- **TailwindCSS 3** — diseño por tokens (variables CSS para claro/oscuro)
- **@astrojs/sitemap** — sitemap automático para SEO
- GitHub Actions → **GitHub Pages**

## Estructura

```
src/
  components/   Navbar, Footer, Hero, Section, ProjectCard, TechCard,
                TimelineItem, ContactCard, ThemeToggle
  layouts/      BaseLayout.astro  (SEO, OG, JSON-LD, dark mode, reveal)
  pages/        index, sobre-mi, proyectos/, proyectos/[slug],
                experiencia, tecnologias, contacto
  data/         profile.ts, projects.ts, tech.ts, experience.ts  (contenido)
  lib/          url.ts  (helper de base path)
  styles/       global.css  (tokens + utilidades)
public/         favicon.svg, og.svg, robots.txt
.github/workflows/deploy.yml
```

Todo el **contenido** vive en `src/data/` — edita ahí, no en el markup.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve el build
```

## Despliegue en GitHub Pages

### 1. Ajusta la base en `astro.config.mjs`

| Caso | `SITE` | `BASE` |
|------|--------|--------|
| Repo de proyecto `github.com/NotSaam/portfolio` | `https://notsaam.github.io` | `/portfolio` |
| Repo de usuario `github.com/NotSaam/notsaam.github.io` | `https://notsaam.github.io` | `/` |

(Por defecto está configurado como repo de proyecto `portfolio`.)

### 2. Sube el repo

```bash
git init
git add .
git commit -m "feat: portfolio Astro"
git branch -M main
git remote add origin https://github.com/NotSaam/portfolio.git
git push -u origin main
```

### 3. Activa Pages

En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Cada `push` a `main` ejecuta el workflow `.github/workflows/deploy.yml` y publica el sitio.

## Personalización

- **Textos / proyectos / stack** → `src/data/*.ts`
- **Email de contacto** → `profile.links.email` en `src/data/profile.ts` (vacío = oculto)
- **Colores / tipografía** → `tailwind.config.js` y tokens en `src/styles/global.css`

## Notas

Contenido redactado solo con información pública (GitHub @NotSaam) y la documentación de
los proyectos. Sin titulaciones, cargos ni certificaciones inventados.
