import type { Metadata } from "next";
import { HeartHandshake } from "lucide-react";
import { PendingPage } from "@/components/pages/pending-page";

export const metadata: Metadata = { title: "Donate", description: "Thông tin đóng góp cho cộng đồng SCPD." };

export default function DonatePage() {
  return <PendingPage icon={<HeartHandshake size={39} />} eyebrow="Community support" title="Donate" description="Cổng đóng góp chính thức chưa được công bố trên website." details="Khi SCPD xác nhận cổng thanh toán, trang này sẽ nêu rõ mục đích, nguyên tắc minh bạch và đường dẫn chính thức." />;
}
