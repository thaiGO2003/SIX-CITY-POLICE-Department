import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, ChevronRight, Compass, FileSearch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { lawCategories } from "@/content/law-categories";
import { laws } from "@/content/laws";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Six City Police Department",
  description: site.description,
};

export default function HomePage() {
  const featuredLaws = ["quyen-va-nghia-vu-canh-sat", "luat-phuong-tien", "pit-va-truy-duoi", "luat-hinh-su"]
    .map((slug) => laws.find((law) => law.slug === slug))
    .filter((law): law is (typeof laws)[number] => Boolean(law));

  return (
    <>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__flare" aria-hidden="true" />
        <div className="shell hero__content">
          <div className="hero__call-sign">SCPD · SIX CITY</div>
          <p className="eyebrow">Cổng thông tin cộng đồng</p>
          <h1>
            Honor.<br />
            <em>Duty.</em><br />
            Integrity.
          </h1>
          <p className="hero__intro">
            Bộ luật, quy tắc roleplay và thông tin nghiệp vụ được tổ chức để mọi tình huống tại Six City đều rõ ràng, nhất quán.
          </p>
          <div className="hero__actions">
            <Button href="/laws">Tra cứu bộ luật <ArrowRight size={18} aria-hidden="true" /></Button>
            <Button href="/rules" variant="silver">Xem quy tắc chính</Button>
          </div>
        </div>
        <div className="hero__insignia" aria-hidden="true">
          <ShieldCheck />
          <span>SCPD</span>
          <small>Est. Six City</small>
        </div>
        <div className="shell hero__ledger" aria-label="Tóm tắt cổng thông tin">
          <div><span>01</span><p>Nguồn luật<br /><strong>Được chuẩn hóa</strong></p></div>
          <div><span>02</span><p>Tra cứu<br /><strong>Mobile-first</strong></p></div>
          <div><span>03</span><p>Thương hiệu<br /><strong>Six City SCPD</strong></p></div>
        </div>
      </section>

      <section className="section section--categories">
        <div className="shell">
          <SectionHeading
            eyebrow="Bộ luật SCPD"
            title="Tìm đúng quy định trước khi vào tình huống."
            description="Các nhóm luật được phân loại theo bối cảnh thực tế, từ nghiệp vụ cơ bản đến tình huống truy đuổi và an ninh."
          />
          <div className="category-list">
            {lawCategories.map((category) => {
              const items = laws.filter((law) => law.category === category.id);
              return (
                <Link key={category.id} href={`/laws#${category.id}`} className="category-row">
                  <span className="category-row__index">{category.index}</span>
                  <div>
                    <h3>{category.label}</h3>
                    <p>{items.length} mục quy định</p>
                  </div>
                  <ArrowRight aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--featured">
        <div className="shell">
          <div className="featured-heading">
            <SectionHeading eyebrow="Điểm vào nhanh" title="Những điều cần nắm trước." />
            <Link className="text-link" href="/laws">Tất cả bộ luật <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="featured-list">
            {featuredLaws.map((law, index) => (
              <Link key={law.slug} className="feature-law" href={`/laws/${law.slug}`}>
                <span>0{index + 1}</span>
                <div>
                  <p>{law.categoryLabel}</p>
                  <h3>{law.title}</h3>
                  <small>{law.summary}</small>
                </div>
                <ChevronRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--process">
        <div className="shell process-grid">
          <div>
            <p className="eyebrow">Quy trình thông tin</p>
            <h2>Quy định phải rõ nguồn trước khi được áp dụng.</h2>
          </div>
          <ol>
            <li><span>01</span><div><strong>Đối chiếu</strong><p>Nội dung luật được bám theo nguồn Google Sites đã chọn.</p></div></li>
            <li><span>02</span><div><strong>Rà soát</strong><p>Điểm mâu thuẫn hoặc chưa chốt luôn được đánh dấu rõ ràng.</p></div></li>
            <li><span>03</span><div><strong>Tra cứu</strong><p>Mỗi trang luật có mục lục, liên kết liên quan và trạng thái nguồn.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section section--closing">
        <div className="shell closing-panel">
          <Compass size={30} aria-hidden="true" />
          <div>
            <p className="eyebrow">SCPD Information Desk</p>
            <h2>Đã sẵn sàng tìm quy định?</h2>
            <p>Bắt đầu từ bộ luật hoặc mở phần Rules để xem các nội dung thường gặp.</p>
          </div>
          <div className="closing-panel__actions">
            <Button href="/laws"><BookOpenText size={18} aria-hidden="true" /> Bộ luật</Button>
            <Button href="/support" variant="quiet"><FileSearch size={17} aria-hidden="true" /> Hỗ trợ</Button>
          </div>
        </div>
      </section>
    </>
  );
}
