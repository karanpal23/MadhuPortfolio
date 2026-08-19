import { testimonials } from "@/content/site-data";
import { Quote, StarFilled } from "./icons";
import { Reveal, SectionHead } from "./ui";

export function Testimonials() {
  return (
    <section id="voices" className="section-pad">
      <div className="wrap">
        <SectionHead
          num="06 / Voices"
          title="What clients"
          italic="say."
          intro="Selected quotes from recent engagements. Names anonymized on request — the pattern repeats across every project we run."
        />

        <div className="testimonials">
          {testimonials.map((t, i) => (
            <Reveal
              as="article"
              key={t.name}
              delay={(i as 0 | 1 | 2)}
              className="testimonial"
            >
              <div className="quote-mark" aria-hidden="true">
                <Quote width={26} height={26} />
              </div>
              <div className="stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarFilled key={s} width={12} height={12} />
                ))}
              </div>
              <blockquote>
                {t.quote.split(t.emphasis)[0]}
                <em>{t.emphasis}</em>
                {t.quote.split(t.emphasis)[1] ?? ""}
              </blockquote>
              <div className="who">
                <div
                  className="avatar"
                  aria-hidden="true"
                  style={{ background: `linear-gradient(135deg, ${t.gradient[0]} 0%, ${t.gradient[1]} 100%)` }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
