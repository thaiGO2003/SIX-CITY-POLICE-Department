import type { Metadata } from "next";
import { MessageSquareText } from "lucide-react";
import { PendingPage } from "@/components/pages/pending-page";

export const metadata: Metadata = { title: "Hỗ trợ", description: "Thông tin hỗ trợ và phản hồi SCPD." };

export default function SupportPage() {
  return <PendingPage icon={<MessageSquareText size={39} />} eyebrow="Support desk" title="Hỗ trợ" description="Kênh phản hồi, khiếu nại và hỗ trợ chính thức đang được SCPD cập nhật." details="Trong bản phát hành này, hãy đối chiếu nguồn luật trực tiếp trước khi gửi phản hồi. Kênh liên hệ sẽ được bổ sung sau khi quản trị SCPD xác nhận." />;
}
