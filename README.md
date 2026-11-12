# Sisonke Miya Portfolio

A personal portfolio website for Sisonke Miya, showcasing visual identity, editorial design, and digital products. The site is built with React, TypeScript, and Vite.

## Overview

This portfolio presents:
- selected case studies and project highlights
- a visual brand and editorial design aesthetic
- responsive layout and dark mode support
- a contact form that opens the user’s email client
- project previews and external links for live work

## Tech stack

- React
- TypeScript
- Vite
- CSS

## Project structure

```text
.
├── react-app/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.*
│   └── scripts/
├── README.md
└── package.json (if present in the repo root)
```

## Local development

From the repository root:

```bash
cd react-app
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
cd react-app
npm run build
```

This runs TypeScript checks and creates a production build, then prerenders static routes via the script in `scripts/prerender.mjs`.

## Preview production build

```bash
cd react-app
npm run preview
```

## Notes

- The app uses Vite’s base path handling for deployment environments.
- The work page includes external live project links and preview cards.
- The contact form is intentionally client-side and opens a mail draft instead of sending data to a server.

## Deployment

This project is designed to be hosted as a static site or frontend deployment platform such as Vercel or Netlify.

## License

This project is for personal portfolio use. Check the repository for any specific licensing details before reusing or redistributing assets.
