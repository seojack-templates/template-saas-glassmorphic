# AGENTS.md — template-saas-glassmorphic

> Standalone SEOJack marketing-site template: a glassmorphic SaaS landing page. Part of the NEO-1 workspace (see root ../../../AGENTS.md).

## What it is
A lean, self-contained Next.js website template showcasing a modern SaaS landing page — frosted-glass cards, gradient backgrounds, pricing tables, and feature grids. It ships as its own deployable app (no Tailwind, Convex, or Clerk) and is registered in the SEOJack template gallery as `tpl_saas_glassmorphic`. It is both a live demo and a reusable seed that the SEOJack site builder can clone (the footer credit is stripped when used as a builder seed).

## Stack
- Next.js 16 (App Router) + React 19, TypeScript 5.7
- Scoped CSS via a single CSS string literal (no Tailwind/CSS framework)
- `lucide-react` for icons
- Deployed on Vercel

## Structure
- `app/layout.tsx` — SEO metadata, canonical, OpenGraph/Twitter, JSON-LD
- `app/page.tsx` — renders `<DemoBody />`
- `app/DemoBody.tsx` — `'use client'`; font link + scoped CSS inject + sections
- `app/styles.ts` — one scoped CSS literal (every selector prefixed `.saas-glassmorphic-demo`)
- `app/data.ts`, `app/content.ts` — typed, realistic page content
- `app/primitives.tsx` — motion primitives (Reveal, Headline, Magnetic, Marquee)
- `app/SeojackCredit.tsx` — footer credit / inbound link (stripped for builder seed)
- `app/sitemap.ts`, `app/robots.ts` — indexable for organic discovery

## Commands
Package manager: npm (package-lock.json present). Scripts from package.json:
- Install: `npm install`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Start (prod): `npm run start`
- Lint: `npm run lint`

## Conventions & notes
- All styles live in `app/styles.ts` as one scoped literal; every selector is prefixed `.saas-glassmorphic-demo` to avoid leakage when embedded.
- The template is embedded in an iframe on seojack.net's `/demo/[id]` viewer — do NOT add `X-Frame-Options: DENY` or `frame-ancestors 'none'` (see `next.config.ts`).
- `next.config.ts` allows remote images from `cdn.seojack.website`.
- Registry id: `tpl_saas_glassmorphic`; showcased at https://seojack.net/templates/tpl_saas_glassmorphic.
- Live URL: https://saas-glassmorphic.templates.seojack.website
- Deploys from its own GitHub repo + own Vercel project; production domain as above. See `docs/templates-github-org.md` in the workspace.
- No test suite present.

## Provenance
Clone of https://github.com/seojack-templates/template-saas-glassmorphic.git. Default branch main.
