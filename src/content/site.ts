import type { NavigationItem } from "@/content/types";

export const site = {
  name: "Six City Police Department",
  shortName: "SCPD",
  motto: "Honor · Duty · Integrity",
  description:
    "Cổng thông tin và bộ luật roleplay chính thức của Six City Police Department.",
  sourceUrl: "https://docs.google.com/document/d/1m177swU1bpb5DH-IOQvIOsa-wrkD2-xdAgOICjTRTis/edit",
};

export const navigation: NavigationItem[] = [
  { href: "/", label: "Trang chủ", description: "Tổng quan SCPD" },
  { href: "/laws", label: "Bộ luật", description: "Tra cứu quy định" },
  { href: "/rules", label: "Rules", description: "Điểm cần biết" },
  { href: "/roster", label: "Roster", description: "Tổ chức và nhân sự" },
  { href: "/join-us", label: "Join us", description: "Gia nhập SCPD" },
  { href: "/donate", label: "Donate", description: "Đóng góp cộng đồng" },
];

export const quickLinks = [
  { href: "/join-us", label: "Join us" },
  { href: "/roster", label: "Roster" },
  { href: "/laws", label: "Laws" },
  { href: "/rules", label: "Rules" },
  { href: "/donate", label: "Donate" },
];
