"use client";

import { forwardRef, useEffect, useRef } from "react";

/* --- Reveal wrapper (IntersectionObserver) ---------------------------- */

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({ as: Tag = "div", delay = 0, className = "", children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-40px 0px -40px 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `d${delay}` : "";
  const Component = Tag as any;
  return (
    <Component ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Component>
  );
}

/* --- Section header ------------------------------------------------- */

export function SectionHead({
  num,
  title,
  italic,
  tail,
  intro,
}: {
  num: string;
  title: string;
  italic: string;
  tail?: string;
  intro: string;
}) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="num">{num}</span>
        <h2 className="display h-section">
          {title} <em>{italic}</em>
          {tail ? ` ${tail}` : ""}
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <p>{intro}</p>
      </Reveal>
    </div>
  );
}

/* --- Button ---------------------------------------------------------- */

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  arrow?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", arrow, className = "", children, ...rest },
  ref
) {
  const cls = ["btn", variant === "primary" ? "btn-primary" : "btn-ghost", size === "sm" ? "btn-sm" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
      {arrow ? <span className="arrow">→</span> : null}
    </button>
  );
});

/* --- Link that looks like a button (for anchors) --------------------- */

type LinkBtnProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  arrow?: boolean;
};

export function LinkButton({
  variant = "primary",
  size = "md",
  arrow,
  className = "",
  children,
  ...rest
}: LinkBtnProps) {
  const cls = ["btn", variant === "primary" ? "btn-primary" : "btn-ghost", size === "sm" ? "btn-sm" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <a className={cls} {...rest}>
      {children}
      {arrow ? <span className="arrow">→</span> : null}
    </a>
  );
}
