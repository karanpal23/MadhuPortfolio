# Portfolio — setup, customisation, hosting

A single-page, dependency-free portfolio site. No build step, no framework, no npm install.
Everything is in `index.html` (markup + CSS + JS inline) so it can be dropped on any host and loads in one request.

```
portfolio/
├── index.html      ← the whole site
├── 404.html        ← not-found page
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── og.png                 ← 1200×630 social preview (done)
│   └── capability-sheet.html  ← print to PDF → madhu-salaria-cv.pdf (see §2)
├── tools/
│   ├── personalise.ps1        ← fills every placeholder in one pass (§1)
│   └── make-og.ps1            ← regenerates assets/og.png (§7)
├── README.md       ← this file
└── PLAYBOOK.md     ← pricing, contracts, getting clients
```

`tools/` is not served — it can stay in the repo without affecting the deploy.

Open `index.html` in a browser to preview it. That's it.

---

## 1. Placeholders to replace (do these before publishing)

**The fast way — one command does all five files:**

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\personalise.ps1 `
    -Domain       "madhusalaria.dev" `
    -Mobile       "61452394161" `
    -LinkedIn     "madhu-salaria" `
    -GitHub       "madhusalaria" `
    -Calendly     "madhusalaria/30min" `
    -Web3Forms    "your-access-key" `
    -Availability "Taking 2 new projects - Sep 2026"
```

Every parameter is optional — pass only what you have and run it again later for the rest. Add `-WhatIf` to preview. It keeps a `.bak` of each file from the first run, and prints anything it could not resolve. The only thing it cannot do for you is the case records (see below).

**The manual way** — search `index.html` for each string:

| Find | Replace with | Where |
|---|---|---|
| `madhusalaria.pages.dev` | your real domain, once you buy one | canonical + OG tags, JSON-LD, `robots.txt`, `sitemap.xml`, capability sheet |
| `Madhu Salaria` | your full legal/professional name | throughout |
| `madhusalaria1996@gmail.com` | a domain email if you have one (see §5) | JSON-LD, contact, JS error messages |
| `61452394161` | mobile, country code, digits only | contact channels, `tel:` link |
| `calendly.com/YOUR-HANDLE/30min` | your Calendly / Cal.com link | contact channels |
| `linkedin.com/in/YOUR-HANDLE` | LinkedIn URL | contact channels |
| `github.com/YOUR-HANDLE` | GitHub URL | contact channels |
| `assets/madhu-salaria-cv.pdf` | your CV filename | contact channels |
| `YOUR_WEB3FORMS_ACCESS_KEY` | Web3Forms key (see §3) | contact form |
| `Taking 2 new projects · Aug 2026` | current availability — **keep this current** | hero |

> The site currently points at **`madhusalaria.pages.dev`**. Name your Cloudflare Pages project `madhusalaria` and that URL is correct on deploy; if you pick a different project name, re-run `personalise.ps1 -Domain "<whatever>.pages.dev"`. Same command swaps in a real domain later.

Then decide on these:

- **`§03 Work` — currently three *worked examples*, not client records.** Each is tagged `Worked example` and written as "here's how I'd build it", so nothing on the page is a claim a client could check and find false. That's deliberate: a fabricated case record that gets checked costs you the deal outright, and an unverifiable logo wall is discounted by every serious buyer anyway.

  **Replace each card the moment you have a real project.** Per card: swap `<span class="tag tag--rep">Worked example</span>` for the domain tag alone, change `The situation` to what was actually broken, `How I'd build it` to `Built`, and — most important — replace the three `.metric` blocks with *measured* outcomes (a latency number, a time saved, a cost avoided). Get numbers even if approximate, and get written permission before naming anyone; without permission, "a logistics company with six franchises" is fine. One real record outranks all three worked examples, so ship one card if that's all you have.
- **`§02 Engagement` — prices.** They're USD starting figures for a senior offshore engineer. Adjust to your market. If you'd rather not publish numbers, delete the `.tiers` and `.rates` blocks and keep only the "Discovery & scope" card — but see PLAYBOOK §2 for why publishing them filters out time-wasters.
- **`Based in Craigieburn, Victoria · working with teams…`** — the line under the contact channels. Correct it if you relocate.

## 2. Assets

- **`assets/og.png` — done.** 1200×630 social preview, in the site's own colours. This is what shows on LinkedIn/WhatsApp when the link is shared, so it matters more than it sounds. To regenerate it after a name or tagline change, re-run the generator script (see §7).
- **`assets/madhu-salaria-cv.pdf` — one print away.** The source is `assets/capability-sheet.html`: a one-page capability sheet (services, stack, case records, engagement terms, contact) rather than a job-hunting CV. To produce the PDF:

  1. Open `assets/capability-sheet.html` in Chrome → `Ctrl+P`
  2. Destination **Save as PDF**, Paper **A4**, Margins **None**, Scale **Default**
  3. **Untick** "Headers and footers", **tick** "Background graphics"
  4. Save as `assets/madhu-salaria-cv.pdf`

  It uses the same placeholder strings as `index.html`, so the §1 find-and-replace pass fixes both files at once. Re-print the PDF after you edit it.

  **It is tuned to fill exactly one A4 page**, with about 7mm to spare. If you add copy, confirm it still fits before printing — trimming one worked example is the easiest way back under. A capability sheet that spills onto a second page with three lines on it looks careless.

## 3. Contact form (5 minutes, free, no backend)

The form posts to [Web3Forms](https://web3forms.com) — free tier, 250 submissions/month, no account server-side.

1. Go to web3forms.com, enter your email, get an access key by email.
2. Paste it into `index.html` → `value="YOUR_WEB3FORMS_ACCESS_KEY"`.
3. Submit the form once yourself to confirm it lands.

Until the key is set, the form shows "Form key not set" instead of failing silently.
Alternatives: [Formspree](https://formspree.io) (50/mo), or Netlify Forms (100/mo) if you host on Netlify — for Netlify just add `data-netlify="true"` to the `<form>` tag and drop the fetch handler.

## 4. Hosting — free options, ranked

**#1 — Cloudflare Pages.** Use this. Unlimited bandwidth on the free plan, global CDN, free SSL, free custom domain, and no "hobby projects only" clause — so it's fine for a business site.

**Fastest route — direct upload, no GitHub needed.** The repo is already initialised and committed.

```powershell
cd C:\Users\karan\dev\portfolio
npx wrangler login                                        # one-time browser sign-in
npx wrangler pages deploy . --project-name=madhusalaria   # live in ~30 seconds
```

> **The project name must be `madhusalaria`** — the canonical URL, OG tags, JSON-LD, `robots.txt` and `sitemap.xml` all point at `https://madhusalaria.pages.dev/`. If that name is taken, pick another and immediately run
> `.\tools\personalise.ps1 -Domain "<newname>.pages.dev"` so the metadata matches, then redeploy. A mismatched `og:url` breaks the LinkedIn/WhatsApp link preview.

Re-run the `pages deploy` line any time to publish changes.

**Alternative — connect a Git repo** so every push redeploys automatically: push to GitHub, then dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git → pick the repo → **Framework preset: None**, build command *(empty)*, output directory `/` → Deploy.

**#2 — GitHub Pages.** Simplest if the code is already on GitHub. Repo → Settings → Pages → Source: `main`, folder `/ (root)`. You get `yourname.github.io/portfolio`, or name the repo `yourname.github.io` for a clean `yourname.github.io` URL. Custom domains and SSL are free. Slower cache invalidation than Cloudflare, no preview deploys.

**#3 — Netlify.** Best if you want the built-in form handling. You can literally drag the folder onto app.netlify.com/drop with no git at all. Free tier: 100 GB bandwidth/month, 100 form submissions/month.

**Vercel** — great product, but the Hobby (free) plan is for non-commercial use, and a site selling your services is commercial. Don't put this one there.

### Custom domain
Not free, and worth the money — `madhusalaria.dev` on a proposal reads differently from `madhusalaria.github.io`. About **$10–12/year** for a `.com` or `.dev`. Buy at [Cloudflare Registrar](https://dash.cloudflare.com) (sells at wholesale cost, no renewal markup) or Namecheap. Then in Cloudflare Pages → Custom domains → add it; DNS and SSL are automatic.

## 5. Free extras worth 20 minutes each

- **Email on your domain, free** — Cloudflare Email Routing forwards `hi@yourdomain.com` → your Gmail. Then in Gmail: Settings → Accounts → *Send mail as* → add the address via Gmail's SMTP so replies come **from** your domain. Costs nothing and instantly looks like a business rather than a side hustle.
- **Analytics** — Cloudflare Web Analytics (free, no cookie banner needed) or [Umami Cloud](https://umami.is) free tier. Add the snippet before `</body>`.
- **Booking** — Calendly free tier or [Cal.com](https://cal.com) free. Put a 30-minute "Project scoping call" event on it and link it from the contact section.
- **Live demo apps.** This is the real credibility multiplier — see PLAYBOOK §3 for where to host a live Spring Boot backend for free.

## 6. Design notes (so edits don't fight the design)

- **All colour lives in CSS custom properties** at the top of `index.html`, defined four times: `:root` (light), the `prefers-color-scheme: dark` media query, then `[data-theme="dark"]` and `[data-theme="light"]` so the manual toggle overrides the OS in both directions. Change a colour in all four places or the themes will drift.
- **Type**: monospace for headings and data labels, serif (`Charter`/`Palatino`/`Georgia`) for body copy — a technical-datasheet pairing, and the inverse of the usual sans+mono dev portfolio. Deliberately system fonts only: no webfont request, so nothing flashes or fails on a slow connection.
- **Structure**: each section is a `.sheet` with a left metadata gutter (`§01 / SERVICES`) and a content column, separated by full-width hairlines that draw themselves in on scroll. Square corners and hairlines throughout — no shadows, no rounded cards.
- **Accessibility**: skip link, visible focus rings, `aria-current` on the active nav item, native `<details>` for the FAQ, and all motion disabled under `prefers-reduced-motion`. Keep these when you edit.
- Adding a section? Copy an existing `<section class="sheet">` block, bump the `§` number, and add the nav link.

## 7. Regenerating the social preview

`assets/og.png` is generated, not hand-drawn, so it stays in sync with the site. After changing your name, tagline or the palette:

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\make-og.ps1
```

Edit the strings and colours near the top of `tools/make-og.ps1` first — the hex values there mirror the dark-theme custom properties in `index.html`. It uses only Windows system fonts (Consolas + Georgia) and .NET drawing, so there is nothing to install.

## 8. Previewing the site locally

Opening `index.html` straight from disk works fine. If you'd rather serve it over HTTP (closer to production, and required if you add anything that fetches):

```powershell
npx serve C:\Users\karan\dev\portfolio      # or: py -m http.server 8787
```
