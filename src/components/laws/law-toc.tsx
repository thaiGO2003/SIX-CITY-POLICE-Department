import type { Law } from "@/content/types";

export function LawToc({ law }: { law: Law }) {
  return (
    <aside className="law-toc" aria-label="Mục lục bài luật">
      <p className="law-toc__label">Trong trang này</p>
      <ol>
        {law.sections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>
              <span>0{index + 1}</span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
