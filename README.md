# LKMX Website 🌐

Next.js-based website with internationalization support and custom styling using Flare design system.

## ✨ Features

- 🚀 Built with Next.js 13
- 🌍 Multilingual support (English/Spanish)
- 🎨 SVG imports with SVGR
- 💅 Flare design system integration
- 📝 Markdown content support with gray-matter and remark

## 🔧 Prerequisites

- Node.js 22

## 🚀 Installation

```bash
npm install
```

### 📦 Flare Design System

The Flare design system packages (`@lkmx/flare` and `@lkmx/flare-react`) are included as local packages in the `packages/` directory. These packages are referenced using `file:` paths in `package.json` instead of npm registry versions. This ensures the build works in all environments (including Vercel) without requiring external package access.

If you need to update or modify Flare components:

- Edit files directly in `packages/flare/` or `packages/flare-react/`
- Run `npm install` to update symlinks
- No need to publish to npm

## 💻 Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 🔍 Pre-commit Checks

Before pushing changes to the repository:

1. Run local build test:

```bash
npm run lint
npm run build
```

2. Fix any build errors or warnings
3. Only commit and push once the build succeeds

## 📜 Scripts

- `dev`: Start development server
- `build`: Build production application
- `export`: Generate static export
- `start`: Start production server
- `lint`: Run ESLint checks

## 🚀 Deployment

### Vercel Setup

- Project hosted on a free Vercel account
- Account ownership: walter.hurtado@lkmx.io
- Limited to single member access

### 🔄 Deployment Flow

1. Push changes to `stg` branch (no automatic deployment)
2. Create Pull Request from `stg` to `PRD` when ready
3. Vercel automatically deploys on commits to `PRD` branch
