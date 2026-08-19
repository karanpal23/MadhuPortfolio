import { techStack } from "@/content/site-data";
import { techIcon } from "./icons";
import { Reveal } from "./ui";

export function Marquee() {
  return (
    <section className="marquee">
      <div className="lead-copy">
        <Reveal>
          <span className="eyebrow">
            07 <span className="dot" /> Stack
          </span>
          <h2>
            The tools we <em>reach for.</em>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p>
            Pragmatic choices — battle-tested at every layer. We pick the stack that fits the project, not
            the one we're comfortable with.
          </p>
        </Reveal>
      </div>

      <MarqueeRow items={techStack[0]} duration={42} />
      <MarqueeRow items={techStack[1]} duration={55} reverse />
    </section>
  );
}

function MarqueeRow({
  items,
  duration,
  reverse,
}: {
  items: { name: string; kind: string }[];
  duration: number;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div
        className="marquee-track"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {doubled.map((item, i) => {
          const Icon = techIcon(item.kind);
          return (
            <span className="marquee-item" key={`${item.kind}-${i}`}>
              {Icon ? (
                <span className="tech-glyph" aria-hidden="true">
                  <Icon width={20} height={20} />
                </span>
              ) : (
                <span className="dot" />
              )}
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
