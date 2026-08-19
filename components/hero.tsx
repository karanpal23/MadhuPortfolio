"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photography } from "@/content/site-data";
import { Reveal } from "./ui";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src={photography.heroBackdrop}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg-photo"
        />
        <div className="hero-bg-veil" />
        <div className="hero-bg-radial" />
        <div className="hero-bg-grid" />
      </div>

      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal>
              <span className="eyebrow hero-eyebrow">
                <span className="pulse" />
                A boutique studio <span className="dot" /> Est. 2026
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="display h-hero hero-headline">
                Software,
                <br />
                <em>made properly.</em>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead hero-lead">
                An independent engineering studio building custom applications, integrations, and
                long-term support for teams that expect craft.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">
                  Start a project <span className="arrow">→</span>
                </a>
                <a href="#work" className="btn btn-ghost">
                  See our work
                </a>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="hero-avail">
                <span className="pulse-sm" />
                Currently taking projects · <strong>2 slots for Q2 2026</strong>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2} className="hero-visual-wrap">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas || reduce) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0,
      H = 0;
    let particles: any[] = [];
    let raf = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn() {
      return {
        x: W * 0.5 + (Math.random() - 0.5) * W * 0.25,
        y: H * 0.6 + (Math.random() - 0.5) * H * 0.1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.3 - Math.random() * 0.8,
        life: 0,
        maxLife: 110 + Math.random() * 70,
        size: 0.8 + Math.random() * 1.6,
      };
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      if (particles.length < 42 && Math.random() > 0.35) particles.push(spawn());
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.005;
        const t = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - t) * 0.9;
        const hue = 20 - t * 15;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue}, 90%, ${60 + t * 20}%, ${alpha})`;
        ctx.shadowColor = `hsla(${hue}, 90%, 60%, ${alpha * 0.6})`;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.size * (1 - t * 0.5), 0, Math.PI * 2);
        ctx.fill();
        if (p.life >= p.maxLife) particles.splice(i, 1);
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="hero-visual" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="rings">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
      </div>
      <div className="ember" />
      <div className="hero-badge top-left">
        <span className="dot" /> Live · staging.codesfoundry.com
      </div>
      <div className="hero-badge bottom-right">
        <span>Build #</span>
        <strong>2026.02.14</strong>
      </div>
      <div className="ingot">CF</div>
    </div>
  );
}
