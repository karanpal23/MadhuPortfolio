import { rating, clientLabel } from "@/content/site-data";
import { clientLogos, StarFilled } from "./icons";
import { Reveal } from "./ui";

export function TrustBar() {
  const Logos = clientLogos();
  return (
    <section className="trust">
      <div className="wrap">
        <Reveal>
          <div className="trust-head">
            <div className="left">
              <span className="k">{clientLabel}</span>
            </div>
            <div className="rating">
              <div className="stars" aria-hidden="true">
                {Array.from({ length: rating.stars }).map((_, i) => (
                  <StarFilled key={i} width={14} height={14} />
                ))}
              </div>
              <div className="rating-text">
                <strong>{rating.label}</strong>
                <span>{rating.source}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="logo-strip" aria-label="Placeholder client logos">
            {Logos.map((Logo, i) => (
              <Logo key={i} className="client-logo" height={22} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
