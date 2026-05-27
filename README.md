# template-saas-glassmorphic

A standalone SEOJack website template. Lean Next.js 16 app (App Router, React 19,
scoped CSS — no Tailwind/Convex/Clerk).

- **Live:** https://saas-glassmorphic.templates.seojack.website
- **Registry id:** `tpl_saas_glassmorphic`
- **Showcased on:** https://seojack.net/templates/tpl_saas_glassmorphic

## Develop

```powershell
npm install
npm run dev          # http://localhost:3000
```

## Anatomy

| File | Role |
|------|------|
| `app/layout.tsx` | SEO metadata, canonical, OpenGraph/Twitter, JSON-LD, theme color |
| `app/page.tsx` | renders `<DemoBody />` |
| `app/DemoBody.tsx` | `'use client'` — font link + scoped CSS inject + sections |
| `app/styles.ts` | one scoped CSS literal (every selector prefixed `.saas-glassmorphic-demo`) |
| `app/data.ts` | typed, realistic content |
| `app/primitives.tsx` | shared motion primitives (Reveal, Headline, Magnetic, Marquee) |
| `app/SeojackCredit.tsx` | footer credit / inbound link (stripped when used as a builder seed) |
| `app/sitemap.ts`, `app/robots.ts` | indexable for organic discovery |

## Deploy

Own GitHub repo (`seojack-templates/template-saas-glassmorphic`) + own Vercel project,
production domain `https://saas-glassmorphic.templates.seojack.website`. See `docs/templates-github-org.md`.