# Service business playbook

The site gets you taken seriously. This is the rest of it. Written for a senior Java/Spring Boot + Angular engineer selling delivery, not for a generic "freelancer".

---

## 1. Positioning — the one thing that changes everything

"Full-stack developer" competes with 400,000 people on price. **"I build production Spring Boot + Angular applications and hand them over documented and deployed"** competes with maybe a few hundred, and against agencies charging 4× your rate with worse communication.

Go one level narrower still if you can, on **domain** rather than technology:

- Spring Boot + Angular for **logistics / field service** (job cards, dispatch, tracking, offline PWAs)
- **Fintech-adjacent internal tools** (ledgers, reconciliation, payment webhooks, audit trails)
- **Manufacturing / ERP integrations** (Oracle and SQL Server legacy, batch jobs, reporting)
- **Legacy Java rescue** — Struts/JSP/old Spring MVC modernisation

Java shops are disproportionately enterprise, and enterprise buyers pay for *low risk*, not for cleverness. Everything in your pitch should say "this will not become my problem": fixed scope, weekly demos, tests, docs, a runbook, a warranty. That's why the site is styled like a spec sheet.

Pick your niche from the projects you've actually shipped in ten years. You already have the domain knowledge — the mistake is hiding it behind "full-stack developer".

## 2. Pricing

**Rules that matter more than the numbers:**

1. **Never quote on the first call.** "Let me put scope and a number in writing and send it tomorrow." Quoting live means guessing, and a guess is always either a loss or a lost deal.
2. **Sell a paid discovery first** ($300–500, credited against the build). It qualifies the buyer instantly, and it gets you paid for the estimating work you'd otherwise do free. Anyone who won't pay for discovery was never going to pay for the build.
3. **Quote a fixed price per outcome, not per hour**, once you can scope. Hourly caps your income at your typing speed and makes the client watch a clock instead of the result. Keep hourly for genuinely undefined work only.
4. **Milestones: 40 / 30 / 30**, first payment before any code. Non-negotiable — the advance is what separates a client from a hobbyist.
5. **Raise your price every third project** until you start losing one in three deals. If you win every deal you pitch, you are too cheap.

> ⚠️ **This section is still written for billing *from India* and is now out of date.** You're based in Craigieburn, VIC. The rate table below and the tax notes in §5 need replacing with Australian equivalents — an AU-resident contractor bills in AUD at local market rates (materially higher than the "local/domestic" column here), registers an ABN, and hits compulsory GST registration at $75k turnover, not ₹20 lakh. Treat everything currency- or tax-specific below as a placeholder until it's redone.

**Realistic 2026 ranges for a 10-year senior engineer billing from India:**

| | Direct client (US/UK/EU/AU) | Local / domestic | Via agency (white-label) |
|---|---|---|---|
| Hourly | $40–70 | ₹1,200–2,500 | $25–40 |
| 2-week sprint | $2,500–4,500 | ₹1.2–2.5 L | $1,800–3,000 |
| Full app build (6–8 wk) | $6,000–18,000 | ₹4–12 L | — |
| Monthly retainer (part-time) | $2,000–4,500 | ₹1.5–3.5 L | $1,600–3,000 |

Upwork will push you towards $20–25/hr. Take it only to buy your first three reviews, then leave. The published site + LinkedIn + referrals is how you get to the top of that table.

**Always add:** a change-order clause, a defined revision boundary, taxes stated separately, and cloud/licence costs billed to the client's own accounts (never yours — you don't want to be a reseller of AWS credits).

## 3. Proof beats every other marketing activity

Nobody hires a Java contractor off a headline. They hire off *evidence*. In priority order:

1. **Two flagship demo applications, live, with source.** Not to-do apps. Build something with the shape of real business software: multi-tenant, role-based, with payments, background jobs, file uploads, audit log, and a real deploy pipeline. Suggestions that match the niches above:
   - *Field-service dispatch*: jobs, technicians, offline-capable Angular PWA, photo evidence, supervisor approvals.
   - *Subscription billing console*: Stripe/Razorpay webhooks, idempotent ledger, dunning, proration, invoice PDFs.
   Each one gets a live URL, a public GitHub repo with a genuinely good README, an architecture diagram, seeded demo login credentials on the login screen, and a 3-minute Loom walkthrough. This is worth more than fifty applications sent.
2. **Case records in the site's format** — problem / built / stack / measured outcome. Get numbers even if approximate, and get written permission before naming anyone. No permission → "a logistics company with six franchises".
3. **A written testimonial with a real name and company.** Ask on the day you deliver, while they're happy. Make it easy: "Would you mind three lines on what we built and what changed? Here's a draft you can edit."
4. **Public technical writing.** One deep post a month on something you actually debugged — Hibernate N+1 in a real report, Angular change detection killing a 5,000-row grid, Kafka consumer rebalancing. Publish on LinkedIn and your own site. Depth is the whole point; generic "Top 10 Spring Boot tips" posts signal the opposite of seniority.

### Where to host live demos for free
Static site → Cloudflare Pages (see README §4). Backends are the harder part:

- **Oracle Cloud Always Free** — 4 ARM cores / 24 GB RAM VM, permanently free. Absurdly generous, and by far the best option for a JVM demo: run Docker Compose with Spring Boot + Postgres + Nginx and never sleep. Set it up once, host every demo on it.
- **Render** free web service — easiest path, but spins down after 15 min idle and cold-starts a JVM slowly (~50s). Acceptable only if the demo page warns the visitor.
- **Fly.io / Koyeb** — small always-on free allowances, better cold starts than Render.
- **Neon** or **Supabase** — free managed Postgres, generous limits.
- **Cloudflare Workers** — free tier for any Node/JS side projects.

Put a "Live demo" link with credentials directly in the `§03 Work` cards once these are up. That single change converts better than any copy edit.

## 4. Getting the first clients, in order of what actually works

1. **Your own network.** Every ex-colleague, ex-manager, and ex-client from ten years of work. Not a broadcast — individual messages: *"I've started taking on Spring Boot + Angular builds independently. If your team ever needs an extra pair of hands or knows someone stuck on a Java project, I'd appreciate the introduction."* This produces more revenue in month one than everything else combined. Send 40 of them in week one.
2. **Agencies and studios as a white-label subcontractor.** Design and WordPress agencies constantly win projects with a Java or Angular component they can't staff. Lower rate, but zero sales effort and repeat volume. Target 20 small agencies in your city and in the US/UK; offer to be their backend partner.
3. **LinkedIn, consistently.** Two posts a week, both technical. Rewrite your headline to your offer ("I build and deploy Spring Boot + Angular applications for logistics teams" — not "Senior Software Engineer | Java | Angular | Passionate coder"). Add the featured link to your site. Comment substantively on posts from CTOs in your niche — that's where inbound actually starts.
4. **Upwork / Toptal**, first three months only, to convert reviews into credibility. Toptal's screening is worth passing if you can — it removes the price race entirely.
5. **Cold email, narrow and specific.** 30 companies you can name a real problem for ("your customer portal takes 9 seconds to load a report and it's an unindexed join — here's the fix"). Ten thoughtful emails beat a thousand templated ones.
6. **Local businesses for the WordPress line.** Low value per project, but fast cash and referral flow while the bigger builds close.

Aim for **one signed project by week six**, not week one. The pipeline lags the effort by about a month.

## 5. Contracts and operations (the boring part that saves you)

Never start on a verbal agreement, not even for a friend. You need one 3-page contract you reuse:

- **Scope** — a bullet list of what's included, plus an explicit *"not included"* list. The second list prevents more disputes than the first.
- **IP assignment on final payment.** Until then the code is licensed, not transferred. This is your only real leverage.
- **Change orders** — any new screen, entity or integration is priced separately in writing before work starts.
- **Payment terms** — 40/30/30, net-7, and a clause that work pauses on overdue invoices.
- **Warranty vs new work** — 30 days of bug fixes free; a bug is "does not match the spec", anything else is a change.
- **Kill fee** — if the client cancels, work completed to date is payable and the advance is non-refundable.
- **Liability cap** at the project value, and no liability for third-party outages.

Get a lawyer to review it once (a few hundred dollars, reused for years). Then:

| Need | Free / cheap tool |
|---|---|
| Invoicing | Zoho Invoice (free), Wave |
| e-Signature | Dropbox Sign, Zoho Sign free tier |
| Proposals | Google Docs from a template you refine each time |
| Time logs | Toggl free |
| Project tracking | Linear free, or the client's Jira |
| Client updates | Loom free — a 3-minute Friday demo video is the single highest-leverage habit in this business |
| Getting paid | Wise Business or Payoneer for USD/EUR/GBP; far cheaper than SWIFT into an Indian bank |

> ⚠️ **Out of date — written for India.** Now that you're in Australia this paragraph does not apply: there is no LUT, no FIRC, and no ₹20 lakh threshold. What you actually need is an ABN, a decision on GST registration (compulsory above $75k turnover), and a talk with an Australian accountant about PAYG instalments and whether to trade as a sole trader or a company. Ask me to rewrite this section and I will.

**If you're invoicing from India:** register a sole proprietorship with a current account (a firm name on the invoice changes how you're perceived); GST registration is required above ₹20 lakh turnover but voluntary registration is often worth it earlier for credibility; **export of services is zero-rated — file an LUT so you don't pay GST on foreign invoices**; keep FIRC/FIRA advices from your bank for every inward remittance. Talk to a CA once before your first foreign invoice, not after your first tax notice.

## 6. Red flags — decline these, politely and immediately

- "We'll pay in equity" / "revenue share once we launch"
- No advance, or "pay on delivery" for a first project
- "It's a simple app like Uber" — no spec, and no willingness to pay for discovery
- The previous developer is still around and hostile, or still holds production access
- Unlimited revisions, or a scope described only verbally
- Three different people giving you contradictory requirements and no named decision-maker
- Pressure to start "today" without a signed document

Saying no to one bad project protects the two good ones you'd otherwise deliver badly. A polite decline: *"I don't think I'm the right fit for this one, and I'd rather tell you now than three weeks in."*

## 7. First 30 days — a concrete checklist

**Week 1**
- [ ] Fill in every placeholder in `index.html` (README §1) and deploy to Cloudflare Pages
- [ ] Buy the domain; set up Cloudflare Email Routing + Gmail "send as"
- [ ] Rewrite LinkedIn headline, About and Featured link to match the site
- [ ] Send 40 individual messages to your network

**Week 2**
- [ ] Set up the Oracle Cloud Always Free VM with Docker + Nginx + Postgres
- [ ] Start flagship demo #1; public repo from commit one
- [ ] Draft the contract, proposal and discovery-call question list
- [ ] Set up Calendly, Zoho Invoice, Toggl, Loom

**Week 3**
- [ ] Ship demo #1 live with seeded credentials; write it up as `CASE-01`
- [ ] Replace a `Worked example` card in `§03` with your first real, measured case record
- [ ] Contact 20 agencies about subcontract work
- [ ] Publish technical post #1

**Week 4**
- [ ] Start flagship demo #2
- [ ] 10 targeted cold emails naming a specific problem
- [ ] Ask two past clients or managers for written testimonials
- [ ] Add analytics; review what the site's traffic actually does
- [ ] Book at least three discovery calls

Then repeat weeks 3–4 forever. Consistency beats intensity: two posts and five outreach messages a week, every week, out-earns a burst of activity followed by silence.

---

**The single highest-leverage habit:** send a 3-minute Loom demo every Friday for every active project. Clients renew, refer and pay premium rates for the *feeling of knowing what's happening* — which almost no contractor provides. That habit, more than your code, is what turns a one-off build into a retainer.
