import { domains } from "@/content/site-data";
import { domainIcon } from "./icons";
import { Reveal, SectionHead } from "./ui";

export function Expertise() {
  return (
    <section id="expertise" className="section-pad" style={{ background: "var(--surface-2)" }}>
      <div className="wrap">
        <SectionHead
          num="02 / Expertise"
          title="Where the team has"
          italic="real depth."
          intro="Every agency says “full stack.” We've shipped in three domains where compliance, integrations, and trust actually matter."
        />

        <div className="domains">
          {domains.map((d, i) => {
            const Icon = domainIcon(d.icon);
            return (
              <Reveal
                as="article"
                key={d.title}
                delay={(i as 0 | 1 | 2)}
                className="domain"
              >
                <div className="domain-glyph" aria-hidden="true">
                  <Icon width={32} height={32} />
                </div>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <ul>
                  {d.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
