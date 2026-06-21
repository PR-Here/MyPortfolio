# Deploy the website to Vercel

This repository contains a React + Vite frontend in `client`.

## Recommended deployment
1. Go to https://vercel.com/new
2. Import your Git repository
3. Set the project root to `.` (repo root)
4. Build command: `npm run build --prefix client`
5. Output directory: `client/dist`
6. Deploy

## CLI deployment
```bash
cd client
npm install
npm run build
npm i -g vercel
vercel login
vercel --prod
```

## Notes
- I added `vercel.json` at the repo root so Vercel uses the `client` app build and rewrites SPA routes.
- If Vercel still gives a white screen, the likely issue is absolute asset paths in the built `index.html`, so the project root should remain set to `client` and the output directory to `dist`.
