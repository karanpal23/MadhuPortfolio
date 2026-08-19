import { stats } from "@/content/site-data";
import { Reveal } from "./ui";

export function Stats() {
  return (
    <section className="stats-band">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i as 0 | 1 | 2 | 3)} className="stat">
              <div className="value">
                {s.italic ? <em>{s.italic}</em> : null}
                {s.value}
              </div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
