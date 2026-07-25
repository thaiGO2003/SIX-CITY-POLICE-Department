import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section"><div className="shell empty-state"><div className="empty-state__icon"><SearchX size={39} /></div><p className="eyebrow">404 / Không tìm thấy</p><h1>Không có<br /><em>hồ sơ này.</em></h1><p>Đường dẫn bạn mở không tồn tại hoặc nội dung đã được di chuyển. Hãy quay lại bộ luật để tiếp tục tra cứu.</p><Button href="/laws"><ArrowLeft size={17} aria-hidden="true" /> Quay lại bộ luật</Button></div></section>
  );
}
