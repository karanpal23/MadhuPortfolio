import Image from "next/image";
import { photography, posts } from "@/content/site-data";
import { Reveal, SectionHead } from "./ui";

export function Journal() {
  return (
    <section id="journal" className="section-pad">
      <div className="wrap">
        <SectionHead
          num="08 / Journal"
          title="Field"
          italic="notes."
          intro="Deep-dives from the engineering team — the kind of writing that helps other developers, and shows prospective clients how we think."
        />

        <div className="journal">
          {posts.map((p, i) => (
            <Reveal
              as="article"
              key={p.slug}
              delay={(i as 0 | 1 | 2)}
              className="post"
            >
              <div className="cover">
                <Image
                  src={photography.journalCovers[p.slug]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="cover-photo"
                />
                <div className="cover-veil" />
                <span className="cover-tag">{p.category}</span>
              </div>
              <div className="post-body">
                <div className="meta">
                  <span>{p.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>Engineering</span>
                </div>
                <h4>
                  {p.title} <em>{p.italic}</em>
                  {p.tail ? ` ${p.tail}` : ""}
                </h4>
                <p>{p.excerpt}</p>
                <span className="read">Read article →</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
