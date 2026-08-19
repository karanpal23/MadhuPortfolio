import Image from "next/image";
import { photography, principles, team } from "@/content/site-data";
import { LinkedIn, GitHub, Mail } from "./icons";
import { Reveal, SectionHead } from "./ui";

export function Studio() {
  return (
    <section id="studio" className="section-pad studio-section">
      <div className="studio-bg" aria-hidden="true">
        <Image
          src={photography.studioBackdrop}
          alt=""
          fill
          sizes="100vw"
          className="studio-bg-photo"
        />
        <div className="studio-bg-veil" />
      </div>
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead
          num="05 / Studio"
          title="A small team that"
          italic="gives a damn."
          intro="Three engineers, one shared standard for what “done” means. We stay small on purpose — every project has a founder on it, and no work gets subcontracted out."
        />

        <div className="studio-intro">
          <Reveal className="studio-manifesto">
            <p>
              We started CodesFoundry because we were tired of watching <em>good ideas</em> get built badly —
              rushed, over-promised, then handed off to a rotating cast of contractors who never really
              understood the product.
            </p>
            <p>
              Our answer is <em>craft</em>: small team, senior only, deep involvement, and a bias for shipping.
            </p>
          </Reveal>
          <Reveal delay={1} className="studio-values">
            {principles.map((p) => (
              <div className="value" key={p.n}>
                <span className="n">{p.n}</span>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="team">
          {team.map((m, i) => (
            <Reveal
              as="article"
              key={m.initial}
              delay={(i as 0 | 1 | 2)}
              className="member"
            >
              <div className="avatar" aria-hidden="true">{m.initial}</div>
              <div>
                <p className="role">{m.role}</p>
                <h3>
                  {m.name} <em>{m.italic}</em>
                </h3>
              </div>
              <p className="bio">{m.bio}</p>
              <div className="social" aria-hidden="true">
                {m.links.map((l) => {
                  const I = l.kind === "linkedin" ? LinkedIn : l.kind === "github" ? GitHub : Mail;
                  return (
                    <a key={l.kind} href={l.href} aria-label={l.kind}>
                      <I width={16} height={16} />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
