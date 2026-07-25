import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookMarked, CircleAlert, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Rules",
  description: "Các điểm quy tắc cần biết trước khi tham gia tình huống SCPD.",
};

const rules = [
  ["Trước tình huống", "Mang giấy tờ cần thiết, hiểu bối cảnh RP và không tạo tình huống bằng hành vi khiêu khích."],
  ["Khi gặp SCPD", "Giữ bình tĩnh, tuân theo hiệu lệnh hợp lệ, nhường đường cho phương tiện ưu tiên và không cản trở hiện trường."],
  ["Khi bị gián đoạn", "Thông báo khi crash, AFK hoặc có việc gấp; quay lại để tiếp tục tình huống theo hướng dẫn."],
  ["Khi có thắc mắc", "Đọc đúng trang luật liên quan, đối chiếu trạng thái nguồn và chờ xác nhận với những nội dung đang rà soát."],
];

export default function RulesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero__grid"><div><p className="eyebrow">Rules at a glance</p><h1>Giữ tình huống<br /><em>đúng tinh thần RP.</em></h1></div><p>Phần tóm tắt này là điểm bắt đầu, không thay thế cho các trang luật chi tiết. Hãy mở nội dung liên quan trước khi quyết định trong tình huống.</p></div>
      </section>
      <section className="section"><div className="shell rules-grid">
        {rules.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}
      </div></section>
      <section className="section section--featured"><div className="shell rule-callout"><ShieldCheck size={26} aria-hidden="true" /><div><p className="eyebrow">Nguồn chuẩn</p><h2>Quy định luôn đi cùng bối cảnh.</h2><p>Đối chiếu luật phương tiện, truy đuổi, giao tranh hoặc phó bản đúng với tình huống đang diễn ra.</p></div><Button href="/laws">Tra cứu bộ luật <BookMarked size={18} aria-hidden="true" /></Button></div></section>
      <section className="section"><div className="shell pending-note"><CircleAlert size={20} aria-hidden="true" /><p>Một số chi tiết có thể cần quản trị SCPD xác nhận. Những nội dung này luôn có nhãn “Cần rà soát” trên trang luật.</p><Link href="/laws/roleplay-cong-dan">Xem ví dụ <ArrowRight size={15} aria-hidden="true" /></Link></div></section>
    </>
  );
}
