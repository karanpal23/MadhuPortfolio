export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#studio", label: "Studio" },
  { href: "#voices", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

/* --- Trust bar -------------------------------------------------- */

export type Rating = {
  stars: number;
  label: string;
  source: string;
};

export const rating: Rating = {
  stars: 5,
  label: "5.0 average client rating",
  source: "Verified reviews · Placeholder — swap once real",
};

export const clientLabel = "Trusted by teams building at";

/* --- Impact stats ---------------------------------------------- */

export type Stat = { value: string; italic?: string; label: string };

export const stats: Stat[] = [
  { italic: "15", value: "+ yrs", label: "Shipping software" },
  { italic: "40k", value: "+", label: "Posts published / month at peak" },
  { italic: "99.7", value: "%", label: "Publish success rate" },
  { italic: "24", value: " hrs", label: "Response time to enquiries" },
];

/* --- Services -------------------------------------------------- */

export type Service = {
  id: string;
  title: string;
  body: string;
  tag?: string;
  span: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  meta?: string[];
  icon: "shield" | "cycle" | "grid" | "chart";
};

export const services: Service[] = [
  {
    id: "custom",
    title: "Custom applications, built end-to-end",
    body:
      "Product discovery, architecture, and a shippable slice within two weeks. We take ownership from empty repo to production release.",
    tag: "Flagship",
    span: 4,
    rowSpan: 2,
    meta: ["Web · Mobile · API", "Fixed-price or T&M"],
    icon: "shield",
  },
  {
    id: "support",
    title: "Maintenance & support retainers",
    body: "Bucketed hours, SLA-backed, weekly reporting.",
    tag: "Recurring",
    span: 2,
    rowSpan: 2,
    icon: "cycle",
  },
  {
    id: "modernization",
    title: "Legacy modernization",
    body:
      "WordPress → Next.js, jQuery → React, old Spring monoliths → modular services. Migrated with zero-downtime playbooks.",
    span: 3,
    icon: "grid",
  },
  {
    id: "performance",
    title: "Performance & QA",
    body:
      "Load testing with JMeter, latency profiling, CI/CD pipelines. Numbers you can put in front of your board.",
    span: 3,
    icon: "chart",
  },
];

/* --- Expertise domains ---------------------------------------- */

export type Domain = {
  title: string;
  body: string;
  points: string[];
  icon: "health" | "auth" | "graph";
};

export const domains: Domain[] = [
  {
    title: "Health tech",
    body:
      "Patient portals, telehealth platforms, allied-health practice tools. Built with HIPAA, GDPR, and regional health data regulations in mind from day one.",
    points: ["HIPAA & GDPR ready", "FHIR / HL7 interoperability", "Audit-grade logging"],
    icon: "health",
  },
  {
    title: "Secure authentication",
    body:
      "Biometric onboarding, WebAuthn, KYC flows. We've integrated fingerprint and face authentication into production apps for fintech and workforce systems.",
    points: ["WebAuthn / FIDO2", "Biometric SDK integrations", "KYC & identity flows"],
    icon: "auth",
  },
  {
    title: "Complex integrations",
    body:
      "Multi-platform social publishing, marketplace sync, payment gateways. If it needs OAuth, webhooks, rate-limit handling, and retries — we've done it.",
    points: ["Meta Graph & YouTube APIs", "OAuth flows at scale", "Webhook & queue systems"],
    icon: "graph",
  },
];

/* --- Process -------------------------------------------------- */

export type Step = { n: string; title: string; italic: string; body: string };

export const process: Step[] = [
  {
    n: "01 · Discovery",
    title: "Understand",
    italic: "what you're actually solving",
    body:
      "A structured week of interviews, requirements, and scope. You leave with a written proposal and a fixed price for the prototype.",
  },
  {
    n: "02 · Prototype",
    title: "A working",
    italic: "slice in two weeks",
    body:
      "The riskiest part of the product, built early. If we misread the requirements, we find out cheaply.",
  },
  {
    n: "03 · Build",
    title: "Weekly demos.",
    italic: "Nothing hidden",
    body:
      "Two-week sprints, live staging environment, and a demo every Friday. You approve each release.",
  },
  {
    n: "04 · Care",
    title: "Ship, then",
    italic: "stay",
    body:
      "Most agencies vanish at launch. Our retainers make sure the thing we built keeps working — and evolves with your business.",
  },
];

/* --- Work / case studies ------------------------------------- */

export type CaseStudy = {
  slug: string;
  mockup: "health" | "auth" | "social";
  tag: string;
  title: string;
  italic: string;
  tail?: string;
  body: string;
  stack: string[];
  metrics: { val: string; italic?: string; label: string }[];
};

export const cases: CaseStudy[] = [
  {
    slug: "regional-health",
    mockup: "health",
    tag: "Health · Web platform",
    title: "A patient portal for a",
    italic: "regional allied-health",
    tail: "network",
    body:
      "Consolidated three legacy systems into a single React + Spring Boot platform with FHIR-based data exchange, appointment booking, and audit-grade logging.",
    stack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    metrics: [
      { italic: "3", val: " → 1", label: "Legacy systems consolidated" },
      { italic: "67%", val: "", label: "Booking latency reduction" },
      { italic: "14", val: "", label: "Weeks to production" },
      { italic: "HIPAA", val: "", label: "Compliance ready" },
    ],
  },
  {
    slug: "biometric-wallet",
    mockup: "auth",
    tag: "Fintech · Biometric onboarding",
    title: "Face & fingerprint onboarding for a",
    italic: "digital wallet",
    body:
      "Replaced a slow document-scan KYC with a WebAuthn + biometric SDK flow. Cut onboarding drop-off by more than half and passed third-party security audit on first attempt.",
    stack: ["Angular", "Node.js", "WebAuthn", "GCP"],
    metrics: [
      { italic: "54%", val: "", label: "Drop-off reduction" },
      { italic: "<12s", val: "", label: "Onboarding time" },
      { italic: "1st", val: "", label: "Audit pass, no changes" },
      { italic: "0", val: "", label: "Critical incidents, 9 months" },
    ],
  },
  {
    slug: "social-publishing",
    mockup: "social",
    tag: "MarTech · Multi-platform publishing",
    title: "One post, published",
    italic: "everywhere.",
    body:
      "Built a publishing engine that pushes video, images, and copy to Instagram, Facebook, and YouTube from a single interface — handling rate limits, token refresh, and platform-specific quirks.",
    stack: ["React", "Node.js", "Meta Graph", "YouTube API"],
    metrics: [
      { italic: "40k+", val: "", label: "Posts / month at peak" },
      { italic: "99.7%", val: "", label: "Publish success rate" },
      { italic: "3", val: "", label: "Platforms, one workflow" },
      { italic: "~800ms", val: "", label: "Median publish time" },
    ],
  },
];

/* --- Studio ---------------------------------------------------- */

export type Principle = { n: string; title: string; body: string };

export const principles: Principle[] = [
  {
    n: "01 · Principle",
    title: "Senior engineers only",
    body:
      "No junior developers billed at senior rates. The people who scope the work are the people who build it.",
  },
  {
    n: "02 · Principle",
    title: "Weekly demos, always",
    body:
      "Every Friday you see working software on staging. No screenshots, no “trust us” — actual clickable progress.",
  },
  {
    n: "03 · Principle",
    title: "Fixed scope, fixed price",
    body:
      "Where scope is knowable, we quote it flat. No hidden hourly creep. Change requests are priced up front.",
  },
  {
    n: "04 · Principle",
    title: "Own it after launch",
    body:
      "Every project ships with a documented handover and an optional support retainer. We don't disappear.",
  },
];

export type Member = {
  initial: string;
  role: string;
  name: string;
  italic: string;
  bio: string;
  gradient: [string, string];
  links: { kind: "linkedin" | "github" | "email"; href: string }[];
};

export const team: Member[] = [
  {
    initial: "K",
    role: "Co-founder · Engineering",
    name: "Karan",
    italic: "Pal",
    gradient: ["var(--accent)", "var(--accent-warm)"],
    bio:
      "Years of hands-on experience shipping full-stack applications across React, Angular, Spring Boot, and Node. Leads technical delivery — architecture, code review, and the parts of the project where the coffee cools quickest.",
    links: [
      { kind: "linkedin", href: "#" },
      { kind: "github", href: "#" },
    ],
  },
  {
    initial: "A",
    role: "Co-founder · Operations",
    name: "Aditya",
    italic: "",
    gradient: ["#4a7bff", "#a044ff"],
    bio:
      "Runs client relationships, scoping, and delivery. The person who makes sure a project starts on the right foot and lands where you expected.",
    links: [
      { kind: "linkedin", href: "#" },
      { kind: "email", href: "mailto:madhusalaria1996@gmail.com" },
    ],
  },
  {
    initial: "M",
    role: "Co-founder · Growth",
    name: "Madhu",
    italic: "Salaria",
    gradient: ["#2ec27e", "#3584e4"],
    bio:
      "Handles positioning, content, and SEO — the reason you found this page. Also owns documentation and client contracts.",
    links: [
      { kind: "linkedin", href: "#" },
      { kind: "email", href: "mailto:madhusalaria1996@gmail.com" },
    ],
  },
];

/* --- Tech stack (rendered as logos) --------------------------- */

export type TechChip = { name: string; kind: string };

export const techStack: TechChip[][] = [
  [
    { name: "React", kind: "react" },
    { name: "Next.js", kind: "next" },
    { name: "Angular", kind: "angular" },
    { name: "TypeScript", kind: "typescript" },
    { name: "Spring Boot", kind: "spring" },
    { name: "Node.js", kind: "node" },
    { name: "PostgreSQL", kind: "postgres" },
    { name: "Tailwind", kind: "tailwind" },
  ],
  [
    { name: "AWS", kind: "aws" },
    { name: "Docker", kind: "docker" },
    { name: "Kubernetes", kind: "k8s" },
    { name: "GitHub Actions", kind: "github" },
    { name: "JMeter", kind: "jmeter" },
    { name: "React", kind: "react" },
    { name: "Spring Boot", kind: "spring" },
    { name: "Node.js", kind: "node" },
  ],
];

/* --- Testimonials --------------------------------------------- */

export type Testimonial = {
  initial: string;
  gradient: [string, string];
  quote: string;
  emphasis: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    initial: "M",
    gradient: ["#4a7bff", "#a044ff"],
    quote:
      "The demo-every-Friday cadence changed how our team thought about the project. Nothing was ever a surprise.",
    emphasis: "Nothing was ever a surprise.",
    name: "M. Alvarado",
    role: "Head of Product",
    company: "Health SaaS (placeholder)",
  },
  {
    initial: "R",
    gradient: ["#2ec27e", "#3584e4"],
    quote:
      "We interviewed four agencies. CodesFoundry was the only one who came back with a fixed price and stuck to it. Shipped on the exact day they promised.",
    emphasis: "Shipped on the exact day they promised.",
    name: "R. Nguyen",
    role: "CTO",
    company: "Fintech (placeholder)",
  },
  {
    initial: "J",
    gradient: ["var(--accent)", "var(--accent-warm)"],
    quote:
      "Nine months in, our support retainer has paid for itself twice over. Every incident gets a real engineer, not a ticket queue.",
    emphasis: "A real engineer, not a ticket queue.",
    name: "J. Whitmore",
    role: "COO",
    company: "MarTech (placeholder)",
  },
];

/* --- Journal --------------------------------------------------- */

export type Post = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  italic: string;
  tail?: string;
  excerpt: string;
  cover: "grid" | "wave" | "circles";
};

export const posts: Post[] = [
  {
    slug: "hipaa-patient-portal-spring-boot",
    category: "Health",
    readTime: "12 min read",
    title: "Building a",
    italic: "HIPAA-compliant",
    tail: "patient portal with Spring Boot",
    excerpt:
      "What HIPAA and GDPR actually require of a health app, and the concrete architecture we use to meet them without slowing the team down.",
    cover: "grid",
  },
  {
    slug: "meta-graph-api-gotchas",
    category: "Integrations",
    readTime: "9 min read",
    title: "Meta Graph API rate limits: the",
    italic: "gotchas",
    tail: "nobody documents",
    excerpt:
      "A field guide to the token, quota, and retry landscape we learned the hard way, publishing 40,000 posts a month across Instagram and Facebook.",
    cover: "wave",
  },
  {
    slug: "spring-boot-load-testing-jmeter",
    category: "Performance",
    readTime: "15 min read",
    title: "Load testing a Spring Boot API from",
    italic: "100 to 10,000",
    tail: "concurrent users",
    excerpt:
      "Our JMeter methodology, the profiling tools we reach for, and the three optimizations that account for most real-world latency wins.",
    cover: "circles",
  },
];

/* --- Photography (swap URLs when real assets exist) ----------- */
/* Currently using picsum.photos with seeds — guaranteed to load, seed
   keeps the same photo consistent across renders. Swap each URL for
   curated Unsplash / your own photos when you're ready. Both hosts
   are already whitelisted in next.config.mjs. */

export const photography = {
  heroBackdrop: "https://picsum.photos/seed/forge-heat/1920/1080",
  studioBackdrop: "https://picsum.photos/seed/studio-workshop/1920/1080",
  journalCovers: {
    "hipaa-patient-portal-spring-boot": "https://picsum.photos/seed/health-portal/1200/700",
    "meta-graph-api-gotchas": "https://picsum.photos/seed/social-api/1200/700",
    "spring-boot-load-testing-jmeter": "https://picsum.photos/seed/perf-benchmark/1200/700",
  } as Record<string, string>,
  caseCovers: {
    "regional-health": "https://picsum.photos/seed/allied-health-portal/1200/800",
    "biometric-wallet": "https://picsum.photos/seed/biometric-security/1200/800",
    "social-publishing": "https://picsum.photos/seed/social-publishing/1200/800",
  } as Record<string, string>,
};

/* --- Meta ------------------------------------------------------ */

export const availability = "Taking projects for Q2 2026 · 2 slots";
export const contactEmail = "madhusalaria1996@gmail.com";
export const contactPhone = "+61 469 394 161";
export const contactPhoneHref = "+61469394161";
export const contactAddress = "Craigieburn, Victoria · Australia";
export const contactHours = "Mon – Fri · 9am – 6pm AEST";
