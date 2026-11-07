# kamcomer.github.io

Personal portfolio for Kameron Comer: a static [Astro](https://astro.build) site with
Tailwind CSS v4, deployed to GitHub Pages at **https://kamcomer.github.io**.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build into dist/
npm run preview   # serve the production build
```

Requires Node 22.12+.

## Editing content

Nearly everything on the site comes from two files:

| File | Contains |
|------|----------|
| `src/data/profile.ts` | Name, headline, bio, `openToWork` flag, socials, skills, experience |
| `src/data/projects.ts` | Featured projects + case study content, "also built" side projects |

- **Resume PDF:** drop a file at `public/resume.pdf` and the resume page's button switches
  from "Save as PDF" (browser print) to a direct download.
- **GitHub stats** (repo count, languages) are fetched at build time by `src/lib/github.ts`.
  If GitHub is unreachable the build still succeeds with fallback values. Set `GITHUB_TOKEN`
  to avoid anonymous rate limits.

## Structure

```
src/
├── components/
│   ├── bold/          # Current design: hero, bento grid, journey, contact, nav
│   ├── industrial/    # Alternate design, served at /industrial (noindex)
│   └── shared/        # Theme toggle, ⌘K command palette
├── data/              # Site content (see above)
├── layouts/           # Base (head/SEO/theme) and Site (nav + footer + palette)
├── lib/github.ts      # Build-time GitHub stats
├── pages/             # /, /projects/[slug], /resume, /industrial, 404
├── scripts/           # Flow-field canvas used by the industrial hero
└── styles/global.css  # Theme tokens (light/dark) and Tailwind setup
```

## Designs

Two directions were built. **Bold** is live at `/`. **Industrial** is still reachable at
`/industrial` and is preserved in full on the `design/industrial` branch and the
`checkpoint/two-directions` tag. To switch the home page back, render the industrial
components from `src/pages/index.astro` (see `src/pages/industrial.astro`).

The previous React version of the site lives on the `legacy/react-portfolio` branch.

## Deployment

Pushing to `main` runs `.github/workflows/deploy-gh-pages-branch.yml`, which builds the site
and publishes `dist/` to the `gh-pages` branch.
