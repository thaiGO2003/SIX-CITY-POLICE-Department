import type { Law } from "@/content/types";

export function LawArticle({ law }: { law: Law }) {
  return (
    <article className="law-article">
      {law.sections.map((section, index) => (
        <section id={section.id} key={section.id}>
          <p className="article-index">0{index + 1}</p>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}
