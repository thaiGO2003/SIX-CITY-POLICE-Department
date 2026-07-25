import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenText, CalendarClock } from "lucide-react";
import { notFound } from "next/navigation";
import { LawArticle } from "@/components/laws/law-article";
import { LawToc } from "@/components/laws/law-toc";
import { SourceBadge } from "@/components/laws/source-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { lawBySlug, laws } from "@/content/laws";

type LawPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return laws.map((law) => ({ slug: law.slug }));
}

export async function generateMetadata({ params }: LawPageProps): Promise<Metadata> {
  const { slug } = await params;
  const law = lawBySlug.get(slug);
  return law ? { title: law.title, description: law.summary } : {};
}

export default async function LawDetailPage({ params }: LawPageProps) {
  const { slug } = await params;
  const law = lawBySlug.get(slug);
  if (!law) notFound();
  const related = law.relatedSlugs.map((relatedSlug) => lawBySlug.get(relatedSlug)).filter(Boolean);

  return (
    <>
      <section className="law-hero">
        <div className="shell">
          <Link className="back-link" href="/laws"><ArrowLeft size={16} aria-hidden="true" /> Quay lại bộ luật</Link>
          <div className="law-hero__content">
            <div><p className="eyebrow">{law.categoryLabel}</p><h1>{law.title}</h1><p>{law.summary}</p></div>
            <div className="law-hero__meta"><SourceBadge source={law.source} /><p><CalendarClock size={15} aria-hidden="true" /> {law.lastReviewed}</p></div>
          </div>
        </div>
      </section>

      <section className="section law-layout">
        <div className="shell law-layout__grid">
          <LawToc law={law} />
          <LawArticle law={law} />
          <aside className="law-aside">
            <div><BookOpenText size={19} aria-hidden="true" /><p>Trạng thái nội dung</p><strong>{law.source.status === "pending-review" ? "Cần rà soát" : "Nguồn chuẩn"}</strong></div>
            <p>{law.source.status === "pending-review" ? "Có chi tiết chưa thống nhất trong nguồn. Không tự áp dụng mức giới hạn đến khi SCPD xác nhận." : "Nội dung này được chuẩn hóa từ Google Sites đã được chọn làm nguồn quy định."}</p>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="section section--featured related-laws">
          <div className="shell"><SectionHeading eyebrow="Nội dung liên quan" title="Tiếp tục tra cứu." />
            <div className="related-laws__list">{related.map((item) => item ? <Link href={`/laws/${item.slug}`} key={item.slug}><span>{item.categoryLabel}</span><strong>{item.title}</strong><ArrowRight size={17} aria-hidden="true" /></Link> : null)}</div>
          </div>
        </section>
      ) : null}
    </>
  );
}
