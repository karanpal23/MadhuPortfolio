import { services } from "@/content/site-data";
import { serviceIcon } from "./icons";
import { Reveal, SectionHead } from "./ui";

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="wrap">
        <SectionHead
          num="01 / Services"
          title="What we"
          italic="build."
          intro="Four core engagements — priced and scoped for teams that want a real partner, not a rented developer."
        />
        <div className="bento">
          {services.map((s, i) => {
            const Icon = serviceIcon(s.icon);
            return (
              <Reveal
                key={s.id}
                delay={(i as 0 | 1 | 2 | 3)}
                className={`b-card b-span-${s.span} ${s.rowSpan === 2 ? "row-span-2" : ""}`}
              >
                {s.tag && s.id === "custom" ? <span className="tag">{s.tag}</span> : null}
                <div>
                  <div className="icon" aria-hidden="true">
                    <Icon width={22} height={22} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                {s.meta ? (
                  <div className="feat">
                    {s.meta.map((m) => (
                      <div key={m}>{m}</div>
                    ))}
                  </div>
                ) : null}
                {s.tag && s.id !== "custom" ? <span className="tag">{s.tag}</span> : null}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
