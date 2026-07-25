import type { Metadata } from "next";
import { ClipboardPlus } from "lucide-react";
import { PendingPage } from "@/components/pages/pending-page";

export const metadata: Metadata = { title: "Join us", description: "Thông tin tuyển dụng Six City Police Department." };

export default function JoinUsPage() {
  return <PendingPage icon={<ClipboardPlus size={39} />} eyebrow="SCPD Recruitment" title="Join us" description="Quy trình tuyển dụng và kênh nộp đơn chính thức đang được SCPD hoàn thiện." details="Trang này sẽ hiển thị điều kiện, lịch tuyển dụng, hướng dẫn chuẩn bị và liên kết nộp đơn sau khi được phê duyệt." />;
}
