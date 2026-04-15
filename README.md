# Ado Solar Energy - Next.js

Site vitrine Ado Solar Energy migre vers **Next.js App Router**.

## Stack

- Next.js (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Demarrage local

Prerequis:

- Node.js 20+
- npm 10+

Commandes:

```bash
npm install
npm run dev
```

Application disponible sur `http://localhost:3000`.

## Scripts

- `npm run dev` lance le serveur de developpement Next
- `npm run build` compile la version de production
- `npm run start` lance la build de production
- `npm run lint` execute la verification TypeScript (`tsc --noEmit`)

## Structure des routes

Le projet utilise **une seule racine App Router**: `src/app`.

Routes principales:

- `/`
- `/a-propos`
- `/services`
- `/produits`
- `/contact`

## Assets

Les images locales sont servies via `public/images` et referencees avec des chemins racine:

- exemple: `/images/logo.png`

## Deploiement Vercel

Parametres recommandes:

- Framework Preset: `Next.js`
- Root Directory: racine de ce projet
- Build Command: `npm run build`
- Install Command: `npm install`

Si Vercel reutilise un ancien cache, relancer un deploiement en cochant **Clear build cache**.
