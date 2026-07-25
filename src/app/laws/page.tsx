import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileWarning } from "lucide-react";
import { LawSearch } from "@/components/laws/law-search";
import { lawCategories } from "@/content/law-categories";
import { laws } from "@/content/laws";

export const metadata: Metadata = {
  title: "Bộ luật",
  description: "Tra cứu các quy định roleplay của Six City Police Department.",
};

export default function LawsPage() {
  return (
    <>
      <section className="page-hero page-hero--laws">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">SCPD Law Library</p>
            <h1>Bộ luật<br /><em>Six City.</em></h1>
          </div>
          <div className="page-hero__aside"><FileWarning size={25} aria-hidden="true" /><p>Mỗi trang luật hiển thị trạng thái và đường dẫn nguồn để việc tra cứu luôn có căn cứ.</p></div>
        </div>
      </section>

      <section className="section laws-directory">
        <div className="shell">
          <LawSearch laws={laws} />
          <div className="laws-directory__list">
            {lawCategories.map((category) => {
              const categoryLaws = laws.filter((law) => law.category === category.id);
              return (
                <section id={category.id} key={category.id} className="law-group">
                  <div className="law-group__heading">
                    <span>{category.index}</span>
                    <div><p className="eyebrow">Danh mục</p><h2>{category.label}</h2></div>
                    <small>{categoryLaws.length} quy định</small>
                  </div>
                  <div className="law-group__items">
                    {categoryLaws.map((law) => (
                      <Link href={`/laws/${law.slug}`} key={law.slug}>
                        <div><h3>{law.title}</h3><p>{law.summary}</p></div>
                        <ArrowRight size={20} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
