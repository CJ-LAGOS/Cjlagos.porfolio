# Christian Jake Lagos — Portfolio

A single-page portfolio built with React + Vite. No backend.

## Run locally

Requires Node 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```

## Make it yours

Everything you need to change is in **`src/data.js`**. Search for `TODO`:

- name, email, GitHub, LinkedIn, location
- About text and quick facts
- skills (only list what you can talk about in an interview)
- projects: replace the `building` cards with real ones as you finish them, and add `live` / `code` links
- education & learning timeline

**Résumé:** drop `resume.pdf` into `public/` and set `resume: './resume.pdf'` in `data.js`.
A "Download résumé" button appears in the hero.

**Profile photo:** put a square photo in `public/` (e.g. `profile.jpg`, about 600×600, under 300 KB)
and set `photo: './profile.jpg'` in `data.js`. It shows beside the headline on desktop and as a
small circle on mobile. Leave it empty to hide it.

Also update the `<title>` and meta description in `index.html`, and the letter in `public/favicon.svg`.

## Deploy (free)

**Vercel / Netlify:** push to GitHub, import the repo, accept the defaults
(build `npm run build`, output `dist`). Every push redeploys.

**Netlify Drop:** run `npm run build` and drag the `dist/` folder onto
https://app.netlify.com/drop.

**GitHub Pages:** already set up in `.github/workflows/deploy.yml`. In the repo go to
Settings → Pages → Source: **GitHub Actions**. Every push to `main` then deploys to
`https://<username>.github.io/<repo>/`.

## Tips for applying

- Put the deployed link on your résumé, LinkedIn and GitHub profile.
- Pin the repos you link here on your GitHub profile, each with a README and screenshot.
- Two or three finished, polished projects beat ten half-done ones.
