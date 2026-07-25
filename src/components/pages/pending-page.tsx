import type { ReactNode } from "react";
import { CircleAlert } from "lucide-react";

type PendingPageProps = {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  details: string;
};

export function PendingPage({ icon, eyebrow, title, description, details }: PendingPageProps) {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero__grid">
          <div><p className="eyebrow">{eyebrow}</p><h1>{title}<br /><em>Đang cập nhật.</em></h1></div>
          <p>{description}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell empty-state">
          <div className="empty-state__icon">{icon}</div>
          <p className="eyebrow">Chưa mở liên kết</p>
          <h2>Thông tin đang được xác nhận.</h2>
          <p>{details}</p>
          <div className="empty-state__rule"><CircleAlert size={18} aria-hidden="true" /> Không dùng biểu mẫu, cổng thanh toán hoặc liên kết thay thế khi chưa có thông báo chính thức.</div>
        </div>
      </section>
    </>
  );
}
