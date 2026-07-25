import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileText, Landmark, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Về SCPD",
  description: "Giới thiệu cổng thông tin Six City Police Department.",
};

const principles = [
  { title: "Honor", vietnamese: "Danh dự", text: "Giữ lời nói và hành động nhất quán trong mọi tình huống roleplay." },
  { title: "Duty", vietnamese: "Trách nhiệm", text: "Ưu tiên quy trình, sự an toàn và trải nghiệm chung của cộng đồng." },
  { title: "Integrity", vietnamese: "Chính trực", text: "Minh bạch về nguồn luật, quyết định và những mục cần rà soát." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">About SCPD</p>
            <h1>Hành động có nguyên tắc.<br /><em>Thông tin có căn cứ.</em></h1>
          </div>
          <p>Six City Police Department là không gian thông tin dành cho cộng đồng roleplay, nơi các quy định được trình bày rõ nguồn để hỗ trợ những tình huống công bằng và nhất quán.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell about-statement">
          <div className="about-statement__symbol" aria-hidden="true"><Shield /></div>
          <div>
            <p className="eyebrow">Tuyên ngôn</p>
            <h2>Không phải là một danh sách luật dài. Đây là một chuẩn tham chiếu chung.</h2>
            <p>Website được xây dựng để công dân, sĩ quan và quản trị viên có thể tìm đúng quy định trong ít thao tác nhất. Mỗi nội dung được gắn nguồn và mọi điểm chưa chốt được phân biệt thay vì tự suy diễn.</p>
          </div>
        </div>
      </section>

      <section className="section section--featured">
        <div className="shell">
          <SectionHeading eyebrow="Nền tảng vận hành" title="Ba giá trị định hình SCPD." />
          <div className="principle-list">
            {principles.map((principle, index) => (
              <article key={principle.title}>
                <span>0{index + 1}</span>
                <p>{principle.vietnamese}</p>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell info-pair">
          <div>
            <Landmark size={22} aria-hidden="true" />
            <h2>Thông tin được tổ chức theo bối cảnh.</h2>
            <p>Quyền và nghĩa vụ, giao thông, vũ khí, truy đuổi và các phó bản được chia thành từng trang để dễ đọc trên cả desktop lẫn điện thoại.</p>
          </div>
          <div>
            <FileText size={22} aria-hidden="true" />
            <h2>Quy định có provenance rõ ràng.</h2>
            <p>Google Sites là nguồn chuẩn đã được lựa chọn. Nội dung còn mâu thuẫn hoặc thiếu xác nhận sẽ được gắn nhãn cần rà soát.</p>
          </div>
        </div>
      </section>

      <section className="section section--closing">
        <div className="shell closing-panel">
          <CheckCircle2 size={30} aria-hidden="true" />
          <div><p className="eyebrow">Explore the handbook</p><h2>Xem bộ luật SCPD.</h2></div>
          <Button href="/laws">Mở bộ luật <ArrowRight size={18} aria-hidden="true" /></Button>
        </div>
      </section>
    </>
  );
}
