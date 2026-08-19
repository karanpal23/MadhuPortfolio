import Image from "next/image";
import { cases, photography } from "@/content/site-data";
import { mockupFor } from "./icons";
import { Reveal, SectionHead } from "./ui";

export function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="wrap">
        <SectionHead
          num="04 / Work"
          title="Recent"
          italic="projects."
          intro="Selected engagements from the team's history — anonymized where clients require it, described in the shape that matters: problem, approach, outcome."
        />

        <div className="work-list">
          {cases.map((c, i) => {
            const Mockup = mockupFor(c.mockup);
            const cover = photography.caseCovers[c.slug];
            const flipped = i % 2 === 1;
            return (
              <Reveal as="article" key={c.slug} className={`case ${flipped ? "flip" : ""}`}>
                <div className="case-visual" aria-hidden="true">
                  <div className="case-photo">
                    <Image
                      src={cover}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="case-photo-img"
                    />
                    <div className="case-photo-veil" />
                  </div>
                  <div className="case-mock">
                    <Mockup width="100%" />
                  </div>
                </div>
                <div className="case-copy">
                  <span className="tag">{c.tag}</span>
                  <h3>
                    {c.title} <em>{c.italic}</em>
                    {c.tail ? ` ${c.tail}` : ""}
                  </h3>
                  <p>{c.body}</p>
                  <div className="stack">
                    {c.stack.map((chip) => (
                      <span className="chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="case-metrics">
                    {c.metrics.map((m) => (
                      <div className="metric" key={m.label}>
                        <div className="val">
                          {m.italic ? <em>{m.italic}</em> : null}
                          {m.val}
                        </div>
                        <div className="label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
