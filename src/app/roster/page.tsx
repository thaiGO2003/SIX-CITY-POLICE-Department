import type { Metadata } from "next";
import { BadgeInfo, UsersRound } from "lucide-react";
import { rosterStatus } from "@/content/roster";

export const metadata: Metadata = { title: "Roster", description: "Danh sách tổ chức và nhân sự SCPD." };

export default function RosterPage() {
  return (
    <>
      <section className="page-hero"><div className="shell page-hero__grid"><div><p className="eyebrow">SCPD Organization</p><h1>Roster &amp;<br /><em>đơn vị.</em></h1></div><p>Thông tin nhân sự công khai được quản lý cẩn trọng để đảm bảo đúng trạng thái và cấp bậc hiện hành.</p></div></section>
      <section className="section"><div className="shell empty-state"><div className="empty-state__icon"><UsersRound size={38} /></div><p className="eyebrow">Roster</p><h2>{rosterStatus.title}</h2><p>{rosterStatus.description}</p><div className="empty-state__rule"><BadgeInfo size={18} aria-hidden="true" /> Chỉ công bố nhân sự, cấp bậc và đơn vị sau khi có dữ liệu được phép hiển thị.</div></div></section>
    </>
  );
}
