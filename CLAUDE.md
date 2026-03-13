# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint (js,jsx files)
```

## Tech Stack

- **React 18** + **Vite 4** — SPA with client-side routing via React Router DOM
- **TailwindCSS 3** — utility-first styling; dark mode via `class` strategy on root element
- **Framer Motion** — page transitions and entrance animations
- **React Icons / Feather / FontAwesome** — icon libraries

## Architecture

**Routing** (`src/App.jsx`): 5 routes — `/`, `/bio`, `/portfolio`, `/elevator-pitch`, `/blog` — each maps to a page component in `src/pages/`.

**Theme** (`src/context/themeProvider.jsx`): `ThemeProvider` wraps the app in `main.jsx`. Stores dark/light preference in `localStorage`. Consume with the `useTheme` hook.

**Data** (`src/data/projects.js`): Static array of project objects (title, description, tech stack, links). `Portfolio.jsx` maps over this to render cards — add new projects here.

**Components** (`src/components/`): `NavBar.jsx` handles responsive nav (hamburger on mobile, fixed sidebar on desktop) and integrates theme toggle. `themeToggle.jsx` is the standalone toggle button.

**Styles** (`src/index.css`): Global styles and custom CSS animations (e.g. `.bn5` glowing button effect). Tailwind utilities handle most layout/color.

## Deployment

Live at https://kehindebalogun.netlify.app/ — deploys from the `main` branch via Netlify.
