# CodesFoundry

Marketing site for CodesFoundry — an independent full-stack engineering studio.

Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Resend**.

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in real values
cp .env.local.example .env.local

# 3. Run the dev server
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `CONTACT_TO_EMAIL` | Address that receives contact-form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender in Resend (e.g. `CodesFoundry <no-reply@codesfoundry.com>`) |
| `RESEND_API_KEY` | From https://resend.com/api-keys |
| `NEXT_PUBLIC_SITE_URL` | Your production URL — used by `sitemap.ts` / `robots.ts` |

Without `RESEND_API_KEY`, the site still runs but the contact form returns a 500 with a clear message. Set the vars in Vercel's dashboard for production.

---

## Project structure

```
app/
  layout.tsx          # Root layout, fonts (Fraunces + Geist), metadata
  page.tsx            # Homepage — composes section components
  globals.css         # Design tokens (light + dark), base styles, reusable classes
  sitemap.ts          # Auto-generated sitemap
  robots.ts           # Robots.txt
  api/
    contact/route.ts  # POST handler that emails via Resend

components/
  site-header.tsx     # Sticky header, nav, theme toggle
  site-footer.tsx     # Footer with links + socials
  ui.tsx              # Reveal (scroll-in), SectionHead, Button, LinkButton
  icons.tsx           # All inline SVG icons
  hero.tsx            # Hero + ambient sparks canvas
  services.tsx        # Bento grid of services
  expertise.tsx       # Three domain cards
  process.tsx         # Four-step process
  work.tsx            # Case studies with metric tiles
  studio.tsx          # Manifesto + principles + team cards
  marquee.tsx         # Two-row scrolling tech stack
  journal.tsx         # Blog post cards
  contact.tsx         # Contact section wrapper
  contact-form.tsx    # Client-side form with fetch → /api/contact

content/
  site-data.ts        # All copy, services, cases, team, posts — edit here

next.config.mjs
tailwind.config.ts
tsconfig.json
postcss.config.mjs
```

---

## Design system

- **Tokens** live in `app/globals.css` as CSS custom properties (`--ground`, `--accent`, …). Light and dark palettes are defined for `:root`, `@media (prefers-color-scheme: dark)`, and `[data-theme="dark"]` so the header's theme toggle wins in both directions.
- **Tailwind** exposes the tokens as utility classes (`bg-ground`, `text-accent`, `border-rule`, `font-display`, …) via `tailwind.config.ts`.
- **Reusable classes** (`.btn`, `.wrap`, `.display`, `.eyebrow`, `.section-pad`, `.reveal`) live in `@layer components` in `globals.css`.
- **Typography** — `Fraunces` (display serif, italic-forward) + `Geist Sans` (body) + `Geist Mono` (labels & code), loaded via `next/font/google` in the root layout.
- **Motion** — scroll-in reveals via `IntersectionObserver` (in `components/ui.tsx`). CSS marquee animation. Ambient hero sparks via a small canvas particle loop. All respect `prefers-reduced-motion`.

---

## Editing content

All copy lives in **`content/site-data.ts`**. To change a headline, add a service, replace a case study, or swap out a team bio — edit that file. No component code needs to change.

The `team` array has three entries; only the first (Karan Pal) is filled in. Replace the other two before launch.

---

## Wiring the contact form to Resend

1. Sign up at https://resend.com and verify your sending domain
2. Create an API key at https://resend.com/api-keys
3. Add the three env vars to `.env.local` (see the table above)
4. In production: add the same vars in Vercel → Project → Settings → Environment Variables

The API route (`app/api/contact/route.ts`) validates the payload, then sends via the Resend SDK with a `reply-to` set to the sender's email so you can reply directly.

---

## Deploying to Vercel

The fastest path:

```bash
# Install the Vercel CLI once
npm install -g vercel

# From the project root
vercel
```

Follow the prompts. Vercel will detect Next.js automatically. Then:

1. Point your domain at Vercel (Project → Settings → Domains)
2. Add all four env vars in Project → Settings → Environment Variables
3. Redeploy

Alternative: push to GitHub, then "Import Project" at https://vercel.com/new.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

---

## Roadmap (deferred to keep the initial scaffold small)

- `/services/[slug]` dedicated deep pages per service
- `/work/[slug]` full case-study pages
- `/journal/[slug]` MDX blog posts — currently the journal cards are stubs
- Cookie/analytics wiring (Plausible or Vercel Analytics)
- Structured data (JSON-LD) for the Organization schema

Ship what's here first, land clients, then add depth to the pages that are converting.
