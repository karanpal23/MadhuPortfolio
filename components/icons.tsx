import type { JSX, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------- Brand mark ---------- */

export function LogoMark(p: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...p}>
      <defs>
        <radialGradient id="cf-ember" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--accent-hot)" stopOpacity="1" />
          <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <filter id="cf-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>
      <circle cx="22" cy="22" r="21" fill="none" stroke="var(--brand-ring)" strokeWidth="1" />
      <circle cx="22" cy="22" r="17" fill="none" stroke="var(--brand-ring)" strokeWidth="1" opacity="0.75" />
      <circle cx="22" cy="22" r="13" fill="none" stroke="var(--brand-ring)" strokeWidth="1" opacity="1" />
      <circle cx="22" cy="22" r="10" fill="var(--brand-disc)" />
      <circle cx="22" cy="22" r="9.5" fill="url(#cf-ember)" filter="url(#cf-glow)" />
      <circle cx="22" cy="22" r="9.5" fill="url(#cf-ember)" opacity="0.85" />
      <text
        x="22"
        y="26.5"
        textAnchor="middle"
        fontFamily="var(--font-display), Georgia, serif"
        fontStyle="italic"
        fontSize="12"
        fontWeight="500"
        fill="#ffffff"
        letterSpacing="-0.3"
      >
        CF
      </text>
    </svg>
  );
}

/* ---------- Service icons ---------- */

export function ShieldCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Cycle(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20a8 8 0 1 0-8-8" />
      <path d="M12 8v4l3 2" />
      <path d="M4 12H2M6 6l-1.5-1.5" />
    </svg>
  );
}

export function GridPlus(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
      <path d="M10 7h4M10 17h4M7 10v4M17 10v4" />
    </svg>
  );
}

export function Chart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-7" />
    </svg>
  );
}

/* ---------- Domain icons ---------- */

export function Heart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11h-4z" />
      <path d="M9 13h2v-2h2v2h2v2h-2v2h-2v-2H9z" />
    </svg>
  );
}

export function Auth(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="10" r="4" />
      <path d="M12 14v3M8 20h8M6 8a6 6 0 0 1 12 0" />
    </svg>
  );
}

export function Graph(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
    </svg>
  );
}

/* ---------- UI icons ---------- */

export function Sun(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function StarFilled(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="m12 2 3 6.5 7 1-5 5 1 7-6-3.5L6 21.5l1-7-5-5 7-1z" />
    </svg>
  );
}

export function Quote(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M6 4h4v6c0 4-2 6-6 6v-3c2 0 3-1 3-3H6zm10 0h4v6c0 4-2 6-6 6v-3c2 0 3-1 3-3h-1z" />
    </svg>
  );
}

/* ---------- Social ---------- */

export function LinkedIn(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.64 4.76 6.08V21h-4v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V21H10z" />
    </svg>
  );
}

export function GitHub(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function X(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-5.4-7.05L4 22H.74l8.03-9.17L1 2h7.05l4.88 6.46zm-2.42 18h1.9L7.28 4h-2z" />
    </svg>
  );
}

export function Mail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Phone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MapPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 22s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function Clock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/* ---------- Australia map (schematic) ---------- */

export function AustraliaMap(p: IconProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" {...p}>
      <defs>
        <linearGradient id="au-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--surface-2)" />
          <stop offset="1" stopColor="var(--surface)" />
        </linearGradient>
      </defs>
      {/* Simplified Australia outline */}
      <path
        d="M78 128
           C 72 110, 88 92, 108 92
           L 132 84
           C 148 78, 168 82, 176 96
           L 192 108
           C 208 100, 228 104, 234 116
           L 260 118
           C 280 116, 296 124, 302 138
           L 320 148
           C 336 156, 344 172, 340 188
           L 340 208
           C 340 224, 328 240, 312 244
           L 288 254
           C 272 260, 254 258, 242 250
           L 224 258
           C 208 264, 190 260, 182 248
           L 168 244
           C 152 246, 138 240, 132 228
           L 116 224
           C 100 220, 88 208, 88 192
           L 82 172
           C 76 160, 74 144, 78 128 Z"
        fill="url(#au-fill)"
        stroke="var(--rule-strong)"
        strokeWidth="1.2"
      />
      {/* Tasmania */}
      <ellipse cx="280" cy="278" rx="14" ry="10" fill="url(#au-fill)" stroke="var(--rule-strong)" strokeWidth="1.2" />

      {/* Grid dots (decorative) */}
      <g fill="var(--rule-strong)" opacity="0.5">
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 12 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={40 + c * 30} cy={40 + r * 30} r="1" />
          ))
        )}
      </g>

      {/* Melbourne pin (Craigieburn is just north of Melbourne) */}
      <g transform="translate(272 244)">
        <circle r="18" fill="var(--accent)" opacity="0.18">
          <animate attributeName="r" values="14;22;14" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.25;0;0.25" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="var(--accent)" />
        <circle r="2" fill="#fff" />
      </g>

      {/* Label */}
      <g transform="translate(272 244)">
        <line x1="0" y1="0" x2="34" y2="-30" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="34" y="-46" width="86" height="24" rx="4" fill="var(--surface)" stroke="var(--rule-strong)" />
        <text
          x="77"
          y="-30"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          fontWeight="600"
          fill="var(--text)"
          letterSpacing="0.5"
        >
          CRAIGIEBURN
        </text>
      </g>
    </svg>
  );
}

/* ---------- Tech logos (brand-neutral abstractions) ---------- */

export function TechReact(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
      <ellipse cx="16" cy="16" rx="11" ry="4.3" />
      <ellipse cx="16" cy="16" rx="11" ry="4.3" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.3" transform="rotate(120 16 16)" />
    </svg>
  );
}

export function TechAngular(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" {...p}>
      <path d="M16 3 4 7l2 18 10 4 10-4 2-18z" />
      <path d="m11 21 5-12 5 12M13 17h6" />
    </svg>
  );
}

export function TechTS(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <rect x="4" y="4" width="24" height="24" rx="3" opacity=".18" />
      <text x="16" y="21" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700" fontSize="10" fill="currentColor">TS</text>
    </svg>
  );
}

export function TechNext(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="16" cy="16" r="12" />
      <path d="M11 10v12M11 10l10 12" strokeWidth="2" />
      <path d="M20 10v6" strokeWidth="2" />
    </svg>
  );
}

export function TechSpring(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" {...p}>
      <path d="M24 6c4 5 3 15-4 19s-16 1-16-6c0-5 3-7 7-7 3 0 5 2 5 4s-1 3-3 3" />
      <circle cx="24" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TechNode(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...p}>
      <path d="M16 3 4 10v12l12 7 12-7V10z" />
      <path d="M12 13v6c0 1 1 2 2 2s2-1 2-2v-6M18 13h4c1 0 2 1 2 2s-1 2-2 2h-2c-1 0-2 1-2 2s1 2 2 2h4" />
    </svg>
  );
}

export function TechPostgres(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" {...p}>
      <ellipse cx="16" cy="7" rx="10" ry="3" />
      <path d="M6 7v18c0 2 4 3 10 3s10-1 10-3V7" />
      <path d="M6 13c0 2 4 3 10 3s10-1 10-3M6 19c0 2 4 3 10 3s10-1 10-3" opacity=".5" />
    </svg>
  );
}

export function TechAWS(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <path d="M6 22c2 1 5 2 10 2s8-1 10-2v3c-2 1-5 2-10 2s-8-1-10-2z" opacity=".8" />
      <text x="16" y="18" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="700" fontSize="10">aws</text>
    </svg>
  );
}

export function TechDocker(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <rect x="4" y="14" width="4" height="4" rx=".5" />
      <rect x="9" y="14" width="4" height="4" rx=".5" />
      <rect x="14" y="14" width="4" height="4" rx=".5" />
      <rect x="19" y="14" width="4" height="4" rx=".5" />
      <rect x="9" y="9" width="4" height="4" rx=".5" />
      <rect x="14" y="9" width="4" height="4" rx=".5" />
      <rect x="19" y="9" width="4" height="4" rx=".5" />
      <rect x="14" y="4" width="4" height="4" rx=".5" />
      <path d="M4 20c2 3 6 4 12 4s10-1 12-4c0-1-1-2-3-2-1-2-3-2-4-1-1-1-3-1-4 0-1-1-2-1-3 0" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function TechGitHub(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <path d="M16 3a13 13 0 0 0-4 25.3c.6.1.9-.3.9-.6v-2.2c-3.7.8-4.4-1.7-4.4-1.7-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3 1.4 3.7 1.1.1-.9.5-1.4.9-1.7-2.9-.3-6-1.5-6-6.5 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.6.1-3.4 0 0 1.1-.3 3.6 1.3a12 12 0 0 1 6.5 0c2.5-1.6 3.6-1.3 3.6-1.3.7 1.8.3 3.1.1 3.4.8.9 1.3 2.1 1.3 3.5 0 5-3.1 6.1-6 6.5.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.9.6A13 13 0 0 0 16 3z" />
    </svg>
  );
}

export function TechK8s(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...p}>
      <polygon points="16,3 27,8 25,22 16,29 7,22 5,8" />
      <circle cx="16" cy="15" r="4" fill="currentColor" opacity=".2" />
    </svg>
  );
}

export function TechTailwind(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" {...p}>
      <path d="M6 16c2-5 5-5 8-3s5 3 8 0M6 24c2-5 5-5 8-3s5 3 8 0" />
    </svg>
  );
}

export function TechJMeter(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" {...p}>
      <path d="M4 26h24" />
      <path d="M16 26a10 10 0 1 1 10-10" />
      <path d="m16 26 6-8" strokeWidth="2" />
      <circle cx="22" cy="18" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------- Client logos (invented placeholder brands) ---------- */

export function LogoNorthwind(p: IconProps) {
  return (
    <svg viewBox="0 0 140 32" fill="currentColor" {...p}>
      <path d="M4 24V8h3l7 12V8h3v16h-3L7 12v12z" />
      <text x="26" y="21" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fontSize="12" letterSpacing="1.5">NORTHWIND</text>
    </svg>
  );
}

export function LogoAstra(p: IconProps) {
  return (
    <svg viewBox="0 0 120 32" fill="currentColor" {...p}>
      <path d="M8 22 14 8l6 14M10 18h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <text x="26" y="21" fontFamily="Georgia, serif" fontStyle="italic" fontSize="14">Astra</text>
    </svg>
  );
}

export function LogoPelham(p: IconProps) {
  return (
    <svg viewBox="0 0 130 32" fill="currentColor" {...p}>
      <circle cx="12" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="16" r="2" />
      <text x="24" y="21" fontFamily="ui-sans-serif, system-ui" fontWeight="500" fontSize="13" letterSpacing=".5">PELHAM &amp; CO</text>
    </svg>
  );
}

export function LogoMerridian(p: IconProps) {
  return (
    <svg viewBox="0 0 130 32" fill="currentColor" {...p}>
      <path d="M6 22V8l6 8 6-8v14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <text x="26" y="21" fontFamily="Georgia, serif" fontSize="13" letterSpacing=".8">Merridian</text>
    </svg>
  );
}

export function LogoOakleaf(p: IconProps) {
  return (
    <svg viewBox="0 0 130 32" fill="currentColor" {...p}>
      <path d="M12 4c4 3 6 7 6 12s-2 9-6 12c-4-3-6-7-6-12s2-9 6-12z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 4v24" stroke="currentColor" strokeWidth="1.6" />
      <text x="24" y="21" fontFamily="ui-sans-serif, system-ui" fontWeight="700" fontSize="13" letterSpacing="1">OAKLEAF</text>
    </svg>
  );
}

export function LogoSignal(p: IconProps) {
  return (
    <svg viewBox="0 0 130 32" fill="currentColor" {...p}>
      <rect x="4" y="18" width="3" height="8" />
      <rect x="9" y="14" width="3" height="12" />
      <rect x="14" y="10" width="3" height="16" />
      <rect x="19" y="6" width="3" height="20" />
      <text x="28" y="21" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fontSize="13" letterSpacing="1">SIGNAL/9</text>
    </svg>
  );
}

/* ---------- Case study mockups (SVG art) ---------- */

export function MockupHealth(p: IconProps) {
  return (
    <svg viewBox="0 0 400 260" fill="none" {...p}>
      {/* Browser chrome */}
      <rect x="0" y="0" width="400" height="260" rx="12" fill="var(--surface-2)" stroke="var(--rule-strong)" />
      <rect x="0" y="0" width="400" height="28" fill="var(--surface)" stroke="var(--rule-strong)" />
      <circle cx="14" cy="14" r="4" fill="#ff6b5c" opacity=".7" />
      <circle cx="28" cy="14" r="4" fill="#ffcc4d" opacity=".7" />
      <circle cx="42" cy="14" r="4" fill="#4dcc7a" opacity=".7" />
      <rect x="120" y="8" width="160" height="12" rx="6" fill="var(--surface-2)" />
      {/* Header */}
      <rect x="20" y="44" width="90" height="10" rx="2" fill="currentColor" opacity=".75" />
      <rect x="20" y="60" width="140" height="6" rx="2" fill="currentColor" opacity=".28" />
      {/* Card grid — patient tiles */}
      <g opacity=".9">
        <rect x="20" y="86" width="115" height="70" rx="8" fill="var(--surface)" stroke="var(--rule)" />
        <circle cx="38" cy="106" r="10" fill="var(--accent)" opacity=".75" />
        <rect x="54" y="100" width="55" height="6" rx="2" fill="currentColor" opacity=".55" />
        <rect x="54" y="112" width="35" height="4" rx="2" fill="currentColor" opacity=".3" />
        <rect x="28" y="128" width="80" height="4" rx="2" fill="currentColor" opacity=".22" />
        <rect x="28" y="138" width="60" height="4" rx="2" fill="currentColor" opacity=".22" />
      </g>
      <g opacity=".9">
        <rect x="143" y="86" width="115" height="70" rx="8" fill="var(--surface)" stroke="var(--rule)" />
        <circle cx="161" cy="106" r="10" fill="var(--accent-warm)" opacity=".8" />
        <rect x="177" y="100" width="55" height="6" rx="2" fill="currentColor" opacity=".55" />
        <rect x="177" y="112" width="35" height="4" rx="2" fill="currentColor" opacity=".3" />
        <rect x="151" y="128" width="80" height="4" rx="2" fill="currentColor" opacity=".22" />
        <rect x="151" y="138" width="60" height="4" rx="2" fill="currentColor" opacity=".22" />
      </g>
      <g opacity=".9">
        <rect x="266" y="86" width="115" height="70" rx="8" fill="var(--surface)" stroke="var(--rule)" />
        <circle cx="284" cy="106" r="10" fill="currentColor" opacity=".35" />
        <rect x="300" y="100" width="55" height="6" rx="2" fill="currentColor" opacity=".55" />
        <rect x="300" y="112" width="35" height="4" rx="2" fill="currentColor" opacity=".3" />
        <rect x="274" y="128" width="80" height="4" rx="2" fill="currentColor" opacity=".22" />
        <rect x="274" y="138" width="60" height="4" rx="2" fill="currentColor" opacity=".22" />
      </g>
      {/* Chart panel */}
      <rect x="20" y="170" width="361" height="76" rx="8" fill="var(--surface)" stroke="var(--rule)" />
      <path d="M35 226 L75 210 L115 218 L155 194 L195 202 L235 178 L275 190 L315 168 L360 182" stroke="var(--accent)" strokeWidth="2" fill="none" />
      <path d="M35 226 L75 210 L115 218 L155 194 L195 202 L235 178 L275 190 L315 168 L360 182 L360 240 L35 240 Z" fill="var(--accent)" opacity=".14" />
      <line x1="35" y1="240" x2="360" y2="240" stroke="currentColor" opacity=".2" />
    </svg>
  );
}

export function MockupAuth(p: IconProps) {
  return (
    <svg viewBox="0 0 400 260" fill="none" {...p}>
      {/* Phone frame */}
      <rect x="120" y="14" width="160" height="232" rx="24" fill="var(--surface)" stroke="var(--rule-strong)" strokeWidth="1.5" />
      <rect x="128" y="22" width="144" height="216" rx="18" fill="var(--surface-2)" />
      <rect x="180" y="24" width="40" height="6" rx="3" fill="var(--rule-strong)" />
      {/* Face-scan wireframe */}
      <g transform="translate(200 118)">
        <circle r="52" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity=".7" strokeDasharray="4 3" />
        <circle r="40" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".5" />
        <ellipse cx="0" cy="0" rx="22" ry="30" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".55" />
        <circle cx="-8" cy="-6" r="1.5" fill="currentColor" opacity=".7" />
        <circle cx="8" cy="-6" r="1.5" fill="currentColor" opacity=".7" />
        <path d="M-5 8 Q0 12 5 8" stroke="currentColor" strokeWidth="1.2" fill="none" opacity=".6" />
      </g>
      {/* Corner brackets */}
      <g stroke="var(--accent)" strokeWidth="1.5" fill="none">
        <path d="M148 78 v-10 h10" />
        <path d="M252 78 v-10 h-10" />
        <path d="M148 158 v10 h10" />
        <path d="M252 158 v10 h-10" />
      </g>
      {/* Status text lines */}
      <rect x="150" y="188" width="100" height="6" rx="2" fill="currentColor" opacity=".55" />
      <rect x="164" y="200" width="72" height="4" rx="2" fill="currentColor" opacity=".3" />
      {/* Verified pill */}
      <rect x="158" y="216" width="84" height="16" rx="8" fill="var(--accent)" opacity=".95" />
      <path d="M172 224 l4 4 l8-8" stroke="#fff" strokeWidth="1.5" fill="none" />
      <text x="192" y="227" fill="#fff" fontFamily="ui-sans-serif, system-ui" fontSize="7" fontWeight="600">VERIFIED</text>
    </svg>
  );
}

export function MockupSocial(p: IconProps) {
  return (
    <svg viewBox="0 0 400 260" fill="none" {...p}>
      {/* Browser chrome */}
      <rect x="0" y="0" width="400" height="260" rx="12" fill="var(--surface-2)" stroke="var(--rule-strong)" />
      <rect x="0" y="0" width="400" height="28" fill="var(--surface)" stroke="var(--rule-strong)" />
      <circle cx="14" cy="14" r="4" fill="#ff6b5c" opacity=".7" />
      <circle cx="28" cy="14" r="4" fill="#ffcc4d" opacity=".7" />
      <circle cx="42" cy="14" r="4" fill="#4dcc7a" opacity=".7" />
      {/* Left compose panel */}
      <rect x="20" y="48" width="180" height="196" rx="10" fill="var(--surface)" stroke="var(--rule)" />
      <rect x="34" y="64" width="90" height="8" rx="2" fill="currentColor" opacity=".65" />
      <rect x="34" y="86" width="152" height="90" rx="6" fill="var(--surface-2)" stroke="var(--rule)" strokeDasharray="3 3" />
      <g transform="translate(110 131)" opacity=".55">
        <rect x="-14" y="-10" width="28" height="20" rx="2" fill="currentColor" />
        <circle cx="6" cy="-4" r="2" fill="var(--surface-2)" />
        <path d="M-14 6 L-4 -2 L6 4 L14 -2 L14 10 L-14 10 Z" fill="var(--surface-2)" opacity=".8" />
      </g>
      <rect x="34" y="188" width="152" height="8" rx="2" fill="currentColor" opacity=".35" />
      <rect x="34" y="204" width="120" height="8" rx="2" fill="currentColor" opacity=".25" />
      <rect x="34" y="222" width="60" height="14" rx="3" fill="var(--accent)" opacity=".9" />
      {/* Right — platform destinations */}
      <g transform="translate(216 60)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0 ${i * 60})`}>
            <rect width="164" height="52" rx="10" fill="var(--surface)" stroke="var(--rule)" />
            <rect x="14" y="14" width="24" height="24" rx="6" fill="var(--accent)" opacity={0.9 - i * 0.15} />
            <rect x="48" y="16" width="60" height="6" rx="2" fill="currentColor" opacity=".55" />
            <rect x="48" y="28" width="90" height="4" rx="2" fill="currentColor" opacity=".28" />
            <circle cx="150" cy="26" r="5" fill="#4dcc7a" opacity=".85" />
            <path d="M147 26 l2 2 l4-4" stroke="#fff" strokeWidth="1.2" fill="none" />
          </g>
        ))}
      </g>
      {/* Bottom status */}
      <rect x="216" y="240" width="164" height="0" />
    </svg>
  );
}

/* ---------- Icon mappers ---------- */

export function serviceIcon(kind: "shield" | "cycle" | "grid" | "chart") {
  const map = { shield: ShieldCheck, cycle: Cycle, grid: GridPlus, chart: Chart };
  return map[kind];
}

export function domainIcon(kind: "health" | "auth" | "graph") {
  const map = { health: Heart, auth: Auth, graph: Graph };
  return map[kind];
}

export function techIcon(kind: string) {
  const map: Record<string, (p: IconProps) => JSX.Element> = {
    react: TechReact,
    angular: TechAngular,
    typescript: TechTS,
    next: TechNext,
    spring: TechSpring,
    node: TechNode,
    postgres: TechPostgres,
    aws: TechAWS,
    docker: TechDocker,
    github: TechGitHub,
    k8s: TechK8s,
    tailwind: TechTailwind,
    jmeter: TechJMeter,
  };
  return map[kind];
}

export function mockupFor(kind: "health" | "auth" | "social") {
  const map = { health: MockupHealth, auth: MockupAuth, social: MockupSocial };
  return map[kind];
}

export function clientLogos() {
  return [LogoNorthwind, LogoAstra, LogoPelham, LogoMerridian, LogoOakleaf, LogoSignal];
}
