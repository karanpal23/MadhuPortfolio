import { process as steps } from "@/content/site-data";
import { Reveal, SectionHead } from "./ui";

export function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="wrap">
        <SectionHead
          num="03 / Process"
          title="Four stages."
          italic="No surprises."
          intro="The same rhythm on every engagement — so you always know where a project stands and where the money's going."
        />

        <Reveal>
          <div className="process">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <h4>
                  {s.title}
                  <br />
                  <em>{s.italic}</em>
                </h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
