# Ambika Pattem — Portfolio

Personal portfolio site for **Ambika Pattem**, React & Frontend Developer.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio` or `ambika-portfolio`).
2. Push this project to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds on every push to `main` and publishes to Pages.

Your site will be live at:

`https://ambikapattem5.github.io/<your-repo-name>/`

The workflow sets `VITE_BASE_PATH` automatically from the repository name. For a manual build:

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build
```

Then upload the `dist` folder or use `npx gh-pages -d dist` if you prefer that flow.

## Customize content

Edit **`src/data/portfolio.ts`** — name, experience, skills, projects, and links are centralized there.

## Build

```bash
npm run build
npm run preview
```
