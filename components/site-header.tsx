"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/content/site-data";
import { LogoMark, Sun } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const isDark =
      current === "dark" ||
      (!current && matchMedia("(prefers-color-scheme: dark)").matches);
    root.setAttribute("data-theme", isDark ? "light" : "dark");
  }

  return (
    <header className={`site ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="CodesFoundry home">
          <LogoMark className="mark" width={32} height={32} aria-hidden="true" />
          Codes<em>Foundry</em>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun width={16} height={16} />
          </button>
          <a href="#contact" className="btn btn-primary btn-sm">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .site {
          position: sticky;
          top: 0;
          z-index: 50;
          background: color-mix(in oklab, var(--ground) 82%, transparent);
          backdrop-filter: saturate(140%) blur(14px);
          -webkit-backdrop-filter: saturate(140%) blur(14px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s var(--ease);
        }
        .site.scrolled {
          border-color: var(--rule);
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* Vertical only — the .wrap class on this element sets the      */
          /* horizontal padding; a shorthand here would reset it to zero. */
          padding-top: 1.1rem;
          padding-bottom: 1.1rem;
          gap: 2rem;
        }
        /* .brand styles live in globals.css — outside styled-jsx to survive
           :global() quirks and reliably style the imported LogoMark SVG. */
        .nav-links {
          display: flex;
          gap: clamp(1.2rem, 2.5vw, 2.2rem);
          align-items: center;
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .nav-links a {
          position: relative;
          transition: color 0.2s var(--ease);
        }
        .nav-links a:hover {
          color: var(--text);
        }
        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s var(--ease);
        }
        .nav-links a:hover::after {
          transform: scaleX(1);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }
        .theme-toggle {
          background: transparent;
          border: 1px solid var(--rule-strong);
          border-radius: 999px;
          width: 34px;
          height: 34px;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
        }
        .theme-toggle:hover {
          color: var(--text);
          border-color: var(--text-muted);
        }
        @media (max-width: 720px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
